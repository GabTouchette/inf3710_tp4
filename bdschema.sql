DROP SCHEMA IF EXISTS jardinCommunautaire CASCADE;
CREATE SCHEMA jardinCommunautaire ;
SET search_path = jardinCommunautaire;

CREATE TABLE Jardins(
     idJardin SERIAL,
     nom VARCHAR(20) NOT NULL ,
     surface VARCHAR(20) NOT NULL,
     hauteurMax FLOAT(2),
     typeSol VARCHAR(20),
     ornamentFlag BOOLEAN,
	 vergerFlag BOOLEAN,
	 potagerFlag BOOLEAN,
     PRIMARY KEY(idJardin)
);
CREATE TABLE Parcelle(
	idParcelle SERIAL,
	idJardin INT,
	coordonnees VARCHAR(20) NOT NULL,
	dimensions VARCHAR(20) NOT NULL,
	PRIMARY KEY(idParcelle),
	FOREIGN KEY(idJardin) references Jardins(idJardin) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE Rang(
	idRang SERIAL,
	idParcelle INT,
	numero INT NOT NULL,
	coordonnees VARCHAR(20) NOT NULL,
	periodeJachere INT CHECK (periodeJachere < 365),
	PRIMARY KEY(idRang),
	FOREIGN KEY(idParcelle) references Parcelle(idParcelle) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE Variete(
	nom VARCHAR(20) NOT NULL,
	dateMiseEnMarche DATE NOT NULL,
	semis VARCHAR(20) NOT NULL,
	plantation VARCHAR(20) NOT NULL,
	entretion VARCHAR(20) NOT NULL,
	recolte VARCHAR(20) NOT NULL,
	debutMiseEnPlace DATE NOT NULL,
	finMiseEnPlace DATE NOT NULL,
	debutRecolte DATE NOT NULL,
	finRecolte DATE NOT NULL,
	commentaire VARCHAR(30),
	typeMiseEnPlace VARCHAR(20),
	idRang INT,
	PRIMARY KEY(nom),
	FOREIGN KEY(idRang) references Rang(idRang) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE Plante(
	nom VARCHAR(20) NOT NULL,
	nomLatin VARCHAR(20) NOT NULL,
	catergorie VARCHAR(20) NOT NULL,
	typePlante VARCHAR(20) NOT NULL,
	sousType VARCHAR(20) NOT NULL,
	nomVariete VARCHAR(20) NOT NULL,
	PRIMARY KEY (nom),
	FOREIGN KEY (nomVariete) references Variete(nom) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE CombinaisonPlantes(
	nomPlante_1 VARCHAR(20) NOT NULL,
	nomPlante_2 VARCHAR(20) NOT NULL,
	typeCombinaison VARCHAR(20) NOT NULL,
	PRIMARY KEY (nomPlante_1, nomPlante_2),
	FOREIGN KEY (nomPlante_1) references Plante(nom) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (nomPlante_2) references Plante(nom) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE Menace(
	idMenace SERIAL,
	description VARCHAR(30) NOT NULL,
	solutions VARCHAR(30) NOT NULL,
	PRIMARY KEY (idMenace)
);
CREATE TABLE MenacePlante(
	nomPlante VARCHAR(20),
	idMenace INT,
	PRIMARY KEY (nomPlante,idMenace),
	FOREIGN KEY (nomPlante) references Plante(nom) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (idMenace) references Menace(idMenace) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE Semancier(
	nom VARCHAR(20),
	siteWeb VARCHAR(20) NOT NULL,
	PRIMARY KEY (nom)
);
CREATE TABLE ProductionVariete(
	nomSemancier VARCHAR(20),
	nomVariete VARCHAR(20),
	offertBio BOOLEAN NOT NULL,
	offertNonBio BOOLEAN NOT NULL,
	PRIMARY KEY (nomSemancier,nomVariete),
	FOREIGN KEY (nomSemancier) references Semancier(nom) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (nomVariete) references Variete(nom) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE TypeDeSol(
	typeSol VARCHAR(20),
	PRIMARY KEY (typeSol)
);
CREATE TABLE AdaptationVarieteSol(
	nomVariete VARCHAR(20),
	typeSol VARCHAR(20),
	niveauAdaptation VARCHAR(20) NOT NULL,
	PRIMARY KEY (nomVariete,typeSol),
	FOREIGN KEY (typeSol) references TypeDeSol(typeSol) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (nomVariete) references Variete(nom) ON DELETE CASCADE ON UPDATE CASCADE
	
	
)

