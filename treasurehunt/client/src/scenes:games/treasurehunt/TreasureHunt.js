import BaseContainer from '@scenes/base/BaseContainer'

import {Button, DraggableContainer, Draggable, Interactive} from '@components/components'
import TreasureHuntPlayer from './TreasureHuntPlayer'
// import TreasureSandbox from './TreasureSandbox'

export const preload = {
    key: 'treasurehunt',
    url: 'assets/media/games/treasurehunt/treasurehunt.json',
    loadString: 'treasurehunt'
}

/* START OF COMPILED CODE */

export default class TreasureHunt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 469);

        /** @type {Phaser.GameObjects.Text} */
        this.gemsAmt;
        /** @type {Phaser.GameObjects.Text} */
        this.coinsAmt;
        /** @type {Phaser.GameObjects.Text} */
        this.totalAmt;
        /** @type {TreasureHuntPlayer} */
        this.treasureHuntPlayer1;
        /** @type {TreasureHuntPlayer} */
        this.treasureHuntPlayer2;


        // block
        const block = scene.add.rectangle(-760, -469, 1520, 960);
        block.setOrigin(0, 0);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0;
        this.add(block);

        // window
        const window = scene.add.image(0, 11, "treasurehunt", "bg");
        this.add(window);

        // bgTwo
        const bgTwo = scene.add.image(2, 29, "treasurehunt", "bgTwo");
        this.add(bgTwo);

        // sandBox
        const sandBox = scene.add.image(30, 86, "treasurehunt", "sandBox");
        this.add(sandBox);

        // chestIcon
        const chestIcon = scene.add.image(122, 370, "treasurehunt", "chestIcon");
        this.add(chestIcon);

        // close
        const close = scene.add.image(276, -305, "treasurehunt", "close");
        this.add(close);

        // coinIcon
        const coinIcon = scene.add.image(-69, 371, "treasurehunt", "coinIcon");
        this.add(coinIcon);

        // gemIcon
        const gemIcon = scene.add.image(-257, 370, "treasurehunt", "gemIcon");
        this.add(gemIcon);

        // gemsAmt
        const gemsAmt = scene.add.text(-229, 360, "", {});
        gemsAmt.text = "Gems: 0";
        gemsAmt.setStyle({ "fontFamily": "CCFaceFront", "fontSize": "22px" });
        this.add(gemsAmt);

        // coinsAmt
        const coinsAmt = scene.add.text(-42, 360, "", {});
        coinsAmt.text = "Coins: 0";
        coinsAmt.setStyle({ "fontFamily": "CCFaceFront", "fontSize": "22px" });
        this.add(coinsAmt);

        // totalAmt
        const totalAmt = scene.add.text(152, 360, "", {});
        totalAmt.text = "Total: 0";
        totalAmt.setStyle({ "fontFamily": "CCFaceFront", "fontSize": "22px" });
        this.add(totalAmt);

        // treasureHuntPlayer1
        const treasureHuntPlayer1 = new TreasureHuntPlayer(scene, -262, -333);
        this.add(treasureHuntPlayer1);

        // treasureHuntPlayer2
        const treasureHuntPlayer2 = new TreasureHuntPlayer(scene, -262, -273);
        this.add(treasureHuntPlayer2);

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = window;

        // block (components)
        new Interactive(block);

        // close (components)
        const closeButton = new Button(close);
        closeButton.spriteName = "close";
        closeButton.callback = () => {this.close()};
        closeButton.activeFrame = false;

        this.gemsAmt = gemsAmt;
        this.coinsAmt = coinsAmt;
        this.totalAmt = totalAmt;
        this.treasureHuntPlayer1 = treasureHuntPlayer1;
        this.treasureHuntPlayer2 = treasureHuntPlayer2;

        /* START-USER-CTR-CODE */
        // Write your code here.

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {                // before game has officially started
        this.map = null

        this.currentTurn = 1
        this.myTurn = null

        this.started = false
        this.gameOver = false

        super.show()

        this.addListeners()
        this.network.send('get_treasure_game')
    }

    close() {
        console.log("bruh", this.started)
        if (!this.started) {
            return this.sendLeaveTable()
        }

        this.interface.prompt.showWindow(this.getString('quit_game_prompt'), 'dual', () => {
            this.sendLeaveTable()

            this.interface.prompt.window.visible = false
        })
    }

    addListeners() {
        this.network.events.on('get_treasure_game', this.handleGetGame, this)
        this.network.events.on('join_treasure_game', this.handleJoinGame, this)

        this.network.events.on('start_treasure_game', this.handleStartGame, this)
        this.network.events.on('close_treasure_game', this.handleCloseGame, this)

        this.network.events.on('update_treasure_game', this.handleUpdateGame, this)
        this.network.events.on('send_dig_treasure_move', this.handleDigMove, this)
    }
    removeListeners() {
        this.network.events.off('get_treasure_game', this.handleGetGame, this)
        this.network.events.off('join_treasure_game', this.handleJoinGame, this)

        this.network.events.off('start_treasure_game', this.handleStartGame, this)
        this.network.events.off('close_treasure_game', this.handleCloseGame, this)

        this.network.events.off('update_treasure_game', this.handleUpdateGame, this)
        this.network.events.off('send_dig_treasure_move', this.handleDigMove, this)
    }

    resetGame(){

        this.map = [];

        // map is populated w 10 rows/cols & 2 layers of sand
        // & random + uncovered coins/gems/emeralds (Map of coords)
        // changes in the map are shown thru cleared rows/cols -->

        // this.treasureSandbox.reset()

        // & found coins/gems/emeralds
        // args.coinsFound = 0;
        // args.gemsFound = 0;
        // args.emeraldFound = 0;

        // resetting vars in this class
        this.coinsAmt.text= "Coins: 0"
        this.gemsAmt.text= "Gems: 0"
        this.totalAmt.text= "Coins: 0"

        // to keep going, game relies on currentturn, users [spades/moves reset in TH Player] 
        this.currentTurn = 1;
        this.treasureHuntPlayer1.reset()
        this.treasureHuntPlayer2.reset()


    }

    setupMap(){

        this.updateDigButtonStatus()

        // this.treasureSandbox.randomTreasure()

        this.treasureHuntPlayer1.setActive()
        this.treasureHuntPlayer2.setActive()
    }


    handleDigMove(args){
        // args: turn, moves, index? <- needs better args

        // (play animation on click) 

        // this.treasureSandbox.doClear(args)
            // update surrounding tiles in TH_Sandbox, 
            // update treasure arguments when uncovering a treasure fully

        // 3. if emerald found (only one per game) do emerald popup ani
        // (args.emeraldFound > 0 ? ) 

        // 2. upd8 spade frame --> moves decrease
        this.currentPlayer().updateSpades()

        // 4. 
        this.updateScore(args)

        // 5. if no moves left for either, game over
        if (this.treasureHuntPlayer1.getMoves() == 0 && this.treasureHuntPlayer2.getMoves() == 0){
            this.network.send('close_treasure_game')
        } else {
            // change turn to other player
            this.currentTurn == 1 ? 2 : 1

            this.treasureHuntPlayer1.setActive()
            this.treasureHuntPlayer2.setActive()

        // 6. updatedigbutton (bro are u doing dig btns here or in th_sandbox)
        //  this.updateDigButtonStatus()
        }

    }

    updateDigButtonStatus(){
        // show dig buttons only for currentturn player
        // hide dig buttons for other player
        // make buttons where index = 1 unclickable
    }


    // -------- end TO DO

    updateScore(args){
        this.coinsAmt =  `Coins: ${args.coinsFound}`
        this.gemsAmt =  `Gems: ${args.gemsFound + args.emeraldFound}`

        const gemMultiplier = 25;
        const emeraldMultiplier = 100; 
        this.totalAmt = args.coinsFound + (args.gemsFound * gemMultiplier) + (args.emeraldFound * emeraldMultiplier) || 0
    }

    handleStartGame() {
        this.started = true

        this.setupMap()

    }

    handleGetGame(args){
        this.map = args.map
        this.currentTurn = args.currentTurn

        for (let user of args.users) {
            this.setPlayer(user, args.users.indexOf(user) + 1)
        }

        if (args.started) {
            return this.setupMap()
        }

        this.network.send('join_treasure_game')
    }
    handleJoinGame(args) {
        this.myTurn = args.turn
    }
    handleUpdateGame(args) {
        this.setPlayer(args.username, args.turn)
    }

    setPlayer(username, turn) {
        let player = this[`treasureHuntPlayer${turn}`]
        player.set(username, turn)
    }


    handleCloseGame(args) {
        if (args.username) {
            let text = this.getFormatString('player_quit_prompt', args.username)
            this.interface.prompt.showWindow(text, 'single')
        }
        // Wait for turn to finish
        if (args.gameOver) {
            this.gameOver = true
            return
        }
        this.leaveTable()
    }


    get isMyTurn() {
        return this.currentTurn === this.myTurn
    }
    get currentPlayer() {
        return this[`treasureHuntPlayer${this.currentTurn}`]
    }

    sendLeaveTable() {
        this.network.send('leave_table')
        this.leaveTable()
    }
    leaveTable() {
        this.removeListeners()
        this.resetGame()

        super.close()

        this.world.client.sendLeaveSeat()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
