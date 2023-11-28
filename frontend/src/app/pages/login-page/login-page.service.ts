// login.service.ts
import { ElementRef, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginUser } from '@features/user/state/actions/user.actions';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private store: Store<any>) {}

  login(email: string, password: string): void {
    this.store.dispatch(loginUser({ email, password }));
  }
}
