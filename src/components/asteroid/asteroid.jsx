import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function AsteroidComponent(props) {
  const { onClose, asteroid } = props;
  const { name, nasa_jpl_url, is_potentially_hazardous_asteroid } = asteroid;

  return (
    <div>
      <Dialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={true}
      >
        <DialogTitle id="customized-dialog-title" onClose={onClose}>
          Asteroid
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom><strong>name :</strong>{name}</Typography>
          <Typography gutterBottom><strong>nasa_jpl_url :</strong> {nasa_jpl_url}</Typography>
          <Typography gutterBottom>
          <strong>is_potentially_hazardous_asteroid:</strong>
            {is_potentially_hazardous_asteroid.toString()}
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
