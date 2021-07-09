import flatten from 'flat';

// components
const header = {
    test: 'test',
};

const footer = {
    credit: 'Contenido de',
    link: 'Página Web Oficial',
};

const button = {
    menu: 'Menu',
    back: 'Retour',
};

const menu = {
    existingInventory: 'Vehículos Disponibles',
    usedInventory: 'Vehículos Usados',
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
    hello: 'Bonjour le monde!',
    welcome: 'Bienvenue sur votre page internationalisée!',
};

const other = {
    ...components,
    hello: 'Bonjour!',
    welcome: 'Bienvenue!',
};

// export
export const es = {
    '/': home,
    '/dummy': other,
};
