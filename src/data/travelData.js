// =========================================================
// DESTINATIONS
// =========================================================

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
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    places: [
      "Munnar Tea Gardens",
      "Eravikulam National Park",
      "Mattupetty Dam",
      "Top Station",
    ],
    food: ["Appam & Stew", "Kerala Sadya", "Banana Chips"],
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
      "https://images.unsplash.com/photo-1605538883669-825200433431?auto=format&fit=crop&w=1200&q=80",
    places: [
      "Alleppey Backwaters",
      "Houseboat Cruise",
      "Alappuzha Beach",
      "Kuttanad",
    ],
    food: ["Fish Curry", "Appam & Stew", "Kerala Sadya"],
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
      "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1200&q=80",
    places: [
      "Fort Kochi",
      "Chinese Fishing Nets",
      "Mattancherry Palace",
      "Jew Town",
    ],
    food: ["Kerala Parotta", "Fish Curry", "Appam & Stew"],
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
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    places: [
      "Edakkal Caves",
      "Soochipara Falls",
      "Banasura Sagar Dam",
      "Chembra Peak",
    ],
    food: ["Malabar Biryani", "Pathiri", "Banana Chips"],
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
      "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=80",
    places: [
      "Ooty Lake",
      "Botanical Garden",
      "Doddabetta Peak",
      "Nilgiri Mountain Railway",
    ],
    food: ["Ooty Varkey", "South Indian Meals", "Homemade Chocolates"],
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
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    places: [
      "Kodaikanal Lake",
      "Coaker's Walk",
      "Pillar Rocks",
      "Bryant Park",
    ],
    food: ["Parotta", "South Indian Meals", "Homemade Chocolates"],
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
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    places: [
      "Marina Beach",
      "Kapaleeshwarar Temple",
      "Fort St George",
      "San Thome Basilica",
    ],
    food: ["Idli & Sambar", "Masala Dosa", "Filter Coffee"],
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
      "https://images.unsplash.com/photo-1626014303757-5c7b4e0d9f0a?auto=format&fit=crop&w=1200&q=80",
    places: [
      "Shore Temple",
      "Arjuna's Penance",
      "Pancha Rathas",
      "Mahabalipuram Beach",
    ],
    food: ["Seafood", "Idli & Sambar", "Masala Dosa"],
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
      "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=1200&q=80",
    places: [
      "Meenakshi Amman Temple",
      "Thirumalai Nayakkar Palace",
      "Gandhi Memorial Museum",
      "Vandiyur Mariamman Teppakulam",
    ],
    food: ["Jigarthanda", "Parotta", "Idli & Sambar"],
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
      "https://images.unsplash.com/photo-1600100397608-f0103f7f2f18?auto=format&fit=crop&w=1200&q=80",
    places: [
      "Brihadeeswarar Temple",
      "Thanjavur Palace",
      "Saraswathi Mahal Library",
      "Art Gallery",
    ],
    food: ["Thanjavur Meals", "Pongal", "Filter Coffee"],
  },
];

// =========================================================
// HELPER FUNCTIONS
// =========================================================

const place = (name, time, amount = 0) => ({
  name,
  time,
  amount,
  type: "place",
});

const food = (name, time) => ({
  name,
  time,
  amount: 0,
  type: "food",
});

const travel = (name, time, amount = 0) => ({
  name,
  time,
  amount,
  type: "place",
});

const commonIncludes = [
  "Local sightseeing",
  "Basic transportation",
  "Trip planning assistance",
  "Entry-level activity charges",
];

// =========================================================
// TRAVEL PLANS
// =========================================================

