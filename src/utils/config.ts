const colorMode = localStorage.getItem("colorMode") ?? "light";

const lightColors = {
    "text": "rgba(8, 3, 5, 1)",
    "background": "rgba(253, 251, 252, 1)",
    "primary": "rgba(66, 51, 53, 1)",
    "secondary": "rgba(214, 147, 143, 1)",
    "tertiary": "rgba(205, 146, 126, 1)",
    "error": "rgba(163, 22, 22, 1)",
    "success": "rgba(44, 110, 47, 1)",
    "link": "rgba(7, 94, 157, 1)",
    "white": "rgba(255, 255, 255, 1)"
};

const darkColors = {
    "text": "rgba(8, 3, 5, 1)",
    "background": "rgba(253, 251, 252, 1)",
    "primary": "rgba(66, 51, 53, 1)",
    "secondary": "rgba(144, 111, 114, 1)",
    "tertiary": "#f2c94c",
    "error": "rgba(163, 22, 22, 1)",
    "success": "rgba(44, 110, 47, 1)",
    "link": "rgba(7, 94, 157, 1)",
    "white": "rgba(255, 255, 255, 1)"
};

const currentColorPalette = colorMode === "light" ? lightColors : darkColors;

export const config = {
    "colors": {
       ...currentColorPalette,
    }, 
    "fonts": {
        "heading": {
            family: "Corben",
            weights: {
                boldWeight: 700,
                normalWeight: 400,
            }
        },
        "body": {
            family: "Montserrat",
            weights: {
                boldWeight: 700,
                normalWeight: 500,
            }
        }
    }
}
