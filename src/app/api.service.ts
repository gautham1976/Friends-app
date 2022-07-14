import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  viewTodos=()=>{
    return this.http.get("https://dummyapifriends.herokuapp.com/view")
  }
}
