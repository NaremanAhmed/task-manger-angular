import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from 'src/app/interfaces/taskModels';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(
    private taskServices: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  task: Tasks[] = [];
  getAllTask() {
    this.taskServices.getAllTasks().subscribe({
      next: (res: any) => {
        console.log(res);
        this.task=res
        console.log(this.task);
        
      },
    });
  }

  deleteTasks(task:Tasks){
    this.taskServices.deleteTasks(task._id).subscribe({
      next:()=>{
        let index = this.task.indexOf(task)
        console.log(index);
        this.task.splice(index,1)
      }
    })
  }
  
  ngOnInit(): void {
    this.getAllTask()
  }

}
