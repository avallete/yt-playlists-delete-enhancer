import test from 'ava'
import * as sinon from 'sinon'
import U from '~src/userscript'
import metadataFactory, { generateDownloadUrlFromRepositoryUrl } from '../metadata'

let sandbox: sinon.SinonSandbox

test.beforeEach(() => {
  sandbox = sinon.createSandbox()
  sandbox.stub(U, 'id').value('stubid')
  sandbox.stub(U, 'releaseBranch').value('stubreleaseBranch')
  sandbox.stub(U, 'name').value('stubname')
  sandbox.stub(U, 'version').value('stubversion')
})

test.afterEach(() => {
  sandbox.restore()
})

test('generateDownloadUrlFromRepositoryUrl: should extract repo from github ssh url', (t) => {
  t.is(
    generateDownloadUrlFromRepositoryUrl('git@github.com:some-user/my-repo.git'),
    `https://raw.githubusercontent.com/some-user/my-repo/stubreleaseBranch/stubid.user.js`
  )
})
test('generateDownloadUrlFromRepositoryUrl: should extract repo from github https url', (t) => {
  t.is(
    generateDownloadUrlFromRepositoryUrl('https://github.com/some-user/my-repo.git'),
    `https://raw.githubusercontent.com/some-user/my-repo/stubreleaseBranch/stubid.user.js`
  )
})
test('generateDownloadUrlFromRepositoryUrl: should extract repo from git:// url', (t) => {
  t.is(
    generateDownloadUrlFromRepositoryUrl('git://github.com/some-user/my-repo.git'),
    `https://raw.githubusercontent.com/some-user/my-repo/stubreleaseBranch/stubid.user.js`
  )
})
test('generateDownloadUrlFromRepositoryUrl: should extract repo from git+ssh:// url', (t) => {
  t.is(
    generateDownloadUrlFromRepositoryUrl('git+ssh://github.com/some-user/my-repo.git'),
    `https://raw.githubusercontent.com/some-user/my-repo/stubreleaseBranch/stubid.user.js`
  )
})
test('generateDownloadUrlFromRepositoryUrl: should return empty string if non-git url', (t) => {
  t.is(generateDownloadUrlFromRepositoryUrl('https://www.google.com/'), '')
})
test('generateDownloadUrlFromRepositoryUrl: should return empty string with empty string', (t) => {
  t.is(generateDownloadUrlFromRepositoryUrl(''), '')
})

test('metadataFactory: should return a valid metadata object with all required keys', (t) => {
  const metadata = metadataFactory()
  t.assert('name' in metadata)
  t.assert('run_at' in metadata)
  t.assert('version' in metadata)
  t.assert('match' in metadata)
})

test('metadataFactory: should get name and version data from userscript', (t) => {
  const metadata = metadataFactory()
  t.assert(metadata.name === 'stubname')
  t.assert(metadata.version === 'stubversion')
})
