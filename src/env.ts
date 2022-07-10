/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-empty-interface */
import 'dotenv/config';
import z from 'zod';

const envSchema = z.object({
    NODE_ENV: z.string(),
    DEBUG: z.string().optional(),
});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> { }
  }
}

console.log(`Loading ${process.env.NODE_ENV} environment.`);
export default envSchema.parse(process.env);