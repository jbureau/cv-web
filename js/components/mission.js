import $ from 'jquery';
import '../../less/experiences.less';

// TODO multiple webcomponents
// <cv-mission-title> / <cv-mission-content>
class Mission extends HTMLElement {

    constructor() {
        super();
        let shadow = this.attachShadow({mode: 'open'});

        this.beginDate = this.getAttribute('begin-date');
        this.endDate = this.getAttribute('end-date');
        this.desc = this.getAttribute('desc');

        let template = document.createElement('template');
        template.innerHTML = this.generateTemplate();
        shadow.appendChild(template.content.cloneNode(true));

    }
    
    // Horrible
    generateTemplate() {    
        return `
        <style>
            li.mission {
                margin: 0 0 0 55px;
                list-style: none;
                position: relative;
                display: flex;
                flex-direction: row;
                padding: 10px 0;
                background-color: var(--cv-mission-bg-color, white);
            }    
            li.mission:before {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                width: 3px;
                background: var(--cv-mission-border-color, black);
                margin-left: -6px;   
            }    
            li.mission > .round {
                width: 7px;
                height: 7px;
                border: 3px solid var(--cv-mission-border-color, black);
                border-radius: 50%;
                background-color: var(--cv-mission-bg-color, white);
                margin: 14px -11px 0;
                position: absolute;
            }                
            li.mission > .dates {
                font-family: var(--cv-mission-h-font, Calibri);
                margin: 0 0 0 -75px;
            }
            li.mission > .desc {
                margin: 0 0 0 4%;
                color: var(--cv-mission-desc-color, black);
                cursor: pointer;
                font-size: 0.8em;
                font-weight: 300;
                line-height: 1.4;
                position: relative;
                border-radius: 5px;
                flex: 1;
            }
            li.mission > .desc > .top {
                display: flex;
                flex-direction: row;   
                align-items: center;
            }                 
            li.mission > .desc > .top > .logo {
                width: 40px;
                height: 40px;
                border: 1px solid var(--cv-mission-logo-border, black);
                border-radius: 50%;
                display: none; // TODO get logo
            }
            li.mission > .desc > .top > .title {
                margin: 0 10px;
            }
            li.mission > .desc > .top > .title > h2.type_mission { 
                margin: 0;
                font-size: 26px;
                text-transform: uppercase;
                font-weight: normal;
                font-family: var(--cv-mission-h-font, Calibri);
            }
            li.mission > .desc > .top > .title > .domaines > div.little_domaine:first-child {
                margin-left: 0;
            }
            li.mission > .desc > .top > .title > .domaines > div.little_domaine {
                height: 20px;
                width: 20px;
                background: var(--cv-mission-desc-dom-bg-color, grey);
                border-radius: 50%;
                font-family: var(--cv-mission-h-font, Calibri);
                font-size: 12px;
                vertical-align: middle;
                text-align: center;
                display: inline-block;
                box-sizing: border-box;
                margin: 0 6px;
                text-transform: uppercase;
                font-variant: inherit;
                text-decoration: none;
                overflow: hidden;
                line-height: 20px;
            }
            li.mission > .desc > .more {
                margin: 5px 10px 0;
                display: flex;
                flex-direction: row;
            }
            li.mission > .desc:hover {
                background: var(--cv-mission-desc-hover, grey);
            }
            li.mission > .desc > .more > p.details {
                margin: 0 5px;;
            }
        </style>
        <li class="mission" data-domaine="${this.domaines}">
            <div class="dates">
                <div class="date_deb">${this.beginDate}</div>
                <div class="date_fin">${this.endDate}</div>
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
}

customElements.define('cv-mission', Mission);