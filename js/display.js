import moment from 'moment';
moment.locale('fr');

export function displayMission(mission, client) { 
    var clientLogo =  `<div class="logo" style="opacity: 0.3;"></div>`;
    if (client !== undefined && client.logo !== undefined) {
        clientLogo = `<div class="logo" style="background-image: url('${client.logo}')"></div>`;
    }
    return `<li class="mission" data-domaine="${mission.domaines}">
        <div class="dates">
            <div class="date_deb">${moment(mission.bDate).format('MMMM YYYY')}</div>
            <div class="date_fin">${moment(mission.eDate, 'YYYY-MM-DD', true).isValid() ? moment(mission.eDate).format('MMMM YYYY') : mission.eDate}</div>
        </div>
        <div class="round"></div>
        <div class="desc">
            <div class="top">            
                ${clientLogo}
                <div class="title">
                    <h2 class="type_mission">${mission.title}</h2>
                    <div class="subtitle">
                        <div class="domaines"></div>
                        | ${mission.type}
                    </div>
                </div>
            </div>
            <div class="more">
                <p class="summary">${mission.desc.short}</p>
                <p class="details">${mission.desc.long}</p>
            </div>
        </div></li>`;
}

export function displayDomaine(domaine) {    
    return `<input type="button" data-domaine="${domaine.intitule}" data-color="${domaine.color}" 
        class="btn curve domaine" value="${domaine.intitule}" />`;
}

export function display(userName, userDesc, experiencesTitle) {
    return `
    <div class="container">
        <div class="header">
            <div class="circlePhoto"> </div>
            <div class="name">${userName}</div>
            <blockquote class="desc">${userDesc}</blockquote>
            <div class="logo"> </div>
        </div>
        <div class="main">
            <div id="experiences">
                <h2 class="title">${experiencesTitle}</h2>
                <div class="spinner"></div>
                <div class="card">
                    <div class="sorting">
                        <input type="button" data-domaine="*" class="btn curve domaine filter-selected" value="Tout" />
                    </div>
                    <ul class="content">
                    </ul>
                </div>
            </div>
        </div>
    </div>`;
}