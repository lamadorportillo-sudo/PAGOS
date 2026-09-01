# Portal Inteligente para la Gestión Integral de Proyectos Municipales

Proyecto académico desarrollado como portal corporativo para centralizar información financiera y técnica de proyectos municipales.

## Objetivo

Documentar proyectos, pagos, contratistas, bitácoras, notas y reportes, relacionando cada desembolso con el seguimiento de la obra y manteniendo trazabilidad de la información.

## Módulos incluidos

- Inicio
- Dashboard
- Proyectos
- Pagos
- Contratistas
- Bitácora
- Notas
- Reportes
- FAQ
- Contacto
- Chatbot
- WhatsApp
- Mapa

## Tecnologías

- HTML5
- CSS3
- JavaScript ES6+
- Google Apps Script
- Google Sheets
- GitHub / GitHub Pages
- Notion para gestión del proyecto

## Integración con Google Sheets

- ID de Google Sheet: `1Smd-KPxGMsaC1okvBIjGzCeDjRnupMjnUxAv7HKDtBU`
- Hoja: `PAGOS`
- Apps Script desplegado: `https://script.google.com/macros/s/AKfycbwn-MaOezQDOWj69oK8PKBqEHhUl2yjY6h5To6Azxl93FOXWNvNzzkN2Jhgb0lYuyUvsw/exec`

El archivo `CodigoAppsScript.gs` contiene la versión de referencia del código del lado de Google Apps Script.

## Fotografías requeridas

Las fotografías deben colocarse en el repositorio con estas rutas relativas exactas:

```text
imagenes/centro de salud.jpg
imagenes/cerca perimetral.jpg
imagenes/escuela.jpg
imagenes/casa comunal.png
```

No se utilizan fotografías de Internet. Si una imagen todavía no está disponible en el repositorio, el portal muestra un respaldo visual local sin depender de servicios externos.

## Proyectos incluidos

1. Centro de Salud – Reposición del CIS Gabino Argueta, Los Planes.
2. Cerca Perimetral – proyectos de cercas perimetrales en distintas comunidades.
3. Escuela – aulas, reparaciones, módulos sanitarios y mejoramientos escolares.
4. Casa Comunal – casas comunales en diferentes comunidades.

## Formulario de pagos

Campos: N.°, FECHA CHEQUE, ORDEN DE PAGO, FACTURA, CÓDIGO, CONTRATISTA, CONCEPTO, PROYECTO, ANTICIPO, CALIDAD, ESTIMACIÓN, RET. G. ANTICIPO, MULTA POR INCUMPLIMIENTO, ISR, RET. G. CALIDAD y PAGO.

Reglas del campo PAGO:

- Anticipo: PAGO = ANTICIPO.
- Estimación: PAGO = ESTIMACIÓN - RET. G. ANTICIPO - MULTA - ISR - RET. G. CALIDAD.
- Calidad: PAGO = CALIDAD.
- Los montos se presentan con dos decimales.

## Gestión en Notion

Se creó un espacio de gestión con actividades, estados, responsable, fechas, prioridad, riesgos y evidencias. La misma base incluye vistas de Tabla, Kanban, Calendario y Timeline.

## Evidencias recomendadas para la entrega

1. Inicio y Dashboard.
2. Proyectos con las cuatro fotografías.
3. Formulario de pagos y registro reflejado en Google Sheets.
4. Chatbot, FAQ, WhatsApp y mapa.
5. Repositorio de GitHub.
6. Código y despliegue de Apps Script.
7. Notion: Tabla, Kanban, Calendario y Timeline.
8. Portal publicado mediante GitHub Pages.

## Estado

El portal y la gestión de Notion están desarrollados. Antes de entregar, debe confirmarse que las cuatro fotografías estén físicamente cargadas en la carpeta `imagenes/` del repositorio y verificar el enlace público de GitHub Pages.
