
import $ from 'jquery';
import { mission, domaine } from './plugins';
import { MissionFactory } from './factory/MissionFactory';
import { DomaineFactory } from './factory/DomaineFactory';
import { ClientService } from './services/ClientService';
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

    var clientService = new ClientService();
    clientService.clients.done(clients => console.log(clients));

    $.getJSON("/missions").done(missions => {
        MissionFactory.addAndCreateFromWPJsonArray($("#experiences .content"), missions);
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
