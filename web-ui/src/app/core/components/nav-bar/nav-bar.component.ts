import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDialog } from '../../services/loginDialog.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(
    private readonly router: Router,
    private readonly loginDialogService: LoginDialog
  ) { }

  onLogin() {
    this.loginDialogService.setIsDialogVisible(true);
  }
}
