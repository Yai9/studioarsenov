interface ImportMetaEnv {
    readonly CLIENT_NAME: string;
    readonly ASTRO_KEY: string;
    readonly API_BASE_URL: string;
    readonly PUBLIC_CONTACT_FORM_NAME: string;
    // more env variables...
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
