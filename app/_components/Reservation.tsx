import React from 'react';
import DateSelector, { CustomDate } from './DateSelector';
import ReservationForm from './ReservationForm';
import { getBookedDatesByCabinId, getSettings } from '../_lib/data-service';
import { Cabin } from '../_models/cabin';

export default async function Reservation({ cabin }: { cabin: Cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <>
      <div className="grid min-h-[400px] grid-cols-2 border border-primary-800">
        <DateSelector
          settings={settings}
          bookedDates={bookedDates as CustomDate[]}
          cabin={cabin}
        />
        <ReservationForm cabin={cabin} />
      </div>
    </>
  );
}
