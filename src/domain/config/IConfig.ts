import { IConfigDatabaseConn } from './IConfigDatabase';

export interface IConfig extends IConfigDatabaseConn {
  getRuntimePort(): number;
}
