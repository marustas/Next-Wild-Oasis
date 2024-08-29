import { Cabin } from "../_models/cabin";

interface CabinCardProps {
  cabin: Cabin;
}

export default function CabinCard({ cabin }: CabinCardProps) {
  return <div>{cabin.name}</div>;
}
