import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-page-sign-up',
  templateUrl: './page-sign-up.component.html',
  styleUrls: ['./page-sign-up.component.css'],
})
export class PageSignUpComponent implements OnInit {
  public signUpForm!: FormGroup;
  // point d'exclamation sert à dire à notre code TS
  // que nous n'allons pas initialiser cette propriété
  // dans le constructor mais plus tard (ici dans le ngOnInit)

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(12),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validator: this.passwordMatchValidator,
      }
    );
    /*
    signUpForm = {
      username: 'deuhzu',
      password: 'ifrejfi',
      confirmPassword: 'djiezidj'
    }
    */
  }
  passwordMatchValidator(form: FormGroup) {
    // if(form.get('password') !== null) {
    //   if(form.get('password').value) {

    //   }
    // }
    // => résumé en form.get('password')?.value
    // Le point d'intérrogation permet de ne pas
    // accéder à la valeur de 'value' si le password est 'null'
    if (form.get('password')?.value === form.get('confirmPassword')?.value) {
      return null;
    } else {
      return { mismatch: true };
    }
  }

  onSubmitForm() {
    console.log(this.signUpForm.value);
    // {"username": "", "password": "", "confirmPassword": ""};
    const username = this.signUpForm.value.username;
    const password = this.signUpForm.value.password;

    // je transfère la valeur de mes champs username et password
    // dans 2 constances pour plus de facilité de manipulation

    this.authService
      .registerUser(username, password)
      .subscribe((reponseApi) => {
        console.log(reponseApi);
        this.router.navigateByUrl('/sign-in');
      });

    /**
     * Component
     *
     * logUser().then((resp) => {
     *  return resp.json()
     * }).then((reponseApi) => {
     *  console.log(reponseApi);
     * })
     *
     * Service
     *
     * logUser() {
     *  return fetch("http://url");
     * }
     */
  }
}
