import { DEFAULT_METADATA_SCHEMA, distFileName } from 'userscripter/build'
import { Metadata, StringItem } from 'userscript-metadata'
import U from './src/userscript'

export type ViolentMonkeyMetadata = Metadata & {
  name: string
  run_at: string
  match: string[]
  version: string
  author?: string
  description?: string
  namespace?: string
  icon?: string
  license?: string
  noframes?: true
  grant?: string
  downloadURL?: string
  supportURL?: string
  homepageURL?: string
  'exclude-match'?: string[]
  include?: string[]
  exclude?: string[]
}

export const MetadataSchema = {
  ...DEFAULT_METADATA_SCHEMA,
  items: {
    ...DEFAULT_METADATA_SCHEMA.items,
    homepageURL: new StringItem({
      key: 'homepageURL',
      unique: true,
      required: false,
    }),
    supportURL: new StringItem({
      key: 'supportURL',
      unique: true,
      required: false,
    }),
    downloadURL: new StringItem({
      key: 'downloadURL',
      unique: true,
      required: false,
    }),
  },
}

export function generateDownloadUrlFromRepositoryUrl(repositoryUrl: string): string {
  const gitRepoExtractorRegex = /^(?:https|git|git\+ssh)[:@](?:\/\/)?[^/:]+[/:]([^/:]+\/.+).git$/
  const match = repositoryUrl.match(gitRepoExtractorRegex)
  if (match !== null && match.length === 2) {
    return `https://raw.githubusercontent.com/${match[1]}/${U.releaseBranch}/${distFileName(U.id, 'user')}`
  }
  return ''
}

// Will generate the metadata for the code as userscript
export default function metadataConfigFactory(): ViolentMonkeyMetadata {
  return {
    name: U.name,
    description: U.description,
    version: U.version,
    author: U.author,
    grant: 'none',
    match: [`*://${U.hostname}/*`, `*://www.${U.hostname}/*`],
    namespace: 'greasyfork-namespace-url',
    downloadURL: generateDownloadUrlFromRepositoryUrl(U.repositoryURL),
    noframes: true,
    homepageURL: U.homepage,
    supportURL: U.support,
    run_at: U.run_at,
    license: U.license,
  }
}
