import { Component } from '@angular/core';
import { POKEMONS } from './pokemon/mock-pokemon-list';
import { Pokemon } from './pokemon/pokemon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pokemonList: Pokemon[] = POKEMONS;

ngOnInit(){

}
  
}
