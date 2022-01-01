import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Inject,
  Injectable,
  Injector,
  Renderer2,
  RendererFactory2,
  Type,
} from '@angular/core';
import { ModalRef } from './modal-ref';
import { ModalComponent } from './modal.component';
import { ModalConfig } from './modal.config';
import { ModalInjector } from './modal.injector';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modalComponentRef!: ComponentRef<ModalComponent>;
  private renderer: Renderer2;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    @Inject(DOCUMENT) private _document: any,
    private rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  open(componentType: Type<any>, config?: ModalConfig) {
    const modalRef = this.appendModalComponentToBody(config);

    this.modalComponentRef.instance.childComponentType = componentType;

    return modalRef;
  }

  close() {
    this.removeModalComponentFromBody();
  }

  private appendModalComponentToBody(config: ModalConfig = new ModalConfig()) {
    // Weak map is used here so the map keys can be garbage collected
    const map = new WeakMap();
    map.set(ModalConfig, config);

    const modalRef = new ModalRef();
    map.set(ModalRef, modalRef);

    // Create our drawer component and inject our values from the weak map
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    const componentRef = componentFactory.create(
      new ModalInjector(this.injector, map)
    );

    // Attach our drawer component to the application and body
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    this.renderer.addClass(document.body, 'overflow-hidden');

    this.modalComponentRef = componentRef;

    // Listen to the drawer closed from drawer component instance
    this.modalComponentRef.instance.onClose.subscribe(() => {
      this.removeModalComponentFromBody();
    });

    // Listen to the drawer closed from the drawer ref (used in dynamic child component)
    const sub = modalRef.afterClosed.subscribe(() => {
      this.modalComponentRef.instance.close();
      sub.unsubscribe();
    });

    return modalRef;
  }

  private removeModalComponentFromBody() {
    this.appRef.detachView(this.modalComponentRef.hostView);
    this.renderer.removeClass(this._document.body, 'overflow-hidden');

    this.modalComponentRef.destroy();
  }
}
