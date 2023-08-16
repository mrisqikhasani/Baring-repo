// declare module '*.jpg' {
//     const jpgPath: string;
//     export default jpgPath;
// }
// declare module '*.jpeg' {
//     const jpegPath: string;
//     export default jpegPath;
// }
// declare module '*.svg' {
//     const svgPath: string;
//     export default svgPath;
// }
// declare module '*.png' {
//     const pngPath: string;
//     export default pngPath;
// }

declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.module.css" {
    const content: Record<string, string>;
    export default content;
  }