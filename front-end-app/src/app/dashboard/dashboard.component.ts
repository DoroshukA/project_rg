import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(
    private flashMessages: FlashMessagesService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logoutUSer() {
    this.authService.logout();
    this.flashMessages.show("Ви вийшли з облікового запису", {
      cssClass: 'alert-warning',
      timeout: 4000
    });
    this.router.navigate(['auth']);
    return false;
  }

}
