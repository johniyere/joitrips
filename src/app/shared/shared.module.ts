import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './button/button.directive';
import { ModalComponent } from './modal/modal.component';
import { ModalHeaderComponent } from './modal/modal-header/modal-header.component';
import { ModalBodyComponent } from './modal/modal-body/modal-body.component';
import { ModalFooterComponent } from './modal/modal-footer/modal-footer.component';
import { ModalTitleDirective } from './modal/modal-title/modal-title.directive';
import { InputDirective } from './input/input.directive';
import { InsertionDirective } from './insertion/insertion.directive';
import { LabelDirective } from './label/label.directive';
import { FormFieldComponent } from './form-field/form-field.component';
import { IconButtonDirective } from './icon-button/icon-button.directive';

@NgModule({
  declarations: [
    ButtonDirective,
    ModalComponent,
    InsertionDirective,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ModalTitleDirective,
    InputDirective,
    LabelDirective,
    FormFieldComponent,
    IconButtonDirective,
  ],
  imports: [CommonModule],
  exports: [
    ButtonDirective,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ModalTitleDirective,
    InputDirective,
    LabelDirective,
    FormFieldComponent,
    IconButtonDirective,
  ],
})
export class SharedModule {}
