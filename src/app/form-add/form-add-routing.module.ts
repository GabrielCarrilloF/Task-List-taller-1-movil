import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormAddPage } from './form-add.page';

const routes: Routes = [
  {
    path: '',
    component: FormAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormAddPageRoutingModule {}
