# CS 260 Notes

[My startup](https://jamil260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS Notes

*ec2 instances
1) configure the region on which your server is operating in.
2) allow traffic from ssh and all ports.
3) create a key pair and save the .pem file which you are going to use to ssh into the ubunbtu server.
4) create an elastip ip address and associate it with the instance, this way the instance will have the same ip if it was stopped.

*route 53
1) register a new domain from this link https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-register.html, use .click for cheapest option.
2) navigate to route53 hosted zones, add two record with the ip address of your instance.
3) the first added record you leave the record name empty, for the second use * for the record name. They must appear as two new records of type A.

*Caddy
1) installing caddy:
  sudo apt update -y && apt upgrade -y
  
  sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
  
  sudo curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
  
  sudo curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
  
  sudo apt update
  
  sudo apt install caddy

2) create a link to caddy file: ln -s /etc/caddy/Caddyfile Caddyfile
3) use nano or vi to access the caddyfile and replace everything with your domain name, this way the web is now secured inbto https.
4) restart caddy after saving so changes are saved: sudo service caddy restart

*ssh
use this command: ssh -i [key pair file] ubuntu@[ip address]



## HTML Notes

I started doing the assignments on the github repo. The first assignment was doing a ford of the codepen and trying out the different html tags.

Purpose of HTML:

Provides structure and content for web applications.

HTML Structure Overview:

Body contains three children.
Header,
Main,
Footer,

Block vs Inline Elements:

Block elements: Create distinct content blocks.
Inline elements: Flow within block elements.

HTML Form Elements:

form: Submits input data to a web server.
fieldset: Groups related inputs together.
input: Accepts various types of user input.
select: Dropdown selection.
textarea: Multiline text input.
label: Label for an input.
output: Displays the result of input.
meter: Displays a value within a known range.

Form Element:

Forms are used to submit input data, especially before JavaScript. In modern web apps, JavaScript often handles data dynamically without sending it to a server.

Input Element Types:

Textual: text, password, email, tel, url
Numeric: number, range
Date and Time: date, datetime-local, month, week
Selection: checkbox, radio, select
Color: color, file
Submit: submit button for form submission
Common Input Attributes:

name: Identifies the input for form submission.
disabled: Disables the input.
value: Sets the initial value.
required: Marks the input as mandatory.
Validation:

HTML5 inputs have built-in validation (e.g., numbers, URLs, email).
The required attribute ensures inputs are filled before submission.
pattern allows regex validation for certain input types (text, email, etc.).
JavaScript should also validate input before submission for better user experience, with visual feedback for validity.

doing the media assignment I knew how to implement images, audios, and videos by using the mp3 and mp4 links for each.

to deploy the html files, I used this coomand: ./deployFiles.sh -k ~/Desktop/jamilk.pem -h jamil260.click -s startup


## CSS Notes

From the CSS Selectors section, I learned that selecting elements is fundamental to styling in CSS. By using different types of selectors like element type, class, ID, and attribute selectors, I can apply styles to specific HTML elements. The concept of combinators, like descendant and child combinators, helps target elements based on their relationships in the DOM. Additionally, pseudo-selectors enable dynamic styling based on interactions, such as hover states. The use of CSS selectors is powerful in achieving efficient and specific styling for a web page, and combining different selectors allows for flexible designs.

In the CSS Declarations section, I discovered the wide array of properties and values available in CSS to modify the appearance of elements. For example, background-color, border, and text-related properties help change the visual presentation, while layout properties like display, float, and position control how elements are arranged on the page. Understanding units like pixels, percentages, and viewport-based units is crucial for creating responsive and well-structured layouts. The section helped me appreciate the depth of CSS in styling elements across different contexts and screen sizes.

CSS Animation was another interesting area where I learned how to add interactivity and motion to elements on a webpage. By using the animation property along with keyframes, I can create smooth transitions between different styles over time. The example with the zooming text demonstrated how to animate properties like font size, while more advanced animations can include timing, bouncing effects, and more. CSS animations add a dynamic feel to web applications, improving user experience.

Finally, in the CSS Flexbox section, I learned how to create responsive layouts with the flexbox model. Flexbox allows me to control the alignment and distribution of elements within a container, ensuring they adjust correctly to different screen sizes. By using properties like flex-direction, flex, and align-items, I can create both simple and complex layouts that respond to changes in viewport size. Flexbox is particularly useful for building modern web designs with fluid and adaptable structures, as shown in the example of creating a responsive app layout with a header, footer, and main content area.

