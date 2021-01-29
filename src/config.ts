import { Config } from './shared/entities';

const config: Config = {
  items: [
    {
      "id": "sandbox",
      "title": "A sandbox to play in",
      "thumbnail": "URL to thumbnail file",
      "media": "URL to media file",
      "category": "category (optional)"
    },
  ],
  options: [
    {
      id: "theme",
      title: "Theme",
      choices: [
        {
          id: 'light-theme',
          title: "Light",
        },
        {
          id: 'dark-theme',
          title: "Dark",
        }
      ]
    }
  ],
  feedbackMode: true,
  feedbackLink: 'https://test.com',
};

export default config;
