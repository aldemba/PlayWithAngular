import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  getPokemonList():Observable<Pokemon[]> {
    // return POKEMONS
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response)=>console.table(response)),
      catchError((error)=>{
        console.log(error);
        return of([])
        
      })
    )
  }

  getPokemonById(pokemonId:number): Pokemon|undefined{
    return POKEMONS.find(pokemon=> pokemon.id == pokemonId)
  }

  getPokemonTypeList():string[]{
    return ["Plante", "Feu", "Eau", "Insecte", "Normal", "Electrik", "Poison", "Fée", "Vol", "Combat", "Psy"]
  }
}
