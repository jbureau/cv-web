export function displayMission(mission, client) { 
    var clientLogo =  `<div class="logo" style="opacity: 0.3;"></div>`;
    if (client !== undefined && client.logo !== undefined) {
        clientLogo = `<div class="logo" style="background-image: url('${client.logo}')"></div>`;
    }
    return `<li class="mission" data-domaine="${mission.domaines}">
        <div class="dates">
            <div class="date_deb">${mission.bDate}</div>
            <div class="date_fin">${mission.eDate}</div>
        </div>
        <div class="round"></div>
        <div class="desc">
            <div class="top">            
                ${clientLogo}
                <div class="title">
                    <h2 class="type_mission">${mission.title}</h2>
                    <div class="domaines"></div>
                </div>
            </div>
            <div class="more">
            <div class="plus">[+]</div>
            <div class="less">[-]</div>
                <p class="details">${mission.desc}</p>
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