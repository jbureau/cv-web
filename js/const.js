
/* Name of the cv user */
const USER_NAME = `Olivier Bureau`;

/* Experiences title bloc */
const EXPERIENCES_TITLE = `Experiences`;

/* TODO get from back */
const USER_DESC = `Je vous propose cette page en synthèse. Le détail des missions figure en annexe à partir de la page 2 
    27 ans d’expérience, 11 ans dans l’industrie, 16 ans dans le conseil, 18 ans sur SAP Mon  profil  
    d’origine  technique,  a  évolué  peu  à  peu  vers  l'expertise,  grâce  à  un  début  de  carrière  
    en  milieu fortement  normalisé  (Contrôle  Qualité  aéronautique),  et  une  évolution  progressive  
    vers  les  systèmes d’informations  multi-métiers. Dans ce cadre-là, SAP fut le catalyseur de mon nouvel 
    élan professionnel vers le Conseil  informatique.  Depuis  1999,  mes  interventions  en  clientèle  
    m'identifient  comme  le  spécialiste  des domaines industriels transverses, dans lesquels je soigne 
    particulièrement l’approche "Métier"`;

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
                <div class="sorting">
                    <input type="button" data-domaine="*" class="btn curve domaine filter-selected" value="Tout" />
                </div>
                <ul class="content">
                </ul>
            </div>
        </div>
    </div>`;