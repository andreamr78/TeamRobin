**TeamRobin** is an interactive travel planning application built with the MERN stack. This project serves as a showcase of collaborative development skills, demonstrating how developers work together to build a scalable, user-focused MERN application. 

This full-stack project highlights key aspects that employers look for, including:
- **Interactive User Experience:** A seamless and responsive single-page application (SPA).
- **Authentication & Security:** Secure user authentication with JWT.
- **Data Management:** Utilization of MongoDB and GraphQL for efficient data retrieval.
- **Real-World Problem Solving:** Helping users organize their travel plans efficiently.

Through this project, developers gain experience in agile development methodologies, Git workflow collaboration, and deployment strategies. 

## Features
- **User Authentication:** Secure login and registration for a personalized experience.
- **Destination Selection:** Browse and choose travel destinations.
- **Saved Search History:** Keep track of previously searched destinations.
- **Weather Forecast:** Check real-time weather updates for different cities.
- **Interactive Experience:** User-friendly interface for a seamless trip planning process.
- **Currency Exchange Rates:** View real-time exchange rates for selected destinations.
- **User Reviews and Ratings:** Leave and read reviews on different destinations.

## Application Pages
1. **Login Page:** Users can securely log in to their accounts.
2. **Sign-Up Page:** New users can register for an account.
3. **Home Page:** Displays featured destinations and travel options.
4. **User Dashboard:** Personalized section where users can save and organize their favorite trips.
5. **Destination Details Page:** Displays specific information about a selected location, including weather, reviews, and exchange rates.
6. **Comment Section:** Users can interact by leaving comments on destinations.

## Technologies Used
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ORM
- **Authentication:** JWT (JSON Web Token)
- **API Integration:** Weather API for real-time weather updates
- **Hosting & Deployment:** Render

## Installation
### Prerequisites
- Node.js installed on your system
- MongoDB instance running (local or cloud-based, e.g., MongoDB Atlas)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/andreamr78/TeamRobin.git
   ```
2. Navigate to the project directory:
   ```sh
   cd TeamRobin
   ```
3. Install dependencies:
   ```sh
   npm run install
   ```
4. Start the development server with both frontend and backend running concurrently:
   ```sh
   npm run start:dev
   ```
5. To build the project for deployment:
   ```sh
   npm run build
   ```
6. To start the production server:
   ```sh
   npm start
   ```

## Usage
- Sign up or log in to access personalized features.
- Search for a destination to explore information about attractions.
- View the weather forecast for your chosen locations.
- Save your favorite destinations for quick access later.
- Check currency exchange rates for international travel.
- Read and write reviews about travel destinations.

## Team Members
- María Azucena
- Merari
- Oscar
- Gustavo
- Rodrigo
- Jorge
- Josias
- Andrea

## Contribution
Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
### Prerequisites
- Node.js installed on your system
- MongoDB instance running (local or cloud-based, e.g., MongoDB Atlas)

### Steps
To run both frontend and backend servers concurrently, you can use **concurrently**. Install it globally or add it to your project dependencies:
```sh
npm install -g concurrently
```
Or install it as a dev dependency:
```sh
npm install concurrently --save-dev
```
Then, modify the scripts section in your `package.json` to include:
```json
"scripts": {
  "start": "concurrently \"cd backend && npm start\" \"cd frontend && npm start\""
}
```
You can then start both servers with:
```sh
npm start
```
1. Clone the repository:
   ```sh
   git clone https://github.com/andreamr78/TeamRobin.git
   ```
2. Navigate to the project directory:
   ```sh
   cd TeamRobin
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the backend server:
   ```sh
   cd backend
   npm start
   ```
5. Start the frontend:
   ```sh
   cd frontend
   npm start
   ```

## Usage
- Sign up or log in to access personalized features.
- Search for a destination to explore information about attractions.
- View the weather forecast for your chosen locations.
- Save your favorite destinations for quick access later.
- Check currency exchange rates for international travel.
- Read and write reviews about travel destinations.

## Contribution
Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

