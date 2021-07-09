import flatten from 'flat';

// components
const header = {
    test: 'test',
};

const footer = {
    credit: 'Contenu de',
    link: 'Site Officiel',
};

const button = {
    menu: 'Menú',
    back: 'Volver',
};

const menu = {
    existingInventory: 'Véhicules Disponibles',
    usedInventory: 'Véhicules D\'occasion',
};

const components = {
    ...flatten({ header: header }), 
    ...flatten({ footer: footer }),
    ...flatten({ button: button }), 
    ...flatten({ menu: menu }), 
}

// pages
const home = {
    ...components,
    hello: '¡Hola Mundo!',
    welcome: '¡Bienvenido a tu página internacionalizada!',
};

const other = {
    ...components,
    hello: '¡Hola!',
    welcome: '¡Bienvenido!',
};

// export
export const fr = {
    '/': home,
    '/dummy': other,
};
