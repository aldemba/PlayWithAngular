import { Component } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, of, switchMap, tap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent {

searchTerms= new Subject<string>()

pokemons$!:Observable<any>

noResultsFound = false; 

constructor(private router:Router, private pokserv:PokemonService){}


ngOnInit(){

// this.pokemons$=this.searchTerms.pipe(
//   debounceTime(300),
//   distinctUntilChanged(),

//   switchMap((term)=>this.pokserv.searchPokemonList(term))

// )

this.pokemons$ = this.searchTerms.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap((term) => {
    // Vérifiez si le terme de recherche n'est pas vide avant d'effectuer la recherche
    if (term.trim() === '') {
      // Si le terme est vide, retournez un Observable vide
      return of([]);
    }
    return this.pokserv.searchPokemonList(term);
  }),
  tap((results) => {
    this.noResultsFound = results.length === 0;
  })
);

}

search(term:string){
this.searchTerms.next(term);
}

goToDetail(pokemon:Pokemon){
const link= ['/pokemon', pokemon.id]
this.router.navigate(link)
}

}
