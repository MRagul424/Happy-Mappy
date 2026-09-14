import { destinations } from "./travelData";

/*
=========================================================
DESTINATIONS THAT HAVE 4-DAY OPTIONS
=========================================================
*/

const fourDayDestinations = new Set([
  "Alleppey",
  "Kochi",
  "Kodaikanal",
  "Munnar",
  "Ooty",
  "Wayanad",
]);


/*
=========================================================
BASE TRIP AMOUNT
=========================================================

This is an ESTIMATED amount per day.

Food is NOT included.

The amount covers estimated:
- Local transportation
- Parking / tolls
- Small local travel / miscellaneous expenses
=========================================================
*/

const BASE_AMOUNT_PER_DAY = 1500;

const BASE_AMOUNT_INCLUDES = [
  "Local transportation",
  "Parking / toll estimate",
  "Local travel & miscellaneous trip expenses",
];


/*
=========================================================
ITINERARY HELPERS
=========================================================
*/

const place = (
  time,
  name,
  amount = 0
) => ({
  time,
  name,
  amount,
  type: "place",
});

const food = (
  time,
  name
) => ({
  time,
  name,
  amount: null,
  type: "food",
});


/*
=========================================================
DETAILED ITINERARY
=========================================================
*/

const itineraryData = {

  /* =====================================================
     CHENNAI
  ===================================================== */

  Chennai: {
    hotel: "The Residency Towers",

    days: {

      1: [
        place("09:00 AM", "Marina Beach", 0),
        food("11:00 AM", "Breakfast - Murugan Idli Shop"),
        place("12:00 PM", "Kapaleeshwarar Temple", 0),
        food("01:30 PM", "Lunch - Sangeetha Restaurant"),
        place("03:30 PM", "Fort St. George", 25),
        place("05:30 PM", "San Thome Basilica", 0),
        food("08:00 PM", "Dinner - The Residency Towers"),
      ],

      2: [
        place("09:00 AM", "Marina Beach", 0),
        food("10:30 AM", "Breakfast - Saravana Bhavan"),
        place("11:30 AM", "Government Museum", 50),
        food("01:30 PM", "Lunch - Ratna Cafe"),
        place("03:30 PM", "Fort St. George", 25),
        place("05:30 PM", "San Thome Basilica", 0),
        food("08:00 PM", "Dinner - Murugan Idli Shop"),
      ],

      3: [
        place("09:00 AM", "Guindy National Park", 30),
        food("11:30 AM", "Breakfast - Adyar Ananda Bhavan"),
        place("01:00 PM", "Birla Planetarium", 100),
        food("02:30 PM", "Lunch - Sangeetha Restaurant"),
        place("04:30 PM", "Elliot's Beach", 0),
        place("06:00 PM", "Besant Nagar", 0),
        food("08:00 PM", "Dinner - The Residency Towers"),
      ],
    },
  },


  /* =====================================================
     MAHABALIPURAM
  ===================================================== */

  Mahabalipuram: {
    hotel: "Radisson Blu Resort Temple Bay",

    days: {

      1: [
        place("09:00 AM", "Shore Temple", 40),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:00 PM", "Pancha Rathas", 40),
        food("01:30 PM", "Lunch - Moonrakers"),
        place("03:30 PM", "Arjuna's Penance", 0),
        place("05:30 PM", "Mahabalipuram Beach", 0),
        food("08:00 PM", "Dinner - Hotel"),
      ],

      2: [
        place("09:00 AM", "Shore Temple", 40),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:00 PM", "Cave Temples", 40),
        food("01:30 PM", "Lunch - Nautilus Restaurant"),
        place("03:30 PM", "Pancha Rathas", 40),
        place("05:30 PM", "Mahabalipuram Beach", 0),
        food("08:00 PM", "Dinner - Hotel"),
      ],

      3: [
        place("09:00 AM", "Tiger Cave", 0),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:00 PM", "Arjuna's Penance", 0),
        food("01:30 PM", "Lunch - Moonrakers"),
        place("03:30 PM", "Shore Temple", 40),
        place("05:30 PM", "Local Handicraft Shopping", 0),
        food("08:00 PM", "Dinner - Hotel"),
      ],
    },
  },


  /* =====================================================
     MADURAI
  ===================================================== */

  Madurai: {
    hotel: "Heritage Madurai",

    days: {

      1: [
        place("09:00 AM", "Meenakshi Amman Temple", 0),
        food("11:00 AM", "Breakfast - Murugan Idli Shop"),
        place("12:00 PM", "Thirumalai Nayakkar Palace", 50),
        food("01:30 PM", "Lunch - Ahaaram Restaurant"),
        place("04:00 PM", "Puthu Mandapam Market", 0),
        place("06:00 PM", "Vandiyur Mariamman Teppakulam", 0),
        food("08:00 PM", "Dinner - Heritage Madurai"),
      ],

      2: [
        place("09:00 AM", "Meenakshi Amman Temple", 0),
        food("11:00 AM", "Breakfast - Murugan Idli Shop"),
        place("12:00 PM", "Gandhi Memorial Museum", 20),
        food("01:30 PM", "Lunch - Ahaaram Restaurant"),
        place("03:30 PM", "Thirumalai Nayakkar Palace", 50),
        place("06:00 PM", "Vandiyur Mariamman Teppakulam", 0),
        food("08:00 PM", "Dinner - Heritage Madurai"),
      ],

      3: [
        place("09:00 AM", "Azhagar Kovil", 0),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:30 PM", "Pazhamudir Solai", 0),
        food("02:00 PM", "Lunch - Kumar Mess"),
        place("04:00 PM", "Gandhi Memorial Museum", 20),
        place("06:00 PM", "Local Shopping", 0),
        food("08:00 PM", "Dinner - Heritage Madurai"),
      ],
    },
  },


  /* =====================================================
     ALLEPPEY
  ===================================================== */

  Alleppey: {
    hotel: "Marari Beach Resort",

    days: {

      1: [
        place("09:00 AM", "Alleppey Backwaters", 150),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:00 PM", "Houseboat Cruise", 1200),
        food("01:30 PM", "Lunch - Houseboat"),
        place("03:30 PM", "Kuttanad Village", 0),
        place("05:30 PM", "Sunset Backwater Cruise", 300),
        food("08:00 PM", "Dinner - Hotel"),
      ],

      2: [
        place("09:00 AM", "Alappuzha Beach", 0),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:00 PM", "Canoe Ride", 700),
        food("01:30 PM", "Lunch - Thaff Restaurant"),
        place("03:30 PM", "Kuttanad", 0),
        place("05:30 PM", "Village Walk", 0),
        food("08:00 PM", "Dinner - Marari Beach Resort"),
      ],

      3: [
        place("09:00 AM", "Houseboat Cruise", 1200),
        food("11:30 AM", "Breakfast - Houseboat"),
        place("01:00 PM", "Pathiramanal Island", 100),
        food("02:00 PM", "Lunch - Houseboat"),
        place("04:00 PM", "Alleppey Beach", 0),
        place("06:00 PM", "Sunset Cruise", 300),
        food("08:00 PM", "Dinner - Hotel"),
      ],

      4: [
        place("09:00 AM", "Backwater Village Tour", 500),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:00 PM", "Canoe Ride", 700),
        food("01:30 PM", "Lunch - Thaff Restaurant"),
        place("03:30 PM", "Alappuzha Beach", 0),
        place("05:30 PM", "Sunset Cruise", 300),
        food("08:00 PM", "Dinner - Marari Beach Resort"),
      ],
    },
  },


  /* =====================================================
     KOCHI
  ===================================================== */

  Kochi: {
    hotel: "Taj Malabar Resort & Spa",

    days: {

      1: [
        place("09:00 AM", "Fort Kochi", 0),
        food("11:00 AM", "Breakfast - Kashi Art Cafe"),
        place("12:00 PM", "Chinese Fishing Nets", 0),
        food("01:30 PM", "Lunch - Kadaloram Restaurant"),
        place("03:30 PM", "Mattancherry Palace", 5),
        place("05:30 PM", "Jew Town", 0),
        food("08:00 PM", "Dinner - Taj Malabar"),
      ],

      2: [
        place("09:00 AM", "St. Francis Church", 0),
        food("11:00 AM", "Breakfast - Fort House"),
        place("12:00 PM", "Fort Kochi Heritage Walk", 0),
        food("01:30 PM", "Lunch - Kashi Art Cafe"),
        place("03:30 PM", "Mattancherry Palace", 5),
        place("05:30 PM", "Jew Town", 0),
        food("08:00 PM", "Dinner - Taj Malabar"),
      ],

      3: [
        place("09:00 AM", "Hill Palace Museum", 30),
        food("11:30 AM", "Breakfast - Dhe Puttu"),
        place("01:00 PM", "Marine Drive", 0),
        food("02:00 PM", "Lunch - Dhe Puttu"),
        place("04:00 PM", "Kerala Folklore Museum", 100),
        place("06:00 PM", "Marine Drive Sunset", 0),
        food("08:00 PM", "Dinner - Taj Malabar"),
      ],

      4: [
        place("09:00 AM", "Fort Kochi Heritage Walk", 0),
        food("11:00 AM", "Breakfast - Kashi Art Cafe"),
        place("12:00 PM", "Mattancherry Palace", 5),
        food("01:30 PM", "Lunch - Kadaloram Restaurant"),
        place("03:30 PM", "Marine Drive", 0),
        place("05:30 PM", "Sunset Cruise", 800),
        food("08:00 PM", "Dinner - Taj Malabar"),
      ],
    },
  },


  /* =====================================================
     WAYANAD
  ===================================================== */

  Wayanad: {
    hotel: "Vythiri Resort",

    days: {

      1: [
        place("09:00 AM", "Edakkal Caves", 50),
        food("11:30 AM", "Breakfast - Hotel"),
        place("12:30 PM", "Heritage Museum", 30),
        food("02:00 PM", "Lunch - Wilton Restaurant"),
        place("04:00 PM", "Local Market", 0),
        place("06:00 PM", "Sunset Viewpoint", 0),
        food("08:00 PM", "Dinner - Vythiri Resort"),
      ],

      2: [
        place("09:00 AM", "Soochipara Falls", 50),
        food("11:30 AM", "Breakfast - Hotel"),
        place("12:30 PM", "Kanthanpara Falls", 40),
        food("02:00 PM", "Lunch - Wilton Restaurant"),
        place("04:00 PM", "Nature Walk", 0),
        place("06:00 PM", "Local Market", 0),
        food("08:00 PM", "Dinner - Vythiri Resort"),
      ],

      3: [
        place("09:00 AM", "Banasura Sagar Dam", 40),
        food("11:30 AM", "Breakfast - Hotel"),
        place("12:30 PM", "Kuruva Island", 100),
        food("02:00 PM", "Lunch - Hotel"),
        place("04:00 PM", "Nature Walk", 0),
        place("06:00 PM", "Sunset Viewpoint", 0),
        food("08:00 PM", "Dinner - Vythiri Resort"),
      ],

      4: [
        place("09:00 AM", "Chembra Peak", 50),
        food("11:30 AM", "Breakfast - Hotel"),
        place("12:30 PM", "Pookode Lake", 40),
        food("02:00 PM", "Lunch - Wilton Restaurant"),
        place("04:00 PM", "Tea Plantation Visit", 0),
        place("06:00 PM", "Shopping", 0),
        food("08:00 PM", "Dinner - Vythiri Resort"),
      ],
    },
  },


  /* =====================================================
     OOTY
  ===================================================== */

  Ooty: {
    hotel: "Sterling Ooty Elk Hill",

    days: {

      1: [
        place("09:00 AM", "Ooty Lake", 15),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:00 PM", "Botanical Garden", 30),
        food("01:30 PM", "Lunch - Earl's Secret"),
        place("03:30 PM", "Rose Garden", 40),
        place("05:30 PM", "Charing Cross", 0),
        food("08:00 PM", "Dinner - Hotel"),
      ],

      2: [
        place("09:00 AM", "Nilgiri Mountain Railway", 500),
        food("11:30 AM", "Breakfast - Hotel"),
        place("12:30 PM", "Doddabetta Peak", 15),
        food("02:00 PM", "Lunch - Place to Bee"),
        place("04:00 PM", "Tea Factory", 20),
        place("06:00 PM", "Ooty Market", 0),
        food("08:00 PM", "Dinner - Hotel"),
      ],

      3: [
        place("09:00 AM", "Avalanche Lake", 0),
        food("11:30 AM", "Breakfast - Hotel"),
        place("12:30 PM", "Emerald Lake", 0),
        food("02:00 PM", "Lunch - Earl's Secret"),
        place("04:00 PM", "Pine Forest", 0),
        place("06:00 PM", "Ooty Market", 0),
        food("08:00 PM", "Dinner - Hotel"),
      ],

      4: [
        place("09:00 AM", "Coonoor", 0),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:00 PM", "Sim's Park", 30),
        food("02:00 PM", "Lunch - 180° McIver"),
        place("04:00 PM", "Dolphin's Nose", 0),
        place("06:00 PM", "Tea Estate Visit", 20),
        food("08:00 PM", "Dinner - Sterling Ooty"),
      ],
    },
  },


  /* =====================================================
     KODAIKANAL
  ===================================================== */

  Kodaikanal: {
    hotel: "The Carlton Kodaikanal",

    days: {

      1: [
        place("09:00 AM", "Kodaikanal Lake", 0),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:00 PM", "Coaker's Walk", 30),
        food("01:30 PM", "Lunch - Astoria Veg"),
        place("03:30 PM", "Bryant Park", 30),
        place("05:30 PM", "Kodaikanal Market", 0),
        food("08:00 PM", "Dinner - Hotel"),
      ],

      2: [
        place("09:00 AM", "Pillar Rocks", 20),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:00 PM", "Guna Caves Viewpoint", 30),
        food("01:30 PM", "Lunch - PotLuck"),
        place("03:30 PM", "Pine Forest", 0),
        place("05:30 PM", "Moir Point", 20),
        food("08:00 PM", "Dinner - Hotel"),
      ],

      3: [
        place("09:00 AM", "Silver Cascade Falls", 0),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:00 PM", "Berijam Lake", 100),
        food("01:30 PM", "Lunch - Astoria Veg"),
        place("03:30 PM", "Pine Forest", 0),
        place("05:30 PM", "Chocolate Shopping", 0),
        food("08:00 PM", "Dinner - The Carlton"),
      ],

      4: [
        place("09:00 AM", "Poombarai Village", 0),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:00 PM", "Kukkal Lake View", 0),
        food("01:30 PM", "Lunch - PotLuck"),
        place("03:30 PM", "Mannavanur Lake", 20),
        place("05:30 PM", "Local Shopping", 0),
        food("08:00 PM", "Dinner - The Carlton"),
      ],
    },
  },


  /* =====================================================
     MUNNAR
  ===================================================== */

  Munnar: {
    hotel: "The Munnar Queen",

    days: {

      1: [
        place("09:00 AM", "Munnar Tea Gardens", 0),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:00 PM", "Tea Museum", 125),
        food("01:30 PM", "Lunch - Saravana Bhavan"),
        place("03:30 PM", "Mattupetty Dam", 10),
        place("05:30 PM", "Echo Point", 10),
        food("08:00 PM", "Dinner - Hotel"),
      ],

      2: [
        place("09:00 AM", "Eravikulam National Park", 200),
        food("11:30 AM", "Breakfast - Hotel"),
        place("12:30 PM", "Mattupetty Dam", 10),
        food("02:00 PM", "Lunch - Rasa Gurukulam"),
        place("04:00 PM", "Kundala Lake", 20),
        place("06:00 PM", "Tea Plantation Walk", 0),
        food("08:00 PM", "Dinner - Hotel"),
      ],

      3: [
        place("09:00 AM", "Top Station", 40),
        food("11:30 AM", "Breakfast - Hotel"),
        place("12:30 PM", "Anamudi View", 0),
        food("02:00 PM", "Lunch - Saravana Bhavan"),
        place("04:00 PM", "Tea Estate Visit", 0),
        place("06:00 PM", "Munnar Town", 0),
        food("08:00 PM", "Dinner - The Munnar Queen"),
      ],

      4: [
        place("09:00 AM", "Chinnar Wildlife Sanctuary", 300),
        food("11:30 AM", "Breakfast - Hotel"),
        place("12:30 PM", "Lakkam Waterfalls", 20),
        food("02:00 PM", "Lunch - Local Kerala Restaurant"),
        place("04:00 PM", "Tea Plantation Visit", 0),
        place("06:00 PM", "Sunset Viewpoint", 0),
        food("08:00 PM", "Dinner - The Munnar Queen"),
      ],
    },
  },

};


