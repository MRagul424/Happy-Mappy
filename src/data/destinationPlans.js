import { destinations } from "./travelData";

/*
=========================================================
DIFFERENT IMAGES FOR EACH TRAVEL PLAN
=========================================================
*/

const planImages = {
  Chennai: {
    1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4pP0UJ4YixiA6tq3n8ds7xll8Wa_Maz8CnEaMaewvAg&s=10",
    2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5oKhBRYWYyQbM2WbHLjlaYgW6wefyWZswduTGwWhFg&s=10",
    3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-H-a-1SavNMRN3sHi-eEWe49AUE3k13H98WHRVIBcg&s=10",
  },

  Mahabalipuram: {
    1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuVWdMBCIlc5AR1ITeTlHz86bojvAqnlw1f8kkLVlUoQ&s=10",
    2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgeDjzxZ-3xTfye_VQTUEtBRncxdM9AEEmZ8F5lzhjGw&s=10",
    3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOA8o1wqhgu7zSRXI3iLU_U6kiOFmnikgXUSNcJyvx8Q&s=10",
  },

  Madurai: {
    1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDMsha18K9eYHjxof7cz9d80QY1mUZwAi1Z10YtppXA&s=10",
    2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLntT2ujo3ZgOl-SiEdulkP04dKq3ote1iX-kNqCynXQ&s=10",
    3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWd764oOIfD-gtOJfoHbLpPDVAikPRQIOR9_RbqlZo7w&s=10",
  },

  Alleppey: {
    1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKw1-CKngUfKd8xcbNqaFT-vLEYgYxCZqJsp-LsCSIfg&s=10",
    2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgNHddJvg0jJRup0kivxTFe32Z7efEaErPTZSQowt9w&s=10",
    3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbbkq2ltaxvSA6--g0Ol5048WDLoeDiNvylvzJvaAjw&s=10",
    4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUSHmuDBJaQeUFcSm4IsmPNrh4BzyJDtEAFULSd7gmFQ&s=10",
  },

  Kochi: {
    1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ3OWSEi-tFJL3OxBLjanoXluU4-Ey4qd109iXMr8QBA&s=10",
    2: "https://c4.wallpaperflare.com/wallpaper/787/653/145/18-back-beach-blues-wallpaper-preview.jpg",
    3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVLYOgdDqz-9JgTfXmdIL0B7wveRITz5Bbx_p_3Zjekg&s=10",
    4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzhxOcAnjuBxAyfZ5iZvq6cfNSWJRBI2Ep0fvezktyg&s=10",
  },

  Kodaikanal: {
    1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWZD9OUBgyaUh7vtYACoNrkMu8tVV58W1HhiZbQK2-8A&s=10",
    2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFKWXPYCFt3rygrCbqDJBATsRuGD-wKEViOjGve5ihgA&s=10",
    3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLa89Sg1ClzE5oik70l30pmOX7c6U8LhjNhlpBnx-8Ug&s=10",
    4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTUtUg21YISjFZCm5u356R5sArFyPhrxgg6xLSUXcPNA&s=10",
  },

  Munnar: {
    1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-q7i1732UfWUXW2OJGxJ_DCMyQkjxyF_GIXYkLL3miA&s=10",
    2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pNkQbc6jNSSMsKKenzPuX0suJFJR0vBPPfcEnlhEtw&s=10",
    3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL6PPVGlO5JzRBb2qfMtgtAfqZewPuohGG2ph7TJro1Q&s=10",
    4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo-B3hYXRKLsBDDfoNfXBSfNwsUdZWImIBRfIE5VkHjg&s=10",
  },

  Ooty: {
    1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4TsBhm7NNCJZAFOrV-7BtPfx5bmKkjlWc2wZPtewRxg&s=10",
    2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB4J6zlI5zjAsH1DQdCAWa17Jh8EX3FTSdQBPwAakHCg&s=10",
    3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfL833EM8QH30QwG9assMN-BDEq0pMXotZwPeZ84Mhg&s=10",
    4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQ53R8w9VwPyg2Vs-MuNsP4LUpw9xJ7cdNfL7-YDQ6g&s=10",
  },

  Wayanad: {
    1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5a6a1Q8noPIpMdiXa9I85WPMlWL2ekyiFJJQ1viiteA&s=10",
    2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaAd8y9CqJQIM4D7K6mWHB6vh5v4hLLWS8wqgKhhkHPg&s=10",
    3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrqEs8dYob64wP3WG8dxJeOAJ7z0-HTDDYh-vDup1XMt4qgFvPZYwPt8k&s=10",
    4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHt0ZLqCK2nTVgOdwaGUY6F5l136Mj3YF41-gTk3d5Sg&s=10",
  },

  Thanjavur: {
    1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeMGHSEwzKh2WzBRPJ0iwspBdCppUtT2R902s0mT9AoA&s=10",
    2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV_-OsSTZ-qTFQqwmJIdI5Va6QHw56BvOv4OeqUfeHdA&s=10",
    3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZosNr2JIA5CGkLOMhT4_x9m4gfpNXDLw4_AQvLpYeZg&s=10",
  },
};

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
HOTEL PRICES
=========================================================

All hotel prices are between ₹800 and ₹1400 per night.
The price is automatically selected from the hotel name.
=========================================================
*/

const HOTEL_PRICES = {
  Chennai: 1200,
  Mahabalipuram: 1000,
  Madurai: 900,
  Alleppey: 1300,
  Kochi: 1400,
  Kodaikanal: 1000,
  Munnar: 1300,
  Ooty: 1200,
  Wayanad: 1100,
  Thanjavur: 900,
};

