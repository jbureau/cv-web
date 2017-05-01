$(document).ready(function () {

    var domaines = [{
        "id": 1,
        "intitule": "PS",
        "color": "#d6e87c"
    }, {
        "id": 2,
        "intitule": "QM",
        "color": "#ccc"
    }, {
        "id": 3,
        "intitule": "PM",
        "color": "#6e97be"
    }];

    var missions = [{
        "id": 1,
        "intitule": "intitule",
        "date_deb": "juin 2016",
        "date_fin": "encours",
        "entreprise": {
            "nom": "Schneider Electrics",
            "url_logo": "/images/schneider-electric.gif"
        },
        "desc": "Localisation de la solution Bridge, formation des Key users, assistance aux reprises de données sur le site de Limoges (87).",
        "domaine": ['PS', 'PM'],
        "type": "Déploiement"
    }, {
        "id": 2,
        "intitule": "intitule",
        "date_deb": "juin 2016",
        "date_fin": "encours",
        "entreprise": {
            "nom": "Schneider Electrics",
            "url_logo": "/images/schneider-electric.gif"
        },
        "desc": "desc",
        "domaine": ['QM', 'PS'],
        "type": "Déploiement"
    }, {
        "id": 3,
        "intitule": "intitule",
        "date_deb": "juin 2016",
        "date_fin": "encours",
        "entreprise": {
            "nom": "Schneider Electrics",
            "url_logo": "/images/schneider-electric.gif"
        },
        "desc": "desc",
        "domaine": ['PS'],
        "type": "Déploiement"
    }, {
        "id": 4,
        "intitule": "intitule",
        "date_deb": "juin 2016",
        "date_fin": "encours",
        "entreprise": {
            "nom": "Schneider Electrics",
            "url_logo": "/images/schneider-electric.gif"
        },
        "desc": "desc",
        "domaine": ['QM'],
        "type": "Déploiement"
    }, {
        "id": 4,
        "intitule": "intitule",
        "date_deb": "juin 2016",
        "date_fin": "encours",
        "entreprise": {
            "nom": "Schneider Electrics",
            "url_logo": "/images/schneider-electric.gif"
        },
        "desc": "desc",
        "domaine": ['QM'],
        "type": "Déploiement"
    }];

    missions.forEach(function (mission) {
        $(".experiences_liste").append("<li class=\"mission\" data-domaine=\"" + mission.domaine + "\" style=\"position: relative;\">"
            + "<div class=\"dates\"><div class=\"date_deb\">" + mission.date_deb + "</div>"
            + "<div class=\"date_fin\">" + mission.date_fin + "</div></div>"
            + "<div class=\"desc\"><div class=\"domaines\"></div>"
            + "<h2 class=\"type_mission\">" + mission.type + "</h2>"
            + "<p class=\"details\">" + mission.desc + "</p>"
            + "</div></li>");
    });
        
    domaines.forEach(function (domaine) {
        $(".experiences_tri").append(" <input type=\"button\" "
            + "data-domaine=\"" + domaine.intitule + "\" "
            + "data-color=\"" + domaine.color + "\" "
            + "class=\"btn curve domaine\" "
            + "value=\"" + domaine.intitule + "\" />");
        });
    
    $('.mission', $(this)).mission();
    $('.domaine', $(this)).domaine();
});
