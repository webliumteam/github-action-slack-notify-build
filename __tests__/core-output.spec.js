const fs = require('fs');
const path = require('path');

describe('bundled action outputs', () => {
  it('ships the GitHub output environment-file implementation', () => {
    const bundle = fs.readFileSync(path.resolve(__dirname, '../dist/index.js'), 'utf8');

    expect(bundle).toContain("process.env['GITHUB_OUTPUT']");
    expect(bundle).toContain("issueFileCommand)('OUTPUT'");
    expect(bundle).toContain("core.setOutput('message_id', response.ts)");
  });
});
