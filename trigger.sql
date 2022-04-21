SET search_path = jardinCommunautaire;

CREATE TABLE IF NOT EXISTS HistoriqueVariete (
    nomVariete VARCHAR(20),
	idRang INT,
    dateAjout Date NOT NULL,
    PRIMARY KEY (nomVariete, idRang),
    FOREIGN KEY(nomVariete) references Variete(nom) ON DELETE RESTRICT ON UPDATE RESTRICT,
	FOREIGN KEY(idRang) references Rang(idRang) ON DELETE RESTRICT ON UPDATE RESTRICT
);

CREATE OR REPLACE FUNCTION ajout_historique()
RETURNS TRIGGER as $histTrigger$
BEGIN 
    INSERT INTO HistoriqueVariete VALUES (NEW.nomVariete, NEW.idRang, current_date);
	RETURN NEW;
END;
$histTrigger$ LANGUAGE PLPGSQL;

CREATE OR REPLACE TRIGGER AjoutVariete AFTER INSERT ON VarieteRang
FOR EACH ROW EXECUTE FUNCTION ajout_historique();

INSERT INTO VarieteRang VALUES ('VARIETE B', 5,'plante');

SELECT * from HistoriqueVariete;
