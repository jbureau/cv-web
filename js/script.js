
import $ from 'jquery';
import { mission, domaine } from './plugins';
import '../less/utils.less';
import '../less/styles.less';
import '../less/experiences.less';

import { USER_NAME, USER_DESC, EXPERIENCES_TITLE } from './const';
import { DataService } from './services/DataService';
import { displayDomaine, displayMission, display } from './display';

$(document).ready(function () {
    var self = $(this);

    $("body").append(display(USER_NAME, USER_DESC, EXPERIENCES_TITLE));

    $.fn.mission = mission;
    $.fn.domaine = domaine;
    
    $('#experiences .sorting').hide();
    $('#experiences .content').hide();
    $('#experiences .spinner').show();

    var service = new DataService();
    service.clients.done(clients => {
        service.missions.done(missions => {
            missions.forEach(m => {
                $("#experiences .content").append(displayMission(m, clients.filter(c => c.id === m.client)[0]));
            });
            $('.mission', self).mission();
            service.domaines.done(domaines => {
                domaines.forEach(d => $("#experiences .sorting").append(displayDomaine(d)));
                $('#experiences .sorting').show(500);
                $('#experiences .content').show(500);
                $('#experiences .spinner').hide(500);
                $('.domaine', self).domaine();
            });
        });
    });

});
