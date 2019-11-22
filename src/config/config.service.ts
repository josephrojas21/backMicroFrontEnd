import * as dotenv from 'dotenv';
import * as fs from 'fs';


export class ConfigService {
    private envData: any;
    private environment: string;

    constructor() {
        this.environment = process.env.NODE_ENV || 'development';
        this.envData = dotenv.parse(fs.readFileSync(`${this.environment}.env`));
    }

    get(key: string): any {
        return this.envData[key];
    }

    isDev(): boolean {
        return this.environment === 'development';
    }

    isProd(): boolean {
        return this.environment === 'production';
    }
}
