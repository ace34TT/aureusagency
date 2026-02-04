import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

// Load env before anything else
dotenv.config({ path: path.resolve(process.cwd(), '.env') })

const runSeed = async () => {
  try {
    // Dynamic imports to ensure env vars are loaded first
    const { default: config } = await import('../payload.config')
    const { getPayload } = await import('payload')
    const { seed } = await import('@/endpoints/seed')

    console.log('Initialize Payload...')
    const payload = await getPayload({ config })

    console.log('Starting seed...')
    // Mock request object as needed by seed function
    await seed({ payload, req: { payload } as any })

    console.log('Done!')
    process.exit(0)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

runSeed()
