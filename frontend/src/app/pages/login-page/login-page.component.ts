import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { users } from '../../../../../backend/src/database/seeders/users/users';
import { AppState } from '@core/interfaces/app.state';
import { Store } from '@ngrx/store';
import { loginUser } from '@features/user/state/actions/user.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements AfterViewInit {
  @ViewChild('email') email: ElementRef;
  @ViewChild('senha') senha: ElementRef;
  @ViewChild('entrarButton') entrarButton: ElementRef;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngAfterViewInit(): void {
    this.entrarButton.nativeElement.addEventListener('click', () => {
      const email = this.email.nativeElement.value;
      const senha = this.senha.nativeElement.value;

      if (email === '' || senha === '') {
        alert('Preencha todos os campos.');
        return;
      }

      this.store.dispatch(loginUser({ email, password: senha }));

      const isUserValid = users.some(
        (user) => user.email === email && user.password === senha
      );

      if (isUserValid) {
        this.router.navigate(['/board']);
      } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
        this.limparCampos();
      }
    });
  }

  limparCampos() {
    this.email.nativeElement.value = '';
    this.senha.nativeElement.value = '';
  }
}
