import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class ProfilePageForm {

    private formBuilder: FormBuilder;
    private form: FormGroup
    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
    }
    
    createForm() {
        return  this.form = this.formBuilder.group({
            name: ['', [Validators.required]] ,
            email: ['', [Validators.required,Validators.email]],         
            cont: ['', [Validators.required]],         
            usn: ['', [Validators.required]]     
        });

    }



   
}