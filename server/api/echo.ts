export default defineEventHandler((event) => {
    return {
        headers: getHeaders(event),
    };
});