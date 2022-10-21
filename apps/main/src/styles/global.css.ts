import { globalFontFace, globalStyle, style } from "@vanilla-extract/css";

// fonts
const interVar = "InterVar";

globalFontFace(interVar, {
  src: 'url(/fonts/InterDisplay-roman.var.woff2) format("woff2")',
});

export const font = style({
  fontFamily: interVar,
});

// resets

globalStyle(
  "html, body, div, span, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, code, label",
  {
    margin: 0,
    padding: 0,
    border: 0,
    boxSizing: "border-box",
    fontSize: "100%",
    font: "inherit",
    verticalAlign: "baseline",
  }
);

globalStyle("a", {
  textDecoration: "none",
});
