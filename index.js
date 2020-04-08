const app = require("express")();
const config = require("config");
const mongoose = require("mongoose");
const route = require('./routes');

const PORT = config.get('devPort');

const init = async () => {

    try {
        await mongoose.connect(config.get("dbUri"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });

        app.use('/api', route);

        app.listen(PORT, () => {
            console.log('server running on port ' + PORT);
        })

    } catch (e) {
        console.error(e);
        throw e;
    }
}


init();