import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from './components/atoms/atoms.module';
import { MoleculesModule } from './components/molecules/molecules.module';
import { OrganismsModule } from './components/organisms/organisms.module';
import { TemplatesModule } from './components/templates/templates.module';
import { PagesModule } from './components/pages/pages.module';
import { IconsModule } from './icons/icons.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    TemplatesModule,
    PagesModule,
    IconsModule
  ],
  exports: [
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    TemplatesModule,
    PagesModule,
    IconsModule
  ]
})
export class SharedModule { }
