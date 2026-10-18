// トップページ(/)へのアクセスに、school-escape.html を返す。
// ゲームのファイル名が index.html ではないため、Cloudflare Pages がトップページを見つけられるようにする。
export async function onRequest(context) {
    const url = new URL(context.request.url);
    url.pathname = "/school-escape";
    return context.env.ASSETS.fetch(new Request(url,context.request));
}
