import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  OnInit,
  Type,
  ViewChild,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { InsertionDirective } from '../insertion/insertion.directive';

@Component({
  selector: 'joi-modal',
  template: `
    <div
      class="fixed top-0 right-0 left-0 bottom-0 bg-neutral-900 opacity-80 cursor-pointer"
      (click)="close()"
    ></div>

    <div
      class="bg-white border-4 border-neutral-900 rounded-2xl fixed w-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <ng-template joiInsertion></ng-template>
    </div>
  `,
  styles: [],
})
export class ModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(InsertionDirective)
  insertionPoint!: InsertionDirective;

  public componentRef!: ComponentRef<any>;
  public childComponentType!: Type<any>;
  public onClose!: Observable<any>;

  private readonly _onClose = new Subject<any>();

  constructor(private cd: ChangeDetectorRef) {
    this.onClose = this._onClose.asObservable();
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.setModalConfig();
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  private setModalConfig() {}

  // Injects the dynamic child component into the drawer directive insertion point
  private loadChildComponent(componentType: Type<any>) {
    const viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentType);
  }

  close() {
    this._onClose.next({});
  }
}
