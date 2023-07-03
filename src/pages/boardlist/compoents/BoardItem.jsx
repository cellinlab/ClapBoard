import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import EditBoardItem from "./EditBoardItem";

import { deleteBoard } from "../../../store/boardSlice";

const BoardItem = (props) => {
  const { board } = props;

  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlay = () => {
    const paramStr =
      `?` +
      `production=${board.production}&` +
      `director=${board.director}&` +
      `camera=${board.camera}&` +
      `roll=${board.roll}&` +
      `scene=${board.scene}&` +
      `take=${board.take}&` +
      `note=${board.note}&` +
      `date=${board.date}`;
    navigate(`/play${paramStr}`);
  };

  const handleEidt = () => {
    setIsEdit(true);
  };

  const handleDelete = () => {
    dispatch(deleteBoard(board));
  };
  return (
    <>
      {isEdit ? (
        <EditBoardItem board={board} onCancel={() => setIsEdit(false)} />
      ) : (
        <div className="flex flex-wrap relative border-b-2 border-slate-200 p-2">
          <div className="w-full">
            Production: <span>{board.production}</span>
          </div>

          <div className="w-1/4">
            Roll: <span>{board.roll}</span>
          </div>
          <div className="w-1/4">
            Scene: <span>{board.scene}</span>
          </div>
          <div className="w-1/4">
            Take: <span>{board.take}</span>
          </div>
          <Stack direction="row" spacing={2} className="absolute right-0 top-2">
            <IconButton aria-label="play" size="large" color="secondary" onClick={handlePlay}>
              <PlayCircleFilledWhiteIcon />
            </IconButton>
            <IconButton aria-label="edit" size="large" color="info" onClick={handleEidt}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" size="large" color="warning" onClick={handleDelete}>
              <DeleteOutlineIcon />
            </IconButton>
          </Stack>
        </div>
      )}
    </>
  );
};

export default BoardItem;
