import { DataFactory } from './DataFactory';
import { Domaine } from '../components/domaine';
import { COLORS } from '../utils';

/**
 * Domaine factory
 */
export class DomaineFactory extends DataFactory {

    /**
     * Creates domaines and add them to the element
     * @param {JQuery<HTMLElement>} element Html element where the domaines have to be
     * @param {Array} list json list from WP of domaines
     */
    static addAndCreateFromWPJsonArray(element, list) {
        let i = -1;
        list.forEach(d => {
            element.append(new Domaine(d.name, COLORS[i++ % COLORS.length]).template);
        });
    }

}
