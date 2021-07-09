import flatten from 'flat';

// components
const header = {
    test: 'test',
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
    hello: 'Hello World!',
    welcome: 'Welcome to your internationalised page!',
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
