import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Aliment } from 'src/app/models/aliment';
import { Animal } from 'src/app/models/animal';
import { Planning } from 'src/app/models/planning';
import { AlimentService } from 'src/app/services/aliment.service';
import { AnimalService } from 'src/app/services/animal.service';
import { PlanningService } from 'src/app/services/planning.service';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css']
})
export class AddPlanComponent implements OnInit {


  form: any = {};
  isCreated = false;
  isFailed = false;
  errorMessage = '';
  planning: any={};
  aliment: Aliment;
  aliments: Aliment[];
  animal: Animal;
  animals: Animal[];
  selectItem: String[] = [];
  unite;
  capacity;
  ufl;
  pdi;
  ca;
  p;
  poids_metabolique;
  poids_vif;
  production;
  QtF;
  nbC;

  ApportEng;
  ApportPDI;
  ApportCa;
  ApportP;

  DeficitEng;
  DeficitPDI;
  DeficitCa;
  DeficitP;

  QtEng;
  QtPDI;
  QtCa;
  QtP;

  nbComplement;
  provisionEng;
  provisionPDI;
  provisionCa;
  provisionP;
  percent;

  Quantite;
  cout;

  constructor(
    private planningService: PlanningService,
    private alimentService: AlimentService,
    private animalSerevice: AnimalService,
    private router: Router
  ) {

  }


  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.planning = new Planning();
    this.alimentService.getAlimentList().subscribe(
      (data) => {
        console.log(data);
        this.aliments = data;
      },
      (error) => console.log(error)
    );


