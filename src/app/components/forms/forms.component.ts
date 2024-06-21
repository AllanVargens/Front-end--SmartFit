import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { HttpClientModule } from '@angular/common/http';
import { Location } from '../../types/location.interface';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  constructor(
    private formBuilder: FormBuilder,
    private unitsService: GetUnitsService
  ) {}

  results: Location[] = [];
  filteredResults: Location[] = [];
  formGroup!: FormGroup;

  ngOnInit(): void {
    this.unitsService.getAllUnits().subscribe((data) => {
      this.results = data.locations;
      this.filteredResults = data.locations;
    });
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true,
    });
  }

  onSubmit(): void {
    console.log(this.formGroup.value);
    if (!this.formGroup.value.showClosed) {
      this.filteredResults = this.results.filter(
        (locations) => locations.opened === true
      );
    } else {
      this.filteredResults = this.results;
    }
  }

  onClean(): void {
    this.formGroup.reset();
  }
}
