const template = `
  <html>
    <head>
      <title>${process.env.TITLE}</title>
    </head>
    <body style="background: #6059ff;text-align:center;margin:0; padding:0;">
      <h1 style="color:#fff;font-family:sans-serif;">Loading</h1>
      <img src='/loading.gif' />
      <script type='text/javascript' src='/loadPage.js'></script>
    </body>
  </html>
`;

export default template;
