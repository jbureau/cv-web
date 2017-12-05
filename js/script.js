
import $ from 'jquery';
import { mission, domaine } from './plugins';
import { Mission } from './components/mission';
import { Domaine } from './components/domaine';
import '../less/utils.less';
import '../less/styles.less';
import '../less/experiences.less';

import { MAIN_LAY } from './const';
import { DataService } from './services/DataService';

$(document).ready(function () {
    var self = $(this);

    $("body").append(MAIN_LAY);

    $.fn.mission = mission;
    $.fn.domaine = domaine;
    
    $('#experiences .sorting').hide();
    $('#experiences .content').hide();
    $('#experiences .spinner').show();

    var service = new DataService();
    var promises = [];
    service.clients.done(clients => {
        service.missions.done(missions => {
            missions.forEach(m => $("#experiences .content").append(new Mission(m.title, m.desc, m.domaines, m.bDate, m.eDate).template));
            $('.mission', self).mission();
            service.domaines.done(domaines => {
                domaines.forEach(d => $("#experiences .sorting").append(new Domaine(d.intitule, d.color).template));
                $('#experiences .sorting').show(500);
                $('#experiences .content').show(500);
                $('#experiences .spinner').hide(500);
                $('.domaine', self).domaine();
            });
        });
    });

});
