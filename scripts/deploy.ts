import { publish } from "gh-pages";

publish(
    "build",
    {
        branch: "gh-pages",
        repo: "https://github.com/aifpn/www-bpf.aifpn.in.git",
        user: {
            name: "Utkrisht Singh Chauhan",
            email: "koq.utx10101@intacht.com",
        },
        dotfiles: true, // push .nojekyll too
    },
    () => {
        // eslint-disable-next-line no-console
        console.log("Deploy Complete!");
    },
);
