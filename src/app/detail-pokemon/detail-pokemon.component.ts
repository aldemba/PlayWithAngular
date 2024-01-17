import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent {

  pokemonList: Pokemon[]=[]
  pokemon: Pokemon|undefined


  constructor(private route: ActivatedRoute,private router:Router){}

  ngOnInit(){
    this.pokemonList=POKEMONS
    const pokemonId:string|null= this.route.snapshot.paramMap.get('id');
    // console.log(pokemonId);
    

    if(pokemonId){
      this.pokemon=this.pokemonList.find(pokemon=> pokemon.id == +pokemonId )
      // console.log(this.pokemon);
      // console.log(this.pokemonList);
      
      
    }
  }

  goToPokemonList(){
    this.router.navigate(['/pokemons'])
  }
}
