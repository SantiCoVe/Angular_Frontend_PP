import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-filter-select',
  standalone: false,
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss']
})
export class FilterSelectComponent {
  @Input() esUltimo: boolean = false;
  @Input() label: string = '';
  @Input() options: string[] = [];

  @Output() seleccion = new EventEmitter <{filtro: string, valor: string }>();

  mostrarOpciones = false;
  justClicked = false;
  @ViewChild('optionsMenu') menuOpcionesRef!: ElementRef;
  
  toggleOpciones() {
    this.mostrarOpciones = !this.mostrarOpciones;
    this.justClicked = true;
  }

  seleccionar(valor: string) {
    this.seleccion.emit({ filtro: this.label, valor })
    this.mostrarOpciones = false;
  }

  @HostListener('document:click', ['$event'])
  onClickFuera(event: MouseEvent) {
    if(this.justClicked){
      this.justClicked = false;
      return;
    }

    this.mostrarOpciones = false;
  }
}
