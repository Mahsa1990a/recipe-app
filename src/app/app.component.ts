import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}


// PART 86. Adding Navigation with Event Binding and ngIf:
// 1.add click event (click)="onSelect('recipe')" and (click)="onSelect('shopping-list')" in header
// 2.add onSelect function ih header ts and create my own event with emit it(featureSelected) inside onSelect method
// 3.app template =>listen to featureSelected event from header and execute onNavigate($event)
// 4. app ts => create onNavigate methode to update loadedFeature property
// 5. in app html based on ngIf load recipes or shopping list

// 87. Passing Recipe Data with Property Binding
// 1.cut a tag: recipe item from recipe-list component and paste into recipe-item template
// 2.cut *ngFor loop from recipe-item into recipe-list template
// 3.add recipe property in recipe-item ts and make it bindable from outside(means recipe-item) with @Input
// 4.now in recipe-list template bind into recipe property and equal it into item of our for loop

// 88. Passing Data with Event and Property Binding (Combined)
// Click on single recipe on browser and load it on recipe-detail section
// emit an event on recipe-item that it was clicked
// listen to recipeSelected event in recipe-list template and here need to emit to another event onRecipeSelected
// add recipeEl into onRecipeSelected as an argument in tempalet
// add the emit to event in recipe-list component ts
// recipes template add event here
//  then pass this info into recipe-detail(inside recipes template) first:
// add ngIf to recipe-detail
// and get this event to recipes component that holds recipe-detail
// to pass down the event data which recipe was selected to that component
