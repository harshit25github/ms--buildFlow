import { Avatar, Button, Container, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/constants/actions";
import Tiffin from "../redux/reduccers/tiffin/TiffenInterface";
import UserInterface from "../redux/reduccers/user/userInterface";

interface HomeProps {
  data: any;
}

const Home = (props: HomeProps) => {
  const dispatch = useDispatch();
  const { tiffins }: { tiffins: Tiffin[] } = useSelector((state: any) => {
    return {
      tiffins: state.tiffins,
    };
  });
  console.log(tiffins);
  return (
    <div>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          {tiffins.map((data) => {
            return (
              <Grid item xs={12} md={6} container>
                <Grid item xs={12}>
                  <Avatar src={data.image} alt="ma" />
                  <Button
                    onClick={() =>
                      dispatch({
                        type: addToCart,
                        payload: { id: data._id },
                      })
                    }
                  >
                    att to cart
                  </Button>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
