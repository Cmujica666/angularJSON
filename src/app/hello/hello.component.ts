import { Component, Input } from '@angular/core';
import * as data from './books.json';


/*interface Book {
  title: string;
  author: string;
}*/
var books= [];
for(var i in data){
  console.log(data);
  books.push([i], data[i])

} 
@Component({
  selector: 'hello',
  template: `<h1>Jelou {{name}}</h1>
    <ul>
      <li *ngFor="let book of books">{{book.title}} -- {{book.author}}</li>
    </ul>`,
  styles: [`h1 { font-family: Lato; }`]
})

export class HelloComponent  {
  @Input() name: string;
  books: any = data;
}



