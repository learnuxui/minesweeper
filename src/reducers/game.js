import * as GAME_ACTION_TYPES from "../constants/ActionTypes";
import InitialState from "../store/InitialState";

export default function game(state = InitialState.game, action) {
  switch (action.type) {
    case GAME_ACTION_TYPES.SET_GRID:
      return { ...state, grid: action.grid };
    case GAME_ACTION_TYPES.CHANGE_DIFFICULTY_LEVEL:
      return { ...state, level: action.level };
    case GAME_ACTION_TYPES.GAME_OVER:
      return { ...state, gameOver: action.value };
    case GAME_ACTION_TYPES.MINE_MARKED:
      return { ...state, mineMarked: action.mineMarked };
    case GAME_ACTION_TYPES.RESET_MINE_MARKER:
      return { ...state, mineMarked: [] };
    case GAME_ACTION_TYPES.CHANGE_TOTAL_MINES:
      return { ...state, totalMines: action.value };
    case GAME_ACTION_TYPES.CHANGE_SCORE:
      return { ...state, score: action.score };
    case GAME_ACTION_TYPES.CHANGE_LEVELS:
        return { ...state, levels: action.levels };
    default:
      return state;
  }
}
