import { Injectable } from '@angular/core';
import {MessageService} from './message.service'
import {foods} from './foods'
//import {FOOD} from './mock-food'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { AngularFireDatabase } from 'angularfire2/database';
import { forEach } from '@angular/router/src/utils/collection';
//import { promise } from 'selenium-webdriver';
@Injectable()
export class FoodService {
  food : foods
  FOOD : foods[]
  x : number
  y : number
  firebaseData : any
 
  constructor(private messageService: MessageService,db : AngularFireDatabase) { 
    this.FOOD=[];
    this.firebaseData = db.object('food').valueChanges();
  }

  createArray(foodData : any)
  {
    var name : any;
   
      Object.keys(foodData).forEach(function(key){
        name = this.firebaseData[key].name;
        this.food = {id : key, name }
        this.FOOD.push(this.food)
      });
      console.log(foodData)
  }
  
  getFoods(): Observable<foods[]>
  {
    this.firebaseData.subscribe(function(foodData){
      Object.keys(foodData).forEach(function(key){
        var name = foodData[key+''].name;
        this.food = {id : key, name }
        this.FOOD.push(this.food)
      }.bind(this));
    }.bind(this));
    return of(this.FOOD);
  }

  getFood(id : number): Observable<foods>
  {
    this.messageService.add(`FoodService: fetched food id=${id}`);
    return of(this.FOOD.find(foods => foods.id == id));
  }

  insertFood(name : string) : void
  {
  
  }
  
  deleteFood(delfood : foods)
  {
    
    this.y = this.FOOD.findIndex(foods => foods.id == delfood.id)
    this.FOOD.splice(this.y , 1)
  };
}
  
  