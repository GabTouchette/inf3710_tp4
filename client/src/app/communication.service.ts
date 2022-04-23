import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// tslint:disable-next-line:ordered-imports
import { of, Observable, Subject } from "rxjs";
import { catchError } from "rxjs/operators";
import {HttpParams} from "@angular/common/http";


import { Garden } from "../../../common/interfaces/garden.interface";
import { Variete } from "../../../common/interfaces/variete.interface";
import { Plant } from "../../../common/interfaces/plant.interface";


@Injectable()
export class CommunicationService {
  private readonly BASE_URL: string = "http://localhost:3000/database";
  public constructor(private http: HttpClient) {}

  private _listeners: any = new Subject<any>();

  public listen(): Observable<any> {
    return this._listeners.asObservable();
  }

  public filter(filterBy: string): void {
    this._listeners.next(filterBy);
  }
// jardins
  public getGardens(): Observable<Garden[]> {
    return this.http
      .get<Garden[]>(this.BASE_URL + "/jardins")
      .pipe(catchError(this.handleError<Garden[]>("getGardens")));
  }
// search
  public getPlants(name: string): Observable<Plant[]> {

    const options = name ?
   { params: new HttpParams().set('name', name) } : {};

    return this.http
      .get<Plant[]>(this.BASE_URL + "/plante", options)
      .pipe(catchError(this.handleError<Plant[]>("getPlants")));
  }
// ajouter variete
    public addVariete(variete: Variete): Observable<Plant[]> {

      return this.http
        .post<Plant[]>(this.BASE_URL + "/variete", variete)
        .pipe(catchError(this.handleError<Plant[]>("addVariete")));

    }


  public modifyVariete(variete: Variete): Observable<number> {
    return this.http
      .put<number>(this.BASE_URL + "/variete", variete)
      .pipe(catchError(this.handleError<number>("insertVariete")));
  }


  private handleError<T>(
    request: string,
    result?: T
  ): (error: Error) => Observable<T> {
    return (error: Error): Observable<T> => {
      return of(result as T);
    };
  }
}
