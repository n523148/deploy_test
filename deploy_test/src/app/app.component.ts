import { Component } from '@angular/core';
import { MessageServer } from './message.server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IframePrototype';
  receivedMessage$;
  receivedData$;

  constructor(messageServer: MessageServer) {
    this.receivedMessage$ = messageServer.receivedMessage$;
    this.receivedData$ = messageServer.receivedData$;
  }
}
