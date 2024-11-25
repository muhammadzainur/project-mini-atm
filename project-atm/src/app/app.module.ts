import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InputPinComponent } from './input-pin/input-pin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CekSaldoComponent } from './cek-saldo/cek-saldo.component';
import { TarikTunaiComponent } from './tarik-tunai/tarik-tunai.component';
import { FormsModule } from '@angular/forms';
import { ThankYouComponent } from './thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    InputPinComponent,
    DashboardComponent,
    CekSaldoComponent,
    TarikTunaiComponent,
    CekSaldoComponent,
    ThankYouComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
