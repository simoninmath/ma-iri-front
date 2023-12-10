import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router"; // Give access to the current Route
import { FIGURINES } from "../mock-figurine-list";
import { Figurine } from "../figurine";

@Component({
  selector: "app-detail-figurine",
  templateUrl: "./detail-figurine.component.html",
  styles: [],
})

export class DetailFigurineComponent {
  figurineList: Figurine[];
  figurine: Figurine | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {} // Dependence Injection allow the Route Service disable into the Component

  ngOnInit() {
    this.figurineList = FIGURINES;
    const figurineId: string | null = this.route.snapshot.paramMap.get("id"); // Call the Route and take all parameters in a specific time, then get id in the URL
    if (figurineId) {  // Condition: if a figurine was found, the id will put on this figurine
      this.figurine = this.figurineList.find((figurine) => figurine.id == +figurineId);
    }
  }

  goToFigurineList() {
    this.router.navigate(['/figurine']);
  }
}
