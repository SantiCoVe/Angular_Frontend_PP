import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { FirstSectionComponent } from './first-section/first-section.component';
import { FilterSectionComponent } from './filter-section/filter-section.component';
import { CatalogueCardsComponent } from './catalogue-cards/catalogue-cards.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FirstSectionComponent,
    FilterSectionComponent,
    CatalogueCardsComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule
  ],
  exports: [
    HeaderComponent,
    FirstSectionComponent,
    FilterSectionComponent,
    CatalogueCardsComponent
  ]
})
export class OrganismsModule { }
