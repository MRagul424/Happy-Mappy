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
DETAILED ITINERARY DATA

IMPORTANT:
- Place/activity names DO NOT repeat between days
- Food stops do not have amounts
- Free places use amount = 0
=========================================================
*/

const itineraryData = {

  /* =====================================================
     CHENNAI
  ===================================================== */

  Chennai: {
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
        place("09:00 AM", "Government Museum", 50),
        food("11:00 AM", "Breakfast - Saravana Bhavan"),
        place("12:00 PM", "Thousand Lights Mosque", 0),
        food("01:30 PM", "Lunch - Ratna Cafe"),
        place("03:30 PM", "Semmozhi Poonga", 20),
        place("05:30 PM", "Elliot's Beach", 0),
        food("08:00 PM", "Dinner - Murugan Idli Shop"),
      ],

      3: [
        place("09:00 AM", "Guindy National Park", 30),
        food("11:30 AM", "Breakfast - Adyar Ananda Bhavan"),
        place("01:00 PM", "Birla Planetarium", 100),
        food("02:30 PM", "Lunch - Woodlands Restaurant"),
        place("04:30 PM", "Valluvar Kottam", 10),
        place("06:30 PM", "Besant Nagar Beach", 0),
        food("08:30 PM", "Dinner - The Residency Towers"),
      ],
    },
  },


  /* =====================================================
     MAHABALIPURAM
  ===================================================== */

  Mahabalipuram: {
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
        place("09:00 AM", "Tiger Cave", 0),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:00 PM", "Krishna's Butter Ball", 0),
        food("01:30 PM", "Lunch - Nautilus Restaurant"),
        place("03:30 PM", "Mahabalipuram Lighthouse", 10),
        place("05:30 PM", "India Seashell Museum", 100),
        food("08:00 PM", "Dinner - Hotel"),
      ],

      3: [
        place("09:00 AM", "Cave Temples", 40),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:00 PM", "Varaha Cave Temple", 0),
        food("01:30 PM", "Lunch - Moonrakers"),
        place("03:30 PM", "Atiranachanda Cave", 0),
        place("05:30 PM", "Local Stone Sculpture Street", 0),
        food("08:00 PM", "Dinner - Hotel"),
      ],
    },
  },


  /* =====================================================
     MADURAI
  ===================================================== */

  Madurai: {
    days: {

      1: [
        place("09:00 AM", "Meenakshi Amman Temple", 0),
        food("11:00 AM", "Breakfast - Murugan Idli Shop"),
        place("12:00 PM", "Thirumalai Nayakkar Palace", 50),
        food("01:30 PM", "Lunch - Ahaaram Restaurant"),
        place("04:00 PM", "Puthu Mandapam", 0),
        place("06:00 PM", "Vandiyur Mariamman Teppakulam", 0),
        food("08:00 PM", "Dinner - Heritage Madurai"),
      ],

      2: [
        place("09:00 AM", "Gandhi Memorial Museum", 20),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:00 PM", "Koodal Azhagar Temple", 0),
        food("01:30 PM", "Lunch - Kumar Mess"),
        place("03:30 PM", "Thirumalai Nayakkar Palace Grounds", 0),
        place("05:30 PM", "Mariamman Teppakulam Market", 0),
        food("08:00 PM", "Dinner - Heritage Madurai"),
      ],

      3: [
        place("09:00 AM", "Azhagar Kovil", 0),
        food("11:00 AM", "Breakfast - Murugan Idli Shop"),
        place("12:30 PM", "Pazhamudir Solai", 0),
        food("02:00 PM", "Lunch - Sri Saravana Bhavan"),
        place("04:00 PM", "Samanar Hills", 0),
        place("06:00 PM", "Madurai Banana Market", 0),
        food("08:00 PM", "Dinner - Heritage Madurai"),
      ],
    },
  },


  /* =====================================================
     ALLEPPEY
  ===================================================== */

  Alleppey: {
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
        place("12:00 PM", "Canoe Ride through Village Canals", 700),
        food("01:30 PM", "Lunch - Thaff Restaurant"),
        place("03:30 PM", "Pathiramanal Island", 100),
        place("05:30 PM", "Mannarasala Sree Nagaraja Temple", 0),
        food("08:00 PM", "Dinner - Marari Beach Resort"),
      ],

      3: [
        place("09:00 AM", "Marari Beach", 0),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:00 PM", "Ambalappuzha Sree Krishna Temple", 0),
        food("01:30 PM", "Lunch - Indian Coffee House"),
        place("03:30 PM", "Krishnapuram Palace", 75),
        place("05:30 PM", "Revi Karunakaran Museum", 150),
        food("08:00 PM", "Dinner - Hotel"),
      ],

      4: [
        place("09:00 AM", "Vembanad Lake Viewpoint", 0),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:00 PM", "Karumadi Kuttan", 0),
        food("01:30 PM", "Lunch - Thaff Restaurant"),
        place("03:30 PM", "Pathiramanal Bird Watching Area", 100),
        place("05:30 PM", "Punnamada Lake", 0),
        food("08:00 PM", "Dinner - Marari Beach Resort"),
      ],
    },
  },


  /* =====================================================
     KOCHI
  ===================================================== */

  Kochi: {
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
        place("12:00 PM", "Santa Cruz Basilica", 0),
        food("01:30 PM", "Lunch - Kashi Art Cafe"),
        place("03:30 PM", "Kerala Kathakali Centre", 300),
        place("05:30 PM", "Princess Street", 0),
        food("08:00 PM", "Dinner - Taj Malabar"),
      ],

      3: [
        place("09:00 AM", "Hill Palace Museum", 30),
        food("11:30 AM", "Breakfast - Dhe Puttu"),
        place("01:00 PM", "Kerala Folklore Museum", 100),
        food("02:30 PM", "Lunch - Dhe Puttu"),
        place("04:30 PM", "Marine Drive", 0),
        place("06:30 PM", "Bolgatty Palace", 0),
        food("08:30 PM", "Dinner - Taj Malabar"),
      ],

      4: [
        place("09:00 AM", "Willingdon Island", 0),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:00 PM", "Vypin Lighthouse", 20),
        food("01:30 PM", "Lunch - Kadaloram Restaurant"),
        place("03:30 PM", "Cherai Beach", 0),
        place("06:00 PM", "Kumbalangi Village", 100),
        food("08:30 PM", "Dinner - Taj Malabar"),
      ],
    },
  },


  /* =====================================================
     WAYANAD
  ===================================================== */

  Wayanad: {
    days: {

      1: [
        place("09:00 AM", "Edakkal Caves", 50),
        food("11:30 AM", "Breakfast - Hotel"),
        place("12:30 PM", "Heritage Museum", 30),
        food("02:00 PM", "Lunch - Wilton Restaurant"),
        place("04:00 PM", "Phantom Rock", 0),
        place("06:00 PM", "Ambukuthi Hills", 0),
        food("08:00 PM", "Dinner - Vythiri Resort"),
      ],

      2: [
        place("09:00 AM", "Soochipara Falls", 50),
        food("11:30 AM", "Breakfast - Hotel"),
        place("12:30 PM", "Kanthanpara Falls", 40),
        food("02:00 PM", "Lunch - Wilton Restaurant"),
        place("04:00 PM", "Meenmutty Waterfalls", 50),
        place("06:00 PM", "Sunset Viewpoint", 0),
        food("08:00 PM", "Dinner - Vythiri Resort"),
      ],

      3: [
        place("09:00 AM", "Banasura Sagar Dam", 40),
        food("11:30 AM", "Breakfast - Hotel"),
        place("12:30 PM", "Kuruva Island", 100),
        food("02:00 PM", "Lunch - Hotel"),
        place("04:00 PM", "Pookode Lake", 40),
        place("06:00 PM", "Lakkidi Viewpoint", 0),
        food("08:00 PM", "Dinner - Vythiri Resort"),
      ],

      4: [
        place("09:00 AM", "Chembra Peak", 50),
        food("11:30 AM", "Breakfast - Hotel"),
        place("12:30 PM", "Thirunelli Temple", 0),
        food("02:00 PM", "Lunch - Wilton Restaurant"),
        place("04:00 PM", "Kuruva Dweep Forest Walk", 100),
        place("06:00 PM", "Sultan Bathery Jain Temple", 0),
        food("08:00 PM", "Dinner - Vythiri Resort"),
      ],
    },
  },


  /* =====================================================
     OOTY
  ===================================================== */

  Ooty: {
    days: {

      1: [
        place("09:00 AM", "Ooty Lake", 15),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:00 PM", "Government Botanical Garden", 30),
        food("01:30 PM", "Lunch - Earl's Secret"),
        place("03:30 PM", "Government Rose Garden", 40),
        place("05:30 PM", "Charing Cross", 0),
        food("08:00 PM", "Dinner - Hotel"),
      ],

      2: [
        place("09:00 AM", "Doddabetta Peak", 15),
        food("11:30 AM", "Breakfast - Hotel"),
        place("12:30 PM", "Tea Factory and Tea Museum", 20),
        food("02:00 PM", "Lunch - Place to Bee"),
        place("04:00 PM", "Thread Garden", 30),
        place("06:00 PM", "Ooty Stone House", 20),
        food("08:00 PM", "Dinner - Hotel"),
      ],

      3: [
        place("09:00 AM", "Avalanche Lake", 0),
        food("11:30 AM", "Breakfast - Hotel"),
        place("12:30 PM", "Emerald Lake", 0),
        food("02:00 PM", "Lunch - Earl's Secret"),
        place("04:00 PM", "Pine Forest", 0),
        place("06:00 PM", "Wenlock Downs", 0),
        food("08:00 PM", "Dinner - Hotel"),
      ],

      4: [
        place("09:00 AM", "Sim's Park, Coonoor", 30),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:00 PM", "Dolphin's Nose", 0),
        food("02:00 PM", "Lunch - 180° McIver"),
        place("04:00 PM", "Lamb's Rock", 10),
        place("06:00 PM", "Catherine Falls Viewpoint", 0),
        food("08:00 PM", "Dinner - Sterling Ooty"),
      ],
    },
  },


  /* =====================================================
     KODAIKANAL
  ===================================================== */

  Kodaikanal: {
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
        place("03:30 PM", "Caps Fly Valley", 0),
        place("05:30 PM", "Silent Valley View", 0),
        food("08:00 PM", "Dinner - The Carlton"),
      ],

      4: [
        place("09:00 AM", "Poombarai Village", 0),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:00 PM", "Mannavanur Lake", 20),
        food("01:30 PM", "Lunch - PotLuck"),
        place("03:30 PM", "Kukkal Lake View", 0),
        place("05:30 PM", "La Saleth Church", 0),
        food("08:00 PM", "Dinner - The Carlton"),
      ],
    },
  },


  /* =====================================================
     MUNNAR
  ===================================================== */

  Munnar: {
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
        place("12:30 PM", "Kundala Lake", 20),
        food("02:00 PM", "Lunch - Rasa Gurukulam"),
        place("04:00 PM", "Kundala Dam", 0),
        place("06:00 PM", "Photo Point", 0),
        food("08:00 PM", "Dinner - Hotel"),
      ],

      3: [
        place("09:00 AM", "Top Station", 40),
        food("11:30 AM", "Breakfast - Hotel"),
        place("12:30 PM", "Anamudi Viewpoint", 0),
        food("02:00 PM", "Lunch - Saravana Bhavan"),
        place("04:00 PM", "Lockhart Gap Viewpoint", 0),
        place("06:00 PM", "Punarjani Traditional Village", 150),
        food("08:00 PM", "Dinner - The Munnar Queen"),
      ],

      4: [
        place("09:00 AM", "Chinnar Wildlife Sanctuary", 300),
        food("11:30 AM", "Breakfast - Hotel"),
        place("12:30 PM", "Lakkam Waterfalls", 20),
        food("02:00 PM", "Lunch - Local Kerala Restaurant"),
        place("04:00 PM", "Rajamalai Viewpoint", 0),
        place("06:00 PM", "Chokramudi Viewpoint", 0),
        food("08:00 PM", "Dinner - The Munnar Queen"),
      ],
    },
  },


  /* =====================================================
     THANJAVUR
  ===================================================== */

  Thanjavur: {
    days: {

      1: [
        place("09:00 AM", "Brihadeeswarar Temple", 0),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:00 PM", "Thanjavur Royal Palace", 50),
        food("01:30 PM", "Lunch - Hotel Karthik"),
        place("03:30 PM", "Saraswathi Mahal Library", 0),
        place("05:30 PM", "Art Gallery", 20),
        food("08:00 PM", "Dinner - Hotel"),
      ],

      2: [
        place("09:00 AM", "Schwartz Church", 0),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:00 PM", "Sangeetha Mahal", 0),
        food("01:30 PM", "Lunch - Hotel Karthik"),
        place("03:30 PM", "Thanjavur Maratha Palace Courtyard", 30),
        place("05:30 PM", "Sivaganga Park", 10),
        food("08:00 PM", "Dinner - Hotel"),
      ],

      3: [
        place("09:00 AM", "Gangaikonda Cholapuram", 0),
        food("11:00 AM", "Breakfast - Hotel"),
        place("12:30 PM", "Darasuram Airavatesvara Temple", 0),
        food("02:00 PM", "Lunch - Local South Indian Restaurant"),
        place("04:00 PM", "Thiruvaiyaru Temple", 0),
        place("06:00 PM", "Kallanai Dam", 0),
        food("08:00 PM", "Dinner - Hotel"),
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
  ---------------------------------------------------------
  Build exactly the requested number of days.
  ---------------------------------------------------------
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
  =========================================================
  CALCULATE PLACE / ACTIVITY CHARGES
  =========================================================

  Food is ignored here.
  Only place/activity amounts are added.
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
  =========================================================
  BASE TRIP AMOUNT
  =========================================================
  */

  const baseAmount =
    BASE_AMOUNT_PER_DAY * days;


  /*
  =========================================================
  FINAL ESTIMATION
  =========================================================

  Base Trip Amount
       +
  Place / Activity Charges
       =
  Estimated Total
  */

  const estimatedTotal =
    baseAmount +
    totalPlaceAmount;


  /*
  =========================================================
  PLAN OBJECT
  =========================================================
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
    PLACE / ACTIVITY AMOUNT
    */

    placeAmount:
      totalPlaceAmount,


    /*
    FINAL AMOUNT
    */

    price:
      estimatedTotal,


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
        .slice(
          0,
          3
        ),


    /*
    COMPLETE ITINERARY
    */

    itinerary,


    /*
    NUMBER OF PLACE / ACTIVITY ENTRIES
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
AVAILABLE DURATIONS
=========================================================

All destinations:
1 Day
2 Days
3 Days

These destinations:
4 Days also available
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