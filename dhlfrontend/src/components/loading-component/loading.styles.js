import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdd835",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  circle: {
    width: "25% !important",
    height: "25% !important",
    color: "#c6a700 !important",
  },
}));

export default useStyles;
