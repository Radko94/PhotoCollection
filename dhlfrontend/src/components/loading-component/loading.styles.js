import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fbc02d",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  circle: {
    width: "25% !important",
    height: "25% !important",
    color: "#c49000 !important",
  },
}));

export default useStyles;
