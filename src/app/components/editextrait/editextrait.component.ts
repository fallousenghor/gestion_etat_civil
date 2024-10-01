import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Extrait } from '../../models/extrait';
import { ExtraitService } from '../../services/extrait.service';

@Component({
  selector: 'app-editextrait',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './editextrait.component.html',
  styleUrl: './editextrait.component.scss'
})
export class EditextraitComponent {
  @Input() extrait?: Extrait;
    extraitForm!: FormGroup;

    constructor(private fb: FormBuilder,private extraitService:ExtraitService,private router:Router){}

    
    ngOnInit():void {
      this.extraitForm = this.fb.group({
        pouranneel:['', [Validators.required] ],
        pouranneec:['',[Validators.required]],
        numregistrec:['',[Validators.required] ],
        numregistrel:['',[Validators.required] ],
        datenaissancel:['',[Validators.required] ],
        lieunaissance:['',[Validators.required] ],
        prenom:['',[Validators.required]],
        nom:[ '',[Validators.required] ],
        sexe:['' ,[Validators.required]],
        prenomp:['' ,[Validators.required]],
        prenomm:[ '' ,[Validators.required]],
        nomm:['' ,[Validators.required]],
        datedelivrancel:['',[Validators.required] ],
        datedelivrancec:['',[Validators.required] ],
          
      });
    }

    onSubmit(): void {
      const newExtrait : Extrait = {
        ...this.extrait,
        ...this.extraitForm.value,
      };

      if(this.extrait){
         this.extraitService.updateExtrait(newExtrait).subscribe(()=>{ 
          this.router.navigate( ['/extrait'] )
        });
      }else {
        this.extraitService.addExtrait(newExtrait).subscribe();
      }
    }
}   


