import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  categoriesArray: string[] = ["Destacadas", "Electrónica", "Gadgets y Novedades", "Hogar Inteligente y Conectado", "Cuidado Personal y Bienestar", "Otras Categorías"];

  mostrarMenuCategorias: boolean = false;
  justClicked = false;

  toggleCategorias() {
    this.mostrarMenuCategorias = !this.mostrarMenuCategorias;
    this.justClicked = true; // Marca que se acaba de hacer clic en el botón
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.justClicked) {
      this.justClicked = false;
      return; // Ignora este clic
    }

    // Cierra el menú si está abierto y se hace clic fuera de cualquier parte del menú
    this.mostrarMenuCategorias = false;
  }
}