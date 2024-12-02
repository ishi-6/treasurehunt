import Plugin from "../Plugin";

export default class Table extends Plugin {
    constructor(network) {
        super(network);
        this.events = {
            get_tables: this.getTables,
            join_table: this.joinTable,
            update_table: this.updateTable,
        };

        this.types = {
            mancala: "Mancala",
            treasurehunt: "TreasureHunt"
        };
    }

    getTables(args) {
        this.world.room.setTables(args.tables);
    }

    joinTable(args) {
        if (!this.world.client.activeTableSeat) {
            this.world.client.sendMoveToSeat(args.table, args.seat);

            this.interface.loadWidget(this.types[args.game], true);
        }
    }

    updateTable(args) {
        if (this.world.room.isReady) {
            this.world.room.updateTable(args.table, args.seat);
        }
    }
}
