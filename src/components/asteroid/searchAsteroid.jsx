import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { getAsteroids, getAsteroidByID } from "../../services/asteroidService";
import AsteroidComponent from "../asteroid/asteroid";
import { getRandomArrayIndex } from "../../utils/generalUtility";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function SearchAsteroidComponent() {
  const classes = useStyles();
  const [asteroidID, setAsteroidID] = useState();
  const [asteroid, setAsteroid] = useState();

  const handleChange = (e) => {
    setAsteroidID(e.target.value);
  };

  const handleClose = () => {
    setAsteroid();
    setAsteroidID();
  };

  const onRandomAsteroidSelection = async () => {
    const { data } = await getAsteroids();
    const randomAsteroid =
      data.near_earth_objects[
        getRandomArrayIndex(data.near_earth_objects.length)
      ];
    setAsteroidID(randomAsteroid.id);
    fetchAsteroidAndDisplay(randomAsteroid.id);
  };

  const fetchAsteroidAndDisplay = async (asteroidID) => {
    const { data } = await getAsteroidByID(asteroidID);

    const { name, nasa_jpl_url, is_potentially_hazardous_asteroid } = data;
    setAsteroid({ name, nasa_jpl_url, is_potentially_hazardous_asteroid });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Enter Asteroid ID"
        variant="outlined"
        onChange={handleChange}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={onRandomAsteroidSelection}
      >
        Random Asteroid
      </Button>
      <Button
        variant="contained"
        disabled={!(asteroidID && asteroidID.length > 0)}
        onClick={() => fetchAsteroidAndDisplay(asteroidID)}
      >
        Submit
      </Button>
      {asteroid ? (
        <AsteroidComponent asteroid={asteroid} onClose={handleClose} />
      ) : null}
    </form>
  );
}
