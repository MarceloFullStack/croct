export const getBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();


        reader.readAsDataURL(file);
        reader.onload = () => resolve(replaceBase64(reader.result as string));
        reader.onerror = error => reject(error);
    });
};

const replaceBase64 = (base64: string) => {
    return base64.replace(/^data:image\/(png|jpg);base64,/, "");
};