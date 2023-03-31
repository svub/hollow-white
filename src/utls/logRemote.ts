import store from "@/store";
import { tryPromise } from "./fp";

const api = true;
const ID = 'G-3L6KHGSJ1H';
const validityDays = 30; // user ID will be renewed after this time, but also if IP changes.
const campaignId = ''; // optional if deploying to track specific campaign

function hash(str, seed = 0) { // cyrb53
  let h1 = 0xdeadbeef ^ seed,
      h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507) ^ Math.imul(h2 ^ h2 >>> 13, 3266489909);
  h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507) ^ Math.imul(h1 ^ h1 >>> 13, 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16);
}

export const userId = (async () => {
  const ip = await tryPromise(async () => (await fetch("https://api.ipify.org")).text(), '');
  const validityInterval = Math.round (new Date().getTime() / 1000 / 3600 / 24 / validityDays);
  const idString = ip + ";" + window.location.host + ";" + navigator.userAgent + ";" + navigator.language + ";" + validityInterval;
  console.log(idString);
  return hash(idString);
})();

// declare const ga: Function;
// function proprietaryGaEvent(eventCategory: string, eventAction: string, eventLabel: string) {
//   const data = {
//     hitType: 'event',
//     eventCategory,
//     eventAction,
//     eventLabel,
//   };
//   ga('send', data);
// }

// url: www.google-analytics.com
// method: GET
// payload:{
//  v:1, //this must be 1
//  t:pageview, //hit type (pageview , event, social vs vs.)
//  tid: UA-XXX, //your tracking id
//  cid: xxxx //user id (this is randomly generated)
// }
async function directGoogleAnalytics(event = 'pageview', more: {}) {
  // https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters
  // https://web.archive.org/web/20230322215814/https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters
  const source = location.href.indexOf('preview') >= 0 
  ? 'preview' 
  : location.href.indexOf('localhost') >= 0
  ? 'testing'
  : 'live';
  // notes: try uid instead of cid
  // Parameters: GA ID, user ID, event type, source for separating, anonymize IP, no personalized ads
  // const url = `//www.google-analytics.com/collect?v=1&tid=${ID}&cid=${await userId}&t=${event}&ds=${source}&aip=1&npa=1`
  // https://web.archive.org/web/20230322215814/https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters
  const params = new URLSearchParams({
    v: '1', // GA version, current is 4
    tid: ID, // GA ID
    cid: await userId,
    t: event, // hit type, required
    ci: campaignId,
    ds: source,
    dh: document.location.origin, // document host name
    dt: '', // doc title
    aip: '1', // anonymize IP
    npa: '1', // don't use for personalized ads
    ...more,
  }).toString();
  const url = `//www.google-analytics.com/collect?${params}`
  console.log('DGA url', url);
  await fetch(url);
}

declare const gtag: Function;
let gTagConfig: Function | undefined = async () => {
  // GA and gTag do not respect user settings -> disable all cookies by hacking the JS env
  Object.defineProperty(document, 'cookie', {
    get: function() { return ''; },
    set: function(c) { console.log('Nope', c); }
  });
  gtag('config', ID, {
    /* eslint-disable @typescript-eslint/camelcase */
    client_id: await userId,
    send_page_view: true,
    // all below seem to be ignored. Google does not provide any useful documentation
    anonymize_ip: true, 
    storage: 'none',
    client_storage: 'none', // https://support.google.com/analytics/thread/39104158?hl=en&msgid=41685874
    // from gTag source code
    ad_storage: 'none', 
    analytics_storage: 'none',
    cookie_expires: 1,
    // https://docs.tealium.com/client-side-tags/google-analytics-gtagjs-tag/
    allow_google_signals: false, 
    allow_ad_personalization_signals: false,
  });
  // https://developers.google.com/tag-platform/gtagjs/reference#consent
  gtag('consent', 'update', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'denied',
  });
  gTagConfig = undefined;
};
async function googleTag(category: string, action: string, label: string) {
  if (gTagConfig) await gTagConfig();
  category = encodeURIComponent(category);
  action = encodeURIComponent(action);
  label = encodeURIComponent(label);
  // let data;
  // gtag('event', category, data = {
  //   action,
  //   label,
  //   cid: await userId,
  //   // testcid: await userId,
  // });
  gtag('event', 'page_view', {
    page_location: category + '_' + action,
    page_title: label,
    category,
    action,
    label,
  });
  gtag('event', 'c-' + category, {
    category,
    action,
    label,
  });
}

export function logAction (eventCategory: string, eventAction: string, eventLabel: string) {
  console.log('log', eventCategory, eventAction, eventLabel);
  // proprietaryGaEvent(eventCategory, eventAction, eventLabel);
  // directGoogleAnalytics('event', {
  //   ec: eventCategory,
  //   ea: eventAction,
  //   el: eventLabel,
  // });
  googleTag(eventCategory, eventAction, eventLabel);
}
export default logAction;

// export function logPage (eventCategory: string, eventAction: string, eventLabel: string) {
// }

