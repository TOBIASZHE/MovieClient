import axios from "axios";

export default axios.create({
    baseURL:'https://2790-2600-4041-586e-d800-2507-bdeb-8663-cfff.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": true}
});
