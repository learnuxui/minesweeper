import { setGrid, gameOver, resetMineMarker } from "./GameActions";
import Grid from "../classes/Grid";
import { getRandomInt } from "../util/Utilities";

export function initGrid() {
    return (dispatch, getState) => {
        const { game } = getState();
        const { level, totalMines } = game;
        const grid = [];
        dispatch(gameOver(false));
        dispatch(resetMineMarker());
        let i, j = 0;
        for (i = 0; i < level; i++) {
            grid[i] = [];
            for (j = 0; j < level; j++) {
                grid[i][j] = new Grid(i, j);
            }
        }
        dispatch(setNeighbors(setMines(grid, level, totalMines)));
    };
}

export function setNeighbors(grid) {
    return (dispatch, getState) => {
        const { game } = getState();
        const { level } = game;
        let i, j;
        for (i = 0; i < level; i++) {
            for (j = 0; j < level; j++) {
                const cell = grid[i][j];
                if (!cell.isMine) {
                    cell.neighbors = getNeighborsCount(grid, cell, level);
                }
            }
        }
        dispatch(setGrid(grid));
    };
}

// Show all the mines
export function openMines() {
    return (dispatch, getState) => {
        const { game } = getState();
        const { grid, level } = game;
        let row, col;
        for (row = 0; row < level; row++) {
            for (col = 0; col < level; col++) {
                //if (grid[row][col].isMine) {
                    grid[row][col].isOpen = true;
                //}
            }
        }
        dispatch(setGrid(grid));
    };
}

function setMines(grid, level, totalMines) {
    const mineLocations = [];
    while (mineLocations.length < totalMines) {
        const row = getRandomInt(level);
        const col = getRandomInt(level);
        const location = `(${row}-${col})`;
        if (mineLocations.indexOf(location) === -1) {
            mineLocations.push(location);
            grid[row][col].isMine = true;
            grid[row][col].neighbors = -1;
        }
    }
    return grid;
}

function getNeighborsCount(grid, cell, level) {
    const { row, col } = cell;
    let count = 0;
    let i, j;
    for (i = row - 1; i <= row + 1; i++) {
        for (j = col - 1; j <= col + 1; j++) {
            if ( (i === row && j === col) ||
                 (i < 0 || i >= level) || 
                 (j < 0 || j >= level)) {
                    continue;
                 }
            if (grid[i][j].isMine) {
                count++;
            }
        }
    }
    return count;

}
