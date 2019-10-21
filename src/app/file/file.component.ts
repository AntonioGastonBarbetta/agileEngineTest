import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileComponent implements OnChanges {

  text$: Promise<string>;

  @Input() text: string;
  @Input() focusText: boolean;

  @Output() execute = new EventEmitter<void>();
  @Output() selectWord = new EventEmitter<void>();

  @ViewChild('editor') textArea: ElementRef;

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (
      !!simpleChanges.focusText &&
      simpleChanges.focusText.currentValue !==
      simpleChanges.focusText.previousValue
    ) {
      this.focus();
    }
  }

  focus() {
    this.textArea.nativeElement.focus();
  }
}
