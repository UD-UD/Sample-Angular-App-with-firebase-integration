import { Component, OnInit } from '@angular/core';
import {foods} from '../foods'
import {FoodService} from '../food.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
foods : foods [] = [];
  constructor(private foodService: FoodService) { }
getTopFoods() : void
{
  this.foodService.getFoods()
  .subscribe(foods => this.foods = foods.slice(1, 5));
}
  ngOnInit() {
    this.getTopFoods();
  }

}
