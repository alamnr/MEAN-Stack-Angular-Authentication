import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unauthorize',
  templateUrl: './unauthorize.component.html',
  styleUrls: ['./unauthorize.component.css']
})
export class UnauthorizeComponent implements OnInit {

  httpCode:string;

  constructor(private route: ActivatedRoute) { 
    this.httpCode  =  this.route.snapshot.queryParamMap.get('code');
    
  }

  ngOnInit() {
   
  }

}



// https://colorlib.com/wp/free-error-page-templates/

// https://stackoverflow.com/questions/44864303/send-data-through-routing-paths-in-angular
