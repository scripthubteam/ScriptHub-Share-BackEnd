import _ from 'lodash';
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import deepPurple from '@material-ui/core/colors/deepPurple';
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';
import cyan from '@material-ui/core/colors/cyan';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';
import lime from '@material-ui/core/colors/lime';
import yellow from '@material-ui/core/colors/yellow';
import amber from '@material-ui/core/colors/amber';
import orange from '@material-ui/core/colors/orange';
import deepOrange from '@material-ui/core/colors/deepOrange';
import brown from '@material-ui/core/colors/brown';
import gray from '@material-ui/core/colors/grey';
import blueGray from '@material-ui/core/colors/blueGrey';
import Config from '../Config/Config'

const colors = {
    red: {
        id: 'red',
        name: 'Red',
        import: red
    },

    pink: {
        id: 'pink',
        name: 'Pink',
        import: pink
    },

    purple: {
        id: 'purple',
        name: 'Purple',
        import: purple
    },

    deepPurple: {
        id: 'deep-purple',
        name: 'Deep Purple',
        import: deepPurple
    },

    indigo: {
        id: 'indigo',
        name: 'Indigo',
        import: indigo
    },

    blue: {
        id: 'blue',
        name: 'Blue',
        import: blue
    },

    lightBlue: {
        id: 'light-blue',
        name: 'Light Blue',
        import: lightBlue
    },

    cyan: {
        id: 'cyan',
        name: 'Cyan',
        import: cyan
    },

    teal: {
        id: 'teal',
        name: 'Teal',
        import: teal
    },

    green: {
        id: 'green',
        name: 'Green',
        import: green
    },

    lightGreen: {
        id: 'light-green',
        name: 'Light Green',
        import: lightGreen
    },

    lime: {
        id: 'lime',
        name: 'Lime',
        import: lime
    },

    yellow: {
        id: 'yellow',
        name: 'Yellow',
        import: yellow
    },

    amber: {
        id: 'amber',
        name: 'Amber',
        import: amber
    },

    orange: {
        id: 'orange',
        name: 'Orange',
        import: orange
    },

    deepOrange: {
        id: 'deep-orange',
        name: 'Deep Orange',
        import: deepOrange
    },

    brown: {
        id: 'brown',
        name: 'Brown',
        import: brown
    },

    gray: {
        id: 'gray',
        name: 'Gray',
        import: gray
    },

    blueGray: {
        id: 'blue-gray',
        name: 'Blue Gray',
        import: blueGray
    }
};

const types = {
    light: {
        id: 'light',
        name: 'Light'
    },

    dark: {
        id: 'dark',
        name: 'Dark'
    }
};

const getColor = (colorId) => {
    if (!colorId) {
        return null;
    }

    colorId = _.camelCase(colorId);

    return colors[colorId];
};

const getType = (typeId) => {
    if (!typeId) {
        return null;
    }

    return types[typeId];
};

const defaultPrimaryColor = getColor(`${Config.primary_color}`);
const defaultSecondaryColor = getColor(`${Config.secondary_color}`);
const defaultType = getType(`${Config.type}`);

const defaultTheme = createMuiTheme({
    palette: {
        primary: defaultPrimaryColor.import,
        secondary: defaultSecondaryColor.import,
        type: defaultType.id
    },

    primaryColor: defaultPrimaryColor,
    secondaryColor: defaultSecondaryColor,
    type: defaultType
});

var theming = {};

theming.colors = colors;
theming.types = types;

theming.defaultPrimaryColor = defaultPrimaryColor;
theming.defaultSecondaryColor = defaultSecondaryColor;
theming.defaultType = defaultType;

theming.defaultTheme = defaultTheme;

/**
 * Returns whether a theme is the default theme.
 * @param theme
 * @returns {boolean}
 */
theming.isDefaultTheme = (theme) => {
    if (!theme) {
        return false;
    }

    if (theme.primaryColor.id === defaultPrimaryColor.id &&
        theme.secondaryColor.id === defaultSecondaryColor.id &&
        theme.type.id === defaultType.id) {
        return true;
    }

    return false;
};

/**
 * Creates a Material-UI theme from a JSON theme object.
 * @param theme
 * @returns {null|Theme}
 */
theming.createTheme = (theme) => {
    if (!theme) {
        return null;
    }

    let primaryColor = theme.primaryColor;
    let secondaryColor = theme.secondaryColor;
    let type = theme.type;

    if (!primaryColor || !secondaryColor || !type) {
        return null;
    }

    primaryColor = getColor(primaryColor);
    secondaryColor = getColor(secondaryColor);
    type = getType(type);

    if (!primaryColor || !secondaryColor || !type) {
        return null;
    }

    theme = createMuiTheme({
        palette: {
            primary: primaryColor.import,
            secondary: secondaryColor.import,
            type: type.id
        },

        primaryColor: primaryColor,
        secondaryColor: secondaryColor,
        type: type
    });

    return theming.defaultTheme = theme;
};

/**
 * Changes the theme for the current user.
 * @param theme
 * @returns {Promise<unknown>}
 */
theming.changeTheme = (theme) => {
    return new Promise((resolve, reject) => {

        let primaryColor = getColor(theme.primaryColor);
        let secondaryColor = getColor(theme.secondaryColor);
        let type = getType(theme.type);

        theme = createMuiTheme({
            palette: {
                primary: primaryColor.import,
                secondary: secondaryColor.import,
                type: type.id
            },

            primaryColor: primaryColor,
            secondaryColor: secondaryColor,
            type: type
        });
        theming.defaultTheme = theme;
    });
};

/**
 * Changes the primary color for the current user.
 * @param primaryColor
 * @returns {Promise<unknown>}
 */
theming.changePrimaryColor = (primaryColor) => {
    return new Promise((resolve, reject) => {
        if (!primaryColor) {
            reject();

            return;
        }

        primaryColor = getColor(primaryColor);

        if (!primaryColor) {
            reject();

            return;
        }
    });
};

/**
 * Changes the secondary color for the current user.
 * @param secondaryColor
 * @returns {Promise<unknown>}
 */
theming.changeSecondaryColor = (secondaryColor) => {
    return new Promise((resolve, reject) => {
        if (!secondaryColor) {
            reject();

            return;
        }

        secondaryColor = getColor(secondaryColor);

        if (!secondaryColor) {
            reject();

            return;
        }
    });
};

/**
 * Changes the type for the current user.
 * @param type
 * @returns {Promise<unknown>}
 */
theming.changeType = (type) => {
    return new Promise((resolve, reject) => {
        if (!type) {
            reject();

            return;
        }

        type = getType(type);

        if (!type) {
            reject();

            return;
        }
    });
};

/**
 * Resets the theme for the current user.
 * @returns {Promise<unknown>}
 */
theming.resetTheme = () => {
    return new Promise((resolve, reject) => {

    });
};

export default theming;
