import { Component, OnInit } from '@angular/core';
import { RentalService } from '../../services/rental.service'

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  listRentals: any[];
  public headElements = ['ID','Name','Email','Phone','Model','Color','Date','Operations'];

  constructor(private service: RentalService) { }

  ngOnInit(): void {
    this.getAllRentals();
  }

  getAllRentals(): void {
    this.service.getAll().subscribe(data => {this.listRentals = data})
  }

  public delete(id: number){
    this.service.deleteById(id).subscribe(resultat => {
      this.listRentals = this.listRentals.filter(element => element.id !== id);
    });
  }

  public delete2(id: number, i:any){
    if(window.confirm("Are you sure?")){
      this.service.deleteById(id).subscribe(resultat => {
        this.listRentals.splice(i,1);
      })
    }
  }

}
