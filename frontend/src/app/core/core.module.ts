import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [CoreComponent, LoginComponent],
  imports: [CommonModule, CoreRoutingModule, ReactiveFormsModule],
})
export class CoreModule {}
