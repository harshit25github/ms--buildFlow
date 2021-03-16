import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TiffinCard from "../components/cards/tiffincard/tiffinCard";
import { addTiffins } from "../redux/actions/tiffin/tiffinAction";

class Tiffin extends Component<any, any> {
  state = {
    val: "",
  };
  componentDidMount() {
    this.props.selectionTiffin();
  }
  render() {
    const tiffinsCard = this.props.Tiffin.filter((data: any) => {
      return data.tiffinservice
        .toLowerCase()
        .includes(this.state.val.toLowerCase());
    }).map((data: any) => {
      return (
        <Link to={"/tiffin_service/" + data._id}>
          <TiffinCard tiffinName={data.tiffinservice} />;
        </Link>
      );
    });

    return (
      <div>
        <input
          placeholder="search by tiffin name"
          onChange={(e) => {
            this.setState({ val: e.target.value });
          }}
        />
        {tiffinsCard}
      </div>
    );
  }
}

const maptoStateProps = (state: any) => {
  console.log(state.tiffins);

  return {
    Tiffin: state.tiffins,
  };
};

const maptoDispatchProps = (dispatch: any) => {
  return {
    selectionTiffin: () => {
      dispatch(addTiffins());
    },
  };
};

export default connect(maptoStateProps, maptoDispatchProps)(Tiffin);
