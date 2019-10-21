import { Injectable } from '@angular/core';
import { SynonymsModalContainerComponent } from '../synonyms-modal/synonyms-modal-container';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {
  constructor(private dialog: MatDialog) {}
  openSynonymsModal() {
    this.dialog.open(SynonymsModalContainerComponent, {width: '500px', height: '500px'});
  }
}
