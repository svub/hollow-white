export enum TokenType {
  paragraph,
  command,
}

export type Token = {
  type: TokenType;
  data: string;
  line: number;
  url?: string;
}

export default class Lexer {
  tokenize(raw: string, url?: string): Token[] {
    let position = 0;
    let line = 0;
    const tokens: Token[] = [];
    do {
      const commandStart = raw.indexOf('//', position);
      const textEnd = commandStart < 0 ? raw.length -1 : commandStart;

      const text = raw.substring(position, textEnd);
      if (text.length > 0) {
        text.split("\n")
          .map(paragraph => paragraph.trim())
          .forEach(paragraph => {
            line++;
            if (paragraph.length > 0)
              tokens.push({
                type: TokenType.paragraph,
                data: paragraph,
                line,
                url
              });
        });
      }

      if (commandStart < 0) break; // done

      const lineEnd = raw.indexOf("\n", commandStart);
      const nextCommand = raw.indexOf('// ', commandStart + 2); // enforce space after // to avoid collition with https://...
      line++; // not precise, will count a line for each command, even if they are in the same line
      const commandEnd = (lineEnd < 0 && nextCommand < 0)
        ? raw.length - 1
        : (lineEnd >= 0 && nextCommand >= 0)
        ? Math.min(lineEnd, nextCommand)
        : Math.max(lineEnd, nextCommand);
      tokens.push({
        type: TokenType.command,
        data: raw.substring(commandStart + 2, commandEnd).trim(),
        line,
        url,
      });
      position = commandEnd + 1;
    } while (position < raw.length);
    return tokens;
  }
}
