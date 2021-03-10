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

export default Tiffin;
