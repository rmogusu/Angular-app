import { Component } from '@angular/core';
import { Goal } from './goal';

//component annotation
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//component defination class
export class AppComponent {
  title = 'Goals';
  goal = 'Watch Finding Nemo'
  //how to sisplay array
 //  goals:string[];
 //
 // constructor(){
 //    this.goals = ['Watch finding Nemo', 'Buy cookies', 'Get new phone case']
 //  }
 //creating severall goals using blueprint class
  // goals:Goal = [
  //   {id:1, name:['Watch finding Nemo']},
  //   {id:2,name:'Buy Cookies'},
  //   {id:3,name:'Get new Phone Case'},
  //   {id:4,name:'Get Dog Food'},
  //   {id:5,name:'Solve math homework'},
  //   {id:6,name:'Plot my world domination plan'},
  // ];
}


  // goals:string[];
  //
  // constructor(){
  //   this.goals = ['Watch finding Nemo', 'Buy cookies', 'Get new phone case']
  // }
