import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetService } from '../services/budget.service';
import { PanelComponent } from '../panel/panel.component';
import {ReactiveFormsModule, FormControl, Validators, FormGroup } from '@angular/forms';
import { RouterLink ,Router} from '@angular/router';

@Component({
  selector: 'app-budgets-list',
  standalone: true,
  imports: [CommonModule, PanelComponent,ReactiveFormsModule,RouterLink],
  templateUrl: './budgets-list.component.html',
  styleUrl: './budgets-list.component.css',
})
export class BudgetsListComponent {
 url:string=""

  isChecked: boolean = false;
  total: number = 0;
  paginas: number = 0;
  idiomas: number = 0;
  precioTotal: number = 0;
  precios: any[] = [];
  nombre:any="";
  email:any="";
  telefono:any=0;
  titulos:any[]=[];
  data:any;
  contacto:any={
     nombre:this.nombre,
     telefono:this.telefono,
     email:this.email,
     paginas:this.paginas,
     idiomas:this.idiomas,
     precio:this.total,
     elegidos:this.titulos,
     
  };

  guardarPresupuestos:any[]=[];
  envio:boolean=true;
  formulario=new FormGroup({
   
    'name':new FormControl('',Validators.required),
    'telefono':new FormControl('',[Validators.required]),
    'email':new FormControl('',[Validators.required,Validators.email]),
     'envio':new FormControl('',[Validators.required]),
  })

  constructor(public BudgetService: BudgetService,public router:Router) {
    this.precios = BudgetService.precios;
    this.guardarPresupuestos = BudgetService.guardarPresupuestos || [];
  
  }
  
  valores(){
    this.data=new Date
    console.log( this.data)

    this.nombre=this.formulario.get('name')?.value
    this.telefono= this.formulario.get('telefono')?.value
    this.email= this.formulario.get('email')?.value
    this.contacto={
      nombre:this.nombre,
      telefono:this.telefono,
      email:this.email,
      paginas:this.paginas,
      idiomas:this.idiomas,
      precio:this.total,
      elegidos:this.titulos,
      fecha:this.data
   }
    this.guardarPresupuestos=[... this.guardarPresupuestos,this.contacto]
    this.BudgetService.updatePresupuestosAndSave(this.guardarPresupuestos);
   

      this.nombre = '';
      this.telefono = '';
      this.email = '';
      this.paginas = 0;
      this.idiomas = 0;
      this.total = 0;
      this.titulos = [];
      this.precios.forEach(precio => precio.isChecked = false);
      this.formulario.reset();
      console.log(this.guardarPresupuestos);
      console.log(this.BudgetService.guardarPresupuestos);
      window.location.reload();

  }
  


 

  marcado(lista: any) {
    lista.isChecked = !lista.isChecked;
    this.sumaTotal();
    
    
  }

  actualizarContadorPaginas(contadorPaginas: number) {
  
    this.paginas = contadorPaginas;
    this.sumaTotal();
  }

  actualizarContadorIdiomas(contadorIdiomas: number) {
 
    this.idiomas = contadorIdiomas;
    this.sumaTotal();
  }
  sumaTotal() {
    this.total = 0;
    for (let i = 0; i < this.precios.length; i++) {
      if (this.precios[i].isChecked) {
        this.total += this .precios[i].precio;
        if (!this.titulos.includes(this.precios[i].titulo)) {
          this.titulos.push(this.precios[i].titulo);
          
        }
        
      }  
    
    }
      this.precioTotal= (this.paginas  *  this.idiomas )* 30;

       this.total += this.precioTotal ;
  }

eliminarLocalStore(){
  this.BudgetService.clear();
  window.location.reload();
}


}
