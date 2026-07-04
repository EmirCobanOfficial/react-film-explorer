<div align="center">

# 🎬 React Film Explorer

**A modern movie discovery app built with React + Vite, powered by the TMDB API.**
Search thousands of movies, dive into rich details, build your personal watchlist, and switch themes — all in a fast, responsive single-page app.

<!-- Badges -->
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)
![TMDB](https://img.shields.io/badge/TMDB-API-01B4E4?logo=themoviedatabase&logoColor=white)
![License: MIT](https://img.shields.io/github/license/EmirCobanOfficial/API-Film-Website?color=green)
![GitHub stars](https://img.shields.io/github/stars/EmirCobanOfficial/API-Film-Website?style=social)

</div>

---

## 📸 Screenshots

> Replace these placeholders with real screenshots (drop them in a `docs/` folder and update the links below).

| Home / Discover | Movie Details | Watchlist |
| :---: | :---: | :---: |
| ![Home](https://placehold.co/600x360/1a1a2e/eeeeee?text=Home+%2F+Discover) | ![Details](https://placehold.co/600x360/16213e/eeeeee?text=Movie+Details) | ![Watchlist](https://placehold.co/600x360/0f3460/eeeeee?text=Watchlist) |

---

## ✨ Features

- 🔥 **Popular Movies** — browse trending and popular titles fetched live from TMDB.
- 🔎 **Instant Search** — find any movie by title with a responsive search page.
- 🎞️ **Detailed Movie Pages** — rating, overview, release date, cast/credits, and similar movies.
- ⭐ **Personal Watchlist** — save movies you want to watch and manage them anytime.
- 🌗 **Theme Switcher** — toggle between light and dark themes (React Context).
- 🔐 **Auth UI** — login & register screens scaffolded for future user accounts.
- 📄 **Pagination** — smooth navigation across large result sets.
- ⚡ **Loading & Error States** — graceful spinners and user-friendly error handling.
- 📱 **Fully Responsive** — looks great on mobile, tablet, and desktop.

---

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| **Framework** | [React 19](https://react.dev/) |
| **Build Tool** | [Vite 6](https://vitejs.dev/) |
| **Routing** | [React Router 7](https://reactrouter.com/) |
| **State** | React Hooks + Context API (`useState`, `useEffect`, `useContext`) |
| **Styling** | [Bootstrap 5](https://getbootstrap.com/) + Bootstrap Icons + custom CSS |
| **Data** | [The Movie Database (TMDB) API](https://developer.themoviedb.org/) |
| **Linting** | ESLint |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **v18+**
- npm (bundled with Node.js)
- A free **TMDB API key** — [get one here](https://www.themoviedb.org/settings/api)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/EmirCobanOfficial/API-Film-Website.git
cd API-Film-Website

# 2. Install dependencies
npm install

# 3. Configure your API key
cp .env.example .env
# then open .env and set VITE_TMDB_API_KEY=your_key

# 4. Start the dev server
npm run dev
```

The app will be available at **http://localhost:5173**.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint over the project |

---

## 📁 Project Structure

```
API-Film-Website/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI (Navbar, Movie, WatchList, Pagination, …)
│   ├── contexts/        # ThemeContext & UserContext providers
│   ├── Layouts/         # Shared layout wrappers
│   ├── pages/           # Route pages (Home, Movies, SearchResults, MovieDetails, …)
│   ├── App.jsx          # Router configuration
│   ├── main.jsx         # App entry point
│   └── index.css        # Global styles
├── .env.example         # Environment variable template
├── vite.config.js
└── package.json
```

---

## 🗺️ Roadmap

- [ ] Persist watchlist to `localStorage` (survive refreshes)
- [ ] Wire up real authentication (Firebase / Supabase)
- [ ] Add genre & year filters
- [ ] Infinite scroll as an alternative to pagination
- [ ] Trailer playback via TMDB video endpoints
- [ ] Deploy live demo (Vercel / Netlify) and link it here
- [ ] Add unit tests (Vitest + React Testing Library)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

If you find this project useful, please consider giving it a ⭐ — it really helps!

---

## 📝 License

Distributed under the **MIT License**. See [`LICENSE`](./LICENSE) for details.

---

## 👤 Author

**Emir Çoban** — Junior Web Developer

[![GitHub](https://img.shields.io/badge/GitHub-EmirCobanOfficial-181717?logo=github)](https://github.com/EmirCobanOfficial)

<div align="center">

_Built with ❤️ using React & the TMDB API._
_This product uses the TMDB API but is not endorsed or certified by TMDB._

</div>
