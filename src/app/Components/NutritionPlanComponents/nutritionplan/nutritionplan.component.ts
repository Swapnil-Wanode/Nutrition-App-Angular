import { Component, OnInit } from '@angular/core';
import { NutritionPlan } from 'src/app/Model/NutritionPlan';
import { NutritionPlanServiceService } from 'src/app/Services/NutritionPlanServices/nutrition-plan-service.service';

@Component({
  selector: 'app-nutritionplan',
  templateUrl: './nutritionplan.component.html',
  styleUrls: ['./nutritionplan.component.css']
})
export class NutritionplanComponent implements OnInit {

  nutrition: NutritionPlan = new NutritionPlan();

 
  nutritionplans: NutritionPlan[] = [];

  constructor(private nutritionservice: NutritionPlanServiceService) { 
    this.nutritionservice.fetchAllPlans().subscribe((n) => this.nutritionplans = n);
  }

  flag: boolean = false;


  fetchAllPlans(): void {
    let f = confirm("Please confirm to fetch the details  ");
    if (f == true) {
      this.nutritionservice.fetchAllPlans().subscribe((n) => this.nutritionplans = n);
    }
  }
  addPlan(): void {
    let f = confirm("Please confirm to add the details  ");
    if (f == true) {
      this.nutritionservice.addPlan(this.nutrition).subscribe((n) => this.nutrition = n);
    }
  }
  updatePlan(): void {
    let f = confirm("Please confirm to update the details  ");
    if (f == true) {
      this.nutritionservice.updatePlan(this.nutrition).subscribe((n) => this.nutrition = n);
    }
  }

  deletePlan(dp:NutritionPlan): void {
    let f = confirm("Do you want to delete ");
    if (f == true) {
      this.nutritionservice.deletePlan(dp.id).subscribe((n) => this.nutrition = n);
    }
  }

  getPlanById(np:NutritionPlan):void{
    this.nutritionservice.getPlanById(np.id).subscribe((n)=>this.nutrition=n);
  }
  ngOnInit() {
  }
}
