import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent {

  pokemonList: Pokemon[]=[]

  constructor(private router:Router, private pokserv:PokemonService){}

  ngOnInit(){
    this.pokserv.getPokemonList().subscribe(
      (pokelist)=>{
        this.pokemonList=pokelist
      }
    )
  }


  goToPokemon(pokemon:Pokemon){
    this.router.navigate(['/pokemon',pokemon.id])
  }
}
