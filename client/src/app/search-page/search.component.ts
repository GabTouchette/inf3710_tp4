import { Component, OnInit } from "@angular/core";
import { Plant } from "../../../../common/interfaces/plant.interface";

@Component({
  selector: "app-gardens",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class Search implements OnInit {
  searchFilter: string = "";
  plants: Plant[];
  plantsWithFilter: Plant[];

  public constructor() {}

  public ngOnInit(): void {
    this.plants = [];
    this.plants.push({
      name: "pomier",
      latinName: "Pomius Arbus",
      category: "plante a fruits",
      type: "",
      subType: "",
      plantType: "Arbre",
      menaces: [
        {
          description: "ratons qui mangent les pommes",
          solutions: "poison contre les ratons",
        },
      ],
    });
    this.plants.push({
      name: "pomier",
      latinName: "Pomius Arbus",
      category: "plante a fruits",
      type: "",
      subType: "",
      plantType: "Arbre",
      menaces: [
        {
          description: "ratons qui mangent les pommes",
          solutions: "poison contre les ratons",
        },
      ],
    });
    this.plants.push({
      name: "pomier",
      latinName: "Pomius Arbus",
      category: "plante a fruits",
      type: "",
      subType: "",
      plantType: "Arbre",
      menaces: [
        {
          description: "ratons qui mangent les pommes",
          solutions: "poison contre les ratons",
        },
      ],
    });
    this.plants.push({
      name: "pomier",
      latinName: "Pomius Arbus",
      category: "plante a fruits",
      type: "",
      subType: "",
      plantType: "Arbre",
      menaces: [
        {
          description: "ratons qui mangent les pommes",
          solutions: "poison contre les ratons",
        },
      ],
    });
    this.plants.push({
      name: "pomier",
      latinName: "Pomius Arbus",
      category: "plante a fruits",
      type: "",
      subType: "",
      plantType: "Arbre",
      menaces: [
        {
          description: "ratons qui mangent les pommes",
          solutions: "poison contre les ratons",
        },
      ],
    });
    this.plants.push({
      name: "pomier",
      latinName: "Pomius Arbus",
      category: "plante a fruits",
      type: "",
      subType: "",
      plantType: "Arbre",
      menaces: [
        {
          description: "ratons qui mangent les pommes",
          solutions: "poison contre les ratons",
        },
      ],
    });
    this.plants.push({
      name: "pomier",
      latinName: "Pomius Arbus",
      category: "plante a fruits",
      type: "",
      subType: "",
      plantType: "Arbre",
      menaces: [
        {
          description: "ratons qui mangent les pommes",
          solutions: "poison contre les ratons",
        },
      ],
    });
    this.plants.push({
      name: "pomier",
      latinName: "Pomius Arbus",
      category: "plante a fruits",
      type: "",
      subType: "",
      plantType: "Arbre",
      menaces: [
        {
          description: "ratons qui mangent les pommes",
          solutions: "poison contre les ratons",
        },
      ],
    });
    this.plants.push({
      name: "pomier",
      latinName: "Pomius Arbus",
      category: "plante a fruits",
      type: "",
      subType: "",
      plantType: "Arbre",
      menaces: [
        {
          description: "ratons qui mangent les pommes",
          solutions: "poison contre les ratons",
        },
      ],
    });
    this.plants.push({
      name: "pomier",
      latinName: "Pomius Arbus",
      category: "plante a fruits",
      type: "",
      subType: "",
      plantType: "Arbre",
      menaces: [
        {
          description: "ratons qui mangent les pommes",
          solutions: "poison contre les ratons",
        },
      ],
    });
    this.plants.push({
      name: "pomier",
      latinName: "Pomius Arbus",
      category: "plante a fruits",
      type: "",
      subType: "",
      plantType: "Arbre",
      menaces: [
        {
          description: "ratons qui mangent les pommes",
          solutions: "poison contre les ratons",
        },
      ],
    });
    this.plants.push({
      name: "pomier",
      latinName: "Pomius Arbus",
      category: "plante a fruits",
      type: "",
      subType: "",
      plantType: "Arbre",
      menaces: [
        {
          description: "ratons qui mangent les pommes",
          solutions: "poison contre les ratons",
        },
      ],
    });
    this.plantsWithFilter = this.plants;
  }

  public applySearchFilter() {
    if (this.searchFilter !== "") {
      this.plantsWithFilter = this.plants.filter((plant: Plant) =>
        plant.name.includes(this.searchFilter)
      );
    } else this.plantsWithFilter = this.plants;
  }
}
