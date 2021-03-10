import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QsubePage } from './qsube.page';

const routes: Routes = [
  {
    path: '',
    component: QsubePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QsubePageRoutingModule {}
