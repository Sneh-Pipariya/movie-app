import * as React from "react";
import "./DetailedGridData.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const DetailedGridData = (props) => {
  const tableCellStyle = {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  };

  return (
    <div className="detailed-grid-data">
      <div className="detailed-inner-grid-window">
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 65, border: "3px solid grey" }}
            aria-label="simple table"
          >
            <TableHead sx={{ paddingRight: "30px" }}>
              <TableRow>
                <TableCell sx={tableCellStyle}>Title</TableCell>
                <TableCell sx={tableCellStyle}>Rating</TableCell>
                <TableCell sx={tableCellStyle}>Release Date</TableCell>
                <TableCell sx={tableCellStyle}>Language</TableCell>
                <TableCell sx={tableCellStyle}>Popularity</TableCell>
                <TableCell sx={tableCellStyle}>Poster</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.movieData.map((movie) => (
                <TableRow
                  key={movie.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{movie.title}</TableCell>
                  <TableCell align="center">{movie.vote_average}</TableCell>
                  <TableCell align="center">{movie.release_date}</TableCell>
                  <TableCell align="center">
                    {movie.original_language}
                  </TableCell>
                  <TableCell align="center">{movie.popularity}</TableCell>
                  <TableCell align="center">
                    <img src={movie.poster_path} className="posters" />
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

export default DetailedGridData;
