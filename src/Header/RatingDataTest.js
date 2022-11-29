// import React, { useState } from "react";
// // import CreateIcon from "@material-ui/icons";
// // import "./DataGrid.css";
// import "./RatingDataTest.css";
// import AllData from "../movieData.json";
// import {
//   Box,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
// } from "@material-ui/core";
// import CreateIcon from "@mui/icons-material/Create";
// import DoneIcon from "@mui/icons-material/Done";
// import { makeStyles } from "@material-ui/core";
// import Paper from "@mui/material/Paper";
// import { TableContainer } from "@mui/material";

// const useStyles = makeStyles({
//   root: {
//     "& > *": {
//       borderBottom: "unset",
//     },
//   },
//   table: {
//     minWidth: 650,
//   },
// });

// function RatingDataTest(props) {
//   // Creating style object
//   const classes = useStyles();

//   const [rows, setRows] = useState(AllData);

//   console.log({ ratingtestData: rows });

//   const [open, setOpen] = React.useState(false);
//   const [isEdit, setEdit] = React.useState(false);
//   const [disable, setDisable] = React.useState(true);

//   const handleEdit = () => {
//     setEdit(!isEdit);
//   };

//   const handleSave = () => {
//     setEdit(!isEdit);
//     setRows(rows);
//     console.log("saved : ", rows);
//     setDisable(true);
//     setOpen(true);
//   };

//   const handleInputChange = (e, index) => {
//     setDisable(false);
//     const { name, value } = e.target;
//     console.log({ name: name, value: value });
//     console.log({ Rows: rows });
//     const list = [...rows];
//     console.log({ list: list });
//     list[index][name] = value;
//     setRows(list);
//   };

//   const tableCellStyle = {
//     fontWeight: "bold",
//     textAlign: "center",
//     fontSize: 15,
//   };

//   return (
//     <TableBody>
//       <Box margin={1}>
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <div>
//             {isEdit ? (
//               <div>
//                 {rows.length !== 0 && (
//                   <div>
//                     {disable ? (
//                       <Button disabled align="right" onClick={handleSave}>
//                         <DoneIcon />
//                         SAVE
//                       </Button>
//                     ) : (
//                       <Button align="right" onClick={handleSave}>
//                         <DoneIcon />
//                         SAVE
//                       </Button>
//                     )}
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <div>
//                 <Button align="right" onClick={handleEdit}>
//                   <CreateIcon />
//                   EDIT
//                 </Button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* <TableRow align="center"></TableRow> */}

//         <div className="testing">
//           <div className="inner-testing">
//             <TableContainer component={Paper}>
//               <Table
//                 // className={classes.table}
//                 // size="small"
//                 sx={{ minWidth: 65, border: "3px solid grey" }}
//                 aria-label="simple table"
//               >
//                 <TableHead sx={{ paddingRight: "30px" }}>
//                   <TableRow>
//                     <TableCell sx={tableCellStyle}>Title</TableCell>
//                     <TableCell sx={tableCellStyle}>Rating</TableCell>
//                     {/* <TableCell align="center"></TableCell> */}
//                   </TableRow>
//                 </TableHead>

//                 <TableBody>
//                   {props.movieData.map((movie) => {
//                     return (
//                       <div>
//                         <TableRow
//                           key={movie.name}
//                           sx={{
//                             "&:last-child td, &:last-child th": { border: 0 },
//                           }}
//                         >
//                           {isEdit ? (
//                             <div>
//                               <TableCell padding="none">
//                                 <input
//                                   value={movie.title}
//                                   name="title"
//                                   onChange={(e) => handleInputChange(e)}
//                                 />
//                               </TableCell>
//                               <TableCell padding="none">
//                                 <input
//                                   value={movie.vote_average}
//                                   name="vote_average"
//                                 />
//                               </TableCell>
//                             </div>
//                           ) : (
//                             <div>
//                               <TableRow
//                                 key={movie.name}
//                                 sx={{
//                                   "&:last-child td, &:last-child th": {
//                                     border: 0,
//                                   },
//                                 }}
//                               >
//                                 <TableCell align="center">
//                                   {movie.title}
//                                 </TableCell>
//                                 <TableCell align="center">
//                                   {movie.vote_average}
//                                 </TableCell>
//                               </TableRow>
//                             </div>
//                           )}
//                         </TableRow>
//                       </div>
//                     );
//                   })}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </div>
//         </div>
//       </Box>
//     </TableBody>
//   );
// }

