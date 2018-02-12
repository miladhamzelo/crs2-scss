import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppBlankComponent } from './app-blank/app-blank.component';
import { OthersRoutes } from './others.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(OthersRoutes)
  ],
  declarations: [
    AppBlankComponent
  ]
})
export class OthersModule { }
