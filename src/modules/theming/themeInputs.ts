const defaultCorePaletteInputs = {
    hue: 240, // hsl(220, 100%, 50%)
    middleLightness: 50,
    lightnessIncrement: 10,
    lightnessDecrement: 10,
    saturation: 55,
    saturationIncrement: 5,
    hueDecrement: 0,
};

const defaultAccentPaletteInputs = {
    ...defaultCorePaletteInputs,
    hue: 220, // hsl(270, 70%, 50%)
};

const defaultNeutralPaletteInputs = {
    ...defaultCorePaletteInputs,
    saturation: 0,
    middleLightness: 60,
    lightnessIncrement: 12,
    lightnessDecrement: 13,
    hue: 200, // hsl(200, 10%, 50%)
};

const defaultDangerPaletteInputs = {
    ...defaultCorePaletteInputs,
    hue: 0, // hsl(0, 50%, 50%)
};

const defaultWarningPaletteInputs = {
    ...defaultCorePaletteInputs,
    hue: 50, // hsl(50, 50%, 50%)
    lightnessIncrement: 10,
    lightnessDecrement: 6,
    hueDecrement: 15,
};

const defaultSuccessPaletteInputs = {
    ...defaultCorePaletteInputs,
    hue: 120, // hsl(120, 50%, 50%)
    saturation: 50,
};

const defaultBorderStyleInputs = {
    bs1: 1,
    bs2: 2,
    bs3: 5,
};

const defaultBorderRadiusInputs = {
    br1: 4,
    br2: 20,
};

const defaultIconSizeInputs = {
    is1: 12,
    is2: 16,
    is3: 24,
    is4: 32,
};

const defaultFontWeightInputs = {
    fw4: 400,
    fw5: 500,
    fw6: 600,
    fw7: 700,
    fw8: 800,
    fw9: 900,
};

const defaultFontSizeInputs = {
    fs1: 12,
    fs2: 14,
    fs3: 16,
    fs4: 18,
    fs5: 20,
    fs6: 24,
    fs7: 30,
    fs8: 36,
    fs9: 48,
    fs10: 60,
    fs11: 72,
};

const spacingUnit = 4;

const defaultSpacingSystemInputs = {
    ss1: 1 * spacingUnit,
    ss2: 2 * spacingUnit,
    ss3: 3 * spacingUnit,
    ss4: 4 * spacingUnit,
    ss6: 6 * spacingUnit,
    ss8: 8 * spacingUnit,
    ss12: 12 * spacingUnit,
    ss16: 16 * spacingUnit,
    ss24: 24 * spacingUnit,
    ss32: 32 * spacingUnit,
    ss48: 48 * spacingUnit,
    ss64: 64 * spacingUnit,
    ss96: 96 * spacingUnit,
    ss128: 128 * spacingUnit,
    ss160: 160 * spacingUnit,
    ss192: 192 * spacingUnit,
};

const defaultTransitionInputs = {
    fast: 200,
    medium: 350,
    slow: 800,
};

const boxShadowColor = 'hsla(0, 0%, 20%, 0.1)';

const backgroundColor = 'hsla(0, 0%, 100%, 1)';

export const themeInputs = {
    colors: {
        backgroundColor,
        core: defaultCorePaletteInputs,
        accent: defaultAccentPaletteInputs,
        neutral: defaultNeutralPaletteInputs,
        success: defaultSuccessPaletteInputs,
        warning: defaultWarningPaletteInputs,
        danger: defaultDangerPaletteInputs,
    },
    border: {
        borderRadius: defaultBorderRadiusInputs,
        borderStyle: defaultBorderStyleInputs,
    },
    boxShadowColor,
    transitions: defaultTransitionInputs,
    typography: {
        fontSizes: defaultFontSizeInputs,
        fontWeights: defaultFontWeightInputs,
        fontFamilies: {
            default: 'Open Sans, sans-serif',
            title: 'Poppins, sans-serif',
            monospace: 'Fira Mono, monospace',
            cursive: 'Shrikhand',
        },
        lineHeights: {
            default: '24px',
            title: '32px',
        },
    },
    spacing: defaultSpacingSystemInputs,
    horizontalWidth: {
        paragraph: 'ss160',
    },
    icons: {
        iconSizes: defaultIconSizeInputs,
    },
};
