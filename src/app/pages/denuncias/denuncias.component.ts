import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-denuncias',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './denuncias.component.html',
  styleUrl: './denuncias.component.scss'
})
export class DenunciasComponent {
  form: FormGroup;

  readonly nationalityOptions: string[] = ['Argentina', 'Otra (especificar)'];
  readonly civilStatusOptions: string[] = [
    'Soltero/a',
    'Casado/a',
    'Viudo/a',
    'Divorciado/a',
    'Separado/a',
    'Unión de hecho / Unión civil'
  ];

  readonly occupationOptions: string[] = [
    'Empleado/a en relación de dependencia',
    'Trabajador/a independiente',
    'Empresario/a / Comerciante',
    'Profesional',
    'Obrero/a / Personal de oficios',
    'Docente',
    'Personal de seguridad / Fuerzas armadas',
    'Personal de salud',
    'Jubilado/a / Pensionado/a',
    'Estudiante',
    'Desocupado/a',
    'Ama de casa / Tareas del hogar',
    'Otro (especificar)'
  ];

  constructor(private readonly fb: FormBuilder, private readonly snackBar: MatSnackBar) {
    this.form = this.fb.group({
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      nationality: ['Argentina', Validators.required],
      nationalityOther: [{ value: '', disabled: true }],
      civilStatus: ['', Validators.required],
      occupation: ['', Validators.required],
      occupationOther: [{ value: '', disabled: true }]
    });

    this.form.get('nationality')!.valueChanges.subscribe(value => {
      const otherCtrl = this.form.get('nationalityOther')!;
      if (value === 'Otra (especificar)') {
        otherCtrl.enable();
        otherCtrl.addValidators([Validators.required, Validators.minLength(3)]);
      } else {
        otherCtrl.reset();
        otherCtrl.clearValidators();
        otherCtrl.disable();
      }
      otherCtrl.updateValueAndValidity({ emitEvent: false });
    });

    this.form.get('occupation')!.valueChanges.subscribe(value => {
      const otherCtrl = this.form.get('occupationOther')!;
      if (value === 'Otro (especificar)') {
        otherCtrl.enable();
        otherCtrl.addValidators([Validators.required, Validators.minLength(3)]);
      } else {
        otherCtrl.reset();
        otherCtrl.clearValidators();
        otherCtrl.disable();
      }
      otherCtrl.updateValueAndValidity({ emitEvent: false });
    });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    const payload = {
      lastName: value.lastName,
      firstName: value.firstName,
      nationality: value.nationality === 'Otra (especificar)' ? value.nationalityOther : value.nationality,
      civilStatus: value.civilStatus,
      occupation: value.occupation === 'Otro (especificar)' ? value.occupationOther : value.occupation
    };

    console.log('Denuncia enviada (sin base de datos):', payload);
    this.snackBar.open('Denuncia registrada localmente', 'Cerrar', { duration: 3000 });
    this.form.reset({ nationality: 'Argentina' });
  }

  clear(): void {
    this.form.reset({ nationality: 'Argentina' });
  }
}