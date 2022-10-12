/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ejs,js,jsx,md,mdx,ts,tsx}'],
    theme: {
        extend: {},
    },
    darkMode: 'class',
    plugins: [require('daisyui')],
    // daisyUI config
    daisyui: {
        styled: true,
        themes: ['luxury', 'coffee'],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: '',
        darkTheme: 'luxury',
    },
};