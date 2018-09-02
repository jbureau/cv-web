import { COLORS } from '../utils';
import Mission from '../models/Mission';
import { Domaine } from '../models/Domaine';
import { Client } from '../models/Client';

export class DataMapper {

    static fromWPDataToMission(obj) {
        return new Mission.Builder(obj.id)
            .withTitle(obj.title.rendered)
            .withContexte(obj.acf.contexte)
            .withMission(obj.acf.mission)
            .withSolution(obj.acf.solution)
            .withBilan(obj.acf.bilan)
            .withDomaines(obj.acf.domaines ? obj.acf.domaines.map(d => d.name) : [])
            .withTypes(obj.acf.type ? obj.acf.type.map(t => t.name) : [])
            .withDates(obj.acf.date_debut, obj.acf.date_fin !== "" ? obj.acf.date_fin : "en cours")
            .withClient(obj.acf.client.length > 0 ? obj.acf.client[0].ID : null);
    }

    static fromWPDataToClient(obj) {
        return new Client(obj.id, obj.title.rendered, obj.acf.logo);
    }

    static fromWPDataToDomaine(obj, i) {
        return new Domaine(obj.id, obj.title, COLORS[i % COLORS.length]);
    }

}