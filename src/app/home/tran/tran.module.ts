import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranPageRoutingModule } from './tran-routing.module';

import { TranPage } from './tran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranPageRoutingModule
  ],
  declarations: [TranPage]
})
export class TranPageModule {}
