import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { TransformText } from '../state/actions';

@Component({
  selector: 'app-control-panel-container',
  template: `
    <app-control-panel
      (transformText)="transformText($event)"
    ></app-control-panel>
  `
})
export class ControlPanelContainerComponent {
  constructor(private store: Store) {}

  transformText(event: string) {
    this.store.dispatch(new TransformText(event));
  }
}
