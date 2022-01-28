import { Component, OnInit } from '@angular/core';
import { Cats } from 'src/app/model/cats.model';
import { TypeService } from 'src/app/services/type.service.spec';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent implements OnInit {
  cats = {
    name: '',
    color: ''
  };
  submitted = false;

  constructor(private typeService: TypeService) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    const data = {
      name: this.cats.name,
      color: this.cats.color
    };

    this.typeService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProduct(): void {
    this.submitted = false;
    this.cats = {
      name: '',
      color: ''
    };
  }



}
