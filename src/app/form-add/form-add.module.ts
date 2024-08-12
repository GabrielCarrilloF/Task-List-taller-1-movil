import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormAddPageRoutingModule } from './form-add-routing.module';

import { FormAddPage } from './form-add.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FormAddPageRoutingModule
  ],
  declarations: [FormAddPage]
})
export class FormAddPageModule {}
