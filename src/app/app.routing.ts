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
        path: 'sessions',
        loadChildren: './views/sessions/sessions.module#SessionsModule',
        data: { title: 'Session'}
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
        loadChildren: './views/others/others.module#OthersModule',
        data: { title: 'Others', breadcrumb: 'OTHERS', preload: false}
      },
      {
        path: 'home',
        loadChildren: './views/home/home.module#HomeModule',
        data: { title: 'Home', breadcrumb: 'HOME', reuse: true}
      },
      {
        path: 'vandashboard',
        loadChildren: './views/van-dashboard/van-dashboard.module#VanDashboardModule',
        data: { title: 'Vans Dashboard', breadcrumb: 'Vans Dashboard', preload: true, reuse: true}
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'sessions/404'
  }
];

