
import $ from 'jquery';
import { mission, domaine } from './plugins';
import { MissionFactory } from './factory/MissionFactory';
import { DomaineFactory } from './factory/DomaineFactory';
import { Mission } from './components/mission';
import '../less/utils.less';
import '../less/styles.less';
import '../less/experiences.less';

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
        missions.forEach(m => {
            $('#experiences .content').append(`
                <cv-mission title="${m.title.rendered}"
                    domaines="${m.acf.domaines ? m.acf.domaines.map(d => { return d.name }) : []}" 
                    desc="${m.acf.description}" begin-date="${m.acf.date_debut}" 
                    end-date="${m.acf.date_fin !== "" ? m.acf.date_fin : "en cours"}"></cv-mission>`); // TODO Desc too long
        })
        // MissionFactory.addAndCreateFromWPJsonArray($("#experiences .content"), missions);
        $('.mission', self).mission();
        $.getJSON("/domaines").done(domaines => {
            DomaineFactory.addAndCreateFromWPJsonArray($("#experiences .sorting"), domaines);
            $('#experiences .sorting').show(500);
            $('#experiences .content').show(500);
            $('#experiences .spinner').hide(500);
            $('.domaine', self).domaine();
        });
    });

});
