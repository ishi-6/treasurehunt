import MancalaTable from "./MancalaTable";
import TreasureHuntTable from "./TreasureHuntTable";

export default class TableFactory {
    static types = {
        mancala: MancalaTable,
        treasurehunt: TreasureHuntTable,
    };

    static createTable(table, room) {
        return new this.types[table.game](table, room);
    }
}
