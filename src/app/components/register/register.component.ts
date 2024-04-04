import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string ;
  password: string;

  onSubmit() {
    console.log('Registration form submitted!');
    console.log(`Email: ${this.email}`);
    console.log(`Password: ${this.password}`);
  }
}
