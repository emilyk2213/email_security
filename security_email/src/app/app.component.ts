import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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
