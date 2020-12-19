import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  rentalForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern("^[a-zA-Z]+$")]),
    email: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required), 
    model: new FormControl('',Validators.required),
    color: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required),
  });

  rental: Rental;
  validMessage: string="";

  constructor(private service: RentalService, private router: Router) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    if(this.rentalForm.valid){
      this.service.post(this.rentalForm.value).subscribe(data => {
        this.rentalForm.reset();
        this.router.navigateByUrl("/crud");
      },(err) =>{
        console.log(err);
      });
    } else {
      this.validMessage="Please fill form before submitting!"
    }
  }

}
