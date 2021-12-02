import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from 'src/app/interfaces/taskModels';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-update-tasks',
  templateUrl: './update-tasks.component.html',
  styleUrls: ['./update-tasks.component.css']
})
export class UpdateTasksComponent implements OnInit {

  constructor(
    private postService:TaskService, 
    private route:ActivatedRoute,
    private router:Router
  ) { }

  id:string=this.route.snapshot.params['id']
  task:Tasks={}

  getSingleTask(){
    this.postService.getSingleTask(this.id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.task=res
      }
    })
  }

  updateTask(task:Tasks){
    this.postService.updateTasks(this.id,task).subscribe(()=>{})
    this.router.navigate(['/task'])
  }

  back(){
    this.router.navigate(['/task'])
  }

  ngOnInit(): void {
    this.getSingleTask()
  }

}
