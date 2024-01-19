import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent {

  pokemon: Pokemon|undefined


  constructor(private route: ActivatedRoute,private router:Router, private pokserv:PokemonService){}

  ngOnInit(){

    const pokemonId:string|null= this.route.snapshot.paramMap.get('id');
    
    

    if(pokemonId){
      this.pokemon=this.pokserv.getPokemonById(+pokemonId)

    }
  }

  goToPokemonList(){
    this.router.navigate(['/pokemons'])
  }


  goToEditPokemon(pokemon:Pokemon){
    this.router.navigate(['/edit/pokemon', pokemon.id])

  }
}
