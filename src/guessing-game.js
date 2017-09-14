class GuessingGame {
    constructor() {
        this.min;
        this.max;
        this.current;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.current = Math.round((this.min + this.max) / 2);
         
    }

    lower() {
        this.max = this.current;
    }

    greater() {
        this.min = this.current;
    }
}

module.exports = GuessingGame;
