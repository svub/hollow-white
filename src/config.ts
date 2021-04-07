import { Config } from './shared/entities';

const config: Config = {
  "items": [
    {
      "id": "matches",
      "title": "matches",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
    {
      "id": "ghostfellows",
      "title": "ghostfellows",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
    {
      "id": "lordneon",
      "title": "lordneon",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
    {
      "id": "photo-ella",
      "title": "photo-ella",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
    {
      "id": "first-aid",
      "title": "first-aid",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
    {
      "id": "twinpeaks",
      "title": "twinpeaks",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
    {
      "id": "coin",
      "title": "coin",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
    {
      "id": "rose",
      "title": "rose",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
    {
      "id": "cheesecake",
      "title": "cheesecake",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
    {
      "id": "gin-mule",
      "title": "gin-mule",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
    {
      "id": "gin-tonic",
      "title": "gin-tonic",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
    {
      "id": "ghostfellows-albert",
      "title": "ghostfellows-albert",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
    {
      "id": "splitter-recorder",
      "title": "splitter-recorder",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
    {
      "id": "splitter-judy",
      "title": "splitter-judy",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
    {
      "id": "ink",
      "title": "ink",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
    {
      "id": "pete-letter",
      "title": "pete-letter",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
    {
      "id": "secret-message",
      "title": "secret-message",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
    {
      "id": "chest",
      "title": "chest",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
    {
      "id": "ringofrose",
      "title": "ringofrose",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
    {
      "id": "bracelet",
      "title": "bracelet",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
    {
      "id": "heart",
      "title": "heart",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
    {
      "id": "maevia",
      "title": "maevia",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
    {
      "id": "propaganda",
      "title": "propaganda",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
    {
      "id": "fox",
      "title": "fox",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
    {
      "id": "chest-old",
      "title": "chest-old",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
    {
      "id": "key",
      "title": "key",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    }
  ],
  options: [{
    id: 'theme',
    title: 'Design',
    choices: [{
      id: 'light-theme',
      title: '',
    }, {
      id: 'dark-theme',
      title: '',
      default: true,
    }]
  }, {
    id: 'font',
    title: 'Textstil',
    choices: [{
      id: 'font-sans',
      title: '',
    }, {
      id: 'font-serif',
      title: '',
      default: true,
    }]
  }, {
    id: 'size',
    title: 'Textgröße',
    choices: [{
      id: 'size-m',
      title: '',
      default: true,
    }, {
      id: 'size-l',
      title: '',
    // }, {
    //   id: 'size-xl',
    //   title: '',
    }]
  }],
  feedbackMode: !!['localhost', '-preview', '-testing'].find(test => location.href.indexOf(test) >= 0)
};

export default config;
