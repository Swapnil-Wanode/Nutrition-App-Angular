import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeightLog } from 'src/app/Model/WeightLog';
import { WeightplanService } from 'src/app/Services/WeightPlanServices/weightplan.service';

@Component({
  selector: 'app-weightloglist',
  templateUrl: './weightloglist.component.html',
  styleUrls: ['./weightloglist.component.css']
})
export class WeightloglistComponent implements OnInit {

  
 weightLog: WeightLog=new WeightLog();
 weightLogs:WeightLog[] = [];

  constructor( private m: WeightplanService, private n:Router) {
    this.m.showAll().subscribe((p)=>this.weightLogs=p);
   }

  ngOnInit(): void {
  }

}
