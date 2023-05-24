module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
        alegreya: "'Alegreya Sans SC', sans-serif",
        old: "'IM Fell English SC', serif"
      },
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ]
};