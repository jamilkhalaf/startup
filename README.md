# Jamil Khalaf

[My Notes](notes.md)

This application is a modern web-based platform designed to combine nostalgia with technology. It features a user-friendly login system, an engaging Pacman game, and a competitive leaderboard that updates in real time. The platform ensures a seamless experience for players while showcasing key web development concepts, including responsive design, authentication, database integration, and real-time communication. By blending classic gameplay with contemporary web technologies, the application aims to provide entertainment while demonstrating technical excellence in web development.


> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Bring the nostalgia of Pacman into the modern era with our real-time gaming platform! Users can log in, play a fast-paced Pacman game, and compete for top spots on a dynamic leaderboard. Our platform is lightweight, interactive, and perfect for casual gamers who love a challenge.

### Design

![Design image](placeholder.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```mermaid
flowchart TD
    subgraph Login Page
        A1[Username Field] --> A2[Password Field]
        A2 --> A3[Login Button]
        A3 --> A4[Sign Up Option - Optional]
    end

    subgraph Game Page
        B1[Pacman Game Interface]
        B2[Start Game Button]
        B3[Player Stats: Score, Lives]
        B4[Quit Game Button]
        B1 --> B3
        B2 --> B1
    end

    subgraph Leaderboard Page
        C1[Leaderboard Table: User Scores]
        C2[Highlighted User Stats]
        C3[Play Again Button]
        C3 --> B1
        C4 --> C1
    end

    A3 --> B2
    B4 --> C1

```




### Key features

- Login/Logout System: Allow users to register, log in securely, and view their profile.
- Pacman Game: A fun and interactive browser-based game with animated gameplay.
- Leaderboard: A database-powered leaderboard that displays scores of all players and updates in real time.

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - I will use HTML to structure the website, including creating a login page for user authentication, a game page to display the Pacman interface, and a leaderboard page to show user rankings.
- **CSS** - CSS will be used to style the website, ensuring a clean and responsive look. I will apply a retro Pacman aesthetic using themed colors and designs, make the layout responsive for both desktop and mobile users, and incorporate animations for transitions, button interactions, and gameplay elements.
- **React** - React will serve as the framework for building a single-page application. I will use a component-based architecture to divide the application into reusable parts, such as the Login, Game, and Leaderboard components. React will also handle routing between pages and provide reactive updates to the leaderboard and game state.
- **Service** - The backend services will handle essential functions, including user authentication (login and logout), saving and retrieving scores for the leaderboard, and interacting with an external API, such as the Dog API, to fetch random images for fun after a game ends.
- **DB/Login** - A database will store user information and scores. I will securely store hashed passwords in the database, display the logged-in user’s name on the game and leaderboard pages, and organize the data into tables for users (e.g., username and password hash) and scores (e.g., user ID, score, and timestamp).
- **WebSocket** - I will use WebSockets to enable real-time communication. This will include broadcasting leaderboard updates whenever a new score is submitted. Optionally, I will also broadcast live player activity, such as notifying others when a user starts playing Pacman.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **HTML pages** - I did not complete this part of the deliverable.
- [ ] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [ ] **Links** - I did not complete this part of the deliverable.
- [ ] **Text** - I did not complete this part of the deliverable.
- [ ] **3rd party API placeholder** - I did not complete this part of the deliverable.
- [ ] **Images** - I did not complete this part of the deliverable.
- [ ] **Login placeholder** - I did not complete this part of the deliverable.
- [ ] **DB data placeholder** - I did not complete this part of the deliverable.
- [ ] **WebSocket placeholder** - I did not complete this part of the deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Header, footer, and main content body** - I did not complete this part of the deliverable.
- [ ] **Navigation elements** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing** - I did not complete this part of the deliverable.
- [ ] **Application elements** - I did not complete this part of the deliverable.
- [ ] **Application text content** - I did not complete this part of the deliverable.
- [ ] **Application images** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - Routing between login and voting components.

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **User registration** - I did not complete this part of the deliverable.
- [ ] **User login and logout** - I did not complete this part of the deliverable.
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Restricts functionality based on authentication** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
