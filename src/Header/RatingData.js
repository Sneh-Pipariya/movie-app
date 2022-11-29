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

const RatingData = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editElemId, setEditElemId] = useState();
  const [field, setField] = useState();

  const tableCellStyle = {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  };

  const handleSave = () => {
    setIsEditing(!isEditing);
    setField(field);
    console.log({ Field: field });
    setIsEditing(false);
    setEditElemId();
  };

  const modifyMovieTitle = (event, id) => {
    const item = props.movieData.find((i) => i.id === id);
    console.log({ ITEM: item });
    item.title = event.target.value;
  };

  // const inputChangeHandler = (event) => {
  //   setField(event.target.value);
  // };

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
                    {isEditing && editElemId === movie.id ? (
                      <input
                        defaultValue={movie.title}
                        onChange={(event) => modifyMovieTitle(event, movie.id)}
                      />
                    ) : (
                      <input value={movie.title} />
                    )}

                    {/* {isEditing && editElemId === movie.id ? (
                      <input
                        // id="field"
                        type="text"
                        // value={movie.title}
                        // name={movie.title}
                        value={field}
                        onChange={inputChangeHandler}
                      />
                    ) : (
                      <input value={movie.title} />
                    )} */}
                  </TableCell>

                  <TableCell align="center">{movie.vote_average}</TableCell>
                  <TableCell align="center">
                    {isEditing && editElemId === movie.id && (
                      <>
                        <Button variant="contained" onClick={handleSave}>
                          Save
                        </Button>
                        <Button
                          variant="contained"
                          onClick={() => {
                            setIsEditing(false);
                            setEditElemId();
                            // setField(field);
                          }}
                        >
                          Cancel
                        </Button>
                      </>
                    )}
                    {editElemId !== movie?.id && (
                      <Button
                        variant="contained"
                        onClick={() => {
                          setIsEditing(true);
                          setEditElemId(movie.id);
                          setField(movie.title);
                        }}
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
