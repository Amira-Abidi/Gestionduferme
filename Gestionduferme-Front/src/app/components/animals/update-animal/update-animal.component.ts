import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-update-animal',
  templateUrl: './update-animal.component.html',
  styleUrls: ['./update-animal.component.css']
})
export class UpdateAnimalComponent implements OnInit {

  id: number;
  animal: Animal;
  selectItem: String[] = [];

  constructor(private animalService: AnimalService,
    private route: ActivatedRoute,
    private router: Router) { }


    gotoList() {
      this.router.navigate(['animals']);
    }

    getTeamId(e: any , id: any): void {

      if(e.target.checked)
      {
        console.log(id + 'checked');
        this.selectItem.push(id);
      }
      else
      {
        console.log(id + 'Unchecked');
      }

      console.log(this.selectItem);


    }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.animalService.getAnimalById(this.id).subscribe(data => {
      this.animal = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.animalService.updateAnimal(this.id, this.animal).subscribe( data =>{
      this.goToAnimalList();
    }
    , error => console.log(error));
  }

  goToAnimalList(){
    this.router.navigate(['animals']);
  }

}
