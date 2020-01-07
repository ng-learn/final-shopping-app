import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output
} from "@angular/core";
import { Ingredient } from "src/app/shared/Ingredient.model";
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput", { static: false }) nameInputRef: ElementRef;
  @ViewChild("amountInput", { static: false }) amountInputRef: ElementRef;
  @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<
    Ingredient
  >();
  constructor(private slService: ShoppingListService) {}

  ngOnInit() {}

  onAddItem() {
    debugger;
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );
    // this.ingredientAdded.emit(newIngredient);
    this.slService.addIngredient(newIngredient);
  }
}
