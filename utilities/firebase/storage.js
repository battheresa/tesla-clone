import { initStorage } from './config';
const storageRef = initStorage().ref();

export const getImage = async (folder, filename, extension) => {
    const file = storageRef.child(`${folder}/${filename}.${extension}`);
    const url = await file.getDownloadURL();
    return url;
};

