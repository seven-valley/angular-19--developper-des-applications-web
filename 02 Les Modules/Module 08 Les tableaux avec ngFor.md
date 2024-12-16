# Module 08 - Les tableaux avec ngFor
Les tableaux en JavaScript et TypeScript
:warning: **Ne pas oublier d'importer ngFor**
## tableau simple
**app.component.ts**
```ts
// on importe NgFor
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-root',
  // on ajoute NgFor aux imports
  imports: [NgFor],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  tableau:string[] = ['pomme','poire','cerise'];
}
```

**app.component.html**
```html
<ul>
  <li *ngFor="let fruit of tableau;index as i">
    {{i}} {{fruit}}  
  </li>
</ul>
```

## tableau d'objet
**app.component.ts**
```ts
export class AppComponent {
  personnes:any[] =[
    {prenom:'Brad',nom:'PITT'},
    {prenom:'Nicolas',nom:'CAGE'}
    ];
}
```

**app.component.html**
```html
<table>
  <tbody>
    <tr *ngFor="let p of personnes;index as i">
      <td>{{i}}</td>
      <td>{{p.prenom}}</td>
      <td>{{p.nom}}</td>
    </tr>
  </tbody>
</table>
```