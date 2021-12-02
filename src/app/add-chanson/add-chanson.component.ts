import { Component, OnInit } from '@angular/core';
import { Chanson } from '../model/chanson.model';
import { ChansonService } from '../services/chanson.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-chansons',
  templateUrl: './add-chanson.component.html',
 
})
export class AddChansonComponent implements OnInit {

  newChanson = new Chanson();
  message:string;
  
  constructor(private chansonService : ChansonService,private router:Router) { }

  ngOnInit(): void {}
  addChanson(){
    this.chansonService.ajouterChanson(this.newChanson);
    //this.message="Chanson "+this.newChanson.nomChanson+" ajouté avec succés!";
    this.router.navigate(["chansons"]);
    }

}
