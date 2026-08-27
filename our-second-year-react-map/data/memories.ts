export type Memory = {
  id: number;
  month: string;
  date: string;
  title: string;
  location: string;
  coordinates: [number, number];
  story: string;
  loveNote: string;
  image?: string;
};

// ---------------------------------------------------------------------------
// PERSONALIZE THIS FILE
// 1. Change the names, dates, and introduction below.
// 2. Replace each sample memory with one of your real memories.
// 3. Find coordinates by right-clicking a location in Google Maps.
// 4. Put photos in /public/photos and set image to "/photos/your-photo.jpg".
//    Leave image blank to keep the built-in photo placeholder.
// ---------------------------------------------------------------------------

export const relationship = {
  names: "You & Her",
  initials: "Y + H",
  eyebrow: "August 2025 — August 2026",
  title: "A year of us, mapped.",
  introduction:
    "One more trip around the sun, told through the places where our favorite moments happened.",
  closing: "Here’s to everything waiting for us in year three.",
};

export const memories: Memory[] = [
  {
    id: 1,
    month: "AUG",
    date: "August 16, 2025",
    title: "The beginning of year two",
    location: "Replace with your location",
    coordinates: [32.7767, -96.797],
    story:
      "Replace this with the story of the first special memory after your first anniversary.",
    loveNote: "What I loved most about this day was…",
    image: "",
  },
  {
    id: 2,
    month: "OCT",
    date: "October 11, 2025",
    title: "Our fall adventure",
    location: "Replace with your location",
    coordinates: [32.8127, -96.8335],
    story:
      "Add a favorite fall date, weekend trip, concert, restaurant, or unexpectedly perfect day.",
    loveNote: "You somehow make even ordinary plans feel memorable.",
    image: "",
  },
  {
    id: 3,
    month: "DEC",
    date: "December 20, 2025",
    title: "A little holiday magic",
    location: "Replace with your location",
    coordinates: [32.7489, -96.8046],
    story:
      "Tell the story behind a holiday tradition, family visit, cozy night, or favorite December photo.",
    loveNote: "The best part of the holidays is getting to share them with you.",
    image: "",
  },
  {
    id: 4,
    month: "FEB",
    date: "February 14, 2026",
    title: "A date worth remembering",
    location: "Replace with your location",
    coordinates: [32.7842, -96.7841],
    story:
      "Use this for Valentine’s Day, a birthday, or any date that became one of your favorites.",
    loveNote: "I would choose this day—and you—all over again.",
    image: "",
  },
  {
    id: 5,
    month: "APR",
    date: "April 18, 2026",
    title: "The day we couldn’t stop laughing",
    location: "Replace with your location",
    coordinates: [32.8016, -96.7694],
    story:
      "Not every memory needs to be a major milestone. Add the funny, strange, completely-us moment here.",
    loveNote: "Life is lighter and a lot more fun with you in it.",
    image: "",
  },
  {
    id: 6,
    month: "JUN",
    date: "June 13, 2026",
    title: "Our favorite summer memory",
    location: "Replace with your location",
    coordinates: [32.7576, -96.7628],
    story:
      "Add a summer trip, lake day, hike, road trip, or one of those long evenings you wished would last.",
    loveNote: "I never get tired of discovering new places beside you.",
    image: "",
  },
  {
    id: 7,
    month: "AUG",
    date: "August 13, 2026",
    title: "Two years together",
    location: "Replace with your celebration location",
    coordinates: [32.7937, -96.8218],
    story:
      "Write about your two-year celebration and the moment from that day you most want her to remember.",
    loveNote: "Two years down. My favorite chapter is still the one we’re writing now.",
    image: "",
  },
];
