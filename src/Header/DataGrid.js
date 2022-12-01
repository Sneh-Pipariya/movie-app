import * as React from "react";
import movieData from "../movieData.json";
import { useState } from "react";
import "./DataGrid.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Toolbar, Typography } from "@mui/material";
import { TextField } from "@material-ui/core";
import MovieModal from "./MovieModal";
import SortIcon from "@mui/icons-material/Sort";
import { SortableItem } from "react-sort-list";

const DataGrid = (props) => {
  const [open, setOpen] = useState(false);
  const [openId, setOpenId] = useState();
  const [filteredData, setFilteredData] = useState(movieData);
  const [updatedData, setUpdatedData] = useState([]);
  const [flag, setFlag] = useState("asc");

  const searchHandler = (event) => {
    console.log("handlee searchingg");
    setFilteredData(
      movieData.filter((name) =>
        name.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  console.log({ filteredDataaaaa: filteredData });

  const tableCellStyle = {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
  };

  // console.log({ GridMovieData: props.myMovieData });

  const handleOpenModal = (event, id) => {
    setOpen(true);
    setOpenId(id);
  };

  const sortedTitle = () => {
    if (flag === "asc") {
      const ascendingData = filteredData.sort((a, b) =>
        a.original_title > b.original_title ? 1 : -1
      );
      const newData = [...ascendingData];
      setUpdatedData(newData);
      setFlag("desc");
    } else {
      const descendingData = filteredData.sort((a, b) =>
        a.original_title > b.original_title ? -1 : 1
      );
      const newData = [...descendingData];
      setUpdatedData(newData);
      setFlag("asc");
    }
  };

  return (
    <div className="window">
      <div className="inner-window">
        <TableContainer component={Paper}>
          <Table sx={{ border: "1px solid grey" }} aria-label="simple table">
            <Toolbar>
              <Button onClick={() => console.log("button clikeddd")}>
                <SortIcon onClick={() => sortedTitle()} />
              </Button>

              <TextField
                sx={{
                  marginLeft: "10rem",
                  border: "1px solid darkGrey",
                  background: "white",
                }}
                onChange={searchHandler}
                type="search"
                variant="filled"
                label="Search here"
              />
            </Toolbar>

            <div>
              {filteredData.map((movie) => (
                <div
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
                      // close={() => setOpen(false)}
                      title={movie.title}
                      rating={movie.vote_average}
                      overview={movie.overview}
                      original_language={movie.original_language}
                      release_date={movie.release_date}
                      poster_path={movie.poster_path}
                    />
                  )}
                </div>
              ))}
            </div>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default DataGrid;
