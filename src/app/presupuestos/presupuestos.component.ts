import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetService } from '../services/budget.service';
import { FormsModule } from '@angular/forms';
import { RouterLink ,Router} from '@angular/router';
@Component({
  selector: 'app-presupuestos',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './presupuestos.component.html',
  styleUrl: './presupuestos.component.css'
})
export class PresupuestosComponent {
    infoPresupuestos:any[]=[]
    ordenDate:boolean=true;
    ordenPrecio:boolean=true;
    ordenName:boolean=true;
valorNombre:any;
nombreEncontrado:any;
posicionNombre:any;
personas:any[]=[]
url:string=""





  constructor(public BudgetService :BudgetService ,public router:Router){
    this.infoPresupuestos = this.BudgetService.getItem('guardarPresupuestos') || [];
    console.log( this.infoPresupuestos); 



  }
  verUrl(index:number){
  
      this.router.navigate(['home'], { queryParams: { nombre: this.infoPresupuestos[index].nombre,  telefono:this.infoPresupuestos[index].telefono,  email:this.infoPresupuestos[index].email,check:this.infoPresupuestos[index].elegidos, paginas:this.infoPresupuestos[index].paginas, idiomas:this.infoPresupuestos[index].idiomas ,precio:this.infoPresupuestos[index].precio} })
 
  }
  ordenarData(){
    this.ordenDate=!this.ordenDate;
    this.infoPresupuestos.sort((a,b)=>{
      const fechaA:any = new Date(a.fecha);
      const fechaB:any = new Date(b.fecha);
      if(this.ordenDate===false){
        return fechaB - fechaA; 
      }
      else{
        return fechaA - fechaB; 
      }
    })
   
  }

  ordenarPrecio(){
    this.ordenPrecio=!this.ordenPrecio
    this.infoPresupuestos.sort((a,b)=>{
  
      if( this.ordenPrecio===false){
        return  b.precio - a.precio; 
      }
      else{
        return a.precio - b.precio; 
      }
    })
    console.log(this.infoPresupuestos)
  }

 ordenarNombre(){
  this.infoPresupuestos.sort((a,b)=>{
    this.ordenName=!this.ordenName
    if( this.ordenName===false){
      return  b.nombre.localeCompare(a.nombre); 
    }
    else{
      return  a.nombre.localeCompare(b.nombre); 
    }
  })
  console.log(this.infoPresupuestos)

 }

 buscadorNombre(){

const nombreBuscado = this.valorNombre.toLowerCase();
  
if (nombreBuscado === '') {

  this.infoPresupuestos = this.BudgetService.getItem('guardarPresupuestos') || [];

} else {

  this.infoPresupuestos = this.infoPresupuestos.filter(persona =>
    persona.nombre.toLowerCase().includes(nombreBuscado)
  );

}
}








}