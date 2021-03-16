type tiffenMembershipType = "gold" | "silver" | "diamond";
type tiffenPlan = "Nonveg_plan" | "veg_plan";

interface tiffenType {
  plan: tiffenPlan;
  membershipType: tiffenMembershipType;
}

interface Tiffin {
  tiffinservice: string;
  pickup: {
    price: string;
  };
  _id: string;
  meal_for: { lunch: boolean; Dinner: boolean; Both: boolean };
  isInCart: boolean;
  image: string;
}

export interface TiffinService {
  plan: {
    veg_plan: {
      [key: string]: {
        _id: string;
        Weekly_price: string;
        Monthly_price: string;
        tiffinservice: string;
        image: string;
      };
    };
    Nonveg_plan: {
      [key: string]: {
        _id: string;
        Weekly_price: string;
        Monthly_price: string;
        tiffinservice: string;
        image: string;
      };
    };
  };
}

export default Tiffin;
