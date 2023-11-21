interface Stop {
  OrderNo: number;
  StopNo: number;
  StopLocationAddress: string;
  StopLocationPlaceId: string;
  StopLocationLatLng: string;
  StopLocationDtTm: string;
  StopPsgrs: number;
  Bkgs: Booking[];
}
interface Booking {
  idBooking: number;
  PsgrName: string;
  BkgOnOff: 'On' | 'Off';
  BkgOnOffAct: string | null;
  BkgLocationDtTmAct: string | null;
  BkgDriverInfo: string;
  Accounts_idAccount: number;
  PsgrEmail: string;
  PsgrTelno: string;
  ParentInfo: Parent[];
}
interface Parent {
  ParentName: string;
  ParentTelno: string;
  ParentEmail: string;
}
interface Passengers {
  Passengers: Passenger[];
}
interface Passenger {
  idBooking: number;
  PsgrName: string;
  OnLocationAddress: string;
  OnLocationPlaceId: string;
  OnLocationLatLng: string;
  OnLocationDtTm: string;
  OffLocationAddress: string;
  OffLocationPlaceId: string;
  OffLocationLatLng: string;
  StopLocationDtTm: string;
  BkgDriverInfo: string;
  Accounts_idAccount: number;
  PsgrEmail: string;
  PsgrTelno: string;
  ParentInfo: Parent[];
}

function StopsToPsgrs(stops: Stop[]): Passengers {
  const passengers: Passenger[] = [];  
  stops.forEach(stop => {
    stop.Bkgs.forEach(booking => {
      const passengerIndex = passengers.findIndex(
        p => p.idBooking === booking.idBooking
      );

      if (passengerIndex === -1) {
        passengers.push({
          idBooking: booking.idBooking,
          PsgrName: booking.PsgrName,
          OnLocationAddress: stop.StopLocationAddress,
          OnLocationPlaceId: stop.StopLocationPlaceId,
          OnLocationLatLng: stop.StopLocationLatLng,
          OnLocationDtTm: stop.StopLocationDtTm,
          OffLocationAddress: '',
          OffLocationPlaceId: '',
          OffLocationLatLng: '',
          StopLocationDtTm: '',
          BkgDriverInfo: booking.BkgDriverInfo,
          Accounts_idAccount: booking.Accounts_idAccount,
          PsgrEmail: booking.PsgrEmail,
          PsgrTelno: booking.PsgrTelno,
          ParentInfo: booking.ParentInfo,
        });
      } else {
        const passenger = passengers[passengerIndex];
        if (booking.BkgOnOff === 'Off') {
          passenger.OffLocationAddress = stop.StopLocationAddress;
          passenger.OffLocationPlaceId = stop.StopLocationPlaceId;
          passenger.OffLocationLatLng = stop.StopLocationLatLng;
          passenger.StopLocationDtTm = stop.StopLocationDtTm;
        }
      }
    });
  });

  return { Passengers: passengers };
}

const stopsJson = `{ [/* ...stops data.....*/] }`;

const stopsData: { Stops: Stop[] } = JSON.parse(stopsJson);

const passengersData = StopsToPsgrs(stopsData.Stops);
const passengersJson = JSON.stringify(passengersData, null, 2);

console.log(passengersJson);
