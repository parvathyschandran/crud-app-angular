import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allAccounts: any = []

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getAllAccounts().subscribe({
      next: (response: any) => {
        console.log(response);
        this.allAccounts = response
      }
    })
  }

  //delete account
  deleteAccount(id: any) {
    //call delete api from api service
    this.api.deleteAccount(id).subscribe({
      next: (response: any) => {
        alert('Account deleted')
        this.api.getAllAccounts().subscribe({
          next: (response: any) => {
            console.log(response);
            this.allAccounts = response
          }
        })
      }
    })
  }
}
