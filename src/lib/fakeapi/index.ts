// TEMP until api is implemented

export const consoles: { [id: string]: { title: string } } = {
  n64: {
    title: "Nintendo 64"
  }
};

export const games = {
  "uuid_n64_papermario": {
    console: "n64",
    slug: "papermario",
    title: "Paper Mario"
  },
  "uuid_n64_sm64": {
    console: "n64",
    slug: "sm64",
    title: "Super Mario 64"
  },
};

export const hacks = {
  "uuid_n64_papermario_ttyd64": {
    game: "uuid_n64_papermario",
    slug: "ttyd64",
    title: "Paper Mario: TTYD64",
    trailerYouTubeId: "HFngd-Uq6p0",
    heroLogo: "https://camo.githubusercontent.com/410ab6ce6f0f5196280c1b91a18413760b60ef546034fe6a2901b9db571f4375/68747470733a2f2f692e696d6775722e636f6d2f7a43646c4171782e706e67",
    heroBackground: "https://camo.githubusercontent.com/515292d0351cbb1c2ac82f5bad5274443a043bc3cf30733203b3120aa1c67c6d/68747470733a2f2f692e696d6775722e636f6d2f4a437a6b4b506f2e706e67",
    markdownDescription: `
**What's TTYD64?**
TTYD64 is a PM64 romhack that adds TTYD's gameplay, items, badges, and recipes into PM64, plus a bunch of new areas into the game.

**Some of the new content includes:**
+60 New Badges
+50 New Items
+35 New Star Pieces
+30 Shine Sprites
+35 New Maps
+70 Modified Maps
And much more!

# Credits
**Romhack by:** [elDexter](https://www.youtube.com/channel/UCu4pDFUCpP6oeXNjerf7GfQ)

**New Badges sprites:** [BossBuzz](https://twitter.com/bossbuzz64)
**New items and recipes sprites:** [Typografx](https://twitter.com/typografx)
**Miscellaneous new sprites:** [BossBuzz](https://twitter.com/bossbuzz64), special thanks to Brotenko too!
**New enemies sprites:** [ShyGuyXXL](https://twitter.com/ShyGuyXXL), Starzee, Riviera, fraiseffddf4

**Game Artwork/BG:** [BossBuzz](https://twitter.com/bossbuzz64)
**Game Logo:** [Kevin Arthur LS](https://twitter.com/KevinArthurLS)

**Music:** StevenBlue

**With special thanks to:**
PM64's decomp team, Jdaster64, JaThePlayer, ShadeBlade, Zephiles & ZoomZike.

# FAQ
> **Project64: "R4300i opcode" error**

After attempting to load the ROM, go to settings. Under Paper Mario, change 4 MB ram to 8 MB. Then, click on Recompiler by expanding the Paper Mario settings. Uncheck register caching and save your changes.

> **Where do I report bugs?**

You can report bugs in my discord server:
https://discord.gg/HZ9zqPK2ax

> **Is this a demake of TTYD into PM64?**

No
`,
    downloadUrl: "/mod.mod",
  },
};
