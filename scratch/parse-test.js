import ts from 'typescript';
import fs from 'fs';

const pagePath = '/Users/Yasin/Documents/Antigravity/AG 2/app/page.tsx';

try {
  const fileContent = fs.readFileSync(pagePath, 'utf8');

  // Create a source file to parse
  const sourceFile = ts.createSourceFile(
    'page.tsx',
    fileContent,
    ts.ScriptTarget.Latest,
    true, // setParentNodes
    ts.ScriptKind.TSX
  );

  // Get diagnostics
  const diagnostics = sourceFile.parseDiagnostics || [];

  if (diagnostics.length === 0) {
    console.log('No syntax errors found by TypeScript compiler!');
  } else {
    console.log(`Found ${diagnostics.length} syntax errors:`);
    diagnostics.slice(0, 10).forEach((diag, index) => {
      const { line, character } = ts.getLineAndCharacterOfPosition(sourceFile, diag.start);
      console.log(`\n--- Error #${index + 1} ---`);
      console.log(`Line ${line + 1}, Column ${character + 1}:`);
      console.log(diag.messageText);
      
      // Print the line content
      const lines = fileContent.split('\n');
      if (lines[line]) {
        console.log(`Code: ${lines[line].trim()}`);
      }
    });
  }

} catch (error) {
  console.error('Error running TS parser:', error);
}
