import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AuthService } from 'auth';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected title = 'angular-20-shell';
  authService = inject(AuthService);

  ngOnInit(): void {
    console.log('ngOninit SHELL: ', this.authService.userName);
    fromEvent(window, 'event').subscribe((event) => {
      console.log('ngOninit ', event);
    });
  }
}
