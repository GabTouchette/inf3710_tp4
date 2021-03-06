import { Component, OnInit } from "@angular/core";
import { Variete } from "../../../../common/interfaces/variete.interface";
import { CommunicationService } from "../communication.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"],
})
export class Add implements OnInit {
  newVariete: Variete;

  public constructor(private communicationService: CommunicationService) {}

  public ngOnInit(): void {



    this.newVariete={
      name: '',
      dateMiseEnMarche: new Date(),
      semis: '',
      plantation: '',
      entretion: '',
      recolte: '',
      debutMiseEnPlace: new Date(),
      finMiseEnPlace: new Date(),
      debutRecolte: new Date(),
      finRecolte: new Date(),
      commentaire: '',
    };
  }

  public addVariete() {

      console.log(this.newVariete);
      this.communicationService.addVariete(this.newVariete);
  }
}
