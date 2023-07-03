import React, { useState } from "react";
import { useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import PublishIcon from "@mui/icons-material/Publish";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import BoardItem from "./compoents/BoardItem";
import EditBoardItem from "./compoents/EditBoardItem";

const Boardlist = () => {
  const [isEdit, setIsEdit] = useState(false);

  const boardList = useSelector((state) => state.board.boardList);

  const handleAdd = () => {
    setIsEdit(true);
  };

  const handleCancelEdit = () => {
    setIsEdit(false);
  };

  return (
    <div className="h-full flex justify-center items-center">
      <div className="w-full mx-7 max-w-5xl min-h-1/2 p-4 bg-gray-100 rounded-2xl flex flex-col">
        <Stack direction="row" justifyContent="flex-end" spacing={2} className="my-3">
          <Button className="" variant="contained" startIcon={<AddIcon />} onClick={handleAdd}>
            Add
          </Button>
          <Button className="ml-2" variant="contained" startIcon={<PublishIcon />}>
            Import
          </Button>
          <Button className="" variant="contained" startIcon={<FileDownloadIcon />}>
            Export
          </Button>
        </Stack>
        <Divider />
        <div className="mt-2">
          {isEdit && <EditBoardItem onCancel={handleCancelEdit} />}
          {boardList && boardList.length > 0 ? (
            boardList.map((board) => <BoardItem key={board.id} board={board} />)
          ) : (
            <div className="my-5 text-center">No Data</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Boardlist;
