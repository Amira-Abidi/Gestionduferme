import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aliment } from 'src/app/models/aliment';
import { Commande } from 'src/app/models/Commande';
import { AlimentService } from 'src/app/services/aliment.service';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-create-aliment',
  templateUrl: './create-aliment.component.html',
  styleUrls: ['./create-aliment.component.css']
})
export class CreateAlimentComponent implements OnInit {

  form: any = {};
  isCreated = false;
  isFailed = false;
  errorMessage = '';
  commande: any={};
  aliment: Aliment;
  aliments: Aliment[];
  selectItem: String[] = [];
  isDisplayed = false;
  constructor(
    private commandeService: CommandeService,
    private alimentService: AlimentService,
    private router: Router
  ) {}



  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.commande = new Commande();
    this.alimentService.getAlimentList().subscribe(
      (data) => {
        console.log(data);
        this.aliments = data;
      },
      (error) => console.log(error)
    );
  }

  saveCommande() {
    this.commande.aliments= this.selectItem;
    console.log(this.commande.aliments);
    this.commandeService.createCommande(this.commande).subscribe((data) =>{
      this.commande = new Commande();
      this.gotoList();
    }, (error) => console.log(error) )

    }

  onSubmit() {
     this.saveCommande();
     this.isDisplayed = true;
  }

  gotoList() {
    this.router.navigate(['/aliments']);
  }

  getAlimentId(e: any , id: any): void {

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


  }}
