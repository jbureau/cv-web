import $ from 'jquery';

// TODO WebComponent
export class Mission {

    constructor(title, desc, domaines, bDate, eDate) {
        this.title = title;
        this.desc = desc;
        this.domaines = domaines;
        this.bDate = bDate;
        this.eDate = eDate;
    }

    generateTemplate() {    
        return `<li class="mission" data-domaine="${this.domaines}">
            <div class="dates">
                <div class="date_deb">${this.bDate}</div>
                <div class="date_fin">${this.eDate}</div>
            </div>
            <div class="round"></div>
            <div class="desc">
                <div class="top">            
                    <div class="logo"></div>
                    <div class="title">
                        <h2 class="type_mission">${this.title}</h2>
                        <div class="domaines"></div>
                    </div>
                </div>
                <div class="more">
                <div class="plus">[+]</div>
                <div class="less">[-]</div>
                    <p class="details">${this.desc}</p>
                </div>
            </div></li>`;
    }
        
    get template() {
        return this.generateTemplate();
    }

}
