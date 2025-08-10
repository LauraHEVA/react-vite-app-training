/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_URL_POKEMON_API: string;
    readonly VITE_URL_STAR_WARS_API: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
