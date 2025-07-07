import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AuthService } from 'auth';
// import { Lib1Service } from 'projects/lib1/src/public-api';

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
  }
}
