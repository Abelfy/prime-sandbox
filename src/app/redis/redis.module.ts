import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { RedisRoutingModule } from './redis-routing.module';



@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    RedisRoutingModule
  ]
})
export class RedisModule { }
