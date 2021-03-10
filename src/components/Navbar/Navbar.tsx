import React from "react";
import {
  Avatar,
  Badge,
  Button,
  ButtonBase,
  Container,
  Grid,
} from "@material-ui/core";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import UserInterface from "../../redux/reduccers/user/userInterface";
import {
  change_profile_photo,
  change_pre_profile_photo,
} from "../../redux/actions/users/change_profile_photo";
import { HomeOutlined } from "@material-ui/icons";
import Tiffin from "../../redux/reduccers/tiffin/TiffenInterface";
const Navbar = () => {
  const dispatch = useDispatch();
  const {
    user,
    tiffins,
  }: { user: UserInterface; tiffins: Tiffin[] } = useSelector((state: any) => {
    return {
      user: state.user,
      tiffins: state.tiffins,
    };
  });
  return (
    <div className={[styles.Navbar_Container].join(" ")}>
      <Container className={[styles.Navbar_container_insider].join(" ")}>
        <Grid container style={{ height: "100%" }}>
          <Grid xs={4} item container justify="flex-start" alignItems="center">
            <Button onClick={() => dispatch(change_pre_profile_photo())}>
              Back
            </Button>
          </Grid>
          <Grid xs={4} item container justify="center" alignItems="center">
            hello
          </Grid>
          <Grid xs={4} item container justify="flex-end" alignItems="center">
            <Badge
              badgeContent={tiffins.reduce(
                (acc: any, val) => acc + (val.isInCart ? 1 : 0),
                0
              )}
              color="secondary"
            >
              <ButtonBase
                style={{ borderRadius: "50%" }}
                onClick={() => {
                  dispatch(change_profile_photo());
                }}
              >
                <Avatar src={user.profilePhoto} />
              </ButtonBase>
            </Badge>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Navbar;
