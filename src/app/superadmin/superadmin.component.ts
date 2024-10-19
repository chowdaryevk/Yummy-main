import { Component } from '@angular/core';
import { ADMIN_URL_DATA } from './constants/super-admin';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrl: './superadmin.component.scss',
})
export class SuperadminComponent {
  showsidebar: boolean = false;
  searchValue: string = '';
  svgIconPath = '../../assets/admin';
  adminurlData = ADMIN_URL_DATA;
  toggleNav() {
    this.showsidebar = !this.showsidebar;
  }
}
