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
