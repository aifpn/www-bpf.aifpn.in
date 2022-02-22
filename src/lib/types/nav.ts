export interface INavLink {
    name: string;
    href: string;
    is_home?: boolean;
    childs?: INavLink[];
}
