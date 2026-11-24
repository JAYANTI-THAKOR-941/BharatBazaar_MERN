# BharatBazaar MERN

Full-stack storefront with React customer pages, authentication and product/category management on a Node backend.

## Project structure

`frontend/` — React pages and API services; `server/` — controllers, models, routes and EJS administration views.

## Getting started

```bash
git clone https://github.com/JAYANTI-THAKOR-941/BharatBazaar_MERN.git
cd BharatBazaar_MERN
```

Install dependencies with `npm ci` in both directories. Configure MongoDB, authentication and mail settings locally. Inspect the backend package scripts, start the API, then run `npm run dev` from `frontend/`.

## Security configuration

An environment file is currently tracked. Treat any real credentials in it as potentially exposed, rotate them, and migrate secrets to ignored local environment files. Do not publish secret values.
