/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-empty-interface */
import 'dotenv/config';
import z from 'zod';

const envSchema = z.object({
    NODE_ENV: z.string(),
    DEBUG: z.string().optional(),
});

try {
    envSchema.parse(process.env);
} catch (e) {
    console.error('Failed to parse environment variables.');
    console.error(e);
    process.exit(1);
}

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof envSchema> {}
    }
}

console.log(`Loading ${process.env.NODE_ENV} environment.`);