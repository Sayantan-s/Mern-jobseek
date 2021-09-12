require('dotenv').config();

const {
    PORT,
    MONGO_URI,
    MONGODB_DB,
    ACCESS_TOKEN,
    REFRESH_TOKEN,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URL
} = process.env;

module.exports = {
    PORT,
    MONGO_URI,
    MONGODB_DB,
    ACCESS_TOKEN,
    REFRESH_TOKEN,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URL
};
