/*
  iunigo_findings_octubre_2026.js
  Contenido editable de "Descubrimientos y próximos pasos".
  Octubre 2026 (mes cerrado) · comparativa vs. septiembre 2026.
  Métricas de plataforma: Master Metrics. Leads y cierres: CRM de iúnigo (planilla "iunigo - Data 2026", hoja Anual).
  Plan de inversión: "iúnigo - Data 2026" (hoja MediaPlan/Proyeccion v2, noviembre).
  Actualizado 2026-11-03.

  Estructura:
    - total / google / meta / bing / tiktok: tarjetas "qué detectamos → por qué importa → qué hacemos".
    - pasos.total: lista corta de próximos pasos que se muestra al pie de la vista consolidada.
*/
window.IUNIGO_FINDINGS = {
  "_meta": {
    "cliente": "iúnigo",
    "periodo": "Octubre 2026",
    "comparativo": "vs. septiembre 2026",
    "actualizado": "2026-11-03"
  },
  "total": [
    {
      "id": "costo-poliza-octubre",
      "featured": true,
      "stat": "Los leads se sostuvieron, pero cerraron 13 pólizas menos: el costo por póliza sube a $398.001",
      "detectamos": "Con -5,5% de inversión ($25.074.052) y -2,7% de leads (3.097 contra 3.182), el costo por lead del portfolio bajó a $8.096. Sin embargo, las pólizas cerradas de los medios pagos pasaron de 76 a 63 y la tasa de cierre de 2,70% a 2,25%, de modo que el costo por póliza subió de $349.216 a $398.001 (+14,0%). La diferencia está en Google: mantuvo sus leads de CRM (2.155 contra 2.163) pero cerró 52 pólizas contra 65 (tasa de 3,01% a 2,41%).",
      "importa": "La eficiencia de medios mejoró, así que el movimiento del costo por póliza se explica después del lead, en la conversión a venta. Septiembre fue el mejor mes del año en tasa de cierre de Google (3,00% en la planilla): octubre queda por encima de junio y julio (2,06% y 2,13%), por lo que puede ser una vuelta al rango habitual y no un deterioro. Es una lectura a validar, no una conclusión.",
      "accion": "Opciones a evaluar junto a iúnigo: (1) revisar con Meli si cambió algo en el proceso de contacto o en el mix de productos entre septiembre y octubre; (2) seguir el costo por póliza semanal contra la base de $349.216 de septiembre y la de $398.001 de octubre; (3) mantener la inversión de Google mientras no haya evidencia de que la caída del cierre sea estructural."
    },
    {
      "id": "atribucion-salesforce",
      "featured": true,
      "stat": "El origen de una parte importante de los cierres sigue sin poder rastrearse a una campaña",
      "detectamos": "Se hizo el rastreo de acciones y de UTMs de todas las plataformas y se compartió el listado con Meli para terminar de determinar de dónde salen las conversiones que Salesforce registra con fuente «iúnigo» e «IUNIGO». El resultado de la auditoría para Meta es consistente con lo que recibe iúnigo. En septiembre (último dato de CRM completo que tenemos), 44 de los 122 cierres del negocio (36%) llegaron como «Directo / sin campaña asignada»; para octubre solo contamos con el dato de los medios pagos.",
      "importa": "Si parte de esos cierres nació en una campaña paga y perdió su atribución, el costo real por póliza de los medios es menor al que mostramos, y las decisiones de reparto de presupuesto entre plataformas se toman con una foto incompleta. Es la principal limitación de lectura del reporte hoy.",
      "accion": "Ofrecer a iúnigo dos caminos, a elegir según lo que resulte más simple de su lado: (A) compartirnos un acceso de lectura a Salesforce; (B) hacer juntos una auditoría de cómo está configurada la atribución por UTMs en Salesforce. Cualquiera de las dos nos permitiría entender de dónde vienen realmente los cierres."
    },
    {
      "id": "google-eficiencia-octubre",
      "featured": true,
      "stat": "Google generó los mismos leads con 4,8% menos de inversión",
      "detectamos": "Google cerró octubre con 2.171 leads (contra 2.178) y una inversión de $17.403.260 (-4,8%): el costo por lead bajó de $8.391 a $8.016 (-4,5%), un -18% contra el pico de junio ($9.768). La campaña de marca consumió menos porque cayó la búsqueda de marca, y la inversión de búsqueda genérica se redistribuyó hacia Competencia y Performance Max.",
      "importa": "Es la plataforma de menor costo por póliza ($334.678). Que mantenga el volumen gastando menos indica que el ajuste de reparto de septiembre funcionó, y deja presupuesto sin ejecutar que podemos decidir dónde reforzar.",
      "accion": "Sostener el reparto actual y, para noviembre, evaluar dónde conviene colocar el presupuesto que la marca no consume: Competencia y Performance Max son las candidatas porque cerraron octubre por debajo del promedio de la cuenta ($8.391 y $7.019 por lead)."
    }
  ],
  "pasos": {
    "total": [
      {
        "area": "Atribución",
        "texto": "Ofrecer a iúnigo acceso a Salesforce, o una auditoría conjunta de la atribución por UTMs, para identificar de dónde vienen los cierres con fuente «iúnigo» e «IUNIGO»."
      },
      {
        "area": "TikTok",
        "texto": "Pedirle a Meli que nos indique cómo recibe los leads de la plataforma, o revisar juntos las UTMs, para entender por qué 62 conversiones de plataforma no llegan al CRM."
      },
      {
        "area": "Meta",
        "texto": "Hacer un doble click con Meli sobre la baja tasa de conversión a póliza (0,84%): causa de los no cierres y tiempo que demora el llamado del call center."
      },
      {
        "area": "Google",
        "texto": "Validar con una compra de prueba que el evento «Compra finalizada», con la nueva URL vigente desde el 20/10, esté registrando correctamente."
      },
      {
        "area": "Noviembre",
        "texto": "Definir con iúnigo la aprobación del test de anuncios en ChatGPT y su financiamiento, y planificar el cambio de materiales de fines de noviembre."
      }
    ]
  },
  "google": [
    {
      "id": "google-brand-demanda",
      "featured": true,
      "stat": "Menor búsqueda de marca: la campaña de marca gastó 27% menos y generó los mismos leads",
      "detectamos": "Las impresiones de la campaña de marca bajaron de 14.013 a 6.675 (-52%) y la inversión de $2.405.061 a $1.760.312 (-26,8%), pero los leads se mantuvieron (413 contra 403). El costo por lead pasó de $5.963 a $4.262 (-28,5%) y la tasa de conversión de clic a lead subió de 22,2% a 29,2%.",
      "importa": "La campaña de marca captura una demanda que existe o no existe: cuando la búsqueda de marca baja, se gasta menos pero sin perder leads, por eso el costo mejora. Septiembre incluyó la acción de cumpleaños, que pudo haber elevado la búsqueda de marca; es una hipótesis que podemos contrastar con los datos de búsqueda orgánica de iúnigo.",
      "accion": "Mantener la campaña de marca sin forzar presupuesto (el subgasto es una señal sana, no un faltante) y llevar el remanente a las campañas con demanda disponible. Seguir su volumen mes a mes para distinguir un efecto de la acción de septiembre de un cambio de tendencia."
    },
    {
      "id": "google-reparto-generica",
      "featured": true,
      "stat": "Búsqueda genérica: menos inversión, pero el costo por lead sigue por encima de su tope",
      "detectamos": "La búsqueda genérica bajó su inversión de $8.174.682 a $6.208.388 (-24,1%) y sus leads de 810 a 583 (-28,1%). Su costo por lead pasó de $10.088 a $10.651 (+5,6%), 12% por encima del tope de $9.500. En paralelo, Competencia subió 39,8% su inversión y 39,6% sus leads (costo por lead estable en $8.391) y Performance Max subió 9,6% su inversión y 7,6% sus leads ($7.019).",
      "importa": "Reducir presupuesto no abarató el lead de la genérica, lo que sugiere que el costo marginal alto no viene del presupuesto sino de la demanda y la competencia en esos términos. El ajuste de reparto fue favorable: el portfolio de Google sostuvo el volumen con menos gasto.",
      "accion": "Dos opciones a evaluar: (A) seguir reasignando una parte de la genérica a Competencia y Performance Max, que tienen costos por lead menores; (B) revisar los términos de la genérica de mayor costo (detalle en la tabla de búsquedas) antes de seguir bajando presupuesto."
    },
    {
      "id": "google-demand-gen-desdoblada",
      "featured": true,
      "stat": "Demand Gen desdoblada: el remarketing generó 19 conversiones donde antes no había ninguna",
      "detectamos": "La campaña única de Demand Gen, que servía de primer impacto pero no generaba conversiones, se separó en dos: una de awareness con presupuesto mínimo aislado ($321.029; 637.281 impresiones y 34.812 clics) y una de remarketing para visitantes del sitio que no se convirtieron en leads ($267.377). El remarketing cerró con 19 conversiones a $14.102 por lead.",
      "importa": "Se conserva el primer impacto sin que contamine el análisis de conversión y se suma una vía para recuperar visitantes. El costo por lead del remarketing es mayor al promedio de la cuenta ($8.016), por lo que su valor depende de si esos leads cierran. Además, el awareness sumó muchos clics de bajo costo que bajan la tasa de conversión general de Google: es un efecto de composición, no un deterioro.",
      "accion": "Mantener ambas campañas (están en el media plan de noviembre, con $300.000 para awareness y $400.000 para remarketing) y pedir a iúnigo el cierre de esos leads para confirmar si justifican su costo."
    },
    {
      "id": "google-conversiones-medicion",
      "stat": "Cambio de eventos de conversión el 20/10: la compra finalizada todavía no registra",
      "detectamos": "El 20/10 se quitó la conversión «Cotización finalizada» y se dejó como principal «Envío de formulario con conversiones mejoradas». El volumen se mantuvo: 483 conversiones en la semana del cambio y 494 en la siguiente. También se reemplazó la URL de destino del evento «Compra finalizada» por la página de pago finalizado de iúnigo (pago-finalizado/exito). Entre el 20 y el 31 de octubre no se registró ninguna compra finalizada en Google.",
      "importa": "Puede ser que no haya habido compras online atribuibles a Google en esos 12 días, o que el evento no esté disparando bien. Como en septiembre se emitieron 45 pólizas online en total, es esperable ver algunas atribuidas a Google. Era un pendiente de medición, y queremos confirmar que quedó resuelto.",
      "accion": "Hacer una compra de prueba de punta a punta junto al equipo técnico de iúnigo y revisar con Tag Assistant que el evento se dispare en la página final. Si registra, esperar a noviembre para leer volumen real; si no, corregir la etiqueta."
    },
    {
      "id": "google-dispositivo-octubre",
      "stat": "Computadora: -14% de leads con -20% de inversión y mejor costo por lead",
      "detectamos": "La inversión en computadora bajó de $4.269.254 a $3.429.069 (-19,7%) y sus leads de 504 a 434 (-14%), con un costo por lead de $7.909 contra $8.470 (-6,6%). El celular concentra ahora el 79,5% de la inversión de Google (76% en septiembre), con 1.723 leads a $8.027.",
      "importa": "El tráfico se desplaza al celular, donde el costo por lead es similar: no hay una penalización por el cambio de mix.",
      "accion": "Sostener el seguimiento por dispositivo, sin cambios de ajustes por ahora."
    }
  ],
  "meta": [
    {
      "id": "meta-conversion-cierre",
      "featured": true,
      "stat": "Meta convierte 0,84% de sus conversiones de plataforma en pólizas",
      "detectamos": "Las 713 conversiones que reportó Meta en octubre derivaron en 6 pólizas cerradas: 0,84% (en septiembre, 0,86%). Al CRM llegaron 494 leads, 30,7% menos que las conversiones de plataforma, y de esos leads cerró el 1,21%, la tasa más baja de los canales con volumen.",
      "importa": "El costo por lead de Meta mejora mes a mes, pero el costo por póliza ($689.914) depende de lo que ocurre después del formulario. Con los datos que tenemos no podemos saber si el cuello de botella está en la calidad del lead, en el tiempo de contacto o en el proceso comercial.",
      "accion": "Hacer un doble click con Meli sobre dos preguntas: cuál es la causa principal de los leads de Meta que no cierran y cuánto tarda el call center en llamar a un lead de Meta. Con eso podemos decidir si el foco de noviembre está en el creativo y la segmentación, o en la velocidad de contacto."
    },
    {
      "id": "meta-ubicaciones",
      "featured": true,
      "stat": "Leads +2,4% y costo por lead -5,5% tras depurar ubicaciones",
      "detectamos": "A mediados de octubre se excluyeron Audience Network y las aplicaciones, ubicaciones que habían sumado $173.892 en el mes (4,2% de la inversión) con un costo por lead de $6.688. Meta cerró con 713 leads (contra 696) a $5.806 (contra $6.146): segundo mes consecutivo de baja del costo por lead. La última semana del mes fue la de mayor volumen (178 leads) y menor costo ($5.078).",
      "importa": "Las ubicaciones excluidas rendían cerca del promedio, así que su retiro no explica por sí solo la mejora: aporta un mix más limpio y la posibilidad de concentrar la inversión en Instagram y Facebook feed. Dos semanas son una muestra corta para atribuirlo con certeza.",
      "accion": "Mantener la exclusión y confirmar en noviembre, con cuatro semanas completas, si el costo por lead se sostiene por debajo de $6.000."
    },
    {
      "id": "meta-contenido-octubre",
      "featured": true,
      "stat": "Test de contenido de octubre: las piezas nuevas entraron con presupuesto de prueba",
      "detectamos": "La estática 1 de septiembre sigue concentrando el 97% de los leads de captación (508 de 523, a $4.343 por lead, contra $4.765 en septiembre). Las piezas nuevas de octubre en captación sumaron $98.070 y 15 leads. La de mejor resultado, Video Nuevos Leads, cerró 10 leads a $4.769. En remarketing, las piezas de octubre reemplazaron a los reels de septiembre y concentran el 89% del gasto: Video RMK (71 leads a $7.635), Ad 01 RMK v2 (48 leads a $8.317) y Ad 02 RMK (46 leads a $6.948).",
      "importa": "En captación, la mayor parte del volumen depende todavía de una sola pieza. En remarketing, el costo por lead subió 9,3% ($7.100 a $7.763) con 20 leads menos: el recambio de piezas todavía no mejora el resultado.",
      "accion": "Continuar el test de contenido en noviembre, dándole presupuesto suficiente a las piezas nuevas de captación para poder compararlas de igual a igual con la estática 1, y medirlas contra la tasa de cierre de 1,21%."
    },
    {
      "id": "meta-edades-octubre",
      "stat": "El costo por lead de captación mejoró entre los 25 y los 54 años",
      "detectamos": "En captación, el costo por lead bajó entre 12% y 17% en las franjas de 25 a 34 ($4.553), 35 a 44 ($4.514) y 45 a 54 ($4.284), y se mantuvo en 55 a 64 ($4.517). La franja de 65 o más subió 3,5% ($3.961), y la de 18 a 24 pasó de $2.192 a $7.982 con solo 4 leads.",
      "importa": "El público de 45 años en adelante, que se abrió con el mensaje de septiembre, sigue convirtiendo a costos bajos sin el gancho del sorteo.",
      "accion": "Mantener abiertas las franjas de 45 años en adelante en noviembre."
    },
    {
      "id": "meta-trafico-ig",
      "stat": "El carrusel de tráfico a Instagram generó 4.803 clics a $33 cada uno",
      "detectamos": "Post IG «Manejar de noche» invirtió $157.360 en tráfico, con 97.222 impresiones y 4.803 clics, y 1 lead atribuido.",
      "importa": "Es una campaña de tráfico, sin objetivo de lead: se evalúa por clics y por el aporte a la audiencia de remarketing.",
      "accion": "Mantenerla en el plan de noviembre ($200.000) y evaluar su aporte al remarketing."
    }
  ],
  "bing": [
    {
      "id": "bing-demanda-octubre",
      "featured": true,
      "stat": "Menos búsquedas, pero Microsoft sigue siendo el canal con mejor tasa de cierre",
      "detectamos": "Las impresiones bajaron 26,8% (543.018 a 397.707) y la inversión 12,7% (de $3.160.968 a $2.758.917, con IVA). Microsoft generó 151 leads (contra 183) a $18.271 por lead (+5,8%), y cerró 5 pólizas, la misma cantidad que en septiembre, con la tasa de cierre más alta del mix (3,29%). Su costo por póliza fue de $551.783 (-12,7%).",
      "importa": "Microsoft convierte mejor el lead en venta, pero su costo por póliza ($551.783) sigue por encima del de Google ($334.678) porque el lead cuesta más del doble. El menor gasto responde a menos búsquedas disponibles, no a un recorte de presupuesto. Además, los datos de CRM de octubre (152 leads y 5 cierres) coinciden exactamente con los de septiembre: conviene confirmar que sean datos independientes.",
      "accion": "Confirmar con iúnigo los datos de CRM de octubre para Microsoft y, mientras tanto, sostener el canal en su nivel de demanda disponible."
    },
    {
      "id": "bing-presupuesto-noviembre",
      "stat": "Octubre consumió 78% del presupuesto en dólares: el plan de noviembre no lo aumenta",
      "detectamos": "En dólares, octubre consumió US$1.471 de los US$1.877 asignados antes de impuestos (78,4%, contra 89,8% en septiembre). El plan de noviembre prevé $3.231.729 con IVA, equivalente a US$1.723 antes de impuestos: 8% por debajo del presupuesto asignado en septiembre y octubre.",
      "importa": "El aumento de 17% que se ve contra el consumo real de octubre no es un incremento de presupuesto: es volver a un nivel que el canal no llegó a ejecutar por falta de demanda.",
      "accion": "Mantener el plan de noviembre y revisar a mitad de mes si la demanda alcanza para ejecutarlo; si no, reasignar el remanente."
    }
  ],
  "tiktok": [
    {
      "id": "tiktok-crm-utms",
      "featured": true,
      "stat": "TikTok reporta 62 leads y el CRM no registra ninguno",
      "detectamos": "La plataforma reportó 62 conversiones en octubre ($484.009 en la campaña de leads), pero Salesforce no registró ningún lead ni cierre de TikTok. En agosto ingresaron 2 de 136, en septiembre 0 de 125 y en julio 0 de 99. Las UTMs ya se auditaron y el listado está compartido con Meli.",
      "importa": "Sin leads en el CRM no podemos saber si el tráfico de TikTok cierra, y tras cuatro meses de mediciones la decisión de escala o pausa sigue sin sustento.",
      "accion": "Pedirle a Meli que nos indique cómo recibe los leads de la plataforma, o revisar juntos las UTMs, para entender por qué no llegan al CRM. Con ese dato, definir juntos el rol de TikTok en el mix."
    },
    {
      "id": "tiktok-cpl-nuevos-ads",
      "stat": "El costo por lead de TikTok subió a $7.807, con una señal de mejora tras los anuncios nuevos",
      "detectamos": "Los leads cayeron de 125 a 62 (-50%) con una inversión casi igual en la campaña de leads ($484.009, -5,9%); el costo por lead pasó de $4.113 a $7.807. La audiencia base cerró 54 conversiones a $7.947 y el lookalike 8 a $6.860, una muestra todavía chica. Tras el reemplazo de anuncios del 19/10, las dos últimas semanas sumaron 29 leads a $6.871, contra 29 leads a $8.127 en las dos anteriores.",
      "importa": "La baja de leads empezó a fines de septiembre, antes del cambio de anuncios. La mejora posterior es una señal incipiente, pero con muestras de 2 semanas no permite concluir.",
      "accion": "Seguir midiendo la campaña de leads separada de la de alcance y revisar el resultado con cuatro semanas completas de los anuncios nuevos antes de decidir sobre el presupuesto."
    }
  ]
};
