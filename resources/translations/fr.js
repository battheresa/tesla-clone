import flatten from 'flat';

// components
const header = {
    menu1: 'Cybertruck',
    menu2: 'Powerwall',
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
    shopNow: 'Commander Maintenant',
    orderNow: 'Commander Maintenant',
    learnMore: 'Plus D\'info',
    customOrder: 'Commande Personnalizée',
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
    description: 'Commandez en ligne pour une',
    link: 'livraison sans contact',
    solarPanels: '',
    solarRoof: '',
    cybertruck: 'Better utility than a truck with more performance than a sports car',
    powerwall: '',
};

const design = {
    ...components,
};

const model3 = {
    ...components,
    hello: '¡Hola!',
    welcome: '¡Bienvenido!',
};

const dummy = {
    ...components,
    hello: '¡Hola!',
    welcome: '¡Bienvenido!',
};

// export
export const fr = {
    '/': home,
    '/design': design,
    '/model3': model3,
    '/dummy': dummy,
};
