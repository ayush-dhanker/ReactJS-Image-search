import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID eNjBFNwhse0KRgriVLciAGFQS5sXJLQ8tQqhs3yI4N4",
  },
});
