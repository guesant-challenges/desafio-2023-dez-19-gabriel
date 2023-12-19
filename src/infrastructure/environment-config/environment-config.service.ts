import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as path from 'node:path';
import { IConfig } from 'src/domain/config';
import { DataSourceOptions } from 'typeorm';

@Injectable()
export class EnvironmentConfigService implements IConfig {
  constructor(
    //
    private nestConfigService: ConfigService,
  ) {}

  getDatabaseConnHost(): string {
    const host = this.nestConfigService.get('DATABASE_HOST') ?? null;

    if (host === null) {
      throw new Error('env.DATABASE_HOST must be provided.');
    }

    return host;
  }

  getDatabaseConnPort(): number {
    const port = this.nestConfigService.get('DATABASE_PORT') ?? null;

    if (port === null) {
      throw new Error('env.DATABASE_PORT must be provided.');
    }

    const portAsNumber = Number.parseInt(port);

    if (Number.isNaN(portAsNumber)) {
      throw new Error('env.DATABASE_PORT must be a valid port number.');
    }

    return portAsNumber;
  }

  getDatabaseConnUsername(): string {
    const username = this.nestConfigService.get('DATABASE_USERNAME') ?? null;

    if (username === null) {
      throw new Error('env.DATABASE_USERNAME must be provided.');
    }

    return username;
  }

  getDatabaseConnPassword(): string {
    const password = this.nestConfigService.get('DATABASE_PASSWORD') ?? null;

    if (password === null) {
      throw new Error('env.DATABASE_PASSWORD must be provided.');
    }

    return password;
  }

  getDatabaseConnDatabaseName(): string {
    const databaseName = this.nestConfigService.get('DATABASE_NAME') ?? null;

    if (databaseName === null) {
      throw new Error('env.DATABASE_NAME must be provided.');
    }

    return databaseName;
  }

  getPathCodeRoot() {
    return path.join(__dirname, '../..');
  }

  getPathCodeInfrastructureDatabase() {
    return path.join(this.getPathCodeRoot(), 'infrastructure/database');
  }

  getPathCodeInfrastructureDatabaseEntities() {
    return path.join(this.getPathCodeInfrastructureDatabase(), 'entities');
  }

  getPathCodeInfrastructureDatabaseMigrations() {
    return path.join(this.getPathCodeInfrastructureDatabase(), 'migrations');
  }

  getPathCodeInfrastructureDatabaseSeeds() {
    return path.join(this.getPathCodeInfrastructureDatabase(), 'seeds');
  }

  getTypeOrmSharedDataSourceOptions() {
    return {
      type: 'postgres',

      host: this.getDatabaseConnHost(),
      port: this.getDatabaseConnPort(),
      username: this.getDatabaseConnUsername(),
      password: this.getDatabaseConnPassword(),

      database: this.getDatabaseConnDatabaseName(),

      synchronize: false,
      logging: true,
    } satisfies Partial<DataSourceOptions>;
  }

  getTypeOrmDataSourceApp(): DataSourceOptions {
    return {
      ...this.getTypeOrmSharedDataSourceOptions(),

      entities: [
        //
        `${this.getPathCodeInfrastructureDatabaseEntities()}/**/*.{ts,js}`,
      ],
    };
  }

  getTypeOrmDataSourceSeed(): DataSourceOptions {
    return {
      ...this.getTypeOrmSharedDataSourceOptions(),

      migrationsTableName: 'db_seeds',

      migrations: [
        //
        `${this.getPathCodeInfrastructureDatabaseSeeds()}/**/*.{ts,js}`,
      ],
    };
  }

  getTypeOrmDataSourceMigration(): DataSourceOptions {
    return {
      ...this.getTypeOrmSharedDataSourceOptions(),

      migrationsTableName: 'db_migrations',

      migrations: [
        //
        `${this.getPathCodeInfrastructureDatabaseMigrations()}/**/*.{ts,js}`,
      ],
    };
  }

  getRuntimePort(): number {
    const rawPort = this.nestConfigService.get('PORT');

    const portAsNumber = Number.parseInt(rawPort);

    if (Number.isNaN(portAsNumber)) {
      throw new Error('env.PORT must be provided and be a valid port number.');
    }

    return portAsNumber;
  }
}
