import React from "react";
import { Pagination } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

interface CustomPaginationProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  numOfPages?: number;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#d32f2f",
    },
  },
});

const CustomPagination: React.FC<CustomPaginationProps> = ({
  setPage,
  numOfPages = 10,
}) => {
  // Scroll to top when page changes
  const handlePageChange = (page: number) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={theme}>
        <Pagination
          onChange={(e, page) => handlePageChange(page)}
          count={numOfPages}
          color="primary"
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
