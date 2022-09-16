import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './container/index/index.component';
import { NirInputComponent } from './components/nir-input/nir-input.component';
import { NirRoutingModule } from './nir-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IndexComponent,
    NirInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NirRoutingModule
  ],
  exports:[
    NirInputComponent
  ]
})
export class NirModule { }
