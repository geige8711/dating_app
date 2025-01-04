import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  accountService = inject(AccountService);
  model: any = {};
  cancelRegisterMode = output<boolean>();
  private toastr = inject(ToastrService);

  register() {
    this.accountService.register(this.model).subscribe({
      next: (user) => {
        this.cancel();
      },
      error: (err) => {
        this.toastr.error(err.error);
      },
    });
  }
  cancel() {
    this.cancelRegisterMode.emit(false);
  }
}
