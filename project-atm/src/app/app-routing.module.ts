import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputPinComponent } from './input-pin/input-pin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TarikTunaiComponent } from './tarik-tunai/tarik-tunai.component';
import { CekSaldoComponent } from './cek-saldo/cek-saldo.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'input-pin', component: InputPinComponent },
  { path: 'cancel', component: DashboardComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'cek-saldo', component: CekSaldoComponent },
  { path: 'tarik-tunai', component: TarikTunaiComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: '**', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
