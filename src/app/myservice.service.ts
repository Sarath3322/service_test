import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Students } from './students.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {


  testService(){
    return 'helloooo';
  }
  constructor(private httpclient:HttpClient) { }

  basicApiUrl:string='https://localhost:7181';
  insert(st:Students){
    console.log(st);
    return this.httpclient.post<any>(this.basicApiUrl+'/api/apiclasses',st);
  }
  readstud(){
    return this.httpclient.get<any>(this.basicApiUrl+'/api/apiclasses');
  }
  readStbyId(id:number){
    return this.httpclient.get<any>(this.basicApiUrl+'/api/apiclasses/'+id);
  }
  update(student: Students): Observable<any> {
    return this.httpclient.put<any>(`${this.basicApiUrl}/api/apiclasses/${student.id}`, student);
  }
  delete(id: number): Observable<any> {
    return this.httpclient.delete<any>(`${this.basicApiUrl}/api/apiclasses/${id}`);
  }
}
