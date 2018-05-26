import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatStepperModule,
  MatInputModule,
  MatExpansionModule,
  MatRippleModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatDialogModule,
  MatIconModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatSelectModule,
  MatChipsModule,
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
    MatChipsModule,
    MatSidenavModule,
    MatRippleModule,
    MatTooltipModule,
    MatDialogModule,
    MatProgressSpinnerModule,
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
    MatChipsModule,
    MatToolbarModule,
    MatRippleModule,
    MatTooltipModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatOptionModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,

  ],
})
export class MaterialModule { }
