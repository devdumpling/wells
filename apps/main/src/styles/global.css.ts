// Globally scope fonts
import { globalFontFace, style } from "@vanilla-extract/css";

const interVar = "InterVar";

globalFontFace(interVar, {
  src: 'url(/fonts/InterDisplay-roman.var.woff2) format("woff2")',
});

export const font = style({
  fontFamily: interVar,
})
