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

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFBkf7haiixfEB2nt0vRu7neuGl9mdKTjbXiQJltBnQ&s=10",

    description:
      "Explore the peaceful backwaters of Alleppey and the historic streets, beaches and cultural attractions of Cochin.",

    durationOptions: {
      // =====================================================
      // 2 DAYS
      // =====================================================
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
                description:
                  "Start your morning with a relaxed Kerala-style breakfast before beginning the day's sightseeing.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Alleppey Backwaters",
                type: "place",
                amount: 1500,
                description:
                  "Enjoy beautiful waterways, coconut trees, traditional houses and peaceful village scenery along the backwaters.",
              },
              {
                time: "11:15 AM",
                duration: "1 hr",
                name: "Alleppey Village Walk",
                type: "place",
                amount: 200,
                description:
                  "Explore the traditional village surroundings and experience the relaxed lifestyle of the local backwater communities.",
              },
              {
                time: "12:30 PM",
                duration: "1 hr",
                name: "Kerala Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a traditional Kerala-style lunch with local flavours before continuing the afternoon sightseeing.",
              },
              {
                time: "02:00 PM",
                duration: "2 hrs",
                name: "Alleppey Beach",
                type: "place",
                amount: 0,
                description:
                  "Relax beside the Arabian Sea, enjoy the coastal breeze and spend some peaceful time along the shoreline.",
              },
              {
                time: "04:30 PM",
                duration: "2 hrs",
                name: "Marari Beach",
                type: "place",
                amount: 500,
                description:
                  "Enjoy Marari's calm coastline, soft sandy surroundings and beautiful evening atmosphere away from busy city areas.",
              },
              {
                time: "07:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a relaxed Kerala dinner with local dishes after a full day of sightseeing.",
              },
              {
                time: "08:30 PM",
                duration: "1.5 hrs",
                name: "Alleppey Night Walk",
                type: "activity",
                amount: 300,
                description:
                  "Take a peaceful evening walk around the local town area and enjoy Alleppey's calm night atmosphere.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Day End",
                type: "activity",
                amount: 0,
                description:
                  "Return to the accommodation, freshen up and relax after a full day of exploring Alleppey.",
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
                  "Have a fresh breakfast before starting the day's Cochin heritage and sightseeing experience.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Fort Kochi",
                type: "place",
                amount: 500,
                description:
                  "Explore the historic streets, colonial buildings, heritage landmarks and cultural attractions of Fort Kochi.",
              },
              {
                time: "11:15 AM",
                duration: "1 hr",
                name: "Chinese Fishing Nets",
                type: "place",
                amount: 0,
                description:
                  "See the traditional Chinese fishing nets along the waterfront and enjoy the unique coastal setting of Fort Kochi.",
              },
              {
                time: "12:30 PM",
                duration: "1 hr",
                name: "Kerala Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a traditional Kerala lunch in Cochin and take a short break before the afternoon sightseeing.",
              },
              {
                time: "02:00 PM",
                duration: "2 hrs",
                name: "Mattancherry",
                type: "place",
                amount: 500,
                description:
                  "Explore the historic streets, heritage buildings and cultural character of Mattancherry.",
              },
              {
                time: "04:30 PM",
                duration: "1.5 hrs",
                name: "Jew Town",
                type: "place",
                amount: 300,
                description:
                  "Walk through the colourful heritage streets, browse local shops and experience the historic atmosphere of Jew Town.",
              },
              {
                time: "06:30 PM",
                duration: "1.5 hrs",
                name: "Marine Drive",
                type: "place",
                amount: 300,
                description:
                  "Enjoy the evening waterfront atmosphere, scenic views and relaxing promenade along Marine Drive.",
              },
              {
                time: "08:15 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a comfortable dinner in Cochin before completing the final activities of the trip.",
              },
              {
                time: "09:30 PM",
                duration: "0.5 hr",
                name: "Cochin Night Drive",
                type: "activity",
                amount: 200,
                description:
                  "Enjoy a short evening drive through Cochin and see the city lights and waterfront areas at night.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Trip End",
                type: "activity",
                amount: 0,
                description:
                  "Complete the Cochin experience and prepare for departure or the next part of your journey.",
              },
            ],

            planningTip:
              "Wear comfortable footwear because Fort Kochi and Mattancherry involve walking.",
          },
        ],
      },

      // =====================================================
      // 3 DAYS
      // =====================================================
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
                description:
                  "Start the morning with a fresh breakfast before heading out for the day's Alleppey experiences.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Alleppey Backwaters",
                type: "place",
                amount: 1500,
                description:
                  "Cruise through peaceful waterways surrounded by coconut palms, village homes and beautiful Kerala scenery.",
              },
              {
                time: "11:15 AM",
                duration: "1 hr",
                name: "Village Experience",
                type: "activity",
                amount: 300,
                description:
                  "Experience the quiet village surroundings and observe the traditional lifestyle near the Alleppey backwaters.",
              },
              {
                time: "12:30 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a delicious Kerala lunch and take some time to relax before the afternoon activities.",
              },
              {
                time: "02:00 PM",
                duration: "2 hrs",
                name: "Alleppey Beach",
                type: "place",
                amount: 0,
                description:
                  "Relax beside the Arabian Sea, enjoy the sea breeze and spend a peaceful afternoon at the beach.",
              },
              {
                time: "04:30 PM",
                duration: "1.5 hrs",
                name: "Lighthouse Area",
                type: "place",
                amount: 200,
                description:
                  "Explore the coastal surroundings near the lighthouse and enjoy views of the nearby shoreline.",
              },
              {
                time: "06:30 PM",
                duration: "1 hr",
                name: "Sunset Experience",
                type: "activity",
                amount: 200,
                description:
                  "Slow down in the evening and enjoy the changing colours of the sky along the coastal landscape.",
              },
              {
                time: "08:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a relaxed dinner featuring local Kerala flavours after the day's sightseeing.",
              },
              {
                time: "09:15 PM",
                duration: "0.75 hr",
                name: "Alleppey Night Walk",
                type: "activity",
                amount: 200,
                description:
                  "Take a comfortable evening walk around the town and enjoy the quieter side of Alleppey at night.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Day End",
                type: "activity",
                amount: 0,
                description:
                  "Return to the accommodation and relax after a scenic day around Alleppey's backwaters and coast.",
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
                description:
                  "Have a filling breakfast before starting the Cochin heritage sightseeing.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Fort Kochi",
                type: "place",
                amount: 500,
                description:
                  "Walk through Fort Kochi's historic streets and discover its colonial architecture, cultural landmarks and coastal charm.",
              },
              {
                time: "11:15 AM",
                duration: "1 hr",
                name: "Chinese Fishing Nets",
                type: "place",
                amount: 0,
                description:
                  "Visit the waterfront to see the traditional fishing nets and enjoy views across the Arabian Sea.",
              },
              {
                time: "12:30 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description:
                  "Take a lunch break and enjoy local Kerala or coastal dishes in Cochin.",
              },
              {
                time: "02:00 PM",
                duration: "2 hrs",
                name: "Mattancherry",
                type: "place",
                amount: 500,
                description:
                  "Discover Mattancherry's historic neighbourhoods, colourful streets and rich cultural surroundings.",
              },
              {
                time: "04:30 PM",
                duration: "1.5 hrs",
                name: "Jew Town",
                type: "place",
                amount: 300,
                description:
                  "Explore the heritage streets, local shops and distinctive cultural atmosphere of Jew Town.",
              },
              {
                time: "06:30 PM",
                duration: "1 hr",
                name: "Marine Drive",
                type: "place",
                amount: 300,
                description:
                  "Spend the evening beside the waterfront and enjoy the city skyline and relaxing promenade.",
              },
              {
                time: "08:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy dinner in Cochin after completing the day's heritage sightseeing.",
              },
              {
                time: "09:15 PM",
                duration: "0.75 hr",
                name: "Cochin Night View",
                type: "activity",
                amount: 200,
                description:
                  "Enjoy Cochin's evening atmosphere with a short relaxed outing through the illuminated city.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Day End",
                type: "activity",
                amount: 0,
                description:
                  "Return to your accommodation and relax after a full day of exploring Cochin.",
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
                description:
                  "Start the final day with a relaxed breakfast before heading out for the last sightseeing activities.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Cherai Beach",
                type: "place",
                amount: 400,
                description:
                  "Relax along Cherai Beach, enjoy the coastal scenery and spend some peaceful time beside the sea.",
              },
              {
                time: "11:30 AM",
                duration: "1 hr",
                name: "Local Shopping",
                type: "activity",
                amount: 300,
                description:
                  "Explore local shops for souvenirs, traditional products and small gifts to remember the trip.",
              },
              {
                time: "12:30 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a relaxed lunch before continuing with the final afternoon sightseeing.",
              },
              {
                time: "02:00 PM",
                duration: "2 hrs",
                name: "Cochin Local Sightseeing",
                type: "place",
                amount: 400,
                description:
                  "Explore additional local attractions and enjoy a final look at Cochin's city and cultural surroundings.",
              },
              {
                time: "04:30 PM",
                duration: "1.5 hrs",
                name: "Marine Drive",
                type: "place",
                amount: 300,
                description:
                  "Spend some relaxing time along the waterfront and enjoy the city views during the afternoon.",
              },
              {
                time: "06:30 PM",
                duration: "1 hr",
                name: "Sunset",
                type: "activity",
                amount: 200,
                description:
                  "Enjoy the evening sky and take in the peaceful coastal atmosphere before the final dinner.",
              },
              {
                time: "08:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy your final dinner in Cochin and take a relaxed break before departure.",
              },
              {
                time: "09:15 PM",
                duration: "0.75 hr",
                name: "Final Night Walk",
                type: "activity",
                amount: 200,
                description:
                  "Take a gentle final evening walk and enjoy the atmosphere before ending the trip.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Trip End",
                type: "activity",
                amount: 0,
                description:
                  "Complete the trip and prepare for departure with your travel memories from Kerala.",
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

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JzlyLzlOVFN5iOFRqkkXrcjaH1rPvqRp0Hfvqf6mcA&s=10",

    description:
      "Combine peaceful backwaters, village life and canoe experiences with Varkala's famous cliffs and beaches.",

    durationOptions: {
      // =====================================================
      // 2 DAYS
      // =====================================================
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
                description:
                  "Start the morning with a relaxed breakfast before heading out to explore Munroe Island.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Munroe Island Backwaters",
                type: "place",
                amount: 1200,
                description:
                  "Explore beautiful backwater channels surrounded by coconut trees, village homes and peaceful island scenery.",
              },
              {
                time: "11:15 AM",
                duration: "1.5 hrs",
                name: "Village Canoe Ride",
                type: "activity",
                amount: 700,
                description:
                  "Enjoy a traditional canoe ride through narrow waterways and experience the calm village side of Munroe Island.",
              },
              {
                time: "01:00 PM",
                duration: "1 hr",
                name: "Local Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a relaxed local lunch featuring Kerala-style dishes and fresh regional flavours.",
              },
              {
                time: "02:30 PM",
                duration: "2 hrs",
                name: "Munroe Village Walk",
                type: "place",
                amount: 200,
                description:
                  "Walk through the village surroundings and experience the simple lifestyle, greenery and local atmosphere.",
              },
              {
                time: "05:00 PM",
                duration: "1.5 hrs",
                name: "Island Sunset",
                type: "activity",
                amount: 200,
                description:
                  "Enjoy the peaceful sunset over the island waterways and capture the beautiful evening scenery.",
              },
              {
                time: "07:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a relaxed local dinner after a full day of backwater and village experiences.",
              },
              {
                time: "08:30 PM",
                duration: "1.5 hrs",
                name: "Village Evening Experience",
                type: "activity",
                amount: 200,
                description:
                  "Spend a peaceful evening around the island and enjoy the quiet village atmosphere away from busy city areas.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Day End",
                type: "activity",
                amount: 0,
                description:
                  "Return to the accommodation, relax and prepare for the next day's Varkala experience.",
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
                  "Start the day with breakfast before heading out to explore Varkala's coastal attractions.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Varkala Cliff",
                type: "place",
                amount: 300,
                description:
                  "Walk along the famous cliff area and enjoy panoramic views of the Arabian Sea and surrounding coastline.",
              },
              {
                time: "11:15 AM",
                duration: "2 hrs",
                name: "Varkala Beach",
                type: "place",
                amount: 0,
                description:
                  "Relax beside the sea, enjoy the beach atmosphere and spend some peaceful time along the shoreline.",
              },
              {
                time: "01:30 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a relaxed lunch near the beach before continuing the afternoon sightseeing.",
              },
              {
                time: "03:00 PM",
                duration: "2 hrs",
                name: "Kappil Beach",
                type: "place",
                amount: 400,
                description:
                  "Explore the beautiful coastal landscape where the beach surroundings meet the peaceful backwater region.",
              },
              {
                time: "05:30 PM",
                duration: "1 hr",
                name: "Kappil Lake View",
                type: "place",
                amount: 200,
                description:
                  "Enjoy the peaceful lake scenery and views of the surrounding coastal landscape during the evening.",
              },
              {
                time: "07:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a relaxed dinner after exploring Varkala and the Kappil coastal area.",
              },
              {
                time: "08:30 PM",
                duration: "1.5 hrs",
                name: "Varkala Evening Walk",
                type: "activity",
                amount: 300,
                description:
                  "Explore the cliff area in the evening, browse local surroundings and enjoy Varkala's lively night atmosphere.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Trip End",
                type: "activity",
                amount: 0,
                description:
                  "Complete the Varkala experience and prepare for departure after enjoying the coastal highlights.",
              },
            ],

            planningTip:
              "Be careful around cliff edges and carry sunscreen.",
          },
        ],
      },

      // =====================================================
      // 3 DAYS
      // =====================================================
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
                description:
                  "Have breakfast and get ready for a peaceful day exploring the island backwaters.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Munroe Backwaters",
                type: "place",
                amount: 1200,
                description:
                  "Explore the calm backwater channels, coconut-lined waterways and beautiful island surroundings.",
              },
              {
                time: "11:15 AM",
                duration: "1.5 hrs",
                name: "Canoe Ride",
                type: "activity",
                amount: 700,
                description:
                  "Enjoy a traditional canoe experience through the narrow waterways and peaceful village areas.",
              },
              {
                time: "01:00 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy local Kerala food and take a comfortable break before continuing the afternoon activities.",
              },
              {
                time: "02:30 PM",
                duration: "2 hrs",
                name: "Munroe Village",
                type: "place",
                amount: 200,
                description:
                  "Explore the village, local surroundings and peaceful lifestyle of the island community.",
              },
              {
                time: "05:00 PM",
                duration: "1.5 hrs",
                name: "Island Sunset",
                type: "activity",
                amount: 200,
                description:
                  "Enjoy the beautiful evening light and peaceful sunset views across the island waterways.",
              },
              {
                time: "07:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a relaxed dinner after a full day of backwater and village exploration.",
              },
              {
                time: "08:30 PM",
                duration: "1.5 hrs",
                name: "Village Evening",
                type: "activity",
                amount: 200,
                description:
                  "Relax around the village and enjoy the calm atmosphere of Munroe Island after sunset.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Day End",
                type: "activity",
                amount: 0,
                description:
                  "Return to the accommodation and relax before the next day's Varkala sightseeing.",
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
                description:
                  "Have breakfast before starting a full day of coastal sightseeing around Varkala.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Varkala Cliff",
                type: "place",
                amount: 300,
                description:
                  "Explore the famous cliff area and enjoy wide views of the Arabian Sea and Varkala coastline.",
              },
              {
                time: "11:15 AM",
                duration: "2 hrs",
                name: "Varkala Beach",
                type: "place",
                amount: 0,
                description:
                  "Relax on the beach, enjoy the sea breeze and spend a peaceful morning by the Arabian Sea.",
              },
              {
                time: "01:30 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy lunch near the beach and take a short break before the afternoon activities.",
              },
              {
                time: "03:00 PM",
                duration: "2 hrs",
                name: "Varkala Local Market",
                type: "activity",
                amount: 300,
                description:
                  "Explore local shops, cafés and small stores while experiencing the relaxed atmosphere around Varkala.",
              },
              {
                time: "05:30 PM",
                duration: "1 hr",
                name: "Sunset Point",
                type: "place",
                amount: 200,
                description:
                  "Find a comfortable viewpoint and enjoy the evening sea views as the sun begins to set.",
              },
              {
                time: "07:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a relaxed dinner after spending the day around Varkala's beaches and cliff area.",
              },
              {
                time: "08:30 PM",
                duration: "1.5 hrs",
                name: "Varkala Night Walk",
                type: "activity",
                amount: 300,
                description:
                  "Enjoy an evening walk around the cliff area, local shops and cafés while experiencing Varkala at night.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Day End",
                type: "activity",
                amount: 0,
                description:
                  "Return to your accommodation and relax after a complete day of Varkala sightseeing.",
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
                description:
                  "Start the final day with breakfast before heading toward the Kappil coastal region.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Kappil Beach",
                type: "place",
                amount: 400,
                description:
                  "Explore the peaceful coastline, enjoy the sea breeze and take in the natural beauty around Kappil.",
              },
              {
                time: "11:15 AM",
                duration: "1.5 hrs",
                name: "Kappil Lake",
                type: "place",
                amount: 200,
                description:
                  "Enjoy the calm lake, surrounding greenery and scenic landscape where the backwater meets the coast.",
              },
              {
                time: "01:00 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy lunch and take some time to relax before the final afternoon sightseeing.",
              },
              {
                time: "02:30 PM",
                duration: "2 hrs",
                name: "Varkala Local Sightseeing",
                type: "place",
                amount: 300,
                description:
                  "Explore a few remaining local attractions and enjoy the relaxed coastal surroundings of Varkala.",
              },
              {
                time: "05:00 PM",
                duration: "1.5 hrs",
                name: "Beach Relaxation",
                type: "activity",
                amount: 0,
                description:
                  "Spend some quiet time by the beach and enjoy the final coastal views before departure.",
              },
              {
                time: "07:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy the final dinner of the trip and take a comfortable break before departure.",
              },
              {
                time: "08:30 PM",
                duration: "1.5 hrs",
                name: "Final Evening Walk",
                type: "activity",
                amount: 200,
                description:
                  "Take a relaxed final evening walk and enjoy the coastal atmosphere before ending the journey.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Trip End",
                type: "activity",
                amount: 0,
                description:
                  "Complete the trip and prepare for departure after exploring Munroe Island, Varkala and Kappil.",
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

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0KJ-iqZW3rRs__yEXtDTG8__tyb3TBZQpMr3MOy-LwQ&s=10",

    description:
      "Combine Mysore's royal heritage with Coorg's coffee plantations, waterfalls and scenic hills.",

    durationOptions: {
      // =====================================================
      // 2 DAYS
      // =====================================================
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
                  "Enjoy a traditional South Indian breakfast before starting your Mysore sightseeing.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Mysore Palace",
                type: "place",
                amount: 500,
                description:
                  "Explore the magnificent Mysore Palace, admire its grand architecture and discover the royal heritage of the city.",
              },
              {
                time: "11:15 AM",
                duration: "1.5 hrs",
                name: "Devaraja Market",
                type: "place",
                amount: 200,
                description:
                  "Explore the colourful local market filled with flowers, spices, fruits and traditional products.",
              },
              {
                time: "01:00 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a Mysore-style lunch and take a short break before continuing the afternoon sightseeing.",
              },
              {
                time: "02:30 PM",
                duration: "2 hrs",
                name: "Chamundi Hills",
                type: "place",
                amount: 300,
                description:
                  "Visit the hill area and enjoy panoramic views overlooking Mysore and the surrounding landscape.",
              },
              {
                time: "05:00 PM",
                duration: "2 hrs",
                name: "Brindavan Gardens",
                type: "place",
                amount: 600,
                description:
                  "Relax among the beautifully landscaped gardens, fountains and scenic surroundings near the dam.",
              },
              {
                time: "07:30 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy dinner after a full day of exploring Mysore's royal and cultural attractions.",
              },
              {
                time: "09:00 PM",
                duration: "1 hr",
                name: "Mysore Night Drive",
                type: "activity",
                amount: 200,
                description:
                  "Enjoy a relaxed evening drive through Mysore and experience the illuminated city atmosphere.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Day End",
                type: "activity",
                amount: 0,
                description:
                  "Return to the accommodation and relax before travelling toward Coorg the next day.",
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
                  "Start the day with breakfast before heading out to explore the scenic coffee country of Coorg.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Coorg Coffee Estate",
                type: "place",
                amount: 700,
                description:
                  "Explore the famous coffee plantation landscape and enjoy the greenery, fresh air and peaceful hill surroundings.",
              },
              {
                time: "11:15 AM",
                duration: "1.5 hrs",
                name: "Abbey Falls",
                type: "place",
                amount: 300,
                description:
                  "Visit the scenic waterfall surrounded by lush greenery and enjoy the natural atmosphere of the area.",
              },
              {
                time: "01:00 PM",
                duration: "1 hr",
                name: "Coorg Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a local Coorg-style lunch featuring regional flavours before continuing the sightseeing.",
              },
              {
                time: "02:30 PM",
                duration: "2 hrs",
                name: "Raja's Seat",
                type: "place",
                amount: 300,
                description:
                  "Enjoy scenic hill views from Raja's Seat and take in the surrounding valleys and greenery.",
              },
              {
                time: "05:00 PM",
                duration: "1.5 hrs",
                name: "Coorg Viewpoint",
                type: "place",
                amount: 400,
                description:
                  "Enjoy wide views of the surrounding coffee-country landscape and peaceful Western Ghats scenery.",
              },
              {
                time: "07:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a relaxed dinner after a scenic day exploring Coorg's plantations and hill attractions.",
              },
              {
                time: "08:30 PM",
                duration: "1.5 hrs",
                name: "Coorg Evening Experience",
                type: "activity",
                amount: 300,
                description:
                  "Enjoy a peaceful evening in the hills and take in Coorg's cool weather and relaxed atmosphere.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Trip End",
                type: "activity",
                amount: 0,
                description:
                  "Complete the Coorg experience and prepare for departure after exploring the coffee country and hills.",
              },
            ],

            planningTip:
              "Carry comfortable shoes because waterfalls and viewpoints involve walking.",
          },
        ],
      },

      // =====================================================
      // 3 DAYS
      // =====================================================
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
                description:
                  "Have breakfast and get ready for a full day of Mysore heritage sightseeing.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Mysore Palace",
                type: "place",
                amount: 500,
                description:
                  "Explore the royal palace, admire its detailed architecture and learn about Mysore's royal heritage.",
              },
              {
                time: "11:15 AM",
                duration: "1.5 hrs",
                name: "Devaraja Market",
                type: "place",
                amount: 200,
                description:
                  "Walk through the colourful market and discover local flowers, spices, fruits and traditional products.",
              },
              {
                time: "01:00 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a relaxed lunch featuring local South Indian flavours before continuing the day's sightseeing.",
              },
              {
                time: "02:30 PM",
                duration: "2 hrs",
                name: "Chamundi Hills",
                type: "place",
                amount: 300,
                description:
                  "Visit Chamundi Hills and enjoy panoramic views across Mysore and the surrounding countryside.",
              },
              {
                time: "05:00 PM",
                duration: "2 hrs",
                name: "Brindavan Gardens",
                type: "place",
                amount: 600,
                description:
                  "Relax through the landscaped gardens, fountains and peaceful surroundings near the dam.",
              },
              {
                time: "07:30 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy dinner after a complete day of exploring Mysore's historic and scenic attractions.",
              },
              {
                time: "09:00 PM",
                duration: "1 hr",
                name: "Mysore Night Drive",
                type: "activity",
                amount: 200,
                description:
                  "Take a relaxed evening drive and enjoy the illuminated streets and calm night atmosphere of Mysore.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Day End",
                type: "activity",
                amount: 0,
                description:
                  "Return to the accommodation and relax before beginning the Coorg part of the journey.",
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
                description:
                  "Have breakfast before starting the journey toward Coorg and its scenic coffee plantations.",
              },
              {
                time: "09:30 AM",
                duration: "2 hrs",
                name: "Coorg Coffee Estate",
                type: "place",
                amount: 700,
                description:
                  "Explore the coffee plantation landscape and enjoy the greenery, fresh air and peaceful hill environment.",
              },
              {
                time: "12:00 PM",
                duration: "1 hr",
                name: "Coffee Experience",
                type: "activity",
                amount: 300,
                description:
                  "Learn about coffee cultivation and processing while experiencing the culture behind Coorg's famous coffee estates.",
              },
              {
                time: "01:30 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy lunch with local flavours and take a short rest before the afternoon sightseeing.",
              },
              {
                time: "03:00 PM",
                duration: "2 hrs",
                name: "Abbey Falls",
                type: "place",
                amount: 300,
                description:
                  "Visit the scenic waterfall and enjoy the lush greenery and natural surroundings around the falls.",
              },
              {
                time: "05:30 PM",
                duration: "1.5 hrs",
                name: "Raja's Seat",
                type: "place",
                amount: 300,
                description:
                  "Enjoy beautiful hill views and a peaceful atmosphere from one of Coorg's scenic viewpoints.",
              },
              {
                time: "07:30 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy dinner after a full day of coffee estate and waterfall exploration.",
              },
              {
                time: "09:00 PM",
                duration: "1 hr",
                name: "Coorg Evening",
                type: "activity",
                amount: 200,
                description:
                  "Relax in the peaceful hill environment and enjoy Coorg's cool evening atmosphere.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Day End",
                type: "activity",
                amount: 0,
                description:
                  "Return to the accommodation and relax before the final day of mountain sightseeing.",
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
                  "Start the final day with breakfast before heading toward the scenic mountain areas of Coorg.",
              },
              {
                time: "09:00 AM",
                duration: "2.5 hrs",
                name: "Mandalpatti",
                type: "place",
                amount: 900,
                description:
                  "Enjoy panoramic views of the Western Ghats and explore the beautiful mountain landscape around Mandalpatti.",
              },
              {
                time: "12:00 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy lunch and take a comfortable break before continuing the final afternoon sightseeing.",
              },
              {
                time: "01:30 PM",
                duration: "2 hrs",
                name: "Coorg Local Sightseeing",
                type: "place",
                amount: 400,
                description:
                  "Explore nearby attractions and enjoy the scenic surroundings of Coorg at a relaxed pace.",
              },
              {
                time: "04:00 PM",
                duration: "1.5 hrs",
                name: "Coffee Shopping",
                type: "activity",
                amount: 300,
                description:
                  "Browse local shops and pick up fresh Coorg coffee and souvenirs to remember the trip.",
              },
              {
                time: "06:00 PM",
                duration: "1.5 hrs",
                name: "Coorg Sunset View",
                type: "place",
                amount: 300,
                description:
                  "Enjoy the final hill sunset and take in the peaceful views across the surrounding mountains.",
              },
              {
                time: "08:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy the final dinner of the trip and relax after a scenic day in the Coorg hills.",
              },
              {
                time: "09:00 PM",
                duration: "1 hr",
                name: "Final Evening",
                type: "activity",
                amount: 200,
                description:
                  "Spend a relaxed final evening in Coorg and prepare your belongings before departure.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Trip End",
                type: "activity",
                amount: 0,
                description:
                  "Complete the Mysore and Coorg journey and prepare for your return trip.",
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
    ],

    category: "South India Duo",

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3tzgxLdFQIBr459HoJLnLW5SioSzn8jNfGRT5Qqj2Nw&s=10",

    description:
      "Explore the view pointof Vagamon and mountain landscapes of Chikmagalur.",

    durationOptions: {
      // =====================================================
      // 2 DAYS
      // =====================================================
      2: {
        days: 2,
        nights: 1,
        price: 8200,

        baseAmount: 3200,
        baseAmountPerDay: 1600,
        placeAmount: 5000,

        highlights: [
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
                  "Start the day with a relaxed breakfast before heading into Vagamon's green hill landscapes.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Vagamon Meadows",
                type: "place",
                amount: 400,
                description:
                  "Explore the beautiful green meadows, open landscapes and peaceful hill surroundings of Vagamon.",
              },
              {
                time: "11:15 AM",
                duration: "1.5 hrs",
                name: "Pine Forest",
                type: "place",
                amount: 300,
                description:
                  "Enjoy a peaceful walk through the tall pine trees and experience the cool, quiet atmosphere of the forest.",
              },
              {
                time: "01:00 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a local Kerala lunch and take a short break before continuing the hill sightseeing.",
              },
              {
                time: "02:30 PM",
                duration: "2 hrs",
                name: "Vagamon Viewpoint",
                type: "place",
                amount: 500,
                description:
                  "Enjoy panoramic views across Vagamon's rolling hills, valleys and green landscapes.",
              },
              {
                time: "05:00 PM",
                duration: "1.5 hrs",
                name: "Vagamon Lake",
                type: "place",
                amount: 300,
                description:
                  "Relax near the peaceful hill lake and enjoy the surrounding greenery and cool mountain atmosphere.",
              },
              {
                time: "07:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a relaxed dinner after a full day exploring Vagamon's hills, forests and viewpoints.",
              },
              {
                time: "08:30 PM",
                duration: "1.5 hrs",
                name: "Vagamon Evening Walk",
                type: "activity",
                amount: 300,
                description:
                  "Take a peaceful evening walk through the hill town and enjoy Vagamon's cool night atmosphere.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Day End",
                type: "activity",
                amount: 0,
                description:
                  "Return to the accommodation and relax before continuing the journey toward Chikmagalur.",
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
                  "Start the morning with breakfast before exploring Chikmagalur's coffee and mountain attractions.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Chikmagalur Coffee Estate",
                type: "place",
                amount: 700,
                description:
                  "Explore the famous coffee plantation landscape and enjoy the greenery, fresh air and peaceful hill surroundings.",
              },
              {
                time: "11:15 AM",
                duration: "1.5 hrs",
                name: "Coffee Museum",
                type: "place",
                amount: 300,
                description:
                  "Discover the history of coffee, learn about its production and understand the importance of coffee culture in the region.",
              },
              {
                time: "01:00 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a local lunch and take a comfortable break before heading toward the mountain attractions.",
              },
              {
                time: "02:30 PM",
                duration: "2.5 hrs",
                name: "Mullayanagiri",
                type: "place",
                amount: 700,
                description:
                  "Explore the scenic mountain landscape around Mullayanagiri and enjoy impressive views of the surrounding hills.",
              },
              {
                time: "05:30 PM",
                duration: "1.5 hrs",
                name: "Chikmagalur Viewpoint",
                type: "place",
                amount: 400,
                description:
                  "Enjoy panoramic views of Chikmagalur's green valleys, coffee plantations and surrounding mountain ranges.",
              },
              {
                time: "07:30 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy dinner after a scenic day of coffee estate and mountain exploration.",
              },
              {
                time: "09:00 PM",
                duration: "1 hr",
                name: "Coffee Town Evening",
                type: "activity",
                amount: 300,
                description:
                  "Enjoy a relaxed evening around Chikmagalur town and experience its calm coffee-country atmosphere.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Trip End",
                type: "activity",
                amount: 0,
                description:
                  "Complete the trip after experiencing Vagamon's hills and Chikmagalur's coffee and mountain landscapes.",
              },
            ],

            planningTip:
              "Allow extra travel time because the route between hill destinations can take longer.",
          },
        ],
      },

      // =====================================================
      // 3 DAYS
      // =====================================================
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
                  "Start the morning with breakfast before heading out to explore Vagamon's peaceful hill landscapes.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Vagamon Meadows",
                type: "place",
                amount: 400,
                description:
                  "Explore the wide green meadows and enjoy the fresh air, open views and peaceful surroundings of Vagamon.",
              },
              {
                time: "11:15 AM",
                duration: "1.5 hrs",
                name: "Pine Forest",
                type: "place",
                amount: 300,
                description:
                  "Walk through the tall pine trees and enjoy the cool, shaded environment of the forest.",
              },
              {
                time: "01:00 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a relaxed lunch and recharge before continuing the afternoon hill sightseeing.",
              },
              {
                time: "02:30 PM",
                duration: "2 hrs",
                name: "Vagamon Viewpoint",
                type: "place",
                amount: 500,
                description:
                  "Enjoy panoramic views of the rolling green hills and valleys surrounding Vagamon.",
              },
              {
                time: "05:00 PM",
                duration: "1.5 hrs",
                name: "Vagamon Lake",
                type: "place",
                amount: 300,
                description:
                  "Relax beside the peaceful lake and enjoy the greenery and cool mountain atmosphere.",
              },
              {
                time: "07:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy dinner after a scenic day exploring the meadows, forests and viewpoints of Vagamon.",
              },
              {
                time: "08:30 PM",
                duration: "1.5 hrs",
                name: "Hill Town Evening",
                type: "activity",
                amount: 200,
                description:
                  "Enjoy the peaceful evening atmosphere around the hill town and take a relaxed walk before resting.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Day End",
                type: "activity",
                amount: 0,
                description:
                  "Return to the accommodation and relax after the first day of the hill journey.",
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
                  "Have breakfast before starting the day's coffee plantation and waterfall experiences.",
              },
              {
                time: "09:00 AM",
                duration: "2 hrs",
                name: "Chikmagalur Coffee Estate",
                type: "place",
                amount: 700,
                description:
                  "Explore the coffee estate, walk through the plantation landscape and enjoy the peaceful greenery of Chikmagalur.",
              },
              {
                time: "11:15 AM",
                duration: "1.5 hrs",
                name: "Coffee Museum",
                type: "place",
                amount: 300,
                description:
                  "Learn about coffee culture, cultivation and production while discovering the history behind Chikmagalur's coffee industry.",
              },
              {
                time: "01:00 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy lunch with local flavours and take a comfortable break before the afternoon adventure.",
              },
              {
                time: "02:30 PM",
                duration: "2 hrs",
                name: "Jhari Falls",
                type: "place",
                amount: 500,
                description:
                  "Visit the beautiful waterfall surrounded by lush greenery and enjoy the natural scenery around the falls.",
              },
              {
                time: "05:00 PM",
                duration: "1.5 hrs",
                name: "Chikmagalur Viewpoint",
                type: "place",
                amount: 400,
                description:
                  "Enjoy panoramic mountain views and take in the green valleys and coffee-growing landscapes around Chikmagalur.",
              },
              {
                time: "07:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy a relaxed dinner after a full day of coffee plantation and mountain sightseeing.",
              },
              {
                time: "08:30 PM",
                duration: "1.5 hrs",
                name: "Coffee Town Evening",
                type: "activity",
                amount: 300,
                description:
                  "Relax and explore the town in the evening while enjoying Chikmagalur's calm coffee-country atmosphere.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Day End",
                type: "activity",
                amount: 0,
                description:
                  "Return to the accommodation and relax before the final mountain experience.",
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
                  "Start the final day with breakfast before heading toward the mountain attractions of Chikmagalur.",
              },
              {
                time: "09:00 AM",
                duration: "2.5 hrs",
                name: "Mullayanagiri",
                type: "place",
                amount: 700,
                description:
                  "Explore the mountain surroundings and enjoy panoramic views across the Western Ghats and nearby valleys.",
              },
              {
                time: "12:00 PM",
                duration: "1 hr",
                name: "Lunch",
                type: "food",
                amount: 0,
                description:
                  "Enjoy lunch and take a short rest before continuing the final afternoon sightseeing.",
              },
              {
                time: "01:30 PM",
                duration: "2 hrs",
                name: "Baba Budangiri",
                type: "place",
                amount: 500,
                description:
                  "Explore the scenic mountain region, enjoy the surrounding landscapes and take in the peaceful hill atmosphere.",
              },
              {
                time: "04:00 PM",
                duration: "1.5 hrs",
                name: "Coffee Shopping",
                type: "activity",
                amount: 300,
                description:
                  "Browse local shops and choose fresh coffee products and souvenirs to take home from Chikmagalur.",
              },
              {
                time: "06:00 PM",
                duration: "1.5 hrs",
                name: "Sunset Viewpoint",
                type: "place",
                amount: 300,
                description:
                  "Enjoy the final hill sunset and watch the evening light spread across the surrounding mountain landscape.",
              },
              {
                time: "08:00 PM",
                duration: "1 hr",
                name: "Dinner",
                type: "food",
                amount: 0,
                description:
                  "Enjoy the final dinner of the journey and relax after a memorable day in the Chikmagalur hills.",
              },
              {
                time: "09:00 PM",
                duration: "1 hr",
                name: "Final Evening",
                type: "activity",
                amount: 200,
                description:
                  "Spend a relaxed final evening preparing your belongings and enjoying the peaceful hill atmosphere.",
              },
              {
                time: "10:00 PM",
                duration: "0 hr",
                name: "Trip End",
                type: "activity",
                amount: 0,
                description:
                  "Complete the Vagamon and Chikmagalur journey and prepare for your return trip.",
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