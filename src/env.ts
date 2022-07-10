/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-empty-interface */
import 'dotenv/config';
import z from 'zod';

const envSchema = z.object({
    NODE_ENV: z.string(),
    DEBUG: z.string().optional(),
});


/**
 * Environment options used by the program.
 * @public
 */
export interface Env extends z.infer<typeof envSchema> { }

declare global {
    namespace NodeJS {
        interface ProcessEnv extends Env {}
    }
}

console.log(`Loading ${process.env.NODE_ENV} environment.`);

try {
    envSchema.parse(process.env);
} catch (e) {
    console.error('Failed to parse environment variables.');
    console.error(e);
    process.exit(1);
}
