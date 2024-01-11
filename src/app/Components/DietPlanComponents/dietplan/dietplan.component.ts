import { Component, OnInit } from '@angular/core';
import { DietPlan } from 'src/app/Model/DietPlan';
import { DietplanService } from 'src/app/Services/DietPlanServices/dietplan.service';

@Component({
  selector: 'app-dietplan',
  templateUrl: './dietplan.component.html',
  styleUrls: ['./dietplan.component.css']
})
export class DietplanComponent implements OnInit {
dietplan:DietPlan=new DietPlan()
dietplans:DietPlan[]=[];
  constructor(private dietplanservice:DietplanService) { 
    this.dietplanservice.fetchAllPlans().subscribe((d)=>this.dietplans=d);

  }
  flag:boolean=false;

  fetchAllPlans(): void {
    let f = confirm("Please confirm to fetch the details  ");
    if (f == true) {
      this.dietplanservice.fetchAllPlans().subscribe((d) => this.dietplans = d);
    }
  }
  addPlan(): void {
    let f = confirm("Please confirm to add the details  ");
    if (f == true) {
      this.dietplanservice.addPlan(this.dietplan).subscribe((d) => this.dietplan = d);
    }
  }
  updatePlan(): void {
    let f = confirm("Please confirm to update the details  ");
    if (f == true) {
      this.dietplanservice.updatePlan(this.dietplan).subscribe((d) => this.dietplan = d);
    }
  }

  deletePlan(dp:DietPlan): void {
    let f = confirm("Do you want to delete ");
    if (f == true) {
      this.dietplanservice.deletePlan(dp.id).subscribe((d) => this.dietplan = d);
    }
  }
  getPlanById(np:DietPlan):void{
    this.dietplanservice.getPlanById(np.id).subscribe((d)=>this.dietplan=d);
  }
  ngOnInit(): void {
  }

}