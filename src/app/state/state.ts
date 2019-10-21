import { State, Action, StateContext, Selector } from '@ngxs/store';
import {
  getEditorState,
  EditorStateModel
} from '../interfaces/state.interface';
import {
  TransformText,
  ToogleEditButtons,
  GetSynonyms,
  ReplaceWord
} from './actions';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { SynonymsService } from '../services/synonyms.service';

@State<EditorStateModel>({
  name: 'editor',
  defaults: getEditorState()
})
export class EditorState {
  constructor(
    @Inject(DOCUMENT) private document: any,
    private dialog: MatDialog,
    private synonymsService: SynonymsService
  ) {}

  @Selector()
  static getFocusText({ focusText }: EditorStateModel) {
    return focusText;
  }

  @Selector()
  static getSynonyms({ synonyms }: EditorStateModel) {
    return synonyms;
  }

  @Action(TransformText)
  transformText(
    { patchState, getState }: StateContext<EditorStateModel>,
    { payload }: TransformText
  ) {
    const state = getState();
    const elementById = this.document.getElementById(payload);
    switch (payload) {
      case 'bold':
        !state.isbold
          ? elementById.classList.add('active')
          : elementById.classList.remove('active');
        patchState({
          isbold: !state.isbold,
          focusText: !state.focusText
        });
        break;
      case 'italic':
        !state.isItalic
          ? elementById.classList.add('active')
          : elementById.classList.remove('active');
        patchState({
          isItalic: !state.isItalic,
          focusText: !state.focusText
        });
        break;
      case 'underline':
        !state.isUnderline
          ? elementById.classList.add('active')
          : elementById.classList.remove('active');
        patchState({
          isUnderline: !state.isUnderline,
          focusText: !state.focusText
        });
    }
    return setTimeout(() => this.document.execCommand(payload), 10);
  }

  @Action(ToogleEditButtons)
  toogleEditButtons({ patchState, getState }: StateContext<EditorStateModel>) {
    const state = getState();
    state.buttons.forEach(button => {
      const result = this.document.queryCommandState(button);
      const elementById = this.document.getElementById(button);
      if (result) {
        elementById.classList.add('active');
        switch (button) {
          case 'bold':
            return patchState({ isbold: true });
          case 'italic':
            return patchState({ isItalic: true });
          case 'underline':
            return patchState({ isUnderline: true });
        }
      } else {
        elementById.classList.remove('active');
        switch (button) {
          case 'bold':
            return patchState({ isbold: false });
          case 'italic':
            return patchState({ isItalic: false });
          case 'underline':
            return patchState({ isUnderline: false });
        }
      }
    });
  }

  @Action(GetSynonyms)
  getSynonyms(
    { patchState }: StateContext<EditorStateModel>,
    { payload }: GetSynonyms
  ) {
    const range = window.getSelection().getRangeAt(0);
    return this.synonymsService
      .getSynonyms(payload)
      .subscribe(synonyms => patchState({ range, synonyms }));
  }

  @Action(ReplaceWord)
  replaceWord(
    { getState }: StateContext<EditorStateModel>,
    { payload }: ReplaceWord
  ) {
    const state = getState();
    state.range.deleteContents();
    return state.range.insertNode(document.createTextNode(payload));
  }
}
