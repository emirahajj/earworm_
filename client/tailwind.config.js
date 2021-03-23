module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'dark': '#101010',
                'gray-1': '#282828',
                'gray-2': '#404040',
                'gray-3': '#787878'
            },
            backgroundImage: theme => ({
                'concert': "url('/src/concert.jpeg')",
                'concert2': "url('/src/concert2.jpeg')",
                'concert3': "url('/src/concert3.jpeg')",
            }),
            backgroundSize: {
                '100': '100% 100%',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
