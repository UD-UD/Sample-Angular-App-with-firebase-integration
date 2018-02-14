import { Component, OnInit , Input} from '@angular/core';
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
  @Input() newFood: string;
  foodies : foods[];
  
  getFood(): void {
    this.foodService.getFoods()
        .subscribe(X => this.foodies = X);
  }
  selectedFood : foods;

  onSelect(food: foods): void {
    this.selectedFood = food;
  }

 Insert()
 {
   this.foodService.insertFood(this.newFood)
 }

  Delete(food : foods)
  {
    console.log(food)
    this.foodService.deleteFood(food)
  }  
  constructor(private foodService: FoodService) { 
    
  }

  ngOnInit() {
    this.getFood();
  }

}
