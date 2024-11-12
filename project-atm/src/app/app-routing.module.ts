import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputPinComponent } from './input-pin/input-pin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TarikTunaiComponent } from './tarik-tunai/tarik-tunai.component';
import { CekSaldoComponent } from './cek-saldo/cek-saldo.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'input-pin', component: InputPinComponent },
  { path: 'cancel', component: DashboardComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'cek-saldo', component: CekSaldoComponent },
  { path: 'keluar', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
