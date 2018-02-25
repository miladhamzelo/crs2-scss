import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// import { CommonDirectivesModule } from './sdirectives/common/common-directives.module';
import { SigninComponent } from './signin/signin.component';
import { SessionsRoutes } from './sessions.routing';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { MaterialModule } from '../../shared/material/material.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		RouterModule.forChild(SessionsRoutes)
	],
	declarations: [
		SigninComponent,
		NotFoundComponent,
		ErrorComponent,
		ComingSoonComponent
	]
})
export class SessionsModule {}
