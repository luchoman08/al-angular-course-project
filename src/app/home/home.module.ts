import { NgModule } from '@angular/core';

import { HomeRoutingModule } from '@app/home/home-routing.module';
import { MainComponent } from '@app/home/main/main.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [MainComponent]
})
export class HomeModule { }
