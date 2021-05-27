import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public loginForm: any;
  public userName: any;
  public userPassword: any;
  private emailRegex: any =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  emptyError: boolean = false;
  emailError: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.generateForm();
	}

  ngOnInit(): void {
  }

  private generateForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      password: ['', Validators.required],
    });
  }

  public validateForm(): void {
    console.log('incia sesion');
		console.log(this.form.valid, 'Is valid')
		if (this.form.valid) {
			this.router.navigate(['/people']);
     } else {
			this.emptyError = true;
			alert('Por favor revisa todos los campos');
     }
  }
}
