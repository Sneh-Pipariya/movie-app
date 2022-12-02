import * as React from "react";
// import ratingMovieData from "../movieData.json";
import { useState } from "react";
import "./DataGrid.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";

const RatingData = (props) => {
  const [editElemId, setEditElemId] = useState();
  const [newData, setNewData] = useState("");
  const tableCellStyle = {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  };

  const modifyMovieTitle = (event, id) => {
    console.log({ newData });
    const item = props.movieData.find((i) => i.id === id);
    if (newData !== item.title) {
      item.title = newData;
    }
    setEditElemId();
  };

  const handleCancel = () => {
    setEditElemId();
    setNewData("");
  };

  const handleEdit = (id) => {
    setEditElemId(id); //focus the field
  };

  const fetchValue = (id) => {
    const item = props.movieData.find((i) => i.id === id);
    if (newData && id === editElemId) {
      return newData;
    } else {
      return item.title;
    }
  };

  return (
    <div className="rating-data-window">
      <div className="rating-data-inner-window">
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 65, border: "3px solid grey" }}
            aria-label="simple table"
          >
            <TableHead sx={{ paddingRight: "30px" }}>
              <TableRow>
                <TableCell sx={tableCellStyle}>Title</TableCell>
                <TableCell sx={tableCellStyle}>Rating</TableCell>
                <TableCell sx={tableCellStyle}>Modify</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.movieData.map((movie) => (
                <TableRow
                  key={movie.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <TextField
                      variant="standard"
                      sx={{
                        pointerEvents: `${
                          editElemId === movie.id ? "auto" : "none"
                        }`,
                      }}
                      onChange={(event) => setNewData(event.target.value)}
                      // defaultValue={movie.title}
                      value={fetchValue(movie.id)}
                    />
                  </TableCell>

                  <TableCell align="center">{movie.vote_average}</TableCell>

                  <TableCell align="center">
                    {editElemId === movie.id && (
                      <>
                        <Button
                          variant="contained"
                          onClick={(event) => modifyMovieTitle(event, movie.id)}
                        >
                          Save
                        </Button>
                        <Button
                          variant="contained"
                          onClick={() => handleCancel()}
                        >
                          Cancel
                        </Button>
                      </>
                    )}
                    {editElemId !== movie?.id && (
                      <Button
                        variant="contained"
                        onClick={() => handleEdit(movie.id)}
                      >
                        Edit
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default RatingData;
