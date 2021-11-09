import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // ViewChild for accessing any element directly in ts
  // nameInput is name of local refrence in html template
  // @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  // @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  //now we want to emit a new event where I pass data to the parent(shopping-list)
  //which manages my arr of ingridents:
  // {name: string, amount: number} this is type definition => obj with 2 keys
  // ingredientAdded = new EventEmitter<{name: string, amount: number}>(); OR we have the seme type definition with Ingredient Model:
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  @ViewChild('f') shoppingListFrom: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListServiceProp: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListServiceProp.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingListServiceProp.getIngredient(index);
          this.shoppingListFrom.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onSubmit(form: NgForm) {
    // console.log("Added")
    // const ingName = this.nameInputRef.nativeElement.value;
    // console.log("ingName", ingName)
    // const ingAmount = this.amountInputRef.nativeElement.value;
    // console.log("ingAmount", ingAmount)

    // const newIngredient = new Ingredient(ingName, ingAmount);

    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if (this.editMode) {
      this.shoppingListServiceProp.updateIngredient(this.editedItemIndex, newIngredient)
    } else {
      // this.ingredientAdded.emit(newIngredient); UPDATE:
      this.shoppingListServiceProp.addIngredient(newIngredient); //it does not show added ingredient
    }
    // to reset afte add or delete:
    this.editMode = false; //we should make editMode false first then:
    form.reset();
  }

}

//219. create form with TD:
// add (ngSubmit)="onAddItem(f)" to form to submit the form and #f="ngForm" to access the form
// in ts: get the value and add to ingredients
