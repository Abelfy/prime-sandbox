import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDropdownComponent } from './custom-dropdown/custom-dropdown.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomDropdownComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule
  ],exports:[CustomDropdownComponent]
})
export class CustomDropdownModule { }
