

const Grid = class {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.isOpen = false;
        this.neighbors = 0;
        this.isMine = false;
        this.markAsMine = false;
    }
};

export default Grid;

