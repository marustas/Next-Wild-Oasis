type Cabin = {
  id: number;
  name: string;
};

export interface CabinCardProps {
  cabin: Cabin;
}

export interface CabinPageProps {
  cabins: Cabin[];
}
