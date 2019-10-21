import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { ReplaceWord } from '../state/actions';
import { Observable } from 'rxjs';
import { Synonym } from '../interfaces/synonyms.interface';
import { EditorState } from '../state/state';

@Component({
  selector: 'app-synonyms-modal-container',
  template: `
    <app-synonyms-modal
      [synonyms]="synonyms$ | async"
      (replaceWord)="replaceWord($event)"
    ></app-synonyms-modal>
  `
})
export class SynonymsModalContainerComponent {
  @Select(EditorState.getSynonyms) synonyms$: Observable<Synonym[]>;

  constructor(private store: Store) {}

  replaceWord(event: string) {
    this.store.dispatch(new ReplaceWord(event));
  }
}
