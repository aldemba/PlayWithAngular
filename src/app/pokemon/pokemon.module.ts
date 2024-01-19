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
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { LoaderComponent } from './loader/loader.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';


const routes: Routes = [
  {path:'edit/pokemon/:id', component:EditFormComponent},
  {path: 'pokemons', component:ListPokemonComponent},
  {path: 'pokemon/add', component:AddPokemonComponent},
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
    AddPokemonComponent,
    LoaderComponent,
    SearchPokemonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class PokemonModule { }
