import { Component, OnInit } from '@angular/core';
import { FiltrebarComponent } from "../filtrebar/filtrebar.component";
import { RouterLink } from '@angular/router';
import { ExtraitService } from '../../../services/extrait.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Extrait } from '../../../models/extrait';
import { CommonModule } from '@angular/common';
import { SearchService } from '../../../services/search/search.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [FiltrebarComponent,RouterLink,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit{
  searchText: string = '' ;

  constructor( private searchService : SearchService, private fb: FormBuilder ) {} 
   
   
  

  ngOnInit(): void {
    
  }

  onSearchChange() {
     this.searchService.setSearchText(this.searchText);
  }

}
