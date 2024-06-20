import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  constructor(private formBuilder: FormBuilder) {}

  results = [];
  formGroup!: FormGroup;

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false,
    });
  }

  onSubmit(): void {
    console.log(this.formGroup.value);
  }

  onClean(): void {
    this.formGroup.reset();
  }
}
