import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GastoService } from './gasto.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-gasto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterOutlet, RouterLink],
  templateUrl: './gasto.component.html',
  styleUrl: './gasto.component.css',
})
export class GastoComponent {
  private readonly gastoSvc = inject(GastoService);
  isLoggedIn = false;

  // Definir el formulario usando FormGroup
  myForm: FormGroup | any;

  constructor() {
    this.myForm = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      costoDelGasto: new FormControl(+'', [
        Validators.required,
        Validators.minLength(3),
      ]),
      // fechaDelGasto: new FormControl('', [Validators.required, Validators.min(3)]),
      categoria: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      lugar: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.myForm.valid) {
      // Convertir costoDelGasto a entero
      const gastoFormValue = {
        ...this.myForm.value,
        costoDelGasto: parseInt(this.myForm.value.costoDelGasto, 10),
      };

      this.gastoSvc.createGasto(gastoFormValue).subscribe({
        next: (response) => {
          console.log('Gasto enviado con éxito:', response);
        },
        error: (err) => {
          console.error('Error al enviar el gasto:', err);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
