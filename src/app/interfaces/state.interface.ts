import { Synonym } from './synonyms.interface';

export interface EditorStateModel {
  focusText: boolean;
  isbold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  buttons: string[];
  synonyms: Synonym[];
  range: Range;
}

export const getEditorState = (): EditorStateModel => ({
  focusText: false,
  isbold: false,
  isItalic: false,
  isUnderline: false,
  buttons:  ['bold', 'italic', 'underline'],
  synonyms: null,
  range: null,
});
