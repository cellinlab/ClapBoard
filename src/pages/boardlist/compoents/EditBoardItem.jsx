import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { v4 as uuid } from "uuid";

import { addBoard, updateBoard } from "../../../store/boardSlice";

const EditBoardItem = (props) => {
  const { onCancel, board } = props;

  const [production, setProduction] = useState("");
  const [director, setDirector] = useState("");
  const [camera, setCamera] = useState("");
  const [roll, setRoll] = useState("");
  const [scene, setScene] = useState("");
  const [take, setTake] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString());

  const dispatch = useDispatch();

  useEffect(() => {
    if (board) {
      setProduction(board.production);
      setDirector(board.director);
      setCamera(board.camera);
      setRoll(board.roll);
      setScene(board.scene);
      setTake(board.take);
      setNote(board.note);
      setDate(board.date);
    }
  }, [board]);

  const handleSave = () => {
    const newBoard = {
      production,
      director,
      camera,
      roll,
      scene,
      take,
      note,
      date,
    };

    if (board) {
      newBoard.id = board.id;
      dispatch(updateBoard(newBoard));
    } else {
      newBoard.id = uuid();
      dispatch(addBoard(newBoard));
    }

    handleCancel();
  };

  const handleCancel = () => {
    setProduction("");
    setDirector("");
    setCamera("");
    setRoll("");
    setScene("");
    setTake("");
    setNote("");
    setDate(new Date().toLocaleDateString());

    onCancel();
  };

  return (
    <Box className="border p-2" component="form" noValidate autoComplete="off">
      <div className="mt-3 mb-2">
        <TextField
          id="outlined-production"
          label="Production"
          fullWidth
          value={production}
          onChange={(e) => setProduction(e.target.value)}
        />
      </div>
      <div className="mb-2 flex justify-between">
        <TextField
          id="outlined-roll"
          label="Roll"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
        />
        <TextField
          id="outlined-scene"
          label="Scene"
          value={scene}
          onChange={(e) => setScene(e.target.value)}
        />
        <TextField
          id="outlined-take"
          label="Take"
          value={take}
          onChange={(e) => setTake(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <TextField
          id="outlined-note"
          fullWidth
          label="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <div className="mb-2 flex justify-between">
        <TextField
          id="outlined-director"
          label="Director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
        <TextField
          id="outlined-camera"
          label="Camera"
          value={camera}
          onChange={(e) => setCamera(e.target.value)}
        />
        <Stack direction="row" spacing={4}>
          <Button variant="contained" size="large" color="success" onClick={handleSave}>
            Save
          </Button>
          <Button variant="contained" size="large" color="warning" onClick={handleCancel}>
            Cancel
          </Button>
        </Stack>
      </div>
    </Box>
  );
};

export default EditBoardItem;
