import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AccountSchema } from 'src/models/accountSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Base_url='https://crud-bank-app.onrender.com/'

  constructor(private http:HttpClient) { }


  //get all accounts
  getAllAccounts(){
    //api call : http://localhost:3000/accounts  req:get
    //  return this.http.get('http://localhost:3000/accounts') - change it to url after rendering
     return this.http.get('https://crud-bank-app.onrender.com/accounts')
  }

  //view a account
  viewAccount(id:any){
    //api call : http://localhost:4200/view-account/:id  req:get
    // return this.http.get(`http://localhost:3000/accounts/${id}`)
    return this.http.get(`https://crud-bank-app.onrender.com/accounts/${id}`)
  }

  //add a account
  addAccount(account:AccountSchema){
    //api call
    // return this.http.post('http://localhost:3000/accounts',account)
    return this.http.post('https://crud-bank-app.onrender.com/accounts',account)
  }

  //delete account
  deleteAccount(id:any){
    //api call server
    // return this.http.delete(`http://localhost:3000/accounts/${id}`)
    return this.http.delete(`https://crud-bank-app.onrender.com/accounts/${id}`)
  }

  //edit account
  editAccount(id:any,account:AccountSchema){
    //api call
    // return this.http.put(`http://localhost:3000/accounts/${id}`,account)
    return this.http.put(`https://crud-bank-app.onrender.com/accounts/${id}`,account)
  }
}
 