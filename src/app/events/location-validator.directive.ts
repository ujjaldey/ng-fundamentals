import { Directive } from "@angular/core";
import { Validator, FormGroup, NG_VALIDATORS } from "@angular/forms"; // NG_VALIDATORS has the list of all validators
// so in case a new validator has to be introduced, it has to be added in NG_VALIDATORS

@Directive({
    selector: '[app-validate-location]',
    providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true }] // adding multi: true, appends LocationValidator in NG_VALIDATORS 
})
export class LocationValidator implements Validator {
    validate(formGroup: FormGroup): { [key: string]: any } {
        let addressControl = formGroup.controls['address'];
        let cityControl = formGroup.controls['city'];
        let countryControl = formGroup.controls['country'];
        let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

        if ((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)) {
            return null;
        } else {
            return { LocationValidator: false };
        }
    }
}