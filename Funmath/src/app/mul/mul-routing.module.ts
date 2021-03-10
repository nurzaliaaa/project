import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MulPage } from './mul.page';

const routes: Routes = [
  {
    path: '',
    component: MulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MulPageRoutingModule {}
