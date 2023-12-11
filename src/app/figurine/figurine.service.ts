import { Injectable } from "@angular/core";
import { Figurine } from "./figurine";
import { FIGURINES } from "./mock-figurine-list";

@Injectable({
  providedIn: "root",
})
export class FigurineService {
  getFigurineList(): Figurine[] {
    // Return Type is a table of figurine named FIGURINES
    return FIGURINES;
  }

  getFigurineById(figurineId: number): Figurine | undefined {
    return FIGURINES.find(figurine => figurine.id == figurineId); // Look for the figurine with the specified id, from the table FIGURINES
  }

  getFigurineTypeList(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Etc...'
    ];
  }

}