const getHotelPrice = (hotelName) => {
  const name = String(hotelName || "").toLowerCase();

  if (name.includes("chennai")) {
    return HOTEL_PRICES.Chennai;
  }

  if (name.includes("mahabalipuram")) {
    return HOTEL_PRICES.Mahabalipuram;
  }

  if (name.includes("madurai")) {
    return HOTEL_PRICES.Madurai;
  }

  if (name.includes("alleppey")) {
    return HOTEL_PRICES.Alleppey;
  }

  if (name.includes("kochi")) {
    return HOTEL_PRICES.Kochi;
  }

  if (name.includes("kodaikanal")) {
    return HOTEL_PRICES.Kodaikanal;
  }

  if (name.includes("munnar")) {
    return HOTEL_PRICES.Munnar;
  }

  if (name.includes("ooty")) {
    return HOTEL_PRICES.Ooty;
  }

  if (name.includes("wayanad")) {
    return HOTEL_PRICES.Wayanad;
  }

  if (name.includes("thanjavur")) {
    return HOTEL_PRICES.Thanjavur;
  }

  return 1100;
};

/*
=========================================================
ACTIVITY DETAILS
=========================================================
*/

const getActivityDetails = (name, type) => {
  const text = String(name || "").toLowerCase();

  if (type === "food") {
    return {
      duration: "45-60 min",
      description:
        "Recommended food stop for the day. Take a short break and enjoy the local meal.",
      planningTip:
        "Keep enough time for the meal before continuing to the next stop.",
    };
  }

  if (type === "hotel") {
    return {
      duration: "Overnight",
      description:
        "Check in after dinner and relax overnight at the recommended hotel.",
      planningTip:
        "Keep your travel documents and essentials ready before hotel check-in.",
    };
  }

  if (text.includes("beach")) {
    return {
      duration: "1-2 hrs",
      description:
        "Relax by the coast, enjoy the surroundings and take photos.",
      planningTip:
        "Carry water, sun protection and keep some free time for the beach.",
    };
  }

  if (
    text.includes("temple") ||
    text.includes("church") ||
    text.includes("basilica") ||
    text.includes("ashram")
  ) {
    return {
      duration: "1-2 hrs",
      description:
        "Explore the important architecture, surroundings and cultural details of the place.",
      planningTip:
        "Dress comfortably and allow extra time when the place is busy.",
    };
  }

  if (
    text.includes("museum") ||
    text.includes("palace") ||
    text.includes("gallery") ||
    text.includes("library") ||
    text.includes("memorial")
  ) {
    return {
      duration: "1-2 hrs",
      description:
        "Explore the main exhibits, historical features and important highlights.",
      planningTip:
        "Follow the visitor route and keep time for photographs and exhibits.",
    };
  }

  if (
    text.includes("park") ||
    text.includes("garden") ||
    text.includes("forest")
  ) {
    return {
      duration: "1-1.5 hrs",
      description:
        "Walk around the area, enjoy the scenery and spend relaxed time outdoors.",
      planningTip:
        "Wear comfortable footwear and keep water with you.",
    };
  }

  if (
    text.includes("lake") ||
    text.includes("dam") ||
    text.includes("viewpoint") ||
    text.includes("peak") ||
    text.includes("point") ||
    text.includes("rock")
  ) {
    return {
      duration: "1-1.5 hrs",
      description:
        "Enjoy the scenic views, take photographs and explore the surroundings.",
      planningTip:
        "Keep a small time buffer for travel and photography.",
    };
  }

  if (
    text.includes("waterfall") ||
    text.includes("falls")
  ) {
    return {
      duration: "1-2 hrs",
      description:
        "Enjoy the natural scenery, take photographs and spend time near the attraction.",
      planningTip:
        "Use suitable footwear and be careful on wet or uneven paths.",
    };
  }

  if (
    text.includes("market") ||
    text.includes("street") ||
    text.includes("shopping") ||
    text.includes("sculpture")
  ) {
    return {
      duration: "1-2 hrs",
      description:
        "Explore local shops, streets and nearby points of interest.",
      planningTip:
        "Keep personal shopping separate from the planned trip amount.",
    };
  }

  return {
    duration: "1-2 hrs",
    description:
      `Explore ${name}, enjoy the main highlights and take some time for photographs.`,
    planningTip:
      "Keep a small travel buffer before moving to the next stop.",
  };
};

/*
=========================================================
ACTIVITY HELPERS
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
  ...getActivityDetails(name, "place"),
});

const food = (
  time,
  name,
  meal = "food"
) => ({
  time,
  name,
  meal,
  amount: null,
  type: "food",
  ...getActivityDetails(name, "food"),
});

const hotel = (
  time,
  name
) => ({
  time,
  name,
  amount: getHotelPrice(name),
  type: "hotel",
  ...getActivityDetails(name, "hotel"),
});

/*
=========================================================
DETAILED ITINERARY DATA

ORDER FOR EVERY DAY:

08:00 AM  Breakfast
09:00 AM  Place
10:30 AM  Place
12:00 PM  Place
01:00 PM  Lunch
02:00 PM  Place
03:30 PM  Place
05:00 PM  Place
06:00 PM  Place
08:00 PM  Dinner
09:15 PM  Hotel

=========================================================
*/

