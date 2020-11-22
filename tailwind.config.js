module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "accent-1": "#333",
            },
        },
        typography: {
            default: {
                css: {
                    code: {
                        "&::before": {
                            display: "none",
                        },
                        "&::after": {
                            display: "none",
                        },
                    },
                    // ...
                },
            },
        },
    },
    variants: {},
    plugins: [require("@tailwindcss/typography")],
};
