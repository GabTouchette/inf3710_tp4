set search_path = jardinCommunautaire;

INSERT INTO Jardins (nom,surface,hauteurMax,typeSol,ornamentFlag,vergerFlag,potagerFlag) VALUES ( 'jardin1', '700m^2', 10.2,null,false,true,false);    
INSERT INTO Jardins (nom,surface,hauteurMax,typeSol,ornamentFlag,vergerFlag,potagerFlag) VALUES ( 'jardin2', '100m^2', null,null,true,false,false);    
INSERT INTO Jardins (nom,surface,hauteurMax,typeSol,ornamentFlag,vergerFlag,potagerFlag) VALUES ( 'jardin3', '300m^2', null,'argileux',false,false,true);    
INSERT INTO Jardins (nom,surface,hauteurMax,typeSol,ornamentFlag,vergerFlag,potagerFlag) VALUES ( 'jardin4', '200m^2', null,'ferreux',false,false,true); 

INSERT INTO Parcelle (idJardin,coordonnees,dimensions) VALUES ( 1, 'quadrant 4,3', '30m x 10m'); 
INSERT INTO Parcelle (idJardin,coordonnees,dimensions) VALUES ( 2, 'quadrant 3,3', '10m x 10m'); 
INSERT INTO Parcelle (idJardin,coordonnees,dimensions) VALUES ( 3, 'quadrant 1,2', '20m x 5m'); 
INSERT INTO Parcelle (idJardin,coordonnees,dimensions) VALUES ( 4, 'quadrant 5,1', '10m x 25m'); 
INSERT INTO Parcelle (idJardin,coordonnees,dimensions) VALUES ( 1, 'quadrant 2,3', '30m x 10m'); 
INSERT INTO Parcelle (idJardin,coordonnees,dimensions) VALUES ( 2, 'quadrant 1,3', '10m x 10m'); 

INSERT INTO Rang (idParcelle ,numero ,coordonnees,debutJachere,finJachere  ) VALUES ( 1, 1, 'quadrant supérieur',DATE'2022-03-01',DATE'2022-06-01'); 
INSERT INTO Rang (idParcelle ,numero ,coordonnees,debutJachere,finJachere  ) VALUES ( 1, 2, 'quadrant inférieur',DATE'2022-07-01',DATE'2022-10-01'); 
INSERT INTO Rang (idParcelle ,numero ,coordonnees,debutJachere,finJachere  ) VALUES ( 2, 1, 'quadrant supérieur',DATE'2022-05-01',DATE'2022-09-01'); 
INSERT INTO Rang (idParcelle ,numero ,coordonnees,debutJachere,finJachere  ) VALUES ( 2, 2, 'quadrant inférieur',DATE'2022-09-01',DATE'2022-12-01'); 
INSERT INTO Rang (idParcelle ,numero ,coordonnees,debutJachere,finJachere  ) VALUES ( 2, 3, 'quadrant inférieur',DATE'2022-09-01',DATE'2022-12-01'); 
INSERT INTO Rang (idParcelle ,numero ,coordonnees,debutJachere,finJachere  ) VALUES ( 3, 1, 'quadrant inférieur',DATE'2022-09-01',DATE'2022-12-01'); 
INSERT INTO Rang (idParcelle ,numero ,coordonnees,debutJachere,finJachere  ) VALUES ( 4, 1, 'quadrant inférieur',DATE'2022-09-01',DATE'2022-12-01'); 
INSERT INTO Rang (idParcelle ,numero ,coordonnees,debutJachere,finJachere  ) VALUES ( 5, 1, 'quadrant inférieur',DATE'2022-09-01',DATE'2022-12-01'); 
INSERT INTO Rang (idParcelle ,numero ,coordonnees,debutJachere,finJachere  ) VALUES ( 5, 2, 'quadrant inférieur',DATE'2022-09-01',DATE'2022-12-01'); 
INSERT INTO Rang (idParcelle ,numero ,coordonnees,debutJachere,finJachere  ) VALUES ( 6, 1, 'quadrant inférieur',DATE'2022-09-01',DATE'2022-12-01'); 

INSERT INTO Variete VALUES ('VARIETE A', DATE'2019-01-01','Il faut planter cette graine dans le sol','Planter 3 pouces sous le sol, arroser abondament dans la premiere heure',
						   'Arroser 3 fois semaines, couper les feuilles mortes','Arracher la plante à ca racine pour la récolte',DATE'2022-08-01',DATE'2022-09-01',DATE'2022-10-01'
						   ,DATE'2022-11-01','Cette plante doit être consommé 3 jours après la récolte');
INSERT INTO Variete VALUES ('VARIETE B', DATE'2019-02-01','Il faut semaine cette graine','Semer abondament sur la surface et arroser a des intervales de 3 heures pour la premiere semaine',
						   'Arroser 2 fois semaine par la suite, cultiver les fruits quand il sont mur','Ceuillir directement la plante',DATE'2022-04-01',DATE'2022-06-01',DATE'2022-09-01'
						   ,DATE'2022-10-01','Le fruit devrait etre conserver dans un endroit frais');
INSERT INTO Variete VALUES ('VARIETE C', DATE'2020-01-01','Il faut greffer cette plante avec une plante jumelle','Incisez le haut de la plante a laquelle vous voulez greffer de 4 à 5 cm de profondeur,
							Inciser le griffons de 3 à 5 cm et ligaturer le tout',
						   'Arroser 3 fois semaines, verifier que la ligature reste bien en place dans les 2 premier mois','Arracher la plante à ca racine pour la récolte',DATE'2022-03-01',DATE'2022-06-01',DATE'2023-03-01'
						   ,DATE'2023-05-01','Assurer-vous de placer cette plante dans un endroit bien ensoleillé');
INSERT INTO Variete VALUES ('VARIETE F', DATE'2020-10-01','Il faut planter cette graine dans le sol','Planter 2 pouces sous le sol, arroser abondament dans la premiere journée',
						   'Arroser 5 fois semaines, soutenir la racine avec des batons au besoin','Arracher la plante à ca racine pour la récolte',DATE'2022-05-01',DATE'2022-09-01',DATE'2023-01-01'
						   ,DATE'2023-03-01','Assurer vous que la plante ne soit pas trop exposé à de haute chaleure');
						   
INSERT INTO VarieteRang VALUES ('VARIETE A', 1,'plant');
INSERT INTO VarieteRang VALUES ('VARIETE B', 1,'plant');
INSERT INTO VarieteRang VALUES ('VARIETE B', 2,'semis');
INSERT INTO VarieteRang VALUES ('VARIETE C', 3,'greffe');
INSERT INTO VarieteRang VALUES ('VARIETE A', 3,'greffe');
INSERT INTO VarieteRang VALUES ('VARIETE C', 4,'plant');
INSERT INTO Plante VALUES ('Plante A','PlantosA','racine','arbre fruitier','fruit a noyau','VARIETE A');
INSERT INTO Plante VALUES ('Plante B','tuberosum','fleur','herbes','fleur ouverte','VARIETE B');
INSERT INTO Plante VALUES ('Fougère','Polypodiopsida','plante','herbes','plante vasculaire','VARIETE C');
INSERT INTO Plante VALUES ('PLANTE C','PlantosC','arbre','arbuste','arbuste a épines','VARIETE F');

INSERT INTO Menace (description,solutions) VALUES ('La plante se retrouve dans un milieu trop froid pour rester en vie','Lorsque la température chute, partir le chauffadge pour la maintenir au chaud');

INSERT INTO MenacePlante VALUES ('Fougère',1);

INSERT INTO Semancier VALUES ('Semancier A','www.semancierA.com');
INSERT INTO Semancier VALUES ('Semancier B','www.semancierB.com');

INSERT INTO ProductionVariete VALUES ('Semancier A','VARIETE A',false,true);
INSERT INTO ProductionVariete VALUES ('Semancier B','VARIETE B',true,true);
INSERT INTO ProductionVariete VALUES ('Semancier A','VARIETE C',true,false);
INSERT INTO ProductionVariete VALUES ('Semancier B','VARIETE F',true,true);

INSERT INTO TypeDeSol VALUES ('argileux');
INSERT INTO TypeDeSol VALUES ('granuleux');
INSERT INTO TypeDeSol VALUES ('ferreux');

INSERT INTO AdaptationVarieteSol VALUES ('VARIETE A','argileux','faible');
INSERT INTO AdaptationVarieteSol VALUES ('VARIETE B','ferreux','élevée');
INSERT INTO AdaptationVarieteSol VALUES ('VARIETE C','granuleux','moyen');
