export enum Capacity {
  small = 'small',
  medium = 'medium',
  large = 'large',
  all = 'all',
}

export const getCapacityKey = (key: string) => {
  return key as keyof typeof Capacity;
};

export const getCapacityValue = (key: string) => {
  return Capacity[getCapacityKey(key)];
};
