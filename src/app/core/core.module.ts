import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import {
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatOptionModule,
  MatSelectModule,
  MatMenuModule,
  MatSnackBarModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatRippleModule, MatExpansionModule, MatInputModule, MatAutocompleteModule, MatTableModule, MatTabsModule, MatChipsModule,
  MatDialogModule, MatProgressBarModule
} from '@angular/material';

// ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT
import { HeaderSideComponent } from './components/header-side/header-side.component';
import { SidebarSideComponent } from './components/sidebar-side/sidebar-side.component';

// ONLY REQUIRED FOR **TOP** NAVIGATION LAYOUT
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { SidebarTopComponent } from './components/sidebar-top/sidebar-top.component';

// ONLY FOR DEMO (Removable without changing any layout configuration)
import { CustomizerComponent } from './components/customizer/customizer.component';

// ALL TIME REQUIRED
import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './components/layouts/auth-layout/auth-layout.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

// DIRECTIVES
import { FontSizeDirective } from './directives/font-size.directive';
import { ScrollToDirective } from './directives/scroll-to.directive';
import { AppDropdownDirective } from './directives/dropdown.directive';
import { DropdownAnchorDirective } from './directives/dropdown-anchor.directive';
import { DropdownLinkDirective } from './directives/dropdown-link.directive';

// PIPES
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { ExcerptPipe } from './pipes/excerpt.pipe';

// SERVICES
import { ThemeService } from './services/theme.service';
import { LayoutService } from './services/layout.service';
import { NavigationService } from './services/navigation.service';
import { RoutePartsService } from './services/route-parts.service';
import { AuthGuard } from './services/auth/auth.guard';
import {StartupService} from './services/startup.service';
import {GlobalDataService} from './services/globaldata.service';
import {WindowRef} from './services/window.ref.service';
import {SelectivePreloadingStrategy} from './services/selective-preloading-strategy';
import {AppResizeService} from './services/app-resize.service';

const classesToInclude = [

  HeaderTopComponent,
  SidebarTopComponent,
  SidenavComponent,
  NotificationsComponent,
  SidebarSideComponent,
  HeaderSideComponent,
  AdminLayoutComponent,
  AuthLayoutComponent,
  BreadcrumbComponent,
  CustomizerComponent,
  FontSizeDirective,
  ScrollToDirective,
  AppDropdownDirective,
  DropdownAnchorDirective,
  DropdownLinkDirective
];

const materialModules = [
  MatRadioModule,
  MatCheckboxModule,
  MatRippleModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatTooltipModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatTableModule,
  MatTabsModule,
  MatMenuModule,
  MatChipsModule,
  MatListModule,
  MatSidenavModule,
  MatOptionModule,
  MatSnackBarModule,
  MatGridListModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatCheckboxModule
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    TranslateModule,
    materialModules
  ],
  providers: [
    ThemeService,
    LayoutService,
    NavigationService,
    RoutePartsService,
    AuthGuard,
    StartupService,
    GlobalDataService,
    AppResizeService,
    SelectivePreloadingStrategy,
    WindowRef
  ],
  declarations: classesToInclude,
  exports: classesToInclude
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor (@Optional()
               @SkipSelf()
                 parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
