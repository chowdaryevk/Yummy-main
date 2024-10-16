import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperadminRoutingModule } from './superadmin-routing.module';
import { SuperadminComponent } from './superadmin.component';
import { MenuManagementComponent } from './components/menu-management/menu-management.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { CategoryManagementComponent } from './components/category-management/category-management.component';
import { KitchenManagementComponent } from './components/kitchen-management/kitchen-management.component';
import { OrderManagementComponent } from './components/order-management/order-management.component';
import { VendorManagementComponent } from './components/vendor-management/vendor-management.component';
import { StaffManagementComponent } from './components/staff-management/staff-management.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    SuperadminComponent,
    MenuManagementComponent,
    UserManagementComponent,
    CategoryManagementComponent,
    KitchenManagementComponent,
    OrderManagementComponent,
    VendorManagementComponent,
    StaffManagementComponent,
  ],
  imports: [
    CommonModule,
    SuperadminRoutingModule,
    MaterialModule
  ]
})
export class SuperadminModule { }
