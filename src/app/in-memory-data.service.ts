// This Service simulate CRUD from API
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { FIGURINES } from './figurine/mock-figurine-list';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDataService {

  createDb() {
    const figurine = FIGURINES;  // We cannot pass a const from an other file, we need to reassign it in createDb Method
    return { figurine };
  }
}