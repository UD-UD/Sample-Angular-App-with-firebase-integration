import { Injectable } from '@angular/core';
import {MessageService} from './message.service'
import {foods} from './foods'
//import {FOOD} from './mock-food'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import * as firebase from "firebase";
import { forEach } from '@angular/router/src/utils/collection';
//import { promise } from 'selenium-webdriver';
@Injectable()
export class FoodService {
  food : foods
  FOOD : foods[]
  config : any 
  dbReference : any
  x : number
  y : number
  firebaseData : any
  constructor(private messageService: MessageService) { 
    this.config = 
    {
      apiKey: "AIzaSyCDgKE_1QJ2c9yM856UWbglQUblVovwUgw",
      authDomain: "food-cart-4395b.firebaseapp.com",
      databaseURL: "https://food-cart-4395b.firebaseio.com",
      projectId: "food-cart-4395b",
      storageBucket: "food-cart-4395b.appspot.com",
      messagingSenderId: "827031154758"
    };
    
    firebase.initializeApp(this.config);
    this.dbReference = firebase.database().ref().child('food')
   
  }

   getData() : void
  {
   // this.dbReference.on('value', function (snap){this.firebaseData = snap.val()})
   this.dbReference.on("value", function(snapshot) {
    this.getVal(snapshot.val());
   
   });
  
  }
  getVal(obj)
  {
   this.firebaseData = obj;
   console.log(this.firebaseData)
  }
  
   getFoods(): Observable<foods[]>
  {
    var name : string
    
   this.getData();
    console.log(this.firebaseData)
    this.messageService.add("fetched food list"); 
    Object.keys(this.firebaseData).forEach(function(key)
    {
      name = this.firebaseData[key].name;
      this.food = {id : key
          , name }
          this.FOOD.push(this.food)
      console.log(key, this.firebaseData[key]);
  
    })
    
    console.log(this.FOOD)
    return of(this.FOOD);
  }
  getFood(id : number): Observable<foods>
  {
    this.messageService.add(`FoodService: fetched food id=${id}`);
    return of(this.FOOD.find(foods => foods.id == id));
  }
  insertFood(name : string) : void
  {
  //  this.food = FOOD.pop();
  //  this.x = this.food.id
  //  FOOD.push(this.food)
  //  this.food = {id : this.x +1
   //   , name}
   //   FOOD.push(this.food)

      var obj ={}

      var newKey = Math.floor((Math.random()*2000)).toString();
        console.log(obj)
  
      obj[newKey+''] = {
        "name": name + ' '
      }
  
      console.log(obj)
      var newRef = this.dbReference.update(obj);
    }
    deleteFood(delfood : foods)
    {
      
      this.y = this.FOOD.findIndex(foods => foods.id == delfood.id)
      this.FOOD.splice(this.y , 1)
    };
  }
  
  