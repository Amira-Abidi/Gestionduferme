import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Planning } from 'src/app/models/planning';
import { PlanningService } from 'src/app/services/planning.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  planning: Observable<Planning[]>;
  [x: string]: any;
  private roles: string[];
  showAdminBoard = false;
  showModeratorBoard = false;
  showUserBoard = false;
  username: string;
  constructor(private planningService: PlanningService, private router: Router,private tokenStorageService: TokenStorageService) {}

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

  PlanningDetails(id: number){
    this.router.navigate(['', id]);
  }


  reloadData() {
    this.planning = this.planningService.getPlanningList();
  }

  deletePlanning(id: number) {
    if(confirm("voulez-vous vraiment supprimer cette plannification !")){
    this.planningService.deletePlanning(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}


}
