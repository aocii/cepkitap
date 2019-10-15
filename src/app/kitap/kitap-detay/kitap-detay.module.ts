import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KitapDetayPage } from './kitap-detay.page';

const routes: Routes = [
  {
    path: '',
    component: KitapDetayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KitapDetayPage]
})
export class KitapDetayPageModule {}
