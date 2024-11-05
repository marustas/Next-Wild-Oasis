'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

const initialRange = { from: undefined, to: undefined };

const ReservationContext = createContext();

export default function ReservationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [range, setRange] = useState(initialRange);
  const resetRange = () => {
    setRange(initialRange);
  };

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservationContext() {
  const context = useContext(ReservationContext);

  if (!context) {
    throw new Error('Reservation context outside provider');
  }

  return context;
}
