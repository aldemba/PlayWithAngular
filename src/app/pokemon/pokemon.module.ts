import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { FormsModule } from '@angular/forms';
import { EditFormComponent } from './edit-form/edit-form.component';


const routes: Routes = [
  {path:'edit/pokemon/:id', component:EditFormComponent},
  {path: 'pokemons', component:ListPokemonComponent},
  {path:'pokemon/:id', component:DetailPokemonComponent},

];


@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class PokemonModule { }
