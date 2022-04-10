import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aliment } from 'src/app/models/aliment';
import { AlimentService } from 'src/app/services/aliment.service';

@Component({
  selector: 'app-add-aliment',
  templateUrl: './add-aliment.component.html',
  styleUrls: ['./add-aliment.component.css']
})
export class AddAlimentComponent implements OnInit {

  form: any = {};
  isCreated = false;
  isFailed = false;
  errorMessage = '';
  aliment: Aliment;

  constructor(
    private alimentService: AlimentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.aliment = new Aliment();
    this.alimentService.getAlimentList().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );

  }

  saveAliment() {
    this.alimentService.createAliment(this.aliment).subscribe(
      (data) => {
        console.log(data);
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.saveAliment();
  }

  gotoList() {
    this.router.navigate(['/aliments']);
  }
}
