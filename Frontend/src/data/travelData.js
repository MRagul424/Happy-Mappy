// ============================================================
// HAPPY MAPPY - TRAVEL DATA
// ============================================================
// Daily schedule:
// Multi-day plans:
//   Breakfast : 8:00 AM - 9:00 AM
//   Places    : Morning
//   Lunch     : 1:00 PM - 2:00 PM
//   Places    : Afternoon / Evening
//   Dinner    : 7:30 PM - 8:30 PM
//   Hotel     : 9:15 PM
//
// 1-day plans:
//   Breakfast : 8:00 AM - 9:00 AM
//   Lunch     : 1:00 PM - 2:00 PM
//   Dinner    : 8:00 PM - 9:00 PM
//   NO HOTEL
//   NO EVENING SNACK
// ============================================================


// ============================================================
// DESTINATIONS
// ============================================================

export const destinations = [
  {
    id: 1,
    name: "Munnar",
    state: "Kerala",
    category: "Nature",
    duration: "3 Days",
    description:
      "Beautiful hill station famous for tea gardens, misty mountains and waterfalls.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL6PPVGlO5JzRBb2qfMtgtAfqZewPuohGG2ph7TJro1Q&s=10",
    places: [
      "Munnar Tea Gardens",
      "Eravikulam National Park",
      "Mattupetty Dam",
      "Top Station",
    ],
    food: [
      "Appam & Stew",
      "Kerala Sadya",
      "Banana Chips",
    ],
  },

  {
    id: 2,
    name: "Alleppey",
    state: "Kerala",
    category: "Backwaters",
    duration: "2 Days",
    description:
      "Enjoy Kerala's famous backwaters, houseboats and peaceful village scenery.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnwUzWOCOhvoIM_gB0u0LJOQWmqCq7hjK6NZ8sXcxvkA&s=10",
    places: [
      "Alleppey Backwaters",
      "Houseboat Cruise",
      "Alappuzha Beach",
      "Kuttanad",
    ],
    food: [
      "Fish Curry",
      "Appam & Stew",
      "Kerala Sadya",
    ],
  },

  {
    id: 3,
    name: "Kochi",
    state: "Kerala",
    category: "Heritage",
    duration: "2 Days",
    description:
      "A historic coastal city combining Portuguese, Dutch and Indian heritage.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWacKXjFVSXzcUrHi5ROXbMlYKZvIDbo_gsjknRaaQcA&s=10",
    places: [
      "Fort Kochi",
      "Chinese Fishing Nets",
      "Mattancherry Palace",
      "Jew Town",
    ],
    food: [
      "Kerala Parotta",
      "Fish Curry",
      "Appam & Stew",
    ],
  },

  {
    id: 4,
    name: "Wayanad",
    state: "Kerala",
    category: "Adventure",
    duration: "3 Days",
    description:
      "Explore forests, waterfalls, caves and beautiful mountain landscapes.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTicXJ0_-NWChd5H2lZsUIJ7gUVDGEkBGd4igNorw0e9A&s=10",
    places: [
      "Edakkal Caves",
      "Soochipara Falls",
      "Banasura Sagar Dam",
      "Chembra Peak",
    ],
    food: [
      "Malabar Biryani",
      "Pathiri",
      "Banana Chips",
    ],
  },

  {
    id: 5,
    name: "Ooty",
    state: "Tamil Nadu",
    category: "Hill Station",
    duration: "3 Days",
    description:
      "A popular hill station known for cool weather, tea gardens and scenic views.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhjCMcidBzYYTj-cwZXI6CDCeSVDjbsYf0YWF4Ld63A&s=10",
    places: [
      "Ooty Lake",
      "Botanical Garden",
      "Doddabetta Peak",
      "Nilgiri Mountain Railway",
    ],
    food: [
      "Ooty Varkey",
      "South Indian Meals",
      "Homemade Chocolates",
    ],
  },

  {
    id: 6,
    name: "Kodaikanal",
    state: "Tamil Nadu",
    category: "Nature",
    duration: "3 Days",
    description:
      "Peaceful hill station famous for lakes, forests and beautiful viewpoints.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1SgZ9A8lADcE17I0UFNa3vflj9O4BLPXHiPyk7lqEjw&s=10",
    places: [
      "Kodaikanal Lake",
      "Coaker's Walk",
      "Pillar Rocks",
      "Bryant Park",
    ],
    food: [
      "Parotta",
      "South Indian Meals",
      "Homemade Chocolates",
    ],
  },

  {
    id: 7,
    name: "Chennai",
    state: "Tamil Nadu",
    category: "City",
    duration: "1 Day",
    description:
      "A vibrant coastal city with beaches, temples, food and cultural attractions.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQntzvYHW4eHnJeMjPuipRngACGXplSWt0N9Q2m7keLhg&s=10",
    places: [
      "Marina Beach",
      "Kapaleeshwarar Temple",
      "Fort St George",
      "San Thome Basilica",
    ],
    food: [
      "Idli & Sambar",
      "Masala Dosa",
      "Filter Coffee",
    ],
  },

  {
    id: 8,
    name: "Mahabalipuram",
    state: "Tamil Nadu",
    category: "Heritage",
    duration: "1 Day",
    description:
      "Ancient coastal town famous for UNESCO World Heritage monuments.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuTC-eiDJ60JRmTUW2KXbegpT2MBHFwAQnflz_6d7KNA&s=10",
    places: [
      "Shore Temple",
      "Arjuna's Penance",
      "Pancha Rathas",
      "Mahabalipuram Beach",
    ],
    food: [
      "Seafood",
      "Idli & Sambar",
      "Masala Dosa",
    ],
  },

  {
    id: 9,
    name: "Madurai",
    state: "Tamil Nadu",
    category: "Spiritual",
    duration: "1 Day",
    description:
      "One of India's oldest cities, famous for temples and Tamil culture.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRySlx6bkLz5wQyaA6KcJPUhLBqy6i5tvKJPnRCyotj1w&s=10",
    places: [
      "Meenakshi Amman Temple",
      "Thirumalai Nayakkar Palace",
      "Gandhi Memorial Museum",
      "Vandiyur Mariamman Teppakulam",
    ],
    food: [
      "Jigarthanda",
      "Parotta",
      "Idli & Sambar",
    ],
  },

  {
    id: 10,
    name: "Thanjavur",
    state: "Tamil Nadu",
    category: "Heritage",
    duration: "2 Days",
    description:
      "A cultural destination famous for the magnificent Brihadeeswarar Temple.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4NHcjsVaJOuR2AQIcLC9GgCx3eGG_PEurECT8Gdwxw&s=10",
    places: [
      "Brihadeeswarar Temple",
      "Thanjavur Palace",
      "Saraswathi Mahal Library",
      "Art Gallery",
    ],
    food: [
      "Thanjavur Meals",
      "Pongal",
      "Filter Coffee",
    ],
  },
];


