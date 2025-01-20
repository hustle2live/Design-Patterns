

// ----- example first ------------------------------------------- //

interface ILogger {
   logInfo(message: string): void;
   logError(message: string): void;
}

class ThirdPartyLogger {
   log(level: string, message: string) {
      console.log(`[${level.toUpperCase()}]: ${message}`);
   }
}

class LoggerAdapter implements ILogger {
   private logger: ThirdPartyLogger;
   constructor(logger: ThirdPartyLogger) {
      this.logger = logger;
   }

   logInfo(message: string): void {
      this.logger.log('info', `\x1b[32m ${message} \x1b[37m`);
   }

   logError(message: string): void {
      this.logger.log('error', `\x1b[31m ${message} \x1b[37m`);
   }
}

const someDifferentLogger: ThirdPartyLogger = new ThirdPartyLogger();

const logger: LoggerAdapter = new LoggerAdapter(someDifferentLogger);

logger.logInfo('System is working');
logger.logInfo('Task is running...');
logger.logError('Something went wrong');




// example second


type IResponse = HTMLElement | null;
type IProps = { name: string; amount: number };

class MongoOldClient {
   async getData(prop: { recordName: string }): Promise<IResponse> {
      return null;
   }
}

class MongoAdapter {
   static mongoClient: MongoOldClient;
   constructor(mongoClient: MongoOldClient) {
      MongoAdapter.mongoClient = mongoClient;
   }
   getFromDB(search: string): Promise<IResponse> {
      return MongoAdapter.mongoClient.getData({ recordName: search });
   }
}

const mongoQueryService = new MongoOldClient();
const adapter = new MongoAdapter(mongoQueryService);

adapter.getFromDB('income');