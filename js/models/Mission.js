export class Mission {

    constructor(id, title, contexte, mission, solution, bilam, domaines, type, bDate, eDate, client) {
        this.id = id;
        this.title = title;
        this.contexte = contexte;
        this.mission = mission;
        this.solution = solution;
        this.bilan = bilam;
        this.domaines = domaines;
        this.type = type;
        this.bDate = bDate;
        this.eDate = eDate;
        this.client = client;
    }

}
