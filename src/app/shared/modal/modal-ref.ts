import { Observable, Subject } from 'rxjs';

export class ModalRef {
  afterClosed: Observable<any>;

  private readonly _afterClosed = new Subject<any>();
  constructor() {
    this.afterClosed = this._afterClosed.asObservable();
  }

  close(result?: any) {
    this._afterClosed.next(result);
  }
}
