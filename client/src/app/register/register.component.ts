import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';

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

  register() {
    console.log('+++++++++++++clicked register++++++++++++=');
    this.accountService.register(this.model).subscribe({
      next: (user) => {
        console.log(user);
        this.cancel();
      },
    });
  }
  cancel() {
    this.cancelRegisterMode.emit(false);
  }
}
