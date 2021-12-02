import { Component, OnInit } from '@angular/core';
import { Chanson } from '../model/chanson.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ChansonService } from '../services/chanson.service';
@Component({
  selector: 'app-update-chanson',
  templateUrl: './update-chanson.component.html',
  styles: [
  ]
})
export class UpdateChansonComponent implements OnInit {
  currentChanson = new Chanson();

  constructor(private activatedRoute: ActivatedRoute,
    private router:Router,
    private chansonService: ChansonService) { }

  ngOnInit(): void {
    this.currentChanson = this.chansonService.
    consulterChanson(this.activatedRoute.snapshot.params.id);
    console.log(this.currentChanson);
  }
  updateChanson(){
    this.chansonService.updateChanson(this.currentChanson);
    this.router.navigate(["chansons"]);
  }

}
