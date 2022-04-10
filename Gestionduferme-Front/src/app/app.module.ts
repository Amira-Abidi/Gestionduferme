import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { MenuComponent } from './components/menu/menu.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { CreateAnimalComponent } from './components/animals/create-animal/create-animal.component';
import { authInterceptorProviders } from './services/AuthIntercepter';
import { UpdateAnimalComponent } from './components/animals/update-animal/update-animal.component';
import { AlimentsComponent } from './components/aliments/aliments.component';
import { CreateAlimentComponent } from './components/aliments/create-aliment/create-aliment.component';
import { UpdateAlimentComponent } from './components/aliments/update-aliment/update-aliment.component';
import { AddAlimentComponent } from './components/aliments/add-aliment/add-aliment.component';
import { PlanningComponent } from './components/planning/planning.component';
import { AddPlanComponent } from './components/planning/add-plan/add-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    MenuComponent,
    AnimalsComponent,
    CreateAnimalComponent,
    UpdateAnimalComponent,
    AlimentsComponent,
    CreateAlimentComponent,
    UpdateAlimentComponent,
    AddAlimentComponent,
    PlanningComponent,
    AddPlanComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
