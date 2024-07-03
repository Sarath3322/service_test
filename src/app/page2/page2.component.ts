import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(private se:MyserviceService) { }

  ngOnInit(): void {
  }
  test='';
  call_service(){
this.test=this.se.testService()+"  sarath";
  }
}
