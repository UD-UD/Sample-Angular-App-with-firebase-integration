import { Injectable } from '@angular/core';
import {MessageService} from './message.service'
import {foods} from './foods'
import {FOOD} from './mock-food'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { FoodDetailComponent } from './food-detail/food-detail.component';
@Injectable()
export class FoodService {
  food : foods
  x : number
  y : number
  constructor(private messageService: MessageService) { }
getFoods(): Observable<foods[]>
{
 this.messageService.add("fetched food list"); 
  return of(FOOD);
}
getFood(id : number): Observable<foods>
{
  this.messageService.add(`FoodService: fetched food id=${id}`);
  return of(FOOD.find(foods => foods.id == id));
}
insertFood(name : string) : void
{
this.food = FOOD.pop();
this.x = this.food.id
  FOOD.push(this.food)
  this.food = {id : this.x +1
  , name}
  FOOD.push(this.food)
}
deleteFood(delfood : foods)
{
 
 this.y = FOOD.findIndex(foods => foods.id == delfood.id)
  FOOD.splice(this.y , 1)
  };
}

