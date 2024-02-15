const isProduction = import.meta.env.MODE === "production";

export const BASE_URL = isProduction ? "http://24.199.127.152:8000" : "http://localhost:8000";
//export const BASE_URL = isProduction ? "http://localhost:8000" : "http://localhost:8000";
