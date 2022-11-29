import * as React from "react";
import { useState } from "react";
import "./DataGrid.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import MovieModal from "./MovieModal";

const DataGrid = (props) => {
  const [open, setOpen] = useState(false);
  const [openId, setOpenId] = useState();

  const tableCellStyle = {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
  };
  console.log({ GridMovieData: props.myMovieData });

  const handleOpenModal = (event, id) => {
    setOpen(true);
    setOpenId(id);
  };

  return (
    <div className="window">
      <div className="inner-window">
        <TableContainer component={Paper}>
          <Table sx={{ border: "1px solid grey" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {/* <TableCell sx={tableCellStyle}>Title</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.myMovieData.map((movie) => (
                <TableRow
                  key={movie.name}
                  // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <Button
                    align="center"
                    onClick={(event) => handleOpenModal(event, movie.id)}
                  >
                    {movie.title}
                  </Button>
                  {open && movie.id === openId && (
                    <MovieModal
                      close={() => setOpen(false)}
                      title={movie.title}
                      rating={movie.vote_average}
                      overview={movie.overview}
                      original_language={movie.original_language}
                      release_date={movie.release_date}
                    />
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default DataGrid;
