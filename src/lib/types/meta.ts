export interface IImageMeta {
    url: string;
    width: string;
    height: string;
    alt: string;
}

export interface ITwitterMeta {
    title: string;
    description: string;
    image: string;
    "image:alt": string;
    card: string;
    site: string;
    "site:id": string;
    creator: string;
    "creator:id": string;
    player: string;
    "player:width": string;
    "player:height": string;
    "player:stream": string;
    "app:name:iphone": string;
    "app:id:iphone": string;
    "app:url:iphone": string;
    "app:name:ipad": string;
    "app:id:ipad": string;
    "app:url:ipad": string;
    "app:name:googleplay": string;
    "app:id:googleplay": string;
    "app:url:googleplay": string;
    label1: string;
    data1: string;
    label2: string;
    data2: string;
}

export interface IOpenGraphMeta {
    title: string;
    url: string;
    type: string;
    description: string;
    determiner: string;
    locale: string;
    "locale:alternate": string;
    site_name: string;

    image: string;
    "image:url": string;
    "image:secure_url": string;
    "image:type": string;
    "image:width": string;
    "image:height": string;
    "image:alt": string;

    video: string;
    "video:url": string;
    "video:secure_url": string;
    "video:type": string;
    "video:width": string;
    "video:height": string;
    "video:alt": string;

    audio: string;
    "audio:secure_url": string;
    "audio:type": string;
}

export interface IMeta {
    title: string;
    description: string;
    keywords: string[];
    image: string | IImageMeta;
    url: string;
    logoUrl: string;
    searchUrl: string;
    sitemapUrl: string;

    atom: string;
    robots: string;

    twitter: Partial<ITwitterMeta>;
    openGraph: Partial<IOpenGraphMeta>;
}
