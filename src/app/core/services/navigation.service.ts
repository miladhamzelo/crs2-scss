import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

interface IMenuItem {
  type: string;       // Possible values: link/dropDown/icon/separator/extLink
  name?: string;      // Used as display text for item and title for separator type
  state?: string;     // Router state
  icon?: string;      // Material icon name
  tooltip?: string;   // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
}
interface IChildItem {
  type?: string;
  name: string;       // Display text
  state?: string;     // Router state
  icon?: string;
  sub?: IChildItem[];
}

interface IBadge {
  color: string;      // primary/accent/warn/hex color codes(#fff000)
  value: string;      // Display text
}

@Injectable()
export class NavigationService {
  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle = 'Favorites';

  iconMenu: IMenuItem[] = [
    {
      name: 'Favorite 1',
      type: 'icon',
      tooltip: 'Highchrts',
      icon: 'insert_chart',
      state: 'others/highcharts'
    },
    {
      name: 'Favorite 2',
      type: 'icon',
      tooltip: 'External Content',
      icon: 'input',
      state: 'others/external'
    },
    {
      name: 'Favorite 3',
      type: 'icon',
      tooltip: 'Tableau Dashboard',
      icon: 'multiline_chart',
      state: 'others/c3'
    },
    {
      type: 'separator',
      name: 'Sales'
    },
    {
      name: 'Vans Dashboard',
      type: 'link',
      tooltip: 'Vans Dashboard',
      icon: 'directions_bus',
      state: 'vandashboard'
    },
    {
      name: 'Tableau',
      type: 'link',
      tooltip: 'Tableau Dashboard Integration',
      icon: 'multiline_chart',
      state: 'others/c3',
      badges: [{ color: 'primary', value: 'new' }],
    },
    {
      name: 'DPS',
      type: 'extLink',
      tooltip: 'Dealer Performance Summary',
      icon: 'ac_unit',
      state: 'http://mbhobgnapp802.americas.bg.corpintra.net:9084/fieldOne'
    },
    {
      name: 'PC & LT',
      type: 'dropDown',
      tooltip: 'Field',
      icon: 'directions_car',
      state: 'sessions',
      sub: [
        {name: 'Report 1', state: 'coming-soon'},
        {name: 'Report 2', state: 'coming-soon'}
      ]
    },
    {
      type: 'separator',
      name: 'Customer Experience'
    },
    {
      name: 'Laureate',
      type: 'extLink',
      tooltip: 'Laureate',
      icon: 'airplanemode_active',
      state: 'http://sl-qa.usfdc.corpintra.net/laureate-admin/main/indexFull.html?userType=H&costCenter=00273'
    },
    {
      name: 'Report 2',
      type: 'link',
      tooltip: 'Service',
      icon: 'flight_land',
      state: 'sessions/coming-soon'
    },
    {
      type: 'separator',
      name: 'Parts'
    },
    {
      name: 'PAC',
      type: 'extLink',
      tooltip: 'Parts Assistance Center',
      icon: 'build',
      state: 'https://crs2-qa.es.corpintra.net/pac/app/main.html#/dealerCallVolumeReport'
    },
    {
      name: 'System Fill',
      type: 'link',
      tooltip: 'System Fill',
      icon: 'view_compact',
      state: 'sessions/coming-soon'
    },
    /*{
      type: 'separator',
      name: 'Warranty'
    },
    {
      name: 'Vehicle Quality by Production Date',
      type: 'link',
      tooltip: 'Vehicle Quality by Production Date',
      icon: 'timeline',
      state: 'sessions/coming-soon'
    },
    {
      name: 'Vehicle Quality by Retail Date',
      type: 'link',
      tooltip: 'Vehicle Quality by Retail Date',
      icon: 'timeline',
      state: 'sessions/coming-soon'
    },*/
    {
      type: 'separator',
      name: 'Finance'
    },
    {
      name: 'Report 1',
      type: 'link',
      tooltip: 'Customer',
      icon: 'flight_land',
      state: 'sessions/coming-soon'
    },
    {
      name: 'Report 2',
      type: 'link',
      tooltip: 'Service',
      icon: 'flight_land',
      state: 'sessions/coming-soon'
    },
    {
      type: 'separator',
      name: 'IT'
    },
    {
      name: 'Report 1',
      type: 'link',
      tooltip: 'Customer',
      icon: 'flight_land',
      state: 'sessions/coming-soon'
    },
    {
      name: 'Report 2',
      type: 'link',
      tooltip: 'Service',
      icon: 'flight_land',
      state: 'sessions/coming-soon'
    }
  ];

  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.iconMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();

  constructor() { }

  // Customizer component uses this method to change menu.
  // You can remove this method and customizer component.
  // Or you can customize this method to supply different menu for
  // different user type.
  publishNavigationChange(menuType: string) {}
}
