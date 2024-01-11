import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './Components/PaymentComponents/payment/payment.component';
import { DietplanComponent } from './Components/DietPlanComponents/dietplan/dietplan.component';
import { NutritionplanComponent } from './Components/NutritionPlanComponents/nutritionplan/nutritionplan.component';
import { WeightlogComponent } from './Components/WeightPlanComponents/weightlog/weightlog.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeleteUserComponent } from './Components/UserComponent/deleteuser/delete-user.component';
import { SaveUserComponent } from './Components/UserComponent/saveuser/save-user.component';
import { ViewbyidpaymentComponent } from './Components/PaymentComponents/viewbyidpayment/viewbyidpayment.component';
import { ListpaymentComponent } from './Components/PaymentComponents/listpayment/listpayment.component';
import { AddpaymentComponent } from './Components/PaymentComponents/addpayment/addpayment.component';
import { UpdatepaymentComponent } from './Components/PaymentComponents/updatepayment/updatepayment.component';
import { LoginComponent } from './Components/UserComponent/login/login.component';
import { LoginsuccessComponent } from './Components/UserComponent/loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './Components/UserComponent/registration/registration.component';
import { AdminComponent } from './Components/UserComponent/admin/admin.component';
import { CustomerComponent } from './Components/UserComponent/customer/customer.component';
import { ListcustomerComponent } from './Components/UserComponent/listcustomer/listcustomer.component';
import { ListuserComponent } from './Components/UserComponent/listuser/listuser.component';
import { ListweightlogComponent } from './Components/WeightPlanComponents/listweightlog/listweightlog.component';
import { ListnutritionComponent } from './Components/NutritionPlanComponents/listnutrition/listnutrition.component';
import { ListdietComponent } from './Components/DietPlanComponents/listdiet/listdiet.component';
import { CustomersectionComponent } from './Components/customersection/customersection.component';
import { PaymentlistComponent } from './Components/All_Table_Data/paymentlist/paymentlist.component';
import { NutritionlistComponent } from './Components/All_Table_Data/nutritionlist/nutritionlist.component';
import { WeightloglistComponent } from './Components/All_Table_Data/weightloglist/weightloglist.component';
import { CustomerlistComponent } from './Components/All_Table_Data/customerlist/customerlist.component';
import { DietlistComponent } from './Components/All_Table_Data/dietlist/dietlist.component';
import { AddcustomerComponent } from './Components/UserComponent/addcustomer/addcustomer.component';

@NgModule({
  declarations: [
    AppComponent,
    SaveUserComponent,
    DeleteUserComponent,
    PaymentComponent,
    DietplanComponent,
    NutritionplanComponent,
    WeightlogComponent,
    AddpaymentComponent,
    ViewbyidpaymentComponent,
    ListpaymentComponent,
    UpdatepaymentComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
    AdminComponent,
    CustomerComponent,
    ListcustomerComponent,
    ListuserComponent,
    ListweightlogComponent,
    ListnutritionComponent,
    ListdietComponent,
    CustomersectionComponent,
    PaymentlistComponent,
    NutritionlistComponent,
    WeightloglistComponent,
    CustomerlistComponent,
    DietlistComponent,
    AddcustomerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
