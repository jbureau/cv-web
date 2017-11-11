import $ from 'jquery';

// TODO WebComponent
export class Domaine {

    constructor(intitule, color) {
        this.intitule = intitule;
        this.color = color;
    }

    generateTemplate() {    
        return `<input type="button" data-domaine="${this.intitule}" data-color="${this.color}" 
            class="btn curve domaine" value="${this.intitule}" />`;
    }
        
    get template() {
        return this.generateTemplate();
    }

}
