import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'angular-consultar-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular-consultar';

  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      docField: ['', [Validators.required]], // You can add more validators if needed
      typeField: ['cpf'] // Default value
    });
  }

  search() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      console.log('Form Data:', formData);
      // Here you can perform your search operation using the formData
    } else {
      // Handle form validation errors
      console.log('Form is not valid.');
    }
  }


}
