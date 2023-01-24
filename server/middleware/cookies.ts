import { randomUUID } from "node:crypto";

export default defineEventHandler((event) => {
  const cookie = getCookie(event, "sessionid");
  if (!cookie) {
    setCookie(event, "sessionid", randomUUID());
  }
});
