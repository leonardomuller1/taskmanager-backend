const mongoose = require("mongoose");

const connectToDataBase = async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@taskmanagercluster.6ibtuda.mongodb.net/?retryWrites=true&w=majority&appName=TaskManagerCluster`
    );
    console.log("Conectado ao MongoDB!");
};

module.exports = connectToDataBase;
