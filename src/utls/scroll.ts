export function scrollContainer() {
  return document.documentElement;
}

// cf. https://stackoverflow.com/a/55686711/548955
export function scrollUpThen(callback?: Function) {
  const container = scrollContainer();
  const onScroll = function () {
    if (container.scrollTop < 1) {
      container.removeEventListener('scroll', onScroll);
      callback?.();
    }
  }
  container.addEventListener('scroll', onScroll)
  onScroll()
  container.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

export function scrollTo(top: number, left = 0, behavior: ScrollBehavior = 'smooth') {
  scrollContainer().scrollTo({ top, left, behavior });
}

