import { Component, OnInit } from '@angular/core';
import { NutritionPlan } from 'src/app/Model/NutritionPlan';
import { NutritionPlanServiceService } from 'src/app/Services/NutritionPlanServices/nutrition-plan-service.service';

@Component({
  selector: 'app-nutritionlist',
  templateUrl: './nutritionlist.component.html',
  styleUrls: ['./nutritionlist.component.css']
})
export class NutritionlistComponent implements OnInit {

  nutritionplans: NutritionPlan[] = [];

  constructor(private service: NutritionPlanServiceService) { 
    this.service.fetchAllPlans().subscribe((n) => this.nutritionplans = n);
  }

  ngOnInit(): void {
  }

}
