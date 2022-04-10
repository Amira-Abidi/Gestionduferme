import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  /*selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;*/


  selectedFile: File;
  imgURL: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string ;
  messNontrouve : string;
  imageName: any;
  ajouter : boolean = false;
  constructor(private token: TokenStorageService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
  }


  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    }

    onUpload() {
    console.log(this.selectedFile);
    const uploadImageData = new FormData();
    // uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    uploadImageData.append('imageFile', this.selectedFile);
    this.httpClient.post('http://localhost:8091/image/upload',
    uploadImageData).subscribe(
    (response) => {
    this.ajouter = true;
    console.log(response);
    this.message='image ajoutée avec succès.';
    },
    (err) => {
    console.log('erreur '+err);
    console.log('ajouter '+this.ajouter);
    this.message='image non ajoutée! vérifier si l\'image existe dans la BD ou sa taille est grande.';
    }
    )
    }
    getImage() {
    this.httpClient.get('http://localhost:8091/image/get/' + this.imageName)
    .subscribe(
    res => {
    this.retrieveResonse = res;
    this.base64Data = this.retrieveResonse.picByte;
    this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
    console.log('image affichée avec succès...');
    this.messNontrouve ='';
    },
    error => {
    console.log('image non trouvée '+error);
    this.messNontrouve = 'Image non trouvée !'
    this.retrievedImage='';
    }
    );
    }
    }

/*
  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select Fil
    this.selectedFile = event.target.files[0];
  }
  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );
  }
    //Gets called when the user clicks on retieve image button to get the image from back end
    getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8091/image/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;


        }
      );
  }
}
*/
