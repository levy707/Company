export default function () {
  // Add hook for build
  const compress = process.env.COMPRESS_MODE ? JSON.parse(process.env.COMPRESS_MODE.toLowerCase()) : false;
  this.nuxt.hook('generate:page', (builder) => {
    if (compress === true) {
      let jsPath = builder.html;
      const regex = /_nuxt\/\w{16}.js"/gm;
      const pathList = jsPath.match(regex);
      const pathListToReplace = pathList
        .filter((path, index) => pathList.indexOf(path) === index)
        .map((path) => {
          return {
            oldPath: path,
            newPath: path.replace('.js"', '.js.gz"'),
          };
        });
      pathListToReplace.map(({ newPath, oldPath }) => {
        jsPath = jsPath.replace(new RegExp(oldPath, 'g'), newPath);
      });
      builder.html = jsPath;
    }
    console.info(`generate:page - ${builder.path}`);
  });
}
