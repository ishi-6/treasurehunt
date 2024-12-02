import BaseTable from "./BaseTable";
export default class TreasureHuntTable extends BaseTable {
    init() {
        super.init();
        this.map = [];
        this.coinsFound = 0;
        this.gemsFound = 0;
        this.emeraldFound = 0;


        this.totalMoves = 12; // for stamps
        
    }

    sendMove(args, user, index) {
        if (!this.started) {
            return;
        }
      
        if (!this.isValidMove(user)) { 
            return;
        }
        let move = this.makeMove(args.move);

        this.send("send_dig_treasure_move"), {
            turn: this.currentTurn,
            index: index,
            moves: this[`treasureHuntPlayer${this.currentTurn}`].getMoves(),
        };

        this[`treasureHuntPlayer${this.currentTurn}`].updateSpades()
        if (this.isGameOver()) {
            this.sendGameOver();
            return;
        }

        this.currentTurn = this.currentTurn === 1 ? 2 : 1;
    }

    isValidMove(user) {
        let turn = this.users.indexOf(user) + 1;
        if (turn != this.currentTurn) {
            return false;
        }
        if (this[`treasureHuntPlayer${this.currentTurn}`].getMoves() < 1){
            return false;
        }
        if (this[`treasureHuntPlayer${this.currentTurn}`].getMoves() > 0){
            return true;
        } 
        return false; 
     
    }

    makeMove(move) {
        // dig move oml 
    }

    isGameOver() {
        if (this.users[0].getMoves() == 0 && this.users[1].getMoves() == 0){
            return true;
        } else {
            return false;
        }
    }
    sendGameOver() {
        const gemMultiplier = 25;
        const emeraldMultiplier = 100; 
        const totalAmt = this.coinsFound + (this.gemsFound * gemMultiplier) + (this.emeraldFound * emeraldMultiplier) || 0
        this.users[0].send("game_over", {earned: totalAmt, coins: this.users[0].data.coins});
        this.users[1].send("game_over", {earned: totalAmt, coins: this.users[1].data.coins});
        this.reset();
    }

    toJSON() {
        return {
            users: this.playingUsers,
            map: this.map,
            started: this.started,
            currentTurn: this.currentTurn,
            // coinsFound: this.coinsFound,
            // gemsFound: this.gemsFound,
            // emeraldFound: this.emeraldFound
        };
    }
}