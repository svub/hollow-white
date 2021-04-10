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
       "text": "<p>Example text</p>"
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
       "text": "<p>More text after sandbox item.</p>"
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
     "next": []
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
    "title": "A sandbox to play in",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>A <em>sandback</em> with <strong>toys</strong> and <a href=\"https://test.com\">markdown</a> enabled.</p>"
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
