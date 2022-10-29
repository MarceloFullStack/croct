import axios from 'axios';
import {getBase64} from "../utils/fileToBase64";

export const imageDetectionHttpRequest = async (image: any) => {
    const base64: any = await getBase64(image);
    const replacedBase64 = base64.replace(/^data:image\/[a-z]+;base64,/, "");
    try {
        const options = {
            method: 'POST',
            url: 'https://universal-image-classificator1.p.rapidapi.com/Stage/inference',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'a892eedcc2msheca485ce59b537fp1938e7jsnd4615722cdd9',
                'X-RapidAPI-Host': 'universal-image-classificator1.p.rapidapi.com'
            },
            // data: '{"url":"https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png","classes":["a diagram","a dog","a cat"]}'
            data: {
                classes: ["a diagram", "a dog", "a cat"],
                image: JSON.stringify(replacedBase64)
            }
        };

        const payload = axios.request(options).then(function (response) {
            return response.data;
        });
        return Promise.resolve(payload);
    } catch (error) {
        return Promise.reject(error);
    }
};