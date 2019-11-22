import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Injectable()
export class CustomLoggerService extends Logger {

    error(message: string, trace: string) {
        // add your tailored logic here
        try {
            return console.log(message, trace)
        } catch (error) {
            return console.log(message, trace)
        }
        super.error(message, trace);        
    }

    log(message: string) {
        // add your tailored logic here
        super.log(message);
    }

    warn(message: string) {
        // add your tailored logic here
        super.warn(message);
    }

    debug(message: string) {
        super.debug(message)
    }

    verbose(message: string) {
        super.verbose(message)

    }

}

