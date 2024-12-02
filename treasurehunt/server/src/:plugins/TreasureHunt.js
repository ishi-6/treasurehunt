import Plugin from "../Plugin";

export default class TreasureHunt extends Plugin {
    constructor(handler) {
        super(handler);

        this.events = {
            get_treasure_game: this.getGame,
            join_treasure_game: this.joinGame,
            send_treasure_move: this.sendMove,
            game_treasure_over: this.gameOver,
        };
    }

    getGame(args, user) {
        if (user.table) {
            user.table.getGame(args, user);
        }
    }

    joinGame(args, user) {
        if (user.table) {
            user.table.joinGame(args, user);
        }
    }

    sendMove(args, user) {
        if (user.table) {
            user.table.sendMove(args, user);
        }
    }

    gameOver(args, user) {
        if (user.room.game || user.table) {
            // user.updateCoins(args.coins)
        }
    }
}