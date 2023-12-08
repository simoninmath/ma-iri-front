import { Component, OnInit } from "@angular/core";
import { FIGURINES } from "./mock-figurine-list";
import { Figurine } from "./figurine";

@Component({
  selector: "app-root",
  templateUrl: "./figurine.component.html",
})
export class AppComponent implements OnInit {
  title = "Ma'Iri";
  figTab: Figurine[] = FIGURINES; // Type as a Table of Figurine
  // figTab = ["Qalis", "Klosiums", "Pleegards"];

  ngOnInit() {
    console.table(this.figTab);
    // this.selectFig(this.figTab[0]); // Select index into the figTab Variable
  }

  // selectFig(figurine: Figurine) {
  //   // Type as a Object "Figurine"
  //   console.log(`Vous avez selectionné une figurine de la Race des ${figurine.name}`); // Call name property from Object Figurine
  // }

  selectFig(event: MouseEvent) {
    const index: number = +(event.target as HTMLInputElement).value; // Cast Event Type as HTML Type and use JS Méthodes +, targer, value to intercept DOM events and change it on an number
    console.log(`Vous avez selectionné une figurine de la Race des ${this.figTab[index].name}`); // Call index selected by User
  }
}
