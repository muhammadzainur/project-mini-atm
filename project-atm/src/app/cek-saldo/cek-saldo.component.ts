import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cek-saldo',
  templateUrl: './cek-saldo.component.html',
  styleUrl: './cek-saldo.component.css',
})
export class CekSaldoComponent {
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
