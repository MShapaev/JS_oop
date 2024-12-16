import Character from './character';


export default class Daemon extends Character {
    constructor(name) {
        super(name);
        this.type = 'Daemon';
        // this.health = 100;
        // this.level = 1;
        this.attack = 10;
        this.defence = 40;
    }

    // levelUp() {
    //     const bonus = super.levelUp(this.health, this.level, this.attack, this.defence);
    //     return bonus;
    // }
}
