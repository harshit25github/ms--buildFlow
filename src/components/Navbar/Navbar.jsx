import {
  Grid,
  Container,
  Badge,
  ButtonBase,
  Avatar,
  Button,
} from "@material-ui/core";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Styles.module.css";
class Navbar extends Component {
  render() {
    return (
      <div className={[styles.Navbar_Container].join(" ")}>
        <Container className={[styles.Navbar_container_insider].join(" ")}>
          <Grid container style={{ height: "100%" }}>
            <Grid
              xs={4}
              item
              container
              justify="flex-start"
              alignItems="center"
            >
              <NavLink to="/home"> home </NavLink>
            </Grid>

            <Grid xs={4} item container justify="center" alignItems="center">
              <NavLink to="/tiffin">tiffins</NavLink>
            </Grid>
            <Grid xs={4} item container justify="flex-end" alignItems="center">
              <Badge color="secondary">
                <ButtonBase style={{ borderRadius: "50%" }}>
                  <Avatar />
                </ButtonBase>
              </Badge>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
export default Navbar;
