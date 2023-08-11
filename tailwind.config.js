module.exports = {
    content: ["./src/**/*.{html,jsx}",
        "./src/components/**/*.{html,jsx}",
        "./src/pages/**/*.{html,jsx}",
        "./src/containers/**/*.{html,jsx}",
        "./index.html",],
    theme: {
        extend: {
            screens: {
                xs: '320px',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
            },
            colors: {
                'mono': {
                    50: "#FCFCFC",
                    100: "#FCFCFC",
                    200: "#FCFCFC",
                    300: "#FAFAFA",
                    400: "#F7F7F7",
                    500: "#F5F5F5",
                    600: "#DEDEDE",
                    700: "#C4C4C4",
                    800: "#A3A3A3",
                    900: "#757575",
                    950: "#545454"
                },
                'blue-charcoal': {
                    DEFAULT: '#000814',
                    50: '#70A9FF',
                    100: '#5B9DFF',
                    200: '#3384FF',
                    300: '#0A6CFF',
                    400: '#005AE0',
                    500: '#0049B7',
                    600: '#00398E',
                    700: '#002966',
                    800: '#00183D',
                    900: '#000814',
                    950: '#000000'
                },
                'midnight': {
                    light: '#3394FF',
                    DEFAULT: '#003566',
                    dark: '#001D3D'
                }
            },
            fontFamily: {
                body: ["FantasqueSansMonoNF", 'monospace'],
                heading: ['Convergence', 'sans-serif'],
                subheading: ['Averia Serif Libre', 'serif']
            }
        },
    },
    plugins: [],
    mode: 'jit',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

}