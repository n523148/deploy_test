import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable( {providedIn: 'root'} )
export class MessageServer {
  receivedMessage$: Subject<any> = new Subject();
  receivedData$: Subject<any> = new Subject();

  constructor() {
    const self = this;
    window.addEventListener('message', function(message) {
      if (message.data && message.data.type === 'userMessage') {
        self.receivedMessage$.next(message.data.info);
      }

      if (message.data && message.data.type === 'fakeAPIData') {
        self.receivedData$.next(message.data.info);
      }
    }, false);
  }

}
