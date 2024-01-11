import { Component, OnInit } from '@angular/core';
import { NutritionPlan } from 'src/app/Model/NutritionPlan';
import { NutritionPlanServiceService } from 'src/app/Services/NutritionPlanServices/nutrition-plan-service.service';

@Component({
  selector: 'app-listnutrition',
  templateUrl: './listnutrition.component.html',
  styleUrls: ['./listnutrition.component.css']
})
export class ListnutritionComponent implements OnInit {

 

  nutritionplans: NutritionPlan[] = [];

  constructor(private service: NutritionPlanServiceService) { 
    this.service.fetchAllPlans().subscribe((n) => this.nutritionplans = n);
  }

  ngOnInit(): void {
  }

}
