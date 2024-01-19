import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {

  pokemon:Pokemon|undefined


  constructor(private route: ActivatedRoute, private pokserv:PokemonService){

  }

  ngOnInit(){
    const pokemonId:string|null=this.route.snapshot.paramMap.get('id')
    

    if(pokemonId) {
      this.pokserv.getPokemonById(+pokemonId).subscribe(
        (pok)=>{
          this.pokemon=pok
        }
      )  
        // console.log(pokemonId);
        
    }else{
      this.pokemon=undefined
      console.log(this.pokemon);
      
    }
  }


}
