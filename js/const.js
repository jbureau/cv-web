
/* Name of the cv user */
const USER_NAME = `Olivier Bureau`;

/* Experiences title bloc */
const EXPERIENCES_TITLE = `Experiences`;

/* TODO get from back */
const USER_DESC = `Mon  profil d’origine  technique,  a  évolué  peu  à  peu  vers  l'expertise,  grâce  à  
    un  début  de  carrière en  milieu fortement  normalisé  (Contrôle  Qualité  aéronautique),  et  une  évolution  progressive  
    vers  les  systèmes d’informations  multi-métiers. Dans ce cadre-là, SAP fut le catalyseur de mon nouvel 
    élan professionnel vers le Conseil  informatique.  Depuis  1999,  mes  interventions  en  clientèle  
    m'identifient  comme  le  spécialiste  des domaines industriels transverses, dans lesquels je soigne 
    particulièrement l’approche "Métier"`;

/* TMP */
export const MAIN_LAY = `
<div class="container">
    <div class="header">
        <div class="circlePhoto"> </div>
        <div class="name">${USER_NAME}</div>
        <div class="desc">${USER_DESC}</div>
    </div>
    <div class="main">
        <div id="experiences">
            <h2 class="title">${EXPERIENCES_TITLE}</h2>
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

/* TMP */
export const MAIN_LAY_V0 = `
    <div class="container">
        <div class="header">
            <div class="circlePhoto"> </div>
            <div class="name">${USER_NAME}</div>
            <div class="desc">${USER_DESC}</div>
        </div>
        <div class="main">
            <div id="experiences">
                <h2 class="title">${EXPERIENCES_TITLE}</h2>
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

export function htmlMission(title, desc, domaines, bDate, eDate = 'en cours') {    
    return `<li class="mission" data-domaine="${domaines}">
        <div class="dates">
            <div class="date_deb">${bDate}</div>
            <div class="date_fin">${eDate}</div>
        </div>
        <div class="round"></div>
        <div class="desc">
            <div class="top">            
                <div class="logo"></div>
                <div class="domaines"></div>
                <h2 class="type_mission">${title}</h2>
                <div class="plus">[+]</div>
                <div class="less">[-]</div>
            </div>
            <div class="more">
                <p class="details">${desc}</p>
            </div>
        </div></li>`;
}

export function htmlMission_v0(title, desc, domaines = [], bDate, eDate = 'en cours') {    
    return `<li class="mission" data-domaine="${domaines}" 
        style="position: relative;">
        <div class="dates"><div class="date_deb">${bDate}</div>
        <div class="date_fin">${eDate}</div></div>
        <div class="desc">
        <div class="domaines"></div>
        <h2 class="type_mission">${title}</h2>
        <p class="details">${desc}</p></div></li>`;
}