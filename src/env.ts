import z from 'zod'
import { fromError } from 'zod-validation-error'

const envSchema = z.object({
  PORT: z
    .string()
    .refine(
      (port) => parseInt(port) > 0 && parseInt(port) < 65536,
      'Invalid port number'
    ),
})

try {
  envSchema.parse(process.env)
} catch (err) {
  const validationError = fromError(err)
  console.log(validationError.toString())
  process.exit(-1)
}
