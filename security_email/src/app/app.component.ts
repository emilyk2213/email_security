import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetAPIService } from './services/get-api.service';
import { SecurityData } from './models/security.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  private subscription: Subscription = new Subscription();
  emailForm: FormGroup;
  securityData?: SecurityData; //stores downloaded .json file
  isDummyPopupOpen = false;
  isPopupOpen = false;
  isLoading = false;
  
  constructor(private securityService: GetAPIService, private formBuilder: FormBuilder) {
    this.emailForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.downloadDummyReport();
  }

  openDummyPopup() {
    this.isDummyPopupOpen = true;
  }

  closeDummyPopup() {
    this.isDummyPopupOpen = false;
  }

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  onFocus(event: FocusEvent) {
    const input = event.target as HTMLInputElement;
    input.placeholder = '';
  }

  onBlur(event: FocusEvent) {
    const input = event.target as HTMLInputElement;
    if (!input.value) {
      input.placeholder = 'example@email.com';
    }
  }

  onSubmit() {
    if (this.emailForm.valid) {
      const emailValue = this.emailForm.value.email;
      console.log('Submitted Email:', emailValue);
      this.isLoading = true;
      this.securityService.getSecurityData(emailValue).subscribe({
        next: (response) => {
          this.securityData = response;
          this.isLoading = false;
          this.openPopup();
        },
        error: (err) => {
          console.error('Error fetching the report:', err);
          this.isLoading = false;
        }
      });
    } else {
      console.error('No valid email provided');
    }
  }

  downloadDummyReport() {
    this.isLoading = true;
    this.subscription = this.securityService.getDummySecurityData().subscribe({
      next: (data: SecurityData) => {
        this.securityData = data;
        this.isLoading = false;

        const blob = new Blob([JSON.stringify(this.securityData)], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'test.json';
        link.click();

        this.subscription.unsubscribe();
      },
      error: (err) => {
        console.error('Error loading dummy report:', err);
        this.isLoading = false;
        this.subscription.unsubscribe();
      }
    });
  }

  downloadReport() {
    if (this.securityData) {
      this.isLoading = true;

      const blob = new Blob([JSON.stringify(this.securityData)], { type: 'application/json' });
  
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'email_security_report.json';
      link.click();
  
      this.isLoading = false;
    } 
    else {
      console.error('No security data available to download.');
    }
  }  
}
