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

  isAddForm:Boolean=true

  types: string[]=[]

  typesValid: boolean = true;


  constructor(private pokser:PokemonService, private router:Router){

  }

ngOnInit(){
  this.types=this.pokser.getPokemonTypeList();

  this.isAddForm=this.router.url.includes('add')


}



// hasType(type:string):boolean{
// return this.pokemon.types.includes(type)
// }


// isTypesValid(type:string): boolean {
// if((this.pokemon.types.length==1) && (this.hasType(type))){
//   return false;
// }else if((this.pokemon.types.length>2) && !this.hasType(type)){
// return false;
// }

// return true;
// }


// selectType($event:any, type:string){
// const isChecked:boolean =($event.target as HTMLInputElement).checked

// if(isChecked){
//   this.pokemon.types.push(type)
// }else{
//   const index=this.pokemon.types.indexOf(type)
//   this.pokemon.types.splice(index,1)
// }

// }

hasType(type: string): boolean {
  return this.pokemon.types.includes(type);
}

isTypesValid(type: string): boolean {
  if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
    return false;
  }
  return true;
}

selectType($event: any, type: string) {
  const isChecked: boolean = ($event.target as HTMLInputElement).checked;

  if (isChecked) {
    this.pokemon.types.push(type);
  } else {
    const index = this.pokemon.types.indexOf(type);
    this.pokemon.types.splice(index, 1);
  }

  this.typesValid = this.pokemon.types.length > 0 && this.pokemon.types.length <= 3;
}


onSubmit(){
  if (!this.typesValid) {
    alert('Vous devez sélectionner au moins un type et au plus trois types.');
    return;
  }
  console.log('Submit Form');

  if(this.isAddForm){

    this.pokser.addPokemon(this.pokemon).subscribe(
      ()=>this.router.navigate(['/pokemon', this.pokemon.id])
    )
  }else{

    this.pokser.updatePokemon(this.pokemon).subscribe(
      ()=>this.router.navigate(['/pokemon', this.pokemon.id])
    )

    // this.router.navigate(['/pokemon', this.pokemon.id])
  }

  
}



}
