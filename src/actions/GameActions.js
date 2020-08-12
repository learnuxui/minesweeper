import * as GAME_ACTION_TYPES from "../constants/ActionTypes";

export function setGrid(grid) {
    return {
        type: GAME_ACTION_TYPES.SET_GRID,
        grid,
      };
}

export function changeDifficultyLevel(level) {
    return {
        type: GAME_ACTION_TYPES.CHANGE_DIFFICULTY_LEVEL,
        level,
    };
}

export function gameOver(value) {
    return {
        type: GAME_ACTION_TYPES.GAME_OVER,
        value,
    };
}

export function resetMineMarker() {
    return {
        type: GAME_ACTION_TYPES.RESET_MINE_MARKER,
    };
}

export function setMineMarker(mineMarked) {
    return {
        type: GAME_ACTION_TYPES.MINE_MARKED,
        mineMarked,
    };
}

export function changeTotalMines(value) {
    return {
        type: GAME_ACTION_TYPES.CHANGE_TOTAL_MINES,
        value,
    };
}

export function changeScore(score) {
    return {
        type: GAME_ACTION_TYPES.CHANGE_SCORE,
        score,
    };
}

export function changeLevels(levels) {
    return {
        type: GAME_ACTION_TYPES.CHANGE_LEVELS,
        levels,
    };
}