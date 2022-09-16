import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './container/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class NirRoutingModule { }
