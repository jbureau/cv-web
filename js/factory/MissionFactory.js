import { DataFactory } from './DataFactory';
import { Mission } from '../components/mission';

/**
 * Mission Factory
 */
export class MissionFactory extends DataFactory {

    /**
     * Creates missions and add them to the element
     * @param {JQuery<HTMLElement>} element Html element where the missions have to be
     * @param {Array} list json list from WP of missions
     */
    static addAndCreateFromWPJsonArray(element, list) {
        let i = -1;
        list.forEach(m => {
            element.append(new Mission(m.title.rendered, m.acf.description, 
                m.acf.domaines ? m.acf.domaines.map(d => { return d.name }) : [], m.acf.date_debut, 
                m.acf.date_fin !== "" ? m.acf.date_fin : "en cours").template);
        });
    }

}