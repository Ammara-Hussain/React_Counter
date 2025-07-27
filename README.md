# React Counter App with Background Video

This is a simple React counter application built using [Vite](https://vitejs.dev/) and styled with CSS. The app features a background video and two buttons to increment or decrement a number.

## Features

- Increment and decrement counter functionality
- Full-screen background video
- Responsive layout using Flexbox
- Clean and minimal UI

## Demo

https://github.com/user-attachments/assets/b5a99884-0ebb-4d0d-af3b-722cc1a6704a


## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/react-counter-app.git
cd react-counter-app
Install dependencies:

bash
Copy
Edit
npm install
Run the app:

bash
Copy
Edit
npm run dev
The app will run at http://localhost:5173/ by default.

Project Structure
pgsql
Copy
Edit
react-counter-app/
│
├── public/
├── src/
│   ├── assets/
│   │   └── 3163534-uhd_3840_2160_30fps.mp4
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
Notes
Make sure the video file is located inside the src/assets/ directory.

Use relative imports properly in JSX:

jsx
Copy
Edit
<source src="/src/assets/3163534-uhd_3840_2160_30fps.mp4" type="video/mp4" />
