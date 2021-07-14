import { initStorage } from './config';
const storageRef = initStorage().ref();

export const getImage = async (folder, filename, extension) => {
    const file = storageRef.child(`${folder}/${filename}.${extension}`);
    const url = await file.getDownloadURL();
    return url;
};

export const getAllImage = async (folder) => {
    let urls = [];
    const files = storageRef.child(`${folder}`);

    await files.listAll().then(async (response) => {
        for (const item of response.items) {
            urls.push(await item.getDownloadURL());
        }
    });

    return urls;
};

export const getVideo = async (filename, extension) => {
    const file = storageRef.child(`${filename}.${extension}`);
    const url = await file.getDownloadURL();
    return url;
};