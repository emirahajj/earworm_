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
                'gray-3': '#787878',
            },
            backgroundColor: theme => ({
                ...theme('colors'),
                'primary': '#3490dc',
                'secondary': '#ffed4a',
                'danger': '#e3342f',
                'search':'#0000003d'
            }),
            backgroundImage: theme => ({
                'concert': "url('/src/img/concert.jpeg')",
                'headset' : "url('/src/img/dark-headset.jpg')",
                'headset2' : "url('/src/img/dark-headset2.jpg')",
                'beats' : "url('/src/img/beats.jpg')",
                'sur' : "url('/src/img/bigsuresque.png')",
            }),
            backgroundSize: {
                '100': '100% 100%',
            },
            fontFamily: {
                'montserrat': ['Montserrat'],
                'poppins': ['Poppins'] 
            },
            spacing: {
                '100': '448px',
            },
            objectPosition: {
                'artistImg': '50% 20%' 
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
