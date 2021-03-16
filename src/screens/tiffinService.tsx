import React from "react";
import { connect } from "react-redux";
import TiffinCard from "../components/cards/tiffincard/tiffinCard";

const TiffinService = (props: any) => {
  console.log(props);

  const tiffinService = props.data.find((data: any) => {
    return data._id === props.match.params.id;
  });
  console.log(tiffinService);
  const {
    plan: {
      Nonveg_plan: { Diamond, Gold, Silver },
    },
  } = tiffinService;
  console.log(Diamond);

  return (
    <div>
      <TiffinCard tiffinName={tiffinService.tiffinservice} />
    </div>
  );
};

const mapPropsToState = (state: any) => {
  return {
    data: state.tiffins,
  };
};

export default connect(mapPropsToState)(TiffinService);
