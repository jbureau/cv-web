class Mission {

    constructor(build) {
        this.id = build.id;
        this.title = build.title;
        this.contexte = build.contexte;
        this.mission = build.mission;
        this.solution = build.solution;
        this.bilan = build.bilan;
        this.domaines = build.domaines;
        this.types = build.type;
        this.bDate = build.bDate;
        this.eDate = build.eDate;
        this.client = build.client;
    }

    static get Builder() {
        class Builder {
            constructor(id) {
                this.id = id;
            }
            withTitle(title) {
                this.title = title;
                return this;
            }
            withContexte(contexte) {
                this.contexte = contexte;
                return this;
            }
            withMission(mission) {
                this.mission = mission;
                return this;
            }
            withSolution(solution) {
                this.solution = solution;
                return this;
            }
            withBilan(bilan) {
                this.bilan = bilan;
                return this;
            }
            withDomaines(domaines) {
                this.domaines = domaines;
                return this;
            }
            withTypes(types) {
                this.types = types;
                return this;
            }
            withDates(start, end) {
                this.bDate = start;
                this.eDate = end;
                return this;
            }
            withClient(client) {
                this.client = client;
                return this;
            }
            build() {
                return new Mission(this);
            }
        }
        return Builder;
    }

}

export default Mission;