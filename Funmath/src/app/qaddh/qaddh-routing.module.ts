import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QaddhPage } from './qaddh.page';

const routes: Routes = [
  {
    path: '',
    component: QaddhPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QaddhPageRoutingModule {}
