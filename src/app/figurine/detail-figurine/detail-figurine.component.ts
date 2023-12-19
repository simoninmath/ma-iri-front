import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router"; // Give access to the current Route
import { Figurine } from "../figurine";
import { FigurineService } from "../figurine.service";
import { Title } from "@angular/platform-browser";

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
    private figurineService: FigurineService,  // DI for figurineService
    private title: Title  // DI for dynamic titles
    ) {}  

  // Refactoring
  ngOnInit() {
    const figurineId: string | null = this.route.snapshot.paramMap.get("id");
    if(figurineId) {
      this.figurineService.getFigurineById(+figurineId).subscribe(figurine => {  // Get dynamic titles in detail section
        this.figurine = figurine;
        this.initTitle(figurine);
  });
 }
}
  // ngOnInit() {
  //   const figurineId: string | null = this.route.snapshot.paramMap.get("id");
  //   if (figurineId) {  
  //     this.figurine = this.figurineService.getFigurineById(+figurineId);
  //   }
  // }

  initTitle(figurine: Figurine | undefined){
    if(!figurine){
      this.title.setTitle('This Figurine doesn\'t exist...');
      return;
    }
    this.title.setTitle(figurine.name);
  }

  deleteFigurine(figurine: Figurine){
    this.figurineService.deleteFigurineById(figurine.id)
    .subscribe(() => this.goToFigurineList());
  }

  goToFigurineList() {
    this.router.navigate(['/figurine']);
  }

  goToEditFigurine(figurine: Figurine){
     this.router.navigate(['edit/figurine', figurine.id]);
  }
}
