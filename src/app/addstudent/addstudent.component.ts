import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
import { Students } from '../students.model';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private fb:FormBuilder,private sc:MyserviceService,private rout:Router) { }
 
  ngOnInit(): void {
  }
  studform=this.fb.group({
    name:[''],
    division:[''],
    age:[0]
  })

  onsubmit(){
    console.log('jjj')

    let data=this.studform.value as unknown as Students;
    this.sc.insert(data).subscribe((res:any)=>{
      this.rout.navigate(['/views']);
    });

  }
}
