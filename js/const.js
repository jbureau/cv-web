
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
        <blockquote class="desc">${USER_DESC}</blockquote>
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