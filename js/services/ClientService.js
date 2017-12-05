import $ from 'jquery';

export class ClientService {

    get clients() {
        var deferred = $.Deferred();
        $.getJSON("/clients", clients => {
            var list = clients.map(c => this.mapToClient(c));
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

}