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
import { Button, Typography } from "@mui/material";

const RatingData = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editElemId, setEditElemId] = useState();
  const [field, setField] = useState([]);
  const [editFlag, setEditFlag] = useState(false);
  const [message, setMessage] = useState("");
  // const [upMsg, setUpMsg] = useState(message);
  // console.log({ field: field });

  const tableCellStyle = {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  };

  const handleSave = (event, id) => {
    setIsEditing(!isEditing);

    setField(field);
    console.log({ FieldInSave: field });

    setIsEditing(false);
    setEditElemId();
  };

  const modifyMovieTitle = (event, id) => {
    const item = props.movieData.find((i) => i.id === id);
    console.log({ item: event.target.value });
    // item.title = event.target.value;
    setField(event.target.value);
    // item.title = event.target.value;
    // console.log({ itemtitle: item.title });
    // console.log({ title: props.movieData.title });
  };

  const savedData = (event, id) => {
    setIsEditing(!isEditing);
    // const a = props.movieData.find((i) => i.id === id);
    // a.title = event.target.value;

    setField(field);
    // setUpMsg(message);
    console.log({ savedDataOfa: field });

    setIsEditing(false);
    setEditElemId();
  };

  const handleCancel = () => {
    // setIsEditing(false);
    setEditElemId();
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
                    {isEditing && editElemId === movie.id ? (
                      <input
                        defaultValue={movie.title}
                        onChange={(event) => modifyMovieTitle(event, movie.id)}
                      />
                    ) : (
                      // <TextField value={movie.title} />
                      <Typography>{movie.title} </Typography>
                    )}
                  </TableCell>

                  <TableCell align="center">{movie.vote_average}</TableCell>

                  <TableCell align="center">
                    {isEditing && editElemId === movie.id && (
                      <>
                        {/* <Button variant="contained" onClick={handleSave}> */}
                        <Button
                          variant="contained"
                          onClick={(event) => savedData(event, movie.id)}
                          // onClick={(event) => handleSave(event, movie.id)}
                        >
                          Save
                        </Button>
                        <Button
                          variant="contained"
                          // onClick={(event) => handleCancel(event, movie.id)}
                          onClick={() => handleCancel()}
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
                          setEditElemId(movie.id); //focus the field
                          // setField(movie.title);
                          setEditFlag(true);
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
