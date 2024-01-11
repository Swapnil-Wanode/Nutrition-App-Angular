import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WeightLog } from 'src/app/Model/WeightLog';
import { WeightplanService } from 'src/app/Services/WeightPlanServices/weightplan.service';

@Component({
  selector: 'app-weightlog',
  templateUrl: './weightlog.component.html',
  styleUrls: ['./weightlog.component.css']
})
export class WeightlogComponent implements OnInit {

  userForm: FormGroup
  flag:boolean=false;

 weightLog: WeightLog=new WeightLog();
 weightLogs:WeightLog[] = [];

  constructor( private m: WeightplanService, private n:Router) {
    this.m.showAll().subscribe((p)=>this.weightLogs=p);
   }

   addWeightLog():void{
    let r= confirm("please confirm the details to be added");
    if(r==true){
    this.m.addWeightLog(this.weightLog).subscribe((p)=>this.weightLog=p);
   }
  }

   deleteWeightLog(dl:WeightLog):void{
    let r = confirm("please confirm the the details to be deleted");
    if(r==true){
    this.m.deleteWeightLog(dl.id).subscribe((p)=> this.weightLog=p);
  }
}

  updateWeightLog():void{
    let r = confirm("please confirm the details to be updated ");
  if(r==true){
  this.m.updateWeightLog(this.weightLog).subscribe((p)=>this.weightLog= p);
  }
}


  showAll():void{
      
   this.m.showAll().subscribe((p)=>this.weightLogs=p);
   }
  
   findWeightLogById():void{
    // if(!this.payment.id==null){
     
      this.m.findWeightLogById(this.weightLog.id).subscribe((p)=>this.weightLog=p);
    // }
    // else{ 
    //   alert("sorry "+this.payment.id+ " is not available");
    // }
  }

  updateById(ubi:WeightLog):void{
    this.m.findWeightLogById(ubi.id).subscribe((p)=>this.weightLog=p);
  }

  // onKeyPress(event: any) {
  //   const regexpNumber = /[0-9\+\ ]/;
  //   let inputCharacter = String.fromCharCode(event.charCode);
  //   if (event.keyCode != 8 && !regexpNumber.test(inputCharacter)) {
  //     event.preventDefault();
  //   }
  // }

ngOnInit(): void {
  }

}
