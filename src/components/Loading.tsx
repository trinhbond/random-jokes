import { CircularProgress, Box } from "@mui/material";
import classNames from "classnames";

type Size = {
  size: "sm" | "md" | "lg";
};

function Loading({ size }: Size) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <CircularProgress
        className={classNames("loading", size)}
        sx={{ display: "inline-block", position: "relative" }}
        size={size}
        thickness={1.8}
      />
    </Box>
  );
}

export default Loading;
