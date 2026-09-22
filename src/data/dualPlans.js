const dualPlans = [
  // =========================================================
  // 1. ALLEPPEY + COCHIN
  // =========================================================
  {
    id: "dual-alleppey-cochin",
    title: "Alleppey + Cochin Explorer",
    destinationName: "Alleppey + Cochin",
    destination: "Alleppey + Cochin",
    places: [
      "Alleppey",
      "Cochin",
      "Fort Kochi",
      "Mattancherry",
    ],
    category: "Kerala Duo",
    image: "/images/alleppey.jpg",

    description:
      "Explore the peaceful backwaters of Alleppey and the historic streets, beaches and cultural attractions of Cochin.",

    durationOptions: {
      2: {
        days: 2,
        nights: 1,
        price: 7500,

        baseAmount: 3000,
        baseAmountPerDay: 1500,
        placeAmount: 4500,

        highlights: [
          "Alleppey Backwaters",
          "Alleppey Beach",
          "Marari Beach",
          "Fort Kochi",
          "Chinese Fishing Nets",
          "Mattancherry",
          "Marine Drive",
        ],

        baseIncludes: [
          "Local transportation",
          "Parking / toll estimate",
          "Local travel & miscellaneous trip expenses",
        ],

        itinerary: [
          {
            day: 1,
            title: "Alleppey Backwaters & Beach",
            description:
              "Enjoy a complete day exploring Alleppey's famous backwaters, beaches and local surroundings.",

            activities: [
              {
                time: "08:00 AM",
                duration: "1 hr",
                name: "Breakfast",
                type: "food",
                amount: 0,
                description: "Start the day with a relaxed Kerala breakfast.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Alleppey Backwaters",
                type: "place",
                amount: 1500,
                description:
                  "Enjoy beautiful waterways, coconut trees and peaceful village scenery.",
              },
              {
                time: "11:15 AM",
                duration: "1 hr",
                name: "Alleppey Village Walk",
                type: "place",
                amount: 200,
                description:
                  "Explore the traditional village surroundings near the backwaters.",
              },
              {
                time: "12:30 PM",
                duration: "1 hr",
                name: "Kerala Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a traditional Kerala-style lunch.",
              },
              {
                time: "02:00 PM",
                duration: "2 hrs",
                name: "Alleppey Beach",
                type: "place",
                amount: 0,
                description:
                  "Relax beside the Arabian Sea and enjoy the coastal atmosphere.",
              },
              {
                time: "04:30 PM",
                duration: "2 hrs",
                name: "Marari Beach",
                type: "place",
                amount: 500,
                description:
                  "Enjoy the peaceful beach environment and sunset surroundings.",
              },
              {
                time: "07:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a relaxed Kerala dinner.",
              },
              {
                time: "08:30 PM",
                duration: "1.5 hrs",
                name: "Alleppey Night Walk",
                type: "activity",
                amount: 300,
                description:
                  "Enjoy a peaceful evening around the local town area.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Day End",
                type: "activity",
                amount: 0,
                description:
                  "Return to the accommodation and relax.",
              },
            ],

            planningTip:
              "Carry comfortable clothes, sunglasses and mosquito protection for the backwaters.",
          },

          {
            day: 2,
            title: "Cochin Heritage & Waterfront",
            description:
              "Explore Fort Kochi, Mattancherry and the waterfront attractions of Cochin.",

            activities: [
              {
                time: "08:00 AM",
                duration: "1 hr",
                name: "Breakfast",
                type: "food",
                amount: 0,
                description:
                  "Have breakfast before starting the Cochin sightseeing.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Fort Kochi",
                type: "place",
                amount: 500,
                description:
                  "Explore the historic streets, colonial buildings and cultural attractions.",
              },
              {
                time: "11:15 AM",
                duration: "1 hr",
                name: "Chinese Fishing Nets",
                type: "place",
                amount: 0,
                description:
                  "See the traditional Chinese fishing nets along the waterfront.",
              },
              {
                time: "12:30 PM",
                duration: "1 hr",
                name: "Kerala Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a traditional lunch in Cochin.",
              },
              {
                time: "02:00 PM",
                duration: "2 hrs",
                name: "Mattancherry",
                type: "place",
                amount: 500,
                description:
                  "Explore the historic streets and cultural heritage of Mattancherry.",
              },
              {
                time: "04:30 PM",
                duration: "1.5 hrs",
                name: "Jew Town",
                type: "place",
                amount: 300,
                description:
                  "Explore the colourful heritage streets and local shops.",
              },
              {
                time: "06:30 PM",
                duration: "1.5 hrs",
                name: "Marine Drive",
                type: "place",
                amount: 300,
                description:
                  "Enjoy the evening waterfront atmosphere.",
              },
              {
                time: "08:15 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy dinner before ending the trip.",
              },
              {
                time: "09:30 PM",
                duration: "0.5 hr",
                name: "Cochin Night Drive",
                type: "activity",
                amount: 200,
                description:
                  "Enjoy a short evening drive through the city.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Trip End",
                type: "activity",
                amount: 0,
                description:
                  "Complete the Cochin experience and prepare for departure.",
              },
            ],

            planningTip:
              "Wear comfortable footwear because Fort Kochi and Mattancherry involve walking.",
          },
        ],
      },

      3: {
        days: 3,
        nights: 2,
        price: 9500,

        baseAmount: 3600,
        baseAmountPerDay: 1200,
        placeAmount: 5900,

        highlights: [
          "Alleppey Backwaters",
          "Alleppey Beach",
          "Marari Beach",
          "Fort Kochi",
          "Mattancherry",
          "Marine Drive",
        ],

        baseIncludes: [
          "Local transportation",
          "Parking / toll estimate",
          "Local travel & miscellaneous trip expenses",
        ],

        itinerary: [
          {
            day: 1,
            title: "Alleppey Backwaters",
            description:
              "Spend the first day enjoying the backwaters and village landscapes.",

            activities: [
              {
                time: "08:00 AM",
                duration: "1 hr",
                name: "Breakfast",
                type: "food",
                amount: 0,
                description: "Start the day with breakfast.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Alleppey Backwaters",
                type: "place",
                amount: 1500,
                description:
                  "Enjoy the peaceful Kerala backwaters.",
              },
              {
                time: "11:15 AM",
                duration: "1 hr",
                name: "Village Experience",
                type: "activity",
                amount: 300,
                description:
                  "Explore the local village surroundings.",
              },
              {
                time: "12:30 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description: "Enjoy Kerala cuisine.",
              },
              {
                time: "02:00 PM",
                duration: "2 hrs",
                name: "Alleppey Beach",
                type: "place",
                amount: 0,
                description:
                  "Relax beside the Arabian Sea.",
              },
              {
                time: "04:30 PM",
                duration: "1.5 hrs",
                name: "Lighthouse Area",
                type: "place",
                amount: 200,
                description:
                  "Explore the coastal surroundings.",
              },
              {
                time: "06:30 PM",
                duration: "1 hr",
                name: "Sunset Experience",
                type: "activity",
                amount: 200,
                description:
                  "Enjoy the evening coastal views.",
              },
              {
                time: "08:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description: "Enjoy dinner.",
              },
              {
                time: "09:15 PM",
                duration: "0.75 hr",
                name: "Alleppey Night Walk",
                type: "activity",
                amount: 200,
                description:
                  "Enjoy a relaxed evening walk.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Day End",
                type: "activity",
                amount: 0,
                description: "Return and relax.",
              },
            ],

            planningTip:
              "Keep the first evening relaxed after the backwater experience.",
          },

          {
            day: 2,
            title: "Cochin Heritage",
            description:
              "Discover the historic and cultural side of Cochin.",

            activities: [
              {
                time: "08:00 AM",
                duration: "1 hr",
                name: "Breakfast",
                type: "food",
                amount: 0,
                description: "Have breakfast.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Fort Kochi",
                type: "place",
                amount: 500,
                description:
                  "Explore the historic Fort Kochi area.",
              },
              {
                time: "11:15 AM",
                duration: "1 hr",
                name: "Chinese Fishing Nets",
                type: "place",
                amount: 0,
                description:
                  "See the famous fishing nets.",
              },
              {
                time: "12:30 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description: "Enjoy lunch.",
              },
              {
                time: "02:00 PM",
                duration: "2 hrs",
                name: "Mattancherry",
                type: "place",
                amount: 500,
                description:
                  "Explore the historic neighbourhood.",
              },
              {
                time: "04:30 PM",
                duration: "1.5 hrs",
                name: "Jew Town",
                type: "place",
                amount: 300,
                description:
                  "Explore the colourful heritage streets.",
              },
              {
                time: "06:30 PM",
                duration: "1 hr",
                name: "Marine Drive",
                type: "place",
                amount: 300,
                description:
                  "Enjoy the waterfront.",
              },
              {
                time: "08:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description: "Enjoy dinner.",
              },
              {
                time: "09:15 PM",
                duration: "0.75 hr",
                name: "Cochin Night View",
                type: "activity",
                amount: 200,
                description:
                  "Enjoy Cochin's evening atmosphere.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Day End",
                type: "activity",
                amount: 0,
                description: "Return and relax.",
              },
            ],

            planningTip:
              "Carry comfortable footwear for walking.",
          },

          {
            day: 3,
            title: "Cochin Beach & Local Experience",
            description:
              "Finish the trip with relaxed sightseeing and local experiences.",

            activities: [
              {
                time: "08:00 AM",
                duration: "1 hr",
                name: "Breakfast",
                type: "food",
                amount: 0,
                description: "Start with breakfast.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Cherai Beach",
                type: "place",
                amount: 400,
                description:
                  "Relax at one of Cochin's popular beaches.",
              },
              {
                time: "11:30 AM",
                duration: "1 hr",
                name: "Local Shopping",
                type: "activity",
                amount: 300,
                description:
                  "Explore local shops and souvenirs.",
              },
              {
                time: "12:30 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description: "Enjoy lunch.",
              },
              {
                time: "02:00 PM",
                duration: "2 hrs",
                name: "Cochin Local Sightseeing",
                type: "place",
                amount: 400,
                description:
                  "Explore additional city attractions.",
              },
              {
                time: "04:30 PM",
                duration: "1.5 hrs",
                name: "Marine Drive",
                type: "place",
                amount: 300,
                description:
                  "Enjoy the waterfront.",
              },
              {
                time: "06:30 PM",
                duration: "1 hr",
                name: "Sunset",
                type: "activity",
                amount: 200,
                description:
                  "Enjoy the evening sky.",
              },
              {
                time: "08:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description: "Enjoy the final dinner.",
              },
              {
                time: "09:15 PM",
                duration: "0.75 hr",
                name: "Final Night Walk",
                type: "activity",
                amount: 200,
                description:
                  "Enjoy a relaxed final evening.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Trip End",
                type: "activity",
                amount: 0,
                description:
                  "Complete the trip.",
              },
            ],

            planningTip:
              "Keep the final evening flexible for departure.",
          },
        ],
      },
    },
  },

  // =========================================================
  // 2. MUNROE ISLAND + VARKALA
  // =========================================================
  {
    id: "dual-munroe-varkala",
    title: "Munroe Island + Varkala Escape",
    destinationName: "Munroe Island + Varkala",
    destination: "Munroe Island + Varkala",
    places: [
      "Munroe Island",
      "Varkala",
      "Kappil Beach",
      "Varkala Cliff",
    ],
    category: "Kerala Duo",
    image: "/images/munroe.jpg",

    description:
      "Combine peaceful backwaters, village life and canoe experiences with Varkala's famous cliffs and beaches.",

    durationOptions: {
      2: {
        days: 2,
        nights: 1,
        price: 7800,

        baseAmount: 3000,
        baseAmountPerDay: 1500,
        placeAmount: 4800,

        highlights: [
          "Munroe Island Backwaters",
          "Canoe Ride",
          "Munroe Village",
          "Varkala Cliff",
          "Varkala Beach",
          "Kappil Beach",
        ],

        baseIncludes: [
          "Local transportation",
          "Parking / toll estimate",
          "Local travel & miscellaneous trip expenses",
        ],

        itinerary: [
          {
            day: 1,
            title: "Munroe Island Backwater Experience",
            description:
              "Explore the peaceful waterways and village life of Munroe Island.",

            activities: [
              {
                time: "08:00 AM",
                duration: "1 hr",
                name: "Breakfast",
                type: "food",
                amount: 0,
                description: "Start the day with breakfast.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Munroe Island Backwaters",
                type: "place",
                amount: 1200,
                description:
                  "Explore the beautiful backwater channels.",
              },
              {
                time: "11:15 AM",
                duration: "1.5 hrs",
                name: "Village Canoe Ride",
                type: "activity",
                amount: 700,
                description:
                  "Enjoy a traditional canoe ride through narrow waterways.",
              },
              {
                time: "01:00 PM",
                duration: "1 hr",
                name: "Local Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a relaxed local lunch.",
              },
              {
                time: "02:30 PM",
                duration: "2 hrs",
                name: "Munroe Village Walk",
                type: "place",
                amount: 200,
                description:
                  "Explore the village and local surroundings.",
              },
              {
                time: "05:00 PM",
                duration: "1.5 hrs",
                name: "Island Sunset",
                type: "activity",
                amount: 200,
                description:
                  "Enjoy the peaceful sunset atmosphere.",
              },
              {
                time: "07:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a relaxed local dinner.",
              },
              {
                time: "08:30 PM",
                duration: "1.5 hrs",
                name: "Village Evening Experience",
                type: "activity",
                amount: 200,
                description:
                  "Enjoy a peaceful evening around the island.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Day End",
                type: "activity",
                amount: 0,
                description:
                  "Return to accommodation and relax.",
              },
            ],

            planningTip:
              "Carry comfortable clothes and mosquito protection.",
          },

          {
            day: 2,
            title: "Varkala Cliff, Beach & Kappil",
            description:
              "Enjoy Varkala's dramatic cliff, beach and nearby Kappil surroundings.",

            activities: [
              {
                time: "08:00 AM",
                duration: "1 hr",
                name: "Breakfast",
                type: "food",
                amount: 0,
                description:
                  "Start the day with breakfast.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Varkala Cliff",
                type: "place",
                amount: 300,
                description:
                  "Enjoy panoramic views of the Arabian Sea.",
              },
              {
                time: "11:15 AM",
                duration: "2 hrs",
                name: "Varkala Beach",
                type: "place",
                amount: 0,
                description:
                  "Relax beside the sea.",
              },
              {
                time: "01:30 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy lunch near the beach.",
              },
              {
                time: "03:00 PM",
                duration: "2 hrs",
                name: "Kappil Beach",
                type: "place",
                amount: 400,
                description:
                  "Explore the beautiful coastal landscape.",
              },
              {
                time: "05:30 PM",
                duration: "1 hr",
                name: "Kappil Lake View",
                type: "place",
                amount: 200,
                description:
                  "Enjoy the lake and coastal scenery.",
              },
              {
                time: "07:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a relaxed dinner.",
              },
              {
                time: "08:30 PM",
                duration: "1.5 hrs",
                name: "Varkala Evening Walk",
                type: "activity",
                amount: 300,
                description:
                  "Explore the cliff area in the evening.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Trip End",
                type: "activity",
                amount: 0,
                description:
                  "Complete the Varkala experience.",
              },
            ],

            planningTip:
              "Be careful around cliff edges and carry sunscreen.",
          },
        ],
      },

      3: {
        days: 3,
        nights: 2,
        price: 9300,

        baseAmount: 3600,
        baseAmountPerDay: 1200,
        placeAmount: 5700,

        highlights: [
          "Munroe Island",
          "Canoe Ride",
          "Varkala Cliff",
          "Varkala Beach",
          "Kappil Beach",
          "Kappil Lake",
        ],

        baseIncludes: [
          "Local transportation",
          "Parking / toll estimate",
          "Local travel & miscellaneous trip expenses",
        ],

        itinerary: [
          {
            day: 1,
            title: "Munroe Island Backwaters",
            description:
              "Experience the island's waterways and village landscape.",

            activities: [
              {
                time: "08:00 AM",
                duration: "1 hr",
                name: "Breakfast",
                type: "food",
                amount: 0,
                description: "Have breakfast.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Munroe Backwaters",
                type: "place",
                amount: 1200,
                description:
                  "Explore the island backwaters.",
              },
              {
                time: "11:15 AM",
                duration: "1.5 hrs",
                name: "Canoe Ride",
                type: "activity",
                amount: 700,
                description:
                  "Enjoy a traditional canoe experience.",
              },
              {
                time: "01:00 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description: "Enjoy local food.",
              },
              {
                time: "02:30 PM",
                duration: "2 hrs",
                name: "Munroe Village",
                type: "place",
                amount: 200,
                description:
                  "Explore the village.",
              },
              {
                time: "05:00 PM",
                duration: "1.5 hrs",
                name: "Island Sunset",
                type: "activity",
                amount: 200,
                description:
                  "Enjoy sunset views.",
              },
              {
                time: "07:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description: "Enjoy dinner.",
              },
              {
                time: "08:30 PM",
                duration: "1.5 hrs",
                name: "Village Evening",
                type: "activity",
                amount: 200,
                description:
                  "Relax around the village.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Day End",
                type: "activity",
                amount: 0,
                description: "Return and relax.",
              },
            ],

            planningTip:
              "Keep the first evening relaxed.",
          },

          {
            day: 2,
            title: "Varkala Cliff & Beach",
            description:
              "Explore Varkala's famous cliff and beach.",

            activities: [
              {
                time: "08:00 AM",
                duration: "1 hr",
                name: "Breakfast",
                type: "food",
                amount: 0,
                description: "Have breakfast.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Varkala Cliff",
                type: "place",
                amount: 300,
                description:
                  "Enjoy sea views from the cliff.",
              },
              {
                time: "11:15 AM",
                duration: "2 hrs",
                name: "Varkala Beach",
                type: "place",
                amount: 0,
                description:
                  "Relax at the beach.",
              },
              {
                time: "01:30 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description: "Enjoy lunch.",
              },
              {
                time: "03:00 PM",
                duration: "2 hrs",
                name: "Varkala Local Market",
                type: "activity",
                amount: 300,
                description:
                  "Explore local shops and cafes.",
              },
              {
                time: "05:30 PM",
                duration: "1 hr",
                name: "Sunset Point",
                type: "place",
                amount: 200,
                description:
                  "Enjoy the evening sea view.",
              },
              {
                time: "07:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description: "Enjoy dinner.",
              },
              {
                time: "08:30 PM",
                duration: "1.5 hrs",
                name: "Varkala Night Walk",
                type: "activity",
                amount: 300,
                description:
                  "Enjoy the evening atmosphere.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Day End",
                type: "activity",
                amount: 0,
                description: "Return and relax.",
              },
            ],

            planningTip:
              "Carry sunscreen, water and comfortable footwear.",
          },

          {
            day: 3,
            title: "Kappil Beach & Local Experience",
            description:
              "Finish the trip with Kappil's beach and lake landscape.",

            activities: [
              {
                time: "08:00 AM",
                duration: "1 hr",
                name: "Breakfast",
                type: "food",
                amount: 0,
                description: "Start with breakfast.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Kappil Beach",
                type: "place",
                amount: 400,
                description:
                  "Explore the peaceful coastal area.",
              },
              {
                time: "11:15 AM",
                duration: "1.5 hrs",
                name: "Kappil Lake",
                type: "place",
                amount: 200,
                description:
                  "Enjoy the lake and surrounding landscape.",
              },
              {
                time: "01:00 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description: "Enjoy lunch.",
              },
              {
                time: "02:30 PM",
                duration: "2 hrs",
                name: "Varkala Local Sightseeing",
                type: "place",
                amount: 300,
                description:
                  "Explore the local attractions.",
              },
              {
                time: "05:00 PM",
                duration: "1.5 hrs",
                name: "Beach Relaxation",
                type: "activity",
                amount: 0,
                description:
                  "Relax before departure.",
              },
              {
                time: "07:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description: "Enjoy the final dinner.",
              },
              {
                time: "08:30 PM",
                duration: "1.5 hrs",
                name: "Final Evening Walk",
                type: "activity",
                amount: 200,
                description:
                  "Enjoy the final evening.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Trip End",
                type: "activity",
                amount: 0,
                description:
                  "Complete the trip.",
              },
            ],

            planningTip:
              "Keep the final evening flexible for departure.",
          },
        ],
      },
    },
  },

  // =========================================================
  // 3. MYSORE + COORG
  // =========================================================
  {
    id: "dual-mysore-coorg",
    title: "Mysore + Coorg Heritage & Coffee",
    destinationName: "Mysore + Coorg",
    destination: "Mysore + Coorg",
    places: [
      "Mysore",
      "Coorg",
      "Mysore Palace",
      "Abbey Falls",
      "Coffee Estates",
    ],
    category: "Karnataka Duo",
    image: "/images/coorg.jpg",

    description:
      "Combine Mysore's royal heritage with Coorg's coffee plantations, waterfalls and scenic hills.",

    durationOptions: {
      2: {
        days: 2,
        nights: 1,
        price: 8000,

        baseAmount: 3000,
        baseAmountPerDay: 1500,
        placeAmount: 5000,

        highlights: [
          "Mysore Palace",
          "Devaraja Market",
          "Brindavan Gardens",
          "Coorg Coffee Estate",
          "Abbey Falls",
          "Coorg Viewpoint",
        ],

        baseIncludes: [
          "Local transportation",
          "Parking / toll estimate",
          "Local travel & miscellaneous trip expenses",
        ],

        itinerary: [
          {
            day: 1,
            title: "Mysore Royal Experience",
            description:
              "Explore Mysore's royal attractions, markets and gardens.",

            activities: [
              {
                time: "08:00 AM",
                duration: "1 hr",
                name: "Mysore Breakfast",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a traditional South Indian breakfast.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Mysore Palace",
                type: "place",
                amount: 500,
                description:
                  "Explore the magnificent Mysore Palace.",
              },
              {
                time: "11:15 AM",
                duration: "1.5 hrs",
                name: "Devaraja Market",
                type: "place",
                amount: 200,
                description:
                  "Explore the colourful local market.",
              },
              {
                time: "01:00 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a Mysore-style lunch.",
              },
              {
                time: "02:30 PM",
                duration: "2 hrs",
                name: "Chamundi Hills",
                type: "place",
                amount: 300,
                description:
                  "Enjoy panoramic views of Mysore.",
              },
              {
                time: "05:00 PM",
                duration: "2 hrs",
                name: "Brindavan Gardens",
                type: "place",
                amount: 600,
                description:
                  "Relax among the landscaped gardens.",
              },
              {
                time: "07:30 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy dinner.",
              },
              {
                time: "09:00 PM",
                duration: "1 hr",
                name: "Mysore Night Drive",
                type: "activity",
                amount: 200,
                description:
                  "Enjoy the illuminated city atmosphere.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Day End",
                type: "activity",
                amount: 0,
                description:
                  "Return and relax.",
              },
            ],

            planningTip:
              "Start early because Mysore Palace and Brindavan Gardens can get busy.",
          },

          {
            day: 2,
            title: "Coorg Coffee & Waterfalls",
            description:
              "Experience Coorg's plantations, waterfalls and beautiful hill scenery.",

            activities: [
              {
                time: "08:00 AM",
                duration: "1 hr",
                name: "Breakfast",
                type: "food",
                amount: 0,
                description:
                  "Start with breakfast.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Coorg Coffee Estate",
                type: "place",
                amount: 700,
                description:
                  "Explore the famous coffee plantation landscape.",
              },
              {
                time: "11:15 AM",
                duration: "1.5 hrs",
                name: "Abbey Falls",
                type: "place",
                amount: 300,
                description:
                  "Visit the scenic waterfall surrounded by greenery.",
              },
              {
                time: "01:00 PM",
                duration: "1 hr",
                name: "Coorg Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a local Coorg-style lunch.",
              },
              {
                time: "02:30 PM",
                duration: "2 hrs",
                name: "Raja's Seat",
                type: "place",
                amount: 300,
                description:
                  "Enjoy the scenic hill views.",
              },
              {
                time: "05:00 PM",
                duration: "1.5 hrs",
                name: "Coorg Viewpoint",
                type: "place",
                amount: 400,
                description:
                  "Enjoy the surrounding coffee-country landscape.",
              },
              {
                time: "07:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy dinner.",
              },
              {
                time: "08:30 PM",
                duration: "1.5 hrs",
                name: "Coorg Evening Experience",
                type: "activity",
                amount: 300,
                description:
                  "Enjoy a peaceful evening in the hills.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Trip End",
                type: "activity",
                amount: 0,
                description:
                  "Complete the Coorg experience.",
              },
            ],

            planningTip:
              "Carry comfortable shoes because waterfalls and viewpoints involve walking.",
          },
        ],
      },

      3: {
        days: 3,
        nights: 2,
        price: 9800,

        baseAmount: 3600,
        baseAmountPerDay: 1200,
        placeAmount: 6200,

        highlights: [
          "Mysore Palace",
          "Chamundi Hills",
          "Brindavan Gardens",
          "Coorg Coffee Estate",
          "Abbey Falls",
          "Raja's Seat",
          "Mandalpatti",
        ],

        baseIncludes: [
          "Local transportation",
          "Parking / toll estimate",
          "Local travel & miscellaneous trip expenses",
        ],

        itinerary: [
          {
            day: 1,
            title: "Mysore Heritage",
            description:
              "Explore Mysore's royal history and local attractions.",

            activities: [
              {
                time: "08:00 AM",
                duration: "1 hr",
                name: "Breakfast",
                type: "food",
                amount: 0,
                description: "Have breakfast.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Mysore Palace",
                type: "place",
                amount: 500,
                description:
                  "Explore the royal palace.",
              },
              {
                time: "11:15 AM",
                duration: "1.5 hrs",
                name: "Devaraja Market",
                type: "place",
                amount: 200,
                description:
                  "Explore the local market.",
              },
              {
                time: "01:00 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description: "Enjoy lunch.",
              },
              {
                time: "02:30 PM",
                duration: "2 hrs",
                name: "Chamundi Hills",
                type: "place",
                amount: 300,
                description:
                  "Enjoy views of Mysore.",
              },
              {
                time: "05:00 PM",
                duration: "2 hrs",
                name: "Brindavan Gardens",
                type: "place",
                amount: 600,
                description:
                  "Relax in the gardens.",
              },
              {
                time: "07:30 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description: "Enjoy dinner.",
              },
              {
                time: "09:00 PM",
                duration: "1 hr",
                name: "Mysore Night Drive",
                type: "activity",
                amount: 200,
                description:
                  "Enjoy the city at night.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Day End",
                type: "activity",
                amount: 0,
                description: "Return and relax.",
              },
            ],

            planningTip:
              "Wear comfortable footwear.",
          },

          {
            day: 2,
            title: "Coorg Coffee Country",
            description:
              "Travel to Coorg and explore its coffee plantations and waterfalls.",

            activities: [
              {
                time: "08:00 AM",
                duration: "1 hr",
                name: "Breakfast",
                type: "food",
                amount: 0,
                description: "Have breakfast.",
              },
              {
                time: "09:30 AM",
                duration: "2 hrs",
                name: "Coorg Coffee Estate",
                type: "place",
                amount: 700,
                description:
                  "Explore the coffee plantation.",
              },
              {
                time: "12:00 PM",
                duration: "1 hr",
                name: "Coffee Experience",
                type: "activity",
                amount: 300,
                description:
                  "Learn about coffee production.",
              },
              {
                time: "01:30 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description: "Enjoy lunch.",
              },
              {
                time: "03:00 PM",
                duration: "2 hrs",
                name: "Abbey Falls",
                type: "place",
                amount: 300,
                description:
                  "Visit the waterfall.",
              },
              {
                time: "05:30 PM",
                duration: "1.5 hrs",
                name: "Raja's Seat",
                type: "place",
                amount: 300,
                description:
                  "Enjoy the hill views.",
              },
              {
                time: "07:30 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description: "Enjoy dinner.",
              },
              {
                time: "09:00 PM",
                duration: "1 hr",
                name: "Coorg Evening",
                type: "activity",
                amount: 200,
                description:
                  "Relax in the peaceful hill environment.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Day End",
                type: "activity",
                amount: 0,
                description: "Return and relax.",
              },
            ],

            planningTip:
              "Carry a light jacket because hill temperatures can change.",
          },

          {
            day: 3,
            title: "Mandalpatti & Coorg Hills",
            description:
              "Finish with panoramic mountain views and a relaxed local experience.",

            activities: [
              {
                time: "08:00 AM",
                duration: "1 hr",
                name: "Breakfast",
                type: "food",
                amount: 0,
                description:
                  "Start the final day.",
              },
              {
                time: "09:00 AM",
                duration: "2.5 hrs",
                name: "Mandalpatti",
                type: "place",
                amount: 900,
                description:
                  "Enjoy panoramic views of the Western Ghats.",
              },
              {
                time: "12:00 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy lunch.",
              },
              {
                time: "01:30 PM",
                duration: "2 hrs",
                name: "Coorg Local Sightseeing",
                type: "place",
                amount: 400,
                description:
                  "Explore nearby local attractions.",
              },
              {
                time: "04:00 PM",
                duration: "1.5 hrs",
                name: "Coffee Shopping",
                type: "activity",
                amount: 300,
                description:
                  "Buy local coffee and souvenirs.",
              },
              {
                time: "06:00 PM",
                duration: "1.5 hrs",
                name: "Coorg Sunset View",
                type: "place",
                amount: 300,
                description:
                  "Enjoy the final hill sunset.",
              },
              {
                time: "08:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy the final dinner.",
              },
              {
                time: "09:00 PM",
                duration: "1 hr",
                name: "Final Evening",
                type: "activity",
                amount: 200,
                description:
                  "Relax before departure.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Trip End",
                type: "activity",
                amount: 0,
                description:
                  "Complete the trip.",
              },
            ],

            planningTip:
              "Keep the final evening flexible for your departure.",
          },
        ],
      },
    },
  },

  // =========================================================
  // 4. VAGAMON + CHIKMAGALUR
  // =========================================================
  {
    id: "dual-vagamon-chikmagalur",
    title: "Vagamon + Chikmagalur Hills",
    destinationName: "Vagamon + Chikmagalur",
    destination: "Vagamon + Chikmagalur",
    places: [
      "Vagamon",
      "Chikmagalur",
      "Vagamon Meadows",
      "Pine Forest",
      "Mullayanagiri",
      "Coffee Estates",
    ],
    category: "South India Duo",
    image: "/images/vagamon.jpg",

    description:
      "Explore the green meadows and pine forests of Vagamon along with the coffee estates and mountain landscapes of Chikmagalur.",

    durationOptions: {
      2: {
        days: 2,
        nights: 1,
        price: 8200,

        baseAmount: 3200,
        baseAmountPerDay: 1600,
        placeAmount: 5000,

        highlights: [
          "Vagamon Meadows",
          "Pine Forest",
          "Vagamon Viewpoint",
          "Chikmagalur Coffee Estate",
          "Mullayanagiri",
          "Scenic Hill Viewpoints",
        ],

        baseIncludes: [
          "Local transportation",
          "Parking / toll estimate",
          "Local travel & miscellaneous trip expenses",
        ],

        itinerary: [
          {
            day: 1,
            title: "Vagamon Meadows & Pine Forest",
            description:
              "Explore Vagamon's beautiful meadows, pine forests and hill viewpoints.",

            activities: [
              {
                time: "08:00 AM",
                duration: "1 hr",
                name: "Breakfast",
                type: "food",
                amount: 0,
                description:
                  "Start the day with breakfast.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Vagamon Meadows",
                type: "place",
                amount: 400,
                description:
                  "Explore the beautiful green meadows.",
              },
              {
                time: "11:15 AM",
                duration: "1.5 hrs",
                name: "Pine Forest",
                type: "place",
                amount: 300,
                description:
                  "Enjoy a peaceful walk through the pine forest.",
              },
              {
                time: "01:00 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a local Kerala lunch.",
              },
              {
                time: "02:30 PM",
                duration: "2 hrs",
                name: "Vagamon Viewpoint",
                type: "place",
                amount: 500,
                description:
                  "Enjoy panoramic hill views.",
              },
              {
                time: "05:00 PM",
                duration: "1.5 hrs",
                name: "Vagamon Lake",
                type: "place",
                amount: 300,
                description:
                  "Relax near the peaceful hill lake.",
              },
              {
                time: "07:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy dinner.",
              },
              {
                time: "08:30 PM",
                duration: "1.5 hrs",
                name: "Vagamon Evening Walk",
                type: "activity",
                amount: 300,
                description:
                  "Enjoy the cool hill atmosphere.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Day End",
                type: "activity",
                amount: 0,
                description:
                  "Return and relax.",
              },
            ],

            planningTip:
              "Carry a light jacket and rain protection.",
          },

          {
            day: 2,
            title: "Chikmagalur Coffee & Mountains",
            description:
              "Experience Chikmagalur's famous coffee plantations and mountain views.",

            activities: [
              {
                time: "08:00 AM",
                duration: "1 hr",
                name: "Breakfast",
                type: "food",
                amount: 0,
                description:
                  "Start with breakfast.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Chikmagalur Coffee Estate",
                type: "place",
                amount: 700,
                description:
                  "Explore the famous coffee plantation landscape.",
              },
              {
                time: "11:15 AM",
                duration: "1.5 hrs",
                name: "Coffee Museum",
                type: "place",
                amount: 300,
                description:
                  "Learn about coffee production and history.",
              },
              {
                time: "01:00 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a local lunch.",
              },
              {
                time: "02:30 PM",
                duration: "2.5 hrs",
                name: "Mullayanagiri",
                type: "place",
                amount: 700,
                description:
                  "Enjoy the scenic mountain landscape.",
              },
              {
                time: "05:30 PM",
                duration: "1.5 hrs",
                name: "Chikmagalur Viewpoint",
                type: "place",
                amount: 400,
                description:
                  "Enjoy panoramic hill views.",
              },
              {
                time: "07:30 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy dinner.",
              },
              {
                time: "09:00 PM",
                duration: "1 hr",
                name: "Coffee Town Evening",
                type: "activity",
                amount: 300,
                description:
                  "Enjoy a relaxed evening around Chikmagalur town.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Trip End",
                type: "activity",
                amount: 0,
                description:
                  "Complete the trip.",
              },
            ],

            planningTip:
              "Allow extra travel time because the route between hill destinations can take longer.",
          },
        ],
      },

      3: {
        days: 3,
        nights: 2,
        price: 10000,

        baseAmount: 3800,
        baseAmountPerDay: 1267,
        placeAmount: 6200,

        highlights: [
          "Vagamon Meadows",
          "Pine Forest",
          "Vagamon Lake",
          "Chikmagalur Coffee Estate",
          "Mullayanagiri",
          "Jhari Falls",
        ],

        baseIncludes: [
          "Local transportation",
          "Parking / toll estimate",
          "Local travel & miscellaneous trip expenses",
        ],

        itinerary: [
          {
            day: 1,
            title: "Vagamon Hills",
            description:
              "Spend the first day exploring Vagamon's green landscapes.",

            activities: [
              {
                time: "08:00 AM",
                duration: "1 hr",
                name: "Breakfast",
                type: "food",
                amount: 0,
                description:
                  "Start with breakfast.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Vagamon Meadows",
                type: "place",
                amount: 400,
                description:
                  "Explore the green meadows.",
              },
              {
                time: "11:15 AM",
                duration: "1.5 hrs",
                name: "Pine Forest",
                type: "place",
                amount: 300,
                description:
                  "Enjoy a peaceful forest walk.",
              },
              {
                time: "01:00 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy lunch.",
              },
              {
                time: "02:30 PM",
                duration: "2 hrs",
                name: "Vagamon Viewpoint",
                type: "place",
                amount: 500,
                description:
                  "Enjoy panoramic views.",
              },
              {
                time: "05:00 PM",
                duration: "1.5 hrs",
                name: "Vagamon Lake",
                type: "place",
                amount: 300,
                description:
                  "Relax near the lake.",
              },
              {
                time: "07:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy dinner.",
              },
              {
                time: "08:30 PM",
                duration: "1.5 hrs",
                name: "Hill Town Evening",
                type: "activity",
                amount: 200,
                description:
                  "Enjoy the peaceful evening atmosphere.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Day End",
                type: "activity",
                amount: 0,
                description:
                  "Return and relax.",
              },
            ],

            planningTip:
              "Carry light rain protection because hill weather can change quickly.",
          },

          {
            day: 2,
            title: "Chikmagalur Coffee Trail",
            description:
              "Explore the coffee plantations and scenic landscapes of Chikmagalur.",

            activities: [
              {
                time: "08:00 AM",
                duration: "1 hr",
                name: "Breakfast",
                type: "food",
                amount: 0,
                description:
                  "Have breakfast before sightseeing.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Chikmagalur Coffee Estate",
                type: "place",
                amount: 700,
                description:
                  "Explore the coffee plantation.",
              },
              {
                time: "11:15 AM",
                duration: "1.5 hrs",
                name: "Coffee Museum",
                type: "place",
                amount: 300,
                description:
                  "Learn about coffee culture.",
              },
              {
                time: "01:00 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy lunch.",
              },
              {
                time: "02:30 PM",
                duration: "2 hrs",
                name: "Jhari Falls",
                type: "place",
                amount: 500,
                description:
                  "Visit the beautiful waterfall surrounded by greenery.",
              },
              {
                time: "05:00 PM",
                duration: "1.5 hrs",
                name: "Chikmagalur Viewpoint",
                type: "place",
                amount: 400,
                description:
                  "Enjoy panoramic mountain views.",
              },
              {
                time: "07:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy dinner.",
              },
              {
                time: "08:30 PM",
                duration: "1.5 hrs",
                name: "Coffee Town Evening",
                type: "activity",
                amount: 300,
                description:
                  "Relax and explore the town.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Day End",
                type: "activity",
                amount: 0,
                description:
                  "Return and relax.",
              },
            ],

            planningTip:
              "Wear comfortable shoes for the waterfall and plantation areas.",
          },

          {
            day: 3,
            title: "Mullayanagiri Mountain Experience",
            description:
              "Finish the journey with Chikmagalur's famous mountain landscapes.",

            activities: [
              {
                time: "08:00 AM",
                duration: "1 hr",
                name: "Breakfast",
                type: "food",
                amount: 0,
                description:
                  "Start the final day.",
              },
              {
                time: "09:00 AM",
                duration: "2.5 hrs",
                name: "Mullayanagiri",
                type: "place",
                amount: 700,
                description:
                  "Explore the mountain and surrounding landscapes.",
              },
              {
                time: "12:00 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy lunch.",
              },
              {
                time: "01:30 PM",
                duration: "2 hrs",
                name: "Baba Budangiri",
                type: "place",
                amount: 500,
                description:
                  "Explore the scenic mountain region.",
              },
              {
                time: "04:00 PM",
                duration: "1.5 hrs",
                name: "Coffee Shopping",
                type: "activity",
                amount: 300,
                description:
                  "Buy local coffee and souvenirs.",
              },
              {
                time: "06:00 PM",
                duration: "1.5 hrs",
                name: "Sunset Viewpoint",
                type: "place",
                amount: 300,
                description:
                  "Enjoy the final hill sunset.",
              },
              {
                time: "08:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy the final dinner.",
              },
              {
                time: "09:00 PM",
                duration: "1 hr",
                name: "Final Evening",
                type: "activity",
                amount: 200,
                description:
                  "Relax before departure.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Trip End",
                type: "activity",
                amount: 0,
                description:
                  "Complete the trip.",
              },
            ],

            planningTip:
              "Keep the final evening flexible for your departure.",
          },
        ],
      },
    },
  },
];

export default dualPlans;