import { NextFunction, Request, Response, Router } from "express";
import { inject, injectable } from "inversify";
import * as pg from "pg";


// import { Variete } from "../../../common/interfaces/variete.interface";
import { Garden } from "../../../common/interfaces/garden.interface";
import { Plant } from "../../../common/interfaces/plant.interface";

import { DatabaseService } from "../services/database.service";
import Types from "../types";

@injectable()
export class DatabaseController {
  public constructor(
    @inject(Types.DatabaseService) private databaseService: DatabaseService
  ) {}

  public get router(): Router {
    const router: Router = Router();
    // search plant
    router.get(
      "/plante", (req: Request, res: Response, _: NextFunction) => {

        var nom = req.query.name ? req.query.name : "";

        this.databaseService
          .getPlants(nom)
          .then((result: pg.QueryResult) => {
            const plants: Plant[] = result.rows.map((plant: Plant) => ({
              nom: plant.nom,
              nomLatin: plant.nomLatin,
              catergorie: plant.catergorie,
              typePlante: plant.typePlante,
              sousType: plant.sousType,
              nomVariete: plant.nomVariete,
            }));
            res.json(plants);
          })
          .catch((e: Error) => {
            console.error(e.stack);
            res.json(-1);
          });
      }
    );


    // modifier une variete
    router.put(
      "/variete", (req: Request, res: Response, _: NextFunction) => {
        var name = req.query.name ? req.query.name : "";
        var dateMiseEnMarche = req.query.dateMiseEnMarche ? req.query.dateMiseEnMarche : "";
        var semis = req.query.semis ? req.query.semis : "";
        var plantation = req.query.plantation ? req.query.plantation : "";
        var entretion = req.query.entretion ? req.query.entretion : "";
        var recolte = req.query.recolte ? req.query.recolte : "";
        var debutMiseEnPlace = req.query.debutMiseEnPlace ? req.query.debutMiseEnPlace : "";
        var finMiseEnPlace = req.query.finMiseEnPlace ? req.query.finMiseEnPlace : "";
        var debutRecolte = req.query.debutRecolte ? req.query.debutRecolte : "";
        var finRecolte = req.query.finRecolte ? req.query.finRecolte : "";
        var commentaire = req.query.commentaire ? req.query.commentaire : "";

        this.databaseService
          .updateVariete(name, dateMiseEnMarche, semis,
            plantation, entretion, recolte,
            debutMiseEnPlace, finMiseEnPlace,
            debutRecolte, finRecolte,
             commentaire)
          .then((result: pg.QueryResult) => {

            res.json("Added Row!");
          })
          .catch((e: Error) => {
            console.error(e.stack);
            res.json(-1);
          });
      }
    );

    // ajouter une variete
    router.post(
      "/variete", (req: Request, res: Response, _: NextFunction) => {

        var name = req.query.name ? req.query.name : "";
        var dateMiseEnMarche = req.query.dateMiseEnMarche ? req.query.dateMiseEnMarche : "";
        var semis = req.query.semis ? req.query.semis : "";
        var plantation = req.query.plantation ? req.query.plantation : "";
        var entretion = req.query.entretion ? req.query.entretion : "";
        var recolte = req.query.recolte ? req.query.recolte : "";
        var debutMiseEnPlace = req.query.debutMiseEnPlace ? req.query.debutMiseEnPlace : "";
        var finMiseEnPlace = req.query.finMiseEnPlace ? req.query.finMiseEnPlace : "";
        var debutRecolte = req.query.debutRecolte ? req.query.debutRecolte : "";
        var finRecolte = req.query.finRecolte ? req.query.finRecolte : "";
        var commentaire = req.query.commentaire ? req.query.commentaire : "";

        this.databaseService
          .createVariete(name, dateMiseEnMarche, semis,
            plantation, entretion, recolte,
            debutMiseEnPlace, finMiseEnPlace,
            debutRecolte, finRecolte,
             commentaire)
          .then((result: pg.QueryResult) => {

            res.json("Added Row!");
          })
          .catch((e: Error) => {
            console.error(e.stack);
            res.json(-1);
          });
      }
    );

    // afficher les jardins
    router.get("/jardins", (req: Request, res: Response, _: NextFunction) => {

      console.log("HERE");

      this.databaseService
      .getJardins()
        .then((result: pg.QueryResult) => {
          const gardens: Garden[] = result.rows.map((garden: Garden) => ({
            idJardin: garden.idJardin,
            nom: garden.nom,
            surface: garden.surface,
            hauteurMax: garden.hauteurMax,
            typeSol: garden.typeSol,
            ornamentFlag: garden.ornamentFlag,
            vergerFlag: garden.vergerFlag,
            potagerFlag: garden.potagerFlag,
            parcels: [],
          }));
          res.json(gardens);
        })
        .catch((e: Error) => {
          console.error(e.stack);
        });
    });


    return router;
  }
}
