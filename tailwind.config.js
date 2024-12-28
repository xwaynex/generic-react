/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include JSX and TSX files for React projects
  ],
  darkMode: 'class', // Enable class-based dark mode toggling (could also be 'media' for automatic switching based on user's system preference)
  theme: {
    extend: {
      colors: {
        // Light theme colors (default)
        primary: '#3b82f6', // Tailwind blue
        secondary: '#fbbf24', // Tailwind amber
        background: '#ffffff', // White background for light mode
        text: '#1f2937', // Dark text color for light mode

        // Dark theme colors
        darkPrimary: '#2563eb', // Darker blue for dark mode
        darkSecondary: '#f97316', // Darker amber for dark mode
        darkBackground: '#1f2937', // Dark background for dark mode
        darkText: '#d1d5db', // Lighter text color for dark mode
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'], // Add your default font stack here
      },
      spacing: {
        '128': '32rem', // Example of custom spacing (adjust as needed)
      },
      boxShadow: {
        'outline-light': '0 0 0 2px rgba(59, 130, 246, 0.5)', // Light theme outline shadow
        'outline-dark': '0 0 0 2px rgba(59, 130, 246, 0.75)', // Dark theme outline shadow
      },
    },
  },
  plugins: [],
};
