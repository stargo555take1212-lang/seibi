// 最小限のservice worker。
// これがあることでAndroid Chromeが「インストール可能なアプリ」と判断し、
// ホーム画面に追加したときにmanifest.jsonのアイコンを正しく使うようになります。
self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('activate', () => {
  self.clients.claim();
});
self.addEventListener('fetch', () => {
  // 特別なキャッシュ処理はせず、通常通りネットワークから取得する
});
