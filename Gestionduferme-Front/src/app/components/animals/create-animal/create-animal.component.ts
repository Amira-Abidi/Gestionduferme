import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-create-animal',
  templateUrl: './create-animal.component.html',
  styleUrls: ['./create-animal.component.css']
})
export class CreateAnimalComponent implements OnInit {

  form: any = {};
  isCreated = false;
  isFailed = false;
  errorMessage = '';
  animal: Animal;
  selectItem: String[] = [];

  constructor(
    private animalService: AnimalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.animal = new Animal();
    this.animalService.getAnimalList().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );

  }

  saveAnimal() {
    this.animalService.createAnimal(this.animal).subscribe(
      (data) => {
        console.log(data);
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.saveAnimal();
  }

  gotoList() {
    this.router.navigate(['/animals']);
  }


}
