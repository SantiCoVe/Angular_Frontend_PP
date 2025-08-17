import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { FilterSelectComponent } from './filter-select/filter-select.component';
import { IconsModule } from '../../icons/icons.module';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    LogoComponent,
    FilterSelectComponent,
    CardComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    LogoComponent,
    FilterSelectComponent,
    CardComponent,
    ButtonComponent
  ]
})
export class AtomsModule { }