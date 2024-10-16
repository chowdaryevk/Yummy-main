import { Component, Directive, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.component.html',
  styleUrl: './menu-management.component.scss'
})
export class MenuManagementComponent implements OnInit{
  address = new Address();

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {

  }

}
export class Address {
  constructor(
    public firstname?: string,
    public lastname?: string,
    public address?: string,
    public city?: string,
    public state?: string,
    public postalcode?: string
  ) {}
}
