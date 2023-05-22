import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewac',
  templateUrl: './viewac.component.html',
  styleUrls: ['./viewac.component.css']
})
export class ViewacComponent implements OnInit {
  
  account:any={}
  constructor(private api: ApiService, private viewRouter: ActivatedRoute) {

  }

  ngOnInit(): void {
    //get contact id from url
    this.viewRouter.params.subscribe((data: any) => {
      //destructuring data object
      const { id } = data
      console.log(id)
      //api call to get a particular contact details
      this.api.viewAccount(id).subscribe({
        next:(response: any) => {
          console.log(response);
          this.account=response
        }   
      })
    })
  }
}
