# Real Estate Agent

An intelligent real estate assistant that helps users find their dream home based on location, price range, bedroom/bathroom count — integrated with GPT for smart conversations and Google Maps for live visuals.

## 🚀 Features
- Dynamic conversation with GPT
- Map visualizations based on user queries
- Backend orchestration of listings, chat, and maps
- Clean frontend with responsive UI

## ⚙️ Tech Stack
- React, Node.js, Express, @vis.gl/react-google-maps, OpenAI API

## 🛠️ Setup
1. `git clone <repo>`
2. `npm install`
3. Add `.env` with `OPENAI_API_KEY` and `GOOGLEMAPS_API_KEY`
4. Run frontend and backend separately

## 🤖 AI Logic
GPT handles incoming user messages and returns context-aware listing requests.

## 🗺️ Map Logic
Google Maps dynamatically renders to location based on user messages parsed from GPT and matched listings.
