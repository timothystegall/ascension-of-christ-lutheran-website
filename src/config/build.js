import esbuild from 'esbuild';
import { execSync } from 'child_process';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';

export default async function(config) {

  /**
   * Build CSS with Tailwind via PostCSS and JavaScript with esbuild
   */
  config.on('afterBuild', async () => {
    // Process CSS with Tailwind
    const cssInput = readFileSync('src/assets/styles/styles.css', 'utf8');
    const result = await postcss([tailwindcss]).process(cssInput, {
      from: 'src/assets/styles/styles.css',
      to: 'public/assets/styles/styles.css',
    });
    mkdirSync('public/assets/styles', { recursive: true });
    writeFileSync('public/assets/styles/styles.css', result.css);

    // Bundle JavaScript
    await esbuild.build({
      entryPoints: ['src/assets/scripts/main.js'],
      outfile: 'public/assets/scripts/main.js',
      bundle: true,
      minify: false,
      sourcemap: false,
    });
  });

  /**
   * Run Pagefind to generate search index
   */
  config.on('eleventy.after', ({ dir, _results, _runMode, _outputMode }) => {
    const outputDir = dir.output;
    execSync(`./node_modules/.bin/pagefind --site ${outputDir} --output-path ${outputDir}/assets/search --glob "**/*.html"`, { encoding: 'utf-8' });
  });
}
