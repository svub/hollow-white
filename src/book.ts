import { Book } from "./shared/entities";

const book: Book = (({
 "title": "iBook Example",
 "chapters": [
  {
   "id": "1",
   "title": "Chapter 1",
   "sections": [
    {
     "id": "001",
     "title": "Section 1",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Hey hello! This is an ibook example. You can find the original text with commands and mark up <a href=\"https://docs.google.com/document/d/e/2PACX-1vT5bShbhPzfbS6kkR30qALUyVy7ptxTOxH9E9cBO7mlpSuJqpwhR3mvuLih4DQoUQbDQISUNA9QAbtv/pub\">here</a>. It contains some example text, states, items, styling, and conditionals.</p>"
      },
      {
       "type": "state",
       "id": "example",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>More text after first state change (see console)</p>"
      },
      {
       "type": "addItem",
       "id": "sandbox"
      },
      {
       "type": "paragraph",
       "text": "<p>More text after sandbox item. Followed by an item that has not been configured. You'll see this kind of error message:</p>"
      },
      {
        "type": "addItem",
        "id": "missing"
       },
      {
       "type": "paragraph",
       "text": "<p>Formatting is also supported via Markdown. For example <em>emphasis</em> (&lt;em&gt; tag in HTML) and <strong>bold</strong> (&lt;b&gt; tag) - all formattings can be adjusted with CSS. Add <a href=\"https://github.com/svub/ibook-app\">links</a> via Markdown.</p>"
      },
      {
       "type": "if",
       "condition": "state example > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Example state &gt; 0</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "state example > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Example state &lt;= 0</p>"
        }
       ]
      },
      {
       "type": "style",
       "classes": "special",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Making a block with special styling (CSS)</p>"
        }
       ]
      }
     ],
     "next": [
      {
       "title": "Special link: go to credits",
       "id": "credits",
       "data": ""
      },
      {
       "title": "Share this!",
       "id": "share",
       "data": "https://github.com/svub/ibook-app"
      },
      {
       "title": "next section",
       "chapterId": "1",
       "sectionId": "002"
      }
     ]
    },
    {
     "id": "002",
     "title": "Section 2",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Nothing here yet</p>"
      }
     ],
     "next": [
      {
       "title": "start over again",
       "id": "reset",
       "data": ""
      },
      {
       "title": "go to home screen",
       "id": "start",
       "data": ""
      },
      {
       "title": "open options screen",
       "id": "options",
       "data": ""
      }
     ]
    }
   ]
  }
 ],
 "specials": {
  "credits": {
   "id": "credits",
   "title": "Credits",
   "elements": [
    {
     "type": "paragraph",
     "text": "<p>A special section with info about the authors.</p>"
    }
   ],
   "next": []
  }
 },
 "config": {
  "items": [
   {
    "id": "sandbox",
    "category": "boxes",
    "mediaUrl": "link",
    "title": "A sandbox to play in",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>A <em>sandback</em> with <strong>toys</strong> and <a href=\"https://test.com\">markdown</a> enabled.</p>"
     },
     {
      "type": "paragraph",
      "text": "<p>The item can have three types: link, audio, and video. For video, use the WebM format to support all browsers.</p>"
     },
     {
      "type": "paragraph",
      "text": "<p>Go play!</p>"
     }
    ]
   }
  ],
  "options": [
   {
    "id": "theme",
    "title": "Theme",
    "choices": [
     {
      "id": "light-theme",
      "title": "Light",
      "default": true
     },
     {
      "id": "dark-theme",
      "title": "Dark",
      "default": false
     }
    ]
   }
  ],
  "feedbackMode": {
   "enabled": true,
   "feedbackLink": "mailto:sven.buschbeck@gmail.com"
  },
  "language": "en"
 }
}) as unknown) as Book;

export default book;
