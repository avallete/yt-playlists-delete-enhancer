import { distFileName } from 'userscripter/build'
import Manifest from 'webextension-manifest'

import metadataFactory from './metadata'
import U from './src/userscript'

const metadata = metadataFactory()

type RunAt = 'document_start' | 'document_end' | 'document_idle'

// Used to translate the userscript meta syntax to webextension
const runAtMetadataToManifest: { [key: string]: RunAt } = {
  'document-end': 'document_end',
  'document-start': 'document_start',
  'document-idle': 'document_idle',
}

// Will generate the manifest.json for the code as web extension
export default function manifestConfigFactory(): Manifest {
  return {
    manifest_version: 2,
    name: metadata.name,
    version: metadata.version,
    description: metadata.description,
    author: metadata.author,
    content_scripts: [
      {
        matches: metadata.match,
        js: [distFileName(U.id, 'user')],
        run_at: runAtMetadataToManifest[metadata.run_at],
        // Must be true to load the extension into cypress e2e tests scenario
        all_frames: process.env.NODE_ENV === 'test' ? true : !metadata.noframes,
      },
    ],
  }
}