export const plans = [
  // =======================================================
  // 1. KERALA DREAM ESCAPE
  // =======================================================

  {
    id: 1,
    title: "Kerala Dream Escape",
    destination: "Munnar • Alleppey • Kochi",
    days: 5,
    nights: 4,
    category: "Nature",
    price: 18500,
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
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Tea Gardens", "Houseboat", "Fort Kochi"],
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
          travel("Hotel check-in", "10:00 AM - 11:00 AM"),
          place("Munnar Tea Gardens", "11:30 AM - 1:00 PM", 500),
          food("Lunch at local Kerala restaurant", "1:00 PM - 2:00 PM"),
          place("Evening leisure", "4:00 PM - 6:00 PM"),
          food("Dinner at hotel", "7:30 PM - 8:30 PM"),
        ],
      },

      {
        day: 2,
        title: "Explore Munnar",
        activities: [
          food("Breakfast at hotel", "8:00 AM - 9:00 AM"),
          place("Eravikulam National Park", "9:30 AM - 12:00 PM", 200),
          food("Lunch at local restaurant", "12:30 PM - 1:30 PM"),
          place("Mattupetty Dam", "2:00 PM - 3:30 PM", 100),
          place("Echo Point", "4:00 PM - 5:30 PM", 50),
          food("Dinner at hotel", "7:30 PM - 8:30 PM"),
        ],
      },

      {
        day: 3,
        title: "Munnar to Alleppey",
        activities: [
          food("Breakfast at hotel", "7:30 AM - 8:30 AM"),
          travel("Travel to Alleppey", "9:00 AM - 2:00 PM", 1500),
          food("Lunch during travel", "1:00 PM - 2:00 PM"),
          travel("Houseboat check-in", "3:00 PM - 4:00 PM", 2500),
          place("Backwater cruise", "4:00 PM - 6:00 PM", 500),
          food("Dinner on houseboat", "7:30 PM - 8:30 PM"),
        ],
      },

      {
        day: 4,
        title: "Alleppey to Kochi",
        activities: [
          food("Breakfast on houseboat", "7:30 AM - 8:30 AM"),
          travel("Travel to Kochi", "9:00 AM - 11:00 AM", 700),
          place("Fort Kochi", "11:30 AM - 1:00 PM"),
          food("Lunch at Kochi restaurant", "1:00 PM - 2:00 PM"),
          place("Chinese Fishing Nets", "3:00 PM - 4:00 PM"),
          food("Dinner at hotel", "7:30 PM - 8:30 PM"),
        ],
      },

      {
        day: 5,
        title: "Kochi Departure",
        activities: [
          food("Breakfast at hotel", "8:00 AM - 9:00 AM"),
          place("Mattancherry Palace", "9:30 AM - 11:00 AM", 100),
          place("Jew Town", "11:15 AM - 12:30 PM"),
          food("Lunch at local restaurant", "12:30 PM - 1:30 PM"),
          travel("Departure", "2:00 PM - 3:00 PM"),
        ],
      },
    ],
  },

  // =======================================================
  // 2. TAMIL NADU TEMPLE TRAIL
  // =======================================================

  {
    id: 2,
    title: "Tamil Nadu Temple Trail",
    destination: "Chennai • Mahabalipuram • Thanjavur • Madurai",
    days: 7,
    nights: 6,
    category: "Heritage",
    price: 22000,
    baseAmount: 14500,
    baseAmountPerDay: 2071,
    placeAmount: 7500,
    baseIncludes: [
      "Basic transportation",
      "Hotel accommodation support",
      "Temple sightseeing",
      "Trip planning assistance",
    ],
    image:
      "https://images.unsplash.com/photo-1600100397608-f0103f7f2f18?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Ancient Temples", "UNESCO Heritage", "Tamil Culture"],
    places: [
      "Marina Beach",
      "Shore Temple",
      "Brihadeeswarar Temple",
      "Meenakshi Amman Temple",
    ],

    itinerary: [
      {
        day: 1,
        title: "Explore Chennai",
        activities: [
          travel("Hotel check-in", "9:00 AM - 10:00 AM"),
          place("Marina Beach", "10:30 AM - 12:00 PM"),
          food("Lunch at local restaurant", "12:30 PM - 1:30 PM"),
          place("Kapaleeshwarar Temple", "2:00 PM - 3:30 PM"),
          food("Local food experience", "4:00 PM - 5:00 PM"),
          food("Dinner at hotel", "7:30 PM - 8:30 PM"),
        ],
      },

      {
        day: 2,
        title: "Chennai to Mahabalipuram",
        activities: [
          food("Breakfast at hotel", "7:30 AM - 8:30 AM"),
          travel("Travel to Mahabalipuram", "9:00 AM - 11:00 AM", 500),
          place("Shore Temple", "11:00 AM - 12:30 PM", 40),
          food("Lunch at local restaurant", "1:00 PM - 2:00 PM"),
          place("Pancha Rathas", "2:30 PM - 4:00 PM", 40),
          place("Mahabalipuram Beach", "4:30 PM - 6:00 PM"),
        ],
      },

      {
        day: 3,
        title: "Mahabalipuram to Thanjavur",
        activities: [
          food("Breakfast at hotel", "7:30 AM - 8:30 AM"),
          travel("Travel to Thanjavur", "9:00 AM - 2:00 PM", 1200),
          food("Lunch during travel", "1:00 PM - 2:00 PM"),
          place("Brihadeeswarar Temple", "3:00 PM - 5:00 PM"),
          food("Dinner at hotel", "7:30 PM - 8:30 PM"),
        ],
      },

      {
        day: 4,
        title: "Thanjavur to Madurai",
        activities: [
          food("Breakfast at hotel", "7:30 AM - 8:30 AM"),
          place("Thanjavur Palace", "9:00 AM - 10:30 AM", 100),
          travel("Travel to Madurai", "11:00 AM - 2:00 PM", 900),
          food("Lunch at local restaurant", "1:00 PM - 2:00 PM"),
          place("Meenakshi Amman Temple", "4:00 PM - 6:00 PM"),
          food("Dinner at hotel", "7:30 PM - 8:30 PM"),
        ],
      },

      {
        day: 5,
        title: "Explore Madurai",
        activities: [
          food("Breakfast at hotel", "8:00 AM - 9:00 AM"),
          place("Thirumalai Nayakkar Palace", "9:30 AM - 11:00 AM", 50),
          food("Lunch at local restaurant", "12:30 PM - 1:30 PM"),
          place("Gandhi Memorial Museum", "2:00 PM - 4:00 PM"),
          food("Jigarthanda experience", "4:30 PM - 5:00 PM"),
          food("Dinner at hotel", "7:30 PM - 8:30 PM"),
        ],
      },

      {
        day: 6,
        title: "Madurai Culture",
        activities: [
          food("Breakfast at hotel", "8:00 AM - 9:00 AM"),
          place("Vandiyur Mariamman Teppakulam", "9:30 AM - 11:00 AM"),
          food("Lunch at local restaurant", "12:30 PM - 1:30 PM"),
          place("Local market", "2:00 PM - 4:00 PM"),
          food("Traditional Tamil snacks", "4:30 PM - 5:00 PM"),
          food("Dinner at hotel", "7:30 PM - 8:30 PM"),
        ],
      },

      {
        day: 7,
        title: "Departure",
        activities: [
          food("Breakfast at hotel", "8:00 AM - 9:00 AM"),
          place("Shopping", "9:30 AM - 11:00 AM"),
          food("Lunch at local restaurant", "12:00 PM - 1:00 PM"),
          travel("Departure", "2:00 PM - 3:00 PM"),
        ],
      },
    ],
  },

  // =======================================================
  // 3. KERALA BACKWATER EXPERIENCE
  // =======================================================

  {
    id: 3,
    title: "Kerala Backwater Experience",
    destination: "Alleppey • Kochi",
    days: 4,
    nights: 3,
    category: "Backwaters",
    price: 14000,
    baseAmount: 9000,
    baseAmountPerDay: 2250,
    placeAmount: 5000,
    baseIncludes: [
      "Basic transportation",
      "Houseboat accommodation support",
      "Backwater sightseeing",
      "Trip planning assistance",
    ],
    image:
      "https://images.unsplash.com/photo-1605538883669-825200433431?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Houseboat", "Backwaters", "Fort Kochi"],
    places: [
      "Alleppey Backwaters",
      "Houseboat Cruise",
      "Fort Kochi",
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Alleppey",
        activities: [
          travel("Houseboat check-in", "11:00 AM - 12:00 PM", 2500),
          food("Lunch on houseboat", "12:30 PM - 1:30 PM"),
          place("Backwater cruise", "2:00 PM - 5:00 PM", 500),
          place("Sunset view", "5:30 PM - 6:30 PM"),
          food("Dinner on houseboat", "7:30 PM - 8:30 PM"),
        ],
      },

      {
        day: 2,
        title: "Explore Alleppey",
        activities: [
          food("Breakfast on houseboat", "7:30 AM - 8:30 AM"),
          place("Kuttanad", "9:00 AM - 11:00 AM"),
          food("Lunch at local restaurant", "12:30 PM - 1:30 PM"),
          place("Alappuzha Beach", "2:00 PM - 4:00 PM"),
          place("Village walk", "4:30 PM - 5:30 PM"),
          food("Dinner at hotel", "7:30 PM - 8:30 PM"),
        ],
      },

      {
        day: 3,
        title: "Alleppey to Kochi",
        activities: [
          food("Breakfast at hotel", "7:30 AM - 8:30 AM"),
          travel("Travel to Kochi", "9:00 AM - 11:00 AM", 700),
          place("Fort Kochi", "11:30 AM - 1:00 PM"),
          food("Lunch at Kochi restaurant", "1:00 PM - 2:00 PM"),
          place("Chinese Fishing Nets", "3:00 PM - 4:00 PM"),
          food("Dinner at hotel", "7:30 PM - 8:30 PM"),
        ],
      },

      {
        day: 4,
        title: "Kochi Departure",
        activities: [
          food("Breakfast at hotel", "8:00 AM - 9:00 AM"),
          place("Mattancherry Palace", "9:30 AM - 11:00 AM", 100),
          place("Jew Town", "11:15 AM - 12:30 PM"),
          food("Lunch at local restaurant", "12:30 PM - 1:30 PM"),
          travel("Departure", "2:00 PM - 3:00 PM"),
        ],
      },
    ],
  },

  // =======================================================
  // 4. WAYANAD ADVENTURE
  // =======================================================

  {
    id: 4,
    title: "Wayanad Adventure",
    destination: "Wayanad",
    days: 3,
    nights: 2,
    category: "Adventure",
    price: 11000,
    baseAmount: 7000,
    baseAmountPerDay: 2333,
    placeAmount: 4000,
    baseIncludes: [
      "Basic transportation",
      "Hotel accommodation support",
      "Adventure sightseeing",
      "Trip planning assistance",
    ],
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Edakkal Caves", "Waterfalls", "Mountain Views"],
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
          travel("Hotel check-in", "10:00 AM - 11:00 AM"),
          place("Edakkal Caves", "11:30 AM - 2:00 PM", 50),
          food("Lunch at local restaurant", "2:00 PM - 3:00 PM"),
          place("Evening leisure", "4:00 PM - 6:00 PM"),
          food("Dinner at hotel", "7:30 PM - 8:30 PM"),
        ],
      },

      {
        day: 2,
        title: "Adventure Day",
        activities: [
          food("Breakfast at hotel", "7:30 AM - 8:30 AM"),
          place("Soochipara Falls", "9:00 AM - 12:00 PM", 100),
          food("Lunch at local restaurant", "12:30 PM - 1:30 PM"),
          place("Banasura Sagar Dam", "2:00 PM - 4:00 PM", 40),
          place("Nature walk", "4:30 PM - 5:30 PM"),
          food("Dinner at hotel", "7:30 PM - 8:30 PM"),
        ],
      },

      {
        day: 3,
        title: "Departure",
        activities: [
          food("Breakfast at hotel", "8:00 AM - 9:00 AM"),
          place("Shopping", "9:30 AM - 11:00 AM"),
          food("Lunch at local restaurant", "12:00 PM - 1:00 PM"),
          travel("Departure", "2:00 PM - 3:00 PM"),
        ],
      },
    ],
  },

  // =======================================================
  // 5. OOTY HILL STATION ESCAPE
  // =======================================================

  {
    id: 5,
    title: "Ooty Hill Station Escape",
    destination: "Ooty",
    days: 3,
    nights: 2,
    category: "Hill Station",
    price: 10500,
    baseAmount: 7000,
    baseAmountPerDay: 2333,
    placeAmount: 3500,
    baseIncludes: [
      "Basic transportation",
      "Hotel accommodation support",
      "Hill station sightseeing",
      "Trip planning assistance",
    ],
    image:
      "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Ooty Lake", "Botanical Garden", "Tea Estates"],
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
          travel("Hotel check-in", "10:00 AM - 11:00 AM"),
          place("Ooty Lake", "11:30 AM - 1:00 PM", 50),
          food("Lunch at local restaurant", "1:00 PM - 2:00 PM"),
          place("Botanical Garden", "2:30 PM - 4:30 PM", 50),
          place("Town walk", "5:00 PM - 6:00 PM"),
          food("Dinner at hotel", "7:30 PM - 8:30 PM"),
        ],
      },

      {
        day: 2,
        title: "Coonoor Day Trip",
        activities: [
          food("Breakfast at hotel", "7:30 AM - 8:30 AM"),
          place("Toy train", "9:00 AM - 11:00 AM", 500),
          place("Tea estates", "11:30 AM - 1:00 PM"),
          food("Lunch at local restaurant", "1:00 PM - 2:00 PM"),
          place("Doddabetta Peak", "2:30 PM - 4:00 PM", 30),
          food("Dinner at hotel", "7:30 PM - 8:30 PM"),
        ],
      },

      {
        day: 3,
        title: "Departure",
        activities: [
          food("Breakfast at hotel", "8:00 AM - 9:00 AM"),
          place("Shopping", "9:30 AM - 11:00 AM"),
          food("Lunch at local restaurant", "12:00 PM - 1:00 PM"),
          travel("Departure", "2:00 PM - 3:00 PM"),
        ],
      },
    ],
  },

  // =======================================================
  // 6. KODAIKANAL NATURE TRIP
  // =======================================================

  {
    id: 6,
    title: "Kodaikanal Nature Trip",
    destination: "Kodaikanal",
    days: 3,
    nights: 2,
    category: "Nature",
    price: 9000,
    baseAmount: 6000,
    baseAmountPerDay: 2000,
    placeAmount: 3000,
    baseIncludes: [
      "Basic transportation",
      "Hotel accommodation support",
      "Nature sightseeing",
      "Trip planning assistance",
    ],
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Lake", "Pillar Rocks", "Forest Walks"],
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
          travel("Hotel check-in", "10:00 AM - 11:00 AM"),
          place("Kodaikanal Lake", "11:30 AM - 1:00 PM", 100),
          food("Lunch at local restaurant", "1:00 PM - 2:00 PM"),
          place("Coaker's Walk", "2:30 PM - 4:00 PM", 30),
          place("Local market", "4:30 PM - 6:00 PM"),
          food("Dinner at hotel", "7:30 PM - 8:30 PM"),
        ],
      },

      {
        day: 2,
        title: "Nature Day",
        activities: [
          food("Breakfast at hotel", "7:30 AM - 8:30 AM"),
          place("Pillar Rocks", "9:00 AM - 11:00 AM", 50),
          place("Bryant Park", "11:30 AM - 1:00 PM", 30),
          food("Lunch at local restaurant", "1:00 PM - 2:00 PM"),
          place("Forest views", "2:30 PM - 5:00 PM"),
          food("Dinner at hotel", "7:30 PM - 8:30 PM"),
        ],
      },

      {
        day: 3,
        title: "Departure",
        activities: [
          food("Breakfast at hotel", "8:00 AM - 9:00 AM"),
          place("Shopping", "9:30 AM - 11:00 AM"),
          food("Lunch at local restaurant", "12:00 PM - 1:00 PM"),
          travel("Departure", "2:00 PM - 3:00 PM"),
        ],
      },
    ],
  },

  // =======================================================
  // 7. CHENNAI CITY BREAK
  // =======================================================

  {
    id: 7,
    title: "Chennai City Break",
    destination: "Chennai",
    days: 1,
    nights: 0,
    category: "City",
    price: 2500,
    baseAmount: 1500,
    baseAmountPerDay: 1500,
    placeAmount: 1000,
    baseIncludes: [
      "Local transportation",
      "City sightseeing",
      "Trip planning assistance",
    ],
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Marina Beach", "Temples", "City Food"],
    places: [
      "Marina Beach",
      "Kapaleeshwarar Temple",
      "Fort St George",
    ],

    itinerary: [
      {
        day: 1,
        title: "Chennai City Tour",
        activities: [
          place("Marina Beach", "8:00 AM - 9:30 AM", 0),
          food("Breakfast at local hotel", "9:30 AM - 10:00 AM"),
          place("Fort St George", "10:30 AM - 12:00 PM", 200),
          food("Lunch at local restaurant", "12:30 PM - 1:30 PM"),
          place("Kapaleeshwarar Temple", "2:00 PM - 3:30 PM", 0),
          place("San Thome Basilica", "4:00 PM - 5:00 PM", 0),
          food("Filter Coffee", "5:00 PM - 5:30 PM"),
        ],
      },
    ],
  },

  // =======================================================
  // 8. MAHABALIPURAM HERITAGE
  // =======================================================

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
      "https://images.unsplash.com/photo-1626014303757-5c7b4e0d9f0a?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Shore Temple", "Pancha Rathas", "Beach"],
    places: [
      "Shore Temple",
      "Arjuna's Penance",
      "Pancha Rathas",
    ],

    itinerary: [
      {
        day: 1,
        title: "Mahabalipuram Heritage Tour",
        activities: [
          food("Breakfast at local hotel", "8:00 AM - 8:30 AM"),
          place("Shore Temple", "9:00 AM - 10:30 AM", 40),
          place("Pancha Rathas", "11:00 AM - 12:30 PM", 40),
          food("Lunch at local restaurant", "12:30 PM - 1:30 PM"),
          place("Arjuna's Penance", "2:00 PM - 3:00 PM", 40),
          place("Mahabalipuram Beach", "3:30 PM - 5:00 PM", 0),
          food("Evening snacks", "5:00 PM - 5:30 PM"),
        ],
      },
    ],
  },

  // =======================================================
  // 9. MADURAI CULTURAL JOURNEY
  // =======================================================

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
      "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Meenakshi Temple", "Palace", "Local Food"],
    places: [
      "Meenakshi Amman Temple",
      "Thirumalai Nayakkar Palace",
      "Gandhi Museum",
    ],

    itinerary: [
      {
        day: 1,
        title: "Madurai Cultural Tour",
        activities: [
          place("Meenakshi Amman Temple", "8:00 AM - 10:00 AM", 0),
          food("Breakfast at local hotel", "10:00 AM - 10:30 AM"),
          place("Thirumalai Nayakkar Palace", "11:00 AM - 12:30 PM", 50),
          food("Lunch at local restaurant", "12:30 PM - 1:30 PM"),
          place("Gandhi Memorial Museum", "2:00 PM - 3:30 PM", 20),
          place("Vandiyur Mariamman Teppakulam", "4:00 PM - 5:00 PM", 0),
          food("Jigarthanda", "5:00 PM - 5:30 PM"),
        ],
      },
    ],
  },

  // =======================================================
  // 10. THANJAVUR HERITAGE TRAIL
  // =======================================================

  {
    id: 10,
    title: "Thanjavur Heritage Trail",
    destination: "Thanjavur",
    days: 2,
    nights: 1,
    category: "Heritage",
    price: 6800,
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
      "https://images.unsplash.com/photo-1600100397608-f0103f7f2f18?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Brihadeeswarar Temple", "Palace", "Art"],
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
          travel("Hotel check-in", "10:00 AM - 11:00 AM"),
          place("Brihadeeswarar Temple", "11:30 AM - 1:00 PM", 0),
          food("Lunch at local restaurant", "1:00 PM - 2:00 PM"),
          place("Thanjavur Palace", "2:30 PM - 4:00 PM", 100),
          place("Art Gallery", "4:30 PM - 5:30 PM", 50),
          food("Dinner at hotel", "7:30 PM - 8:30 PM"),
        ],
      },

      {
        day: 2,
        title: "Library and Departure",
        activities: [
          food("Breakfast at hotel", "8:00 AM - 9:00 AM"),
          place("Saraswathi Mahal Library", "9:30 AM - 11:00 AM", 50),
          place("Shopping", "11:30 AM - 12:30 PM"),
          food("Lunch at local restaurant", "12:30 PM - 1:30 PM"),
          travel("Departure", "2:00 PM - 3:00 PM"),
        ],
      },
    ],
  },
];