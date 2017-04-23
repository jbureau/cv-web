$(document).ready(function () {

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
        "domaine": ['PS'],
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
    }];

    missions.forEach(function (mission) {
        $(".experiences_liste").append("<li class=\"mission\" data-domaine=\"" + mission.domaine + "\" style=\"position: relative;\">"
            + "<div class=\"dates\"><div class=\"date_deb\">" + mission.date_deb + "</div>"
            + "<div class=\"date_fin\">" + mission.date_fin + "</div></div>"
            + "<div class=\"desc\">"
            + "<h2 class=\"type_mission\">" + mission.type + "</h2>"
            + "<p class=\"details\">" + mission.desc + "</p>"
            + "</div></li>");
    });

    $('.expe_tri .btn').click(event, function () {
        $(this).attr("data-domaine")
    });
    
    $('.mission', $(this)).mission();
});
