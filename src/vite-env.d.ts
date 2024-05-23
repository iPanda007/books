/// <reference types="vite/client" />

interface ImportMetaEnv{
    readonly MODE: string
    readonly DEV: string
    readonly VITE_APP_API: string
}

interface ImportMeta{
    readonly env: ImportMetaEnv
}