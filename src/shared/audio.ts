export function paragraphFilename(chapterId: string, sectionId: string, paragraphHash: string) {
  return `${chapterId}-${sectionId}-paragraph-${paragraphHash}.mp3`
}


export function titleFilename(chapterId: string, sectionId: string) {
  return `${chapterId}-${sectionId}-title.mp3`
}

export function decisionFilename(chapterId: string, sectionId: string) {
  return `${chapterId}-${sectionId}-decision.mp3`
}