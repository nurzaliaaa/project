import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DividePage } from './divide.page';

const routes: Routes = [
  {
    path: '',
    component: DividePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DividePageRoutingModule {}
