import { createSlice } from '@reduxjs/toolkit';

const getItem = (key) => {
  const item = window.localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
  return null;
};

const setItem = (key, value) => {
  return window.localStorage.setItem(key, JSON.stringify(value));
};

const getInitialBoardList = () => {
  const boardList = getItem('boardList');
  if (boardList) {
    return boardList;
  }
  setItem('boardList', []);
  return [];
};

const initialState = {
  boardList: getInitialBoardList(),
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addBoard: (state, action) => {
      const newBoard = { ...action.payload };

      state.boardList.push(newBoard);

      const boardList = getItem('boardList');
      let newLists = [];
      if (boardList) {
        newLists = [...boardList, newBoard];
      } else {
        newLists = [newBoard];
      }
      setItem('boardList', newLists);
    },
    deleteBoard: (state, action) => {
      const boardList = getItem('boardList');
      if (boardList) {
        const newLists = boardList.filter(
          (board) => board.id !== action.payload.id
        );
        setItem('boardList', newLists);
        state.boardList = newLists;
      }
    },
    updateBoard: (state, action) => {
      const boardList = getItem('boardList');
      if (boardList) {
        const newLists = boardList.map((board) => {
          if (board.id === action.payload.id) {
            return action.payload;
          }
          return board;
        });
        setItem('boardList', newLists);
        state.boardList = newLists;
      }
    }
  }
});

export const { addBoard, deleteBoard, updateBoard } = boardSlice.actions;

export default boardSlice.reducer;
