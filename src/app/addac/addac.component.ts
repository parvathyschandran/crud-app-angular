import { Component, OnInit } from '@angular/core';
import { AccountSchema } from 'src/models/accountSchema';
import { ApiService } from '../services/api.service';
import { Route, Router, RouterConfigurationFeature, RouterEvent, RouterLink, RouterState } from '@angular/router';

@Component({
  selector: 'app-addac',
  templateUrl: './addac.component.html',
  styleUrls: ['./addac.component.css']
})
export class AddacComponent implements OnInit{

  account:AccountSchema={}
  constructor(private api:ApiService,private addAccountRouter:Router){

  }
  
  ngOnInit(): void {
   
  }

  addAccount(account:AccountSchema){
    //call api in service
    this.api.addAccount(account).subscribe({
      next:(response:any)=>{
        //data added into server
        alert('Account created successfully!!')
        //navigate to allaccounts page
        this.addAccountRouter.navigateByUrl('')
      }
    })

  }
}
