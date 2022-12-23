import store from "@/store";

export default function (text: string) {
  fetch(`${location.protocol}//schwarzerkreis.de/log.php?${text}`).catch(() => true);
}