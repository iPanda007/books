/// <reference types="vite/client" />

interface ImportMetaEnv{
    readonly MODE: string
    readonly DEV: string

}

interface ImportMeta{
    readonly env: ImportMetaEnv
}