import { Component, OnInit, Input } from '@angular/core';

const templete='<h2>{{message}}</h2>';

@Component({
  selector: 'app-message',
   template: templete
})
export class MessageComponent implements OnInit {
  @Input() message : string;

  constructor() { }

  ngOnInit(): void {
  }

}
