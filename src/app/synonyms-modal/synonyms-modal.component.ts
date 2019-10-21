import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { Synonym } from '../interfaces/synonyms.interface';

@Component({
  selector: 'app-synonyms-modal',
  templateUrl: './synonyms-modal.component.html',
  styleUrls: ['./synonyms-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SynonymsModalComponent {

  @Input() synonyms: Synonym[];

  @Output() replaceWord = new EventEmitter<string>();

}
