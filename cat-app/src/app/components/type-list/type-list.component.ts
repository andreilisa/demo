import {Component, OnInit} from '@angular/core';
import {Cats} from 'src/app/model/cats.model';
import {TypeService} from 'src/app/services/type.service.spec';
import {Router} from "@angular/router";

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css'],
  providers: [TypeService]
})
export class TypeListComponent implements OnInit {
  cats: Cats[];
  message = '';
  currentIndex = -1;
  name: '';
  currentProduct = null;
  submitted = false;
  isVisible = false;
  isOkLoading = false;
  cat = {
    name: '',
    color: ''
  };
  constructor(private router: Router,private typeService: TypeService) {
  }

  ngOnInit(): void {
    this.retrieveT();
  }

  retrieveT(): void {
    this.typeService.getAll()
      .subscribe(data => this.cats = data)
  }
  createCats(): void {
    const data = {
      name: this.cat.name,
      color: this.cat.color
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
    this.cat = {
      name: '',
      color: ''
    };
  }

  searchByName(): void {
    this.typeService.findByName(this.name)
      .subscribe(
        cat => {
          this.cats = cat;
          console.log(cat);
        });
  }

  updateCat(status): void {
    const data = {
      title: this.currentProduct.title,
      description: this.currentProduct.description,
      published: status
    };

    this.typeService.update(this.currentProduct.id, data)
      .subscribe(
        response => {
          this.currentProduct.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateTutorial(): void {
    this.typeService.update(this.currentProduct.id, this.currentProduct)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTutorial(id: number): void {
    this.typeService.delete(id)
      .subscribe(
        response => {
          console.log(response);
          this.cats = response;
        });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
