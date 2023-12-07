import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<h1>Welcome to {{ figTab }}!</h1>`,
})
export class AppComponent implements OnInit {
  // title = 'Ma\'Iri: Time\'s Maëlströms';
  figTab = ["Qalis", "Klosiums", "Pleegards"];

  ngOnInit() {
    console.table(this.figTab);
    this.selectFig("Qualis");
  }

  selectFig(figName: string) {
    console.log(`Vous avez selectionné une figurine de la Race des ${figName}`);
  }
}
