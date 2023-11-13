import { Component } from '@angular/core';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {


}

// scripts.ts
function sendPasswordResetEmail() {
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const errorMessage = document.getElementById('error-message')!;

  // Basic email validation
  if (!validateEmail(email)) {
      errorMessage.innerHTML = 'Invalid email address.';
      return;
  }

  // Simulated server integration (replace with actual server request)
  simulateServerRequest(email);
}

function validateEmail(email: string): boolean {
  // Basic email validation using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function simulateServerRequest(email: string) {
  // Simulated server request (replace with actual server request)
  setTimeout(() => {
      const errorMessage = document.getElementById('error-message')!;
      errorMessage.style.color = 'green';
      errorMessage.innerHTML = 'Password reset email sent successfully!';
  }, 1000);
}

