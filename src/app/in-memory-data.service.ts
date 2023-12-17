// This Service simulate CRUD from API
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { FIGURINES } from './figurine/mock-figurine-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  createDb() {
    return { FIGURINES };
  }
}