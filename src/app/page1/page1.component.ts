import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(private se:MyserviceService) { }

  ngOnInit(): void {
  }
  test='';
  call_service(){
this.test=this.se.testService()+"  sarath";
  }

}
