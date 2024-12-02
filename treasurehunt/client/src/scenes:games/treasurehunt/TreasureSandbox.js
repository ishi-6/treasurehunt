
// You can write more code here

/* START OF COMPILED CODE */

export default class TreasureSandbox extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 100, y ?? 100);

        // bottomSand
        const bottomSand = scene.add.image(0, 0, "treasurehunt", "bottomSand");
        bottomSand.setOrigin(0, 0);
        this.add(bottomSand);

        // secondLayer
        const secondLayer = scene.add.container(0, 0);
        secondLayer.alpha = 0.5;
        this.add(secondLayer);

        // row10
        const row10 = scene.add.container(0, 378);
        secondLayer.add(row10);

        // tile_2
        const tile_2 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_2.scaleX = 0.97;
        tile_2.scaleY = 0.97;
        tile_2.setOrigin(0, 0);
        row10.add(tile_2);

        // tile0001
        const tile0001 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile0001.scaleX = 0.97;
        tile0001.scaleY = 0.97;
        tile0001.setOrigin(0, 0);
        row10.add(tile0001);

        // tile
        const tile = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile.scaleX = 0.97;
        tile.scaleY = 0.97;
        tile.setOrigin(0, 0);
        row10.add(tile);

        // tile_1
        const tile_1 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_1.scaleX = 0.97;
        tile_1.scaleY = 0.97;
        tile_1.setOrigin(0, 0);
        row10.add(tile_1);

        // tile_3
        const tile_3 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_3.scaleX = 0.97;
        tile_3.scaleY = 0.97;
        tile_3.setOrigin(0, 0);
        row10.add(tile_3);

        // tile_4
        const tile_4 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_4.scaleX = 0.97;
        tile_4.scaleY = 0.97;
        tile_4.setOrigin(0, 0);
        row10.add(tile_4);

        // tile_5
        const tile_5 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_5.scaleX = 0.97;
        tile_5.scaleY = 0.97;
        tile_5.setOrigin(0, 0);
        row10.add(tile_5);

        // tile_6
        const tile_6 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_6.scaleX = 0.97;
        tile_6.scaleY = 0.97;
        tile_6.setOrigin(0, 0);
        row10.add(tile_6);

        // tile_7
        const tile_7 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_7.scaleX = 0.97;
        tile_7.scaleY = 0.97;
        tile_7.setOrigin(0, 0);
        row10.add(tile_7);

        // tile_8
        const tile_8 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_8.scaleX = 0.97;
        tile_8.scaleY = 0.97;
        tile_8.setOrigin(0, 0);
        row10.add(tile_8);

        // row9
        const row9 = scene.add.container(0, 336);
        secondLayer.add(row9);

        // tile_2
        const tile_2 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_2.scaleX = 0.97;
        tile_2.scaleY = 0.97;
        tile_2.setOrigin(0, 0);
        row9.add(tile_2);

        // tile0001
        const tile0001 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile0001.scaleX = 0.97;
        tile0001.scaleY = 0.97;
        tile0001.setOrigin(0, 0);
        row9.add(tile0001);

        // tile
        const tile = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile.scaleX = 0.97;
        tile.scaleY = 0.97;
        tile.setOrigin(0, 0);
        row9.add(tile);

        // tile_1
        const tile_1 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_1.scaleX = 0.97;
        tile_1.scaleY = 0.97;
        tile_1.setOrigin(0, 0);
        row9.add(tile_1);

        // tile_3
        const tile_3 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_3.scaleX = 0.97;
        tile_3.scaleY = 0.97;
        tile_3.setOrigin(0, 0);
        row9.add(tile_3);

        // tile_4
        const tile_4 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_4.scaleX = 0.97;
        tile_4.scaleY = 0.97;
        tile_4.setOrigin(0, 0);
        row9.add(tile_4);

        // tile_5
        const tile_5 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_5.scaleX = 0.97;
        tile_5.scaleY = 0.97;
        tile_5.setOrigin(0, 0);
        row9.add(tile_5);

        // tile_6
        const tile_6 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_6.scaleX = 0.97;
        tile_6.scaleY = 0.97;
        tile_6.setOrigin(0, 0);
        row9.add(tile_6);

        // tile_7
        const tile_7 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_7.scaleX = 0.97;
        tile_7.scaleY = 0.97;
        tile_7.setOrigin(0, 0);
        row9.add(tile_7);

        // tile_8
        const tile_8 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_8.scaleX = 0.97;
        tile_8.scaleY = 0.97;
        tile_8.setOrigin(0, 0);
        row9.add(tile_8);

        // row8
        const row8 = scene.add.container(0, 294);
        secondLayer.add(row8);

        // tile_2
        const tile_2 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_2.scaleX = 0.97;
        tile_2.scaleY = 0.97;
        tile_2.setOrigin(0, 0);
        row8.add(tile_2);

        // tile0001
        const tile0001 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile0001.scaleX = 0.97;
        tile0001.scaleY = 0.97;
        tile0001.setOrigin(0, 0);
        row8.add(tile0001);

        // tile
        const tile = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile.scaleX = 0.97;
        tile.scaleY = 0.97;
        tile.setOrigin(0, 0);
        row8.add(tile);

        // tile_1
        const tile_1 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_1.scaleX = 0.97;
        tile_1.scaleY = 0.97;
        tile_1.setOrigin(0, 0);
        row8.add(tile_1);

        // tile_3
        const tile_3 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_3.scaleX = 0.97;
        tile_3.scaleY = 0.97;
        tile_3.setOrigin(0, 0);
        row8.add(tile_3);

        // tile_4
        const tile_4 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_4.scaleX = 0.97;
        tile_4.scaleY = 0.97;
        tile_4.setOrigin(0, 0);
        row8.add(tile_4);

        // tile_5
        const tile_5 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_5.scaleX = 0.97;
        tile_5.scaleY = 0.97;
        tile_5.setOrigin(0, 0);
        row8.add(tile_5);

        // tile_6
        const tile_6 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_6.scaleX = 0.97;
        tile_6.scaleY = 0.97;
        tile_6.setOrigin(0, 0);
        row8.add(tile_6);

        // tile_7
        const tile_7 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_7.scaleX = 0.97;
        tile_7.scaleY = 0.97;
        tile_7.setOrigin(0, 0);
        row8.add(tile_7);

        // tile_8
        const tile_8 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_8.scaleX = 0.97;
        tile_8.scaleY = 0.97;
        tile_8.setOrigin(0, 0);
        row8.add(tile_8);

        // row7
        const row7 = scene.add.container(0, 252);
        secondLayer.add(row7);

        // tile_2
        const tile_2 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_2.scaleX = 0.97;
        tile_2.scaleY = 0.97;
        tile_2.setOrigin(0, 0);
        row7.add(tile_2);

        // tile0001
        const tile0001 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile0001.scaleX = 0.97;
        tile0001.scaleY = 0.97;
        tile0001.setOrigin(0, 0);
        row7.add(tile0001);

        // tile
        const tile = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile.scaleX = 0.97;
        tile.scaleY = 0.97;
        tile.setOrigin(0, 0);
        row7.add(tile);

        // tile_1
        const tile_1 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_1.scaleX = 0.97;
        tile_1.scaleY = 0.97;
        tile_1.setOrigin(0, 0);
        row7.add(tile_1);

        // tile_3
        const tile_3 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_3.scaleX = 0.97;
        tile_3.scaleY = 0.97;
        tile_3.setOrigin(0, 0);
        row7.add(tile_3);

        // tile_4
        const tile_4 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_4.scaleX = 0.97;
        tile_4.scaleY = 0.97;
        tile_4.setOrigin(0, 0);
        row7.add(tile_4);

        // tile_5
        const tile_5 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_5.scaleX = 0.97;
        tile_5.scaleY = 0.97;
        tile_5.setOrigin(0, 0);
        row7.add(tile_5);

        // tile_6
        const tile_6 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_6.scaleX = 0.97;
        tile_6.scaleY = 0.97;
        tile_6.setOrigin(0, 0);
        row7.add(tile_6);

        // tile_7
        const tile_7 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_7.scaleX = 0.97;
        tile_7.scaleY = 0.97;
        tile_7.setOrigin(0, 0);
        row7.add(tile_7);

        // tile_8
        const tile_8 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_8.scaleX = 0.97;
        tile_8.scaleY = 0.97;
        tile_8.setOrigin(0, 0);
        row7.add(tile_8);

        // row6
        const row6 = scene.add.container(0, 210);
        secondLayer.add(row6);

        // tile_2
        const tile_2 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_2.scaleX = 0.97;
        tile_2.scaleY = 0.97;
        tile_2.setOrigin(0, 0);
        row6.add(tile_2);

        // tile0001
        const tile0001 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile0001.scaleX = 0.97;
        tile0001.scaleY = 0.97;
        tile0001.setOrigin(0, 0);
        row6.add(tile0001);

        // tile
        const tile = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile.scaleX = 0.97;
        tile.scaleY = 0.97;
        tile.setOrigin(0, 0);
        row6.add(tile);

        // tile_1
        const tile_1 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_1.scaleX = 0.97;
        tile_1.scaleY = 0.97;
        tile_1.setOrigin(0, 0);
        row6.add(tile_1);

        // tile_3
        const tile_3 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_3.scaleX = 0.97;
        tile_3.scaleY = 0.97;
        tile_3.setOrigin(0, 0);
        row6.add(tile_3);

        // tile_4
        const tile_4 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_4.scaleX = 0.97;
        tile_4.scaleY = 0.97;
        tile_4.setOrigin(0, 0);
        row6.add(tile_4);

        // tile_5
        const tile_5 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_5.scaleX = 0.97;
        tile_5.scaleY = 0.97;
        tile_5.setOrigin(0, 0);
        row6.add(tile_5);

        // tile_6
        const tile_6 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_6.scaleX = 0.97;
        tile_6.scaleY = 0.97;
        tile_6.setOrigin(0, 0);
        row6.add(tile_6);

        // tile_7
        const tile_7 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_7.scaleX = 0.97;
        tile_7.scaleY = 0.97;
        tile_7.setOrigin(0, 0);
        row6.add(tile_7);

        // tile_8
        const tile_8 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_8.scaleX = 0.97;
        tile_8.scaleY = 0.97;
        tile_8.setOrigin(0, 0);
        row6.add(tile_8);

        // row5
        const row5 = scene.add.container(0, 168);
        secondLayer.add(row5);

        // tile_2
        const tile_2 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_2.scaleX = 0.97;
        tile_2.scaleY = 0.97;
        tile_2.setOrigin(0, 0);
        row5.add(tile_2);

        // tile0001
        const tile0001 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile0001.scaleX = 0.97;
        tile0001.scaleY = 0.97;
        tile0001.setOrigin(0, 0);
        row5.add(tile0001);

        // tile
        const tile = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile.scaleX = 0.97;
        tile.scaleY = 0.97;
        tile.setOrigin(0, 0);
        row5.add(tile);

        // tile_1
        const tile_1 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_1.scaleX = 0.97;
        tile_1.scaleY = 0.97;
        tile_1.setOrigin(0, 0);
        row5.add(tile_1);

        // tile_3
        const tile_3 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_3.scaleX = 0.97;
        tile_3.scaleY = 0.97;
        tile_3.setOrigin(0, 0);
        row5.add(tile_3);

        // tile_4
        const tile_4 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_4.scaleX = 0.97;
        tile_4.scaleY = 0.97;
        tile_4.setOrigin(0, 0);
        row5.add(tile_4);

        // tile_5
        const tile_5 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_5.scaleX = 0.97;
        tile_5.scaleY = 0.97;
        tile_5.setOrigin(0, 0);
        row5.add(tile_5);

        // tile_6
        const tile_6 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_6.scaleX = 0.97;
        tile_6.scaleY = 0.97;
        tile_6.setOrigin(0, 0);
        row5.add(tile_6);

        // tile_7
        const tile_7 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_7.scaleX = 0.97;
        tile_7.scaleY = 0.97;
        tile_7.setOrigin(0, 0);
        row5.add(tile_7);

        // tile_8
        const tile_8 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_8.scaleX = 0.97;
        tile_8.scaleY = 0.97;
        tile_8.setOrigin(0, 0);
        row5.add(tile_8);

        // row4
        const row4 = scene.add.container(0, 126);
        secondLayer.add(row4);

        // tile_2
        const tile_2 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_2.scaleX = 0.97;
        tile_2.scaleY = 0.97;
        tile_2.setOrigin(0, 0);
        row4.add(tile_2);

        // tile0001
        const tile0001 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile0001.scaleX = 0.97;
        tile0001.scaleY = 0.97;
        tile0001.setOrigin(0, 0);
        row4.add(tile0001);

        // tile
        const tile = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile.scaleX = 0.97;
        tile.scaleY = 0.97;
        tile.setOrigin(0, 0);
        row4.add(tile);

        // tile_1
        const tile_1 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_1.scaleX = 0.97;
        tile_1.scaleY = 0.97;
        tile_1.setOrigin(0, 0);
        row4.add(tile_1);

        // tile_3
        const tile_3 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_3.scaleX = 0.97;
        tile_3.scaleY = 0.97;
        tile_3.setOrigin(0, 0);
        row4.add(tile_3);

        // tile_4
        const tile_4 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_4.scaleX = 0.97;
        tile_4.scaleY = 0.97;
        tile_4.setOrigin(0, 0);
        row4.add(tile_4);

        // tile_5
        const tile_5 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_5.scaleX = 0.97;
        tile_5.scaleY = 0.97;
        tile_5.setOrigin(0, 0);
        row4.add(tile_5);

        // tile_6
        const tile_6 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_6.scaleX = 0.97;
        tile_6.scaleY = 0.97;
        tile_6.setOrigin(0, 0);
        row4.add(tile_6);

        // tile_7
        const tile_7 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_7.scaleX = 0.97;
        tile_7.scaleY = 0.97;
        tile_7.setOrigin(0, 0);
        row4.add(tile_7);

        // tile_8
        const tile_8 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_8.scaleX = 0.97;
        tile_8.scaleY = 0.97;
        tile_8.setOrigin(0, 0);
        row4.add(tile_8);

        // row3
        const row3 = scene.add.container(0, 84);
        secondLayer.add(row3);

        // tile_2
        const tile_2 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_2.scaleX = 0.97;
        tile_2.scaleY = 0.97;
        tile_2.setOrigin(0, 0);
        row3.add(tile_2);

        // tile0001
        const tile0001 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile0001.scaleX = 0.97;
        tile0001.scaleY = 0.97;
        tile0001.setOrigin(0, 0);
        row3.add(tile0001);

        // tile
        const tile = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile.scaleX = 0.97;
        tile.scaleY = 0.97;
        tile.setOrigin(0, 0);
        row3.add(tile);

        // tile_1
        const tile_1 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_1.scaleX = 0.97;
        tile_1.scaleY = 0.97;
        tile_1.setOrigin(0, 0);
        row3.add(tile_1);

        // tile_3
        const tile_3 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_3.scaleX = 0.97;
        tile_3.scaleY = 0.97;
        tile_3.setOrigin(0, 0);
        row3.add(tile_3);

        // tile_4
        const tile_4 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_4.scaleX = 0.97;
        tile_4.scaleY = 0.97;
        tile_4.setOrigin(0, 0);
        row3.add(tile_4);

        // tile_5
        const tile_5 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_5.scaleX = 0.97;
        tile_5.scaleY = 0.97;
        tile_5.setOrigin(0, 0);
        row3.add(tile_5);

        // tile_6
        const tile_6 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_6.scaleX = 0.97;
        tile_6.scaleY = 0.97;
        tile_6.setOrigin(0, 0);
        row3.add(tile_6);

        // tile_7
        const tile_7 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_7.scaleX = 0.97;
        tile_7.scaleY = 0.97;
        tile_7.setOrigin(0, 0);
        row3.add(tile_7);

        // tile_8
        const tile_8 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_8.scaleX = 0.97;
        tile_8.scaleY = 0.97;
        tile_8.setOrigin(0, 0);
        row3.add(tile_8);

        // row2
        const row2 = scene.add.container(0, 42);
        secondLayer.add(row2);

        // tile_2
        const tile_2 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_2.scaleX = 0.97;
        tile_2.scaleY = 0.97;
        tile_2.setOrigin(0, 0);
        row2.add(tile_2);

        // tile0001
        const tile0001 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile0001.scaleX = 0.97;
        tile0001.scaleY = 0.97;
        tile0001.setOrigin(0, 0);
        row2.add(tile0001);

        // tile
        const tile = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile.scaleX = 0.97;
        tile.scaleY = 0.97;
        tile.setOrigin(0, 0);
        row2.add(tile);

        // tile_1
        const tile_1 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_1.scaleX = 0.97;
        tile_1.scaleY = 0.97;
        tile_1.setOrigin(0, 0);
        row2.add(tile_1);

        // tile_3
        const tile_3 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_3.scaleX = 0.97;
        tile_3.scaleY = 0.97;
        tile_3.setOrigin(0, 0);
        row2.add(tile_3);

        // tile_4
        const tile_4 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_4.scaleX = 0.97;
        tile_4.scaleY = 0.97;
        tile_4.setOrigin(0, 0);
        row2.add(tile_4);

        // tile_5
        const tile_5 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_5.scaleX = 0.97;
        tile_5.scaleY = 0.97;
        tile_5.setOrigin(0, 0);
        row2.add(tile_5);

        // tile_6
        const tile_6 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_6.scaleX = 0.97;
        tile_6.scaleY = 0.97;
        tile_6.setOrigin(0, 0);
        row2.add(tile_6);

        // tile_7
        const tile_7 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_7.scaleX = 0.97;
        tile_7.scaleY = 0.97;
        tile_7.setOrigin(0, 0);
        row2.add(tile_7);

        // tile_8
        const tile_8 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_8.scaleX = 0.97;
        tile_8.scaleY = 0.97;
        tile_8.setOrigin(0, 0);
        row2.add(tile_8);

        // row1
        const row1 = scene.add.container(0, 0);
        secondLayer.add(row1);

        // tile_2
        const tile_2 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_2.scaleX = 0.97;
        tile_2.scaleY = 0.97;
        tile_2.setOrigin(0, 0);
        row1.add(tile_2);

        // tile0001
        const tile0001 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile0001.scaleX = 0.97;
        tile0001.scaleY = 0.97;
        tile0001.setOrigin(0, 0);
        row1.add(tile0001);

        // tile
        const tile = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile.scaleX = 0.97;
        tile.scaleY = 0.97;
        tile.setOrigin(0, 0);
        row1.add(tile);

        // tile_1
        const tile_1 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_1.scaleX = 0.97;
        tile_1.scaleY = 0.97;
        tile_1.setOrigin(0, 0);
        row1.add(tile_1);

        // tile_3
        const tile_3 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_3.scaleX = 0.97;
        tile_3.scaleY = 0.97;
        tile_3.setOrigin(0, 0);
        row1.add(tile_3);

        // tile_4
        const tile_4 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_4.scaleX = 0.97;
        tile_4.scaleY = 0.97;
        tile_4.setOrigin(0, 0);
        row1.add(tile_4);

        // tile_5
        const tile_5 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_5.scaleX = 0.97;
        tile_5.scaleY = 0.97;
        tile_5.setOrigin(0, 0);
        row1.add(tile_5);

        // tile_6
        const tile_6 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_6.scaleX = 0.97;
        tile_6.scaleY = 0.97;
        tile_6.setOrigin(0, 0);
        row1.add(tile_6);

        // tile_7
        const tile_7 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_7.scaleX = 0.97;
        tile_7.scaleY = 0.97;
        tile_7.setOrigin(0, 0);
        row1.add(tile_7);

        // tile_8
        const tile_8 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_8.scaleX = 0.97;
        tile_8.scaleY = 0.97;
        tile_8.setOrigin(0, 0);
        row1.add(tile_8);

        // topLayer
        const topLayer = scene.add.container(0, 0);
        this.add(topLayer);

        // row9
        const row9 = scene.add.container(0, 336);
        topLayer.add(row9);

        // tile_2
        const tile_2 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_2.scaleX = 0.97;
        tile_2.scaleY = 0.97;
        tile_2.setOrigin(0, 0);
        row9.add(tile_2);

        // tile0001
        const tile0001 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile0001.scaleX = 0.97;
        tile0001.scaleY = 0.97;
        tile0001.setOrigin(0, 0);
        row9.add(tile0001);

        // tile
        const tile = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile.scaleX = 0.97;
        tile.scaleY = 0.97;
        tile.setOrigin(0, 0);
        row9.add(tile);

        // tile_1
        const tile_1 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_1.scaleX = 0.97;
        tile_1.scaleY = 0.97;
        tile_1.setOrigin(0, 0);
        row9.add(tile_1);

        // tile_3
        const tile_3 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_3.scaleX = 0.97;
        tile_3.scaleY = 0.97;
        tile_3.setOrigin(0, 0);
        row9.add(tile_3);

        // tile_4
        const tile_4 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_4.scaleX = 0.97;
        tile_4.scaleY = 0.97;
        tile_4.setOrigin(0, 0);
        row9.add(tile_4);

        // tile_5
        const tile_5 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_5.scaleX = 0.97;
        tile_5.scaleY = 0.97;
        tile_5.setOrigin(0, 0);
        row9.add(tile_5);

        // tile_6
        const tile_6 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_6.scaleX = 0.97;
        tile_6.scaleY = 0.97;
        tile_6.setOrigin(0, 0);
        row9.add(tile_6);

        // tile_7
        const tile_7 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_7.scaleX = 0.97;
        tile_7.scaleY = 0.97;
        tile_7.setOrigin(0, 0);
        row9.add(tile_7);

        // tile_8
        const tile_8 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_8.scaleX = 0.97;
        tile_8.scaleY = 0.97;
        tile_8.setOrigin(0, 0);
        row9.add(tile_8);

        // row8
        const row8 = scene.add.container(0, 294);
        topLayer.add(row8);

        // tile_2
        const tile_2 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_2.scaleX = 0.97;
        tile_2.scaleY = 0.97;
        tile_2.setOrigin(0, 0);
        row8.add(tile_2);

        // tile0001
        const tile0001 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile0001.scaleX = 0.97;
        tile0001.scaleY = 0.97;
        tile0001.setOrigin(0, 0);
        row8.add(tile0001);

        // tile
        const tile = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile.scaleX = 0.97;
        tile.scaleY = 0.97;
        tile.setOrigin(0, 0);
        row8.add(tile);

        // tile_1
        const tile_1 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_1.scaleX = 0.97;
        tile_1.scaleY = 0.97;
        tile_1.setOrigin(0, 0);
        row8.add(tile_1);

        // tile_3
        const tile_3 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_3.scaleX = 0.97;
        tile_3.scaleY = 0.97;
        tile_3.setOrigin(0, 0);
        row8.add(tile_3);

        // tile_4
        const tile_4 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_4.scaleX = 0.97;
        tile_4.scaleY = 0.97;
        tile_4.setOrigin(0, 0);
        row8.add(tile_4);

        // tile_5
        const tile_5 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_5.scaleX = 0.97;
        tile_5.scaleY = 0.97;
        tile_5.setOrigin(0, 0);
        row8.add(tile_5);

        // tile_6
        const tile_6 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_6.scaleX = 0.97;
        tile_6.scaleY = 0.97;
        tile_6.setOrigin(0, 0);
        row8.add(tile_6);

        // tile_7
        const tile_7 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_7.scaleX = 0.97;
        tile_7.scaleY = 0.97;
        tile_7.setOrigin(0, 0);
        row8.add(tile_7);

        // tile_8
        const tile_8 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_8.scaleX = 0.97;
        tile_8.scaleY = 0.97;
        tile_8.setOrigin(0, 0);
        row8.add(tile_8);

        // row7
        const row7 = scene.add.container(0, 252);
        topLayer.add(row7);

        // tile_2
        const tile_2 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_2.scaleX = 0.97;
        tile_2.scaleY = 0.97;
        tile_2.setOrigin(0, 0);
        row7.add(tile_2);

        // tile0001
        const tile0001 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile0001.scaleX = 0.97;
        tile0001.scaleY = 0.97;
        tile0001.setOrigin(0, 0);
        row7.add(tile0001);

        // tile
        const tile = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile.scaleX = 0.97;
        tile.scaleY = 0.97;
        tile.setOrigin(0, 0);
        row7.add(tile);

        // tile_1
        const tile_1 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_1.scaleX = 0.97;
        tile_1.scaleY = 0.97;
        tile_1.setOrigin(0, 0);
        row7.add(tile_1);

        // tile_3
        const tile_3 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_3.scaleX = 0.97;
        tile_3.scaleY = 0.97;
        tile_3.setOrigin(0, 0);
        row7.add(tile_3);

        // tile_4
        const tile_4 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_4.scaleX = 0.97;
        tile_4.scaleY = 0.97;
        tile_4.setOrigin(0, 0);
        row7.add(tile_4);

        // tile_5
        const tile_5 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_5.scaleX = 0.97;
        tile_5.scaleY = 0.97;
        tile_5.setOrigin(0, 0);
        row7.add(tile_5);

        // tile_6
        const tile_6 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_6.scaleX = 0.97;
        tile_6.scaleY = 0.97;
        tile_6.setOrigin(0, 0);
        row7.add(tile_6);

        // tile_7
        const tile_7 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_7.scaleX = 0.97;
        tile_7.scaleY = 0.97;
        tile_7.setOrigin(0, 0);
        row7.add(tile_7);

        // tile_8
        const tile_8 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_8.scaleX = 0.97;
        tile_8.scaleY = 0.97;
        tile_8.setOrigin(0, 0);
        row7.add(tile_8);

        // row6
        const row6 = scene.add.container(0, 210);
        topLayer.add(row6);

        // tile_2
        const tile_2 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_2.scaleX = 0.97;
        tile_2.scaleY = 0.97;
        tile_2.setOrigin(0, 0);
        row6.add(tile_2);

        // tile0001
        const tile0001 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile0001.scaleX = 0.97;
        tile0001.scaleY = 0.97;
        tile0001.setOrigin(0, 0);
        row6.add(tile0001);

        // tile
        const tile = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile.scaleX = 0.97;
        tile.scaleY = 0.97;
        tile.setOrigin(0, 0);
        row6.add(tile);

        // tile_1
        const tile_1 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_1.scaleX = 0.97;
        tile_1.scaleY = 0.97;
        tile_1.setOrigin(0, 0);
        row6.add(tile_1);

        // tile_3
        const tile_3 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_3.scaleX = 0.97;
        tile_3.scaleY = 0.97;
        tile_3.setOrigin(0, 0);
        row6.add(tile_3);

        // tile_4
        const tile_4 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_4.scaleX = 0.97;
        tile_4.scaleY = 0.97;
        tile_4.setOrigin(0, 0);
        row6.add(tile_4);

        // tile_5
        const tile_5 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_5.scaleX = 0.97;
        tile_5.scaleY = 0.97;
        tile_5.setOrigin(0, 0);
        row6.add(tile_5);

        // tile_6
        const tile_6 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_6.scaleX = 0.97;
        tile_6.scaleY = 0.97;
        tile_6.setOrigin(0, 0);
        row6.add(tile_6);

        // tile_7
        const tile_7 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_7.scaleX = 0.97;
        tile_7.scaleY = 0.97;
        tile_7.setOrigin(0, 0);
        row6.add(tile_7);

        // tile_8
        const tile_8 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_8.scaleX = 0.97;
        tile_8.scaleY = 0.97;
        tile_8.setOrigin(0, 0);
        row6.add(tile_8);

        // row5
        const row5 = scene.add.container(0, 168);
        topLayer.add(row5);

        // tile_2
        const tile_2 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_2.scaleX = 0.97;
        tile_2.scaleY = 0.97;
        tile_2.setOrigin(0, 0);
        row5.add(tile_2);

        // tile0001
        const tile0001 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile0001.scaleX = 0.97;
        tile0001.scaleY = 0.97;
        tile0001.setOrigin(0, 0);
        row5.add(tile0001);

        // tile
        const tile = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile.scaleX = 0.97;
        tile.scaleY = 0.97;
        tile.setOrigin(0, 0);
        row5.add(tile);

        // tile_1
        const tile_1 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_1.scaleX = 0.97;
        tile_1.scaleY = 0.97;
        tile_1.setOrigin(0, 0);
        row5.add(tile_1);

        // tile_3
        const tile_3 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_3.scaleX = 0.97;
        tile_3.scaleY = 0.97;
        tile_3.setOrigin(0, 0);
        row5.add(tile_3);

        // tile_4
        const tile_4 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_4.scaleX = 0.97;
        tile_4.scaleY = 0.97;
        tile_4.setOrigin(0, 0);
        row5.add(tile_4);

        // tile_5
        const tile_5 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_5.scaleX = 0.97;
        tile_5.scaleY = 0.97;
        tile_5.setOrigin(0, 0);
        row5.add(tile_5);

        // tile_6
        const tile_6 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_6.scaleX = 0.97;
        tile_6.scaleY = 0.97;
        tile_6.setOrigin(0, 0);
        row5.add(tile_6);

        // tile_7
        const tile_7 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_7.scaleX = 0.97;
        tile_7.scaleY = 0.97;
        tile_7.setOrigin(0, 0);
        row5.add(tile_7);

        // tile_8
        const tile_8 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_8.scaleX = 0.97;
        tile_8.scaleY = 0.97;
        tile_8.setOrigin(0, 0);
        row5.add(tile_8);

        // row4
        const row4 = scene.add.container(0, 126);
        topLayer.add(row4);

        // tile_2
        const tile_2 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_2.scaleX = 0.97;
        tile_2.scaleY = 0.97;
        tile_2.setOrigin(0, 0);
        row4.add(tile_2);

        // tile0001
        const tile0001 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile0001.scaleX = 0.97;
        tile0001.scaleY = 0.97;
        tile0001.setOrigin(0, 0);
        row4.add(tile0001);

        // tile
        const tile = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile.scaleX = 0.97;
        tile.scaleY = 0.97;
        tile.setOrigin(0, 0);
        row4.add(tile);

        // tile_1
        const tile_1 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_1.scaleX = 0.97;
        tile_1.scaleY = 0.97;
        tile_1.setOrigin(0, 0);
        row4.add(tile_1);

        // tile_3
        const tile_3 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_3.scaleX = 0.97;
        tile_3.scaleY = 0.97;
        tile_3.setOrigin(0, 0);
        row4.add(tile_3);

        // tile_4
        const tile_4 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_4.scaleX = 0.97;
        tile_4.scaleY = 0.97;
        tile_4.setOrigin(0, 0);
        row4.add(tile_4);

        // tile_5
        const tile_5 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_5.scaleX = 0.97;
        tile_5.scaleY = 0.97;
        tile_5.setOrigin(0, 0);
        row4.add(tile_5);

        // tile_6
        const tile_6 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_6.scaleX = 0.97;
        tile_6.scaleY = 0.97;
        tile_6.setOrigin(0, 0);
        row4.add(tile_6);

        // tile_7
        const tile_7 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_7.scaleX = 0.97;
        tile_7.scaleY = 0.97;
        tile_7.setOrigin(0, 0);
        row4.add(tile_7);

        // tile_8
        const tile_8 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_8.scaleX = 0.97;
        tile_8.scaleY = 0.97;
        tile_8.setOrigin(0, 0);
        row4.add(tile_8);

        // row3
        const row3 = scene.add.container(0, 84);
        topLayer.add(row3);

        // tile_2
        const tile_2 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_2.scaleX = 0.97;
        tile_2.scaleY = 0.97;
        tile_2.setOrigin(0, 0);
        row3.add(tile_2);

        // tile0001
        const tile0001 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile0001.scaleX = 0.97;
        tile0001.scaleY = 0.97;
        tile0001.setOrigin(0, 0);
        row3.add(tile0001);

        // tile
        const tile = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile.scaleX = 0.97;
        tile.scaleY = 0.97;
        tile.setOrigin(0, 0);
        row3.add(tile);

        // tile_1
        const tile_1 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_1.scaleX = 0.97;
        tile_1.scaleY = 0.97;
        tile_1.setOrigin(0, 0);
        row3.add(tile_1);

        // tile_3
        const tile_3 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_3.scaleX = 0.97;
        tile_3.scaleY = 0.97;
        tile_3.setOrigin(0, 0);
        row3.add(tile_3);

        // tile_4
        const tile_4 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_4.scaleX = 0.97;
        tile_4.scaleY = 0.97;
        tile_4.setOrigin(0, 0);
        row3.add(tile_4);

        // tile_5
        const tile_5 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_5.scaleX = 0.97;
        tile_5.scaleY = 0.97;
        tile_5.setOrigin(0, 0);
        row3.add(tile_5);

        // tile_6
        const tile_6 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_6.scaleX = 0.97;
        tile_6.scaleY = 0.97;
        tile_6.setOrigin(0, 0);
        row3.add(tile_6);

        // tile_7
        const tile_7 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_7.scaleX = 0.97;
        tile_7.scaleY = 0.97;
        tile_7.setOrigin(0, 0);
        row3.add(tile_7);

        // tile_8
        const tile_8 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_8.scaleX = 0.97;
        tile_8.scaleY = 0.97;
        tile_8.setOrigin(0, 0);
        row3.add(tile_8);

        // row2
        const row2 = scene.add.container(0, 42);
        topLayer.add(row2);

        // tile_2
        const tile_2 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_2.scaleX = 0.97;
        tile_2.scaleY = 0.97;
        tile_2.setOrigin(0, 0);
        row2.add(tile_2);

        // tile0001
        const tile0001 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile0001.scaleX = 0.97;
        tile0001.scaleY = 0.97;
        tile0001.setOrigin(0, 0);
        row2.add(tile0001);

        // tile
        const tile = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile.scaleX = 0.97;
        tile.scaleY = 0.97;
        tile.setOrigin(0, 0);
        row2.add(tile);

        // tile_1
        const tile_1 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_1.scaleX = 0.97;
        tile_1.scaleY = 0.97;
        tile_1.setOrigin(0, 0);
        row2.add(tile_1);

        // tile_3
        const tile_3 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_3.scaleX = 0.97;
        tile_3.scaleY = 0.97;
        tile_3.setOrigin(0, 0);
        row2.add(tile_3);

        // tile_4
        const tile_4 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_4.scaleX = 0.97;
        tile_4.scaleY = 0.97;
        tile_4.setOrigin(0, 0);
        row2.add(tile_4);

        // tile_5
        const tile_5 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_5.scaleX = 0.97;
        tile_5.scaleY = 0.97;
        tile_5.setOrigin(0, 0);
        row2.add(tile_5);

        // tile_6
        const tile_6 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_6.scaleX = 0.97;
        tile_6.scaleY = 0.97;
        tile_6.setOrigin(0, 0);
        row2.add(tile_6);

        // tile_7
        const tile_7 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_7.scaleX = 0.97;
        tile_7.scaleY = 0.97;
        tile_7.setOrigin(0, 0);
        row2.add(tile_7);

        // tile_8
        const tile_8 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_8.scaleX = 0.97;
        tile_8.scaleY = 0.97;
        tile_8.setOrigin(0, 0);
        row2.add(tile_8);

        // row1
        const row1 = scene.add.container(0, 0);
        topLayer.add(row1);

        // tile_2
        const tile_2 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_2.scaleX = 0.97;
        tile_2.scaleY = 0.97;
        tile_2.setOrigin(0, 0);
        row1.add(tile_2);

        // tile0001
        const tile0001 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile0001.scaleX = 0.97;
        tile0001.scaleY = 0.97;
        tile0001.setOrigin(0, 0);
        row1.add(tile0001);

        // tile
        const tile = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile.scaleX = 0.97;
        tile.scaleY = 0.97;
        tile.setOrigin(0, 0);
        row1.add(tile);

        // tile_1
        const tile_1 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_1.scaleX = 0.97;
        tile_1.scaleY = 0.97;
        tile_1.setOrigin(0, 0);
        row1.add(tile_1);

        // tile_3
        const tile_3 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_3.scaleX = 0.97;
        tile_3.scaleY = 0.97;
        tile_3.setOrigin(0, 0);
        row1.add(tile_3);

        // tile_4
        const tile_4 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_4.scaleX = 0.97;
        tile_4.scaleY = 0.97;
        tile_4.setOrigin(0, 0);
        row1.add(tile_4);

        // tile_5
        const tile_5 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_5.scaleX = 0.97;
        tile_5.scaleY = 0.97;
        tile_5.setOrigin(0, 0);
        row1.add(tile_5);

        // tile_6
        const tile_6 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_6.scaleX = 0.97;
        tile_6.scaleY = 0.97;
        tile_6.setOrigin(0, 0);
        row1.add(tile_6);

        // tile_7
        const tile_7 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_7.scaleX = 0.97;
        tile_7.scaleY = 0.97;
        tile_7.setOrigin(0, 0);
        row1.add(tile_7);

        // tile_8
        const tile_8 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_8.scaleX = 0.97;
        tile_8.scaleY = 0.97;
        tile_8.setOrigin(0, 0);
        row1.add(tile_8);

        // row10
        const row10 = scene.add.container(0, 378);
        topLayer.add(row10);

        // tile_2
        const tile_2 = scene.add.image(126, 0, "treasurehunt", "tile0001");
        tile_2.scaleX = 0.97;
        tile_2.scaleY = 0.97;
        tile_2.setOrigin(0, 0);
        row10.add(tile_2);

        // tile0001
        const tile0001 = scene.add.image(84, 0, "treasurehunt", "tile0001");
        tile0001.scaleX = 0.97;
        tile0001.scaleY = 0.97;
        tile0001.setOrigin(0, 0);
        row10.add(tile0001);

        // tile
        const tile = scene.add.image(42, 0, "treasurehunt", "tile0001");
        tile.scaleX = 0.97;
        tile.scaleY = 0.97;
        tile.setOrigin(0, 0);
        row10.add(tile);

        // tile_1
        const tile_1 = scene.add.image(0, 0, "treasurehunt", "tile0001");
        tile_1.scaleX = 0.97;
        tile_1.scaleY = 0.97;
        tile_1.setOrigin(0, 0);
        row10.add(tile_1);

        // tile_3
        const tile_3 = scene.add.image(294, 0, "treasurehunt", "tile0001");
        tile_3.scaleX = 0.97;
        tile_3.scaleY = 0.97;
        tile_3.setOrigin(0, 0);
        row10.add(tile_3);

        // tile_4
        const tile_4 = scene.add.image(252, 0, "treasurehunt", "tile0001");
        tile_4.scaleX = 0.97;
        tile_4.scaleY = 0.97;
        tile_4.setOrigin(0, 0);
        row10.add(tile_4);

        // tile_5
        const tile_5 = scene.add.image(210, 0, "treasurehunt", "tile0001");
        tile_5.scaleX = 0.97;
        tile_5.scaleY = 0.97;
        tile_5.setOrigin(0, 0);
        row10.add(tile_5);

        // tile_6
        const tile_6 = scene.add.image(168, 0, "treasurehunt", "tile0001");
        tile_6.scaleX = 0.97;
        tile_6.scaleY = 0.97;
        tile_6.setOrigin(0, 0);
        row10.add(tile_6);

        // tile_7
        const tile_7 = scene.add.image(378, 0, "treasurehunt", "tile0001");
        tile_7.scaleX = 0.97;
        tile_7.scaleY = 0.97;
        tile_7.setOrigin(0, 0);
        row10.add(tile_7);

        // tile_8
        const tile_8 = scene.add.image(336, 0, "treasurehunt", "tile0001");
        tile_8.scaleX = 0.97;
        tile_8.scaleY = 0.97;
        tile_8.setOrigin(0, 0);
        row10.add(tile_8);

        // rowButtons
        const rowButtons = scene.add.container(-40, 23);
        this.add(rowButtons);

        // rowButton_1
        const rowButton_1 = scene.add.image(0, 0, "treasurehunt", "rowButton.png");
        rowButtons.add(rowButton_1);

        // rowButton_2
        const rowButton_2 = scene.add.image(0, 41, "treasurehunt", "rowButton.png");
        rowButtons.add(rowButton_2);

        // rowButton_3
        const rowButton_3 = scene.add.image(0, 83, "treasurehunt", "rowButton.png");
        rowButtons.add(rowButton_3);

        // rowButton_4
        const rowButton_4 = scene.add.image(0, 125, "treasurehunt", "rowButton.png");
        rowButtons.add(rowButton_4);

        // rowButton_5
        const rowButton_5 = scene.add.image(0, 167, "treasurehunt", "rowButton.png");
        rowButtons.add(rowButton_5);

        // rowButton_6
        const rowButton_6 = scene.add.image(0, 210, "treasurehunt", "rowButton.png");
        rowButtons.add(rowButton_6);

        // rowButton_7
        const rowButton_7 = scene.add.image(0, 252, "treasurehunt", "rowButton.png");
        rowButtons.add(rowButton_7);

        // rowButton_8
        const rowButton_8 = scene.add.image(0, 294, "treasurehunt", "rowButton.png");
        rowButtons.add(rowButton_8);

        // rowButton_9
        const rowButton_9 = scene.add.image(0, 336, "treasurehunt", "rowButton.png");
        rowButtons.add(rowButton_9);

        // rowButton_10
        const rowButton_10 = scene.add.image(0, 378, "treasurehunt", "rowButton.png");
        rowButtons.add(rowButton_10);

        // columnButtons
        const columnButtons = scene.add.container(23, -40);
        this.add(columnButtons);

        // colButton_1
        const colButton_1 = scene.add.image(0, 0, "treasurehunt", "colButton");
        columnButtons.add(colButton_1);

        // colButton_2
        const colButton_2 = scene.add.image(42, 0, "treasurehunt", "colButton");
        columnButtons.add(colButton_2);

        // colButton_3
        const colButton_3 = scene.add.image(84, 0, "treasurehunt", "colButton");
        columnButtons.add(colButton_3);

        // colButton_4
        const colButton_4 = scene.add.image(126, 0, "treasurehunt", "colButton");
        columnButtons.add(colButton_4);

        // colButton_5
        const colButton_5 = scene.add.image(168, 0, "treasurehunt", "colButton");
        columnButtons.add(colButton_5);

        // colButton_6
        const colButton_6 = scene.add.image(210, 0, "treasurehunt", "colButton");
        columnButtons.add(colButton_6);

        // colButton_10
        const colButton_10 = scene.add.image(380, 0, "treasurehunt", "colButton");
        columnButtons.add(colButton_10);

        // colButton_9
        const colButton_9 = scene.add.image(338, 0, "treasurehunt", "colButton");
        columnButtons.add(colButton_9);

        // colButton_8
        const colButton_8 = scene.add.image(296, 0, "treasurehunt", "colButton");
        columnButtons.add(colButton_8);

        // colButton_7
        const colButton_7 = scene.add.image(254, 0, "treasurehunt", "colButton");
        columnButtons.add(colButton_7);

        // lists
        const colClears = [];
        const rowClears = [];

        // rowButton_1 (components)
        const rowButton_1Button = new Button(rowButton_1);
        rowButton_1Button.spriteName = "rowButton_1";
        rowButton_1Button.callback = () => {this.rowClear(1)};

        // rowButton_2 (components)
        const rowButton_2Button = new Button(rowButton_2);
        rowButton_2Button.spriteName = "rowButton_1";
        rowButton_2Button.callback = () => {this.rowClear(1)};

        // rowButton_3 (components)
        const rowButton_3Button = new Button(rowButton_3);
        rowButton_3Button.spriteName = "rowButton_1";
        rowButton_3Button.callback = () => {this.rowClear(1)};

        // rowButton_4 (components)
        const rowButton_4Button = new Button(rowButton_4);
        rowButton_4Button.spriteName = "rowButton_1";
        rowButton_4Button.callback = () => {this.rowClear(1)};

        // rowButton_5 (components)
        const rowButton_5Button = new Button(rowButton_5);
        rowButton_5Button.spriteName = "rowButton_1";
        rowButton_5Button.callback = () => {this.rowClear(1)};

        // rowButton_6 (components)
        const rowButton_6Button = new Button(rowButton_6);
        rowButton_6Button.spriteName = "rowButton_1";
        rowButton_6Button.callback = () => {this.rowClear(1)};

        // rowButton_7 (components)
        const rowButton_7Button = new Button(rowButton_7);
        rowButton_7Button.spriteName = "rowButton_1";
        rowButton_7Button.callback = () => {this.rowClear(1)};

        // rowButton_8 (components)
        const rowButton_8Button = new Button(rowButton_8);
        rowButton_8Button.spriteName = "rowButton_1";
        rowButton_8Button.callback = () => {this.rowClear(1)};

        // rowButton_9 (components)
        const rowButton_9Button = new Button(rowButton_9);
        rowButton_9Button.spriteName = "rowButton_1";
        rowButton_9Button.callback = () => {this.rowClear(1)};

        // rowButton_10 (components)
        const rowButton_10Button = new Button(rowButton_10);
        rowButton_10Button.spriteName = "rowButton_1";
        rowButton_10Button.callback = () => {this.rowClear(1)};

        this.rowButtons = rowButtons;
        this.columnButtons = columnButtons;
       

        /* START-USER-CTR-CODE */
        // Write your code here.
        this.colClears = [0,0,0,0,0,0,0,0,0,0]; // 1 = cleared
        this.rowClears = [0,0,0,0,0,0,0,0,0,0];
        this.treasure = new Map();              // Map struct, coords of treasure

        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Container} */
    rowButtons;
    /** @type {Phaser.GameObjects.Container} */
    columnButtons;

    /* START-USER-CODE */

    doClear(args, index){
        // turn == 1 ? colClears[index]=1 : rowClears[index]=1

        this.updateSurroundingTiles()

        // has treasure been found??
            // update treasure args

    }

    randomTreasure(args){

        // add random coins, gems, emerald
    }

    reset(){
        // all tile frames to frame 0001, 
            
        // hidden treasure removed
        this.treasure = new Map();

        // row/col clears
        this.colClears = [0,0,0,0,0,0,0,0,0,0];
        this.rowClears = [0,0,0,0,0,0,0,0,0,0];

    }

    updateSurroundingTiles(args, index){

    }

    // Write your code here.

    // --- getters ---
    // treasuremap
    // col/row clears


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
