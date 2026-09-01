const SHEET_ID = '1Smd-KPxGMsaC1okvBIjGzCeDjRnupMjnUxAv7HKDtBU';
const SHEET_NAME = 'PAGOS';

const HEADERS = [
  'Fecha_Registro',
  'N.',
  'FECHA CHEQUE',
  'ORDEN DE PAGO',
  'FACTURA',
  'CÓDIGO',
  'CONTRATISTA',
  'CONCEPTO',
  'PROYECTO',
  'ANTICIPO',
  'CALIDAD',
  'ESTIMACIÓN',
  'RET. G. ANTICIPO',
  'MULTA POR INCUMPLIMIENTO',
  'ISR',
  'RET. G. CALIDAD',
  'PAGO'
];

function getSheet_() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function doGet(e) {
  try {
    const sheet = getSheet_();
    const values = sheet.getDataRange().getDisplayValues();
    const headers = values.length ? values[0] : HEADERS;
    const rows = values.slice(1).filter(r => r.some(v => String(v).trim() !== ''));
    const data = rows.map(row => {
      const obj = {};
      headers.forEach((h, i) => obj[h] = row[i] !== undefined ? row[i] : '');
      return obj;
    });

    const callback = e && e.parameter ? e.parameter.callback : '';
    const json = JSON.stringify(data);
    if (callback && /^[a-zA-Z_$][0-9a-zA-Z_$\.]*$/.test(callback)) {
      return ContentService.createTextOutput(callback + '(' + json + ')')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
    return ContentService.createTextOutput(json)
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok:false,error:String(err.message || err)}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    const p = (e && e.parameter) ? e.parameter : {};
    const sheet = getSheet_();

    const row = [
      new Date(),
      p.n || '',
      p.fecha || p.cheque || '',
      p.orden || '',
      p.factura || '',
      p.codigo || '',
      p.contratista || '',
      p.concepto || '',
      p.proyecto || '',
      toNumber_(p.anticipo),
      toNumber_(p.calidad),
      toNumber_(p.estimacion),
      toNumber_(p.retAnticipo),
      toNumber_(p.multa),
      toNumber_(p.isr),
      toNumber_(p.retCalidad),
      toNumber_(p.pago)
    ];

    sheet.appendRow(row);
    const last = sheet.getLastRow();
    if (last > 1) {
      sheet.getRange(last, 10, 1, 8).setNumberFormat('L. #,##0.00');
    }

    return ContentService.createTextOutput(JSON.stringify({ok:true,row:last,message:'Registro guardado'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok:false,error:String(err.message || err)}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function toNumber_(value) {
  if (value === '' || value === null || value === undefined) return 0;
  const n = Number(String(value).replace(/,/g, ''));
  return isNaN(n) ? 0 : n;
}
