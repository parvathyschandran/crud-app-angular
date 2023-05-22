import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AccountSchema } from 'src/models/accountSchema';
import { Route, Router, RouterConfigurationFeature, RouterEvent, RouterLink, RouterState } from '@angular/router';

@Component({
  selector: 'app-editac',
  templateUrl: './editac.component.html',
  styleUrls: ['./editac.component.css']
})
export class EditacComponent {

account:AccountSchema={}

  constructor(private editActivatedRoute:ActivatedRoute,private api:ApiService,private editRouter:Router){

  }

  ngOnInit():void{
    this.editActivatedRoute.params.subscribe({
      //pathparameter -variable, we can give any name
      next:(pathParameter:any)=>{
        const {id} = pathParameter
        console.log(id)
        //call view account api
        this.api.viewAccount(id).subscribe({
          next:(response:any)=>{
            console.log(response);
            this.account=response
          }
        })
      }
    })
  }

  //edit account
  editAccount(id:any){
    //api call to edit caccount
    this.api.editAccount(id,this.account).subscribe({
      next:(response:any)=>{
        alert('Update Successful')
        //navigate to all account
        this.editRouter.navigateByUrl("")
      }
    })
  }
}
