import { Component, HostListener, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  accountService = inject(AccountService);
  model: any = {};
  isDropdownOpen = false;

  login() {
    this.accountService.login(this.model).subscribe({
      next: (res) => {
      },
      error: (err) => console.log(err),
    });
  }

  logout() {
    this.accountService.logout()
  }

  toggleDropdown() {
    console.log('++++++++=');
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.mydropdown');
    if (!clickedInside) {
      this.isDropdownOpen = false;
    }
  }
}
