import { makeStyles } from "@material-ui/core/styles";

const headerStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    backgroundColor: "#fbc02d",
  },
  title: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0 25px",
  },
  buttons: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  links: {
    textDecoration: "none",
    padding: "0 25px",
  },
}));

export default headerStyles;
