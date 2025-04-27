// Import the necessary PostCSS plugins
import tailwindcss from '@tailwindcss/postcss'; // Use this now
import autoprefixer from 'autoprefixer';

// PostCSS config
export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
  ],
};
