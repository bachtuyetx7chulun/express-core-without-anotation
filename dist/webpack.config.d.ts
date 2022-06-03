export const mode: string;
export const context: string;
export const entry: string;
export namespace output {
    const path: string;
    const filename: string;
}
export namespace module {
    const rules: {
        test: RegExp;
        exclude: RegExp;
        loader: string;
        options: {
            configFile: string;
        };
    }[];
}
export namespace resolve {
    const extensions: string[];
    const plugins: any[];
}
