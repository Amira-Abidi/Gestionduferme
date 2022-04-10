import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { MenuComponent } from './components/menu/menu.component';
import { CreateAnimalComponent } from './components/animals/create-animal/create-animal.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { UpdateAnimalComponent } from './components/animals/update-animal/update-animal.component';
import { AlimentsComponent } from './components/aliments/aliments.component';
import { UpdateAlimentComponent } from './components/aliments/update-aliment/update-aliment.component';
import { CreateAlimentComponent } from './components/aliments/create-aliment/create-aliment.component';
import { AddAlimentComponent } from './components/aliments/add-aliment/add-aliment.component';
import { PlanningComponent } from './components/planning/planning.component';
import { AddPlanComponent } from './components/planning/add-plan/add-plan.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'animals', component: AnimalsComponent },
  { path: 'update_animal/:id', component: UpdateAnimalComponent},
  { path: 'create-animal', component: CreateAnimalComponent },
  { path: 'aliments', component: AlimentsComponent },
  { path: 'update_aliment/:id', component: UpdateAlimentComponent},
  { path: 'create-aliment', component: CreateAlimentComponent },
  { path: 'add-aliment', component: AddAlimentComponent},
  { path: 'admin', component: BoardAdminComponent},
  { path: 'user', component: BoardUserComponent},
  { path: 'mod', component: BoardModeratorComponent},
  { path: 'planning', component: PlanningComponent},
  { path: 'add-plan', component: AddPlanComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


