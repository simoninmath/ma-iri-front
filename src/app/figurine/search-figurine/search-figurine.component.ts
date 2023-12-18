import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Figurine } from '../figurine';

@Component({
  selector: 'app-search-figurine',
  templateUrl: './search-figurine.component.html',
})

export class SearchFigurineComponent implements OnInit {
  searchTerms = new Subject<string>();  // Subject is an RxJS library Object
  figurines$: Observable<Figurine[]>;  // For create a flow with user's terms in a Table

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  search(term: string) {
    this.searchTerms.next(term); // If a user search a term, this Method push the result of Subject
  }

  goToDetailFigurine(figurine: Figurine) {
    const link = ['/figurine', figurine.id]; // Construct the link where the user will be redirected according to figurine id
    this.router.navigate(link); // Redirect the user with Angular Router
  }

}
