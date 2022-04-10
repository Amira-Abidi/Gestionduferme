import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  animal: Observable<Animal[]>;
  [x: string]: any;
  private roles: string[];
  showAdminBoard = false;
  showModeratorBoard = false;
  showUserBoard = false;
  username: string;
  constructor(private animalService: AnimalService, private router: Router,private tokenStorageService: TokenStorageService) {}

  AnimalDetails(id: number){
    this.router.navigate(['', id]);
  }

  updateAnimal(id: number){
    this.router.navigate(['update_animal', id]);
  }

    ngOnInit() {
    this.reloadData();
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;
    }
  }

  reloadData() {
    this.animal = this.animalService.getAnimalList();

  }

  deleteAnimal(id: number) {
    if(confirm("voulez-vous vraiment supprimer cet animal !")){
    this.animalService.deleteAnimal(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
}
