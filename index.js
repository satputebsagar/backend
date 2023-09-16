import {app} from "./app.js";
import { connectDB } from "./data/database.js";


connectDB();
const PORT =process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(
        `server is working on port ${PORT}`
    )
})