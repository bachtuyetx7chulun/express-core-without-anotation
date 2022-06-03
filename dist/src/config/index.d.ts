import convict from 'convict';
declare const config: convict.Config<{
    env: string;
    port: number;
}>;
export { config };
