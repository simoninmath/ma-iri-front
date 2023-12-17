import { Injectable } from "@angular/core";
import { Figurine } from "./figurine";
import { FIGURINES } from "./mock-figurine-list";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, of, tap } from "rxjs";

@Injectable()  // Delete providedIn: 'root' to use Service only in FigurineModule

export class FigurineService {
  
  constructor(
    private http: HttpClient
  ){}

  // getFigurineList(): Figurine[] {  // Return Type is a table of figurine named FIGURINES
  //   return FIGURINES;
  // }

  getFigurineList(): Observable<Figurine[]> {  // Return an Observable because the Object Figurine[] will be receive later
    return this.http.get<Figurine[]>('api/figurine').pipe(  // Making a HTTP Request that return an Object Observable with URL
      tap((figurineList) => console.table(figurineList)),  // Log response
      catchError((error) => { 
        console.log(error);  // Log error
        return of([]);  // Return an empty Table to avoid crash
      })
    ); 
  }

  // getFigurineById(figurineId: number): Figurine | undefined {
  //   return FIGURINES.find(figurine => figurine.id == figurineId);  // Look for the figurine with the specified id, from the table FIGURINES
  // }

  getFigurineById(figurineId: number): Observable<Figurine | undefined> {
    return this.http.get<Figurine>(`api/figurine/${figurineId}`).pipe(  // Making a HTTP Request that return an Object Observable with URL
    tap((figurine) => console.log(figurine)),  // Log response
    catchError((error) => { 
      console.log(error);  // Log error
      return of(undefined);  // Return undefined to avoid crash
    })
    );
  }

  getFigurineTypeList(): string[] {
    return [
      'Cybord',
      'Droid',
      'Human',
      'Beast',
      'Allien'
    ];
  }
}
