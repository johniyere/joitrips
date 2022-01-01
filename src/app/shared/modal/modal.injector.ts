import {
  InjectFlags,
  InjectionToken,
  Injector,
  ProviderToken,
  Type,
} from '@angular/core';

export class ModalInjector implements Injector {
  constructor(
    private _parentInjector: Injector,
    private _additionalTokens: WeakMap<any, any>
  ) {}

  // This searches our additional tokens map before searching the parent injector
  get<T>(token: ProviderToken<T>, notFoundValue?: T, flags?: InjectFlags): T;
  get(token: any, notFoundValue?: any): any;
  get(token: any, notFoundValue?: any, flags?: any) {
    const value = this._additionalTokens.get(token);

    if (value) {
      return value;
    }

    return this._parentInjector.get<any>(token, notFoundValue);
  }
}
