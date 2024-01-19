import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Subscription } from 'rxjs';
import { LoginDialog } from 'src/app/core/services/loginDialog.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isDialogVisible = false;
  private dialogSubscription: Subscription;

  constructor(
    private readonly loginDialogService: LoginDialog, private fb: FormBuilder, private router: Router
  ) {
    this.dialogSubscription = this.loginDialogService.isDialogVisible$.subscribe((isVisible: boolean) => {
      this.isDialogVisible = isVisible;
    });
  }

  showModel() {
    this.isDialogVisible = true;
    console.log('cliking');
  }

  ngOnDestroy(): void {
    this.dialogSubscription.unsubscribe();
  }

  submit = false
  registrationForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$')]]
  });

  get data() {
    return this.registrationForm.controls
  }

  onSubmit() {
    this.submit = true;
    console.log('clicked');
    console.log('f', this.data);
  }

  gotoSignup(){
      this.router.navigate(['/signup']);
  }
}
