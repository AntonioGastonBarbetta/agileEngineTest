import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FileComponent } from './file/file.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { TextService } from './services/text.service';
import { NgxsModule } from '@ngxs/store';
import { EditorState } from './state/state';
import { ControlPanelContainerComponent } from './control-panel/control-panel-container.component';
import { FileContainerComponent } from './file/file-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { SynonymsModalComponent } from './synonyms-modal/synonyms-modal.component';
import { SynonymsModalContainerComponent } from './synonyms-modal/synonyms-modal-container';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    FileContainerComponent,
    ControlPanelComponent,
    ControlPanelContainerComponent,
    HeaderComponent,
    FooterComponent,
    SynonymsModalComponent,
    SynonymsModalContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([EditorState]),
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [TextService],
  bootstrap: [AppComponent],
  entryComponents: [SynonymsModalContainerComponent]
})
export class AppModule {}
