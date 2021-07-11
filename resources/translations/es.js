import flatten from 'flat';

// components
const header = {
    menu1: 'Cybertruck',
    menu2: 'Powerwall',
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
    shopNow: 'Ordenar ahora',
    orderNow: 'Ordenar ahora',
    learnMore: 'Más Informacíon',
    customOrder: 'Orden Personalizada',
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
    description: 'Ordene en línea para',
    link: 'entrega sin contacto',
    solarPanels: '',
    solarRoof: '',
    cybertruck: 'Better utility than a truck with more performance than a sports car',
    powerwall: 'Energía para todo',
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
