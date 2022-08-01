import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranPage } from './tran.page';

const routes: Routes = [
  {
    path: '',
    component: TranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranPageRoutingModule {}
