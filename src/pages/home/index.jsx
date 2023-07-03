import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import StopCircleIcon from "@mui/icons-material/StopCircle";

import ClapBoard from "../../components/clapboard";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    if (searchParams.toString() === "") {
      navigate("/boardlist");
    }
  }, []);

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
        <IconButton onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? <StopCircleIcon /> : <PlayCircleFilledIcon />}
        </IconButton>
        <IconButton onClick={handleFullScreen}>
          <AspectRatioIcon />
        </IconButton>
        <IconButton onClick={() => navigate("/boardlist")}>
          <MenuIcon />
        </IconButton>
      </Stack>
      <ClapBoard isPlaying={isPlaying} />
    </div>
  );
};

export default Home;
