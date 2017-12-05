import $ from 'jquery';
import { COLORS } from '../utils';
import { Mission } from '../models/Mission';
import { Domaine } from '../models/Domaine';
import { Client } from '../models/Client';

export class DataService {

    get clients() {
        var deferred = $.Deferred();
        $.getJSON("/clients", clients => {
            var list = clients.map(c => this.mapToClient(c));
            deferred.resolve(list);
        });
        return deferred.promise();
    }

    get missions() {
        var deferred = $.Deferred();
        $.getJSON("/missions", missions => {
            var list = missions.map(m => this.mapToMission(m));
            deferred.resolve(list);
        });
        return deferred.promise();   
    }

    get domaines() {        
        var deferred = $.Deferred();
        $.getJSON("/domaines", domaines => {
            var list = domaines.map((d, i) => this.mapToDomaine(d, i));
            deferred.resolve(list);
        });
        return deferred.promise();   
    }

    mapToClient(obj) {
        return new Client(obj.id, obj.title.rendered, obj.acf.logo);
    }

    mapToMission(obj) {
        return new Mission(obj.id, obj.title.rendered, obj.acf.description, obj.acf.domaines ? obj.acf.domaines.map(d => { return d.name }) : [],
            obj.acf.date_debut, obj.acf.date_fin !== "" ? obj.acf.date_fin : "en cours");
    }

    mapToDomaine(obj, i) {
        return new Domaine(obj.id, obj.name,COLORS[i % COLORS.length]);
    }

}