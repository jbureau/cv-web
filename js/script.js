
import $ from 'jquery';
import { mission, domaine } from './plugins';
import '../less/utils.less';
import '../less/styles.less';
import '../less/experiences.less';

import { USER_NAME, USER_DESC, EXPERIENCES_TITLE } from './const';
import DataService from './services/DataService';
import { displayDomaine, displayMission, display } from './display';

$(document).ready(() => {

    $('body').append(display(USER_NAME, USER_DESC, EXPERIENCES_TITLE));

    $.fn.mission = mission;
    $.fn.domaine = domaine;

    $('#experiences .sorting').hide();
    $('#experiences .content').hide();
    $('#experiences .spinner').show();

    DataService.clients().then(clients => {
        DataService.missions().then(missions => {

            missions.forEach(m => {
                $('#experiences .content').append(
                    displayMission(m, clients.filter(c => c.id === m.client)[0]));
            });
            $('.mission').mission();

            DataService.domaines().then(domaines => {
                domaines.forEach(d => $('#experiences .sorting').append(displayDomaine(d)));
                const toggleTime = 500;
                $('#experiences .sorting').show(toggleTime);
                $('#experiences .content').show(toggleTime);
                $('#experiences .spinner').hide(toggleTime);
                $('.domaine').domaine();
            })
        })
    });

});