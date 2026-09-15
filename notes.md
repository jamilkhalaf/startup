# CS 260 Notes

This file represents what I have learned about web programming.

- [My startup](https://startup.byusync.click)
- [My simon](https://simon.byusync.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

Interesting things I have learned about AWS

### Deploying with `deployFiles.sh`

Simon HTML (the instructor's example repo) comes with a `deployFiles.sh` script:

```sh
./deployFiles.sh -k ~/keys/production.pem -h mydomain.click -s simon
```

`-k` is the PEM key, `-h` is my domain, `-s` is the service name (`simon` or `startup`), which is also the subdomain.

The script does three things: checks that all flags were given, `ssh`es into the server to delete and recreate `services/<service>/public`, then `scp`s all the project files into that folder. Caddy already serves that folder for the subdomain.

Run it from the project directory in a POSIX shell. If it says permission denied, `chmod +x deployFiles.sh`.

## HTML

Interesting things I have learned about HTML

### Simon HTML

Simon HTML has four pages (home/login, play, scores, about) with no CSS or JS — just structure and content for now.

- Each page uses `<header>`, `<main>`, and `<footer>`; the header has a `<nav>` with a `<menu>` of links and the footer links to GitHub.
- Header/footer are copied into every page. In React this becomes one component.
- Login is a `<form>` with inputs, scores are a `<table>`, the game board is an inline `<svg>`, and `<hr>` gives separation since there is no CSS.
- Simon leaves a placeholder for every technology in the class (auth, database, WebSocket, 3rd-party API). My startup HTML needs to do the same with mock data.

## React

Interesting things I have learned about React
