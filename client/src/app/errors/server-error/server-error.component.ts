import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  imports: [CommonModule],
  templateUrl: './server-error.component.html',
  styleUrl: './server-error.component.css',
})
export class ServerErrorComponent {
  error: any;

  constructor(private router: Router) {
    const navitation = this.router.getCurrentNavigation();
    this.error = navitation?.extras?.state?.['error'];
  }
}
