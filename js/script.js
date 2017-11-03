
import $ from 'jquery';
import { mission, domaine } from './plugins';
import '../less/utils.less';
import '../less/styles.less';
import '../less/experiences.less';

import { COLORS } from './utils';
import { MAIN_LAY } from './const';

$(document).ready(function () {
    var self = $(this);

    $("body").append(MAIN_LAY);

    $.fn.mission = mission;
    $.fn.domaine = domaine;
    

    $('#experiences .sorting').hide();
    $('#experiences .content').hide();
    $('#experiences .spinner').show();

    $.getJSON("/missions").done(missions => {
        let promises = [];
        missions.forEach(m => {
            promises.push(getMission(m));
        });
        Promise.all(promises).then(() => {
            $('.mission', self).mission();
            $.getJSON("/domaines").done(domaines => {
                let promises = [];
                let i = -1;
                domaines.forEach(d => {
                    promises.push(getDomaine(d, i++));
                });
                $('#experiences .sorting').show(500);
                $('#experiences .content').show(500);
                $('#experiences .spinner').hide(500);
                Promise.all(promises).then(() => {
                    $('.domaine', self).domaine();
                });
            });
        });
    });

});

function getMission(m) {
    return new Promise((resolve, reject) => {
        let mission = {};
        mission.date_deb = m.acf.date_debut;
        mission.date_fin = (m.acf.date_fin === "") ? "en cours" : m.acf.date_fin;
        mission.intitule = m.title.rendered;
        mission.desc = m.acf.description;
        mission.domaine = (m.acf.domaines) ? m.acf.domaines.map(d => { return d.name }) : [];
        $(".content").append("<li class=\"mission\" data-domaine=\"" + mission.domaine +
            "\" style=\"position: relative;\">" +
            "<div class=\"dates\"><div class=\"date_deb\">" + mission.date_deb + "</div>" +
            "<div class=\"date_fin\">" + mission.date_fin + "</div></div>" +
            "<div class=\"desc\">" +
            "<div class=\"domaines\"></div>" +
            "<h2 class=\"type_mission\">" + mission.intitule + "</h2>" +
            "<p class=\"details\">" + mission.desc + "</p>" +
            "</div></li>");
        resolve();
    });
}

function getDomaine(d, i) {
    return new Promise((resolve, reject) => {
        let domaine = {};
        domaine.intitule = d.name;
        domaine.color = COLORS[i % COLORS.length];
        $("#experiences .sorting").append(" <input type=\"button\" " +
            "data-domaine=\"" + domaine.intitule + "\" " +
            "data-color=\"" + domaine.color + "\" " +
            "class=\"btn curve domaine\" " +
            "value=\"" + domaine.intitule + "\" />");
        resolve();
    });
}