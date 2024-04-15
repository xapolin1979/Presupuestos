import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  contadorPaginas: number = 0;
  contadorIdiomas: number = 0;
  paginasTotales:number=0;

  guardarPresupuestos: any[] = [];
  precios:any[]=[
    {
     
      titulo:'Seo',
      texto:'Programacio d´una web responsive completa',
      precio:300,
    },
    {
    
      titulo:'Ads',
      texto:'Programacio d´una web responsive completa',
      precio:400,
    },
    {
 
      titulo:'Web',
      texto:'Programacio d´una web responsive completa',
      precio:500,
    },
  
    ]

  constructor() { 
    const savedPresupuestos = this.getItem('guardarPresupuestos');
    this.guardarPresupuestos = savedPresupuestos || [];
    
  }

  updatePresupuestosAndSave(presupuestos: any[]) {
    this.guardarPresupuestos = presupuestos;
    this.setItem('guardarPresupuestos', presupuestos);
  }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }



  

}
