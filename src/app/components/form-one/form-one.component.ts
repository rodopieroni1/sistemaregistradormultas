import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-form-one',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './form-one.component.html',
  styleUrl: './form-one.component.scss',
})
export class FormOneComponent {
  form: FormGroup;

  nacionalidades = ['Argentino/a', 'Otra'];
  estadoCivil = [
    'Soltero/a',
    'Casado/a',
    'Viudo/a',
    'Divorciado/a',
    'Separado/a',
    'Unión de hecho',
    'Unión civil',
  ];
  ocupacion = [
    'Empleado/a en relación de dependencia',
    'Trabajador/a independiente',
    'Empresario/a / Comerciante',
    'Profesional',
    'Obrero/a / Personal de oficios',
    'Docente',
    'Personal de seguridad / fuerzas armadas',
    'Personal de salud',
    'Jubilado/a / Pensionado/a',
    'Estudiante',
    'Desocupado/a',
    'Ama de casa / Tareas del hogar',
    'Otro (especificar)',
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: [''],
      nacionalidad: [''],
      estadoCivil: [''],
      ocupacion: [''],
      ocupacionOtro: [''],
    });
  }
}
