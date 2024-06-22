import axios from "axios"

export default class SendServer{

    static async postData(text, power){
        const response = await axios.post("http://localhost:8000/upload_text", {
            text: text,
            power: parseInt(power)
        });
        console.log(response);
        return response.data;
    }
}

