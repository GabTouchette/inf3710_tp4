import { injectable } from "inversify";
import * as pg from "pg";
import "reflect-metadata";

@injectable()
export class DatabaseService {

  // TODO: A MODIFIER POUR VOTRE BD
  public connectionConfig: pg.ConnectionConfig = {
    user: "postgres",
    database: "hoteldb",
    password: "yamouh12",
    port: 5432,
    host: "127.0.0.1",
    keepAlive: true
  };

  public pool: pg.Pool = new pg.Pool(this.connectionConfig);

  // public async updateVariete(name: string, marketDate: string,
  //     semis: string, plantation: string, entretion: string,
  //     recolte: string, establishmentPeriod: string, harvestPeriod: string, commentaire: string): Promise<pg.QueryResult> {
  //   const client = await this.pool.connect();
  // 
  //   let toUpdateValues = [];
  //
  //   if (name.length > 0) toUpdateValues.push(`nom = '${name}'`);
  //   if (marketDate.length > 0) toUpdateValues.push(`dateMiseEnMarche = '${marketDate}'`);
  //   if (semis.length > 0) toUpdateValues.push(`semis = '${semis}'`);
  //   if (plantation.length > 0) toUpdateValues.push(`plantation = '${plantation}'`);
  //   if (entretion.length > 0) toUpdateValues.push(`entretion = '${entretion}'`);
  //   if (recolte.length > 0) toUpdateValues.push(`recolte = '${recolte}'`);
  //   if (commentaire.length > 0) toUpdateValues.push(`commentaire = '${commentaire}'`);
  //
  //   if (name || name.length === 0 || toUpdateValues.length === 0)
  //     throw new Error("Invalid hotel update query");
  //
  //   const query = `UPDATE jardincommunautaire.variete SET ${toUpdateValues.join(", ")} WHERE name = '${name}';`;
  //   const res = await client.query(query);
  //   client.release()
  //   return res;
  // }

  public async createVariete(name: string, dateMiseEnMarche: string, semis: string,
    plantation: string, entretion: string, recolte: string,
    debutMiseEnPlace: string, finMiseEnPlace: string,
    debutRecolte: string, finRecolte: string,
     commentaire: string): Promise<pg.QueryResult> {

    let names= [];
    let values= [];


    values.push(name);
    names.push("nom")

    if(dateMiseEnMarche.length > 0){
      values.push(dateMiseEnMarche);
      names.push("dateMiseEnMarche")
    }
    if(semis.length > 0){
      values.push(semis);
      names.push("semis")
    }
    if(plantation.length > 0){
      values.push(plantation);
      names.push("plantation")
    }
    if(entretion.length > 0){
      values.push(entretion);
      names.push("entretion")
    }
    if(recolte.length > 0){
      values.push(recolte);
      names.push("recolte")
    }
    if(debutMiseEnPlace.length > 0){
      values.push(debutMiseEnPlace);
      names.push("debutMiseEnPlace")
    }
    if(finMiseEnPlace.length > 0){
      values.push(finMiseEnPlace);
      names.push("finMiseEnPlace")
    }
    if(debutRecolte.length > 0){
      values.push(debutRecolte);
      names.push("debutRecolte")
    }
    if(finRecolte.length > 0){
      values.push(finRecolte);
      names.push("finRecolte")
    }
    if(commentaire.length > 0){
      values.push(commentaire);
      names.push("commentaire")
    }


    // if (!name || name.length === 0)
    //   throw new Error("Invalid hotel update query");

    const query = `INSERT INTO jardincommunautaire.variete (${names.join(", ")}) VALUES ('${values.join("', '")}');`;



    const client = await this.pool.connect();
    const res = await client.query(query);
    client.release()
    return res;
  }

  public async updateVariete(name: string, dateMiseEnMarche: string, semis: string,
    plantation: string, entretion: string, recolte: string,
    debutMiseEnPlace: string, finMiseEnPlace: string,
    debutRecolte: string, finRecolte: string,
     commentaire: string): Promise<pg.QueryResult> {

    let names= [];


    names.push(`nom= '${name}'`)

    if(dateMiseEnMarche.length > 0){
      names.push(`dateMiseEnMarche= '${dateMiseEnMarche}'`)
    }
    if(semis.length > 0){
        names.push(`semis= '${semis}'`)
    }
    if(plantation.length > 0){
        names.push(`plantation= '${plantation}'`)
    }
    if(entretion.length > 0){
        names.push(`entretion= '${entretion}'`)
    }
    if(recolte.length > 0){
        names.push(`recolte= '${recolte}'`)
    }
    if(debutMiseEnPlace.length > 0){
        names.push(`debutMiseEnPlace= '${debutMiseEnPlace}'`)
    }
    if(finMiseEnPlace.length > 0){
        names.push(`finMiseEnPlace= '${finMiseEnPlace}'`)
    }
    if(debutRecolte.length > 0){
        names.push(`debutRecolte= '${debutRecolte}'`)
    }
    if(finRecolte.length > 0){
        names.push(`finRecolte= '${finRecolte}'`)
    }
    if(commentaire.length > 0){
        names.push(`commentaire= '${commentaire}'`)
    }

    // if (!name || name.length === 0)
    //   throw new Error("Invalid hotel update query");

    const query = `UPDATE jardincommunautaire.variete
      SET (${names.join(", ")})
      WHERE nom= '${name}';`;


    const client = await this.pool.connect();
    const res = await client.query(query);
    client.release()
    return res;
  }


  public async deleteVariete(name: string): Promise<pg.QueryResult> {
    if (name.length === 0) throw new Error("Invalid delete query");


    const client = await this.pool.connect();
    const query = `DELETE FROM jardincommunautaire.variete WHERE name = '${name}';`;

    const res = await client.query(query);
    client.release()
    return res;
  }

  public async getPlants(name: string): Promise<pg.QueryResult> {

    let queryText= '';
    console.log(name);

    if(name.length ===0){
      queryText = 'SELECT * FROM jardincommunautaire.plante;';
    }
    else{
      queryText= `SELECT * FROM jardincommunautaire.plante WHERE nom LIKE '%${name}%';`;
    }
    console.log(queryText);

    const client = await this.pool.connect();
    const res = await client.query(queryText);
    client.release()
    return res;

  }

// jardins
public async getJardins(): Promise<pg.QueryResult> {

  let queryText = 'SELECT * FROM jardincommunautaire.Jardins;';

  const client = await this.pool.connect();
  const res = await client.query(queryText);
  client.release()
  return res;

}


}
