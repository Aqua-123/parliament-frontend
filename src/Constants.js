const DEBUG = true;

const TESTING_ENDPOINT = "http://localhost:4000";

const PRODUCTION_ENDPOINT = "https://api.asr.dev";

export const ENDPOINT = DEBUG ? TESTING_ENDPOINT : PRODUCTION_ENDPOINT;
