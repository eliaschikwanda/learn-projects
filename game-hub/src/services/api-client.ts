import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'de3d3fceb54e49f79e214ce3bb846e04'
    }
})