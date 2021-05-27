const path = require('path');
const fs = require('fs');

const arg = process.argv[2];
const arg2 = process.argv[3];
const wbcpath = path.resolve(__dirname, '../webpack.config.js');
const babelrcpath = path.resolve(__dirname, '../.babelrc');
const configpath = path.resolve(__dirname, '../config.xml');
const logopath = path.resolve(__dirname, '../res/icon/android/values/ic_launcher_background.xml');

const logoTextPaid = `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="ic_launcher_background">#3a3e54</color>
</resources>`;

try {

  let wbc = fs.readFileSync(wbcpath, 'utf8');
  let babelrc = fs.readFileSync(babelrcpath, 'utf8');
  let config = fs.readFileSync(configpath, 'utf8');
  let logo;
  babelrc = JSON.parse(babelrc);

  if (arg === 'd') {
    wbc = wbc.replace(/mode: '.*'/g, "mode: 'development'");
    babelrc.compact = false;
  } else if (arg === 'p') {
    wbc = wbc.replace(/mode: '.*'/g, "mode: 'production'");
    babelrc.compact = true;
  }

  logo = logoTextPaid;

  fs.writeFileSync(logopath, logo, 'utf8');
  fs.writeFileSync(configpath, config, 'utf8');
  fs.writeFileSync(wbcpath, wbc, 'utf8');
  babelrc = JSON.stringify(babelrc, undefined, 2);
  fs.writeFileSync(babelrcpath, babelrc, 'utf8');
  process.exit(0);

} catch (error) {

  console.error(error);
  process.exit(1);

}