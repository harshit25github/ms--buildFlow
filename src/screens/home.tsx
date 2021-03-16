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
  return <div>this home</div>;
};

export default Home;
