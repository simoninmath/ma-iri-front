import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListFigurineComponent } from "./figurine/list-figurine/list-figurine.component";
import { DetailFigurineComponent } from "./figurine/detail-figurine/detail-figurine.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "figurine", component: ListFigurineComponent },
  { path: "figurine/:id", component: DetailFigurineComponent },
  { path: "", redirectTo: "figurine", pathMatch: "full" }, // Defautl Route with pathMath to avoid "side effects"
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
