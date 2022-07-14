import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-friend-display',
  templateUrl: './friend-display.component.html',
  styleUrls: ['./friend-display.component.css']
})
export class FriendDisplayComponent implements OnInit {

  constructor(private api:ApiService) {
    api.viewTodos().subscribe(
      (r)=>{
        this.data=r
      }
    )
   }
  
  ngOnInit(): void {
  }
data:any={}
}
