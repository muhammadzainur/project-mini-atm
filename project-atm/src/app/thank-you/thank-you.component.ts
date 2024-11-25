import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrl: './thank-you.component.css',
})
export class ThankYouComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Tunggu selama 3 detik sebelum navigasi ke dashboard
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 3000); // 3000ms = 3 detik
  }
}
