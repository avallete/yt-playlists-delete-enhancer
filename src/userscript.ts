// Use package.json as "unique source of truth" for multiples infos
import { Metadata } from 'userscript-metadata'
import package_json from '../package.json'

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
  id: package_json.name, // Used to generate the final dist files (like so: `${id}.user.js`)
  name: package_json.name, // Used into metadata and manifest.json as extension/userscript name
  description: package_json.description,
  version: package_json.version, // Automatically match the userscript metadata version to the package.json one
  author: package_json.author,
  homepage: package_json.homepage,
  support: package_json.bugs.url,
  hostname: 'youtube.com', // Will be used to generate matches (see: metadata.ts)
  sitename: package_json.repository.url, // Used to generate the downloadURL of your userscript into metadata.ts
  repositoryURL: package_json.repository.url,
  license: package_json.license,
  run_at: 'document-idle',
  // Will be used to generate the downloadURL into metadata.ts
  // Make sure it match the branch where final release are pushed (see .github/workflow/deploy-gh-pages.yml)
  releaseBranch: 'gh-pages',
}

export default userscriptMetadata
