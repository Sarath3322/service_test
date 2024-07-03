import { Component, OnInit } from '@angular/core';
import { Students } from '../students.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {
  student: Students = { id: 0, name: '', division: '', age: 0 };
  constructor(private rt:Router,private rtt:ActivatedRoute,private lc:Location,private m:MyserviceService) {
    const navigation = this.rt.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.student = navigation.extras.state['student'];
    }
   }
 

  ngOnInit(): void {
  }

 save(): void {
    if (this.student) {
      this.m.update(this.student).subscribe(
        response => {
          console.log('Update successful', response);
          this.rt.navigate(['/views']);
        },
        error => {
          console.error('Error updating student', error);
        }
      );
    }

}
}
