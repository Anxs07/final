import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: number;
  rental: Rental;
  public updateRentalForm: FormGroup;
  validMessage: string="";

  constructor(private service: RentalService, private routeur: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe(resultat => {
      this.rental = resultat;
    });

    this.updateRentalForm = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern("^[a-zA-Z]+$")]),
      email: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required), 
      model: new FormControl('',Validators.required),
      color: new FormControl('',Validators.required),
      date: new FormControl('',Validators.required),
    });
  }

  get myController(){
    return this.updateRentalForm.controls;
  }

  public updateRental(){
    if(this.updateRentalForm.valid){
      this.service.put(this.id, this.updateRentalForm.value).subscribe(res =>{
        this.routeur.navigateByUrl('/crud');
      },(err) =>{
        console.log(err);
      });
    } else{
      this.validMessage = "Please properly fill the form"
    }
   
  }

}
