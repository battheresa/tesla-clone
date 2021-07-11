import flatten from 'flat';

// components
const header = {
    menu1: 'Cybertruck',
    menu2: 'Powerwall',
};

const footer = {
    credit: 'Content from',
    link: 'Official Website',
};

const button = {
    menu: 'Menu',
    back: 'Back',
};

const menu = {
    shopNow: 'Shop Now',
    orderNow: 'Order Now',
    learnMore: 'Learn More',
    customOrder: 'Custom Order',
    existingInventory: 'Existing Inventory',
    usedInventory: 'Used Inventory',
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
    description: 'Order online for',
    link: 'Touchless Delivery',
    solarPanels: '',
    solarRoof: '',
    powerwall: 'Power Everything',
};

const other = {
    ...components,
    hello: 'Hello!',
    welcome: 'Welcome!',
};

// export
export const enuk = {
    '/': home,
    '/dummy': other,
};
