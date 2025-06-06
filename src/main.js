import Phaser from 'phaser';
import MainScene from './scenes/MainScene.js';

const config = {
   type: Phaser.AUTO,
   width: 800,
   height: 600,
   backgroundColor: '#1d1d1d',
   scene: [MainScene],
   physics: {
        default: 'arcade',
        arcade: {
        gravity: { y: 0 },
        debug: false,
        },
    },
};

const game = new Phaser.Game(config);