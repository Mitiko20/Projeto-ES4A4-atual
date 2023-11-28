import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { users } from '../../../../../backend/src/database/seeders/users/users';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements AfterViewInit {
  @ViewChild('emailInput') emailInput: ElementRef;
  @ViewChild('nomeInput') nomeInput: ElementRef;
  @ViewChild('senhaInput') senhaInput: ElementRef;
  @ViewChild('cadastrarButton') cadastrarButton: ElementRef;

  ngAfterViewInit() {
    this.cadastrarButton.nativeElement.addEventListener('click', () => {
      const email = this.emailInput.nativeElement.value;
      const nome = this.nomeInput.nativeElement.value;
      const senha = this.senhaInput.nativeElement.value;

      if (email === '' || nome === '' || senha === '') {
        alert('Preencha todos os campos.');
        return;
      }

      const cadastros = users.map((user) => {
        const e_mail = user.email;
        const password = user.password;

        if (e_mail === email) {
          alert('Esse email já está cadastrado.');
          this.router.navigate(['/login-page']);
          return;
        }
      });

      const newUser = {
        _id: '611df5ab' + Math.floor(Math.random() * 16777215).toString(24),
        name: nome,
        role: '',
        password: senha,
        email: email,
        avatarUrl: '',
      };

      users.push(newUser);
      this.router.navigate(['/login-page']);
      console.log(users);
      console.log(newUser.avatarUrl);

      if (!cadastros) {
        alert('Cadastro realizado com sucesso!');
        this.limparCampos();
      }
    });
  }

  limparCampos() {
    this.emailInput.nativeElement.value = '';
    this.nomeInput.nativeElement.value = '';
    this.senhaInput.nativeElement.value = '';
  }

  constructor(private router: Router) {}
}
