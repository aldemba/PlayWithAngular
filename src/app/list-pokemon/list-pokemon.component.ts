import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent {

  pokemonList: Pokemon[]=[]

  constructor(private router:Router){}

  ngOnInit(){
    this.pokemonList= POKEMONS;
  }


  goToPokemon(pokemon:Pokemon){
    this.router.navigate(['/pokemon',pokemon.id])
  }
}
