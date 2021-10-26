import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // ViewChild for accessing any element directly in ts
  // nameInput is name of local refrence in html template
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;


  //now we want to emit a new event where I pass data to the parent(shopping-list)
  //which manages my arr of ingridents:
  // {name: string, amount: number} this is type definition => obj with 2 keys
  // ingredientAdded = new EventEmitter<{name: string, amount: number}>(); OR we have the seme type definition with Ingredient Model:
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    // console.log("Added")
    const ingName = this.nameInputRef.nativeElement.value;
    // console.log("ingName", ingName)
    const ingAmount = this.amountInputRef.nativeElement.value;
    // console.log("ingAmount", ingAmount)
    const newIngredient = new Ingredient(ingName, ingAmount);
    // console.log("newIngredient", newIngredient) is working

    this.ingredientAdded.emit(newIngredient);
  }

}
