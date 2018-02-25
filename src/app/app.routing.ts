import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './core/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './core/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './core/services/auth/auth.guard';

export const rootRouterConfig: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: '',
		component: AuthLayoutComponent,
		children: [
			{
				path: 'app-sessions',
				loadChildren: './feature/+sessions/sessions.module#SessionsModule',
				data: { title: 'Session', preload: false }
			}
		]
	},
	{
		path: '',
		component: AdminLayoutComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'others',
				loadChildren: './feature/+others/others.module#OthersModule',
				data: { title: 'Others', breadcrumb: 'OTHERS', preload: false }
			},
			{
				path: 'home',
				loadChildren: './feature/+home/home.module#HomeModule',
				data: { title: 'Home', breadcrumb: 'HOME', reuse: true }
			},
			{
				path: 'vandashboard',
				loadChildren:
					'./feature/+van-dashboard/van-dashboard.module#VanDashboardModule',
				data: {
					title: 'Vans Dashboard',
					breadcrumb: 'Vans Dashboard',
					preload: false,
					reuse: true
				}
			},
			{
				path: 'sessions',
				loadChildren: './feature/+sessions/sessions.module#SessionsModule',
				data: { title: 'Session', breadcrumb: 'Sessions', preload: false }
			}
		]
	},
	{
		path: '**',
		redirectTo: 'sessions/404'
	}
];
