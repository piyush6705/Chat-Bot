# Chat Bot Project

A modern, interactive chatbot application built with React and Vite. This project provides a clean and user-friendly interface for real-time conversations with an AI-powered chatbot.

## Features

- **Real-time Chat Interface**: Send and receive messages in a conversational format
- **User-Friendly UI**: Clean, intuitive design with user and bot profile images
- **Loading Indicator**: Visual feedback while waiting for bot responses
- **Responsive Design**: Works seamlessly on different screen sizes
- **Fast Performance**: Built with Vite for rapid development and optimized production builds

## Technologies

- **React** 19.1.0 - UI library
- **Vite** 6.4.3 - Build tool and dev server
- **supersimpledev** 8.6.4 - Chatbot API integration
- **ESLint** - Code quality and linting
- **CSS3** - Styling

## Project Structure

```
Chat-Bot/
├── src/
│   ├── components/
│   │   ├── ChatInput.jsx       # Message input component
│   │   ├── ChatMessage.jsx     # Individual message display
│   │   └── ChatMessages.jsx    # Messages container
│   ├── assets/                 # Images and static files
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # React entry point
│   ├── App.css                 # Main app styles
│   └── index.css               # Global styles
├── public/                     # Static assets
├── package.json               # Project dependencies
├── vite.config.js             # Vite configuration
└── eslint.config.js           # ESLint configuration
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Chat-Bot
```

2. Install dependencies:
```bash
npm install
```

## Available Scripts

### Development
Run the development server with hot module reloading:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build
Create an optimized production build:
```bash
npm run build
```

### Preview
Preview the production build locally:
```bash
npm run preview
```

### Lint
Check code quality with ESLint:
```bash
npm run lint
```

## How It Works

1. **User Input**: Users type messages in the chat input field at the bottom
2. **Message Display**: Messages are displayed in a conversation thread with user and bot profile images
3. **Bot Response**: The chatbot generates responses using the supersimpledev API
4. **Loading State**: A loading spinner appears while waiting for the bot's response

## Component Overview

- **App.jsx**: Main component that manages chat state and layout
- **ChatInput.jsx**: Handles user input and message sending logic
- **ChatMessage.jsx**: Renders individual chat messages with appropriate styling based on sender (user or bot)
- **ChatMessages.jsx**: Container component that displays all messages in the conversation

## Getting Started

1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`
3. Open your browser and navigate to the provided URL
4. Start chatting with the bot!

## License

This project is open source and available under the MIT License.
