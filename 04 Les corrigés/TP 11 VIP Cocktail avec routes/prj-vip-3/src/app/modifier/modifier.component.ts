import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier',
  imports: [],
  templateUrl: './modifier.component.html',
  styleUrl: './modifier.component.scss'
})
export class ModifierComponent {
  prenom:string='';
  nom:string='';
constructor(private route:ActivatedRoute){}
ngOnInit(){
  const id = this.route.snapshot.paramMap.get('id');
  

}
}
