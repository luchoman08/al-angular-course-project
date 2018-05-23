import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatStepperModule,
  MatInputModule,
  MatExpansionModule,
  MatRippleModule,
  MatTooltipModule,
  MatDialogModule,
  MatIconModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatListModule,
  MatToolbarModule,
  MatSidenavModule,
} from '@angular/material';


@NgModule({
  imports: [

    MatButtonModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatToolbarModule,
    MatInputModule,
    MatExpansionModule,
    MatSidenavModule,
    MatRippleModule,
    MatTooltipModule,
    MatDialogModule,
    MatOptionModule,
    MatIconModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule

  ],
  exports: [

    MatButtonModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatInputModule,
    MatExpansionModule,
    MatSidenavModule,
    MatToolbarModule,
    MatRippleModule,
    MatTooltipModule,
    MatDialogModule,
    MatIconModule,
    MatOptionModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,

  ],
})
export class MaterialModule { }