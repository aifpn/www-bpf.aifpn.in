import { dev } from "$app/env";

interface IConfig {
    is_dev: boolean;
    base_url: string;
}

export const cfg: IConfig = {
    is_dev: dev,
    base_url: dev ? import.meta.env.XQUA_DEV_BASE_URL : import.meta.env.XQUA_PROD_BASE_URL,
};
