import path from "path";

const processEnv = process.env;
const environment = processEnv.ENVIRONMENT;

let baseUrl = processEnv[`BASE_URL`];

export const config = {
    sourcePath: path.join(__dirname, ".."),
    stylesPath: path.join(__dirname, "..", "public"),
    baseUrl,
    publicUrl: baseUrl + '/public/',
    processEnv,
    environment,
    salt: 10,
    dbUsername: processEnv['DB_USERNAME'],
    dbPassword: processEnv['DB_PASSWORD'],
    dbDialect: processEnv['DB_DIALECT'],
    dbPort: processEnv['DB_PORT'],
    dbDatabase: processEnv[`DATABASE`],
    dbHost: processEnv[`HOST`],
}