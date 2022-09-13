import { NgModule } from '@angular/core';
import { CustomDropdownModule } from './custom-dropdown/custom-dropdown.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {SkeletonModule} from 'primeng/skeleton';

const angular_modules = [
  CommonModule,
  ReactiveFormsModule,
  HttpClientModule
];

const primeng_modules = [
  MenubarModule,
  CardModule,
  CalendarModule,
  InputTextModule,
  ToggleButtonModule,
  TableModule,
  BadgeModule,
  ToolbarModule,
  FileUploadModule,
  ToastModule,
  ConfirmDialogModule,
  SkeletonModule  
];

const sandbox_modules = [
  CustomDropdownModule,
];

const primeng_provider = [MessageService,ConfirmationService];
@NgModule({
  declarations: [],
  imports: [angular_modules, primeng_modules ,sandbox_modules],
  exports: [angular_modules, primeng_modules ,sandbox_modules],
  providers: [primeng_provider],
})
export class SharedModule {}
