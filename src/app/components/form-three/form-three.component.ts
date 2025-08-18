import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-three',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './form-three.component.html',
  styleUrl: './form-three.component.scss',
})
export class FormThreeComponent {
  [x: string]: any;
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      crimeType: ['', Validators.required],
      documentation: [''],
    });
  }

  tiposDeDelito: string[] = [
    'Amenazas',
    'Lesiones',
    'Hurto',
    'Robo',
    'Daño a la propiedad',
    'Violencia familiar / de género',
    'Abuso sexual',
    'Estafa / defraudación',
    'Hostigamiento / acoso',
    'Desobediencia judicial',
    'Usurpación',
    'Delitos contra animales',
    'Delitos contra la administración pública',
    'Tráfico o tenencia de estupefacientes',
    'Tentativa de delito',
    'Otro (especificar)',
  ];

  selectedFilesText = 'Ningún archivo seleccionado';

  onFileUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const fileNames = Array.from(input.files).map((f) => f.name);
      this.selectedFilesText = fileNames.join(', ');
    } else {
      this.selectedFilesText = 'Ningún archivo seleccionado';
    }
  }

  clear(): void {
    this.form.reset();
  }
}