const itineraryData = {
  /*
  =======================================================
  CHENNAI
  =======================================================
  */

  Chennai: {
    days: {
      1: [
        food(
          "08:00 AM",
          "Breakfast - Murugan Idli Shop",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Marina Beach",
          0
        ),

        place(
          "10:30 AM",
          "Kapaleeshwarar Temple",
          0
        ),

        place(
          "12:00 PM",
          "Fort St. George",
          25
        ),

        food(
          "01:00 PM",
          "Lunch - Sangeetha Restaurant",
          "lunch"
        ),

        place(
          "02:00 PM",
          "San Thome Basilica",
          0
        ),

        place(
          "03:30 PM",
          "Government Museum",
          50
        ),

        place(
          "05:00 PM",
          "Semmozhi Poonga",
          20
        ),

        place(
          "06:00 PM",
          "T Nagar Shopping",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - The Residency Towers",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Chennai Recommended Hotel"
        ),
      ],

      2: [
        food(
          "08:00 AM",
          "Breakfast - Saravana Bhavan",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Thousand Lights Mosque",
          0
        ),

        place(
          "10:30 AM",
          "Elliot's Beach",
          0
        ),

        place(
          "12:00 PM",
          "Guindy National Park",
          30
        ),

        food(
          "01:00 PM",
          "Lunch - Ratna Cafe",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Birla Planetarium",
          100
        ),

        place(
          "03:30 PM",
          "Valluvar Kottam",
          10
        ),

        place(
          "05:00 PM",
          "Besant Nagar Beach",
          0
        ),

        place(
          "06:00 PM",
          "Chennai Local Market",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - Murugan Idli Shop",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Chennai Recommended Hotel"
        ),
      ],

      3: [
        food(
          "08:00 AM",
          "Breakfast - Adyar Ananda Bhavan",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Marina Beach Sunrise",
          0
        ),

        place(
          "10:30 AM",
          "Kapaleeshwarar Temple",
          0
        ),

        place(
          "12:00 PM",
          "Fort St. George",
          25
        ),

        food(
          "01:00 PM",
          "Lunch - Woodlands Restaurant",
          "lunch"
        ),

        place(
          "02:00 PM",
          "San Thome Basilica",
          0
        ),

        place(
          "03:30 PM",
          "Government Museum",
          50
        ),

        place(
          "05:00 PM",
          "Elliot's Beach",
          0
        ),

        place(
          "06:00 PM",
          "T Nagar Shopping",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - The Residency Towers",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Chennai Recommended Hotel"
        ),
      ],
    },
  },

  /*
  =======================================================
  MAHABALIPURAM
  =======================================================
  */

  Mahabalipuram: {
    days: {
      1: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Shore Temple",
          40
        ),

        place(
          "10:30 AM",
          "Pancha Rathas",
          40
        ),

        place(
          "12:00 PM",
          "Arjuna's Penance",
          0
        ),

        food(
          "01:00 PM",
          "Lunch - Moonrakers",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Mahabalipuram Beach",
          0
        ),

        place(
          "03:30 PM",
          "Krishna's Butter Ball",
          0
        ),

        place(
          "05:00 PM",
          "Mahabalipuram Lighthouse",
          10
        ),

        place(
          "06:00 PM",
          "Local Stone Sculpture Street",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - Hotel",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Mahabalipuram Recommended Hotel"
        ),
      ],

      2: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Tiger Cave",
          0
        ),

        place(
          "10:30 AM",
          "Krishna's Butter Ball",
          0
        ),

        place(
          "12:00 PM",
          "Mahabalipuram Lighthouse",
          10
        ),

        food(
          "01:00 PM",
          "Lunch - Nautilus Restaurant",
          "lunch"
        ),

        place(
          "02:00 PM",
          "India Seashell Museum",
          100
        ),

        place(
          "03:30 PM",
          "Cave Temples",
          40
        ),

        place(
          "05:00 PM",
          "Varaha Cave Temple",
          0
        ),

        place(
          "06:00 PM",
          "Mahabalipuram Beach",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - Hotel",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Mahabalipuram Recommended Hotel"
        ),
      ],

      3: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Cave Temples",
          40
        ),

        place(
          "10:30 AM",
          "Varaha Cave Temple",
          0
        ),

        place(
          "12:00 PM",
          "Atiranachanda Cave",
          0
        ),

        food(
          "01:00 PM",
          "Lunch - Moonrakers",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Local Stone Sculpture Street",
          0
        ),

        place(
          "03:30 PM",
          "Shore Temple",
          40
        ),

        place(
          "05:00 PM",
          "Pancha Rathas",
          40
        ),

        place(
          "06:00 PM",
          "Mahabalipuram Beach",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - Hotel",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Mahabalipuram Recommended Hotel"
        ),
      ],
    },
  },

  /*
  =======================================================
  MADURAI
  =======================================================
  */

  Madurai: {
    days: {
      1: [
        food(
          "08:00 AM",
          "Breakfast - Murugan Idli Shop",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Meenakshi Amman Temple",
          0
        ),

        place(
          "10:30 AM",
          "Thirumalai Nayakkar Palace",
          50
        ),

        place(
          "12:00 PM",
          "Puthu Mandapam",
          0
        ),

        food(
          "01:00 PM",
          "Lunch - Ahaaram Restaurant",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Gandhi Memorial Museum",
          20
        ),

        place(
          "03:30 PM",
          "Koodal Azhagar Temple",
          0
        ),

        place(
          "05:00 PM",
          "Vandiyur Mariamman Teppakulam",
          0
        ),

        place(
          "06:00 PM",
          "Madurai Local Market",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - Heritage Madurai",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Madurai Recommended Hotel"
        ),
      ],

      2: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Gandhi Memorial Museum",
          20
        ),

        place(
          "10:30 AM",
          "Koodal Azhagar Temple",
          0
        ),

        place(
          "12:00 PM",
          "Thirumalai Nayakkar Palace Grounds",
          0
        ),

        food(
          "01:00 PM",
          "Lunch - Kumar Mess",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Mariamman Teppakulam Market",
          0
        ),

        place(
          "03:30 PM",
          "Meenakshi Amman Temple",
          0
        ),

        place(
          "05:00 PM",
          "Puthu Mandapam",
          0
        ),

        place(
          "06:00 PM",
          "Madurai Local Market",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - Heritage Madurai",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Madurai Recommended Hotel"
        ),
      ],

      3: [
        food(
          "08:00 AM",
          "Breakfast - Murugan Idli Shop",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Azhagar Kovil",
          0
        ),

        place(
          "10:30 AM",
          "Pazhamudir Solai",
          0
        ),

        place(
          "12:00 PM",
          "Samanar Hills",
          0
        ),

        food(
          "01:00 PM",
          "Lunch - Sri Saravana Bhavan",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Madurai Banana Market",
          0
        ),

        place(
          "03:30 PM",
          "Meenakshi Amman Temple",
          0
        ),

        place(
          "05:00 PM",
          "Vandiyur Mariamman Teppakulam",
          0
        ),

        place(
          "06:00 PM",
          "Puthu Mandapam",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - Heritage Madurai",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Madurai Recommended Hotel"
        ),
      ],
    },
  },

  /*
  =======================================================
  ALLEPPEY
  =======================================================
  */

  Alleppey: {
    days: {
      1: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Alleppey Backwaters",
          150
        ),

        place(
          "10:30 AM",
          "Houseboat Cruise",
          1200
        ),

        place(
          "12:00 PM",
          "Kuttanad Village",
          0
        ),

        food(
          "01:00 PM",
          "Lunch - Houseboat",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Sunset Backwater Cruise",
          300
        ),

        place(
          "03:30 PM",
          "Alappuzha Beach",
          0
        ),

        place(
          "05:00 PM",
          "Canoe Ride through Village Canals",
          700
        ),

        place(
          "06:00 PM",
          "Pathiramanal Island",
          100
        ),

        food(
          "08:00 PM",
          "Dinner - Hotel",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Alleppey Recommended Hotel"
        ),
      ],

      2: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Alappuzha Beach",
          0
        ),

        place(
          "10:30 AM",
          "Canoe Ride through Village Canals",
          700
        ),

        place(
          "12:00 PM",
          "Pathiramanal Island",
          100
        ),

        food(
          "01:00 PM",
          "Lunch - Thaff Restaurant",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Mannarasala Sree Nagaraja Temple",
          0
        ),

        place(
          "03:30 PM",
          "Marari Beach",
          0
        ),

        place(
          "05:00 PM",
          "Ambalappuzha Sree Krishna Temple",
          0
        ),

        place(
          "06:00 PM",
          "Krishnapuram Palace",
          75
        ),

        food(
          "08:00 PM",
          "Dinner - Marari Beach Resort",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Alleppey Recommended Hotel"
        ),
      ],

      3: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Marari Beach",
          0
        ),

        place(
          "10:30 AM",
          "Ambalappuzha Sree Krishna Temple",
          0
        ),

        place(
          "12:00 PM",
          "Krishnapuram Palace",
          75
        ),

        food(
          "01:00 PM",
          "Lunch - Indian Coffee House",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Revi Karunakaran Museum",
          150
        ),

        place(
          "03:30 PM",
          "Vembanad Lake Viewpoint",
          0
        ),

        place(
          "05:00 PM",
          "Karumadi Kuttan",
          0
        ),

        place(
          "06:00 PM",
          "Punnamada Lake",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - Hotel",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Alleppey Recommended Hotel"
        ),
      ],

      4: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Vembanad Lake Viewpoint",
          0
        ),

        place(
          "10:30 AM",
          "Karumadi Kuttan",
          0
        ),

        place(
          "12:00 PM",
          "Pathiramanal Bird Watching Area",
          100
        ),

        food(
          "01:00 PM",
          "Lunch - Thaff Restaurant",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Punnamada Lake",
          0
        ),

        place(
          "03:30 PM",
          "Alleppey Backwaters",
          150
        ),

        place(
          "05:00 PM",
          "Houseboat Cruise",
          1200
        ),

        place(
          "06:00 PM",
          "Alappuzha Beach",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - Marari Beach Resort",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Alleppey Recommended Hotel"
        ),
      ],
    },
  },

  /*
  =======================================================
  KOCHI
  =======================================================
  */

  Kochi: {
    days: {
      1: [
        food(
          "08:00 AM",
          "Breakfast - Kashi Art Cafe",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Fort Kochi",
          0
        ),

        place(
          "10:30 AM",
          "Chinese Fishing Nets",
          0
        ),

        place(
          "12:00 PM",
          "Mattancherry Palace",
          5
        ),

        food(
          "01:00 PM",
          "Lunch - Kadaloram Restaurant",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Jew Town",
          0
        ),

        place(
          "03:30 PM",
          "St. Francis Church",
          0
        ),

        place(
          "05:00 PM",
          "Santa Cruz Basilica",
          0
        ),

        place(
          "06:00 PM",
          "Princess Street",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - Taj Malabar",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Kochi Recommended Hotel"
        ),
      ],

      2: [
        food(
          "08:00 AM",
          "Breakfast - Fort House",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "St. Francis Church",
          0
        ),

        place(
          "10:30 AM",
          "Santa Cruz Basilica",
          0
        ),

        place(
          "12:00 PM",
          "Kerala Kathakali Centre",
          300
        ),

        food(
          "01:00 PM",
          "Lunch - Kashi Art Cafe",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Princess Street",
          0
        ),

        place(
          "03:30 PM",
          "Fort Kochi",
          0
        ),

        place(
          "05:00 PM",
          "Chinese Fishing Nets",
          0
        ),

        place(
          "06:00 PM",
          "Jew Town",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - Taj Malabar",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Kochi Recommended Hotel"
        ),
      ],

      3: [
        food(
          "08:00 AM",
          "Breakfast - Dhe Puttu",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Hill Palace Museum",
          30
        ),

        place(
          "10:30 AM",
          "Kerala Folklore Museum",
          100
        ),

        place(
          "12:00 PM",
          "Marine Drive",
          0
        ),

        food(
          "01:00 PM",
          "Lunch - Dhe Puttu",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Bolgatty Palace",
          0
        ),

        place(
          "03:30 PM",
          "Willingdon Island",
          0
        ),

        place(
          "05:00 PM",
          "Vypin Lighthouse",
          20
        ),

        place(
          "06:00 PM",
          "Cherai Beach",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - Taj Malabar",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Kochi Recommended Hotel"
        ),
      ],

      4: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Willingdon Island",
          0
        ),

        place(
          "10:30 AM",
          "Vypin Lighthouse",
          20
        ),

        place(
          "12:00 PM",
          "Cherai Beach",
          0
        ),

        food(
          "01:00 PM",
          "Lunch - Kadaloram Restaurant",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Kumbalangi Village",
          100
        ),

        place(
          "03:30 PM",
          "Marine Drive",
          0
        ),

        place(
          "05:00 PM",
          "Fort Kochi",
          0
        ),

        place(
          "06:00 PM",
          "Chinese Fishing Nets",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - Taj Malabar",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Kochi Recommended Hotel"
        ),
      ],
    },
  },

  /*
  =======================================================
  WAYANAD
  =======================================================
  */

  Wayanad: {
    days: {
      1: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Edakkal Caves",
          50
        ),

        place(
          "10:30 AM",
          "Heritage Museum",
          30
        ),

        place(
          "12:00 PM",
          "Phantom Rock",
          0
        ),

        food(
          "01:00 PM",
          "Lunch - Wilton Restaurant",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Ambukuthi Hills",
          0
        ),

        place(
          "03:30 PM",
          "Soochipara Falls",
          50
        ),

        place(
          "05:00 PM",
          "Kanthanpara Falls",
          40
        ),

        place(
          "06:00 PM",
          "Sunset Viewpoint",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - Vythiri Resort",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Wayanad Recommended Hotel"
        ),
      ],

      2: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Soochipara Falls",
          50
        ),

        place(
          "10:30 AM",
          "Kanthanpara Falls",
          40
        ),

        place(
          "12:00 PM",
          "Meenmutty Waterfalls",
          50
        ),

        food(
          "01:00 PM",
          "Lunch - Wilton Restaurant",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Sunset Viewpoint",
          0
        ),

        place(
          "03:30 PM",
          "Banasura Sagar Dam",
          40
        ),

        place(
          "05:00 PM",
          "Pookode Lake",
          40
        ),

        place(
          "06:00 PM",
          "Lakkidi Viewpoint",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - Vythiri Resort",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Wayanad Recommended Hotel"
        ),
      ],

      3: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Banasura Sagar Dam",
          40
        ),

        place(
          "10:30 AM",
          "Kuruva Island",
          100
        ),

        place(
          "12:00 PM",
          "Pookode Lake",
          40
        ),

        food(
          "01:00 PM",
          "Lunch - Hotel",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Lakkidi Viewpoint",
          0
        ),

        place(
          "03:30 PM",
          "Edakkal Caves",
          50
        ),

        place(
          "05:00 PM",
          "Phantom Rock",
          0
        ),

        place(
          "06:00 PM",
          "Ambukuthi Hills",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - Vythiri Resort",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Wayanad Recommended Hotel"
        ),
      ],

      4: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Chembra Peak",
          50
        ),

        place(
          "10:30 AM",
          "Thirunelli Temple",
          0
        ),

        place(
          "12:00 PM",
          "Kuruva Dweep Forest Walk",
          100
        ),

        food(
          "01:00 PM",
          "Lunch - Wilton Restaurant",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Sultan Bathery Jain Temple",
          0
        ),

        place(
          "03:30 PM",
          "Banasura Sagar Dam",
          40
        ),

        place(
          "05:00 PM",
          "Pookode Lake",
          40
        ),

        place(
          "06:00 PM",
          "Lakkidi Viewpoint",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - Vythiri Resort",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Wayanad Recommended Hotel"
        ),
      ],
    },
  },

  /*
  =======================================================
  OOTY
  =======================================================
  */

  Ooty: {
    days: {
      1: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Ooty Lake",
          15
        ),

        place(
          "10:30 AM",
          "Government Botanical Garden",
          30
        ),

        place(
          "12:00 PM",
          "Government Rose Garden",
          40
        ),

        food(
          "01:00 PM",
          "Lunch - Earl's Secret",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Charing Cross",
          0
        ),

        place(
          "03:30 PM",
          "Doddabetta Peak",
          15
        ),

        place(
          "05:00 PM",
          "Tea Factory and Tea Museum",
          20
        ),

        place(
          "06:00 PM",
          "Thread Garden",
          30
        ),

        food(
          "08:00 PM",
          "Dinner - Hotel",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Ooty Recommended Hotel"
        ),
      ],

      2: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Doddabetta Peak",
          15
        ),

        place(
          "10:30 AM",
          "Tea Factory and Tea Museum",
          20
        ),

        place(
          "12:00 PM",
          "Thread Garden",
          30
        ),

        food(
          "01:00 PM",
          "Lunch - Place to Bee",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Ooty Stone House",
          20
        ),

        place(
          "03:30 PM",
          "Ooty Lake",
          15
        ),

        place(
          "05:00 PM",
          "Government Botanical Garden",
          30
        ),

        place(
          "06:00 PM",
          "Charing Cross",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - Hotel",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Ooty Recommended Hotel"
        ),
      ],

      3: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Avalanche Lake",
          0
        ),

        place(
          "10:30 AM",
          "Emerald Lake",
          0
        ),

        place(
          "12:00 PM",
          "Pine Forest",
          0
        ),

        food(
          "01:00 PM",
          "Lunch - Earl's Secret",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Wenlock Downs",
          0
        ),

        place(
          "03:30 PM",
          "Government Rose Garden",
          40
        ),

        place(
          "05:00 PM",
          "Ooty Lake",
          15
        ),

        place(
          "06:00 PM",
          "Charing Cross",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - Hotel",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Ooty Recommended Hotel"
        ),
      ],

      4: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Sim's Park, Coonoor",
          30
        ),

        place(
          "10:30 AM",
          "Dolphin's Nose",
          0
        ),

        place(
          "12:00 PM",
          "Lamb's Rock",
          10
        ),

        food(
          "01:00 PM",
          "Lunch - 180° McIver",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Catherine Falls Viewpoint",
          0
        ),

        place(
          "03:30 PM",
          "Tea Factory and Tea Museum",
          20
        ),

        place(
          "05:00 PM",
          "Government Botanical Garden",
          30
        ),

        place(
          "06:00 PM",
          "Ooty Lake",
          15
        ),

        food(
          "08:00 PM",
          "Dinner - Sterling Ooty",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Ooty Recommended Hotel"
        ),
      ],
    },
  },

  /*
  =======================================================
  KODAIKANAL
  =======================================================
  */

  Kodaikanal: {
    days: {
      1: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Kodaikanal Lake",
          0
        ),

        place(
          "10:30 AM",
          "Coaker's Walk",
          30
        ),

        place(
          "12:00 PM",
          "Bryant Park",
          30
        ),

        food(
          "01:00 PM",
          "Lunch - Astoria Veg",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Kodaikanal Market",
          0
        ),

        place(
          "03:30 PM",
          "Pillar Rocks",
          20
        ),

        place(
          "05:00 PM",
          "Guna Caves Viewpoint",
          30
        ),

        place(
          "06:00 PM",
          "Pine Forest",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - Hotel",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Kodaikanal Recommended Hotel"
        ),
      ],

      2: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Pillar Rocks",
          20
        ),

        place(
          "10:30 AM",
          "Guna Caves Viewpoint",
          30
        ),

        place(
          "12:00 PM",
          "Pine Forest",
          0
        ),

        food(
          "01:00 PM",
          "Lunch - PotLuck",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Moir Point",
          20
        ),

        place(
          "03:30 PM",
          "Silver Cascade Falls",
          0
        ),

        place(
          "05:00 PM",
          "Berijam Lake",
          100
        ),

        place(
          "06:00 PM",
          "Silent Valley View",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - Hotel",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Kodaikanal Recommended Hotel"
        ),
      ],

      3: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Silver Cascade Falls",
          0
        ),

        place(
          "10:30 AM",
          "Berijam Lake",
          100
        ),

        place(
          "12:00 PM",
          "Caps Fly Valley",
          0
        ),

        food(
          "01:00 PM",
          "Lunch - Astoria Veg",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Silent Valley View",
          0
        ),

        place(
          "03:30 PM",
          "Poombarai Village",
          0
        ),

        place(
          "05:00 PM",
          "Mannavanur Lake",
          20
        ),

        place(
          "06:00 PM",
          "Kukkal Lake View",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - The Carlton",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Kodaikanal Recommended Hotel"
        ),
      ],

      4: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Poombarai Village",
          0
        ),

        place(
          "10:30 AM",
          "Mannavanur Lake",
          20
        ),

        place(
          "12:00 PM",
          "Kukkal Lake View",
          0
        ),

        food(
          "01:00 PM",
          "Lunch - PotLuck",
          "lunch"
        ),

        place(
          "02:00 PM",
          "La Saleth Church",
          0
        ),

        place(
          "03:30 PM",
          "Kodaikanal Lake",
          0
        ),

        place(
          "05:00 PM",
          "Coaker's Walk",
          30
        ),

        place(
          "06:00 PM",
          "Bryant Park",
          30
        ),

        food(
          "08:00 PM",
          "Dinner - The Carlton",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Kodaikanal Recommended Hotel"
        ),
      ],
    },
  },

  /*
  =======================================================
  MUNNAR
  =======================================================
  */

  Munnar: {
    days: {
      1: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Munnar Tea Gardens",
          0
        ),

        place(
          "10:30 AM",
          "Tea Museum",
          125
        ),

        place(
          "12:00 PM",
          "Mattupetty Dam",
          10
        ),

        food(
          "01:00 PM",
          "Lunch - Saravana Bhavan",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Echo Point",
          10
        ),

        place(
          "03:30 PM",
          "Eravikulam National Park",
          200
        ),

        place(
          "05:00 PM",
          "Kundala Lake",
          20
        ),

        place(
          "06:00 PM",
          "Photo Point",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - Hotel",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Munnar Recommended Hotel"
        ),
      ],

      2: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Eravikulam National Park",
          200
        ),

        place(
          "10:30 AM",
          "Kundala Lake",
          20
        ),

        place(
          "12:00 PM",
          "Kundala Dam",
          0
        ),

        food(
          "01:00 PM",
          "Lunch - Rasa Gurukulam",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Photo Point",
          0
        ),

        place(
          "03:30 PM",
          "Top Station",
          40
        ),

        place(
          "05:00 PM",
          "Anamudi Viewpoint",
          0
        ),

        place(
          "06:00 PM",
          "Lockhart Gap Viewpoint",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - Hotel",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Munnar Recommended Hotel"
        ),
      ],

      3: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Top Station",
          40
        ),

        place(
          "10:30 AM",
          "Anamudi Viewpoint",
          0
        ),

        place(
          "12:00 PM",
          "Lockhart Gap Viewpoint",
          0
        ),

        food(
          "01:00 PM",
          "Lunch - Saravana Bhavan",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Punarjani Traditional Village",
          150
        ),

        place(
          "03:30 PM",
          "Chinnar Wildlife Sanctuary",
          300
        ),

        place(
          "05:00 PM",
          "Lakkam Waterfalls",
          20
        ),

        place(
          "06:00 PM",
          "Rajamalai Viewpoint",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - The Munnar Queen",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Munnar Recommended Hotel"
        ),
      ],

      4: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Chinnar Wildlife Sanctuary",
          300
        ),

        place(
          "10:30 AM",
          "Lakkam Waterfalls",
          20
        ),

        place(
          "12:00 PM",
          "Rajamalai Viewpoint",
          0
        ),

        food(
          "01:00 PM",
          "Lunch - Local Kerala Restaurant",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Chokramudi Viewpoint",
          0
        ),

        place(
          "03:30 PM",
          "Munnar Tea Gardens",
          0
        ),

        place(
          "05:00 PM",
          "Mattupetty Dam",
          10
        ),

        place(
          "06:00 PM",
          "Echo Point",
          10
        ),

        food(
          "08:00 PM",
          "Dinner - The Munnar Queen",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Munnar Recommended Hotel"
        ),
      ],
    },
  },

  /*
  =======================================================
  THANJAVUR
  =======================================================
  */

  Thanjavur: {
    days: {
      1: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Brihadeeswarar Temple",
          0
        ),

        place(
          "10:30 AM",
          "Thanjavur Royal Palace",
          50
        ),

        place(
          "12:00 PM",
          "Saraswathi Mahal Library",
          0
        ),

        food(
          "01:00 PM",
          "Lunch - Hotel Karthik",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Art Gallery",
          20
        ),

        place(
          "03:30 PM",
          "Schwartz Church",
          0
        ),

        place(
          "05:00 PM",
          "Sangeetha Mahal",
          0
        ),

        place(
          "06:00 PM",
          "Sivaganga Park",
          10
        ),

        food(
          "08:00 PM",
          "Dinner - Hotel",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Thanjavur Recommended Hotel"
        ),
      ],

      2: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Schwartz Church",
          0
        ),

        place(
          "10:30 AM",
          "Sangeetha Mahal",
          0
        ),

        place(
          "12:00 PM",
          "Thanjavur Maratha Palace Courtyard",
          30
        ),

        food(
          "01:00 PM",
          "Lunch - Hotel Karthik",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Sivaganga Park",
          10
        ),

        place(
          "03:30 PM",
          "Brihadeeswarar Temple",
          0
        ),

        place(
          "05:00 PM",
          "Thanjavur Royal Palace",
          50
        ),

        place(
          "06:00 PM",
          "Art Gallery",
          20
        ),

        food(
          "08:00 PM",
          "Dinner - Hotel",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Thanjavur Recommended Hotel"
        ),
      ],

      3: [
        food(
          "08:00 AM",
          "Breakfast - Hotel",
          "breakfast"
        ),

        place(
          "09:00 AM",
          "Gangaikonda Cholapuram",
          0
        ),

        place(
          "10:30 AM",
          "Darasuram Airavatesvara Temple",
          0
        ),

        place(
          "12:00 PM",
          "Thiruvaiyaru Temple",
          0
        ),

        food(
          "01:00 PM",
          "Lunch - Local South Indian Restaurant",
          "lunch"
        ),

        place(
          "02:00 PM",
          "Kallanai Dam",
          0
        ),

        place(
          "03:30 PM",
          "Brihadeeswarar Temple",
          0
        ),

        place(
          "05:00 PM",
          "Thanjavur Royal Palace",
          50
        ),

        place(
          "06:00 PM",
          "Saraswathi Mahal Library",
          0
        ),

        food(
          "08:00 PM",
          "Dinner - Hotel",
          "dinner"
        ),

        hotel(
          "09:15 PM",
          "Thanjavur Recommended Hotel"
        ),
      ],
    },
  },
};

