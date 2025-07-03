# Nuxt Appointment App

## Overview
The Nuxt Appointment App is a responsive web application designed to facilitate appointment bookings and provide a contact form for users. It also integrates a Google Reviews system to display customer feedback. The application utilizes a black and white color palette and the Poppins font family for a clean and modern aesthetic.

## Features
- **Appointment Booking**: Users can book appointments through a dedicated form.
- **Contact Form**: A simple contact form for user inquiries.
- **Google Reviews Integration**: Fetches and displays Google reviews to enhance credibility.
- **Responsive Design**: Fully responsive layout that adapts to various screen sizes.

## Project Structure
```
nuxt-appointment-app
├── components
│   ├── AppointmentForm.vue
│   ├── ContactForm.vue
│   ├── GoogleReviews.vue
│   └── Header.vue
├── pages
│   ├── index.vue
│   ├── appointments.vue
│   └── contact.vue
├── layouts
│   └── default.vue
├── assets
│   └── css
│       └── main.css
├── plugins
│   └── google-reviews.js
├── nuxt.config.ts
├── package.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/nuxt-appointment-app.git
   ```
2. Navigate to the project directory:
   ```
   cd nuxt-appointment-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To run the application in development mode, use the following command:
```
npm run dev
```
The application will be available at `http://localhost:3000`.

## Customization
- Modify the styles in `assets/css/main.css` to adjust the appearance of the application.
- Update the Google Reviews integration in `plugins/google-reviews.js` to customize API calls.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.