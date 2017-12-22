import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule, BsDropdownModule, ModalModule, CollapseModule   } from 'ngx-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  exports:[
    ButtonsModule,
    ModalModule,
    BsDropdownModule,
    CollapseModule
  ],
  declarations: []
})
export class NgxBootstrapModule { }
