import { Cabin } from "./cabin";

export type Booking = {
    id: number,
    guestId: number,
    startDate: Date,
    endDate: Date,
    numNights: number,
    totalPrice: number,
    numGuests: number,
    status: string,
    created_at: Date,
    cabins: Cabin
}