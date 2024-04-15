import { Component } from '@angular/core';
import { BudgetsListComponent } from '../budgets-list/budgets-list.component';
import { PresupuestosComponent } from '../presupuestos/presupuestos.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BudgetsListComponent,PresupuestosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
