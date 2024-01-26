import { Component, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent {

  @Input() pokemon!:Pokemon

  types: string[]=[]

  constructor(private pokser:PokemonService, private router:Router){

  }

ngOnInit(){
  this.types=this.pokser.getPokemonTypeList();
}



hasType(type:string):boolean{
return this.pokemon.types.includes(type)
}


isTypesValid(type:string): boolean {
if((this.pokemon.types.length==1) && (this.pokemon.types.includes(type))){
  return false;
}else if((this.pokemon.types.length>2) && !this.pokemon.types.includes(type)){
return false;
}

return true;
}


selectType($event:any, type:string){
const isChecked:boolean =($event.target as HTMLInputElement).checked

if(isChecked){
  this.pokemon.types.push(type)
}else{
  const index=this.pokemon.types.indexOf(type)
  this.pokemon.types.splice(index,1)
}

}


onSubmit(){
  console.log('Submit Form');

  this.pokser.updatePokemon(this.pokemon).subscribe(
    ()=>this.router.navigate(['/pokemon', this.pokemon.id])
  )

  this.router.navigate(['/pokemon', this.pokemon.id])
  
}



}
