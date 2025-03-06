import axios from "axios";
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODg2OTg1ZTdlODA0NjEwM2QxZTc5Y2YzNmYxOGM1NyIsIm5iZiI6MTc0MDU1NDYwNi4yNTQwMDAyLCJzdWIiOiI2N2JlYzE2ZWE3OTZlOTQ2OGVlZmFiY2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.BUFMHQY8-VZLyBmIjvjIhW1VxJ10oyrRz45qLVcFsC8'
      }
})
export default instance;


