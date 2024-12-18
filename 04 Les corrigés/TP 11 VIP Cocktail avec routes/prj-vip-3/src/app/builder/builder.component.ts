import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { Router, RouterOutlet } from '@angular/router';
import { Personne } from '../models/personne';
import { PersonneService } from '../services/personne.service';
import {NgForm,FormsModule} from '@angular/forms';
@Component({
  selector: 'app-builder',
  imports: [RouterOutlet,NgFor,FormsModule],
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.scss'
})
export class BuilderComponent {
  personnes:Personne[]=[];
  // personneService
  constructor(private personneService:PersonneService,private router:Router){}
  
  ngOnInit(){
   // this.personnes = this.personneService.personnes;
   this.personneService.personneSubject.subscribe(
    (response:any)=>{
      this.personnes =response;
    }
    
   );
   this.personneService.loadFire();
  }
  ajouter(f:NgForm){
    const p = new Personne(f.value['prenom'],f.value['nom']);
    f.reset();
    // demander au service
    //this.personnes.push(p); 
    this.personneService.ajouter(p);  
  }
  onEnlever(i:number){
    this.personneService.enlever(i);
  }
  onChanger(i:number){
    this.personneService.changer(i);
  }
  onModifier(i:number){
    const id = this.personnes[i].id;
    this.router.navigate(['/produit', 33]);
  }
  getClass(status:boolean):string{
    if (status)
      return 'table-success';
    else
     return 'table-danger';
  }
}
