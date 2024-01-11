import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerlistComponent } from './Components/All_Table_Data/customerlist/customerlist.component';
import { DietlistComponent } from './Components/All_Table_Data/dietlist/dietlist.component';
import { NutritionlistComponent } from './Components/All_Table_Data/nutritionlist/nutritionlist.component';
import { PaymentlistComponent } from './Components/All_Table_Data/paymentlist/paymentlist.component';
import { WeightloglistComponent } from './Components/All_Table_Data/weightloglist/weightloglist.component';
import { CustomersectionComponent } from './Components/customersection/customersection.component';
import { DietplanComponent } from './Components/DietPlanComponents/dietplan/dietplan.component';
import { ListdietComponent } from './Components/DietPlanComponents/listdiet/listdiet.component';
import { ListnutritionComponent } from './Components/NutritionPlanComponents/listnutrition/listnutrition.component';
import { NutritionplanComponent } from './Components/NutritionPlanComponents/nutritionplan/nutritionplan.component';
import { AddpaymentComponent } from './Components/PaymentComponents/addpayment/addpayment.component';
import { ListpaymentComponent } from './Components/PaymentComponents/listpayment/listpayment.component';

import { PaymentComponent } from './Components/PaymentComponents/payment/payment.component';
import { AddcustomerComponent } from './Components/UserComponent/addcustomer/addcustomer.component';
import { AdminComponent } from './Components/UserComponent/admin/admin.component';
import { CustomerComponent } from './Components/UserComponent/customer/customer.component';
import { ListcustomerComponent } from './Components/UserComponent/listcustomer/listcustomer.component';
import { LoginComponent } from './Components/UserComponent/login/login.component';
import { LoginsuccessComponent } from './Components/UserComponent/loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './Components/UserComponent/registration/registration.component';
import { ListweightlogComponent } from './Components/WeightPlanComponents/listweightlog/listweightlog.component';
import { WeightlogComponent } from './Components/WeightPlanComponents/weightlog/weightlog.component';

const routes: Routes = [
  {
    path:'PaymentComponent',
    component:PaymentComponent
  },
  {
    path:'weightlog',
    component:WeightlogComponent
  },
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'logincomponent',
    component:LoginComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'loginsuccess',
    component:LoginsuccessComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'customer',
    component:CustomerComponent
  },
  {
    path:'listcustomer',
    component:ListcustomerComponent
  },
  {
    path:'listpayment',
    component:ListpaymentComponent
  },
  {
    path:'listweightlog',
    component:ListweightlogComponent
  },
  {
    path:'listnutrition',
    component:ListnutritionComponent
  },
  {
    path:'listdiet',
    component:ListdietComponent
  },
  {
    path:'paymentlist',
    component:PaymentlistComponent
  },
  {
    path:'customerlist',
    component:CustomerlistComponent
  },
  {
    path:'weightloglist',
    component:WeightloglistComponent
  },
  {
    path:'nutritionlist',
    component:NutritionlistComponent
  },
  {
    path:'dietlist',
    component:DietlistComponent
  },
  {
    path:'customersection',
    component:CustomersectionComponent
  },
  {
    path:'nutritioncomponent',
    component:NutritionplanComponent
  },
  {
    path:'addpayment',
    component:AddpaymentComponent
  },
  {
    path:'addcustomer',
    component:AddcustomerComponent
  },
  {
    path:'dietcomponent',
    component:DietplanComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
