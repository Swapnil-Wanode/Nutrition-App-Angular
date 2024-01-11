import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customersection',
  templateUrl: './customersection.component.html',
  styleUrls: ['./customersection.component.css']
})
export class CustomersectionComponent implements OnInit {

  constructor(private r:Router) { }
  signOut():void{
    this.r.navigate(['/logincomponent'])
  }

  ngOnInit(): void {
  }

}
