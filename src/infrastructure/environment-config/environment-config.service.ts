import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IConfig } from 'src/domain/config';

@Injectable()
export class EnvironmentConfigService implements IConfig {
  constructor(
    //
    private nestConfigService: ConfigService,
  ) {}

  getRuntimePort(): number {
    const rawPort = this.nestConfigService.get('PORT');

    const portAsNumber = Number.parseInt(rawPort);

    if (Number.isNaN(portAsNumber)) {
      throw new Error(
        'env.PORT should be provided and be a valid port number.',
      );
    }

    return portAsNumber;
  }
}
