import { Component, OnInit } from '@angular/core';
import { DietPlan } from 'src/app/Model/DietPlan';
import { DietplanService } from 'src/app/Services/DietPlanServices/dietplan.service';

@Component({
  selector: 'app-dietlist',
  templateUrl: './dietlist.component.html',
  styleUrls: ['./dietlist.component.css']
})
export class DietlistComponent implements OnInit {
dietplans:DietPlan[]=[];
  constructor(private service:DietplanService) {
    this.service.fetchAllPlans().subscribe((d)=>this.dietplans=d)
   }

  ngOnInit(): void {
  }

}