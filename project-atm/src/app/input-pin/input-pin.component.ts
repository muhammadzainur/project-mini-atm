import { Component } from '@angular/core';

@Component({
  selector: 'app-input-pin',
  templateUrl: './input-pin.component.html',
  styleUrl: './input-pin.component.css',
})
export class InputPinComponent {
  displayedPin: string = '';
  password: string = '';
  maskedPassword: string = '';
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    // Hanya izinkan angka
    if (/^\d*$/.test(value)) {
      this.password = value;
      this.maskedPassword = this.password.replace(/./g, '*'); // Mengganti semua karakter dengan bintang
    } else {
      // Jika input tidak valid, reset input
      input.value = this.password; // Kembalikan ke nilai yang valid
    }
  }

  clearInput() {
    this.displayedPin = ''; // Kosongkan input
  }
}
