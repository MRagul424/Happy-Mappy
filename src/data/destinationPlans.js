import { destinations } from "./travelData";

// These destinations also have a 4-day option.
const fourDayDestinations = new Set([
  "Alleppey",
  "Kochi",
  "Kodaikanal",
  "Munnar",
  "Ooty",
  "Wayanad",
]);

// Every destination gets 1, 2 and 3-day plans.
// The above destinations also get a 4-day plan.
const getAvailableDurations = (destinationName) => {
  const durations = [1, 2, 3];

  if (fourDayDestinations.has(destinationName)) {
    durations.push(4);
  }

  return durations;
};

// Create an itinerary for the selected number of days.
const createItinerary = (places, days) => {
  const itinerary = [];

  for (let day = 1; day <= days; day++) {
    const startIndex = (day - 1) % places.length;

    const activities = [
      places[startIndex],
    ];

    // Add a second place when available.
    if (places.length > 1 && day < days) {
      activities.push(
        places[(startIndex + 1) % places.length]
      );
    }

    activities.push(
      day === days
        ? "Enjoy the final moments and departure"
        : "Enjoy the destination and relax"
    );

    itinerary.push({
      day,
      title:
        day === 1
          ? "Arrival & Exploration"
          : `Day ${day} Exploration`,
      activities,
    });
  }

  return itinerary;
};

const createPlan = (destination, days) => {
  const nights = Math.max(days - 1, 0);

  const pricePerDay =
    destination.category === "Adventure"
      ? 3200
      : 2800;

  return {
    id: `${destination.id}-${days}-day`,

    destinationId: destination.id,

    destinationName: destination.name,

    title: `${destination.name} ${days}-Day Plan`,

    destination: destination.name,

    days,

    nights,

    category: destination.category,

    price: days * pricePerDay,

    image: destination.image,

    highlights: destination.places.slice(
      0,
      Math.min(3, destination.places.length)
    ),

    places: destination.places,

    itinerary: createItinerary(
      destination.places,
      days
    ),
  };
};

export const destinationPlans =
  destinations.flatMap((destination) =>
    getAvailableDurations(
      destination.name
    ).map((days) =>
      createPlan(
        destination,
        days
      )
    )
  );