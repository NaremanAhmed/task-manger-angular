import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from 'src/app/interfaces/taskModels';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  constructor(
    private taskServices: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  task:Tasks ={}
  addTask(task:Tasks){
    this.taskServices.addTask(task).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.task=res
        this.router.navigate(['/task'])
      }
    })
  }


  ngOnInit(): void {
  }

}
