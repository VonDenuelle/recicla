import { FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";

export class RegisterPageForm {

    private formBuilder: FormBuilder;

    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
    }
    
    createForm() {
       return this.formBuilder.group({
           firstName: ['', [Validators.required]],         
           lastName: ['', [Validators.required]],         
           email: ['', [Validators.required, Validators.email]] ,
            contactNo: ['', [Validators.required]],                 
            password: ['', [Validators.required,Validators.minLength(4)]] ,
            username: ['', [Validators.required]],        
                 
        });
    }

}
