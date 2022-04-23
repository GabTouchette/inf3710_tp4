import { Component, OnInit } from "@angular/core";
import { Variete } from "../../../../common/interfaces/variete.interface";


// import { CommunicationService } from "../communication.service";

@Component({
  selector: "app-gardens",
  templateUrl: "./modify.component.html",
  styleUrls: ["./modify.component.css"],
})
export class Modify implements OnInit {

varietes: Variete[];

  public constructor( ) { //private readonly communicationService:CommunicationService
    //
    // this.communicationService= communicationService;
  }

  public ngOnInit(): void {
    this.varietes = [];

    this.varietes.push({
      name: 'flower',
      dateMiseEnMarche: new Date(),
      semis: 'very terrible',
      plantation: 'hard af to plant',
      entretion: 'no',
      recolte: 'no',
      debutMiseEnPlace: new Date(),
      finMiseEnPlace: new Date(),
      debutRecolte: new Date(),
      finRecolte: new Date(),
      commentaire: 'bad plant'
    });


    // this.varietes.push({
    //   name: 'flower',
    //   marketDate: new Date(),
    //   isBio: true,
    //   seedlingDescription: 'very terrible',
    //   plantingDescription: 'hard af to plant',
    //   maintenance: 'no',
    //   harvesting: 'no',
    //   harvestPeriod: 'long',
    //   establishmentPeriod: '2 years',
    //   comment: 'bad plant'
    // });
    // this.varietes.push({
    //   name: 'flower',
    //   marketDate: new Date(),
    //   isBio: true,
    //   seedlingDescription: 'very terrible',
    //   plantingDescription: 'hard af to plant',
    //   maintenance: 'no',
    //   harvesting: 'no',
    //   harvestPeriod: 'long',
    //   establishmentPeriod: '2 years',
    //   comment: 'bad plant'
    // });
    // this.varietes.push({
    //   name: 'flower',
    //   marketDate: new Date(),
    //   isBio: true,
    //   seedlingDescription: 'very terrible',
    //   plantingDescription: 'hard af to plant',
    //   maintenance: 'no',
    //   harvesting: 'no',
    //   harvestPeriod: 'long',
    //   establishmentPeriod: '2 years',
    //   comment: 'bad plant'
    // });
  }

}
