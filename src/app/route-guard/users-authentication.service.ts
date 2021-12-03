import { HomescreenService } from './../homescreen.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsersAuthentication implements CanActivate {
  usersInformation: boolean = false;
  constructor(
    private router: Router,
    private homescreenService: HomescreenService
  ) {}
  canActivate(): boolean {
    if (this.usersInformation) {
      return true;
    }
    this.homescreenService.homescreen = false;
    console.log(this.homescreenService.homescreen);
    this.router.navigate(['error']);
    return false;
  }
}
