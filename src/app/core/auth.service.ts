import { Injectable, Optional } from '@angular/core';
import {
  Auth,
  authState,
  signInAnonymously,
  signOut,
  User,
  GoogleAuthProvider,
  signInWithPopup,
} from '@angular/fire/auth';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public readonly user$: Observable<User | null> = EMPTY;

  constructor(@Optional() private auth: Auth) {
    this.user$ = authState(this.auth);
  }

  async signInWithGoogle() {
    return await signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  async signOut() {
    return await signOut(this.auth);
  }
}
