import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aliment } from 'src/app/models/aliment';
import { AlimentService } from 'src/app/services/aliment.service';

@Component({
  selector: 'app-update-aliment',
  templateUrl: './update-aliment.component.html',
  styleUrls: ['./update-aliment.component.css']
})
export class UpdateAlimentComponent implements OnInit {

  id: number;
  aliment: Aliment;
  selectItem: String[] = [];
  errorMessage = '';
  isCreated = false;
  isFailed = false;
  constructor(private alimentService: AlimentService,
    private route: ActivatedRoute,
    private router: Router) { }


    gotoList() {
      this.router.navigate(['aliments']);
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

    this.alimentService.getAlimentById(this.id).subscribe(data => {
      this.aliment = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.alimentService.updateAliment(this.id, this.aliment).subscribe( data =>{
      this.goToAnimalList();
    }
    , error => console.log(error));
  }

  goToAnimalList(){
    this.router.navigate(['aliments']);
  }


}