    this.animalSerevice.getAnimalList().subscribe(
      (data) => {
        console.log(data);
        this.animals = data;
      },
      (error) => console.log(error)
    );

  }

  savePlanning() {
    this.planning.ration = this.selectItem;
    this.planning.complement = this.selectItem;
    this.planningService.createPlanning(this.planning).subscribe((data) =>{
      this.planning = new Planning();
      this.gotoList();
    }, (error) => console.log(error) );
  }

  onSubmit() {
    this.savePlanning();
  }

  gotoList() {
    this.router.navigate(['/planning']);
  }

  getQtId(e: any , id: any): void {


    if(e.target.checked)
    {
      console.log(id + 'checked');
      this.selectItem.push(id);
      this.nbC = this.selectItem.length;
      if(this.nbC > 1){
        this.QtF = this.capacity/this.nbC;
        this.planning.quantite_fourrage = this.QtF;

      }
      else{
        this.QtF = this.capacity;
        this.planning.quantite_fourrage = this.QtF;

      }

      this.cout = this.QtF*id.prix;

      //calcul Apport

      this.ApportEng = id.ufl*this.QtF;
      this.ApportPDI = id.mat*this.QtF;
      this.ApportCa = id.ca*this.QtF;
      this.ApportP = id.p*this.QtF;

      //calcul deficit

      this.DeficitEng = this.ufl - this.ApportEng;
      this.DeficitPDI = this.pdi - this.ApportPDI;
      this.DeficitCa = this.ca - this.ApportCa;
      this.DeficitP = this.p - this.ApportP;


    }
    else
    {
      console.log(id + 'Unchecked');
    }

  }

  getQtCId(e: any , id: any): void {

    if(e.target.checked)
    {
      console.log(id + 'checked');
      this.selectItem.push(id);
      this.nbComplement = this.selectItem.length;

      //calcul provision

      if(this.nbComplement > 1){
        this.percent = (<HTMLInputElement>document.getElementById("percent")).value;
        this.provisionEng = (this.DeficitEng * this.percent)/100
        this.provisionPDI = (this.DeficitPDI * this.percent)/100
        this.provisionCa = (this.DeficitCa * this.percent)/100
        this.provisionP = (this.DeficitP * this.percent)/100

        //calcul quantite
        this.Quantite = Math.max(this.provisionEng,this.provisionPDI,
        this.provisionCa,this.provisionCa);
        this.planning.quantite_complement = this.Quantite;
      }
      else{

        //prov = (def * 100)/100
        this.percent = (<HTMLInputElement>document.getElementById("percent")).value;
        this.provisionEng = this.DeficitEng
        this.provisionPDI = this.DeficitPDI
        this.provisionCa =  this.DeficitCa
        this.provisionP =   this.DeficitP

        //calcul quantite
        this.Quantite = Math.max(this.provisionEng,this.provisionPDI,
        this.provisionCa,this.provisionCa);
        this.planning.quantite_complement = this.Quantite;
      }

    }
    else
    {
      console.log(id + 'Unchecked');
    }

  }

  onchangePoids(event){
    this.poids_metabolique = Math.pow(Number(event),0.75);
    this.poids_vif = Number(event);
  }

  onChangeProduction(event){
    this.production = Number(event);
    this.onCalculCapacity();
  }


  onCalculBesoinEntretien(event){
    this.poids_metabolique = event;
  }

  onChangeUnity(event){

    if(event == "lait"){
      this.unite = "L/j"
      this.ufl = ((this.poids_metabolique*75)/1700)+(this.production*0,37)
      if(this.poids_vif <= 500){
        this.pdi = (this.production*44) + 320
        this.ca = (this.production*3,8) + 27
        this.p = (this.production*1,5) + 20
      }

      else if (this.poids_vif > 500 && this.poids_vif <= 550){
        this.pdi = (this.production*44) + 345
        this.ca= (this.production*3,8) + 30
        this.p = (this.production*1,5) + 22
      }

      else if (this.poids_vif > 550 && this.poids_vif <= 600){
        this.pdi = (this.production*44) + 370
        this.ca = (this.production*3,8) + 33
        this.p = (this.production*1,5) + 24,5
        }

      else if (this.poids_vif > 600 && this.poids_vif <= 650){
        this.pdi = (this.production*44) + 395
        this.ca = (this.production*3,8) + 36
        this.p = (this.production*1,5) + 27
      }

      else if (this.poids_vif > 650){
        this.pdi = (this.production*44) + 420
        this.ca = (this.production*3,8) + 39
        this.p = (this.production*1,5) + 29,5
      }
    }

  if(event == "viande") {
      this.unite = "g"
      if (this.poids_vif <= 200 && this.production < 1200){
            this.ufl = (((this.poids_metabolique*75)/1820)+ 3,3);
            console.log("poids_metabolique:"+this.poids_metabolique);
            console.log("poids_vif:"+this.poids_vif);
            console.log("production:"+this.production);
            this.pdi = 700;
            console.log("pdi:"+this.pdi);
            this.ca = 54;
            console.log("ca:"+this.ca);
            this.p = 34;
            console.log("p:"+this.p);
          }
      else if (this.poids_vif <= 200 && this.production >= 1200){
            this.ufl = ((this.poids_metabolique*75)/1820)+ 3,7
            this.pdi = 740;
            this.ca = 58;
            this.p = 37;
          }

      else if (this.poids_vif > 200 &&  this.poids_vif <= 250 && this.production < 1200){
            this.ufl = ((this.poids_metabolique*75)/1820)+ 3,9
            this.pdi = 745
            this.ca = 57
            this.p = 36
          }
      else if (this.poids_vif > 200 && this.poids_vif <= 250 && this.production >= 1200){
            this.ufl = ((this.poids_metabolique*75)/1820)+ 4,3
            this.pdi = 785
            this.ca = 61
            this.p = 38
          }

      else if (this.poids_vif > 250 && this.poids_vif <= 300 && this.production < 1200){
            this.ufl = ((this.poids_metabolique*75)/1820)+ 4,3
            this.pdi = 785
            this.ca = 61
            this.p = 39
          }

      else if (this.poids_vif > 250 && this.poids_vif <= 300 && this.production >= 1200){
            this.ufl = ((this.poids_metabolique*75)/1820)+ 4,9
            this.pdi = 830
            this.ca = 66
            this.p = 42
          }
      else if (this.poids_vif > 300 && this.poids_vif <= 350 && this.production < 1200){
            this.ufl = ((this.poids_metabolique*75)/1820)+ 5
            this.pdi = 825
            this.ca = 64
            this.p = 42
          }
      else if (this.poids_vif > 300 && this.poids_vif <= 350 && this.production >= 1200){
            this.ufl = ((this.poids_metabolique*75)/1820)+ 5,5
            this.pdi = 865
            this.ca = 69
            this.p = 45
          }

      else if (this.poids_vif > 350 && this.poids_vif <= 400 && this.production < 1200){
            this.ufl = ((this.poids_metabolique*75)/1820)+ 5,5
            this.pdi = 860
            this.ca = 68
            this.p = 46
          }

      else if (this.poids_vif > 350 && this.poids_vif <= 400 && this.production >= 1200){
            this.ufl = ((this.poids_metabolique*75)/1820)+ 6,1
            this.pdi = 900
            this.ca = 73
            this.p = 49
          }

      else if (this.poids_vif > 400 && this.poids_vif <= 450 && this.production < 1200){
            this.ufl = ((this.poids_metabolique*75)/1820)+ 6,1
            this.pdi = 895
            this.ca = 72
            this.p = 51
          }

      else if (this.poids_vif> 400 && this.poids_vif <= 450 && this.production >= 1200){
            this.ufl = ((this.poids_metabolique*75)/1820)+ 6,7
            this.pdi = 935
            this.ca = 77
            this.p = 54
          }

      else if (this.poids_vif > 450 && this.poids_vif <= 500 && this.production < 1200){
            this.ufl = ((this.poids_metabolique*75)/1820)+ 6,6
            this.pdi = 930
            this.ca = 77
            this.p = 53
          }

      else if (this.poids_vif > 450 && this.poids_vif <= 500 && this.production >= 1200){
            this.ufl = ((this.poids_metabolique*75)/1820)+ 7,4
            this.pdi = 965
            this.ca = 82
            this.p = 56
          }

      else if (this.poids_vif > 500 && this.production < 1200){
            this.ufl = ((this.poids_metabolique*75)/1820)+ 7,3
            this.pdi = 1065
            this.ca = 94
            this.p = 64,5
          }

      else if (this.poids_vif > 500 && this.production >= 1200){
            this.ufl = ((this.poids_metabolique*75)/1820)+ 8,1
            this.pdi = 1085
            this.ca = 100
            this.p = 67,5
            }
          }
    }

  onCalculCapacity(){
    if(this.poids_vif <= 450 && this.production <= 10){
      this.capacity = 2.6 * this.poids_vif
    }
    else if(this.poids_vif <= 450 && this.production <= 20){
      this.capacity = 3.4 * this.poids_vif
    }
    else if(this.poids_vif <= 450 && this.production <= 30){
      this.capacity = 4.2 * this.poids_vif
    }
    else if(this.poids_vif <= 450 && this.production <= 40){
      this.capacity = 5 * this.poids_vif
    }
    else if(this.poids_vif <= 450 && this.production <= 50){
      this.capacity = 5.6 * this.poids_vif
    }
    else if(this.poids_vif <= 550 && this.production <= 10){
      this.capacity = 2.3 * this.poids_vif
    }
    else if(this.poids_vif <= 550 && this.production <= 20){
      this.capacity = 3 * this.poids_vif
    }
    else if(this.poids_vif <= 550 && this.production <= 30){
      this.capacity = 3.7 * this.poids_vif
    }
    else if(this.poids_vif <= 550 && this.production <= 40){
      this.capacity = 4.3 * this.poids_vif
    }
    else if(this.poids_vif <= 550 && this.production <= 50){
      this.capacity = 5 * this.poids_vif
    }
    else if(this.poids_vif > 650 && this.production <= 10){
      this.capacity = 2.1 * this.poids_vif
    }
    else if(this.poids_vif > 650 && this.production <= 20){
      this.capacity = 2.8 * this.poids_vif
    }
    else if(this.poids_vif > 650 && this.production <= 30){
      this.capacity = 3.4 * this.poids_vif
    }
    else if(this.poids_vif > 650 && this.production <= 40){
      this.capacity = 3.8 * this.poids_vif
    }
    else if(this.poids_vif > 650 && this.production <= 50){
      this.capacity = 4.4 * this.poids_vif
    }
  }


}
