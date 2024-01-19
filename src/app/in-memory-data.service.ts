import { Injectable } from '@angular/core';
import { POKEMONS } from './pokemon/mock-pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

createDb(){
   return {POKEMONS}
}

}
