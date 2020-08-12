import { setGrid, gameOver, setMineMarker, changeScore, changeTotalMines, changeDifficultyLevel } from "./GameActions";
import { SCORE_MULTIPLIER } from "../constants/AppConstants";
import { initGrid } from "./InitActions";


export function openCell(cellData) {
    return (dispatch, getState) => {
        const { game } = getState();
        const { grid } = game;
        cellData.isOpen = true;
        grid[cellData.row][cellData.col] = cellData;
        if (cellData.neighbors === 0) {
            dispatch(openEmptySpots(grid, cellData));
        }
        dispatch(setGrid(grid));
    };
}

export function markFlag(cellData) {
    return (dispatch, getState) => {
        const { game } = getState();
        const { grid, mineMarked } = game;
        const { row, col } = cellData;
        grid[row][col] = cellData;
        dispatch(setGrid(grid));
        if (cellData.markAsMine) {
            mineMarked.push(cellData);
        } else {
            mineMarked.splice(mineMarked.findIndex(cell => cell.row === cellData.row && cell.col === cellData.col), 1);
        }
        dispatch(setMineMarker(mineMarked));
    };
}

function openEmptySpots(grid, cellData) {
    return (dispatch, getState) => {
        const { game } = getState();
        const { level } = game;
        const { row, col } = cellData;
        if (cellData.neighbors === -1) {
            return;
        }
        let i, j;
        for (i = row - 1; i <= row + 1; i++) {
            for (j = col - 1; j <= col + 1; j++) {
                if ((i === row && j === col) ||
                    (i < 0 || i >= level) ||
                    (j < 0 || j >= level)
                ) {
                    continue;
                }
                if (!grid[i][j].isMine && !grid[i][j].isOpen && !grid[i][j].markAsMine) {
                    grid[i][j].isOpen = true;
                    dispatch(openCell(grid[i][j]));
                }
            }
        }
    };
}

export function endGame() {
    return (dispatch) => {
        dispatch(calculateScore());
        dispatch(gameOver(true));
    };
}

export function calculateScore() {
    return (dispatch, getState) => {
        const { game } = getState();
        const { mineMarked } = game;
        const correctMines = mineMarked.filter(cell => cell.isMine);
        const score = correctMines.length * SCORE_MULTIPLIER;
        dispatch(changeScore(score));
    };
}

export function startOver(lvl) {
    return (dispatch, getState) => {
        const { game } = getState();
        const { level } = game;
        const stage = (lvl ? lvl : level);
        dispatch(changeDifficultyLevel(stage));
        dispatch(changeTotalMines(stage * 2));
        dispatch(initGrid());
    };
}

