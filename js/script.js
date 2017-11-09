
import $ from 'jquery';
import { mission, domaine } from './plugins';
import '../less/utils.less';
import '../less/styles.less';
import '../less/experiences.less';

import { COLORS } from './utils';
import { MAIN_LAY, htmlMission } from './const';

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
            promises.push(new Promise((resolve, reject) => {
                $('#experiences .content').append(htmlMission(m.title.rendered, m.acf.description, 
                    m.acf.domaines ? m.acf.domaines.map(d => { return d.name }) : [], m.acf.date_debut, 
                    m.acf.date_fin !== "" ? m.acf.date_fin : "en cours"));
                resolve();
            }));
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