/* START OF COMPILED CODE */

export default class TreasureHuntPlayer extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 443);

        // spinner
        const spinner = scene.add.image(0, 44, "mancala", "player/spinner");
        spinner.scaleX = 0.9;
        spinner.scaleY = 0.9;
        this.add(spinner);

        // waiting
        const waiting = scene.add.text(39, 28, "", {});
        waiting.text = "Waiting for a Player";
        waiting.setStyle({ "fontFamily": "CCFaceFront", "fontSize": "22px", "fontStyle": "bold italic" });
        this.add(waiting);

        // username
        const username = scene.add.text(39, 11, "", {});
        username.visible = false;
        username.text = "USERNAME\n";
        username.setStyle({ "color": "#D5E1FF", "fixedWidth":330,"fontFamily": "CCFaceFront", "fontSize": "32px", "fontStyle": "bold italic", "stroke": "#006699", "strokeThickness":9});
        this.add(username);

        // spade_1
        const spade_1 = scene.add.image(258, 11, "treasurehunt", "spade0001");
        spade_1.setOrigin(0, 0);
        this.add(spade_1);

        // spade_2
        const spade_2 = scene.add.image(298, 11, "treasurehunt", "spade0001");
        spade_2.setOrigin(0, 0);
        this.add(spade_2);

        // spade_3
        const spade_3 = scene.add.image(338, 11, "treasurehunt", "spade0001");
        spade_3.setOrigin(0, 0);
        this.add(spade_3);

        // spade_4
        const spade_4 = scene.add.image(378, 11, "treasurehunt", "spade0001");
        spade_4.setOrigin(0, 0);
        this.add(spade_4);

        // spade_5
        const spade_5 = scene.add.image(418, 11, "treasurehunt", "spade0001");
        spade_5.setOrigin(0, 0);
        this.add(spade_5);

        // spade_6
        const spade_6 = scene.add.image(458, 11, "treasurehunt", "spade0001");
        spade_6.setOrigin(0, 0);
        this.add(spade_6);

        // lists
        const spades = [spade_1, spade_2, spade_3, spade_4, spade_5, spade_6];

        this.spades = spades;

        /* START-USER-CTR-CODE */

        // Spinner
        this.spinnerTween = scene.tweens.add({
            targets: spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })

        this.inactiveColor = username.style.color
        this.inactiveStroke = username.style.stroke
        this.spinner = spinner;
        this.waiting = waiting;
        this.username = username;
        this.moves = 0;
       

        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image[]} */
    spades;

    /* START-USER-CODE */

    set(username, turn) {
        this.turnId = turn

        this.spinner.visible = false
        this.waiting.visible = false

        this.username.text = username.toUpperCase()
        this.username.visible = true

        this.setMoves(6)
    }

    reset() {
        this.turnId = null

        this.spinner.visible = true
        this.waiting.visible = true

        this.username.text = "USERNAME"
        this.username.visible = false


        this.setSpades()
        this.setMoves(6)

    }

    setActive(reset = false) {
        let active = (reset)
            ? false
            : this.turnId === this.parentContainer.currentTurn

        let color = (active) ? '#fff' : this.inactiveColor
        let stroke = (active) ? '#000' : this.inactiveStroke

        this.username.setColor(color)
        this.username.setStroke(stroke)

    }

    updateSpades() {    
        // method to call when handling dig move
        // change frame when move is used
        this[`spade_${this.moves}`].setFrame(`spade0002`)
        this.moves -=1
    }

    // -- getters and setters --

    setSpades() {       // to default
        for(let spade in this.spades){
            spade.setFrame(`spade0001`)
        }
    }
    getSpades(){
        return this.spades
    }

    getMoves(){
        return this.moves
    }
    setMoves(amt){      // only used in reset 
        this.moves = amt
    }

    getTurnId(){
        return this.turnid
    }
    setTurnId(id){
        this.turnid = id
    }


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */