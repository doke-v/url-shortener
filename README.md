## Temporary URL shortener service

Uses non-persistent database in backend (aka an `array`), so lifetime of any shortened URL is unpredictable and untrackable. Usable as express.js route (as in `server.js` file).

Install:

```sh
npm install
```

Run locally (port `3000`):

```sh
npm run server
```

![URL Shortener Microservice](screenshots/screenshot.PNG?raw=true)
