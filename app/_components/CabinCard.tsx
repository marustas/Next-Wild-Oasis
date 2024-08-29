import { CabinCardProps } from '../_models/cabin';

export default function CabinCard({ cabin }: CabinCardProps) {
  return <div>{cabin.name}</div>;
}
