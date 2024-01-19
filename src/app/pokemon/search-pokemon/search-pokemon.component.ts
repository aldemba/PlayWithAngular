import { Component } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
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

constructor(private router:Router, private pokserv:PokemonService){}


ngOnInit(){
this.pokemons$=this.searchTerms.pipe(
  debounceTime(300),
  distinctUntilChanged(),

  switchMap((term)=>this.pokserv.searchPokemonList(term))

)
}

search(term:string){
this.searchTerms.next(term);
}

goToDetail(pokemon:Pokemon){
const link= ['/pokemon', pokemon.id]
this.router.navigate(link)
}

}
