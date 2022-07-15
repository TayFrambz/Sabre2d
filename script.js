
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'nano',
    default: '#ff0000',
    width: '50px',

    swatches: [
     
    ],

    components: {

        // Main components
        preview: true,
        opacity: false,
        hue: true,

        // Input / output Options
        interaction: {
            hex: false,
            rgba: true,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: false,
            clear: true,
            save: true
        }
    }
});

pickr.on('change', (color) => {
    const saberLightColor = color.toRGBA().toString();
    console.log(saberLightColor)
    document.querySelector('body > main > section > div.light').style.background = saberLightColor;
});