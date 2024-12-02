export default class BaseTable {
    constructor(table, room) {
        Object.assign(this, table);

        this.room = room;

        this.init();

        this.usersToSeat = {};
    }

    init() {
        this.users = [];
        this.started = false;
        if (this.game == "mancala"){
            this.currentTurn = Math.random() < 0.5 ? 1 : 2;
        } else if (this.game == "treasurehunt"){
            this.currentTurn = 1;
        }
    }

    get playingUsers() {
        return this.users.slice(0, 2).map((user) => user.username);
    }

    isPlayingUser(user) {
        return this.playingUsers.includes(user.username);
    }

    getGame(args, user) {
        if (this.game == "mancala"){
            user.send("get_mancala_game", this);
        } else if (this.game == "treasurehunt"){
            user.send("get_treasure_game", this);
        }
    }

    joinGame(args, user) {
        if (this.started) {
            return;
        }

        let turn = this.users.indexOf(user) + 1;

        user.table = this;

        if (this.game == "mancala") {
            user.send("join_mancala_game", {turn: turn});
            this.send("update_mancala_game", {username: user.username, turn: turn});
        } else if (this.game == "treasurehunt") {
            user.send("join_treasure_game", {turn: turn});
            this.send("update_treasure_game", {username: user.username, turn: turn});
        }

        if (this.users.length == 2) {
            this.started = true;
            if (this.game == "mancala"){
                this.send("start_mancala_game");
            } else if (this.game == "treasurehunt"){
                this.send("start_treasure_game");
            }
            for (user of this.users) {
                this.usersToSeat[user.username] = this.users.indexOf(user);
            }
        }
    }

    add(user) {
        this.users.push(user);

        let seat = this.users.length;

        user.send("join_table", {table: this.id, seat: seat, game: this.game});
        user.room.send(user, "update_table", {table: this.id, seat: seat}, []);
    }

    remove(user) {
        if (this.game == "mancala" && this.started && this.isPlayingUser(user)) {
            this.users[this.usersToSeat[user.username]].handler.db.gameResults.create({
                dateTime: new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"}),
                game: "mancala",
                userId: this.users[this.usersToSeat[user.username]].data.id,
                win: 0,
            });
            this.reset(user.username);
        } else {
            this.users = this.users.filter((u) => u != user);

            user.room.send(user, "update_table", {table: this.id, seat: this.users.length}, []);
        }
    }

    reset(quittingUser = null) {
        if (this.game == "mancala"){
            if (quittingUser) {
                this.send("close_mancala_game", {username: quittingUser});
            } else {
                this.send("close_mancala_game", {gameOver: true});
            }
        } else if (this.game == "treasurehunt") {
            if (quittingUser) {
                this.send("close_treasure_game", {username: quittingUser});
            } else {
                this.send("close_treasure_game", {gameOver: true});
            }
        }

        this.init();
        this.room.send(null, "update_table", {table: this.id, seat: this.users.length});
    }

    send(action, args = {}) {
        for (let user of this.users) {
            user.send(action, args);
        }
    }

    toJSON() {
        return {
            users: this.playingUsers,
            map: this.map,
        };
    }
}
