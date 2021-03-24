import { Metadata } from 'userscript-metadata'

// This file is generated from package.json with build-config-from-package-json command
// if you need to add or remove data from it, see package.json script section
// Additional details: https://github.com/avallete/userscripter-boilerplate/issues/30
import packageConfig from '../metadata-config.json'

export type UserscriptMetadata = Metadata & {
  id: string
  name: string
  description: string
  version: string
  author: string
  homepage: string
  support: string
  hostname: string
  sitename: string
  repositoryURL: string
  license: string
  run_at: string
  releaseBranch: string
}

const userscriptMetadata: UserscriptMetadata = {
  id: packageConfig.name, // Used to generate the final dist files (like so: `${id}.user.js`)
  name: packageConfig.name, // Used into metadata and manifest.json as extension/userscript name
  description: packageConfig.description,
  version: packageConfig.version, // Automatically match the userscript metadata version to the package.json one
  author: packageConfig.author,
  homepage: packageConfig.homepage,
  support: packageConfig.bugs.url,
  hostname: 'youtube.com', // Will be used to generate matches (see: metadata.ts)
  sitename: 'youtube',
  repositoryURL: packageConfig.repository.url, // Used to generate the downloadURL of your userscript into metadata.ts
  license: packageConfig.license,
  run_at: 'document-idle',
  // Will be used to generate the downloadURL into metadata.ts
  // Make sure it match the branch where final release are pushed (see .github/workflow/deploy-gh-pages.yml)
  releaseBranch: 'gh-pages',
}

export default userscriptMetadata
