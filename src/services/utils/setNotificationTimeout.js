import { DELAY } from "../constants";

export default function setNotificationTimeout(timeRef, setFunction) {
  clearTimeout(timeRef.content);
  timeRef.content = setTimeout(() => setFunction(""), DELAY);
}
