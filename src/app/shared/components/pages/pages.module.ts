import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { OrganismsModule } from '../organisms/organisms.module';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    OrganismsModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
