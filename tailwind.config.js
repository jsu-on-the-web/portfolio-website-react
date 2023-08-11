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
                }
                },
            fontFamily: {
                body: ['Raleway', 'sans-serif'],
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