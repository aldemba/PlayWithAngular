import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  getPokemonList(): Observable<any> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  // getPokemonById(pokemonId:number): Pokemon|undefined{
  //   return POKEMONS.find(pokemon=> pokemon.id == pokemonId)
  // }

  getPokemonById(pokemonId:number): Observable<Pokemon|undefined>{
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response)=>this.log(response),
      catchError((error)=>
        this.handleError(error,undefined)
        )
      )
    )
  }


  updatePokemon(pokemon: Pokemon): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((response:any) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }


  deletePokemonById(pokemonId: number): Observable<any> {
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response:any) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
}

addPokemon(pokemon: Pokemon): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
    tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, []))
  );
}

searchPokemonList(term:string):Observable<any>{

  if(term.length <=1){
    return of([])
  }

  return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
    tap((response) =>this.log(response)),
    catchError((error)=>this.handleError(error, []))
  )
}

  private log(response:Pokemon[]|Pokemon|undefined){
    console.table(response)
  }

  private handleError(error:Error, errorValue: []|undefined){
    console.error(error);
    return of(errorValue)
    

  }



  getPokemonTypeList():string[]{
    return ["Plante", "Feu", "Eau", "Insecte", "Normal", "Electrik", "Poison", "Fée", "Vol", "Combat", "Psy"]
  }
}
