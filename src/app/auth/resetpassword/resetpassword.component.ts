import { Component } from '@angular/core';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {
  
  


}
// scripts.ts
function resetPassword() {
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const newPassword = (document.getElementById('newPassword') as HTMLInputElement).value;
  const confirmPassword = (document.getElementById('confirmPassword') as HTMLInputElement).value;
  const errorMessage = document.getElementById('error-message')!;

  // Basic password matching validation
  if (newPassword !== confirmPassword) {
      errorMessage.innerHTML = 'Passwords do not match.';
      return;
  }

  // TODO: Send a request to the server for password reset
  // Here, you would typically make an AJAX request to your server

  // For demonstration purposes, just show a success message
  errorMessage.style.color = 'green';
  errorMessage.innerHTML = 'Password reset successful!';
}

