import { NgModule } from '@angular/core';
import { LucideAngularModule, ChevronDown, ChevronUp, Search, User, ShoppingCart, ChevronRight } from 'lucide-angular';

const icons = {
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Search,
  User,
  ShoppingCart,
};

@NgModule({
  imports: [
    LucideAngularModule.pick(icons)
  ],
  exports: [
    LucideAngularModule
  ]
})
export class IconsModule { }
