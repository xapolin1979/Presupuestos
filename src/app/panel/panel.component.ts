import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {

  @Output() contadorPaginasChange = new EventEmitter<number>();
  @Output() contadorIdiomasChange = new EventEmitter<number>();

  contadorPaginas: number = 0;
  contadorIdiomas: number = 0;
  paginas: string = "paginas";
  idiomas: string = "idiomas";

  validarPagina = new FormControl(this.contadorPaginas, Validators.required );
  validarIdioma = new FormControl(this.contadorIdiomas, Validators.required);

  sumar(tipoCasilla: string) {
    if (tipoCasilla === 'paginas') {
      this.contadorPaginas++;
      this.contadorPaginasChange.emit(this.contadorPaginas);
    } else if (tipoCasilla === 'idiomas') {
      this.contadorIdiomas++;
      this.contadorIdiomasChange.emit(this.contadorIdiomas);
    }
  }

  restar(tipoCasilla: string) {
    if (tipoCasilla === 'paginas') {
      this.contadorPaginas--;
      if (this.contadorPaginas < 0) {
        this.contadorPaginas = 0;
      }
      this.contadorPaginasChange.emit(this.contadorPaginas);
    } else if (tipoCasilla === 'idiomas') {
      this.contadorIdiomas--;
      if (this.contadorIdiomas < 0) {
        this.contadorIdiomas = 0;
      }
      this.contadorIdiomasChange.emit(this.contadorIdiomas);
    }
  }



  
}
