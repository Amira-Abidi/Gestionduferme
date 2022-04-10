import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Aliment } from 'src/app/models/aliment';
import { AlimentService } from 'src/app/services/aliment.service';

@Component({
  selector: 'app-aliments',
  templateUrl: './aliments.component.html',
  styleUrls: ['./aliments.component.css']
})
export class AlimentsComponent implements OnInit {

  aliment: Observable<Aliment[]>;
  [x: string]: any;
  private roles: string[];
  username: string;
  constructor(private alimentService: AlimentService, private router: Router){}
  AlimentDetails(id: number){
    this.router.navigate(['', id]);
  }

  updateAliment(id: number){
    this.router.navigate(['update_aliment', id]);
  }

    ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.aliment = this.alimentService.getAlimentList();

  }

  deleteAliment(id: number) {
    if(confirm("voulez-vous vraiment supprimer cet aliment !")){
    this.alimentService.deleteAliment(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}}
