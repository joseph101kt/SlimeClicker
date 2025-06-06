import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    preload() {
        this.load.image('slime', '/slime.png');
    }

    create() {
        this.add.image(100, 100, 'slime');
    }
}
