import { Component, OnInit } from "@angular/core";
import { Variete } from "../../../../common/interfaces/variete.interface";
import { CommunicationService } from "../communication.service";


// import { CommunicationService } from "../communication.service";

@Component({
  selector: "app-gardens",
  templateUrl: "./modify.component.html",
  styleUrls: ["./modify.component.css"],
})
export class Modify implements OnInit {

varietes: Variete[];

  public constructor( private communicationService: CommunicationService) { //private readonly communicationService:CommunicationService

  }

  public ngOnInit(): void {
    this.varietes = [];
    // this.varietes.push({
    //   name: 'flower',
    //   dateMiseEnMarche: new Date(),
    //   semis: 'very terrible',
    //   plantation: 'hard af to plant',
    //   entretion: 'no',
    //   recolte: 'no',
    //   debutMiseEnPlace: new Date(),
    //   finMiseEnPlace: new Date(),
    //   debutRecolte: new Date(),
    //   finRecolte: new Date(),
    //   commentaire: 'bad plant'
    // });

    this.communicationService.getVarietes().subscribe(varietes => this.varietes = varietes);



  }
  public modifyVariete(variete: Variete) {
        console.log("modifying");
      this.communicationService.modifyVariete(variete);
      // update the lsit
      this.communicationService.getVarietes().subscribe(varietes => this.varietes = varietes);
  }
  public deleteVariete(variete: Variete) {
        console.log("deleting");

        this.communicationService.deleteVariete(variete);
        // update the lsit
        this.communicationService.getVarietes().subscribe(varietes => this.varietes = varietes);
    }
}
