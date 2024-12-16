export default class Character {
    constructor(name) {
        if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
            this.name = name;
        } else {
            throw new Error('Имя или тип не верно указаны')
        }

        this.health = 100;
        this.level = 1;
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('Нельзя повысить левел умершего')
        }
        this.health = 100;
        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        }    
    

    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100)
        } else {
            throw new Error('Игрок уже мертв') 
        }
        
    }

}