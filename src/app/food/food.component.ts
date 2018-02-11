import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import {foods} from '../foods'
//import {FOOD} from '../mock-food'
import {FoodService} from '../food.service'
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  foodies : foods[];
  getFood(): void {
    this.foodService.getFoods()
        .subscribe(X => this.foodies = X);
  }
  selectedFood : foods;

  onSelect(food: foods): void {
    this.selectedFood = food;
  }
    
  constructor(private foodService: FoodService) { 
    
  }

  ngOnInit() {
    this.getFood();
  }

}
