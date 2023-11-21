"use strict";
function StopsToPsgrs(stops) {
    var passengers = [];
    stops.forEach(function (stop) {
        stop.Bkgs.forEach(function (booking) {
            var passengerIndex = passengers.findIndex(function (p) { return p.idBooking === booking.idBooking; });
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
            }
            else {
                var passenger = passengers[passengerIndex];
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
// Example usage
var stopsJson = `{
    "Stops": [
      {
         "OrderNo":1,
         "StopNo":8,
         "StopLocationAddress":"Blanche/30th Str",
         "StopLocationPlaceId":"some googleId from server",
         "StopLocationLatLng":"-118.40966033935548, 33.897762298583984",
         "StopLocationDtTm":"2023-09-19 23:00:01",
         "MileageGps": null,
         "AtStopDtTmAct":null,
         "LeftStopDtTmAct":null,
         "StopPsgrs":1,
         "Bkgs":[
            {
               "idBooking":10408,
               "PsgrName":"John D",
               "BkgOnOff":"On",
               "BkgOnOffAct":null,
               "BkgLocationDtTmAct":null,
               "BkgDriverInfo":"very young caution",
               "Accounts_idAccount":6070,
               "PsgrEmail":"x6070@gmail.com",
               "PsgrTelno":"3104568557",
               "ParentInfo":[
                  {
                     "ParentName":"JoeK",
                     "ParentTelno":"3106662212",
                     "ParentEmail":"Joe6070@gmail.com"
                  },
                  {
                     "ParentName":"KathyK",
                     "ParentTelno":"3106662215",
                     "ParentEmail":"KathyKabc@gmail.com"
                  }
               ]
            }
         ]
      },
      {
         "OrderNo":2,
         "StopNo":5,
         "StopLocationAddress":"Blanche/Bell",
         "StopLocationPlaceId":"some googleId from server",
         "StopLocationLatLng":"-118.40962982177734, 33.894615173339844",
         "StopLocationDtTm":"2023-09-19 23:05:01",
         "MileageGps": null,
         "AtStopDtTmAct":null,
         "LeftStopDtTmAct":null,
         "StopPsgrs":2,
         "Bkgs":[
            {
               "idBooking":10405,
               "PsgrName":"John D",
               "BkgOnOff":"On",
               "BkgOnOffAct":null,
               "BkgLocationDtTmAct":null,
               "BkgDriverInfo":"",
               "Accounts_idAccount":5942,
               "PsgrEmail":"x5942@gmail.com",
               "PsgrTelno":"3104568557",
               "ParentInfo":[
                  {
                     "ParentName":"JoeK",
                     "ParentTelno":"3106662212",
                     "ParentEmail":"Joe5942@gmail.com"
                  },
                  {
                     "ParentName":"KathyK",
                     "ParentTelno":"3106662215",
                     "ParentEmail":"KathyKabc@gmail.com"
                  }
               ]
            },
            {
               "idBooking":10405,
               "PsgrName":"John D",
               "BkgOnOff":"On",
               "BkgOnOffAct":null,
               "BkgLocationDtTmAct":null,
               "BkgDriverInfo":"",
               "Accounts_idAccount":6707,
               "PsgrEmail":"x6707@gmail.com",
               "PsgrTelno":"3104568557",
               "ParentInfo":[
                  {
                     "ParentName":"JoeK",
                     "ParentTelno":"3106662212",
                     "ParentEmail":"Joe6707@gmail.com"
                  },
                  {
                     "ParentName":"KathyK",
                     "ParentTelno":"3106662215",
                     "ParentEmail":"KathyKabc@gmail.com"
                  }
               ]
            }
         ]
      },
      {
         "OrderNo":3,
         "StopNo":6,
         "StopLocationAddress":"Palm/35st Str",
         "StopLocationPlaceId":"some googleId from server",
         "StopLocationLatLng":"-118.40962982177734, 33.894615173339844",
         "StopLocationDtTm":"2023-09-19 23:10:01",
         "MileageGps": null,
         "AtStopDtTmAct":null,
         "LeftStopDtTmAct":null,
         "StopPsgrs":1,
         "Bkgs":[
            {
               "idBooking":10406,
               "PsgrName":"John D",
               "BkgOnOff":"On",
               "BkgOnOffAct":null,
               "BkgLocationDtTmAct":null,
               "Accounts_idAccount":5989,
               "PsgrEmail":"x5989@gmail.com",
               "PsgrTelno":"3104568557",
               "ParentInfo":[
                  {
                     "ParentName":"JoeK",
                     "ParentTelno":"3106662212",
                     "ParentEmail":"Joe5989@gmail.com"
                  },
                  {
                     "ParentName":"KathyK",
                     "ParentTelno":"3106662215",
                     "ParentEmail":"KathyKabc@gmail.com"
                  }
               ]
            }
         ]
      },
      {
         "OrderNo":4,
         "StopNo":1,
         "StopLocationAddress":"Poinsettia/35th",
         "StopLocationPlaceId":"some googleId from server",
         "StopLocationLatLng":"-118.4007797241211, 33.900020599365234",
         "StopLocationDtTm":"2023-09-19 23:12:01",
         "MileageGps": null,
         "AtStopDtTmAct":null,
         "LeftStopDtTmAct":null,
         "StopPsgrs":1,
         "Bkgs":[
            {
               "idBooking":10400,
               "PsgrName":"John D",
               "BkgOnOff":"On",
               "BkgOnOffAct":null,
               "BkgLocationDtTmAct":null,
               "BkgDriverInfo":"",
               "Accounts_idAccount":5155,
               "PsgrEmail":"x5155@gmail.com",
               "PsgrTelno":"3104568557",
               "ParentInfo":[
                  {
                     "ParentName":"JoeK",
                     "ParentTelno":"3106662212",
                     "ParentEmail":"JoeKabc@gmail.com"
                  },
                  {
                     "ParentName":"KathyK",
                     "ParentTelno":"3106662215",
                     "ParentEmail":"KathyKabc@gmail.com"
                  }
               ]
            }
         ]
      },
      {
         "OrderNo":5,
         "StopNo":3,
         "StopLocationAddress":"Ardmore/19th Street",
         "StopLocationPlaceId":"some googleId from server",
         "StopLocationLatLng":"-118.40933227539062, 33.8911247253418",
         "StopLocationDtTm":"2023-09-19 23:17:01",
         "MileageGps": null,
         "AtStopDtTmAct":null,
         "LeftStopDtTmAct":null,
         "StopPsgrs":1,
         "Bkgs":[
            {
               "idBooking":10402,
               "PsgrName":"John D",
               "BkgOnOff":"On",
               "BkgOnOffAct":null,
               "BkgLocationDtTmAct":null,
               "BkgDriverInfo":"Broken leg needs assistance ",
               "Accounts_idAccount":5775,
               "PsgrEmail":"x5775@gmail.com",
               "PsgrTelno":"3104568557",
               "ParentInfo":[
                  {
                     "ParentName":"JoeK",
                     "ParentTelno":"3106662212",
                     "ParentEmail":"Joe5775@gmail.com"
                  },
                  {
                     "ParentName":"KathyK",
                     "ParentTelno":"3106662215",
                     "ParentEmail":"KathyKabc@gmail.com"
                  }
               ]
            }
         ]
      },
      {
         "OrderNo":6,
         "StopNo":4,
         "StopLocationAddress":"Poinsettia/8th Str",
         "StopLocationPlaceId":"some googleId from server",
         "StopLocationLatLng":"-118.4003677368164, 33.88378143310547",
         "StopLocationDtTm":"2023-09-19 23:22:01",
         "MileageGps": null,
         "AtStopDtTmAct":null,
         "LeftStopDtTmAct":null,
         "StopPsgrs":2,
         "Bkgs":[
            {
               "idBooking":10404,
               "PsgrName":"John D",
               "BkgOnOff":"On",
               "BkgOnOffAct":null,
               "BkgLocationDtTmAct":null,
               "BkgDriverInfo":"Something",
               "Accounts_idAccount":5858,
               "PsgrEmail":"x5858@gmail.com",
               "PsgrTelno":"3104568557",
               "ParentInfo":[
                  {
                     "ParentName":"JoeK",
                     "ParentTelno":"3106662212",
                     "ParentEmail":"Joe5858@gmail.com"
                  },
                  {
                     "ParentName":"KathyK",
                     "ParentTelno":"3106662215",
                     "ParentEmail":"KathyKabc@gmail.com"
                  }
               ]
            },
            {
               "idBooking":10414,
               "PsgrName":"John D",
               "BkgOnOff":"On",
               "BkgOnOffAct":null,
               "BkgLocationDtTmAct":null,
               "BkgDriverInfo":"",
               "Accounts_idAccount":6470,
               "PsgrEmail":"x6470@gmail.com",
               "PsgrTelno":"3104568557",
               "ParentInfo":[
                  {
                     "ParentName":"JoeK",
                     "ParentTelno":"3106662212",
                     "ParentEmail":"Joe6470@gmail.com"
                  },
                  {
                     "ParentName":"KathyK",
                     "ParentTelno":"3106662215",
                     "ParentEmail":"KathyKabc@gmail.com"
                  }
               ]
            }
         ]
      },
      {
         "OrderNo":7,
         "StopNo":2,
         "StopLocationAddress":"Ardmore/2nd Str",
         "StopLocationPlaceId":"some googleId from server",
         "StopLocationLatLng":"-118.40233612060548, 33.8800163269043",
         "StopLocationDtTm":"2023-09-19 23:31:01",
         "MileageGps": null,
         "AtStopDtTmAct":null,
         "LeftStopDtTmAct":null,
         "StopPsgrs":1,
         "Bkgs":[
            {
               "idBooking":10402,
               "PsgrName":"John D",
               "BkgOnOff":"On",
               "BkgOnOffAct":null,
               "BkgLocationDtTmAct":null,
               "BkgDriverInfo":"",
               "Accounts_idAccount":5265,
               "PsgrEmail":"x5265@gmail.com",
               "PsgrTelno":"3104568557",
               "ParentInfo":[
                  {
                     "ParentName":"JoeK",
                     "ParentTelno":"3106662212",
                     "ParentEmail":"JoeKabc@gmail.com"
                  },
                  {
                     "ParentName":"KathyK",
                     "ParentTelno":"3106662215",
                     "ParentEmail":"KathyKabc@gmail.com"
                  }
               ]
            }
         ]
      },
      {
         "OrderNo":8,
         "StopNo":7,
         "StopLocationAddress":"23rd/Harkness",
         "StopLocationPlaceId":"some googleId from server",
         "StopLocationLatLng":"-118.40962982177734, 33.894615173339844",
         "StopLocationDtTm":"2023-09-19 23:41:01",
         "MileageGps": null,
         "AtStopDtTmAct":null,
         "LeftStopDtTmAct":null,
         "StopPsgrs":1,
         "Bkgs":[
            {
               "idBooking":10407,
               "PsgrName":"John D",
               "BkgOnOff":"On",
               "BkgOnOffAct":null,
               "BkgLocationDtTmAct":null,
               "BkgDriverInfo":"",
               "Accounts_idAccount":6048,
               "PsgrEmail":"x6048@gmail.com",
               "PsgrTelno":"3104568557",
               "ParentInfo":[
                  {
                     "ParentName":"JoeK",
                     "ParentTelno":"3106662212",
                     "ParentEmail":"Joe6048@gmail.com"
                  },
                  {
                     "ParentName":"KathyK",
                     "ParentTelno":"3106662215",
                     "ParentEmail":"KathyKabc@gmail.com"
                  }
               ]
            }
         ]
      },
      {
         "OrderNo":9,
         "StopNo":9999,
         "StopLocationAddress":"Mira Costa: Artesia EB",
         "StopLocationPlaceId":"some googleId from server",
         "StopLocationLatLng":"-118.387501713072, 33.8728016987128",
         "StopLocationDtTm":"2023-09-19 23:46:01",
         "MileageGps": null,
         "AtStopDtTmAct":null,
         "LeftStopDtTmAct":null,
         "StopPsgrs":9,
         "Bkgs":[
            {
               "idBooking":10407,
               "PsgrName":"John D",
               "BkgOnOff":"Off",
               "BkgOnOffAct":null,
               "BkgLocationDtTmAct":null,
               "BkgDriverInfo":"",
               "Accounts_idAccount":6048,
               "PsgrEmail":"x6048@gmail.com",
               "PsgrTelno":"3104568557",
               "ParentInfo":[
                  {
                     "ParentName":"JoeK",
                     "ParentTelno":"3106662212",
                     "ParentEmail":"Joe6048@gmail.com"
                  },
                  {
                     "ParentName":"KathyK",
                     "ParentTelno":"3106662215",
                     "ParentEmail":"KathyKabc@gmail.com"
                  }
               ]
            },
            {
               "idBooking":10408,
               "PsgrName":"John D",
               "BkgOnOff":"Off",
               "BkgOnOffAct":null,
               "BkgLocationDtTmAct":null,
               "BkgDriverInfo":"very young caution",
               "Accounts_idAccount":6070,
               "PsgrEmail":"x6070@gmail.com",
               "PsgrTelno":"3104568557",
               "ParentInfo":[
                  {
                     "ParentName":"JoeK",
                     "ParentTelno":"3106662212",
                     "ParentEmail":"Joe6070@gmail.com"
                  },
                  {
                     "ParentName":"KathyK",
                     "ParentTelno":"3106662215",
                     "ParentEmail":"KathyKabc@gmail.com"
                  }
               ]
            },
            {
               "idBooking":10405,
               "PsgrName":"John D",
               "BkgOnOff":"Off",
               "BkgOnOffAct":null,
               "BkgLocationDtTmAct":null,
               "BkgDriverInfo":"",
               "Accounts_idAccount":5942,
               "PsgrEmail":"x5942@gmail.com",
               "PsgrTelno":"3104568557",
               "ParentInfo":[
                  {
                     "ParentName":"JoeK",
                     "ParentTelno":"3106662212",
                     "ParentEmail":"Joe5942@gmail.com"
                  },
                  {
                     "ParentName":"KathyK",
                     "ParentTelno":"3106662215",
                     "ParentEmail":"KathyKabc@gmail.com"
                  }
               ]
            },
            {
               "idBooking":10405,
               "PsgrName":"John D",
               "BkgOnOff":"Off",
               "BkgOnOffAct":null,
               "BkgLocationDtTmAct":null,
               "BkgDriverInfo":"",
               "Accounts_idAccount":6707,
               "PsgrEmail":"x6707@gmail.com",
               "PsgrTelno":"3104568557",
               "ParentInfo":[
                  {
                     "ParentName":"JoeK",
                     "ParentTelno":"3106662212",
                     "ParentEmail":"Joe6707@gmail.com"
                  },
                  {
                     "ParentName":"KathyK",
                     "ParentTelno":"3106662215",
                     "ParentEmail":"KathyKabc@gmail.com"
                  }
               ]
            },
            {
               "idBooking":10406,
               "PsgrName":"John D",
               "BkgOnOff":"Off",
               "BkgOnOffAct":null,
               "BkgLocationDtTmAct":null,
               "Accounts_idAccount":5989,
               "PsgrEmail":"x5989@gmail.com",
               "PsgrTelno":"3104568557",
               "ParentInfo":[
                  {
                     "ParentName":"JoeK",
                     "ParentTelno":"3106662212",
                     "ParentEmail":"Joe5989@gmail.com"
                  },
                  {
                     "ParentName":"KathyK",
                     "ParentTelno":"3106662215",
                     "ParentEmail":"KathyKabc@gmail.com"
                  }
               ]
            },
            {
               "idBooking":10400,
               "PsgrName":"John D",
               "BkgOnOff":"Off",
               "BkgOnOffAct":null,
               "BkgLocationDtTmAct":null,
               "BkgDriverInfo":"",
               "Accounts_idAccount":5155,
               "PsgrEmail":"x5155@gmail.com",
               "PsgrTelno":"3104568557",
               "ParentInfo":[
                  {
                     "ParentName":"JoeK",
                     "ParentTelno":"3106662212",
                     "ParentEmail":"JoeKabc@gmail.com"
                  },
                  {
                     "ParentName":"KathyK",
                     "ParentTelno":"3106662215",
                     "ParentEmail":"KathyKabc@gmail.com"
                  }
               ]
            },
            {
               "idBooking":10402,
               "PsgrName":"John D",
               "BkgOnOff":"On",
               "BkgOnOffAct":null,
               "BkgLocationDtTmAct":null,
               "BkgDriverInfo":"Broken leg needs assistance ",
               "Accounts_idAccount":5775,
               "PsgrEmail":"x5775@gmail.com",
               "PsgrTelno":"3104568557",
               "ParentInfo":[
                  {
                     "ParentName":"JoeK",
                     "ParentTelno":"3106662212",
                     "ParentEmail":"Joe5775@gmail.com"
                  },
                  {
                     "ParentName":"KathyK",
                     "ParentTelno":"3106662215",
                     "ParentEmail":"KathyKabc@gmail.com"
                  }
               ]
            },
            {
               "idBooking":10404,
               "PsgrName":"John D",
               "BkgOnOff":"On",
               "BkgOnOffAct":null,
               "BkgLocationDtTmAct":null,
               "BkgDriverInfo":"Something",
               "Accounts_idAccount":5858,
               "PsgrEmail":"x5858@gmail.com",
               "PsgrTelno":"3104568557",
               "ParentInfo":[
                  {
                     "ParentName":"JoeK",
                     "ParentTelno":"3106662212",
                     "ParentEmail":"Joe5858@gmail.com"
                  },
                  {
                     "ParentName":"KathyK",
                     "ParentTelno":"3106662215",
                     "ParentEmail":"KathyKabc@gmail.com"
                  }
               ]
            },
            {
               "idBooking":10414,
               "PsgrName":"John D",
               "BkgOnOff":"Off",
               "BkgOnOffAct":null,
               "BkgLocationDtTmAct":null,
               "BkgDriverInfo":"",
               "Accounts_idAccount":6470,
               "PsgrEmail":"x6470@gmail.com",
               "PsgrTelno":"3104568557",
               "ParentInfo":[
                  {
                     "ParentName":"JoeK",
                     "ParentTelno":"3106662212",
                     "ParentEmail":"Joe6470@gmail.com"
                  },
                  {
                     "ParentName":"KathyK",
                     "ParentTelno":"3106662215",
                     "ParentEmail":"KathyKabc@gmail.com"
                  }
               ]
                     }
                  ]
      }
   ]
  }`;
var stopsData = JSON.parse(stopsJson);
var passengersData = StopsToPsgrs(stopsData.Stops);
var passengersJson = JSON.stringify(passengersData, null, 2);
console.log(passengersJson);
