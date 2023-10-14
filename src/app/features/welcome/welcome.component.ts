import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  standalone: true
})
export class WelcomeComponent {

  constructor(private router: Router) {
  }

  public navigateToLoginPage() {
    this.router.navigate(['authentication'])
  }
}
