import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { v4 as uuid } from "uuid";

import { addBoard } from "../../../store/boardSlice";

const EditBoardItem = (props) => {
  const { cancel } = props;

  const [production, setProduction] = useState("");
  const [director, setDirector] = useState("");
  const [camera, setCamera] = useState("");
  const [roll, setRoll] = useState("");
  const [scene, setScene] = useState("");
  const [take, setTake] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString());

  const dispatch = useDispatch();

  const handleSave = () => {
    const board = {
      id: uuid(),
      production,
      director,
      camera,
      roll,
      scene,
      take,
      note,
      date,
    };

    dispatch(addBoard(board));

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

    cancel();
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
