import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  isPopupVisible: boolean = false;

  constructor(private router: Router) {}

  showPopup(): void {
    this.isPopupVisible = true;
  }

  hidePopup(): void {
    this.isPopupVisible = false;
  }

  confirmExit(): void {
    this.isPopupVisible = false;

    // Navigasi ke halaman Terima Kasih
    this.router.navigate(['/thank-you']);
  }
}
