import app from "./app.js";
import { connectToDb } from "./database/connection.js";
const port = process.env.PORT || 5000;
connectToDb()
    .then(() => {
    app.listen(port, () => {
        console.log(`Server is listening successfully at port ${port} & connected to DB`);
    });
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map