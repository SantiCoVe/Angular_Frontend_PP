import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { LucideAngularModule, ChevronDown } from 'lucide-angular';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    NavComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    LucideAngularModule.pick({ ChevronDown })
  ],
  exports: [
    NavComponent,
    SearchBarComponent,
    LucideAngularModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // 👈 Esto permite usar etiquetas como <lucide-chevron-down>
})
export class MoleculesModule { }