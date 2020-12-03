export interface HasElements {
  elements: Element[];
}

// generics
export interface Entity {
  id: string;
}
export interface TextEntity extends Entity {
  text?: string;
}
export interface Text {
  text?: string;
}
export interface Title {
  title: string;
}
export interface Reference {
  chapterId: string;
  sectionId: string;
}

// entities
export interface Config {
  items: Item[];
}

export interface Book extends Title {
  chapters: Chapter[];
}

export interface Chapter extends Entity, Title {
  title: string;
  sections: Section[];
}

export interface Section extends HasElements, Entity, Title {
  elements: Element[];
  next: Link[];
}

export interface Link extends Title, Reference {}

export interface Item extends Entity, Title {
  thumbnail: string;
  media: string;
  category?: string;
}

export interface State extends Entity {
  value: number;
}

// elements
export enum ElementType {
  paragraph = 'paragraph',
  if = 'if',
  else = 'else',
  addItem = 'addItem',
  removeItem = 'removeItem',
  state = 'state',
}

export type Element = {
  type: ElementType;
}
export interface Paragraph extends Element {
  type: ElementType.paragraph;
  text: string;
}
export interface If extends Element, HasElements {
  type: ElementType.if;
  condition: string;
}
export interface Else extends Element, HasElements {
  type: ElementType.else;
  ifCondition: string;
}
export interface AddItem extends Element {
  type: ElementType.addItem;
  id: string;
}
export interface RemoveItem extends Element {
  type: ElementType.removeItem;
  id: string;
}
export interface ChangeState extends Element {
  type: ElementType.state;
  id: string;
  modifier: string;
}
