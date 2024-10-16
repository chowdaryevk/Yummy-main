import { Component } from '@angular/core';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrl: './superadmin.component.scss',
})
export class SuperadminComponent {
  showsidebar: boolean = false;
  svgIconPath = '../../assets/admin';
  toggleNav() {
    this.showsidebar = !this.showsidebar;
  }
  adminurlData = [
    {
      name: 'Menu Management',
      router: 'menu-management',
      icon: 'departments.svg',
    },
    {
      name: 'User Management',
      router: 'user-management',
      icon: 'channels.svg',
    },
    {
      name: 'Category Management',
      router: 'category-management',
      icon: 'departments.svg',
    },
    {
      name: 'Kitchen Management',
      router: 'kitchen-management',
      icon: 'channels.svg',
    },
    {
      name: 'Order Management',
      router: 'order-management',
      icon: 'departments.svg',
    },
    {
      name: 'Vendor Management',
      router: 'vendor-management',
      icon: 'channels.svg',
    },
    {
      name: 'Staff Management',
      router: 'staff-management',
      icon: 'channels.svg',
    }
  ];
}
