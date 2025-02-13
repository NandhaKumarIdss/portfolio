import { AbstractControl, ValidatorFn } from '@angular/forms';

export function minimumWordsValidator(minWords: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const words = control.value ? control.value.trim().split(/\s+/) : [];
        const isValid = words.length >= minWords;
        return isValid ? null : { minWords: { requiredLength: minWords, actualLength: words.length } };
    };
}