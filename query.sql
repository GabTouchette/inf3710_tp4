set search_path = jardinCommunautaire;

-- 1) Lister toutes les plantes qui sont actuellement dans les rangs d’un jardin

SELECT DISTINCT p.*
FROM Plante p
NATURAL JOIN VarieteRang;

-- 2)  Lister le nombre de rangs minimum et maximum sur les parcelles d’un jardin donné (choisissez-en dans vos données)

CREATE OR REPLACE FUNCTION get_Rangs(int, int)
RETURNS bigint AS $$
SELECT COUNT(*) as myCount
FROM Parcelle p, Rang r
WHERE p.idParcelle = r.idParcelle
AND p.idParcelle = $1
AND p.idJardin = $2
$$ LANGUAGE SQL;

SELECT MIN(get_rangs(p.idParcelle,1)), MAX(get_rangs(p.idParcelle,1))
FROM Parcelle p;


-- 3) Lister les détails des parcelles qui ont la variété de plante A et la variété de plante B

SELECT DISTINCT p.*
FROM Parcelle AS p
WHERE EXISTS (
	SELECT nomVariete
	FROM VarieteRang
	WHERE nomVariete = 'VARIETE A'
)
AND EXISTS (
	SELECT nomVariete
	FROM VarieteRang
	WHERE nomVariete = 'VARIETE B'
);


-- 4) Lister les détails des parcelles qui ont la variété de plante A ou la variété de plante B

SELECT DISTINCT p.*, vr.nomVariete
FROM Parcelle p
NATURAL JOIN VarieteRang vr
WHERE vr.nomVariete IN ('VARIETE A', 'VARIETE B');

-- 5) Lister les détails des parcelles qui ont la variété de plante A mais pas la variété de plante B

SELECT DISTINCT p.*
FROM Parcelle AS p
WHERE EXISTS (
	SELECT nomVariete
	FROM VarieteRang
	WHERE nomVariete = 'VARIETE A'
)
AND NOT EXISTS (
	SELECT nomVariete
	FROM VarieteRang
	WHERE nomVariete = 'VARIETE B'
);

--6) Lister tous les rangs d’un jardin donné avec leurs variétés de plantes s’ils sont cultivés. Dans le cas contraire, affichez null. 
SELECT DISTINCT rangVariete.idRang,vr.nomVariete as varieteCultive FROM(SELECT * FROM (SELECT r.idRang FROM (SELECT p.idParcelle FROM Parcelle p WHERE idJardin = 1) as parcelleJardin NATURAL JOIN Rang r) as rangJardin 
	NATURAL JOIN Variete v ) as rangVariete NATURAL LEFT OUTER JOIN VarieteRang vr ORDER BY rangVariete.idRang ;

--7) Quel est le nombre de jardins uniquement avec des semences biologiques ?
SELECT count( DISTINCT p.idJardin) AS JardinBio FROM (SELECT r.idParcelle FROM (SELECT * FROM (SELECT pv.nomVariete FROM ProductionVariete pv WHERE (pv.offertBio = true and pv.offertNonBio = false)) as varieteBio 
	NATURAL JOIN VarieteRang vr ) as rangBio NATURAL JOIN Rang r) as parcelleBio NATURAL JOIN Parcelle p;

--8) Lister tous les jardins qui ont au moins un rang en jachère Supposons que la date est le 19 Avril 2022
SELECT j.nom FROM (SELECT p.idJardin  FROM (SELECT r.idParcelle FROM Rang r WHERE debutJachere <= '2022-04-19' AND finJachere >= '2022-04-19') as rangEnjachere NATURAL JOIN Parcelle p) AS jardinAyantRangJachere NATURAL JOIN Jardins j;

--9) Quelles sont les menaces auxquelles sont sensibles les plantes fougères
SELECT * FROM (SELECT mp.idMenace FROM MenacePlante mp WHERE nomPlante = 'Fougère') as menaceFougere NATURAL JOIN Menace m;

-- 10) Quelles sont les plantes de la variété tuberosum
SELECT nom FROM Plante where nomVariete =  'tuberosum';
