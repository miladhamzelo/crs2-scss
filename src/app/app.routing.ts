import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './core/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './core/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './core/services/auth/auth.guard';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
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
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
        data: { title: 'Dashboard', breadcrumb: 'DASHBOARD', reuse: true}
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'sessions/404'
  }
];

