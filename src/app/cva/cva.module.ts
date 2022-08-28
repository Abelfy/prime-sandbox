import { NgModule } from '@angular/core';
import { SubFormArrayComponent } from './sub-form-array/sub-form-array.component';
import { SubFormComponent } from './sub-form/sub-form.component';
/* import { StoreModule } from '@ngrx/store';
import { sandboxReducer } from './state/sandbox.reducer'; */
import { ContainerComponent } from './container/container.component';
import { CvaRoutingModule } from './cva-routing.module';

import { CustomDropdownModule } from '../shared/custom-dropdown/custom-dropdown.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [ContainerComponent, SubFormArrayComponent, SubFormComponent],
  imports: [
    SharedModule,
    CvaRoutingModule,
    CustomDropdownModule
  ],
})
export class CvaModule {}
