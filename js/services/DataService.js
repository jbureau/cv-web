import $ from 'jquery';
import { COLORS } from '../utils';

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
        return {
            id: obj.id, 
            name: obj.title.rendered,
            logo: obj.acf.logo
        }
    }

    mapToMission(obj) {
        return {
            id: obj.id,
            title: obj.title.rendered,
            desc: obj.acf.description,
            domaines: obj.acf.domaines ? obj.acf.domaines.map(d => { return d.name }) : [],
            bDate: obj.acf.date_debut,
            eDate: obj.acf.date_fin !== "" ? obj.acf.date_fin : "en cours"
        }
    }

    mapToDomaine(obj, i) {
        return {
            id: obj.id,
            title: obj.name, 
            color: COLORS[i % COLORS.length]
        }
    }

}