// ============================================================
// HELPER FUNCTIONS
// ============================================================

const place = (name, time, amount = 0) => ({
  name,
  time,
  amount,
  type: "place",
});

const food = (name, time, meal) => ({
  name,
  time,
  amount: 0,
  type: "food",
  meal,
});

const travel = (name, time, amount = 0) => ({
  name,
  time,
  amount,
  type: "place",
});

const hotel = (
  name,
  time = "9:15 PM",
  amount = 1200
) => ({
  name,
  time,
  amount,
  type: "hotel",
  duration: "Overnight",
});


// ============================================================
// TRAVEL PLANS
// ============================================================

export const plans = [

  // ==========================================================
  // PLAN 1 - KERALA DREAM ESCAPE
  // ==========================================================

  {
    id: 1,
    title: "Kerala Dream Escape",
    destination: "Munnar • Alleppey • Kochi",
    days: 5,
    nights: 4,
    category: "Nature",
    price: 23300,
    baseAmount: 12000,
    baseAmountPerDay: 2400,
    placeAmount: 6500,

    baseIncludes: [
      "Basic transportation",
      "Hotel accommodation support",
      "Local sightseeing",
      "Trip planning assistance",
    ],

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLs1CKXG8MI4a7GAYUiiF3QnIa5yuxQWj5EXq2P31W8A&s=10",

    highlights: [
      "Tea Gardens",
      "Houseboat",
      "Fort Kochi",
    ],

    places: [
      "Munnar Tea Gardens",
      "Alleppey Houseboat",
      "Fort Kochi",
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Munnar",

        activities: [
          food(
            "Breakfast - Saravana Bhavan Munnar",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          place(
            "Munnar Tea Gardens",
            "9:15 AM - 10:45 AM",
            500
          ),

          place(
            "Tea Museum",
            "11:00 AM - 12:30 PM",
            100
          ),

          food(
            "Lunch - Radhika Pure Vegetarian",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Top Station",
            "2:15 PM - 3:45 PM"
          ),

          place(
            "Kundala Lake",
            "4:00 PM - 5:30 PM"
          ),

          food(
            "Dinner - The Hornbill Restaurant",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),

          hotel("Blanket Hotel & Spa"),
        ],
      },

      {
        day: 2,
        title: "Explore Munnar",

        activities: [
          food(
            "Breakfast - Grand Spices Restaurant",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          place(
            "Eravikulam National Park",
            "9:15 AM - 10:45 AM",
            200
          ),

          place(
            "Rajamalai View Point",
            "11:00 AM - 12:30 PM"
          ),

          food(
            "Lunch - Munnar Samrudhi Restaurant",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Mattupetty Dam",
            "2:15 PM - 3:45 PM",
            100
          ),

          place(
            "Echo Point",
            "4:00 PM - 5:30 PM",
            50
          ),

          food(
            "Dinner - Parakkat Spice Merchant Restaurant",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),

          hotel("Amber Dale Munnar"),
        ],
      },

      {
        day: 3,
        title: "Munnar to Alleppey",

        activities: [
          food(
            "Breakfast - Rochas Restaurant Munnar",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          travel(
            "Travel to Alleppey",
            "9:15 AM - 12:15 PM",
            1000
          ),

          food(
            "Lunch - Thaff Restaurant, Alappuzha",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Alleppey Backwaters",
            "2:15 PM - 4:00 PM",
            500
          ),

          place(
            "Alappuzha Beach",
            "4:15 PM - 5:45 PM"
          ),

          food(
            "Dinner - Harbour Restaurant, Alappuzha",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),

          hotel("Ramada by Wyndham Alleppey"),
        ],
      },

      {
        day: 4,
        title: "Alleppey to Kochi",

        activities: [
          food(
            "Breakfast - Mushroom Restaurant, Alappuzha",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          place(
            "Houseboat Cruise",
            "9:15 AM - 11:15 AM",
            800
          ),

          travel(
            "Travel to Kochi",
            "11:30 AM - 12:30 PM",
            500
          ),

          food(
            "Lunch - Kadaloram Seafood Restaurant, Kochi",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Fort Kochi",
            "2:15 PM - 4:00 PM"
          ),

          place(
            "Chinese Fishing Nets",
            "4:15 PM - 5:30 PM"
          ),

          food(
            "Dinner - Kashi Art Cafe, Kochi",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),

          hotel("Eighth Bastion, Kochi"),
        ],
      },

      {
        day: 5,
        title: "Kochi Sightseeing and Departure",

        activities: [
          food(
            "Breakfast - Kadaloram Restaurant, Kochi",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          place(
            "Mattancherry Palace",
            "9:15 AM - 10:45 AM"
          ),

          place(
            "Jew Town",
            "11:00 AM - 12:30 PM"
          ),

          food(
            "Lunch - Fort House Restaurant, Kochi",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Kochi Local Market",
            "2:15 PM - 4:00 PM"
          ),

          place(
            "Departure",
            "4:15 PM - 6:00 PM"
          ),

          food(
            "Dinner - Kerala Kitchen, Kochi",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),
        ],
      },
    ],
  },


  // ==========================================================
  // PLAN 2 - TAMIL NADU HERITAGE EXPLORER
  // ==========================================================

  {
    id: 2,
    title: "Tamil Nadu Heritage Explorer",
    destination:
      "Chennai • Mahabalipuram • Thanjavur • Madurai",
    days: 7,
    nights: 6,
    category: "Heritage",
    price: 31200,
    baseAmount: 15000,
    baseAmountPerDay: 2143,
    placeAmount: 9000,

    baseIncludes: [
      "Basic transportation",
      "Hotel accommodation support",
      "Heritage sightseeing",
      "Trip planning assistance",
    ],

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe1geHESCKoUttZQW7mkdnCspWj2zW3G6KCUTT565DaQ&s=10",

    highlights: [
      "Chennai",
      "Mahabalipuram",
      "Thanjavur",
      "Madurai",
    ],

    places: [
      "Marina Beach",
      "Shore Temple",
      "Brihadeeswarar Temple",
      "Meenakshi Amman Temple",
    ],

    itinerary: [
      {
        day: 1,
        title: "Chennai City Tour",

        activities: [
          food(
            "Breakfast - Murugan Idli Shop, Chennai",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          place(
            "Marina Beach",
            "9:15 AM - 10:45 AM"
          ),

          place(
            "Kapaleeshwarar Temple",
            "11:00 AM - 12:30 PM"
          ),

          food(
            "Lunch - Saravana Bhavan, Chennai",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Fort St George",
            "2:15 PM - 3:45 PM",
            200
          ),

          place(
            "San Thome Basilica",
            "4:00 PM - 5:30 PM"
          ),

          food(
            "Dinner - Buhari Hotel, Chennai",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),

          hotel("The Park Chennai"),
        ],
      },

      {
        day: 2,
        title: "Chennai to Mahabalipuram",

        activities: [
          food(
            "Breakfast - Adyar Ananda Bhavan, Chennai",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          travel(
            "Travel to Mahabalipuram",
            "9:15 AM - 10:30 AM",
            500
          ),

          place(
            "Shore Temple",
            "10:45 AM - 12:15 PM",
            40
          ),

          food(
            "Lunch - Moonrakers, Mahabalipuram",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Arjuna's Penance",
            "2:15 PM - 3:45 PM",
            40
          ),

          place(
            "Mahabalipuram Beach",
            "4:30 PM - 6:00 PM"
          ),

          food(
            "Dinner - The Wharf Restaurant, Mahabalipuram",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),

          hotel("Radisson Blu Resort Temple Bay"),
        ],
      },

      {
        day: 3,
        title: "Mahabalipuram to Thanjavur",

        activities: [
          food(
            "Breakfast - Hotel Mamalla Heritage",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          travel(
            "Travel to Thanjavur",
            "9:15 AM - 12:15 PM",
            1200
          ),

          food(
            "Lunch - Sathars Restaurant, Thanjavur",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Thanjavur Palace",
            "2:15 PM - 3:45 PM",
            100
          ),

          place(
            "Art Gallery",
            "4:00 PM - 5:30 PM",
            50
          ),

          food(
            "Dinner - Ideal Beach Restaurant, Thanjavur",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),

          hotel("Hotel Gnanam"),
        ],
      },

      {
        day: 4,
        title: "Thanjavur Heritage",

        activities: [
          food(
            "Breakfast - Hotel Karthik, Thanjavur",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          place(
            "Brihadeeswarar Temple",
            "9:15 AM - 10:45 AM"
          ),

          place(
            "Saraswathi Mahal Library",
            "11:00 AM - 12:30 PM",
            50
          ),

          food(
            "Lunch - Hotel Parisutham, Thanjavur",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Gangaikonda Cholapuram",
            "2:15 PM - 3:45 PM"
          ),

          place(
            "Local Handicraft Shopping",
            "4:00 PM - 5:30 PM"
          ),

          food(
            "Dinner - Thanjavur Royal Kitchen",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),

          hotel("Hotel Temple Tower"),
        ],
      },

      {
        day: 5,
        title: "Thanjavur to Madurai",

        activities: [
          food(
            "Breakfast - Hotel Temple Tower Restaurant",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          travel(
            "Travel to Madurai",
            "9:15 AM - 12:15 PM",
            1200
          ),

          food(
            "Lunch - Sree Sabarees, Madurai",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Gandhi Memorial Museum",
            "2:15 PM - 3:45 PM",
            20
          ),

          place(
            "Vandiyur Mariamman Teppakulam",
            "4:00 PM - 5:30 PM"
          ),

          food(
            "Dinner - Konar Mess, Madurai",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),

          hotel("Gateway Madurai"),
        ],
      },

      {
        day: 6,
        title: "Madurai Temple Tour",

        activities: [
          food(
            "Breakfast - Murugan Idli Shop, Madurai",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          place(
            "Meenakshi Amman Temple",
            "9:15 AM - 11:00 AM"
          ),

          place(
            "Thirumalai Nayakkar Palace",
            "11:15 AM - 12:30 PM",
            50
          ),

          food(
            "Lunch - Kumar Mess, Madurai",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Alagar Koyil",
            "2:15 PM - 3:45 PM"
          ),

          place(
            "Local Market",
            "4:00 PM - 5:30 PM"
          ),

          food(
            "Dinner - Amsavalli Bhavan, Madurai",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),

          hotel("Courtyard by Marriott Madurai"),
        ],
      },

      {
        day: 7,
        title: "Madurai Departure",

        activities: [
          food(
            "Breakfast - Sri Saravana Bhavan, Madurai",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          place(
            "Puthu Mandapam",
            "9:15 AM - 10:45 AM"
          ),

          place(
            "Madurai Gandhi Road Heritage Walk",
            "11:00 AM - 12:30 PM"
          ),

          food(
            "Lunch - Annapoorna Mithai, Madurai",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Departure Preparation",
            "2:15 PM - 4:00 PM"
          ),

          place(
            "Departure",
            "4:15 PM - 6:00 PM"
          ),

          food(
            "Dinner - Madurai Kumar Mess",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),
        ],
      },
    ],
  },


  // ==========================================================
  // PLAN 3 - KERALA BACKWATER BLISS
  // ==========================================================

  {
    id: 3,
    title: "Kerala Backwater Bliss",
    destination: "Alleppey • Kochi",
    days: 3,
    nights: 2,
    category: "Backwaters",
    price: 14900,
    baseAmount: 8000,
    baseAmountPerDay: 2667,
    placeAmount: 4500,

    baseIncludes: [
      "Transportation",
      "Hotel accommodation support",
      "Backwater sightseeing",
      "Trip planning assistance",
    ],

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnwUzWOCOhvoIM_gB0u0LJOQWmqCq7hjK6NZ8sXcxvkA&s=10",

    highlights: [
      "Backwaters",
      "Houseboat",
      "Fort Kochi",
    ],

    places: [
      "Alleppey Backwaters",
      "Houseboat Cruise",
      "Fort Kochi",
    ],

    itinerary: [
      {
        day: 1,
        title: "Alleppey Arrival",

        activities: [
          food(
            "Breakfast - Indian Coffee House, Alappuzha",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          place(
            "Alleppey Backwaters",
            "9:15 AM - 10:45 AM",
            300
          ),

          place(
            "Kuttanad",
            "11:00 AM - 12:30 PM"
          ),

          food(
            "Lunch - Thaff Restaurant, Alappuzha",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Alappuzha Beach",
            "2:15 PM - 4:00 PM"
          ),

          place(
            "Alappuzha Lighthouse",
            "4:15 PM - 5:30 PM"
          ),

          food(
            "Dinner - Harbour Restaurant, Alappuzha",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),

          hotel("Sterling Lake Palace Alleppey"),
        ],
      },

      {
        day: 2,
        title: "Houseboat and Kochi",

        activities: [
          food(
            "Breakfast - Ramada by Wyndham Alleppey Restaurant",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          place(
            "Houseboat Cruise",
            "9:15 AM - 11:15 AM",
            800
          ),

          travel(
            "Travel to Kochi",
            "11:30 AM - 12:30 PM",
            500
          ),

          food(
            "Lunch - Kadaloram Restaurant, Kochi",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Fort Kochi",
            "2:15 PM - 4:00 PM"
          ),

          place(
            "Chinese Fishing Nets",
            "4:15 PM - 5:30 PM"
          ),

          food(
            "Dinner - Kashi Art Cafe, Kochi",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),

          hotel("Forte Kochi"),
        ],
      },

      {
        day: 3,
        title: "Kochi Departure",

        activities: [
          food(
            "Breakfast - Fort House Restaurant, Kochi",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          place(
            "Mattancherry Palace",
            "9:15 AM - 10:45 AM"
          ),

          place(
            "Jew Town",
            "11:00 AM - 12:30 PM"
          ),

          food(
            "Lunch - Kerala Kitchen, Kochi",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Kerala Folklore Museum",
            "2:15 PM - 4:00 PM"
          ),

          place(
            "Marine Drive",
            "4:15 PM - 6:00 PM"
          ),

          food(
            "Dinner - Dhe Puttu, Kochi",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),
        ],
      },
    ],
  },


  // ==========================================================
  // PLAN 4 - WAYANAD ADVENTURE
  // ==========================================================

  {
    id: 4,
    title: "Wayanad Adventure",
    destination: "Wayanad",
    days: 3,
    nights: 2,
    category: "Adventure",
    price: 13900,
    baseAmount: 7500,
    baseAmountPerDay: 2500,
    placeAmount: 4000,

    baseIncludes: [
      "Transportation",
      "Hotel accommodation support",
      "Adventure sightseeing",
      "Trip planning assistance",
    ],

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTicXJ0_-NWChd5H2lZsUIJ7gUVDGEkBGd4igNorw0e9A&s=10",

    highlights: [
      "Edakkal Caves",
      "Soochipara Falls",
      "Banasura Sagar Dam",
    ],

    places: [
      "Edakkal Caves",
      "Soochipara Falls",
      "Banasura Sagar Dam",
    ],

    itinerary: [
      {
        day: 1,
        title: "Wayanad Arrival",

        activities: [
          food(
            "Breakfast - 1980's A Nostalgic Restaurant, Wayanad",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          place(
            "Edakkal Caves",
            "9:15 AM - 11:00 AM",
            100
          ),

          place(
            "Ambukuthi Hills",
            "11:15 AM - 12:30 PM"
          ),

          food(
            "Lunch - Wilton Restaurant, Wayanad",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Soochipara Falls",
            "2:15 PM - 4:00 PM",
            100
          ),

          place(
            "Wayanad View Point",
            "4:15 PM - 5:30 PM"
          ),

          food(
            "Dinner - The Jubilee Restaurant, Wayanad",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),

          hotel("Vythiri Village Resort"),
        ],
      },

      {
        day: 2,
        title: "Wayanad Nature Tour",

        activities: [
          food(
            "Breakfast - Udupi Restaurant, Wayanad",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          place(
            "Banasura Sagar Dam",
            "9:15 AM - 11:00 AM",
            50
          ),

          place(
            "Banasura Hills",
            "11:15 AM - 12:30 PM"
          ),

          food(
            "Lunch - The Coffee Grove Restaurant, Wayanad",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Pookode Lake",
            "2:15 PM - 4:00 PM",
            50
          ),

          place(
            "Lakkidi View Point",
            "4:15 PM - 5:30 PM"
          ),

          food(
            "Dinner - Green Gates Restaurant, Wayanad",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),

          hotel("Taj Wayanad Resort & Spa"),
        ],
      },

      {
        day: 3,
        title: "Wayanad Departure",

        activities: [
          food(
            "Breakfast - Wilton Restaurant Annex, Wayanad",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          place(
            "Chembra Peak",
            "9:15 AM - 11:00 AM"
          ),

          place(
            "Heart Lake",
            "11:15 AM - 12:30 PM"
          ),

          food(
            "Lunch - The Wayanad Gate Restaurant",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Wayanad Wildlife Sanctuary",
            "2:15 PM - 3:45 PM"
          ),

          place(
            "Departure",
            "4:00 PM - 6:00 PM"
          ),

          food(
            "Dinner - Udupi Restaurant, Wayanad",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),
        ],
      },
    ],
  },


  // ==========================================================
  // PLAN 5 - OOTY HILL ESCAPE
  // ==========================================================

  {
    id: 5,
    title: "Ooty Hill Escape",
    destination: "Ooty",
    days: 3,
    nights: 2,
    category: "Hill Station",
    price: 13400,
    baseAmount: 7000,
    baseAmountPerDay: 2333,
    placeAmount: 4000,

    baseIncludes: [
      "Transportation",
      "Hotel accommodation support",
      "Hill station sightseeing",
      "Trip planning assistance",
    ],

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhjCMcidBzYYTj-cwZXI6CDCeSVDjbsYf0YWF4Ld63A&s=10",

    highlights: [
      "Ooty Lake",
      "Botanical Garden",
      "Doddabetta Peak",
    ],

    places: [
      "Ooty Lake",
      "Botanical Garden",
      "Doddabetta Peak",
    ],

    itinerary: [
      {
        day: 1,
        title: "Ooty Arrival",

        activities: [
          food(
            "Breakfast - Earl's Secret, Ooty",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          place(
            "Ooty Lake",
            "9:15 AM - 10:45 AM",
            100
          ),

          place(
            "St. Stephen's Church",
            "11:00 AM - 12:30 PM",
            50
          ),

          food(
            "Lunch - Ascot Multi Cuisine Restaurant, Ooty",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Botanical Garden",
            "2:15 PM - 3:45 PM",
            50
          ),

          place(
            "Rose Garden",
            "4:00 PM - 5:30 PM"
          ),

          food(
            "Dinner - Nahar's Restaurant, Ooty",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),

          hotel("Savoy Ooty"),
        ],
      },

      {
        day: 2,
        title: "Ooty Nature Tour",

        activities: [
          food(
            "Breakfast - Nahar's Sidewalk Cafe, Ooty",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          place(
            "Doddabetta Peak",
            "9:15 AM - 10:45 AM",
            50
          ),

          place(
            "Tea Factory",
            "11:00 AM - 12:30 PM",
            100
          ),

          food(
            "Lunch - Place To Bee, Ooty",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Pine Forest",
            "2:15 PM - 3:45 PM"
          ),

          place(
            "Needle Rock View Point",
            "4:00 PM - 5:30 PM"
          ),

          food(
            "Dinner - Savoy Restaurant, Ooty",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),

          hotel("Sterling Ooty Fern Hill"),
        ],
      },

      {
        day: 3,
        title: "Ooty Departure",

        activities: [
          food(
            "Breakfast - King's Star Restaurant, Ooty",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          place(
            "Nilgiri Mountain Railway",
            "9:15 AM - 11:00 AM",
            500
          ),

          place(
            "Coonoor Tea Gardens",
            "11:15 AM - 12:30 PM"
          ),

          food(
            "Lunch - Ascot Restaurant, Ooty",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Ooty Local Market",
            "2:15 PM - 3:45 PM"
          ),

          place(
            "Departure",
            "4:00 PM - 6:00 PM"
          ),

          food(
            "Dinner - Ooty Heritage Kitchen",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),
        ],
      },
    ],
  },


  // ==========================================================
  // PLAN 6 - KODAIKANAL
  // ==========================================================

  {
    id: 6,
    title: "Kodaikanal Nature Escape",
    destination: "Kodaikanal",
    days: 3,
    nights: 2,
    category: "Nature",
    price: 13200,
    baseAmount: 7000,
    baseAmountPerDay: 2333,
    placeAmount: 3800,

    baseIncludes: [
      "Transportation",
      "Hotel accommodation support",
      "Nature sightseeing",
      "Trip planning assistance",
    ],

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1SgZ9A8lADcE17I0UFNa3vflj9O4BLPXHiPyk7lqEjw&s=10",

    highlights: [
      "Kodaikanal Lake",
      "Coaker's Walk",
      "Pillar Rocks",
    ],

    places: [
      "Kodaikanal Lake",
      "Coaker's Walk",
      "Pillar Rocks",
    ],

    itinerary: [
      {
        day: 1,
        title: "Kodaikanal Arrival",

        activities: [
          food(
            "Breakfast - Tava Vegetarian Restaurant, Kodaikanal",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          place(
            "Kodaikanal Lake",
            "9:15 AM - 10:45 AM"
          ),

          place(
            "Coaker's Walk",
            "11:00 AM - 12:30 PM"
          ),

          food(
            "Lunch - Astoria Veg Restaurant, Kodaikanal",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Bryant Park",
            "2:15 PM - 3:45 PM"
          ),

          place(
            "Kodaikanal Market",
            "4:00 PM - 5:30 PM"
          ),

          food(
            "Dinner - Cloud Street Restaurant, Kodaikanal",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),

          hotel("The Carlton Kodaikanal"),
        ],
      },

      {
        day: 2,
        title: "Kodaikanal Sightseeing",

        activities: [
          food(
            "Breakfast - Hilltop Inn Restaurant, Kodaikanal",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          place(
            "Pillar Rocks",
            "9:15 AM - 10:45 AM"
          ),

          place(
            "Guna Caves",
            "11:00 AM - 12:30 PM",
            50
          ),

          food(
            "Lunch - Muncheez Restaurant, Kodaikanal",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Pine Forest",
            "2:15 PM - 3:45 PM"
          ),

          place(
            "Moir Point",
            "4:00 PM - 5:30 PM"
          ),

          food(
            "Dinner - Tava Restaurant, Kodaikanal",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),

          hotel("Sterling Kodai Lake"),
        ],
      },

      {
        day: 3,
        title: "Kodaikanal Departure",

        activities: [
          food(
            "Breakfast - The Royal Tibet Restaurant, Kodaikanal",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          place(
            "Dolphin's Nose View Point",
            "9:15 AM - 10:45 AM"
          ),

          place(
            "Kurinji Andavar Temple",
            "11:00 AM - 12:30 PM"
          ),

          food(
            "Lunch - Astoria Veg Restaurant, Kodaikanal",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Chettiar Park",
            "2:15 PM - 3:45 PM"
          ),

          place(
            "Departure",
            "4:15 PM - 6:00 PM"
          ),

          food(
            "Dinner - The Carlton Restaurant, Kodaikanal",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),
        ],
      },
    ],
  },


  // ==========================================================
  // PLAN 7 - CHENNAI ONE DAY
  // ==========================================================
  // NO HOTEL
  // NO EVENING SNACK
  // NO COFFEE CARD
  // DINNER ENDS AT 9:00 PM
  // ==========================================================

  {
    id: 7,
    title: "Chennai City Explorer",
    destination: "Chennai",
    days: 1,
    nights: 0,
    category: "City",
    price: 2600,
    baseAmount: 1600,
    baseAmountPerDay: 1600,
    placeAmount: 1000,

    baseIncludes: [
      "Local transportation",
      "City sightseeing",
      "Trip planning assistance",
    ],

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQntzvYHW4eHnJeMjPuipRngACGXplSWt0N9Q2m7keLhg&s=10",

    highlights: [
      "Marina Beach",
      "Kapaleeshwarar Temple",
      "Fort St George",
    ],

    places: [
      "Marina Beach",
      "Kapaleeshwarar Temple",
      "Fort St George",
      "San Thome Basilica",
    ],

    itinerary: [
      {
        day: 1,
        title: "Chennai City Tour",

        activities: [
          food(
            "Breakfast - Murugan Idli Shop, Chennai",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          place(
            "Marina Beach",
            "9:15 AM - 10:45 AM"
          ),

          place(
            "Kapaleeshwarar Temple",
            "11:00 AM - 12:30 PM"
          ),

          food(
            "Lunch - Saravana Bhavan, Chennai",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Fort St George",
            "2:15 PM - 3:45 PM",
            200
          ),

          place(
            "San Thome Basilica",
            "4:00 PM - 5:15 PM"
          ),

          place(
            "Besant Nagar Beach Sunset",
            "5:30 PM - 6:15 PM"
          ),

          place(
            "Chennai Local Market",
            "6:15 PM - 7:00 PM"
          ),

          food(
            "Dinner - Buhari Hotel, Chennai",
            "8:00 PM - 9:00 PM",
            "dinner"
          ),
        ],
      },
    ],
  },


  // ==========================================================
  // PLAN 8 - MAHABALIPURAM ONE DAY
  // ==========================================================
  // NO HOTEL
  // NO EVENING SNACK
  // NO COFFEE CARD
  // ==========================================================

  {
    id: 8,
    title: "Mahabalipuram Heritage",
    destination: "Mahabalipuram",
    days: 1,
    nights: 0,
    category: "Heritage",
    price: 3000,
    baseAmount: 1800,
    baseAmountPerDay: 1800,
    placeAmount: 1200,

    baseIncludes: [
      "Local transportation",
      "Heritage sightseeing",
      "Trip planning assistance",
    ],

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS09Z73-x0qqLAUd7YkZUVxedBVDnqDOdin1s1vU-wG8A&s=10",

    highlights: [
      "Shore Temple",
      "Pancha Rathas",
      "Mahabalipuram Beach",
    ],

    places: [
      "Shore Temple",
      "Arjuna's Penance",
      "Pancha Rathas",
      "Mahabalipuram Beach",
    ],

    itinerary: [
      {
        day: 1,
        title: "Mahabalipuram Heritage Tour",

        activities: [
          food(
            "Breakfast - Hotel Mamalla Heritage",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          place(
            "Shore Temple",
            "9:15 AM - 10:45 AM",
            40
          ),

          place(
            "Pancha Rathas",
            "11:00 AM - 12:30 PM",
            40
          ),

          food(
            "Lunch - Moonrakers, Mahabalipuram",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Arjuna's Penance",
            "2:15 PM - 3:45 PM",
            40
          ),

          place(
            "Krishna's Butter Ball",
            "4:00 PM - 5:00 PM"
          ),

          place(
            "Mahabalipuram Beach",
            "5:15 PM - 6:30 PM"
          ),

          place(
            "Local Handicraft Shopping",
            "6:45 PM - 7:45 PM"
          ),

          food(
            "Dinner - The Wharf Restaurant, Mahabalipuram",
            "8:00 PM - 9:00 PM",
            "dinner"
          ),
        ],
      },
    ],
  },


  // ==========================================================
  // PLAN 9 - MADURAI ONE DAY
  // ==========================================================
  // NO HOTEL
  // NO EVENING SNACK
  // NO JIGARTHANDA CARD
  // ==========================================================

  {
    id: 9,
    title: "Madurai Cultural Journey",
    destination: "Madurai",
    days: 1,
    nights: 0,
    category: "Spiritual",
    price: 2800,
    baseAmount: 1700,
    baseAmountPerDay: 1700,
    placeAmount: 1100,

    baseIncludes: [
      "Local transportation",
      "Temple sightseeing",
      "Trip planning assistance",
    ],

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQicfGeTba1kLPdwm4bB75Tr4F_Q87112V2b1mCN-zvGw&s=10",

    highlights: [
      "Meenakshi Temple",
      "Thirumalai Nayakkar Palace",
      "Gandhi Museum",
    ],

    places: [
      "Meenakshi Amman Temple",
      "Thirumalai Nayakkar Palace",
      "Gandhi Memorial Museum",
      "Vandiyur Mariamman Teppakulam",
    ],

    itinerary: [
      {
        day: 1,
        title: "Madurai Cultural Tour",

        activities: [
          food(
            "Breakfast - Murugan Idli Shop, Madurai",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          place(
            "Meenakshi Amman Temple",
            "9:15 AM - 10:45 AM"
          ),

          place(
            "Thirumalai Nayakkar Palace",
            "11:00 AM - 12:30 PM",
            50
          ),

          food(
            "Lunch - Kumar Mess, Madurai",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Gandhi Memorial Museum",
            "2:15 PM - 3:45 PM",
            20
          ),

          place(
            "Vandiyur Mariamman Teppakulam",
            "4:00 PM - 5:15 PM"
          ),

          place(
            "Madurai Local Market",
            "5:30 PM - 6:45 PM"
          ),

          place(
            "Temple Street Walk",
            "7:00 PM - 7:45 PM"
          ),

          food(
            "Dinner - Amsavalli Bhavan, Madurai",
            "8:00 PM - 9:00 PM",
            "dinner"
          ),
        ],
      },
    ],
  },


  // ==========================================================
  // PLAN 10 - THANJAVUR HERITAGE
  // ==========================================================

  {
    id: 10,
    title: "Thanjavur Heritage Trail",
    destination: "Thanjavur",
    days: 2,
    nights: 1,
    category: "Heritage",
    price: 8000,
    baseAmount: 4500,
    baseAmountPerDay: 2250,
    placeAmount: 2300,

    baseIncludes: [
      "Basic transportation",
      "Hotel accommodation support",
      "Heritage sightseeing",
      "Trip planning assistance",
    ],

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5c9gkG2UksnUss2XCzsx_qgCRleHw4eraLI2B7dKdOw&s=10",

    highlights: [
      "Brihadeeswarar Temple",
      "Thanjavur Palace",
      "Art",
    ],

    places: [
      "Brihadeeswarar Temple",
      "Thanjavur Palace",
      "Saraswathi Mahal Library",
    ],

    itinerary: [
      {
        day: 1,
        title: "Temple and Palace",

        activities: [
          food(
            "Breakfast - Hotel Parisutham Restaurant",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          place(
            "Brihadeeswarar Temple",
            "9:15 AM - 10:45 AM"
          ),

          place(
            "Thanjavur Palace",
            "11:00 AM - 12:30 PM",
            100
          ),

          food(
            "Lunch - Sathars Restaurant, Thanjavur",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Art Gallery",
            "2:15 PM - 3:45 PM",
            50
          ),

          place(
            "Local Handicraft Shopping",
            "4:00 PM - 5:30 PM"
          ),

          food(
            "Dinner - Thanjavur Maratha Restaurant",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),

          hotel("Hotel Gnanam"),
        ],
      },

      {
        day: 2,
        title: "Library and Departure",

        activities: [
          food(
            "Breakfast - Hotel Karthik Restaurant",
            "8:00 AM - 9:00 AM",
            "breakfast"
          ),

          place(
            "Saraswathi Mahal Library",
            "9:15 AM - 10:45 AM",
            50
          ),

          place(
            "Thanjavur Maratha Palace Courtyard",
            "11:00 AM - 12:30 PM"
          ),

          food(
            "Lunch - Ideal Kitchen Restaurant, Thanjavur",
            "1:00 PM - 2:00 PM",
            "lunch"
          ),

          place(
            "Thanjavur Local Shopping",
            "2:15 PM - 3:45 PM"
          ),

          place(
            "Departure Preparation",
            "4:00 PM - 5:00 PM"
          ),

          place(
            "Departure",
            "5:15 PM - 6:00 PM"
          ),

          food(
            "Dinner - Ideal Beach Restaurant, Thanjavur",
            "7:30 PM - 8:30 PM",
            "dinner"
          ),
        ],
      },
    ],
  },
];
