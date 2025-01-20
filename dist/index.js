class MongoOldClient {
    async getData(prop) {
        return null;
    }
}
class MongoAdapter {
    constructor(mongoClient) {
        MongoAdapter.mongoClient = mongoClient;
    }
    getFromDB(search) {
        return MongoAdapter.mongoClient.getData({ recordName: search });
    }
}
const mongoQueryService = new MongoOldClient();
const adapter = new MongoAdapter(mongoQueryService);
adapter.getFromDB('income');
class ThirdPartyLogger {
    log(level, message) {
        console.log(`[${level.toUpperCase()}]: ${message}`);
    }
}
class LoggerAdapter {
    constructor(logger) {
        this.logger = logger;
    }
    logInfo(message) {
        this.logger.log('info', `\x1b[32m ${message} \x1b[37m`);
    }
    logError(message) {
        this.logger.log('error', `\x1b[31m ${message} \x1b[37m`);
    }
}
const someDifferentLogger = new ThirdPartyLogger();
const logger = new LoggerAdapter(someDifferentLogger);
logger.logInfo('System is working');
logger.logInfo('Task is running...');
logger.logError('Something went wrong');
