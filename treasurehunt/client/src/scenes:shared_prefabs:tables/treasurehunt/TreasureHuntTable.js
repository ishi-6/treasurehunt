import { Button, MoveTo, ShowHint, SimpleButton } from '@components/components'

import SeatPoint from '@scenes/shared_prefabs/seat/SeatPoint'


/* START OF COMPILED CODE */

export default class TreasureHuntTable extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 563.3092476690642, y ?? 334.5207790847662);

        // done2
        const done2 = new SeatPoint(scene, 14.690752330935766, 29.479220915233782);
        this.add(done2);

        // game
        const game = scene.add.image(-49, -17, "book", "game");
        game.flipX = true;
        this.add(game);

        // done1
        const done1 = new SeatPoint(scene, -93, 76);
        this.add(done1);

        // seat1
        const seat1 = new SeatPoint(scene, -131, -10);
        this.add(seat1);

        // seat2
        const seat2 = new SeatPoint(scene, 17, -73);
        this.add(seat2);

        // game (components)
        const gameButton = new Button(game);
        gameButton.spriteName = "game";
        gameButton.activeFrame = false;
        const gameMoveTo = new MoveTo(game);
        gameMoveTo.x = NaN;
        gameMoveTo.y = NaN;

        // seat1 (prefab fields)
        seat1.sitFrame = 22;
        seat1.donePoint = done1;

        // seat2 (prefab fields)
        seat2.sitFrame = 18;
        seat2.donePoint = done2;

        this.game = game;
        this.seat1 = seat1;
        this.seat2 = seat2;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    game;
    /** @type {SeatPoint} */
    seat1;
    /** @type {SeatPoint} */
    seat2;

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */