import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';
import { minimumWordsValidator } from '../validators/minimumWordsValidator';

@Directive({
  selector: '[appMinWords]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinWordsDirective,
      multi: true
    }
  ]
})
export class MinWordsDirective implements Validator {
  @Input('appMinWords') minWords!: number;

  validate(control: AbstractControl): { [key: string]: any } | null {
    const words = control.value ? control.value.trim().split(/\s+/) : [];
    const isValid = words.length >= this.minWords;

    return isValid ? null : { minWords: { actualLength: words.length } };
  }
}