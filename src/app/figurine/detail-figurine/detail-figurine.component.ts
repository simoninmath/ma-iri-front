import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router"; // Give access to the current Route
import { Figurine } from "../figurine";
import { FigurineService } from "../figurine.service";

@Component({
  selector: "app-detail-figurine",
  templateUrl: "./detail-figurine.component.html",
  styles: [],
})

export class DetailFigurineComponent {
  figurineList: Figurine[];
  figurine: Figurine | undefined;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,  // Dependence Injection allow the Route Service disable into the Component
    private figurineService: FigurineService) {}  // DI for figurineService

  ngOnInit() {
    const figurineId: string | null = this.route.snapshot.paramMap.get("id");  // Delete const FIGURINES
    if (figurineId) {  
      this.figurine = this.figurineService.getFigurineById(+figurineId);
    }
  }

  goToFigurineList() {
    this.router.navigate(['/figurine']);
  }
}
