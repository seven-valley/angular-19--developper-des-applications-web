# Module 06 Mise en place d'un formulaire

# basique
  
:warning: Pensez à importer <code>NgForm</code>
  
**app.component.ts**
```ts
import {NgForm,FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
     onAjouter(form:NgForm){
       let nom = form.value['nom'];
       console.log(nom);
       form.reset();
     }  
}

```
**app.component.html**
```html
  <form (ngSubmit)="onAjouter(a)" #a="ngForm">
    <input name="nom" ngModel />
    <button type="submit">ajouter</button>
  </form>
```
# Un formulaire Complet
**app.component.ts**
```ts
export class AppComponent {

    defaultEquipe=2;
     onAjouter(form:NgForm){
       let nom = form.value['nom'];
       console.log(nom);
       let prenom = form.value['prenom'];
       console.log(prenom);
       let equipe = form.value['membre'];
       console.log(equipe);
       form.reset();
       form.controls['membre'].setValue(1);
     }  
}

```
**app.component.ts**
```html
  <form (ngSubmit)="onAjouter(a)" #a="ngForm">
    <input name="prenom" ngModel />
    <input name="nom" ngModel />
    <select [(ngModel)]="defaultEquipe" name="membre" ngModel>
      <option value="1">NON membre</option>
      <option value="2">Membre</option>
    </select>
    <button type="submit">ajouter</button>
  </form>
````