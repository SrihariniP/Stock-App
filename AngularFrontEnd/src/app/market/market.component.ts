import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { MarketServiceService } from '../market-service.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent {
  constructor(private http: HttpClient, private formBuilder:FormBuilder){

  }

  checkoutForm = this.formBuilder.group({
    cmpName: ''
  });

  onSubmit(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    var cmp = this.checkoutForm.controls['cmpName'].value;
    var obj = this.checkoutForm;

    this.http.post('http://localhost:3000/market', { "companyName" : cmp }, { headers }).subscribe(response => {
        // Handle the response from the server
        alert(JSON.stringify(response));
        console.log(response);
      },
      error => {
        // Handle any errors that occur during the request
        console.error(error);
      }
    );
  }
}
