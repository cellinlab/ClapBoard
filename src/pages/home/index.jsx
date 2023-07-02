import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

import ClapBoard from "../../components/clapboard";

const Home = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const navigate = useNavigate();

  const handleFullScreen = () => {
    if (!isFullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="h-full flex justify-center items-center">
      <Stack className="absolute top-5 right-5 z-10" direction="row" spacing={2}>
        <IconButton>
          <PlayCircleFilledIcon />
        </IconButton>
        <IconButton onClick={handleFullScreen}>
          <AspectRatioIcon />
        </IconButton>
        <IconButton onClick={() => navigate("/boardlist")}>
          <MenuIcon />
        </IconButton>
      </Stack>
      <ClapBoard />
    </div>
  );
};

export default Home;
