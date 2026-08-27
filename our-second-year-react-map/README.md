# Our Second Year — Interactive Memory Map

A complete React memory-map website for celebrating the second year of a relationship. It includes a real OpenStreetMap, clickable heart markers, a chronological timeline, a guided replay, photo cards, and a responsive mobile layout.

## 1. Install and run

```bash
npm install
npm run dev
```

Open the local address shown in the terminal.

## 2. Personalize the relationship details

Open `data/memories.ts` and change the `relationship` object:

```ts
export const relationship = {
  names: "Your Name & Her Name",
  initials: "S + F",
  eyebrow: "August 2025 — August 2026",
  title: "A year of us, mapped.",
  introduction: "Your opening message...",
  closing: "Your final message...",
};
```

## 3. Add your memories

Every map marker comes from the `memories` array in `data/memories.ts`. Replace the sample content with your real memory:

```ts
{
  id: 1,
  month: "SEP",
  date: "September 14, 2025",
  title: "Our weekend at the coast",
  location: "Cannon Beach, Oregon",
  coordinates: [45.8918, -123.9615],
  story: "The story you want her to read...",
  loveNote: "What you loved about this day...",
  image: "/photos/cannon-beach.jpg",
}
```

To find latitude and longitude, right-click the location in Google Maps and click the coordinates that appear.

## 4. Add photos

Create this folder if it does not exist:

```text
public/photos/
```

Copy your photos into it and use paths such as:

```ts
image: "/photos/anniversary.jpg"
```

If `image` is blank, the site displays a polished “Add your photo” placeholder.

## 5. Production build

```bash
npm run build
```

## Main files

- `data/memories.ts` — all text, coordinates, dates, and photo paths
- `components/memory-experience.tsx` — map and interactions
- `app/globals.css` — all visual styling and mobile layout
- `app/page.tsx` — page entry point

The map uses Leaflet with free OpenStreetMap tiles, so no API key is required.
