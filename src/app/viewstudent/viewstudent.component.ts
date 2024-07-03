import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Students } from '../students.model';
import { NavigationExtras, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {
  students: Students[] = [];
  constructor(private se:MyserviceService,private router:Router) { }

  ngOnInit(): void {
    this.se.readstud().subscribe((data: Students[]) => {
      this.students = data;
    }, (error) => {
      console.error('Error fetching student data', error);
    });
  }
  editstud(id:number){
this.se.readStbyId(id).subscribe((data: Students) => {
  const navigationExtras: NavigationExtras = {
    state: {
      student: data
    }
  };
  this.router.navigate(['/edit'], navigationExtras);
}, (error) => {
  console.error('Error fetching student data', error);
});
  }
  deleteStudent(id: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.se.delete(id).subscribe(
        response => {
          console.log('Delete successful', response);
          this.students = this.students.filter(student => student.id !== id);
          this.router.navigate(['/views']); // Remove the deleted student from the list
        },
        error => {
          console.error('Error deleting student', error);
        }
      );
    }
  }

}
