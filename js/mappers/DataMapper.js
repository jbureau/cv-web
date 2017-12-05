import { COLORS } from '../utils';
import { Mission } from '../models/Mission';
import { Domaine } from '../models/Domaine';
import { Client } from '../models/Client';

export class DataMapper {

    static fromWPDataToMission(obj) {
        return new Mission(obj.id, obj.title.rendered, obj.acf.description, obj.acf.domaines ? obj.acf.domaines.map(d => { return d.name }) : [],
        obj.acf.date_debut, obj.acf.date_fin !== "" ? obj.acf.date_fin : "en cours");
    }

    static fromWPDataToClient(obj) {
        return new Client(obj.id, obj.title.rendered, obj.acf.logo);
    }

    static fromWPDataToDomaine(obj, i) {
        return new Domaine(obj.id, obj.name,COLORS[i % COLORS.length]);
    }

}