// export default RatingDataTest;

// import React, { useState } from "react";
// import "./RatingDataTest.css";
// import TestData from "../movieData.json";

// import Paper from "@mui/material/Paper";
// import { EditingState } from "@devexpress/dx-react-grid";
// import {
//   Grid,
//   Table,
//   TableHeaderRow,
//   TableEditRow,
//   TableEditColumn,
// } from "@devexpress/dx-react-grid-material-ui";
// import { generateRows, defaultColumnValues } from "../Header/generator";

// const getRowId = (row) => row.id;

// const RatingDataTest = (props) => {
//   const [columns] = useState([
//     { name: "name", title: "Title" },
//     { name: "gender", title: "Rating" },
//   ]);

//   // const [rows, setRows] = useState(TestData);
//   const [rows, setRows] = useState(
//     generateRows({
//       columnValues: { id: ({ index }) => index, ...defaultColumnValues },
//       length: 8,
//     })
//   );

//   console.log({ rowsDataForTesting: rows });

//   const commitChanges = ({ added, changed, deleted }) => {
//     let changedRows;
//     if (added) {
//       const startingAddedId =
//         rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
//       changedRows = [
//         ...rows,
//         ...added.map((row, index) => ({
//           id: startingAddedId + index,
//           ...row,
//         })),
//       ];
//     }
//     if (changed) {
//       changedRows = rows.map((row) =>
//         changed[row.id] ? { ...row, ...changed[row.id] } : row
//       );
//     }
//     if (deleted) {
//       const deletedSet = new Set(deleted);
//       changedRows = rows.filter((row) => !deletedSet.has(row.id));
//     }
//     setRows(changedRows);
//   };

//   return (
//     <div className="rating-data-window">
//       <div className="rating-data-inner-window">
//         <Paper>
//           <Grid rows={rows} columns={columns} getRowId={getRowId}>
//             {console.log({ rowsinGrid: rows, columnsinGrid: columns })}
//             <EditingState onCommitChanges={commitChanges} />
//             <Table />
//             <TableHeaderRow />
//             <TableEditRow />
//             <TableEditColumn showAddCommand showEditCommand showDeleteCommand />
//           </Grid>
//         </Paper>
//       </div>
//     </div>
//   );
// };

// export default RatingDataTest;

import * as React from "react";
import TestData from "../movieData.json";
import "./DataGrid.css";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DataGrid, GridCellModes } from "@mui/x-data-grid";
import { MoveToInbox } from "@material-ui/icons";
// import {
//   randomCreatedDate,
//   randomTraderName,
//   randomUpdatedDate,
// } from "@mui/x-data-grid-generator";
console.log(TestData);

function EditToolbar(props) {
  const { selectedCellParams, cellMode, cellModesModel, setCellModesModel } =
    props;

  const handleSaveOrEdit = () => {
    if (!selectedCellParams) {
      return;
    }
    const { id, field } = selectedCellParams;
    if (cellMode === "edit") {
      setCellModesModel({
        ...cellModesModel,
        [id]: { ...cellModesModel[id], [field]: { mode: GridCellModes.View } },
      });
    } else {
      setCellModesModel({
        ...cellModesModel,
        [id]: { ...cellModesModel[id], [field]: { mode: GridCellModes.Edit } },
      });
    }
  };

  const handleCancel = () => {
    if (!selectedCellParams) {
      return;
    }
    const { id, field } = selectedCellParams;
    setCellModesModel({
      ...cellModesModel,
      [id]: {
        ...cellModesModel[id],
        [field]: { mode: GridCellModes.View, ignoreModifications: true },
      },
    });
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        p: 1,
      }}
    >
      <Button
        onClick={handleSaveOrEdit}
        onMouseDown={handleMouseDown}
        disabled={!selectedCellParams}
        variant="outlined"
      >
        {cellMode === "edit" ? "Save" : "Edit"}
      </Button>
      <Button
        onClick={handleCancel}
        onMouseDown={handleMouseDown}
        disabled={cellMode === "view"}
        variant="outlined"
        sx={{ ml: 1 }}
      >
        Cancel
      </Button>
    </Box>
  );
}

