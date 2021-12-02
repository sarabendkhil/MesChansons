import { Injectable } from '@angular/core';
import { Chanson } from '../model/chanson.model';

@Injectable({
  providedIn: 'root'
})
export class ChansonService {

  chansons :Chanson[];
  

  constructor() {
    this.chansons = [
      {idChanson : 1, nomChanson : "Someone like you", nomChanteur : "Adel", datePublication : new Date("02/15/2011")},
      {idChanson : 2, nomChanson : "Bohemian Rhapsody", nomChanteur : "Queen", datePublication : new Date("10/31/1975")},
      {idChanson : 3, nomChanson :"Perfect", nomChanteur : "Ed Sheeran", datePublication : new Date("11/24/2017")}
      ];
   }

   listeChanson():Chanson[]{
     return this.chansons;
   }
   ajouterChanson(chanson: Chanson){
     this.chansons.push(chanson);
   }

   supprimerChanson( chans: Chanson){
    //supprimer la chans du tableau chansons
    const index = this.chansons.indexOf(chans, 0);
    if (index > -1) {
    this.chansons.splice(index, 1);
    }
    }

    consulterChanson(id:number): Chanson{
      return this.chansons.find(p => p.idChanson == id);
      
      }
      trierChansons(){
        this.chansons = this.chansons.sort((n1,n2) => {
        if (n1.idChanson > n2.idChanson) {
        return 1;
        }
        if (n1.idChanson < n2.idChanson) {
        return -1;
        }
        return 0;
        });
        }
    updateChanson(c:Chanson)
    {
      this.supprimerChanson(c);
      this.ajouterChanson(c);
      this.trierChansons();
    }
}