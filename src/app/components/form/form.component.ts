import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(public fb:FormBuilder) { 
    this.form = this.fb.group({
      username: ['', []],
      email: ['', [Validators.email, Validators.required]],
      terms: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  submit(){
    console.log("Al menos el botón funciona...");
  }

}
