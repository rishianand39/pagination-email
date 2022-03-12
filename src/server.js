const app = require('./index');
const connect = require('./configs/db');


app.listen(4200, async() => {
    try {
        await connect;
    } catch (err) {
        console.log(err.message)
    }
    console.log("listening on port 4200")
})