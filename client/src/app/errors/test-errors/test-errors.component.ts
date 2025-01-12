import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-errors',
  imports: [CommonModule],
  templateUrl: './test-errors.component.html',
  styleUrl: './test-errors.component.css',
})
export class TestErrorsComponent {
  baseUrl = 'https://localhost:5001/api/';
  private http = inject(HttpClient);
  validationErrors: string[] = [];
  router = inject(Router);

  get400Error() {
    this.http.get(this.baseUrl + 'buggy/bad-request').subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
  }
  get401Error() {
    this.http.get(this.baseUrl + 'buggy/auth').subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
  }
  get404Error() {
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe({
      next: (res) => {
        console.log('+++++++++++++++++++++++++=');
        console.log(res);
      },
      error: (err) => console.log(err),
    });
  }
  get500Error() {
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
  }
  get400ValidationError() {
    this.http.post(this.baseUrl + 'account/register', {}).subscribe({
      next: (res) => console.log(res),
      error: (err) => {
        console.log(err);
        this.validationErrors = err;
      },
    });
  }
}
