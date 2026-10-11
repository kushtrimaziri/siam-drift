# Siam Drift — Bangkok Canal Tour Website

Siam Drift is an original, responsive portfolio concept for a premium private boat-tour brand. It is inspired by the general category of Bangkok canal-tour websites, but uses its own brand name, copy, layout, and visual direction.

## Features

- Responsive homepage and mobile navigation with opaque, scrollable mobile menu
- Animated editorial ticker, reading-progress indicator, and back-to-top control
- Gentle scroll reveals with reduced-motion support
- Tours listing with search, category filters, and duration filters
- Individual tour detail pages driven by JavaScript data
- Demo booking form with client-side validation and summary
- About, contact, and FAQ pages
- Accessible form labels, keyboard focus styles, skip link, and reduced-motion support
- No frameworks, build tools, package installs, or paid services required

## Run locally

1. Extract the ZIP.
2. Open the `siam-drift` folder in Visual Studio Code.
3. Open `index.html` with the Live Server extension, or open the HTML file directly in your browser.
4. For the best experience, use Live Server so page navigation and relative assets behave consistently.

## Pages

- `index.html` — homepage
- `tours.html` — searchable/filterable tour listing
- `tour.html?id=quiet-khlongs` — tour details
- `booking.html` — demo booking flow
- `about.html` — concept and brand story
- `contact.html` — contact form demo and FAQ

## Important demo limitations

This is a frontend portfolio project only:
- Tour content, route descriptions, and prices are illustrative.
- It does not check real boat availability.
- It does not create or store real reservations.
- It does not send emails or messages.
- It does not accept payments.
- No backend or database is included.

A production version would require verified business information, a backend API, a database, server-side validation, secure booking/availability logic, payment-provider integration, and appropriate privacy/cancellation policies.

## Images and fonts

The page uses remote images hosted by Unsplash's image CDN and Google Fonts. An internet connection is needed for these external assets. Before publishing a commercial website, verify image usage rights and replace demo imagery with appropriately licensed, authentic photos.

## Customize

- Edit tour content in `assets/js/tours.js`.
- Edit visual styles and responsive breakpoints in `assets/css/styles.css`.
- Shared navigation and form demo behaviours are in `assets/js/main.js`.
- Booking interaction is in `assets/js/booking.js`.

## Suggested next steps

1. Test all pages at desktop and mobile sizes.
2. Replace placeholder/demo imagery and content with properly licensed material.
3. Add screenshots to this README once the design is finalized.
4. Deploy the static portfolio to GitHub Pages.
5. Add a real backend only if the project later needs real reservations.
