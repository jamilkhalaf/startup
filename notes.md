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

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
