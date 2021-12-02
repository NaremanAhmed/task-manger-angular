import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tasks } from '../interfaces/taskModels';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getAllTasks(){
    return this.http.get<Tasks>(this.url+'tasks')
  }

  addTask(task:Tasks){
    return this.http.post(this.url+'tasks',task)
  }

  deleteTasks(id:any){
    return this.http.delete(this.url+'tasks/'+id)
  }

  updateTasks(id:any, data:any){
    return this.http.patch(this.url+'tasks/'+id,data)
  }

  getSingleTask(id:string){
    return this.http.get<Tasks>(this.url+'tasks/'+id)
  }

  
}
