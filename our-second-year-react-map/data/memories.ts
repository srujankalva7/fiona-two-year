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
  names: "Bootu & Swoog",
  initials: "B + S",
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
    date: "August 23, 2025",
    title: "Moving Boot to the new crib",
    location: "Denver, CO",
    coordinates: [39.73150, -105.03760],
    story:
      "Can't believe right after our 1 year, I would be moving you into your new basement in Denver and fly back to Seattle. It was nice seeing you move in with Jia, I was sad that I was leaving, but I was happy to know you weren't going to be alone",
    loveNote: "Did not realize how much time we were going to spend with Jia's fam.",
    image: "/photos/moving-to-den.jpeg",
  },
  {
    id: 2,
    month: "SEPT",
    date: "September 10, 2025",
    title: "Meeting Mako",
    location: "Denver, CO",
    coordinates: [39.73150, -105.03760],
    story:
      "Can't believe there was a point where I hated cats. Seeing you with Mako might be one of the things that makes me most happy in life, and probably is subconciously the reason I like cats now. I just like seeing you smile.",
    loveNote: "Let's get a little guy.",
    image: "/photos/mako.jpeg",
  },
  {
    id: 3,
    month: "OCT",
    date: "October 10, 2025",
    title: "Uncle Danny's Wedding",
    location: "Dallas",
    coordinates: [32.884, -97.160],
    story:
      "Nothing better for an introvert than meeting 500 of your closest relatives at the same time. I'm joking, this weekend was a blast, and it was so great meeting everyone for the first time. Taking this picture infront of everyone was a little awkward.",
    loveNote: "Stll can't believe Uncle Josh was pulling those moves while being that sick.",
    image: "/photos/dallas-wedding.jpeg",
  },
  {
    id: 4,
    month: "OCT",
    date: "October 25, 2025",
    title: "Rainy Pike Place",
    location: "Seattle, WA",
    coordinates: [47.608987, -122.340682],
    story:
      "This was your first experience of the rainy Seattle everyone talks about. Felt like outsiders because the entire time it was gloomy, we both didn't care and just kept walking 20k steps. I miss our walks around the city so much, it honestly felt like I was exploring the city every time you were there.",
    loveNote: "You looked so cute in those little boots.",
    image: "/photos/rainy-seattle.jpeg",
  },
  {
    id: 5,
    month: "JAN",
    date: "Jan 1, 2026",
    title: "Pheonix Chinatown",
    location: "Chicago, IL",
    coordinates: [41.8536197, -87.6330],
    story:
      "This entire trip feels like a fever dream, probably more so for you. It was a mashup of Boot meeting the fam, some of the homies, and Emma and Jia were there??? It was so nice to be home and just hang out in my city with you, and I will never forget those Chinatown runs every day. Hopefully we run it back next year???",
    loveNote: "Hopefully next year you aren't wearing a mini skirt by Navy Pier.",
    image: "",
  },
  {
    id: 6,
    month: " MAR",
    date: "March 27, 2026",
    title: "First Day of our First Trip",
    location: "Fez, Morocco",
    coordinates: [34.06196, -4.98277],
    story:
      "I still remember the morning of our first day in the medina, the calm before the storm. The first occurence of our soon to be daily orange juice, mint tea, and bread from the weird dude at the Riad. After the feast we stepped out into the streets where we were greated by ceramics and kittens every 5 steps,swept by the hustle and bustle of the medina. Out of nowehere you happen to spot the most beautiful alley in the city and I couldn't help but capture the moment.",
    loveNote: "God you're beautiful.",
    image: "/photos/fez.jpeg",
  },
  {
    id: 7,
    month: "APR",
    date: "April 4, 2026",
    title: "Santa Semana",
    location: "Seville, Spain",
    coordinates: [37.3886, -5.9950],
    story:
      "One of the last few days of our trip. There's so many things to learn from this trip. The first being always make sure the bike is locked. The next being if the food seems fishy, it probably is fishy. The third is always check if there is a major religous holiday during your stay that may leave you trapped. But the most important lesson was to make sure that we are always there for each other. This trip took a toll on me and you both physically and mentally and we pushed each other to our limits, and to some it might have sounded like hell, but I am more than happy with what I got from it. It was nice to know that regardless of where we are, the language barriers, the transportation barriers, or any other barrier, there is nothing we can't figure out together. Can't wait for our next trip",
    loveNote: "So glad I didn't buy that return flight that day.",
    image: "/photos/seville.jpeg",
  },
  {
    id: 8,
    month: "JUL",
    date: "July 3, 2026",
    title: "Oregon Coast Trip",
    location: "Oswald, Oregon",
    coordinates: [45.7698, -123.9599],
    story:
      "After Morocoo and Spain, I think we needed this. This might be my favorite trip of all time. No expectations, just you, me, and Gloria driving down the coast of Washington and Oregon for 300 miles. I still remember what I was thinking about in that exact spot. How much we have been through together, all the good, the bad, and the ugly. I realized there are times in life where I take you for granted, and forget you are just as incredible as the person I met at American Bonded. You are obviousily attractive, but you are so mmuch more than that you are the most intelligent, driven, ambitious person I know while somehow remaining kind and humble. I know we’re celebrating two years together and looking forward to everything still ahead of us. But sometimes it’s important to reminisce about the past, because it gives more meaning to the future. That’s what this picture does for me, and what I hope this page does for you. Love you Boot.",
    loveNote: "I really thought that 1-person tent should be big enough for both of us.",
    image: "/photos/oregon.jpeg",
  },
];
