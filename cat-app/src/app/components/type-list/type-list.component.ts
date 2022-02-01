import {Component, OnInit} from '@angular/core';
import {Cats} from 'src/app/model/cats.model';
import {TypeService} from 'src/app/services/type.service.spec';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css'],
  providers: [TypeService]
})
export class TypeListComponent implements OnInit {
  cats: Cats[];
  name: '';
  submitted = false;
  isVisible = false;
  isVisible2 = false;
  isVisible3 = false;
  isOkLoading = false;
  cat = {
    id : null,
    name: '',
    color: '',
  };
  p: number = 1;
  constructor(private router: Router, private typeService: TypeService, private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.retrieveT();
  }

  retrieveT(): void {
    this.typeService.getAll()
      .subscribe(data =>{
        this.cats = data
      })
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

  newCat(): void {
    this.submitted = false;
    this.cat = {
      id : null,
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

  catsDetails(id: number) {
    this.typeService.getDetails(id).subscribe((data: Cats)=>{
      console.log(data)
      this.cat = data;
    });
  }

  deleteTutorial(id: number): void {
    this.typeService.delete(id)
      .subscribe(
        response => {
          console.log(response);
          this.cats = this.cats.filter(item => item.id !== id);
          console.log('Post deleted successfully!');
        });
  }

  showModal(): void {
    this.isVisible = true;

  }

  showModal2(): void {
    this.isVisible2 = true;
  }

  showModal3(): void {
    this.isVisible3 = true;
  }

  handleOk2(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible2 = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleOk3(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible3 = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
    this.isVisible2 = false;
    this.isVisible3 = false;
  }

  updateCats(id :number): void {
    const data = {
      name: this.cat.name,
      color: this.cat.color
    };

    this.typeService.update(id,data)
      .subscribe(
        response => {
          console.log(response);
         this.cat = response
        },
        error => {
          console.log(error);
        });
  }
  onPageIndexChange(cats: Array<any>) {

  }
}
