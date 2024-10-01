import { Component, Input, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Extrait } from '../../models/extrait';
import { ExtraitService } from '../../services/extrait.service';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-newextrait',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './newextrait.component.html',
  styleUrl: './newextrait.component.scss'
})
export class NewextraitComponent implements OnInit {
    @Input() extrait?: Extrait;
    extraitForm!: FormGroup; 

    constructor(private fb: FormBuilder,private extraitService:ExtraitService,private router:Router){}

    ngOnInit():void {
      this.extraitForm = this.fb.group({
        pouranneel:['', Validators.required ], 
        pouranneec:['',Validators.required],
        numregistrec:['',Validators.required ],
        numregistrel:['',Validators.required],
        datenaissancel:['',Validators.required ],
        lieunaissance:['',Validators.required ],
        prenom:['',Validators.required],
        nom:[ '',Validators.required ],
        sexe:['' ,Validators.required],
        prenomp:['' ,Validators.required],
        prenomm:[ '' ,Validators.required],
        nomm:['' ,Validators.required],
        datedelivrancel:['',Validators.required ],
        datedelivrancec:['',Validators.required ], 
      });
    }
      
    onSubmit():void{
        
            {
             this.extraitService.addExtrait(this.extraitForm.value).subscribe(()=>{
              this.router.navigate( ['/'] );
             });
             
         }
           
    }
     
}
