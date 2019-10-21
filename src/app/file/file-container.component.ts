import { Component, OnInit } from '@angular/core';
import { TextService } from '../services/text.service';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { EditorState } from '../state/state';
import { ToogleEditButtons, GetSynonyms } from '../state/actions';
import { ModalsService } from '../services/modals.service';

@Component({
  selector: 'app-file-container',
  template: `
    <app-file
      [text]="text$ | async"
      [focusText]="focusText$ | async"
      (execute)="execute()"
      (selectWord)="selectWord()"
    ></app-file>
  `
})
export class FileContainerComponent implements OnInit {

  text$: Promise<string>;

  @Select(EditorState.getFocusText) focusText$: Observable<boolean>;

  constructor(
    private textService: TextService,
    private modalServices: ModalsService,
    private store: Store
  ) {}

  ngOnInit() {
    this.text$ = this.textService.getMockText();
  }

  execute() {
    this.store.dispatch(new ToogleEditButtons());
  }

  selectWord() {
    const word = window.getSelection().toString();
    if (!!word && word !== ' ' && word !== '.' && word !== ',') {
      this.store.dispatch(new GetSynonyms(word));
      this.modalServices.openSynonymsModal();
    }
  }
}
