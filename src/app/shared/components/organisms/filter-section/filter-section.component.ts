import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-section',
  standalone: false,
  templateUrl: './filter-section.component.html',
  styleUrl: './filter-section.component.scss'
})
export class FilterSectionComponent {

  filtrosIzquierda = [
    { label: 'Categoría', opciones: ['Celulares', 'Computadoras', 'Accesorios'] },
    { label: 'Precio', opciones: ['Computadoras', 'Accesorios'] },
    { label: 'Calificaciones', opciones: ['Computadoras', 'Accesorios'] },
    { label: 'Color', opciones: ['Computadoras', 'Accesorios'] },
    { label: 'Precio', opciones: ['Computadoras', 'Accesorios'] },
    { label: 'Material', opciones: ['Computadoras', 'Accesorios'] },
    { label: 'Todos los filtros', opciones: ['Computadoras', 'Accesorios'] }
  ];

  filtrosDerecha = [
    { label: 'Ordenar por', opciones: ['Computadoras', 'Accesorios'] }
  ];

  manejarSeleccion(event: { filtro: string, valor: string }) {
    console.log('Seleccionaste:', event);
  }
}
