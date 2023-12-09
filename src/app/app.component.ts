import { Component, OnInit } from "@angular/core";
import { FIGURINES } from "./mock-figurine-list";
import { Figurine } from "./figurine";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})

export class AppComponent implements OnInit {
  title = "Ma'Iri";
  figTab: Figurine[] = FIGURINES;  // Type as a Table of Figurine
  figSelected: Figurine | undefined;

  ngOnInit() {
    console.table(this.figTab);
  }

  selectFig(figId: string) {
    const id = +figId;
    const figurine: Figurine | undefined = this.figTab.find((figurine) => figurine.id == +figId);
    if (figurine) {
      console.log(`Vous avez selectionné la figurine ${figurine.name}`);
      this.figSelected = figurine;
    } else {
      console.log(`Vous avez demandé une figurine qui n'existe pas...`);
      this.figSelected = figurine;
    }
  }
}
