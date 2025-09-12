import { NgIf } from '@angular/common';
import { Component, Host, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NgIf],
  templateUrl: './app.component.html',
})
export class AppComponent {
  showServices = false;
  mobileMenu = false;

  toggleServices() {
    this.showServices = !this.showServices;
  }
  closeServices() {
    this.showServices = false;
  }
  toggleMobileMenu() {
    this.mobileMenu = !this.mobileMenu;
  }
  closeMobileMenu() {
    this.mobileMenu = false;
  }

  @HostListener('document:click', ['$event'])
    handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      console.log(target)
      
    }


  title = 'Frontend';
}
