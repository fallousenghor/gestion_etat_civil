import { Component, Input, OnInit } from '@angular/core';
import { Residence } from '../../models/extrait';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';


import { Router, RouterLink } from '@angular/router';
import { ResidenceService } from '../../services/residence/residence.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newresidance',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './newresidance.component.html',
  styleUrl: './newresidance.component.scss'
})
export class NewresidanceComponent implements OnInit {
  @Input() extrait?: Residence;
  residenceForm!: FormGroup;

  constructor(private fb: FormBuilder,private residenceService:ResidenceService,private router:Router){}

  ngOnInit():void {
    this.residenceForm = this.fb.group({
      prenom:['', [Validators.required] ],
      nom:['',[Validators.required]],
      datenaissance:['',[Validators.required] ],
      lieuresidence:['',[Validators.required] ],
      quartier:['',[Validators.required] ],
      dure:['',[Validators.required] ],
      lieunaissance:['',[Validators.required]],
       
    });
  }
    
  onSubmit():void{
      
          {
           this.residenceService.addResidence(this.residenceForm.value).subscribe(()=>{
            this.router.navigate( ['/'] );
           });
       }
          
  }
}
