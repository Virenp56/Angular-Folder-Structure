import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { FilterPipe } from './pipes/filter/filter.pipe';




@NgModule({
  declarations: [
    SearchComponent,
    FilterPipe

  ],
  imports: [
    CommonModule
  ],
  exports:[
    SearchComponent
  ]
})
export class SharedModule { }
