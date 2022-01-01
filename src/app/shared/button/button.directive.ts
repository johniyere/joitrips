import { Directive, HostBinding, Input, OnInit } from '@angular/core';

const ULTRAMARINE_CLASS =
  'bg-ultramarine-200 text-ultramarine-500 border-ultramarine-500 hover:bg-ultramarine-100 active:btn-ultramarine-active';
const ULTRAMARINE_BOX_SHADOW =
  '#7f9df9 0px -6px 0px inset, #e5ecff 0px 0px 0px 2px inset, #e5ecff 0px -8px 0px 0px inset';
const MUSTARD_CLASS =
  'bg-mustard-500 text-brown-500 border-brown-500 active:btn-mustard-active';
const MUSTARD_BOX_SHADOW =
  '#DAA701 0px -6px 0px inset, #FFF4D2 0px 0px 0px 2px inset, #FFF4D2 0px -8px 0px 0px inset';
const WHITE_CLASS =
  'bg-neutral-50 text-neutral-900 hover:bg-neutral-100 active:btn-white-active';
const WHITE_BOX_SHADOW =
  '#D2D2D2 0px -6px 0px inset, #EEEEEE 0px 0px 0px 2px inset, #EEEEEE 0px -8px 0px 0px inset';
@Directive({
  selector: '[joi-button]',
  host: {
    class:
      'transition-all font-display rounded-lg px-4 pt-2 pb-2.5 border-2 leading-normal ',
  },
})
export class ButtonDirective implements OnInit {
  @Input('color') color: 'ultramarine' | 'mustard' | 'white' = 'ultramarine';

  @Input('disabled') disabled = false;

  @HostBinding('class')
  elementClass = ULTRAMARINE_CLASS;

  @HostBinding('style.boxShadow')
  elementBoxShadow = ULTRAMARINE_BOX_SHADOW;

  constructor() {}

  ngOnInit(): void {
    switch (this.color) {
      case 'ultramarine':
        this.elementClass = ULTRAMARINE_CLASS;
        this.elementBoxShadow = ULTRAMARINE_BOX_SHADOW;
        break;
      case 'mustard':
        this.elementClass = MUSTARD_CLASS;
        this.elementBoxShadow = MUSTARD_BOX_SHADOW;
        break;
      case 'white':
        this.elementClass = WHITE_CLASS;
        this.elementBoxShadow = WHITE_BOX_SHADOW;
        break;
    }
  }
}
