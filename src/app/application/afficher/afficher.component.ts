import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css']
})
export class AfficherComponent implements OnInit {
  id: number;
  rental: Rental;
  public afficherRentalForm: FormGroup;

  constructor(private service: RentalService, private routeur: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe(resultat => {
      this.rental = resultat;
    });

    this.afficherRentalForm = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern("^[a-zA-Z]+$")]),
      email: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required), 
      model: new FormControl('',Validators.required),
      color: new FormControl('',Validators.required),
      date: new FormControl('',Validators.required),
    });
  }

  get myController(){
    return this.afficherRentalForm.controls;
  }

  public color(){
    
  }




}
