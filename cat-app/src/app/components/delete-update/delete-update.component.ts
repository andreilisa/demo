import { Component, OnInit } from '@angular/core';
import { TypeService } from 'src/app/services/type.service.spec';
import { ActivatedRoute, Router } from '@angular/router';
import {Cats} from "../../model/cats.model";

@Component({
  selector: 'delete-update',
  templateUrl: './delete-update.component.html',
  styleUrls: ['./delete-update.component.css']
})
export class DeleteUpdateComponent implements OnInit {
  currentCat = null;
  message = '';
  public cats: Cats[];

  constructor(
    private typeService: TypeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.retrieveT();
    this.getProduct(this.route.snapshot.paramMap.get('id'));
  }

  getProduct(id): void {
    this.typeService.get(id)
      .subscribe(
        cat => {
          this.currentCat = cat;
          console.log(cat);
        },
        error => {
          console.log(error);
        });
  }
  retrieveT(): void {
    this.typeService.getAll()
      .subscribe(data => this.cats = data)
  }

  setAvailableStatus(status): void {
    const data = {
      name: this.currentCat.name,
      color: this.currentCat.color,
      available: status
    };

    this.typeService.update(this.currentCat.id, data)
      .subscribe(
        response => {
          this.currentCat.available = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateCat(): void {
    this.typeService.update(this.currentCat.id, this.currentCat)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The product was updated!';
        },
        error => {
          console.log(error);
        });
  }

  deleteProduct(): void {
    this.typeService.delete(this.currentCat.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/products']);
        },
        error => {
          console.log(error);
        });
  }
}
