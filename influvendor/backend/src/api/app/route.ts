import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"

const REDIRECT_URL =
  process.env.APP_REDIRECT_URL || process.env.STOREFRONT_URL || ""

const FALLBACK_HTML = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>API Backend</title></head>
<body>
  <h1>API Backend</h1>
  <p>This is the Medusa API server. It does not serve a UI at <code>/app</code>.</p>
  <p>Set <code>APP_REDIRECT_URL</code> or <code>STOREFRONT_URL</code> in the backend environment to redirect <code>/app</code> to your storefront.</p>
</body>
</html>`

export async function GET(_req: MedusaRequest, res: MedusaResponse) {
  if (REDIRECT_URL) {
    return res.redirect(302, REDIRECT_URL)
  }
  res.setHeader("Content-Type", "text/html")
  return res.status(200).send(FALLBACK_HTML)
}
