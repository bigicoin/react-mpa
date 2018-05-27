if (process.env.NODE_ENV === 'production') {
  require('./server/dist')(require('./client'));
} else {
  require("babel-core/register");
  require("babel-polyfill");
  require('./server/src')(require('./client'));
}
