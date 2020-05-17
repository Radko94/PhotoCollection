import { makeStyles } from "@material-ui/core";

const albumStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "#fdd835",
  },
  gridList: {
    width: "100%",
    height: "100%",
    transform: "translateZ(0)",
  },
  titleBar: {
    fontFamily: '"Balsamiq Sans", cursive',
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
  noElements: {
    height: "86vh !important",
    width: "100% !important",
    padding: "0 5% !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "37px",
    textAlign: "center",
  },
}));

export default albumStyles;
