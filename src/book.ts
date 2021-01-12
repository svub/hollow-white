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
       "text": "Example text"
      },
      {
       "type": "state",
       "id": "example",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "More text after first state change (see console)"
      },
      {
       "type": "addItem",
       "id": "sandbox"
      },
      {
       "type": "paragraph",
       "text": "More text after sandbox item."
      },
      {
       "type": "paragraph",
       "text": "Formatting is also supported via Markdown. For example *emphasis* (&lt;em&gt; tag in HTML), _underlined_ (&lt;u&gt; tag), /italics/ (&lt;i&gt; tag) - all formattings can be adjusted with CSS."
      },
      {
       "type": "if",
       "condition": "state example > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "Example state > 0"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "state example > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "Example state <= 0"
        }
       ]
      },
      {
       "type": "style",
       "classes": "special",
       "elements": [
        {
         "type": "paragraph",
         "text": "Making a block with special styling (CSS)"
        }
       ]
      }
     ],
     "next": [
      {
       "title": "Special link: go to credits",
       "id": "credits"
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
       "text": "Nothing here yet"
      }
     ],
     "next": []
    }
   ]
  }
 ],
 "specials": [
  {
   "id": "credits",
   "title": "A special chapter that with info about the authors",
   "elements": [],
   "next": []
  }
 ]
}) as unknown) as Book;

export default book;
