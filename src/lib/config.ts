import { dev } from "$app/env";

import { LogLevel } from "$lib/logger";

interface IConfig {
    is_dev: boolean;
    base_url: string;
    log_level: LogLevel;
}

export const cfg: IConfig = {
    is_dev: dev,
    base_url: dev ? import.meta.env.XQUA_DEV_BASE_URL : import.meta.env.XQUA_PROD_BASE_URL,
    log_level: dev ? LogLevel.debug : LogLevel.info,
};