/*
=========================================================
CREATE PLAN
=========================================================
*/

const createPlan = (
  destination,
  days
) => {

  const destinationData =
    itineraryData[destination.name];

  const itineraryDays =
    destinationData?.days || {};

  const itinerary = [];

  /*
    Build exactly the requested number of days.
  */

  for (
    let dayNumber = 1;
    dayNumber <= days;
    dayNumber++
  ) {

    const activities =
      itineraryDays[dayNumber] || [];

    itinerary.push({
      day: dayNumber,

      title:
        dayNumber === days
          ? `Day ${dayNumber} - Final Day`
          : `Day ${dayNumber} - Explore`,

      activities,
    });
  }


  /*
  ========================================================
  CALCULATE PLACE / ACTIVITY AMOUNT
  ========================================================
  */

  let totalPlaceAmount = 0;

  itinerary.forEach(
    (day) => {

      day.activities.forEach(
        (item) => {

          if (
            item.type === "place" &&
            typeof item.amount === "number"
          ) {

            totalPlaceAmount +=
              item.amount;

          }

        }
      );

    }
  );


  /*
  ========================================================
  BASE AMOUNT
  ========================================================

  Example:

  1 day = ₹1,500
  2 days = ₹3,000
  3 days = ₹4,500
  4 days = ₹6,000
  */

  const baseAmount =
    BASE_AMOUNT_PER_DAY * days;


  /*
  ========================================================
  FINAL ESTIMATED AMOUNT
  ========================================================

  Base amount
       +
  Place/activity charges

  FOOD IS NOT INCLUDED.
  */

  const estimatedTotal =
    baseAmount +
    totalPlaceAmount;


  /*
  ========================================================
  PLAN OBJECT
  ========================================================
  */

  return {

    id:
      `${destination.id}-${days}-day-plan`,

    destinationId:
      destination.id,

    destinationName:
      destination.name,

    title:
      `${destination.name} ${days}-Day Travel Plan`,

    destination:
      destination.name,

    days,

    nights:
      Math.max(
        days - 1,
        0
      ),

    category:
      destination.category,

    image:
      destination.image,

    /*
      BASE AMOUNT
    */

    baseAmount,

    baseAmountPerDay:
      BASE_AMOUNT_PER_DAY,

    baseIncludes:
      BASE_AMOUNT_INCLUDES,

    /*
      PLACE AMOUNT
    */

    placeAmount:
      totalPlaceAmount,

    /*
      FINAL ESTIMATION
    */

    price:
      estimatedTotal,

    /*
      HOTEL
    */

    hotel:
      destinationData?.hotel ||
      "Recommended Hotel",

    /*
      PLACES
    */

    places:
      destination.places,

    /*
      HIGHLIGHTS
    */

    highlights:
      itinerary
        .flatMap(
          (day) =>
            day.activities
              .filter(
                (item) =>
                  item.type ===
                  "place"
              )
              .map(
                (item) =>
                  item.name
              )
        )
        .slice(0, 3),

    /*
      COMPLETE ITINERARY
    */

    itinerary,

    /*
      NUMBER OF PAID PLACES
    */

    placeCount:
      itinerary.reduce(
        (total, day) =>
          total +
          day.activities.filter(
            (item) =>
              item.type ===
              "place"
          ).length,
        0
      ),
  };
};


/*
=========================================================
GET AVAILABLE DURATIONS
=========================================================
*/

const getDurations = (
  destinationName
) => {

  const durations = [
    1,
    2,
    3,
  ];

  if (
    fourDayDestinations.has(
      destinationName
    )
  ) {
    durations.push(4);
  }

  return durations;
};


/*
=========================================================
EXPORT ALL DESTINATION PLANS
=========================================================
*/

export const destinationPlans =
  destinations.flatMap(
    (destination) =>
      getDurations(
        destination.name
      ).map(
        (days) =>
          createPlan(
            destination,
            days
          )
      )
  );