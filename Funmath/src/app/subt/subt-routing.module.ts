import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubtPage } from './subt.page';

const routes: Routes = [
  {
    path: '',
    component: SubtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubtPageRoutingModule {}
