// incomplete definitions for https://github.com/jquery/jquery-color

declare enum RGBA {red, green, blue, alpha}

interface JqueryColor {
    red(): number;
    red(val:number): JqueryColor;
    green(): number;
    green(val:number): JqueryColor;
    blue(): number;
    blue(val:number): JqueryColor;
    hue(): number;
    hue(val:number): JqueryColor;
    saturation(): number;
    saturation(val:number): JqueryColor;
    lightness(): number;
    lightness(val:number): JqueryColor;

    rgba(): RGBA
    rgba(red:number, green:number, blue:number, alpha:number): void;
    rgba(rgba:{red:number; green:number; blue:number; alpha:number}): void;
    rgba(RGBA): void;

    toRgbaString():string;
    toHslaString():string;
    toHexString(includeAlpha:boolean):string;
}

interface JQueryStatic {
    Color(color:string):JqueryColor;
}