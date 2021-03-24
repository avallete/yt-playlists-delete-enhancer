import * as AppRootPath from 'app-root-path'
import { createWebpackConfig, DEFAULT_BUILD_CONFIG } from 'userscripter/build'
import METADATA, { MetadataSchema } from './metadata'
import U from './src/userscript'
import * as CONFIG from './src/config'
import * as SITE from './src/site'
import MANIFEST from './manifest'

const webpackConfig = createWebpackConfig({
  buildConfig: {
    ...DEFAULT_BUILD_CONFIG({
      rootDir: AppRootPath.path,
      id: U.id,
      now: new Date(),
    }),
    sassVariables: { CONFIG, SITE },
    appendDateToVersion: {
      development: false,
      production: false,
      nightly: false,
    },
  },
  manifest: MANIFEST,
  metadata: METADATA,
  metadataSchema: MetadataSchema,
  env: process.env,
})

export default webpackConfig
