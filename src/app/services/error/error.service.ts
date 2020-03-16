import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private fatalSubscribers: Array<(message) => {}>;
  private localSubscribers: Array<(message) => {}>;
  private fatalCodes = [401, 404, 500];

  constructor() { }

  public emitFatal(message: string) {
    this.fatalSubscribers.forEach(callback => callback(message));
  }

  public emitLocal(message: string) {
    this.localSubscribers.forEach(callback => callback(message));
  }

  public emitStandart(code: number, message: string){

  }

  public subscribeFatal( callback: (message) => {} ) {
    this.fatalSubscribers.push(callback);
  }

  public subscribeLocal( callback: (message) => {} ) {
    this.localSubscribers.push(callback);
  }
}
