import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'joi-login',
  template: `
    <h1 class="text-ultramarine-500 font-display">Login or Sign up</h1>

    <button joi-button color="mustard" (click)="signInWithGoogle()">
      Sign in with google
    </button>
    <a [routerLink]="''">Close</a>
  `,
  styles: [
    `
      :host {
        @apply bg-white;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  @Output() closeLoginPage: EventEmitter<any> = new EventEmitter();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  async signInWithGoogle() {
    await this.authService.signInWithGoogle();
  }

  closeLogin() {
    this.closeLoginPage.emit(true);
    this.closeLoginPage.unsubscribe();
  }
}
