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

    // Changed from 2 Days to 1 Day
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

    // Changed from 2 Days to 1 Day
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

    // Changed from 2 Days to 1 Day
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


// ---------------------------------------------------------
// TRAVEL PLANS
// ---------------------------------------------------------

export const plans = [
  {
    id: 1,
    title: "Kerala Dream Escape",
    destination: "Munnar • Alleppey • Kochi",
    days: 5,
    nights: 4,
    category: "Nature",
    price: 18500,
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
          "Hotel check-in",
          "Tea gardens",
          "Evening leisure",
        ],
      },
      {
        day: 2,
        title: "Explore Munnar",
        activities: [
          "Eravikulam National Park",
          "Mattupetty Dam",
          "Echo Point",
        ],
      },
      {
        day: 3,
        title: "Munnar to Alleppey",
        activities: [
          "Travel to Alleppey",
          "Houseboat check-in",
          "Backwater cruise",
        ],
      },
      {
        day: 4,
        title: "Alleppey to Kochi",
        activities: [
          "Travel to Kochi",
          "Fort Kochi",
          "Chinese Fishing Nets",
        ],
      },
      {
        day: 5,
        title: "Kochi Departure",
        activities: [
          "Mattancherry Palace",
          "Jew Town",
          "Departure",
        ],
      },
    ],
  },

  {
    id: 2,
    title: "Tamil Nadu Temple Trail",
    destination: "Chennai • Mahabalipuram • Thanjavur • Madurai",
    days: 7,
    nights: 6,
    category: "Heritage",
    price: 22000,
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
          "Marina Beach",
          "Kapaleeshwarar Temple",
          "Local food",
        ],
      },
      {
        day: 2,
        title: "Chennai to Mahabalipuram",
        activities: [
          "Shore Temple",
          "Pancha Rathas",
          "Beach evening",
        ],
      },
      {
        day: 3,
        title: "Mahabalipuram to Thanjavur",
        activities: [
          "Brihadeeswarar Temple",
          "Thanjavur Palace",
        ],
      },
      {
        day: 4,
        title: "Thanjavur to Madurai",
        activities: [
          "Travel to Madurai",
          "Meenakshi Amman Temple",
        ],
      },
      {
        day: 5,
        title: "Explore Madurai",
        activities: [
          "Nayakkar Palace",
          "Gandhi Memorial Museum",
        ],
      },
      {
        day: 6,
        title: "Madurai Culture",
        activities: [
          "Vandiyur Mariamman Teppakulam",
          "Local market",
        ],
      },
      {
        day: 7,
        title: "Departure",
        activities: [
          "Breakfast",
          "Shopping",
          "Departure",
        ],
      },
    ],
  },

  {
    id: 3,
    title: "Kerala Backwater Experience",
    destination: "Alleppey • Kochi",
    days: 4,
    nights: 3,
    category: "Backwaters",
    price: 14000,
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
          "Houseboat check-in",
          "Backwater cruise",
          "Sunset view",
        ],
      },
      {
        day: 2,
        title: "Explore Alleppey",
        activities: [
          "Kuttanad",
          "Alappuzha Beach",
          "Village walk",
        ],
      },
      {
        day: 3,
        title: "Alleppey to Kochi",
        activities: [
          "Travel to Kochi",
          "Fort Kochi",
          "Chinese Fishing Nets",
        ],
      },
      {
        day: 4,
        title: "Kochi Departure",
        activities: [
          "Mattancherry Palace",
          "Jew Town",
          "Departure",
        ],
      },
    ],
  },

  {
    id: 4,
    title: "Wayanad Adventure",
    destination: "Wayanad",
    days: 3,
    nights: 2,
    category: "Adventure",
    price: 11000,
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
          "Hotel check-in",
          "Edakkal Caves",
          "Evening leisure",
        ],
      },
      {
        day: 2,
        title: "Adventure Day",
        activities: [
          "Soochipara Falls",
          "Banasura Sagar Dam",
          "Nature walk",
        ],
      },
      {
        day: 3,
        title: "Departure",
        activities: [
          "Breakfast",
          "Shopping",
          "Departure",
        ],
      },
    ],
  },

  {
    id: 5,
    title: "Ooty Hill Station Escape",
    destination: "Ooty",
    days: 3,
    nights: 2,
    category: "Hill Station",
    price: 10500,
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
          "Ooty Lake",
          "Botanical Garden",
          "Town walk",
        ],
      },
      {
        day: 2,
        title: "Coonoor Day Trip",
        activities: [
          "Toy train",
          "Tea estates",
          "Doddabetta Peak",
        ],
      },
      {
        day: 3,
        title: "Departure",
        activities: [
          "Shopping",
          "Breakfast",
          "Departure",
        ],
      },
    ],
  },

  {
    id: 6,
    title: "Kodaikanal Nature Trip",
    destination: "Kodaikanal",
    days: 3,
    nights: 2,
    category: "Nature",
    price: 9000,
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
          "Lake",
          "Coaker's Walk",
          "Local market",
        ],
      },
      {
        day: 2,
        title: "Nature Day",
        activities: [
          "Pillar Rocks",
          "Bryant Park",
          "Forest views",
        ],
      },
      {
        day: 3,
        title: "Departure",
        activities: [
          "Breakfast",
          "Shopping",
          "Departure",
        ],
      },
    ],
  },

  {
    id: 7,
    title: "Chennai City Break",
    destination: "Chennai",
    days: 2,
    nights: 1,
    category: "City",
    price: 6500,
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
        title: "Chennai",
        activities: [
          "Marina Beach",
          "Fort St George",
          "Local food",
        ],
      },
      {
        day: 2,
        title: "Culture and Departure",
        activities: [
          "Kapaleeshwarar Temple",
          "Shopping",
          "Departure",
        ],
      },
    ],
  },

  {
    id: 8,
    title: "Mahabalipuram Heritage",
    destination: "Mahabalipuram",
    days: 2,
    nights: 1,
    category: "Heritage",
    price: 7000,
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
        title: "Heritage Tour",
        activities: [
          "Shore Temple",
          "Pancha Rathas",
          "Arjuna's Penance",
        ],
      },
      {
        day: 2,
        title: "Beach and Departure",
        activities: [
          "Beach",
          "Local shopping",
          "Departure",
        ],
      },
    ],
  },

  {
    id: 9,
    title: "Madurai Cultural Journey",
    destination: "Madurai",
    days: 2,
    nights: 1,
    category: "Spiritual",
    price: 7000,
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
        title: "Madurai Heritage",
        activities: [
          "Meenakshi Temple",
          "Nayakkar Palace",
          "Market",
        ],
      },
      {
        day: 2,
        title: "Culture and Departure",
        activities: [
          "Gandhi Museum",
          "Jigarthanda",
          "Departure",
        ],
      },
    ],
  },

  {
    id: 10,
    title: "Thanjavur Heritage Trail",
    destination: "Thanjavur",
    days: 2,
    nights: 1,
    category: "Heritage",
    price: 6800,
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
          "Brihadeeswarar Temple",
          "Thanjavur Palace",
          "Art Gallery",
        ],
      },
      {
        day: 2,
        title: "Library and Departure",
        activities: [
          "Saraswathi Mahal Library",
          "Shopping",
          "Departure",
        ],
      },
    ],
  },
];