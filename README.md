You Watch 🎥

You Watch is a responsive video streaming frontend application built using React. It mimics the core functionality of YouTube by fetching videos, channels, and playlists using the YouTube v3 API via RapidAPI.

---

 🌟 Features

- 🔍 Search for videos and channels
- 📺 Watch embedded videos via `react-player`
- 📁 Browse categories and related videos
- 🎨 Responsive design with Material UI & TailwindCSS
- 🌐 Dynamic routing with React Router

---

 🔧 Tech Stack

- Frontend: React 18, Vite, React Router
- Styling: TailwindCSS, Material UI
- Video Embed: `react-player`
- Icons: React Icons, MUI Icons
- API: [YouTube v3 API (via RapidAPI)](https://rapidapi.com/hub)

---

 🔑 API Usage

The app uses the following endpoint:

```js
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
````

To make it work:

1. Create an account on [RapidAPI](https://rapidapi.com).
2. Subscribe to the YouTube v3 API.
3. Add your API key in a `.env` file:

```env
VITE_RAPIDAPI_KEY=your_api_key_here
```

---

 📦 Getting Started

Prerequisites

* Node.js
* RapidAPI key for YouTube v3 API

Installation

```bash
git clone https://github.com/ajaysurya07/you_watch.git
cd you_watch
npm install
npm run dev
```

> App will run on `http://localhost:5173`

---

 📸 Screenshots

> Add some UI screenshots or GIFs of video search and playback here

---

 📁 Folder Structure

```
you_watch/
├── src/
│   ├── components/       Reusable UI components
│   ├── pages/            Page views (Home, Video, Channel)
│   ├── utils/            API config and constants
│   └── App.jsx, main.jsx App entry
└── README.md
```

---

 🎯 Project Purpose

Built as a practice project for mastering:

* REST API integration
* State management with React
* TailwindCSS styling
* Modular component architecture
* Environment-based API keys

---

 👨‍💻 Author
Ajay Surya
