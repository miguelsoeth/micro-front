import { Component, Input } from '@angular/core';

@Component({
  selector: 'angular-resultado-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {  
  title = 'angular-resultado';

  @Input() text: string = 'ABC';

}
