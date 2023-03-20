/* global ga */
import store from "@/store";

declare const ga: Function;

export default function (eventCategory: string, eventAction: string, eventLabel: string) {
  const data = {
    hitType: 'event',
    eventCategory,
    eventAction,
    eventLabel,
  };
  ga('send', data);
  console.log('log', data);
}