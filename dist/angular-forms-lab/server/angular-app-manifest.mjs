
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/register",
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LU4RISB5.js",
      "chunk-DMLLG2B6.js",
      "chunk-SX7BILZS.js",
      "chunk-BBXUIIIA.js",
      "chunk-MJBCULME.js",
      "chunk-5UF67QOG.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UPU3DIL3.js",
      "chunk-XUGXCQ4S.js",
      "chunk-BBXUIIIA.js",
      "chunk-5UF67QOG.js"
    ],
    "route": "/order"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PIBR2QGO.js",
      "chunk-DMLLG2B6.js",
      "chunk-MJBCULME.js",
      "chunk-5UF67QOG.js"
    ],
    "route": "/account"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TP2VT7TA.js",
      "chunk-SX7BILZS.js",
      "chunk-XUGXCQ4S.js",
      "chunk-BBXUIIIA.js",
      "chunk-MJBCULME.js",
      "chunk-5UF67QOG.js"
    ],
    "route": "/scholarship"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24797, hash: '305695d516f4920d5fdf4d32a6d3d8895925f4af8e3399e94c41bebb84d2a7a5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17313, hash: 'c443d923aca53dffe9b53ef4911b48333c622c1e28ba2e8653531a75be6c1cfa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'account/index.html': {size: 44256, hash: 'f54652e1a8841983dac9180308282a11833858708f93d70083f213bd6fa5494a', text: () => import('./assets-chunks/account_index_html.mjs').then(m => m.default)},
    'order/index.html': {size: 119396, hash: '85938255456d3d526c7f911e0b8528c3f1763dc0f4ab5e0063e27b6e76afaf8f', text: () => import('./assets-chunks/order_index_html.mjs').then(m => m.default)},
    'scholarship/index.html': {size: 112913, hash: 'f54558834e231097dda6aba9182e810b36295558b4ed576bf349aef3bddc2eda', text: () => import('./assets-chunks/scholarship_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 139694, hash: 'd3c6529dbeea9c7d06e006e20205a55eb807d4bd622da01773279366ee945e98', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-ZBVIJ7QN.css': {size: 8043, hash: '36OwOxjXVAA', text: () => import('./assets-chunks/styles-ZBVIJ7QN_css.mjs').then(m => m.default)}
  },
};
