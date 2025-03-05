import dotenv from 'dotenv'

dotenv.config()

export const imagekit = {
    'url':process.env.IK_URL_ENDPOINT,
    'pKey':process.env.IK_PUBLIC_KEY
}