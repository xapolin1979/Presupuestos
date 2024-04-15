import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetsListComponent } from './budgets-list.component';

describe('BudgetsListComponent', () => {
  let component: BudgetsListComponent;
  let fixture: ComponentFixture<BudgetsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BudgetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Calcular el precio total correctamente', () => {
    component.precios = [
      { isChecked: true, precio: 500 }, 
      { isChecked: false, precio: 400 }, 
    ];
    component.paginas = 1;
    component.idiomas = 1;

    component.sumaTotal();

    expect(component.total).toBe(530); 
  });
});



