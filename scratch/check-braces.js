import fs from 'fs';

const pagePath = '/Users/Yasin/Documents/Antigravity/AG 2/app/page.tsx';

try {
  const content = fs.readFileSync(pagePath, 'utf8');

  let openCount = 0;
  let closeCount = 0;
  let inString = false;
  let stringChar = '';
  let inComment = false;
  let inRegex = false;

  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    const nextChar = content[i + 1];
    
    // Simple state machine to skip strings and comments
    if (inComment) {
      if (char === '*' && nextChar === '/') {
        inComment = false;
        i++;
      } else if (char === '\n' && stringChar === '//') {
        inComment = false;
      }
      continue;
    }
    
    if (inString) {
      if (char === '\\') {
        i++; // skip next char
      } else if (char === stringChar) {
        inString = false;
      }
      continue;
    }

    if (char === '/' && nextChar === '*') {
      inComment = true;
      stringChar = '/*';
      i++;
      continue;
    }
    
    if (char === '/' && nextChar === '/') {
      inComment = true;
      stringChar = '//';
      i++;
      continue;
    }

    if (char === '"' || char === "'" || char === '`') {
      inString = true;
      stringChar = char;
      continue;
    }

    if (char === '{') {
      openCount++;
    } else if (char === '}') {
      closeCount++;
    }
  }

  console.log(`Braces: open=${openCount}, close=${closeCount}, diff=${openCount - closeCount}`);

} catch (error) {
  console.error(error);
}
