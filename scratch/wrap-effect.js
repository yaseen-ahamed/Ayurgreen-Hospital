import fs from 'fs';

const pagePath = '/Users/Yasin/Documents/Antigravity/AG 2/app/page.tsx';

try {
  let content = fs.readFileSync(pagePath, 'utf8');

  // We want to insert variable declarations at the start of useEffect
  const targetStart = '  useEffect(() => {\n    const gsap = (window as any).gsap;';
  
  const replacementStart = `  useEffect(() => {
    let active = true;
    let videoSliderInterval: any;
    let handleRehabResize: () => void = () => {};
    let handleVideoResize: () => void = () => {};

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(\`script[src="\${src}"]\`)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject();
        document.head.appendChild(script);
      });
    };

    Promise.all([
      loadScript("https://unpkg.com/lucide@latest"),
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js")
    ]).then(() => {
      return loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js");
    }).then(() => {
      if (!active) return;

      const gsap = (window as any).gsap;`;

  content = content.replace(targetStart, replacementStart);

  // We need to declare handleRehabResize and handleVideoResize within the promise block
  // but assign them to the outer variables so they are accessible for cleanup.
  content = content.replace('    const handleRehabResize = () => {', '    handleRehabResize = () => {');
  content = content.replace('    const handleVideoResize = () => {', '    handleVideoResize = () => {');
  
  // Assign videoSliderInterval inside the promise block
  content = content.replace('    let videoSliderInterval: any;', '');
  content = content.replace('    videoSliderInterval = setInterval(() => slideVideos(1), 3500);', '    videoSliderInterval = setInterval(() => slideVideos(1), 3500);');

  // We want to close the promise chain at the end of the useEffect initializers
  const targetEnd = `    // ─── Compile & execute main.js logic ───
    import('../main.js').then((module) => {
        // Module runs its setup code immediately
    });`;

  const replacementEnd = `    // ─── Compile & execute main.js logic ───
      import('../main.js').then((module) => {
          // Module runs its setup code immediately
      });
    });`;

  content = content.replace(targetEnd, replacementEnd);

  fs.writeFileSync(pagePath, content, 'utf8');
  console.log('Successfully wrapped useEffect inside script loader promise!');

} catch (error) {
  console.error('Error wrapping useEffect:', error);
}
