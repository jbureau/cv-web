export class Mission {

    constructor(id, title, desc, domaines, type, bDate, eDate, client) {
        this.id = id;
        this.title = title;
        this.desc = {
            short: desc.length > 200 ? desc.substring(0, 200) + '...' : desc,
            long: desc
        };
        this.domaines = domaines;
        this.type = type;
        this.bDate = bDate;
        this.eDate = eDate;
        this.client = client;
    }

}
