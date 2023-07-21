import {defineConfig, loadEnv} from "vite"
import react from "@vitejs/plugin-react-swc"

// const env = {...process.env, ...loadEnv()}

export default ({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())}
  const stashUrl = process.env.VITE_STASH_URL

  return defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        "/graphql": stashUrl,
        "/scene": stashUrl,
        "/image": stashUrl,
      },
    },
  })
}
