import { FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";

export class RegisterPageForm {

    private formBuilder: FormBuilder;

    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
    }
    
    createForm() {
       return this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]] ,
            name: ['', [Validators.required]],         
            password: ['', [Validators.required,Validators.minLength(6)]],         
            rePassword: ['',[Validators.required]] ,
            phone: ['', [Validators.required]],         

    
                street: ['', [Validators.required]],         
                number: ['', [Validators.required]],         
                neighborhood: ['', [Validators.required]],         
                complement: ['', [Validators.required]],         
                zip: ['', [Validators.required]],         
                state: ['', [Validators.required]],         
                city: ['', [Validators.required]]    
            
                 
        });
    }

}
