import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from './shared/shared.module';

import { HttpClientModule } from '@angular/common/http';
import { ContainerComponent } from './virtual-scroll/container/container.component';
import { TableComponent } from './virtual-scroll/table/table.component';


@NgModule({
  declarations: [AppComponent, ContainerComponent, TableComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
