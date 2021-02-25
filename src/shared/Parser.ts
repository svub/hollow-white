import { Book, Chapter, Section, ElementType, Paragraph, If, Else, HasElements, Link, ChangeState, AddItem, RemoveItem,
  SpecialLink, Style, Specials } from './entities';
import { Token, TokenType } from './Lexer';
import { Overlays, Functions } from './entities';

export enum CommandType {
  book = 'book',
  chapter = 'chapter',
  section = 'section',
  if = 'if',
  else = 'else',
  endif = 'endif',
  item = 'item',
  state = 'state',
  next = '>',
  jump = '>>',
  special = '<',
  comment = '#',
  style = 'style',
  endstyle = 'endstyle',
  credits = 'credits',
}

export type Command = {
  type: string;
  fields: string[];
  line: number;
  url?: string;
};

export class ParserError extends Error {
  token?: Token;

  constructor(message: string, token?: Token) {
    super(message);
    this.token = token;
  }
}

export default class Parser {
  position = 0;

  reset() {
    this.position = 0;
  }

  parse(tokens: Token[]): Book {
    let book: Book | null = null;
    let chapter: Chapter | null = null;
    let section: Section | null = null;
    let ifElement: If | null = null;
    let elseElement: Else | null = null;
    let styleElement: Style | null = null;
    // let specials: Chapter = {
    //   id: '__specials__',
    //   title: 'Special Sections',
    //   sections: [],
    // };
    const getTitle = (command: Command): string => {
      const next = tokens[this.position + 1];
      if (next.type !== TokenType.paragraph) {
        this.error('Book needs a title as text after // book command', next, command, next);
      }
      this.position++;
      return next.data;
    }
    const topContainer = (token: Token, command?: Command): HasElements => {
      const element = ([styleElement, elseElement, ifElement, section].find(e => e !== null));
      if (!element) {
        if (command)
          this.error(`Found a "// ${command.type}" before first "// section"`, token, command);
        else
          this.error('Found text before first "// section"', token);
      }
      return element!;
    }

    if (tokens.length < 1) {
      this.error('No tokens', null);
    }

    do {
      const token = tokens[this.position];

      if (token.type === TokenType.command) {
        const command = this.parseCommand(token);
        switch (command.type) {
          case CommandType.book:
            if (book) this.error('Found a second "// book" command. Book already initialize', token, book, command);
            book = {
              title: getTitle(command),
              chapters: [],
              specials: {},
            }
            break;
          case CommandType.chapter:
            if (!book) this.error('Found a "// chapter" before "// book"', token, command);
            chapter = {
              id: command.fields[0],
              title: getTitle(command),
              sections: [],
            };
            book!.chapters.push(chapter);
            break;
          case CommandType.section:
            if (!chapter) this.error('Found a "// section" before first "// chapter"', token, command);
            section = {
              id: command.fields[0],
              title: getTitle(command),
              elements: [],
              next: [],
            };
            chapter!.sections.push(section);
            break;
          case CommandType.next:
            if (!chapter) this.error('Found a "// >" before first "// chapter"', token, command);
            if (!section) this.error('Found a "// >" before first "// section"', token, command);
            const link: Link = {
              title: command.fields.slice(1).join(' '),
              chapterId: chapter!.id, // same chapter link
              sectionId: command.fields[0],
            };
            // TODO add link related commands
            section!.next.push(link);
            break;
          case CommandType.jump:
            if (!chapter) this.error('Found a "// >>" before first "// chapter"', token, command);
            if (!section) this.error('Found a "// >>" before first "// section"', token, command);
            const jump: Link = {
              title: command.fields.slice(2).join(' '),
              chapterId: command.fields[0], // cross chapter link
              sectionId: command.fields[1],
            };
            // TODO add related commands
            section!.next.push(jump);
            break;
          case CommandType.special:
            if (!chapter) this.error('Found a "// <" before first "// chapter"', token, command);
            if (!section) this.error('Found a "// <" before first "// section"', token, command);
            const id = command.fields.shift()!;
            if (!Overlays[id] && !Functions[id]) this.error('Special function not found', token, id, Overlays, Functions);
            const data = [Functions.share].includes(Functions[id]) ? command.fields.shift() : '';
            const special: SpecialLink = {
              title: command.fields.join(' '),
              id,
              data,
            };
            // TODO add related commands
            section!.next.push(special);
            break;
          case CommandType.state:
            const state: ChangeState = {
              type: ElementType.state,
              id: command.fields[0].toLowerCase(),
              modifier: command.fields[1],
            };
            topContainer(token, command).elements.push(state);
            break;
          case CommandType.item:
            if (!section) this.error('Found a "// item" before first "// section"', token, command);
            const item = (command.fields[0].toLowerCase() === 'remove')
              ? {
                type: ElementType.removeItem,
                id: command.fields[1].toLowerCase(),
              } as RemoveItem
              : {
                type: ElementType.addItem,
                id: command.fields[0].toLowerCase(),
              } as AddItem;
            topContainer(token, command).elements.push(item);
            break;
          case CommandType.if:
            if (ifElement) this.error('Found another "// if" before "// end if"', token, command);
            ifElement = {
              type: ElementType.if,
              condition: command.fields.join(' '),
              elements: [],
            };
            section!.elements.push(ifElement);
            break;
          case CommandType.else:
            if (!ifElement) this.error('Found "// else" before "// if"', token, command);
            elseElement = {
              type: ElementType.else,
              ifCondition: ifElement!.condition,
              elements: [],
            };
            section!.elements.push(elseElement);
            break;
          case CommandType.endif:
            if (!ifElement) this.error('Found "// endif" before "// if"', token, command);
            ifElement = elseElement = null;
            break;
          case CommandType.comment:
            break; // ignore comments
          case CommandType.style:
            if (styleElement) this.error('Found another "// if" before "// end if"', token, command);
            styleElement = {
              type: ElementType.style,
              classes: command.fields.join(' '),
              elements: [],
            };
            section!.elements.push(styleElement);
            break;
          case CommandType.endstyle:
            if (!styleElement) this.error('Found "// endstyle" before "// style"', token, command);
            styleElement = null;
            break;
          case CommandType.credits:
            if (!book) this.error('Found a "// credits" before "// book"', token, command);
            const credits: Section = {
              id: Specials.credits,
              title: getTitle(command),
              elements: [],
              next: [],
            };
            book!.specials[Specials.credits] = credits;
            section = credits;
            break;
          default:
            this.error(`Command type ${command.type} not implemented`, token, command);
        }
      } else { // text
        if (!section) this.error('Found text before first "// section"', token);
        const element: Paragraph = {
          type: ElementType.paragraph,
          text: token.data,
        };
        topContainer(token).elements.push(element);
      }

      this.position++;
      // if (this.position >= tokens.length) break; // done
    } while (this.position < tokens.length);
    if (!book) {
      this.error('// book not found', null);
    }
    return book!;
  }

  parseCommand(token: Token): Command {
    if (token.type != TokenType.command) {
      this.error('Cannot parse command, token is not a command', token);
    }
    // https://eslint.org/docs/rules/no-irregular-whitespace
    //                            handle nbsp
    const elements = token.data.split(/ |\u00A0/).map(s => s.trim()).filter(s => s.length > 0);
    return {
      type: elements[0].toLowerCase(),
      fields: elements.slice(1),
      line: token.line,
      ... (token.url ? { url: token.url } : {}),
    }
  }

  error(message: string, token: Token | null, ...data: any[]) {
    console.error('Parsing error: ', message, token, ...data);
    throw new ParserError(`${message}: ${data}`, token ?? undefined);
  }
}
