// import { Button, Modal, Typography } from "@mui/material";
// import { Box } from "@mui/system";
// import React, { useState } from "react";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// const divStyle = {
//   position: "absolute",
//   top: "10%",
//   left: "50%",
// };

// const MovieModal = () => {
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button sx={divStyle} onClick={handleOpen}>
//         Open modal
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default MovieModal;

import { Divider } from "@mui/material";
import React from "react";
import "./MovieModal.css";

// const Card = (props) => {
//   return (
//     <div className="card">
//       <div
//         className="image"
//         style={{
//           backgroundImage: `url(${props.poster_path})`,
//         }}
//       />
//       <div className="info">
//         <h2>{props.title}</h2>
//         <h4>{props.original_language}</h4>
//         <p>{props.overview}</p>
//       </div>
//     </div>
//   );
// };

const MovieModal = (props) => {
  return (
    // <div className="page">
    <div className="layout">
      {/* <div className="card"> */}
      <main className="image">
        <img src={props.poster_path} alt="poster" />
      </main>
      <article className="info">
        <h2>Moviee: {props.title}</h2>
        <h5>Language: {props.original_language}</h5>
        <h5>Release Date: {props.release_date}</h5>
        <p>
          <span className="movie-modal-overview">Overview: </span>
          {props.overview}
        </p>
      </article>
      {/* </div> */}
    </div>
    // </div>
  );

  // return (
  //   <div className="movie-modal-window">
  //     <div className="movie-modal-inner-window">
  //       <button className="movie-modal-close-btn" onClick={props.close}>
  //         Close
  //       </button>
  //       <h2>Movie: {props.title}</h2>
  //       <h5>Language: {props.original_language}</h5>
  //       <h5>Release Date: {props.release_date}</h5>
  //       <p>
  //         <span className="movie-modal-overview">Overview: </span>
  //         {props.overview}
  //       </p>
  //     </div>
  //   </div>
  // );
};

export default MovieModal;
