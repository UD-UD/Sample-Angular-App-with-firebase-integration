import { Injectable } from '@angular/core';
import {MessageService} from './message.service'
import {foods} from './foods'
import {FOOD} from './mock-food'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
@Injectable()
export class FoodService {

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
}
