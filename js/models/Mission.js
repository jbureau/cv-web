export class Mission {

    constructor(id, title, contexte, mission, solution, bilan, domaines, type, bDate, eDate, client) {
        this.id = id;
        this.title = title;
        this.contexte = contexte;
        this.mission = mission;
        this.solution = solution;
        this.bilan = bilan;
        this.domaines = domaines;
        this.types = type;
        this.bDate = bDate;
        this.eDate = eDate;
        this.client = client;
    }

}