/*
=========================================================
DAY PLANNING DETAILS
=========================================================
*/

const getDayPlanning = (
  destinationName,
  dayNumber,
  activities
) => {
  const places = activities.filter(
    (item) => item.type === "place"
  );

  const foodStops = activities.filter(
    (item) => item.type === "food"
  );

  const hotelStops = activities.filter(
    (item) => item.type === "hotel"
  );

  const destinationTips = {
    Chennai: [
      "Start early to avoid heavier city traffic.",
      "Keep extra time between central Chennai and beach-side stops.",
      "Keep a small buffer for parking and local travel.",
    ],

    Mahabalipuram: [
      "Wear comfortable footwear because several heritage sites involve walking.",
      "Keep time for photography around the monuments and coastline.",
      "Avoid rushing between the heritage sites.",
    ],

    Madurai: [
      "Start early for temple visits and keep the afternoon relaxed.",
      "Keep comfortable clothing and footwear for walking.",
      "Reserve some time for local food and shopping.",
    ],

    Alleppey: [
      "Keep the main backwater activity as a priority for the day.",
      "Carry light clothing, water and sun protection.",
      "Keep some relaxed time for the backwater views.",
    ],

    Kochi: [
      "Group nearby Fort Kochi attractions together to reduce travel time.",
      "Keep time for walking through heritage streets.",
      "Allow a small buffer for local traffic.",
    ],

    Kodaikanal: [
      "Carry a light jacket and comfortable walking shoes.",
      "Hill-road travel can take longer, so keep a time buffer.",
      "Keep some flexible time for viewpoints and photography.",
    ],

    Munnar: [
      "Start early because several attractions are spread across hill roads.",
      "Carry a light jacket, water and comfortable footwear.",
      "Keep extra time for scenic photo stops.",
    ],

    Ooty: [
      "Start early for viewpoints and popular attractions.",
      "Carry a light jacket and comfortable walking shoes.",
      "Keep shopping time separate from the planned trip amount.",
    ],

    Wayanad: [
      "Start early because attractions are spread across the region.",
      "Wear comfortable footwear for waterfalls and forest areas.",
      "Keep extra travel time on hill roads.",
    ],

    Thanjavur: [
      "Start early for heritage sites and keep the afternoon relaxed.",
      "Allow time to explore the architecture instead of rushing through it.",
      "Keep personal shopping outside the planned activity budget.",
    ],
  };

  return {
    overview:
      places.length > 0
        ? `Day ${dayNumber} covers ${places.length} main ${
            places.length === 1 ? "place" : "places"
          } with planned food breaks, hotel stay and local travel time.`
        : `Day ${dayNumber} is planned with food breaks, hotel stay and local travel time.`,

    startTime:
      activities[0]?.time ||
      "Flexible start",

    endTime:
      activities[activities.length - 1]?.time ||
      "Flexible finish",

    mainStops: places.map(
      (item) => item.name
    ),

    foodStops: foodStops.map(
      (item) => item.name
    ),

    hotelStops: hotelStops.map(
      (item) => item.name
    ),

    tips:
      destinationTips[destinationName] || [
        "Keep a small buffer between activities.",
        "Carry water and comfortable footwear.",
        "Keep personal shopping outside the planned trip amount.",
      ],
  };
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

      planning: getDayPlanning(
        destination.name,
        dayNumber,
        activities
      ),
    });
  }

  /*
  =========================================================
  CALCULATE PLACE / ACTIVITY CHARGES
  =========================================================
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
  CALCULATE HOTEL CHARGES
  =========================================================
  */

  let totalHotelAmount = 0;

  itinerary.forEach(
    (day) => {
      day.activities.forEach(
        (item) => {
          if (
            item.type === "hotel" &&
            typeof item.amount === "number"
          ) {
            totalHotelAmount +=
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
  ESTIMATED TOTAL
  =========================================================

  Base Trip Amount
       +
  Place / Activity Charges
       +
  Hotel Charges
       =
  Estimated Total

  Food is NOT included.
  */

  const estimatedTotal =
    baseAmount +
    totalPlaceAmount +
    totalHotelAmount;

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

    /*
    IMAGE
    */

    image:
      planImages[destination.name]?.[days] ||
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
    HOTEL AMOUNT
    */

    hotelAmount:
      totalHotelAmount,

    /*
    FINAL AMOUNT
    */

    price:
      estimatedTotal,

    /*
    PLACES
    */

    places:
      destination.places || [],

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
                  item.type === "place"
              )
              .map(
                (item) =>
                  item.name
              )
        )
        .slice(
          0,
          4
        ),

    /*
    COMPLETE ITINERARY
    */

    itinerary,

    /*
    PLANNING SUMMARY
    */

    planningSummary:
      itinerary.map(
        (day) => ({
          day: day.day,
          title: day.title,
          ...day.planning,
        })
      ),

    /*
    NUMBER OF PLACE ENTRIES
    */

    placeCount:
      itinerary.reduce(
        (total, day) =>
          total +
          day.activities.filter(
            (item) =>
              item.type === "place"
          ).length,
        0
      ),

    /*
    NUMBER OF HOTEL ENTRIES
    */

    hotelCount:
      itinerary.reduce(
        (total, day) =>
          total +
          day.activities.filter(
            (item) =>
              item.type === "hotel"
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

export default destinationPlans;