# Deployment Link

If content is not loading or the app seems unresponsive, please try accessing it via a VPN.
https://cinefydev.netlify.app/      

# Cinefy

A modern movie discovery web application built with React and powered by the [TMDB API](https://www.themoviedb.org/documentation/api). Browse now playing, popular, top rated, and upcoming movies — or search for any title — with a clean, responsive UI and dark mode support.

---

## Features

- **Now Playing** — Home page shows currently playing movies
- **Browse by Category** — Popular, Top Rated, and Upcoming sections
- **Movie Detail Page** — Poster, overview, genres, rating, runtime, budget, revenue, release date, and IMDB link
- **Search** — Find any movie by title using live TMDB search
- **Dark Mode** — Toggle between light and dark themes, persisted via `localStorage`
- **Responsive Design** — Mobile-friendly layout with a collapsible nav and search bar

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 19 |
| Routing | React Router DOM v6 |
| Styling | Tailwind CSS v3 |
| Data Source | TMDB REST API |

---

## Project Structure

```
src/
├── components/
│   ├── Card.js          # Movie card with poster, title, and overview
│   ├── Header.js        # Navbar with nav links, search, and dark mode toggle
│   ├── Footer.js        # Site footer
│   └── ScrollToTop.js   # Scroll-to-top on route change
├── pages/
│   ├── MovieList.js     # Grid of movie cards for a given category
│   ├── MovieDetail.js   # Full detail view for a single movie
│   ├── Search.js        # Search results page
│   └── PageNotFound.js  # 404 fallback page
├── hooks/
│   ├── useFetch.js      # Generic data-fetching hook for TMDB endpoints
│   └── useTitle.js      # Sets the document title dynamically
├── routes/
│   └── AllRoutes.js     # Centralized route definitions
└── App.js               # Root layout: Header + Routes + Footer
```

---

## Getting Started

### Prerequisites

- Node.js v16+
- A free [TMDB API key](https://www.themoviedb.org/settings/api)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/cinefy.git
cd cinefy/frontend

# 2. Install dependencies
npm install

# 3. Create the environment file
echo "REACT_APP_API_KEY=your_tmdb_api_key_here" > .env

# 4. Start the development server
npm start
```

The app will be available at `http://localhost:3000`.

---

## Environment Variables

| Variable | Description |
|---|---|
| `REACT_APP_API_KEY` | Your TMDB v3 API key |

> Never commit your `.env` file. Add it to `.gitignore`.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm start` | Runs the app in development mode at `localhost:3000` |
| `npm run build` | Builds the app for production into the `build/` folder |
| `npm test` | Launches the test runner in interactive watch mode |

---

## Routes

| Path | Page | Description |
|---|---|---|
| `/` | Home | Now Playing movies |
| `/movies/popular` | Popular | Most popular movies |
| `/movies/top` | Top Rated | Highest rated movies |
| `/movies/upcoming` | Upcoming | Soon-to-release movies |
| `/movie/:id` | Movie Detail | Full details for a specific movie |
| `/search?q=` | Search | Search results for a query |
| `*` | 404 | Page not found |

---

## API

All data is fetched from the [TMDB API v3](https://developers.themoviedb.org/3). The `useFetch` hook handles requests:

```js
const { data } = useFetch("movie/popular");
const { data } = useFetch("search/movie", queryTerm);
```

Movie posters are served from: `https://image.tmdb.org/t/p/w500/{poster_path}`

---

## License

This project is for educational and personal use. Movie data is provided by [TMDB](https://www.themoviedb.org/).