EditToolbar.propTypes = {
  cellMode: PropTypes.oneOf(["edit", "view"]).isRequired,
  cellModesModel: PropTypes.object.isRequired,
  selectedCellParams: PropTypes.shape({
    field: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }),
  setCellModesModel: PropTypes.func.isRequired,
};

export default function RatingDataTest(props) {
  const [selectedCellParams, setSelectedCellParams] = React.useState(null);
  const [cellModesModel, setCellModesModel] = React.useState({});

  const handleCellFocus = React.useCallback((event) => {
    const row = event.currentTarget.parentElement;
    const id = row.dataset.id;
    const field = event.currentTarget.dataset.field;
    setSelectedCellParams({ id, field });
  }, []);

  const cellMode = React.useMemo(() => {
    if (!selectedCellParams) {
      return "view";
    }
    const { id, field } = selectedCellParams;
    return cellModesModel[id]?.[field]?.mode || "view";
  }, [cellModesModel, selectedCellParams]);

  const handleCellKeyDown = React.useCallback(
    (params, event) => {
      if (cellMode === "edit") {
        event.defaultMuiPrevented = true;
      }
    },
    [cellMode]
  );

  return (
    <div className="rating-data-window">
      <div className="rating-data-inner-window">
        {/* <div style={{ height: 700, width: "100%" }}> */}
        {/* {props.movieData.map((movie) => ( */}
        <DataGrid
          // rows={movie.title}
          rows={rows}
          columns={columns}
          onCellKeyDown={handleCellKeyDown}
          cellModesModel={cellModesModel}
          onCellModesModelChange={(model) => setCellModesModel(model)}
          components={{
            Toolbar: EditToolbar,
          }}
          componentsProps={{
            toolbar: {
              cellMode,
              selectedCellParams,
              setSelectedCellParams,
              cellModesModel,
              setCellModesModel,
            },
            cell: {
              onFocus: handleCellFocus,
            },
          }}
          experimentalFeatures={{ newEditingApi: true }}
        />
        {/* ))} */}
      </div>
    </div>
  );
}

const columns = [
  { field: "name", headerName: "Title", width: 480, editable: true },
  {
    field: "age",
    headerName: "Rating",
    type: "number",
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    name: "Black Widow",
    age: 8,
  },
  {
    id: 2,
    name: "Space Jam: A New Legacy",
    age: 7.9,
  },
  {
    id: 3,
    name: "The Forever Purge",
    age: 7.7,
  },
  {
    id: 4,
    name: "The Boss Baby: Family Business",
    age: 8,
  },
  {
    id: 5,
    name: "The Tomorrow War",
    age: 8.3,
  },
  {
    id: 6,
    name: "Luca",
    age: 8,
  },
  {
    id: 7,
    name: "Wrath of Man",
    age: 8.3,
  },
  {
    id: 8,
    name: "Infinite",
    age: 8,
  },
  {
    id: 9,
    name: "Peter Rabbit 2: The Runaway",
    age: 8.3,
  },
  {
    id: 10,
    name: "F9",
    age: 8.3,
  },
  {
    id: 11,
    name: "Cruella",
    age: 8.9,
  },
  {
    id: 12,
    name: "No Sudden Move",
    age: 8.3,
  },
  {
    id: 13,
    name: "Fear Street: 1666",
    age: 6.2,
  },
  {
    id: 14,
    name: "A Quiet Place Part II",
    age: 8.3,
  },
  {
    id: 15,
    name: "Teen Titans Go! See Space Jam",
    age: 9,
  },
  {
    id: 16,
    name: "Fear Street: 1994",
    age: 7.9,
  },
  {
    id: 17,
    name: "Awake",
    age: 7.6,
  },
  {
    id: 18,
    name: "Army of the Dead",
    age: 7,
  },
  {
    id: 18,
    name: "Mortal Kombat",
    age: 8.1,
  },
];
