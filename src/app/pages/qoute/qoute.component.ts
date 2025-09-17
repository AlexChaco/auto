import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common'; // necesario para *ngFor, *ngIf
import { ReactiveFormsModule } from '@angular/forms'; // <- necesario para reactive forms

@Component({
  selector: 'app-qoute',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // solo módulos
  templateUrl: './qoute.component.html',
  
})
export class QouteComponent {
  quoteForm: FormGroup;
  products = [
    { name: 'Aceite motor', price: 50 },
    { name: 'Filtro aire', price: 30 },
    { name: 'Pastillas freno', price: 80 },
  ];
  services = [
    { name: 'Mantenimiento preventivo', price: 150 },
    { name: 'Revisión general', price: 200 },
  ];

   constructor(private fb: FormBuilder) {
    // Creamos controles dinámicos para productos
    const controls: any = { name: '', phone: '' };
    this.products.forEach((p, i) => {
      controls[p.name] = false;
      controls['qty_' + i] = 1;
    });

    this.quoteForm = this.fb.group(controls);
  }

  submitQuote() {
    console.log(this.quoteForm.value);
    // Aquí puedes procesar la solicitud de cotización
  }
}
