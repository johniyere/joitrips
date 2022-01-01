import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalConfig {
  width?: string;
  size!: 'sm' | 'lg' | string;
}
