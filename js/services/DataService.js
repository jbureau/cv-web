import { DataMapper } from '../mappers/DataMapper';
import moment from 'moment';
import * as api from '../api'

const clients = async () => {
    try {
        const clients = await api.clients()
        return clients.map(c => DataMapper.fromWPDataToClient(c));
    } catch (e) {
        console.error(e);
    }
}

const missions = async () => {
    try {
        const missions = await api.missions()
        return missions.map(m => DataMapper.fromWPDataToMission(m))
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
    } catch (e) {
        console.error(e);
    }
}

const domaines = async () => {
    try {
        const domaines = await api.domaines()
        return domaines.map((d, i) => DataMapper.fromWPDataToDomaine(d, i));
    } catch (e) {
        console.error(e);
    }
}

const DataService = { clients, missions, domaines }
export default DataService