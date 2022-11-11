const mix = require("laravel-mix")

mix
  .disableSuccessNotifications()
  .setPublicPath("assets")
  .ts("resources/ts/app.ts", "js")
  .postCss("resources/css/style.css", "css")