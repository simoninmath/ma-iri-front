import { Component, Input, OnInit} from "@angular/core";
import { Figurine } from "../figurine";
import { FigurineService } from "../figurine.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-figurine-form",
  templateUrl: "./figurine-form.component.html",
  styles: [],
})

export class FigurineFormComponent implements OnInit {
  
  @Input() figurine: Figurine; // Indicate the Component property for each instance : to use app-figurine component, we need to pass a Object Figurine first
  types: string[]; // All types in the app

  constructor(
    private figurineService: FigurineService,
    private router: Router
    ) {}

  ngOnInit() {
    this.types = this.figurineService.getFigurineTypeList();
  }

  // isTypesValid(type: string): boolean {
  //   return true;
  // }

  hasType(type: string) { // Ask is the Type in parameter exist in types table
    return this.figurine.types.includes(type); // includes() return true or false (native JS)
  }

  selectType($event Event, type: string) {  // When user click on checkbox, this method verify if the type selected is available
    const isChecked: boolean = ($event.target as HTMLInputElement).checked; // get the DOM event to verify if the box is checked and update @Input, plus cast in HTMLInputElement
  
    if(isChecked) { // add the type checked into Figurine[]
      this.figurine.types.push(type)
    } else {
      const index = this.figurine.types.indexOf(type); // get the index in Figurine[] to remove the type checked
      this.figurine.types.splice(index, 1); // modify the selected index with splice() method
    }

  }

  onSubmit() {
    console.log('Form submited');
    this.router.navigate(['/figurine', this.figurine.id]); // push to the router URL and figurine id
  }
}
