import { NgModule } from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent, FooterComponent } from './layout';
import {
    SingleDataDialogEditOrAddComponent
} from './common-components/single-data-dialog-edit-or-add/single-data-dialog-edit-or-add.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FirstWordPipe } from './pipes/firstWord.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    SingleDataDialogEditOrAddComponent,

    CapitalizePipe,
    FirstWordPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule
  ],
  providers: [],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    SingleDataDialogEditOrAddComponent,

    CapitalizePipe,
    FirstWordPipe
  ]
})
export class SharedModule { }
