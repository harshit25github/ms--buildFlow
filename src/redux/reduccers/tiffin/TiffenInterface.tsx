type tiffenMembershipType = "gold" | "silver" | "diamond";
type tiffenPlan = "Nonveg_plan" | "veg_plan";

interface tiffenType {
  plan: tiffenPlan;
  membershipType: tiffenMembershipType;
}

interface Tiffin {
  name: string;
  id: string;
  price: number;
  type: tiffenType;
}

export default Tiffin;
