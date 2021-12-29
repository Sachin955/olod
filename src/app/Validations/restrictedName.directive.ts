import { AbstractControl, ControlContainer, ValidatorFn } from "@angular/forms";

export function nameValidation ():ValidatorFn {
    return (control: AbstractControl) : {[key:string]:boolean} | null=>{
    if(control.value.trim() === 'admin'){
        return {"Namenotallowed": true}
    }
    return null;    
}

}
