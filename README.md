Need a typeScript function. Call it StopsToPsgrs.

It is about creating a new Json (see sample Passengers.json) out of Stops.json.

Data is the same but formatted and bloated differently.

Take a hard look at both Jsons, make sure you understand the relationship between the two, before you start. Also read the following with both Jsons visible.

Loop thru Stops, extract passengers of each stop into a new array. The final list will contain all passengers from all stops. Passenger records will have both “On“ information and “Off“ information.
You will also need to take the following fields from stop and rename add it into Passenger array.

                  "StopLocationAddress":"Blanche/30th Str",
                  "StopLocationPlaceId":"some googleId from server",
                  "StopLocationLatLng":"-118.40966033935548, 33.897762298583984",
                  "StopLocationDtTm":"2023-09-19 23:00:01",
Critical field is "BkgOnOff" at each stop that determines the name of the 4 fields.
Example 1st record: if "BkgOnOff" = "On" then the names of those fields in the Passengers Array become:

                     "OnLocationAddress":"Blanche/30th Str",
                     "OnLocationPlaceId":"some googleId from server",
                     "OnLocationLatLng":"-118.40966033935548, 33.897762298583984",
                     "OnLocationDtTm":"2023-09-19 23:00:01",
But obviously each passenger will get ON and will get OFF
And we only want one record per passenger so you’ll need to add the passengers OFF fields also into its record
