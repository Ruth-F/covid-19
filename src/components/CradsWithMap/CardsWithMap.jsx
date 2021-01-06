import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core"; //2
//import Card from "@material-ui/core/Card";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./CardsWithMap.module.css";
const CardsWithMap = ({ data }) => {
  if (!data) {
    return "Loading....";
  }
  var dataArray = [];
  for (const key in data) {
    dataArray.push(new Array(key, data[key]));
  }
  console.log(dataArray);
  return (
    <div className={styles.container}>
      <Divider />
      <h1 className={styles.container}>
        Covid-19 results in the world - by map():
      </h1>
      <Grid container spacing={3} justify="center">
        {dataArray.map((value, index) => {
          if (dataArray[index][0] !== "lastUpdate") {
            return (
              <Grid
                key={index}
                item
                component={Card}
                xs={12}
                md={3}
                className={cx(styles[dataArray[index][0]])}
              >
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    {dataArray[index][0]} :
                  </Typography>
                  <Typography variant="h5">
                    <CountUp
                      start={0}
                      end={dataArray[index][1].value}
                      duration={2.75}
                    ></CountUp>
                  </Typography>
                  <Typography color="textSecondary">
                    {new Date(dataArray[3][1]).toDateString()}
                  </Typography>
                  <Typography>
                    Number of {dataArray[index][0]} cases of Covid-19
                  </Typography>
                </CardContent>
              </Grid>
            );
          }
        })}
      </Grid>
    </div>
  );
};
export default CardsWithMap;
