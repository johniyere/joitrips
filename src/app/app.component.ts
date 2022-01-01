import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'joi-root',
  template: `
    <nav class="p-4 border-b-2 border-neutral-900" *ngIf="showTopnav">
      <div class="container mx-auto flex flex-row justify-between items-center">
        <div class="flex flex-row items-center gap-4">
          <a class="font-display text-4xl cursor-pointer" [routerLink]="''"
            >Joitrips</a
          >

          <ul class="flex flex-row gap-4 items-center">
            <li class="cursor-pointer"><a [routerLink]="'trips'">Trips</a></li>
            <li class="cursor-pointer"><a>Browse</a></li>
          </ul>
        </div>
        <a
          joi-button
          color="mustard"
          *ngIf="!(authService.user$ | async); else logOutTmpl"
          [routerLink]="['login']"
        >
          Login
        </a>

        <ng-template #logOutTmpl
          ><button
            joi-button
            color="mustard"
            (click)="signOut()"
            *ngIf="authService.user$ | async"
          >
            Log out
          </button></ng-template
        >
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'joitrips';
  showTopnav = true;

  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url: string = event.url;
        this.showTopnav = !/\/trips\/\w+/g.test(url);
      });

    this.authService.user$.subscribe((user) => {
      console.log(user);
    });
  }

  async signOut() {
    await this.authService.signOut();
  }
}
