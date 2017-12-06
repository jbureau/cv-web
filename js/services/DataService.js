import $ from 'jquery';
import { DataMapper } from '../mappers/DataMapper';
import moment from 'moment';

export class DataService {

    get clients() {
        var deferred = $.Deferred();
        $.getJSON("/clients", clients => {
            var list = clients.map(c => DataMapper.fromWPDataToClient(c));
            deferred.resolve(list);
        });
        return deferred.promise();
    }

    get missions() {
        var deferred = $.Deferred();
        $.getJSON("/missions", missions => {
            var list = missions.map(m => DataMapper.fromWPDataToMission(m))
                .sort((a, b) => {
                    var aDate = moment(a.bDate);
                    var bDate = moment(b.bDate);
                    if (aDate > bDate) {
                        return -1;
                    } else if (aDate < bDate) {
                        return 1;
                    }
                    return 0;
                });
            deferred.resolve(list);
        });
        return deferred.promise();   
    }

    get domaines() {        
        var deferred = $.Deferred();
        $.getJSON("/domaines", domaines => {
            var list = domaines.map((d, i) => DataMapper.fromWPDataToDomaine(d, i));
            deferred.resolve(list);
        });
        return deferred.promise();   
    }

}