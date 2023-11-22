import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registrationForm!: FormGroup;
  isRegistered: boolean = false;
  isError: boolean = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      address: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      state: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required]
    });
  }
  get mobileNumber(): FormControl {
    return this.registrationForm.get('mobileNumber') as FormControl;
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      // Perform registration logic here
      // For demonstration purposes, we'll simply set the registration status
      this.isRegistered = true;
      this.isError = false;
      // You can display a success message or perform other actions
      alert('Successfully registered!');
    } else {
      this.isRegistered = false;
      this.isError = true;
      // You can display an error message or perform other actions
      alert('Error occurred during registration.');
    }
  }
}