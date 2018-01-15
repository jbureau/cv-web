import moment from 'moment';
moment.locale('fr');

export function displayMission(mission, client) { 
    let clientLogo =  `<div class="logo" style="opacity: 0.3;"></div>`;
    const regExpImage = new RegExp('.jpg|.jpeg|.png|.gif', '');
    if (client !== undefined && client.logo !== undefined && typeof client.logo === 'string' && regExpImage.test(client.logo)) {
        clientLogo = `<div class="logo" style="background-image: url('${client.logo}')"></div>`;
    }
    let contexte = '';
    let desc = { long: '', short: '' };
    let solution = '';
    let bilan = '';
    if (mission.contexte) {
        contexte = `<h4>Contexte</h4> 
        ${mission.contexte}`;
    }
    if (mission.mission) {
        const regExp = new RegExp('<p>|<div>|</p>|</div>', 'g');
        desc.short = mission.mission.replace(regExp, '');
        if (desc.short.length > 200 ) {
            desc.short = desc.short.substring(0, 250) + '...';

        }
        desc.long = `<h4>Mission</h4> 
        ${mission.mission}`;
    }
    if (mission.solution) {
        solution = `<h4>Solution</h4> 
        ${mission.solution}`;
    }
    if (mission.bilan) {
        bilan = `<h4>Bilan</h4> 
        ${mission.bilan}`;
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
                        | ${mission.types.join(', ')}
                    </div>
                </div>
            </div>
            <div class="more">
                <p class="summary">${desc.short}</p>
                <div class="details">
                    ${contexte}
                    ${desc.long}
                    ${solution}
                    ${bilan}
                </div>
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