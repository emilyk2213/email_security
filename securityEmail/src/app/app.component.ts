import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  emailForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onFocus(event: FocusEvent) {
    const input = event.target as HTMLInputElement;
    input.placeholder = ''; // Clear placeholder on focus
  }

  onBlur(event: FocusEvent) {
    const input = event.target as HTMLInputElement;
    if (!input.value) {
      input.placeholder = 'example@email.com'; // Restore placeholder if input is empty
    }
  }
  
  onSubmit() {
    if (this.emailForm.valid) {
      const emailValue = this.emailForm.value.email;
      console.log('Submitted Email:', emailValue);
      // Add logic here to process the email (e.g., send to server)
    }
  }
}
