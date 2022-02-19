import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperfluidComponent } from './superfluid/superfluid.component';



@NgModule({
  declarations: [

    SuperfluidComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[SuperfluidComponent]
})
export class SuperfluidModule { }
