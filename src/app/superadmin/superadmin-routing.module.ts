import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperadminComponent } from './superadmin.component';
import { CategoryManagementComponent } from './components/category-management/category-management.component';
import { KitchenManagementComponent } from './components/kitchen-management/kitchen-management.component';
import { MenuManagementComponent } from './components/menu-management/menu-management.component';
import { OrderManagementComponent } from './components/order-management/order-management.component';
import { StaffManagementComponent } from './components/staff-management/staff-management.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { VendorManagementComponent } from './components/vendor-management/vendor-management.component';

const routes: Routes = [
  {
    path: '',
    component: SuperadminComponent,
    children: [
      { path: '', redirectTo: 'menu-management', pathMatch: 'full' },
      { path: 'menu-management', component: MenuManagementComponent },
      { path: 'user-management', component: UserManagementComponent },
      { path: 'category-management', component: CategoryManagementComponent },
      { path: 'kitchen-management', component: KitchenManagementComponent },
      { path: 'order-management', component: OrderManagementComponent },
      { path: 'vendor-management', component: VendorManagementComponent },
      { path: 'staff-management', component: StaffManagementComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperadminRoutingModule {}
