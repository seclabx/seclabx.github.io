#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

function moveFiles(src, dest) {
  if (!fs.existsSync(src)) return

  const items = fs.readdirSync(src)

  items.forEach((item) => {
    const srcPath = path.join(src, item)
    const destPath = path.join(dest, item)

    if (fs.statSync(srcPath).isDirectory()) {
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true })
      }
      moveFiles(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  })
}

// Move files from out/ to root
moveFiles("./out", "./")

// Clean up out directory
if (fs.existsSync("./out")) {
  fs.rmSync("./out", { recursive: true, force: true })
}

console.log("Build files moved to root directory for GitHub Pages deployment")
