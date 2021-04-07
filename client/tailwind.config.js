module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'dark': '#101010',
                'dark-1': '#1E1E1E',
                'gray-1': '#282828',
                'gray-2': '#404040',
                'gray-3': '#787878'
            },
            backgroundImage: theme => ({
                'concert': "url('/src/img/concert.jpeg')",
                'headset' : "url('/src/img/dark-headset.jpg')",
                'headset2' : "url('/src/img/dark-headset2.jpg')",
                'beats' : "url('/src/img/beats.jpg')",
            }),
            backgroundSize: {
                '100': '100% 100%',
            },
            fontFamily: {
                'montserrat': ['Montserrat'],
            },
            spacing: {
                '100': '448px',
              }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
