import { DataMapper } from '../mappers/DataMapper';
import moment from 'moment';
import * as api from '../api'

const clients = async () => {
    try {
        const clients = await api.clients()
        return clients.map(c => DataMapper.fromWPDataToClient(c));
    } catch (e) {
        // REVIEW
    }
}

const missions = async () => {
    /* eslint-disable no-magic-numbers */
    try {
        const missions = await api.missions()
        return missions.map(m => DataMapper.fromWPDataToMission(m))
            .sort((a, b) => {
                const aDate = moment(a.bDate);
                const bDate = moment(b.bDate);
                if (aDate > bDate) {
                    return -1;
                } else if (aDate < bDate) {
                    return 1;
                }
                return 0;
            });
    } catch (e) {
        // REVIEW
    }
    /* eslint-enable */
}

const domaines = async () => {
    try {
        const domaines = await api.domaines()
        return domaines.map((d, i) => DataMapper.fromWPDataToDomaine(d, i));
    } catch (e) {
        // REVIEW
    }
}

const DataService = { clients, missions, domaines }
export default DataService