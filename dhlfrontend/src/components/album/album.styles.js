import { makeStyles } from "@material-ui/core";

const albumStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "#ffa4a2",
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
}));

export default albumStyles;
