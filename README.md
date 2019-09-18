# Export

Helps automate exporting process. Replace YOUR_REMOTE_HERE and add it to your packjson. This is specific for windows

```
"wexport": "next build && next export && type nul > out/.nojekyll && cd ./out && git init && git remote add github YOUR_REMOTE_HERE && git add . && git commit -m \"automated commit\" && git push github master -f
```