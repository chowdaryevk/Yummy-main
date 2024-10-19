import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { TableBtn, TableColumn } from '../../../shared/interfaces';

@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.component.html',
  styleUrl: './menu-management.component.scss',
})
export class MenuManagementComponent implements OnInit {
  menuManagementForm: FormGroup | any;
  columns: TableColumn[] = [];
  buttons: TableBtn[] = [];
  data: any = [];
  totalVolume: number = 0;
  totalRides: number = 0;
  isAddMenu: boolean = false;
  dataSource = new MatTableDataSource<any>([]);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.menuManagementForm = this.fb.group({
      itemId: ['', Validators.required],
      itemCode: ['', Validators.required],
      itemDescription: ['', Validators.required],
      itemIngredients: [''],
      itemPrice: [null, Validators.required],
      postalcode: [''],
      deliveryMethod: ['', Validators.required],
      attachment: [''],
    });

    this.columns = [
      {
        columnDef: 'itemId',
        header: 'Id',
        cell: (element: any) => `${element.itemId}`,
      },
      {
        columnDef: 'itemCode',
        header: 'Code',
        cell: (element: any) => `${element.itemCode}`,
      },
      {
        columnDef: 'itemDescription',
        header: 'Description',
        cell: (element: any) => `${element.itemDescription}`,
      },
      {
        columnDef: 'price',
        header: 'Price',
        cell: (element: any) => `${element.price}`,
      },
    ];
  }

  addMenu(): void {
    this.isAddMenu = true;
  }

  onSubmit() {
    if (this.menuManagementForm.valid) {
      const newItem: any = this.menuManagementForm.value;
      this.dataSource.data = [...this.dataSource.data, newItem];
      this.menuManagementForm.reset();
    }
  }

  applyFilter(filteredData: any[]) {
    this.totalVolume = 0;
    this.totalRides = 0;
    filteredData.forEach((user) => {
      this.totalVolume = this.totalVolume + parseInt(user.volume);
      this.totalRides = this.totalRides + user.rides;
    });
  }

  goBack(): void {
    this.isAddMenu = false
  }

  buttonClick(result: string[]) {}
}
