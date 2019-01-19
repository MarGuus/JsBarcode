import jsbarcode from '../lib/JsBarcode';
import ean13 from '../lib/barcodes/EAN_UPC/EAN13';
import svg from '../lib/renderers/svg';
import canvas from '../lib/renderers/canvas';

jsbarcode(document.getElementById("barcode"), "9780199532179", {
    encoder: ean13,
    renderer: svg,
    displayValue:true,
    fontSize:24,
});

jsbarcode(document.getElementById("barcode2"), "9780199532179", {
    encoder: ean13,
    renderer: canvas,
    displayValue:true,
    fontSize: 20,
});