## React part 1 notes

React components are the building blocks of a React application, responsible for generating and managing the user interface. They use JSX to define structure and can be styled using CSS. Components can be either functional or class-based, with functional components being the more modern approach.

Components can be styled using external CSS files, inline styles, or styled-components. Instead of the standard class attribute in HTML, React uses className to apply CSS classes. Components can be combined and nested to create a structured UI.

Props allow data to be passed between components, making them reusable and dynamic. They are immutable within the component receiving them, meaning their values cannot be changed inside that component. Props help in creating flexible and modular applications.

State enables components to store and manage data that changes over time. React updates the component automatically when the state changes. The useState hook is commonly used in functional components to manage state.

React updates the UI whenever the state or props change. This reactivity ensures that the application stays in sync with data changes, reducing the need for manual DOM manipulation. React's virtual DOM improves performance by only updating parts of the UI that actually change.

React Router enables navigation between different views in a single-page application without requiring a full page reload. It uses routes to define different pages and components, making navigation smooth and efficient.

Routing allows users to navigate an application efficiently. Instead of loading an entirely new page, React dynamically updates content, improving performance and user experience. The router helps manage dynamic URLs, including passing parameters to components based on the route.

## React part 2 notes

For React Part 2, I focused on making my startup project fully interactive and reactive. This required implementing user interactivity and ensuring the interface updates dynamically based on user actions and data changes. A big part of this process involved managing state and props in React to reflect real-time updates in the UI.

To simulate parts of the application that would eventually rely on backend services or third-party APIs, I used techniques like localStorage to temporarily store user data and settings. I also created hardcoded responses to mimic API behavior and used time-based functions like setInterval to simulate real-time data updates, like live messages or changing data.

Ensuring reactivity was crucial, so I spent time managing component state and setting up event handling. I made sure that any changes in state were immediately reflected in the UI and that the application responded smoothly to user interactions.

As I worked through these features, I committed my changes frequently and pushed updates to my GitHub repository. I also documented my progress and learnings in my notes to keep track of the new concepts and techniques I implemented. This helped me build a strong foundation for future improvements and collaborations on the project.

## Service 


For my website, I used Express.js as the core framework to handle the back-end functionality. Express provided a simple and efficient way to set up the server and manage different routes. I initialized the app with the necessary middleware, including the built-in JSON body parser, which allowed my application to parse incoming JSON requests easily. I also used the 'cookie-parser' middleware to manage cookies, specifically for tracking authentication tokens.

Static content for the front-end was served from a 'public' directory using Express’s 'express.static' middleware. This made it easy to host and access HTML, CSS, and JavaScript files directly from the server. To manage my API endpoints, I created a separate router called 'apiRouter', which kept the route definitions organized and modular.

For user authentication, I implemented three main endpoints: POST, PUT, and DELETE under '/api/auth'. The POST endpoint handled new user registration by first checking if an existing user already had the same email and then creating a new user if they didn’t exist. Passwords were hashed using 'bcryptjs' to ensure security, and once a user was created, an authentication cookie was set using a unique token generated with the 'uuid' library.

The PUT endpoint managed user login by verifying the provided email and password against stored credentials. If the credentials matched, an authentication cookie was set; otherwise, appropriate error responses were sent. The DELETE endpoint cleared the authentication cookie when users logged out, removing their session information.

A '/user/me' endpoint provided a simple way to retrieve user information based on their authentication token. It checked the token stored in the user's cookies and returned the associated user’s email if they were authorized.

In addition to authentication, I implemented a leaderboard service to track the top 10 players with the fastest times. The POST endpoint for '/leaderboard' accepted player names and times, validating the input and adding the new score to an array. The array was sorted by time in ascending order, and only the top 10 scores were kept. A GET endpoint for '/leaderboard' allowed the front-end to retrieve and display the current leaderboard standings.

To manage authentication cookies, I used two utility functions: 'setAuthCookie' and 'clearAuthCookie'. 'setAuthCookie' assigned a unique token to the user and set it as a secure, HTTP-only cookie. 'clearAuthCookie' removed the token from the user object and cleared the cookie from the response.

Finally, I set the server to listen on a configurable port, defaulting to 4000 if no argument was provided. The Express server setup ensured efficient routing, secure authentication, and seamless front-end integration for my website.



