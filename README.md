# Sevy - A Location-Based Handyman Service Finder

Sevy is a location-based service marketplace app that connects users with various service providers, making it easy to find and book services in multiple categories. The app is built using a microservices architecture, with separate services for authentication and booking.

## Getting Started

These instructions will help you set up and run the Sevy app and its microservices on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v16.x or higher)
- npm (v8.x or higher)
- MySQL (v5.7 or higher)
- Git

### Clone the Repository

First, clone all the separate repository to a folder on your local machine using the following commands:

```
git clone https://github.com/thesevyteam/sevy.git
git clone https://github.com/thesevyteam/auth.sevy.git
git clone https://github.com/thesevyteam/booking.sevy.git
```

### Install Dependencies

Navigate to the project directory and run the following command to install the required dependencies:

```
cd sevy
npm install
```

### Setting Up auth.sevy

1. Navigate to the project directory and run the following command to install the required dependencies:

```
cd auth.sevy
npm install
```

2. Create a `.env` file in the `auth.sevy` directory and add the necessary environment variables. You can use the one provided with the report submission.

3. Start the `auth.sevy` service by running the following command:

```
npm start
```

### Setting Up booking.sevy

1. Navigate to the project directory and run the following command to install the required dependencies:

```
cd booking.sevy
npm install
```

2. Create a `.env` file in the `booking.sevy` directory and add the necessary environment variables. You can use the one provided with the report submission.

3. Start the `booking.sevy` service by running the following command:

```
npm start
```

### Start the Development Server

With both `auth.sevy` and `booking.sevy` services running, navigate to the main project directory and start the development server using the following command:

```
cd ..
npm run dev
```

The app should now be running on `http://localhost:3000`. Open your browser and navigate to the URL to access the Sevy app.

## Testing

To run the test suite for the Sevy app, execute the following command:

```
npm run test
```
