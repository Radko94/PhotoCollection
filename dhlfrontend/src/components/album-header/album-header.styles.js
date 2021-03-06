import { makeStyles } from "@material-ui/core/styles";

const headerStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    backgroundColor: "#fdd835",
  },
  title: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0 2%",
  },
  buttons: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  links: {
    textDecoration: "none",
    padding: "0 3%",
  },
}));

export default headerStyles;
