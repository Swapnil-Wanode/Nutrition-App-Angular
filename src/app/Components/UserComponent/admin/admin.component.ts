import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private r:Router) { }
  signOut():void{
    this.r.navigate(['/logincomponent'])
  }


  ngOnInit(): void {
  }

}
