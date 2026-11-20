$ErrorActionPreference = "Stop"
$root = "C:\Users\ASUS\.zcode\workspace\draft-91d8f7d3-833f-4a31-9532-db7e306c8f17"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://127.0.0.1:8123/")
$listener.Start()
Write-Output "SERWER NA http://127.0.0.1:8123/"
while ($listener.IsListening) {
  try {
    $ctx = $listener.GetContext()
    $path = $ctx.Request.Url.AbsolutePath
    if ($path -eq "/") { $path = "/index.html" }
    $file = Join-Path $root ($path -replace "/", "\")
    if ((Test-Path $file -PathType Leaf) -and ($file.StartsWith($root))) {
      $bytes = [IO.File]::ReadAllBytes($file)
      $ext = [IO.Path]::GetExtension($file)
      if ($ext -eq ".html") { $ctx.Response.ContentType = "text/html; charset=utf-8" }
      elseif ($ext -eq ".js") { $ctx.Response.ContentType = "text/javascript" }
      else { $ctx.Response.ContentType = "application/octet-stream" }
      $ctx.Response.ContentLength64 = $bytes.Length
      $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $ctx.Response.StatusCode = 404
      $b = [Text.Encoding]::UTF8.GetBytes("404")
      $ctx.Response.OutputStream.Write($b, 0, $b.Length)
    }
    $ctx.Response.Close()
  } catch { }
}
