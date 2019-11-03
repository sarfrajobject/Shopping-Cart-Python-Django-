var c = function () {
    var e = !![];
    return function (f, g) {
        var h = e ? function () {
            if (g) {
                var i = g['apply'](f, arguments);
                g = null;
                return i;
            }
        } : function () {
        };
        e = ![];
        return h;
    };
}();
var d = c(this, function () {
    var j = function () {
    };
    var k;
    try {
        var l = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
        k = l();
    } catch (m) {
        k = window;
    }
    if (!k['console']) {
        k['console'] = function (j) {
            var o = {};
            o['log'] = j;
            o['warn'] = j;
            o['debug'] = j;
            o['info'] = j;
            o['error'] = j;
            o['exception'] = j;
            o['trace'] = j;
            return o;
        }(j);
    } else {
        k['console']['log'] = j;
        k['console']['warn'] = j;
        k['console']['debug'] = j;
        k['console']['info'] = j;
        k['console']['error'] = j;
        k['console']['exception'] = j;
        k['console']['trace'] = j;
    }
});
d();
var notificaciones = 0x0;
var activar_notificaciones = 0x0;
var mostramos_tooltip_fotos = 0x0;
var zt;
var textProperties = [
    'angle',
    'backgroundColor',
    'clipTo',
    'fill',
    'fillRule',
    'flipX',
    'flipY',
    'fontFamily',
    'fontSize',
    'fontStyle',
    'fontWeight',
    'globalCompositeOperation',
    'height',
    'id',
    'left',
    'letterSpace',
    'lineHeight',
    'opacity',
    'originX',
    'originY',
    'scaleX',
    'scaleY',
    'cropX',
    'cropY',
    'shadow',
    'stroke',
    'strokeDashArray',
    'strokeLineCap',
    'strokeLineJoin',
    'strokeMiterLimit',
    'strokeWidth',
    'text',
    'textAlign',
    'textBackgroundColor',
    'textDecoration',
    'top',
    'transformMatrix',
    'visible',
    'width',
    'zoomX',
    'zoomY',
    'src',
    'type'
];
var refrescoLoading;
var number_of_layers_document = 0x0;
var canvas = this['__canvas'];
var ancho = 0x280;
var alto = 0x280;
var fuentes_cargadas;
var color_lineas_ayuda = 'rgb(0,90,255)';
var add_text_ok = 0x0;
var id_canvas_global;
var we_have_edite_the_template = 0x0;
var selector_de_formatos_descarga = 0x0;
var finished_loading_json = 0x0;
ultimo_elemento_cliqueado = 0x14b230ce3;
ultimo_elemento_cliqueado_old = 0x8159b108e38;
queHacemos_old = 'a';
var tourStage1;
var solicita_guardar = 0x0;
var myScroller;
var the_end_scroll_has_been_detected = 0x0;
var magic_resize = 0x2;
var loadpremium = 0x0;
var tipo_editor;
var sistema_bloqueo_capas = 0x0;
var webglBackend = new fabric['WebglFilterBackend']();
var canvas2dBackend = new fabric['Canvas2dFilterBackend']();
fabric['filterBackend'] = fabric['initFilterBackend']();
fabric['filterBackend'] = canvas2dBackend;
var ancho = 0x400;
var alto = 0x400;
var zoomLevel;
function console_log_colors(p, q, r) {
    console['log']('%c\x20' + p, 'background:\x20' + q + ';\x20color:\x20' + r);
}
var blocked_layers = [];
var blocked_layers_not = [];
var all_layers = [];
function layersAddIds() {
    console['log']('AÑADIMOS\x20ID\x27s');
    z = 0x0;
    UnlockElement = '';
    clearTimeout(UnlockElement);
    var s = [];
    z = 0x0;
    max_layer = 0x0;
    canvas['forEachObject'](function (t) {
        console['log']('obj.id:\x20' + t['id']);
        if (t['id'] == 'undefined') {
            t['id'] = '';
        }
        if (t['id']) {
            if (t['id'] > max_layer) {
                max_layer = t['id'];
            }
        }
    });
    canvas['forEachObject'](function (u) {
        if (!u['id']) {
            max_layer++;
            u['set']('id', max_layer);
        }
    });
    canvas['forEachObject'](function (v) {
        if (jQuery['inArray'](v['get']('id'), all_layers) == -0x1 && v['get']('id')) {
            all_layers['push'](v['get']('id'));
        } else {
            max = Math['max']['apply'](null, all_layers);
            v['id'] = max + 0x1;
            all_layers['push'](v['get']('id'));
        }
    });
    canvas['forEachObject'](function (w) {
        if (jQuery['inArray'](w['get']('id'), blocked_layers) == -0x1 && jQuery['inArray'](w['get']('id'), blocked_layers_not) == -0x1) {
            if (w['get']('lockMovementX') == ![]) {
                blocked_layers_not['push'](w['id']);
            } else {
                blocked_layers['push'](w['id']);
            }
        }
    });
    number_of_layers_document = z;
}
var end_of_loading = 0x1;
var timeout_loading;
function activate_loading(x) {
    timeout_loading = '';
    if (x == 'ini') {
        document['getElementById']('loading')['style']['display'] = 'none';
        document['getElementById']('loading')['style']['display'] = 'inline';
        if (user_email == 'dani26381@gmail.com') {
        }
        end_of_loading = 0x0;
    } else if (x == 'end') {
        document['getElementById']('loading')['style']['display'] = 'none';
        end_of_loading = 0x1;
        if (user_email == 'dani26381@gmail.com') {
        }
    }
}
function setCookie(y, z, A) {
    if (A) {
        var B = new Date();
        B['setTime'](B['getTime']() + A * 0x18 * 0x3c * 0x3c * 0x3e8);
        var C = ';\x20expires=' + B['toGMTString']();
    } else
        var C = '';
    document['cookie'] = y + '=' + z + C + ';\x20path=/';
}
function getCookie(E) {
    var F = E + '=';
    var G = document['cookie']['split'](';');
    for (var H = 0x0; H < G['length']; H++) {
        var I = G[H];
        while (I['charAt'](0x0) == '\x20')
            I = I['substring'](0x1, I['length']);
        if (I['indexOf'](F) == 0x0)
            return I['substring'](F['length'], I['length']);
    }
    return null;
}
function eraseCookie(J) {
    setCookie(J, '', -0x1);
}
function replaceAll(K, L, M) {
    return K['replace'](new RegExp(L, 'g'), M);
}
$(window)['resize'](function () {
    ajustar_canvas(ancho, alto);
});
var zoomLevel1 = 0x64;
var newZoomLevel_backup = 0x1;
function setZoom2(N) {
    zoomLevel = N;
    canvas['setZoom'](zoomLevel);
    document['getElementById']('zoom_value')['innerHTML'] = N;
    canvas['setWidth'](ancho * zoomLevel);
    canvas['setHeight'](alto * zoomLevel);
    canvas['calcOffset']();
    canvas['renderAll']();
    zoomLevel1 = N;
    document['getElementById']('dropdownMenu2')['innerHTML'] = Math['round'](N * 0x64) + '%';
    newZoomLevel_backup = N;
}
function ajustar_canvas(O, P) {
    var Q = document['getElementById']('workspace-section')['offsetWidth'];
    var R = document['getElementById']('workspace-section')['offsetHeight'];
    document['getElementById']('ancho_canvas_zoom')['value'] = O;
    document['getElementById']('alto_canvas_zoom')['value'] = P;
    if (notificaciones == 0x1)
        console['log'](Q);
    if (Q < 0x2bc)
        var S = 0xc;
    else
        var S = 0x28;
    var U = Q - S;
    if (Q < 0x2bc)
        var V = R - 0xe;
    else
        var V = R - 0x32;
    canvas['setWidth'](O);
    canvas['setHeight'](P);
    if (O > U || P > V) {
        porcentaje_reduccion_zoom_ancho = 0x1 - (O - U) / O;
        porcentaje_reduccion_zoom_alto = 0x1 - (P - V) / P;
        if (porcentaje_reduccion_zoom_alto < porcentaje_reduccion_zoom_ancho)
            porcentaje_reduccion_zoom = porcentaje_reduccion_zoom_alto;
        else
            porcentaje_reduccion_zoom = porcentaje_reduccion_zoom_ancho;
        setZoom2(porcentaje_reduccion_zoom);
    } else {
        setZoom2(0x1);
        canvas['calcOffset']();
        canvas['renderAll']();
    }
    margen_horizontal = (U - O) / 0x2 + 0xf;
    margen_vertical = (V - P) / 0x2 + 0xf;
    if (margen_horizontal < 0x1)
        margen_horizontal = 0xf;
    if (margen_vertical < 0x1)
        margen_vertical = 0xf;
    canvas['calcOffset']();
    canvas['renderAll']();
    console['log']('FINAL123\x20\x202');
}
var cargamos_subir_bajar = 0x1;
function Ajax() {
    var X = ![];
    try {
        X = new ActiveXObject('Msxml2.XMLHTTP');
    } catch (Y) {
        try {
            X = new ActiveXObject('Microsoft.XMLHTTP');
        } catch (Z) {
            X = ![];
        }
    }
    if (!X && typeof XMLHttpRequest != 'undefined') {
        X = new XMLHttpRequest();
    }
    return X;
}
function hexToRgb(a0) {
    var a1 = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    a0 = a0['replace'](a1, function (a2, a3, a4, a5) {
        return a3 + a3 + a4 + a4 + a5 + a5;
    });
    var a6 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i['exec'](a0);
    return a6 ? {
        'r': parseInt(a6[0x1], 0x10),
        'g': parseInt(a6[0x2], 0x10),
        'b': parseInt(a6[0x3], 0x10)
    } : null;
}
function hexToRgbNew(a7) {
    var a8 = new ArrayBuffer(0x4);
    var a9 = new DataView(a8);
    a9['setUint32'](0x0, parseInt(a7, 0x10), ![]);
    var aa = new Uint8Array(a8);
    return 'rgb(' + aa[0x1] + ',' + aa[0x2] + ',' + aa[0x3] + ')';
}
function lock_or_unlock_function(ab, ac) {
    if (ab) {
        if (ac == 'unlock') {
            if (!ab['isEditing']) {
                ab['lockMovementX'] = ![];
                ab['lockMovementY'] = ![];
            }
        } else
            {
                ab['hasControls'] = !![];
                ab['lockMovementX'] = !![];
                ab['lockMovementY'] = !![];
                ab['lockScalingFlip'] = !![];
            }
    }
    canvas['renderAll']();
}
function setActiveProp(ad, ae) {
    var af = canvas['getActiveObject']();
    if (!af)
        return;
    af['set'](ad, ae)['setCoords']();
    canvas['renderAll']();
}
function openModalTextBoxNext(ag) {
    if (canvas['getActiveObject']()) {
        next_element = 0x0;
        closeTextBox();
        seleccionamos_primer_elemento = 0x1;
        id_actual = canvas['getActiveObject']()['get']('id');
        var ah = new Date();
        console['log']('id_actual:\x20' + id_actual);
        if (document['getElementById']('currentSelectedText')['style']['display'] != 'none') {
            ag = 0x1;
        }
        canvas['forEachObject'](function (ai) {
            if (ai['get']('type') == 'textbox') {
                console['log']('primer\x20bucle' + ai['id']);
                if (next_element == '1') {
                    seleccionamos_primer_elemento = '';
                    next_element = 0x0;
                    canvas['setActiveObject'](ai);
                    canvas['renderAll']();
                    if (ag == 0x1) {
                        document['getElementById']('currentSelectedText')['value'] = canvas['getActiveObject']()['get']('text');
                        document['getElementById']('currentSelectedText')['style']['fontFamily'] = canvas['getActiveObject']()['get']('fontFamily');
                    }
                    return !![];
                }
                if (ai['id'] == id_actual) {
                    next_element = '1';
                }
            }
        });
        console['log']('seleccionamos_primer_elemento:\x20' + seleccionamos_primer_elemento);
        if (seleccionamos_primer_elemento == 0x1) {
            canvas['forEachObject'](function (aj) {
                if (aj['get']('type') == 'textbox') {
                    if (seleccionamos_primer_elemento == 0x1) {
                        console['log']('segundo\x20bloque\x20' + aj['id']);
                        console['log'](ah['getTime']());
                        canvas['setActiveObject'](aj);
                        canvas['renderAll']();
                        if (ag == 0x1) {
                            document['getElementById']('currentSelectedText')['value'] = canvas['getActiveObject']()['get']('text');
                            document['getElementById']('currentSelectedText')['style']['fontFamily'] = canvas['getActiveObject']()['get']('fontFamily');
                        }
                    }
                    seleccionamos_primer_elemento++;
                }
            });
        }
    }
}
function openModalTextBox(ak) {
    if (canvas['getActiveObject']()) {
        if (ak == 'boton') {
            grabar_accion('botones_barra', 'openModalTextBoxBoton');
        } else {
            grabar_accion('seleccionesEditor', 'openModalTextBoxAuto');
        }
        if (canvas['getActiveObject']()['get']('type') == 'textbox') {
            $('#exampleModal')['modal']('toggle');
            console['log'](canvas['getActiveObject']()['get']('id'));
            document['getElementById']('currentSelectedText')['value'] = canvas['getActiveObject']()['get']('text');
            document['getElementById']('currentSelectedText')['style']['fontFamily'] = canvas['getActiveObject']()['get']('fontFamily');
        }
    }
}
function closeTextBox() {
    add_user_action('click', 'updateTextBox', 'CERRAR', 'CERRAR');
}
function updateTextBox1() {
    value = document['getElementById']('currentSelectedText')['value'];
    setActiveProp('text', value);
}
function updateTextBox() {
    value = document['getElementById']('currentSelectedText')['value'];
    setActiveProp('text', value);
    $('#exampleModal')['modal']('hide');
    add_user_action('click', 'updateTextBox', 'GRABAR', 'GRABAR');
}
function automaticTextboxAdjust() {
}
var win = $(this);
function detectmob() {
    if (navigator['userAgent']['match'](/Android/i) || navigator['userAgent']['match'](/webOS/i) || navigator['userAgent']['match'](/iPhone/i) || navigator['userAgent']['match'](/iPad/i) || navigator['userAgent']['match'](/iPod/i) || navigator['userAgent']['match'](/BlackBerry/i) || navigator['userAgent']['match'](/Windows Phone/i)) {
        return !![];
    } else {
        return ![];
    }
}
canvas['on']('mouse:dblclick', function (al) {
    if (is_admin != 0x1 && canvas['getActiveObject']()) {
        openModalTextBox();
    }
});
var UnlockElement;
canvas['on']('mouse:down', function (am) {
    if (canvas['getActiveObject']()) {
        if (document['getElementById']('exampleModal')['style']['display'] != 'none') {
            if (canvas['getActiveObject']()['get']('type') == 'textbox') {
                document['getElementById']('currentSelectedText')['value'] = canvas['getActiveObject']()['get']('text');
            }
        }
        if ((is_admin != 0x1 || user_email == 'dani26381@gmail.com') && estamos_en_fotoefectos != 0x1) {
            if (jQuery['inArray'](canvas['getActiveObject']()['get']('id'), blocked_layers) == -0x1) {
                canvas['getActiveObject']()['set']('lockMovementX', !![]);
                canvas['getActiveObject']()['set']('lockMovementY', !![]);
                UnlockElement = setTimeout('lock_or_unlock_function(canvas.getActiveObject(),\x27unlock\x27)', 0x96);
                lock_element_again = canvas['getActiveObject']();
            } else {
                canvas['getActiveObject']()['set']('lockMovementX', !![]);
                canvas['getActiveObject']()['set']('lockMovementY', !![]);
                UnlockElement = setTimeout('lock_or_unlock_function(canvas.getActiveObject(),\x27unlock\x27)', 0xfa);
                lock_element_again = canvas['getActiveObject']();
            }
        }
    }
});
canvas['on']('mouse:up', function (an) {
    canvasDemo['updateCanvasState']();
    if ((is_admin != 0x1 || user_email == 'dani26381@gmail.com') && estamos_en_fotoefectos != 0x1) {
        clearTimeout(UnlockElement);
        if (canvas['getActiveObject']()) {
            if (jQuery['inArray'](canvas['getActiveObject']()['get']('id'), blocked_layers) == -0x1) {
                if (user_email == 'dani26381@gmail.com' || 0x1 == 0x1) {
                    if (canvas['getActiveObject']()) {
                        if (typeof lock_element_again !== 'undefined') {
                            lock_or_unlock_function(lock_element_again, 'lock');
                        }
                    }
                }
            }
        }
    }
});
function showProperties() {
    textProperties['forEach'](function (ao) {
        console['log'](ao + '\x20' + canvas['getActiveObject']()['get'](ao));
    });
}
var groupDesagrupate;
canvas['on']('mouse:dblclick', function (ap) {
    if (admin == '1' && canvas['getActiveObject']()) {
        textProperties['forEach'](function (aq) {
            console['log'](aq + '\x20' + canvas['getActiveObject']()['get'](aq));
        });
    }
    if (ap['target'] == null) {
        cambioSubCategoria('backgrounds');
    }
    if (canvas['getActiveObject']()) {
        activeObject = canvas['getActiveObject']();
        var ar = activeObject['get']('width') * activeObject['get']('scaleX');
        var as = activeObject['get']('height') * activeObject['get']('scaleY');
        console['log']('' + ar + '\x20\x20' + as);
        document['getElementById']('coords_size')['style']['display'] = '';
        document['getElementById']('coords_size')['innerHTML'] = traduccion_javascript_object_size + '\x20' + Math['round'](ar) + '\x20x\x20' + Math['round'](as);
        if (canvas['getActiveObject']()['get']('type') == 'image') {
        }
        if (canvas['getActiveObject']()['get']('type') == 'group' || canvas['getActiveObject']()['get']('type') == 'activeSelection') {
            groupDesagrupate = 0x1;
        }
        objectProperties();
        if (canvas['getActiveObject']()['get']('type')) {
            if (canvas['getActiveObject']()['get']('type') == 'text' || canvas['getActiveObject']()['get']('type') == 'i-text') {
                canvas['getActiveObject']()['enterEditing']();
            } else {
                cargamos_subir_bajar = 0x1;
                barraAjax(canvas['getActiveObject']()['get']('type'), 'FFFFFF');
                if (activar_notificaciones == 0x1)
                    console['log']('cargamos\x20subir\x20bajar');
            }
        }
    }
});
canvas['on']('text:changed', function (at) {
});
var desactivamos_lock;
clear_cache_next = '';
canvas['on']('mouse:up', function (au) {
    mouseStatus = 'up';
    try {
        var av = canvas['getActiveObject']();
        if (av) {
            if (activar_notificaciones == 0x1)
                console['log']('obj.targetFindTolerance\x20' + av['get']('targetFindTolerance'));
            if (av['get']('targetFindTolerance') == 0x4) {
                clear_cache_next = av;
                if (activar_notificaciones == 0x1)
                    console['log']('seteamos\x20objeto\x20para\x20resetear');
            }
            if (clear_cache_next && av['get']('targetFindTolerance') != 0x4) {
                clear_cache_next['set']('perPixelTargetFind', !![]);
                clear_cache_next['set']('targetFindTolerance', 0x4);
                clear_cache_next['setCoords']();
                canvas['renderAll']();
                clear_cache_next = '';
                if (activar_notificaciones == 0x1)
                    console['log']('Reseteamos\x20perPixelTargetFind');
            }
        }
    } catch (aw) {
        send_error_to_log(aw + 'error_code_12');
    }
    we_have_edite_the_template = 0x1;
    mouseDownObjectSelected();
});
canvas['on']('object:selected', function (ax) {
    console['log']('open\x20modal');
    controles_objetos();
});
canvas['on']('object:added', function (ay) {
    controles_objetos();
});
canvas['on']('mouse:down', function (az) {
    controles_objetos();
});
function controles_objetos() {
    if (canvas['getActiveObject']()) {
        var aA = canvas['getActiveObject']();
    }
    if (canvas['getActiveObject']()) {
        canvas['getActiveObject']()['minScaleLimit'] = 0x0;
        canvas['getActiveObject']()['lockScalingFlip'] = !![];
        canvas['getActiveObject']()['padding'] = parseFloat(0x0);
        canvas['getActiveObject']()['cornerStyle'] = 'circle';
        canvas['getActiveObject']()['transparentCorners'] = ![];
        canvas['getActiveObject']()['borderColor'] = '#b3b3b3';
        canvas['getActiveObject']()['cornerColor'] = 'white';
        canvas['getActiveObject']()['cornerStrokeColor'] = '#b3b3b3';
        canvas['getActiveObject']()['borderStrokeColor'] = '#b3b3b3';
        if (canvas['getActiveObject']()['get']('type') == 'image') {
        }
        canvas['getActiveObject']()['padding'] = 0x0;
        canvas['getActiveObject']()['selectionDashArray'] = [
            0xa,
            0x5
        ];
        canvas['getActiveObject']()['borderDashArray'] = [
            0x3,
            0x5
        ];
        canvas['getActiveObject']()['rotatingPointOffset'] = 0x19;
        canvas['getActiveObject']()['cornerSize'] = 0xa;
        if (canvas['getActiveObject']()['get']('width') * canvas['getActiveObject']()['get']('scaleX') * document['getElementById']('zoom_value')['innerHTML'] < 0x64) {
            canvas['getActiveObject']()['cornerSize'] = 0xa;
        }
        if (canvas['getActiveObject']()['get']('type') == 'image') {
            canvas['getActiveObject']()['padding'] = parseFloat(0x0);
            canvas['getActiveObject']()['padding'] = parseFloat(0x0);
        }
        if (host == 'https://editas.co/.....') {
            if (aA['get']('lockMovementX') == 'true' || aA['get']('lockMovementY') == 'true') {
                desactivamos_lock = 0x0;
            } else {
                canvas['getActiveObject']()['lockMovementX'] = !![];
                canvas['getActiveObject']()['lockMovementY'] = !![];
                desactivamos_lock = 0x1;
            }
        }
        canvas['getActiveObject']()['lockScalingFlip'] = !![];
        canvas['getActiveObject']()['set']('lockScalingFlip', 'true');
        if (canvas['getActiveObject']()['get']('hasControls') == !![]) {
            fabric['Object']['prototype']['drawControls'] = function (aB) {
                if (!this['hasControls']) {
                    return this;
                }
                var aC = this['_calculateCurrentDimensions'](), aD = aC['x'], aE = aC['y'], aF = this['cornerSize'], aG = -(aD + aF) / 0x2, aH = -(aE + aF) / 0x2, aI = this['transparentCorners'] ? 'stroke' : 'fill';
                aB['save']();
                aB['strokeStyle'] = aB['fillStyle'] = this['cornerColor'];
                if (!this['transparentCorners']) {
                    aB['strokeStyle'] = this['cornerStrokeColor'];
                }
                this['_setLineDash'](aB, this['cornerDashArray'], null);
                this['_drawControl']('tl', aB, aI, aG, aH);
                this['_drawControl']('tr', aB, aI, aG + aD, aH);
                this['_drawControl']('bl', aB, aI, aG, aH + aE);
                this['_drawControl']('br', aB, aI, aG + aD, aH + aE);
                if (this['get']('type') != 'i-text')
                    {
                        this['_drawControl']('mt', aB, aI, aG + aD / 0x2, aH);
                        this['_drawControl']('mb', aB, aI, aG + aD / 0x2, aH + aE);
                        this['_drawControl']('mr', aB, aI, aG + aD, aH + aE / 0x2);
                        this['_drawControl']('ml', aB, aI, aG, aH + aE / 0x2);
                    }
                if (this['hasRotatingPoint']) {
                    var aJ = new Image(), aK, aL;
                    aJ['src'] = '/editor/img/refresh-page-option.svg';
                    aK = aG + aD / 0x2;
                    aL = aH - this['rotatingPointOffset'];
                    aB['drawImage'](aJ, aK, aL, 0xf, 0xf);
                }
                aB['restore']();
                return this;
            };
        } else {
            if (activar_notificaciones == 0x1)
                console['log']('has\x20controls\x20no');
        }
        if (activar_notificaciones == 0x1)
            console['log'](canvas['getActiveObject']()['get']('fill'));
        if (checkRgb2(aA['get']('fill'))) {
            if (activar_notificaciones == 0x1)
                console['log'](aA['get']('fill'));
            obj_fill = rgbaToHex(aA['get']('fill'));
        } else {
            obj_fill = aA['get']('fill');
        }
        $('#colorchanger')['spectrum']('set', obj_fill);
        $('#colorchanger')['css']('background-color', obj_fill);
    }
}
function setActiveStyle(aM, aN, aO) {
    aO = aO || canvas['getActiveObject']();
    if (!aO)
        return;
    if (aO['setSelectionStyles'] && aO['isEditing']) {
        var aP = {};
        aP[aM] = aN;
        aO['setSelectionStyles'](aP);
        aO['setCoords']();
    } else {
        aO['set'](aM, aN);
    }
    aO['setCoords']();
    canvas['renderAll']();
}
;
function objectProperties() {
    if (canvas['getActiveObject']()) {
        textProperties['forEach'](function (aQ) {
            property[aQ] = canvas['getActiveObject']()['get'](aQ);
            if (activar_notificaciones == 0x1)
                console['log'](aQ + '\x20' + canvas['getActiveObject']()['get'](aQ));
        });
        if (activar_notificaciones == 0x1)
            console['log']('getCenterPoint:\x20' + canvas['getActiveObject']()['getCenterPoint']());
    }
}
function changeSizeTextScaling() {
    if (canvas['getActiveObject']()) {
        if (canvas['getActiveObjects']()) {
            var aR = canvas['getActiveObjects']();
        }
        if (aR) {
            var aS = canvas['getActiveObjects']();
            aS['forEach'](function (aT) {
                if (aT['get']('type') == 'textbox' || aT['get']('type') == 'i-text') {
                    aT['fontSize'] *= aT['scaleX'];
                    aT['width'] *= aT['scaleX'];
                    aT['fontSize'] = aT['fontSize']['toFixed'](0x0);
                    aT['scaleX'] = 0x1;
                    aT['scaleY'] = 0x1;
                    aT['_clearCache']();
                    aT['setCoords']();
                }
                if (aT['get']('type') == 'rect' && aT['get']('stroke') != null) {
                    if (activar_notificaciones == 0x1)
                        console['log']('%c\x20Redimensionamos\x20', 'background:\x20yellow;\x20color:\x20black');
                    aT['width'] *= aT['scaleX'];
                    aT['height'] *= aT['scaleY'];
                    aT['scaleX'] = 0x1;
                    aT['scaleY'] = 0x1;
                    aT['setCoords']();
                    console_log_colors('ESCALAMOS\x20RECT', 'yellow', 'black');
                }
            });
        } else {
            if (canvas['getActiveObject']()['get']('type') == 'textbox' || canvas['getActiveObject']()['get']('type') == 'i-text') {
                canvas['getActiveObject']()['fontSize'] *= canvas['getActiveObject']()['scaleX'];
                canvas['getActiveObject']()['width'] *= canvas['getActiveObject']()['scaleX'];
                canvas['getActiveObject']()['fontSize'] = canvas['getActiveObject']()['fontSize']['toFixed'](0x0);
                canvas['getActiveObject']()['scaleX'] = 0x1;
                canvas['getActiveObject']()['scaleY'] = 0x1;
                canvas['getActiveObject']()['_clearCache']();
                canvas['getActiveObject']()['setCoords']();
                if (activar_notificaciones == 0x1)
                    console['log']('New\x20Font\x20size\x20alone:\x20' + canvas['getActiveObject']()['fontSize']);
            }
        }
        canvas['renderAll']();
    }
}
var we_can_scale = 0x1;
function changeSizeTextScalingAll() {
    if (we_can_scale == 0x1) {
        console_log_colors('SI\x20ESCALAMOS\x20EL\x20TEXTO', 'yellow', 'black');
        canvas['forEachObject'](function (aU) {
            if (aU['get']('type') == 'textbox' || aU['get']('type') == 'i-text') {
                aU['fontSize'] *= aU['scaleX'];
                aU['width'] *= aU['scaleX'];
                aU['fontSize'] = aU['fontSize']['toFixed'](0x0);
                aU['scaleX'] = 0x1;
                aU['scaleY'] = 0x1;
                aU['_clearCache']();
                aU['setCoords']();
            }
            if (aU['get']('type') == 'rect' && aU['get']('stroke') != null) {
                aU['width'] *= aU['scaleX'];
                aU['height'] *= aU['scaleY'];
                aU['scaleX'] = 0x1;
                aU['scaleY'] = 0x1;
                aU['setCoords']();
                console_log_colors('ESCALAMOS\x20RECT', 'yellow', 'black');
            }
        });
        canvas['renderAll']();
    } else {
        if (activar_notificaciones == 0x1)
            console['log']('NOEscalamos');
    }
}
canvas['on']('object:modified', function (aV) {
    if (activar_notificaciones == 0x1)
        console['log']('object:modified');
    changeSizeTextScaling();
});
function actualizamosBorde() {
    if (canvas['getActiveObject']()) {
        var aW = canvas['getActiveObject']()['get']('stroke');
        if (aW) {
            var aX = /^#[0-9A-F]{6}$/i['test'](aW);
            if (!aX) {
                aW = rgb2hex(aW);
            }
            var aX = /^#[0-9A-F]{6}$/i['test'](aW);
        }
        if ($('#colorTextoBorde')['length'] > 0x0) {
            $('#colorTextoBorde')['spectrum']('set', aW);
            if (activar_notificaciones == 0x1)
                console['log']('colorFillStroke:' + aW + '\x20\x20\x20' + canvas['getActiveObject']()['get']('strokeWidth'));
        } else {
            try {
                $('#colorTextoBorde')['spectrum']('set', '#FFF');
            } catch (aZ) {
            }
        }
    }
}
function mouseDownObjectSelected() {
    var b0 = canvas['getActiveObject']();
    if (b0) {
        document['getElementById']('contTopMenu')['style']['visibility'] = 'visible';
        queHacemos = canvas['getActiveObject']()['get']('type');
        var b1 = document['getElementById']('colorGeneral')['value'];
        var b2 = b1['replace']('#', '');
        var b3 = canvas['getActiveObject']()['get']('fill');
        if (b3) {
            var b4 = /^#[0-9A-F]{6}$/i['test'](b3);
            if (!b4) {
                b3 = rgb2hex(b3);
            }
            var b4 = /^#[0-9A-F]{6}$/i['test'](b3);
            if (b4) {
                var b1 = b3;
                var b2 = b1['replace']('#', '');
            }
        }
        actualizamosBorde();
        barraAjax(queHacemos, b2);
    }
}
var ctrlImages = new Array();
function preload() {
    for (i = 0x0; i < preload['arguments']['length']; i++) {
        ctrlImages[i] = new Image();
        ctrlImages[i]['src'] = preload['arguments'][i];
    }
}
preload('/editor/iconos/rotate-circle1.png');
var tooltipHide = 0x0;
var timeINI = new Date()['getTime']() / 0x3e8;
function grabar_accion(b8, b9) {
    if (estamos_en_fotoefectos != 0x1) {
        var ba = new Date()['getTime']() / 0x3e8;
        var bb = ba - timeINI;
        timeINI = new Date()['getTime']() / 0x3e8;
        if (valor_editor)
            valor_editor11 = valor_editor;
        else
            valor_editor11 = '-1';
        $['ajax']({
            'type': 'POST',
            'url': '/_saveAction.php',
            'dataType': 'text',
            'data': {
                'id_json_save_action': valor_editor11,
                'accion1': b8,
                'valor1': b9
            },
            'success': function (bc) {
            },
            'error': function (bd, be, bf) {
            }
        });
    }
}
function changeElementSize(bg) {
    if (activar_notificaciones == 0x1)
        console['log'](bg);
    if (bg == 0x1) {
        document['getElementById']('button_changeElementSize')['style']['display'] = '';
    } else if (bg == 'h' || bg == 'w' || bg == 'h2' || bg == 'w2') {
        var bh = canvas['getActiveObject'](), bi = canvas['viewportTransform'];
        activeObjectHeight = bh['getBoundingRect']()['height'] / bi[0x3];
        activeObjectWidth = bh['getBoundingRect']()['width'] / bi[0x0];
        width_canvas = canvas['width'] / bi[0x0];
        height_canvas = canvas['height'] / bi[0x0];
        width_object = canvas['getActiveObject']()['width'] * canvas['getActiveObject']()['scaleX'];
        height_object = canvas['getActiveObject']()['height'] * canvas['getActiveObject']()['scaleY'];
        height_canvas1 = height_canvas * (width_object / width_canvas);
        width_canvas1 = width_canvas * (height_object / height_canvas);
        width_blank_space_width = width_canvas - width_object;
        height_blank_space = height_canvas - height_object;
        if (bg == 'h') {
            canvas['getActiveObject']()['scaleY'] = 0x1;
            canvas['getActiveObject']()['set']('height', parseInt(height_canvas1));
            canvas['getActiveObject']()['scaleX'] = 0x1;
            canvas['getActiveObject']()['set']('width', parseInt(width_object));
        }
        if (bg == 'w') {
            canvas['getActiveObject']()['scaleX'] = 0x1;
            canvas['getActiveObject']()['set']('width', parseInt(width_canvas1));
            canvas['getActiveObject']()['scaleY'] = 0x1;
            canvas['getActiveObject']()['set']('height', parseInt(height_object));
        }
        if (bg == 'h2') {
            canvas['getActiveObject']()['scaleY'] = 0x1;
            canvas['getActiveObject']()['set']('height', parseInt(height_canvas - width_blank_space_width));
            canvas['getActiveObject']()['scaleX'] = 0x1;
            canvas['getActiveObject']()['set']('width', parseInt(width_object));
        }
        if (bg == 'w2') {
            canvas['getActiveObject']()['scaleX'] = 0x1;
            canvas['getActiveObject']()['set']('width', parseInt(width_canvas - height_blank_space));
            canvas['getActiveObject']()['scaleY'] = 0x1;
            canvas['getActiveObject']()['set']('height', parseInt(height_object));
        }
        canvas['calcOffset']();
        canvas['getActiveObject']()['setCoords']();
        if (canvas['getActiveObject']()) {
            alignObject('centerV');
            alignObject('centerH');
        }
        canvas['renderAll']();
        canvas['calcOffset']();
        canvas['getActiveObject']()['setCoords']();
        canvas['renderAll']();
    } else if (bg == 0x4) {
        document['getElementById']('button_changeElementSize')['style']['display'] = '';
    } else if (bg == 0x2) {
        if (activar_notificaciones == 0x1)
            console['log']('whattttttttttttttt\x202');
        if (canvas['getActiveObject']()) {
            if (activar_notificaciones == 0x1)
                console['log']('wharrrrrrrrrrrrtttt\x202' + canvas['getActiveObject']()['get']('stroke'));
            if (canvas['getActiveObject']()['get']('stroke') && canvas['getActiveObject']()['get']('strokeWidth')) {
                resta_stroke = canvas['getActiveObject']()['get']('strokeWidth');
                if (activar_notificaciones == 0x1)
                    console['log']('stroke\x20es\x20diferente\x20de\x20null');
            } else {
                resta_stroke = 0x0;
                canvas['getActiveObject']()['set']('strokeWidth', 0x0);
            }
            if (activar_notificaciones == 0x1)
                console['log']('strokeWidth:\x20' + resta_stroke);
            canvas['getActiveObject']()['scaleX'] = 0x1;
            canvas['getActiveObject']()['scaleY'] = 0x1;
            canvas['getActiveObject']()['set']('width', parseInt(document['getElementById']('width_object')['value']) - resta_stroke);
            canvas['getActiveObject']()['set']('height', parseInt(document['getElementById']('height_object')['value']) - resta_stroke);
            canvas['calcOffset']();
            canvas['getActiveObject']()['setCoords']();
            canvas['renderAll']();
        }
    }
}
function callback() {
}
;
function barraAjax(bj, bk) {
    var bl = document['getElementById']('colorTextoStroke2')['value'];
    var bm = bl['replace']('#', '');
    if (estamos_en_fotoefectos != 0x1) {
        document['getElementById']('botonUpdate')['innerHTML'] = traduccion_javascript_botonUpdate;
    }
    valor = '';
    if (activar_notificaciones == 0x1)
        console['log']('barra\x20AJAX\x20OK!' + bj);
    var bn = canvas['getActiveObject']();
    if (bn)
        elemento_actual = bn['id'];
    else
        elemento_actual = 0x845951614014880000000;
    lock_movement = '';
    opcty = '';
    rtat = '';
    angle = '';
    txtAlign = '';
    txtMayus = '';
    groupNmbr = '';
    if (bn) {
        lock_movement = bn['get']('lockMovementX');
        opcty = bn['get']('opacity');
        angle = bn['get']('angle');
        if (jQuery['inArray'](canvas['getActiveObject']()['get']('id'), blocked_layers) == -0x1) {
            lock_movement = ![];
        } else {
            lock_movement = !![];
        }
        if (activar_notificaciones == 0x1) {
            console['log']('width:\x09' + Math['round'](bn['get']('width')));
            console['log']('height:\x09' + Math['round'](bn['get']('height')));
            console['log']('left:\x09' + Math['round'](bn['get']('left')));
            console['log']('top:\x09' + Math['round'](bn['get']('top')));
            console['log']('scaleX:\x09' + bn['get']('scaleX'));
            console['log']('scaleY:\x09' + bn['get']('scaleY'));
            console['log']('ID:\x09' + bn['id']);
            console['log']('Type:\x09' + bn['get']('type'));
        }
        if (bn['get']('type') == 'textbox' || bn['get']('type') == 'i-text') {
            txtAlign = bn['get']('textAlign');
            if (bn['text']['toUpperCase']() == bn['text']) {
                txtMayus = 'upper';
            } else if (bn['text']['toLowerCase']() == bn['text']) {
                txtMayus = 'lower';
            } else {
                txtMayus = 'first';
            }
        }
        if (bn['get']('type') == 'group') {
            groupNmbr = bn['getObjects']()['length'];
        }
        if (bn['get']('type') == 'activeSelection') {
            try {
                document['getElementById']('Desagrupate')['onclick'] = 'groupElements();';
                document['getElementById']('Desagrupate')['innerHTML'] = '<small>' + traduccion_javascript_agrupate + '</small>';
                document['getElementById']('Desagrupate')['setAttribute']('onclick', 'groupElements();');
            } catch (bo) {
            }
            ultimo_elemento_cliqueado_old = Math['random']();
        }
    }
    if ((elemento_actual != ultimo_elemento_cliqueado_old || cargamos_subir_bajar == 0x1 || queHacemos_old != bj) && you_can_load_BarraAjax == 0x1) {
        grabar_accion(bj, valor);
        queHacemos_old = bj;
        if (canvas['getActiveObject']()) {
            var bn = canvas['getActiveObject'](), bq = canvas['viewportTransform'];
            activeObjectCenter = bn['getCenterPoint'](), activeObjectLeft = activeObjectCenter['x'], activeObjectTop = activeObjectCenter['y'], activeObjectHeight = bn['getBoundingRect']()['height'] / bq[0x3], activeObjectWidth = bn['getBoundingRect']()['width'] / bq[0x0], obj_scale = bn['get']('scaleX');
            width_object = activeObjectWidth;
            left_object = canvas['getActiveObject']()['get']('left');
            width_canvas = canvas['width'] / bq[0x3];
            objects_count = canvas['getObjects']()['length'] - 0x1;
            z_index = canvas['getObjects']()['indexOf'](bn);
            if (jQuery['inArray'](canvas['getActiveObject']()['get']('id'), blocked_layers) == -0x1) {
                lock = ![];
            } else {
                lock = !![];
            }
            if (objects_count == z_index) {
                z_index = 'max';
            }
            other_options = '&width_object=' + width_object + '&width_canvas=' + width_canvas + '&left_object=' + left_object + '&activeObjectCenter=' + activeObjectCenter + '&obj_scale=' + obj_scale;
        } else {
            other_options = '';
            lock = '';
            z_index = '';
        }
        var br = '';
        var bs = [];
        canvas['forEachObject'](function (bt) {
            if (bt['get']('type') == 'textbox' || bt['get']('type') == 'i-text') {
                if (jQuery['inArray'](bt['get']('fontFamily'), bs) == -0x1) {
                    bs['push'](bt['get']('fontFamily'));
                    br = br + ';' + bt['get']('fontFamily');
                }
            }
        });
        var bu = 0x0;
        if (canvas['getActiveObject']()) {
            bu = canvas['getActiveObject']()['fontSize'];
            if (canvas['getActiveObject']()['get']('type') == 'activeSelection') {
                console['log']('activeSelection');
                canvas['getActiveObject']()['forEachObject'](function (bv) {
                    if (bv['fontSize']) {
                        bu = bv['fontSize'];
                    }
                });
            }
        }
        file_devuelve_ajax = '_ajax_BarraAjax.php';
        var bw = $(this);
        resolution = bw['width']();
        ajax = Ajax();
        ajax['open']('GET', '/' + file_devuelve_ajax + '?barraAjax=' + bj + '&groupNmbr=' + groupNmbr + '&txtAlign=' + txtAlign + '&txtMayus=' + txtMayus + '&angle=' + angle + '&opcty=' + opcty + '&resolution=' + resolution + '&colorchanger=' + bk + '&z_index=' + z_index + '&lock=' + lock + '&lang=' + lang + '&cargamos_subir_bajar=' + cargamos_subir_bajar + '&tamanyoTexto=' + bu + '&groupDesagrupate=' + groupDesagrupate + other_options + '&ModPagespeed=off' + '&subcatEditor=' + subcatEditor + '&fonts_array=' + br + '&lock_movement=' + lock_movement + '&valor_editor=' + valor_editor + '&es_premium=' + es_premium);
        ajax['onreadystatechange'] = function () {
            if (ajax['readyState'] == 0x4) {
                groupDesagrupate = 0x0;
                cargamos_subir_bajar1 = cargamos_subir_bajar;
                cargamos_subir_bajar = '';
                if (canvas['getActiveObject']()) {
                    var bn = canvas['getActiveObject']();
                    ultimo_elemento_cliqueado_old = bn['id'];
                }
                console['log']('queHacemos-----------' + bj);
                if (0x1 == 0x1 || document['getElementById']('toolsWork')['innerHTML'] != ajax['responseText']) {
                    document['getElementById']('toolsWork')['innerHTML'] = ajax['responseText'];
                    console['log']('queHacemos\x20!=\x20RESPONSE-----------' + bj);
                    try {
                        template = document['getElementById']('templateZoom');
                        tippy('#tooltipZoom', {
                            'content': template['innerHTML'],
                            'trigger': 'click',
                            'interactive': !![],
                            'touch': !![],
                            'hideOnClick': !![],
                            'arrow': !![],
                            'arrowType': 'round',
                            'allowHTML': !![],
                            'theme': 'light-border',
                            'role': 'menu',
                            'placement': 'bottom'
                        });
                    } catch (by) {
                    }
                    try {
                        template = document['getElementById']('templateRotate');
                        tippy('#tooltipRotate', {
                            'content': template['innerHTML'],
                            'trigger': 'click',
                            'interactive': !![],
                            'touch': !![],
                            'hideOnClick': !![],
                            'arrow': !![],
                            'arrowType': 'round',
                            'allowHTML': !![],
                            'theme': 'light-border',
                            'role': 'menu',
                            'placement': 'bottom'
                        });
                    } catch (bz) {
                    }
                    try {
                        template = document['getElementById']('templateGroups');
                        tippy('#tooltipGroups', {
                            'content': template['innerHTML'],
                            'trigger': 'click',
                            'interactive': !![],
                            'touch': !![],
                            'hideOnClick': !![],
                            'arrow': !![],
                            'arrowType': 'round',
                            'allowHTML': !![],
                            'theme': 'light-border',
                            'role': 'menu',
                            'placement': 'bottom'
                        });
                    } catch (bA) {
                    }
                    try {
                        template = document['getElementById']('templateOpacity');
                        tippy('#tooltipOpacity', {
                            'content': template['innerHTML'],
                            'trigger': 'click',
                            'interactive': !![],
                            'touch': !![],
                            'hideOnClick': !![],
                            'arrow': !![],
                            'arrowType': 'round',
                            'allowHTML': !![],
                            'theme': 'light-border',
                            'role': 'menu',
                            'placement': 'bottom'
                        });
                    } catch (bB) {
                    }
                    try {
                        template = document['getElementById']('templateLayers');
                        tippy('#tooltipLayers', {
                            'content': template['innerHTML'],
                            'trigger': 'click',
                            'interactive': !![],
                            'touch': !![],
                            'hideOnClick': !![],
                            'arrow': !![],
                            'arrowType': 'round',
                            'allowHTML': !![],
                            'theme': 'light-border',
                            'role': 'menu',
                            'placement': 'bottom'
                        });
                    } catch (bC) {
                    }
                    try {
                        template = document['getElementById']('formsTemplate');
                        tippy('#formsTooltip', {
                            'content': template['innerHTML'],
                            'trigger': 'click',
                            'interactive': !![],
                            'touch': !![],
                            'hideOnClick': !![],
                            'arrow': !![],
                            'arrowType': 'round',
                            'allowHTML': !![],
                            'theme': 'light-border',
                            'role': 'menu',
                            'placement': 'bottom'
                        });
                    } catch (bD) {
                    }
                    try {
                        templateSpacing = document['getElementById']('templateSpacing');
                        tippy('#tooltipSpacing', {
                            'content': templateSpacing['innerHTML'],
                            'trigger': 'click',
                            'interactive': !![],
                            'touch': !![],
                            'hideOnClick': !![],
                            'arrow': !![],
                            'arrowType': 'round',
                            'allowHTML': !![],
                            'theme': 'light-border',
                            'role': 'menu',
                            'placement': 'bottom'
                        });
                    } catch (bE) {
                    }
                    try {
                        templateRounded = document['getElementById']('templateRounded');
                        tippy('#tooltipRounded', {
                            'content': templateRounded['innerHTML'],
                            'trigger': 'click',
                            'interactive': !![],
                            'touch': !![],
                            'hideOnClick': !![],
                            'arrow': !![],
                            'arrowType': 'round',
                            'allowHTML': !![],
                            'theme': 'light-border',
                            'role': 'menu',
                            'placement': 'bottom'
                        });
                    } catch (bF) {
                    }
                    $('#colorTextoShadow')['spectrum']({
                        'showPaletteOnly': !![],
                        'showInput': !![],
                        'showSelectionPalette': !![],
                        'localStorageKey': 'edit.org',
                        'togglePaletteOnly': !![],
                        'togglePaletteMoreText': 'more',
                        'preferredFormat': 'hex',
                        'togglePaletteLessText': 'less',
                        'change': function (bG) {
                            shadowOptions('color', bG['toHexString']());
                            $(this)['css']('background-color', bG['toHexString']());
                        },
                        'palette': [
                            [
                                '#FFFFFF',
                                '#E6E6E6',
                                '#B3B3B3',
                                '#808080',
                                '#4D4D4D',
                                '#1A1A1A',
                                '#000000'
                            ],
                            [
                                '#D3F2F4',
                                '#A1EDF7',
                                '#48D9ED',
                                '#1CAFCF',
                                '#167D8E',
                                '#0F5766',
                                '#034149'
                            ],
                            [
                                '#C5E7F9',
                                '#9BD8FD',
                                '#2DABFC',
                                '#127AC4',
                                '#0E66A1',
                                '#0B456A',
                                '#032F47'
                            ],
                            [
                                '#DCE4F9',
                                '#B6C3F3',
                                '#677EDD',
                                '#3366CC',
                                '#1834A0',
                                '#091F66',
                                '#031238'
                            ],
                            [
                                '#E5CEF4',
                                '#D1A2EA',
                                '#B557DE',
                                '#8830B7',
                                '#5C1B7A',
                                '#3B1154',
                                '#210435'
                            ],
                            [
                                '#F9E1EE',
                                '#FBC6E2',
                                '#F779BB',
                                '#E72389',
                                '#9A0F57',
                                '#60083A',
                                '#3A0325'
                            ],
                            [
                                '#F7D8D5',
                                '#FECAC3',
                                '#FD8373',
                                '#EF2E20',
                                '#A1180E',
                                '#510C02',
                                '#2D0501'
                            ],
                            [
                                '#F7E2D2',
                                '#F7D3B5',
                                '#FDA963',
                                '#FD7D23',
                                '#AD5515',
                                '#512705',
                                '#301602'
                            ],
                            [
                                '#F7EAD7',
                                '#FCE4BE',
                                '#FEC564',
                                '#FDA429',
                                '#A46C19',
                                '#603F08',
                                '#3A2303'
                            ],
                            [
                                '#F9F1D2',
                                '#FEEFB1',
                                '#FEE478',
                                '#FECE2F',
                                '#B7951F',
                                '#64520D',
                                '#493907'
                            ],
                            [
                                '#F9F7D2',
                                '#FFFDB1',
                                '#FFFB7B',
                                '#F3ED3E',
                                '#B8B424',
                                '#797715',
                                '#514D08'
                            ],
                            [
                                '#E4F2C4',
                                '#D8F4A4',
                                '#B9F74D',
                                '#8BEB3B',
                                '#69B02C',
                                '#426E1D',
                                '#284709'
                            ],
                            [
                                '#CBEFD7',
                                '#A4F1BF',
                                '#86F4AA',
                                '#32D364',
                                '#1F893A',
                                '#0C5B22',
                                '#053A11'
                            ],
                            [
                                '#F7B19C',
                                '#57D0FC',
                                '#FB5379',
                                '#FCDA86',
                                '#527CFA',
                                '#59FCAC',
                                '#8266F7'
                            ],
                            [
                                '#FF6700',
                                '#2BF9FE',
                                '#FC0E1C',
                                '#FFFD38',
                                '#FD29FC',
                                '#45FA54',
                                '#1024FB'
                            ],
                            ['transparent']
                        ]
                    });
                    try {
                        templateText = document['getElementById']('textTemplate2');
                        tippy('#textTooltip2', {
                            'content': templateText['innerHTML'],
                            'trigger': 'click',
                            'interactive': !![],
                            'touch': !![],
                            'hideOnClick': !![],
                            'arrow': !![],
                            'arrowType': 'round',
                            'allowHTML': !![],
                            'theme': 'light-border',
                            'role': 'menu',
                            'placement': 'bottom'
                        });
                    } catch (bH) {
                    }
                    try {
                        template = document['getElementById']('alignTemplate');
                        tippy('#tooltip2', {
                            'content': template['innerHTML'],
                            'trigger': 'click',
                            'interactive': !![],
                            'touch': !![],
                            'hideOnClick': !![],
                            'arrow': !![],
                            'arrowType': 'round',
                            'allowHTML': !![],
                            'theme': 'light-border',
                            'role': 'menu',
                            'placement': 'bottom'
                        });
                    } catch (bI) {
                    }
                    if (canvas['getActiveObject']()) {
                        if (canvas['getActiveObject']()['get']('fill')) {
                            if (checkRgb2(canvas['getActiveObject']()['get']('fill'))) {
                                if (activar_notificaciones == 0x1)
                                    console['log'](canvas['getActiveObject']()['get']('fill'));
                                obj_fill = rgbaToHex(canvas['getActiveObject']()['get']('fill'));
                            } else {
                                obj_fill = canvas['getActiveObject']()['get']('fill');
                            }
                            if (activar_notificaciones == 0x1)
                                console['log']('aaaaaaaaaaa' + obj_fill);
                            $('#colorchanger')['css']('background-color', obj_fill);
                            $('#div_color')['css']('background-color', obj_fill);
                        }
                        if (canvas['getActiveObject']()['get']('stroke')) {
                            if (checkRgb2(canvas['getActiveObject']()['get']('stroke'))) {
                                if (activar_notificaciones == 0x1)
                                    console['log'](canvas['getActiveObject']()['get']('stroke'));
                                obj_fill = rgbaToHex(canvas['getActiveObject']()['get']('stroke'));
                            } else {
                                obj_fill = canvas['getActiveObject']()['get']('stroke');
                            }
                            if (activar_notificaciones == 0x1)
                                console['log']('bbbbbbbbbbbbb' + obj_fill);
                            $('#div_color2')['css']('border', '4px\x20solid\x20' + obj_fill);
                        }
                    }
                    if (cargamos_subir_bajar1 && $('#width_object')['length'] > 0x0 && canvas['getActiveObject']()) {
                        width_object = canvas['getActiveObject']()['width'] * canvas['getActiveObject']()['scaleX'];
                        height_object = canvas['getActiveObject']()['height'] * canvas['getActiveObject']()['scaleY'];
                        document['getElementById']('width_object')['value'] = Math['round'](width_object);
                        document['getElementById']('height_object')['value'] = Math['round'](height_object);
                    }
                    if (canvas['getActiveObject']()) {
                        if (canvas['getActiveObject']()['get']('type') == 'image') {
                            $('.filtros_button')['show']();
                            $('.filtros_button')['slideUp'](0x1f4)['slideDown'](0x1f4);
                        } else {
                            $('.filtros_button')['hide']();
                        }
                        if (canvas['getActiveObject']()['get']('id') == 'replaceImage') {
                            if (MostrarReemplazarImagen != 'NO') {
                                document['getElementById']('reemplazarImagen')['style']['border'] = 'thin\x20solid\x20red';
                            } else {
                                if (activar_notificaciones == 0x1)
                                    console['log']('Reemplazar\x20imagen\x20No\x20mostrado');
                            }
                        }
                    }
                    if (addStickers == 0x1) {
                        addStickers = 0x0;
                        if (activar_notificaciones == 0x1)
                            console['log']('add\x20stickers');
                    }
                    var bJ = document['getElementById']('scaleControl');
                    if (typeof bJ != 'undefined' && bJ != null && canvas['getActiveObject']()) {
                        document['getElementById']('scaleControl')['value'] = canvas['getActiveObject']()['get']('ScaleX');
                    }
                    if (canvas['getActiveObject']()) {
                        if (activar_notificaciones == 0x1)
                            console['log']('este\x20objeto\x20es\x20un:' + canvas['getActiveObject']()['get']('type'));
                        if (canvas['getActiveObject']()['get']('type') == 'rect' || canvas['getActiveObject']()['get']('type') == 'polygon' || canvas['getActiveObject']()['get']('type') == 'path' || canvas['getActiveObject']()['get']('type') == 'circle' || canvas['getActiveObject']()['get']('type') == 'rect' && typeof canvas['getActiveObject']()['get']('strokeWidth') !== 'undefined') {
                            if (typeof canvas['getActiveObject']()['get']('stroke_value_info') !== 'undefined') {
                                document['getElementById']('stroke_value_info')['innerHTML'] = '\x20' + canvas['getActiveObject']()['get']('strokeWidth');
                            }
                        }
                        if (canvas['getActiveObject']()['get']('type') == 'activeSelection' || canvas['getActiveObject']()['get']('type') == 'textbox' || canvas['getActiveObject']()['get']('type') == 'i-text' || canvas['getActiveObject']()['get']('type') == 'rect' || canvas['getActiveObject']()['get']('type') == 'polygon' || canvas['getActiveObject']()['get']('type') == 'path' || canvas['getActiveObject']()['get']('type') == 'circle' || canvas['getActiveObject']()['get']('type') == 'rect') {
                            var bK = document['getElementById']('sizeLineHeightTexto');
                            if (typeof bK != 'undefined' && bK != null) {
                                if (canvas['getActiveObject']()['get']('stroke') == '' || !canvas['getActiveObject']()['get']('stroke')) {
                                    try {
                                        $('#colorTextoBorde')['spectrum']('set', '#FFF');
                                    } catch (bL) {
                                    }
                                    try {
                                        document['getElementById']('colorTextoBorde')['value'] = '#FFF';
                                    } catch (bM) {
                                    }
                                } else {
                                    $('#colorTextoBorde')['spectrum']('set', canvas['getActiveObject']()['get']('stroke'));
                                    try {
                                        document['getElementById']('colorTextoBorde')['value'] = canvas['getActiveObject']()['get']('stroke');
                                    } catch (bN) {
                                    }
                                }
                                $('#SizeTextoBorde')['val'](canvas['getActiveObject']()['get']('strokeWidth'));
                                $('#sizeCharSpacingTexto')['val'](canvas['getActiveObject']()['charSpacing']);
                                $('#sizeLineHeightTexto')['val'](canvas['getActiveObject']()['lineHeight']);
                                try {
                                    document['getElementById']('infoLineHeightTexto')['innerHTML'] = canvas['getActiveObject']()['lineHeight'];
                                    document['getElementById']('infoCharSpacingTexto')['innerHTML'] = canvas['getActiveObject']()['charSpacing'];
                                    document['getElementById']('infoSizeTextoBorde')['innerHTML'] = canvas['getActiveObject']()['get']('strokeWidth');
                                } catch (bO) {
                                    console['log']('FALLO\x20en\x20linea\x202606');
                                }
                            }
                            if (typeof canvas['getActiveObject']()['get']('stroke')) {
                            }
                            console['log'](canvas['getActiveObject']()['get']('type'));
                            if (canvas['getActiveObject']()['get']('type') == 'image' || canvas['getActiveObject']()['get']('type') == 'activeSelection' || canvas['getActiveObject']()['get']('type') == 'textbox' || canvas['getActiveObject']()['get']('type') == 'i-text' || canvas['getActiveObject']()['get']('type') == 'path' || canvas['getActiveObject']()['get']('type') == 'circle' || canvas['getActiveObject']()['get']('type') == 'rect') {
                                $('#colorTextoBorde')['spectrum']({
                                    'color': '#FFF',
                                    'showPaletteOnly': !![],
                                    'showInput': !![],
                                    'showSelectionPalette': !![],
                                    'localStorageKey': 'edit.org',
                                    'togglePaletteOnly': !![],
                                    'togglePaletteMoreText': 'more',
                                    'preferredFormat': 'hex',
                                    'togglePaletteLessText': 'less',
                                    'change': function (bP) {
                                        document['getElementById']('colorTextoBorde')['value'] = bP;
                                        document['getElementById']('colorTextoStroke2')['value'] = bP;
                                    },
                                    'palette': [
                                        [
                                            '#FFFFFF',
                                            '#E6E6E6',
                                            '#B3B3B3',
                                            '#808080',
                                            '#4D4D4D',
                                            '#1A1A1A',
                                            '#000000'
                                        ],
                                        [
                                            '#D3F2F4',
                                            '#A1EDF7',
                                            '#48D9ED',
                                            '#1CAFCF',
                                            '#167D8E',
                                            '#0F5766',
                                            '#034149'
                                        ],
                                        [
                                            '#C5E7F9',
                                            '#9BD8FD',
                                            '#2DABFC',
                                            '#127AC4',
                                            '#0E66A1',
                                            '#0B456A',
                                            '#032F47'
                                        ],
                                        [
                                            '#DCE4F9',
                                            '#B6C3F3',
                                            '#677EDD',
                                            '#3366CC',
                                            '#1834A0',
                                            '#091F66',
                                            '#031238'
                                        ],
                                        [
                                            '#E5CEF4',
                                            '#D1A2EA',
                                            '#B557DE',
                                            '#8830B7',
                                            '#5C1B7A',
                                            '#3B1154',
                                            '#210435'
                                        ],
                                        [
                                            '#F9E1EE',
                                            '#FBC6E2',
                                            '#F779BB',
                                            '#E72389',
                                            '#9A0F57',
                                            '#60083A',
                                            '#3A0325'
                                        ],
                                        [
                                            '#F7D8D5',
                                            '#FECAC3',
                                            '#FD8373',
                                            '#EF2E20',
                                            '#A1180E',
                                            '#510C02',
                                            '#2D0501'
                                        ],
                                        [
                                            '#F7E2D2',
                                            '#F7D3B5',
                                            '#FDA963',
                                            '#FD7D23',
                                            '#AD5515',
                                            '#512705',
                                            '#301602'
                                        ],
                                        [
                                            '#F7EAD7',
                                            '#FCE4BE',
                                            '#FEC564',
                                            '#FDA429',
                                            '#A46C19',
                                            '#603F08',
                                            '#3A2303'
                                        ],
                                        [
                                            '#F9F1D2',
                                            '#FEEFB1',
                                            '#FEE478',
                                            '#FECE2F',
                                            '#B7951F',
                                            '#64520D',
                                            '#493907'
                                        ],
                                        [
                                            '#F9F7D2',
                                            '#FFFDB1',
                                            '#FFFB7B',
                                            '#F3ED3E',
                                            '#B8B424',
                                            '#797715',
                                            '#514D08'
                                        ],
                                        [
                                            '#E4F2C4',
                                            '#D8F4A4',
                                            '#B9F74D',
                                            '#8BEB3B',
                                            '#69B02C',
                                            '#426E1D',
                                            '#284709'
                                        ],
                                        [
                                            '#CBEFD7',
                                            '#A4F1BF',
                                            '#86F4AA',
                                            '#32D364',
                                            '#1F893A',
                                            '#0C5B22',
                                            '#053A11'
                                        ],
                                        [
                                            '#F7B19C',
                                            '#57D0FC',
                                            '#FB5379',
                                            '#FCDA86',
                                            '#527CFA',
                                            '#59FCAC',
                                            '#8266F7'
                                        ],
                                        [
                                            '#FF6700',
                                            '#2BF9FE',
                                            '#FC0E1C',
                                            '#FFFD38',
                                            '#FD29FC',
                                            '#45FA54',
                                            '#1024FB'
                                        ],
                                        ['transparent']
                                    ]
                                });
                                if (activar_notificaciones == 0x1)
                                    console['log'](canvas['getActiveObject']()['fontFamily']);
                                if (canvas['getActiveObject']()['fontFamily']) {
                                    var bK = document['getElementById']('fuente_por_defecto');
                                    if (typeof bK != 'undefined' && bK != null) {
                                        document['getElementById']('fuente_por_defecto')['src'] = '/editor/ttf/thumbs/' + canvas['getActiveObject']()['fontFamily'] + '.png';
                                    }
                                }
                            }
                            var bK = document['getElementById']('tamanyoTexto');
                            if (typeof bK != 'undefined' && bK != null) {
                                if (activar_notificaciones == 0x1)
                                    console['log'](canvas['getActiveObject']()['fontSize']);
                                $('select[id=tamanyoTexto]')['val'](canvas['getActiveObject']()['fontSize']);
                            }
                            if (typeof canvas['getActiveObject']()['get']('stroke') !== 'undefined' && typeof canvas['getActiveObject']()['get']('strokeValue') !== 'undefined') {
                                var bS = rgb2hex(canvas['getActiveObject']()['get']('stroke'));
                                document['getElementById']('colorTextoStroke2')['value'] = bS;
                                document['getElementById']('strokeValue')['value'] = canvas['getActiveObject']()['get']('strokeWidth');
                            } else {
                                document['getElementById']('colorTextoStroke2')['value'] = '#FFF';
                            }
                            if (activar_notificaciones == 0x1)
                                console['log'](bS);
                            $('#colorTextoStroke')['css']('background-color', document['getElementById']('colorTextoStroke2')['value']);
                            $('#colorTextoStroke')['spectrum']({
                                'showPaletteOnly': !![],
                                'showSelectionPalette': !![],
                                'localStorageKey': 'edit.org',
                                'togglePaletteOnly': !![],
                                'togglePaletteMoreText': 'more',
                                'preferredFormat': 'hex',
                                'togglePaletteLessText': 'less',
                                'showInput': !![],
                                'change': function (bT) {
                                    document['getElementById']('colorTextoStroke2')['value'] = bT;
                                    cambioColorTextoStroke();
                                    $('#div_color2')['css']('border', '4px\x20solid\x20' + bT);
                                },
                                'move': function (bU) {
                                    try {
                                        document['getElementById']('colorTextoStroke2')['value'] = bU;
                                        cambioColorTextoStroke();
                                        $('#div_color2')['css']('border', '4px\x20solid\x20' + bU);
                                    } catch (bV) {
                                    }
                                },
                                'palette': [
                                    [
                                        '#FFFFFF',
                                        '#E6E6E6',
                                        '#B3B3B3',
                                        '#808080',
                                        '#4D4D4D',
                                        '#1A1A1A',
                                        '#000000'
                                    ],
                                    [
                                        '#D3F2F4',
                                        '#A1EDF7',
                                        '#48D9ED',
                                        '#1CAFCF',
                                        '#167D8E',
                                        '#0F5766',
                                        '#034149'
                                    ],
                                    [
                                        '#C5E7F9',
                                        '#9BD8FD',
                                        '#2DABFC',
                                        '#127AC4',
                                        '#0E66A1',
                                        '#0B456A',
                                        '#032F47'
                                    ],
                                    [
                                        '#DCE4F9',
                                        '#B6C3F3',
                                        '#677EDD',
                                        '#3366CC',
                                        '#1834A0',
                                        '#091F66',
                                        '#031238'
                                    ],
                                    [
                                        '#E5CEF4',
                                        '#D1A2EA',
                                        '#B557DE',
                                        '#8830B7',
                                        '#5C1B7A',
                                        '#3B1154',
                                        '#210435'
                                    ],
                                    [
                                        '#F9E1EE',
                                        '#FBC6E2',
                                        '#F779BB',
                                        '#E72389',
                                        '#9A0F57',
                                        '#60083A',
                                        '#3A0325'
                                    ],
                                    [
                                        '#F7D8D5',
                                        '#FECAC3',
                                        '#FD8373',
                                        '#EF2E20',
                                        '#A1180E',
                                        '#510C02',
                                        '#2D0501'
                                    ],
                                    [
                                        '#F7E2D2',
                                        '#F7D3B5',
                                        '#FDA963',
                                        '#FD7D23',
                                        '#AD5515',
                                        '#512705',
                                        '#301602'
                                    ],
                                    [
                                        '#F7EAD7',
                                        '#FCE4BE',
                                        '#FEC564',
                                        '#FDA429',
                                        '#A46C19',
                                        '#603F08',
                                        '#3A2303'
                                    ],
                                    [
                                        '#F9F1D2',
                                        '#FEEFB1',
                                        '#FEE478',
                                        '#FECE2F',
                                        '#B7951F',
                                        '#64520D',
                                        '#493907'
                                    ],
                                    [
                                        '#F9F7D2',
                                        '#FFFDB1',
                                        '#FFFB7B',
                                        '#F3ED3E',
                                        '#B8B424',
                                        '#797715',
                                        '#514D08'
                                    ],
                                    [
                                        '#E4F2C4',
                                        '#D8F4A4',
                                        '#B9F74D',
                                        '#8BEB3B',
                                        '#69B02C',
                                        '#426E1D',
                                        '#284709'
                                    ],
                                    [
                                        '#CBEFD7',
                                        '#A4F1BF',
                                        '#86F4AA',
                                        '#32D364',
                                        '#1F893A',
                                        '#0C5B22',
                                        '#053A11'
                                    ],
                                    [
                                        '#F7B19C',
                                        '#57D0FC',
                                        '#FB5379',
                                        '#FCDA86',
                                        '#527CFA',
                                        '#59FCAC',
                                        '#8266F7'
                                    ],
                                    [
                                        '#FF6700',
                                        '#2BF9FE',
                                        '#FC0E1C',
                                        '#FFFD38',
                                        '#FD29FC',
                                        '#45FA54',
                                        '#1024FB'
                                    ],
                                    ['transparent']
                                ]
                            });
                        }
                    }
                    if (activar_notificaciones == 0x1)
                        console['log'](document['getElementById']('colorGeneral')['value']);
                    var bK = document['getElementById']('scaleControl');
                    if (typeof bK != 'undefined' && bK != null) {
                        try {
                            document['getElementById']('scaleControl')['value'] = canvas['getActiveObject']()['get']('scaleX');
                        } catch (bX) {
                        }
                    }
                    $('#colorchanger')['spectrum']({
                        'color': document['getElementById']('colorGeneral')['value'],
                        'showPaletteOnly': !![],
                        'showSelectionPalette': !![],
                        'localStorageKey': 'edit.org',
                        'togglePaletteOnly': !![],
                        'togglePaletteMoreText': 'more',
                        'preferredFormat': 'hex',
                        'togglePaletteLessText': 'less',
                        'showInput': !![],
                        'show': function (bY) {
                            if (canvas['getActiveObject']()) {
                                var bZ = canvas['getActiveObject']()['get']('fill');
                                if (bZ) {
                                    var c0 = /^#[0-9A-F]{6}$/i['test'](bZ);
                                    if (!c0) {
                                        bZ = rgb2hex(bZ);
                                    }
                                    var c0 = /^#[0-9A-F]{6}$/i['test'](bZ);
                                    if (c0) {
                                        var c2 = bZ;
                                        var bk = c2['replace']('#', '');
                                        $('#colorchanger')['spectrum']('set', bk);
                                        if (activar_notificaciones == 0x1)
                                            console['log'](bk + 'aaaaaaaaaaaa');
                                    }
                                }
                            }
                        },
                        'select': function (c4) {
                            $('#colorchanger')['spectrum']('set', c4);
                            canvasDemo['updateCanvasState']();
                        },
                        'move': function (c5) {
                            document['getElementById']('colorGeneral')['value'] = c5;
                            $(this)['css']('background-color', c5['toHexString']());
                            try {
                                cambioColorPintar();
                                $('#colorchanger')['spectrum']('set', c5);
                                if (document['getElementById']('colorPintar')['value']) {
                                    document['getElementById']('colorPintar')['value'] = document['getElementById']('colorGeneral')['value'];
                                }
                            } catch (c6) {
                            }
                            var c7 = canvas['getActiveObject']();
                            if (canvas['getActiveObject']()) {
                                if (canvas['getActiveObject']()['get']('type') == 'activeSelection') {
                                    var c8 = canvas['getActiveObjects']();
                                }
                            }
                            path_or_group = 0x0;
                            if (c7) {
                                if (canvas['getActiveObject']()['get']('type') == 'path' || canvas['getActiveObject']()['get']('type') == 'group') {
                                    path_or_group = 0x1;
                                }
                            }
                            if (path_or_group == 0x1) {
                                console['log']('change\x20color\x2011');
                                if (activar_notificaciones == 0x1)
                                    console['log']('PATH\x20OR\x20GROUP');
                                if (canvas['getActiveObject']()['get']('type') == 'group') {
                                    canvas['getActiveObject']()['forEachObject'](function (c9) {
                                        if (activar_notificaciones == 0x1)
                                            console['log']('entramos\x20en\x20el\x20grupo');
                                        if (c9['styles']) {
                                            var ca = c9['styles'];
                                            for (var cb in ca) {
                                                for (var cc in ca[cb]) {
                                                    if ('fill' in ca[cb][cc]) {
                                                        delete ca[cb][cc]['fill'];
                                                    }
                                                }
                                            }
                                        }
                                        var cd = {};
                                        cd['fill'] = c5['toRgbString']();
                                        c9['set'](cd);
                                        c9['set']('fill', c5['toRgbString']());
                                    });
                                } else {
                                    canvas['getActiveObject']()['set']('fill', c5['toRgbString']());
                                }
                                canvas['renderAll']();
                                if (activar_notificaciones == 0x1)
                                    console['log']('entramos');
                            } else if (c8) {
                                console['log']('change\x20color\x2022');
                                var ce = canvas['getActiveObjects']();
                                ce['forEach'](function (cf) {
                                    if (activar_notificaciones == 0x1)
                                        console['log'](cf['get']('type') + 'changeCOlor');
                                    if (cf['get']('type') == 'i-text' || cf['get']('type') == 'textbox') {
                                        if (cf['setSelectionStyles'] && cf['isEditing']) {
                                            setActiveStyle('fill', document['getElementById']('colorGeneral')['value']);
                                            if (activar_notificaciones == 0x1)
                                                console['log']('is\x20editing');
                                        } else {
                                            if (cf['styles']) {
                                                var cg = cf['styles'];
                                                for (var ch in cg) {
                                                    for (var ci in cg[ch]) {
                                                        if ('fill' in cg[ch][ci]) {
                                                            delete cg[ch][ci]['fill'];
                                                        }
                                                    }
                                                }
                                            }
                                            cf['set']('fill', c5['toRgbString']());
                                            if (activar_notificaciones == 0x1)
                                                console['log']('is\x20not\x20editing\x20');
                                        }
                                    } else {
                                        if (cf['get']('type') == 'rect' || cf['get']('type') == 'polygon' || cf['get']('type') == 'textbox') {
                                            cf['set']('fill', c5['toRgbString']());
                                            canvas['renderAll']();
                                        } else {
                                            try {
                                                cf['set']('fill', c5['toRgbString']());
                                                canvas['renderAll']();
                                            } catch (cj) {
                                                send_error_to_log(cj + 'error_code_12');
                                            }
                                        }
                                    }
                                });
                                canvas['renderAll']();
                                return ![];
                            } else if (c7) {
                                canvasDemo['updateCanvasState']();
                                console['log']('change\x20color\x2033');
                                if (c7['get']('type') == 'i-text' || c7['get']('type') == 'textbox') {
                                    cambioColorTexto();
                                } else {
                                    if (c7['get']('type') == 'rect' || c7['get']('type') == 'polygon' || c7['get']('type') == 'textbox') {
                                        c7['set']('fill', c5['toRgbString']());
                                        canvas['renderAll']();
                                    } else {
                                        try {
                                            c7['set']('fill', c5['toRgbString']());
                                            canvas['renderAll']();
                                        } catch (ck) {
                                            send_error_to_log(ck + 'error_code_16');
                                        }
                                    }
                                }
                                return ![];
                            } else {
                                console['log']('change\x20background\x20color');
                                setFondoColorSeleccionado(c5['toRgbString']());
                            }
                            cambioColorGeneral();
                        },
                        'palette': [
                            [
                                '#FFFFFF',
                                '#E6E6E6',
                                '#B3B3B3',
                                '#808080',
                                '#4D4D4D',
                                '#1A1A1A',
                                '#000000'
                            ],
                            [
                                '#D3F2F4',
                                '#A1EDF7',
                                '#48D9ED',
                                '#1CAFCF',
                                '#167D8E',
                                '#0F5766',
                                '#034149'
                            ],
                            [
                                '#C5E7F9',
                                '#9BD8FD',
                                '#2DABFC',
                                '#127AC4',
                                '#0E66A1',
                                '#0B456A',
                                '#032F47'
                            ],
                            [
                                '#DCE4F9',
                                '#B6C3F3',
                                '#677EDD',
                                '#3366CC',
                                '#1834A0',
                                '#091F66',
                                '#031238'
                            ],
                            [
                                '#E5CEF4',
                                '#D1A2EA',
                                '#B557DE',
                                '#8830B7',
                                '#5C1B7A',
                                '#3B1154',
                                '#210435'
                            ],
                            [
                                '#F9E1EE',
                                '#FBC6E2',
                                '#F779BB',
                                '#E72389',
                                '#9A0F57',
                                '#60083A',
                                '#3A0325'
                            ],
                            [
                                '#F7D8D5',
                                '#FECAC3',
                                '#FD8373',
                                '#EF2E20',
                                '#A1180E',
                                '#510C02',
                                '#2D0501'
                            ],
                            [
                                '#F7E2D2',
                                '#F7D3B5',
                                '#FDA963',
                                '#FD7D23',
                                '#AD5515',
                                '#512705',
                                '#301602'
                            ],
                            [
                                '#F7EAD7',
                                '#FCE4BE',
                                '#FEC564',
                                '#FDA429',
                                '#A46C19',
                                '#603F08',
                                '#3A2303'
                            ],
                            [
                                '#F9F1D2',
                                '#FEEFB1',
                                '#FEE478',
                                '#FECE2F',
                                '#B7951F',
                                '#64520D',
                                '#493907'
                            ],
                            [
                                '#F9F7D2',
                                '#FFFDB1',
                                '#FFFB7B',
                                '#F3ED3E',
                                '#B8B424',
                                '#797715',
                                '#514D08'
                            ],
                            [
                                '#E4F2C4',
                                '#D8F4A4',
                                '#B9F74D',
                                '#8BEB3B',
                                '#69B02C',
                                '#426E1D',
                                '#284709'
                            ],
                            [
                                '#CBEFD7',
                                '#A4F1BF',
                                '#86F4AA',
                                '#32D364',
                                '#1F893A',
                                '#0C5B22',
                                '#053A11'
                            ],
                            [
                                '#F7B19C',
                                '#57D0FC',
                                '#FB5379',
                                '#FCDA86',
                                '#527CFA',
                                '#59FCAC',
                                '#8266F7'
                            ],
                            [
                                '#FF6700',
                                '#2BF9FE',
                                '#FC0E1C',
                                '#FFFD38',
                                '#FD29FC',
                                '#45FA54',
                                '#1024FB'
                            ],
                            ['transparent']
                        ],
                        'change': function (cl) {
                            if (cl['alpha'] === 0x0)
                                cl = 'transparent';
                            else
                                cl = cl['toHexString']();
                            $(this)['val'](cl);
                            if (canvas['getActiveObject']()) {
                                if (canvas['getActiveObject']()['get']('type') == 'image') {
                                    cambioColorPassColor(cl);
                                }
                            }
                            $(this)['css']('background-color', cl);
                            $('#colorchanger')['spectrum']('set', cl);
                        }
                    });
                } else {
                    console['log']('No\x20change\x20on\x20BAR');
                }
            }
        };
        ajax['send'](null);
    }
}
var mouseTimeout;
var mouseTimeoutShort;
var mouseStatus = '';
canvas['on']('mouse:down', function (cm) {
    mouseStatus = 'down';
    if (number_of_layers_document == 0x0) {
    }
    if (canvas['getActiveObject']()) {
        if (activar_notificaciones == 0x1)
            console['log']('\x20');
        if (activar_notificaciones == 0x1)
            console['log']('Font-size:\x20' + canvas['getActiveObject']()['get']('fontSize'));
    }
    $('.userBlock')['removeClass']('activeOptionsUser');
    if ($('#similar2')['length'] > 0x0) {
        marcar_colores();
    } else {
    }
});
var mouseX;
var mouseY;
var showTooltipDrag = 0x0;
canvas['on']('mouse:move', function (cn) {
    var co = canvas['getPointer'](cn['e']);
    mouseX = co['x'];
    mouseY = co['y'];
    var cp = canvas['getActiveObject']();
    if (cp && mouseStatus == 'down') {
        var cq = Math['round'](cp['left']);
        var cr = Math['round'](cp['top']);
        document['getElementById']('coords_size')['innerHTML'] = '' + parseInt(cq) + '' + '\x20x\x20' + parseInt(cr);
    }
});
var changeImageid_on_drag_over = 0x0;
var opacityArrays = [];
var scaleArrays = [];
if (estamos_en_fotoefectos != '1') {
    try {
        function handleDrop(cs) {
            console['log']('we\x20are\x20handling\x20events');
        }
    } catch (ct) {
        send_error_to_log(ct + 'error_code_19');
    }
    var draggable = document['getElementById']('workspace-section');
    draggable['addEventListener']('dragover', function (cu) {
        if (document['getElementById']('changeImageid')['value']) {
            cu['dataTransfer']['dropEffect'] = 'move';
            console['log']('dragstart');
        } else {
            cu['dataTransfer']['dropEffect'] = 'copy';
        }
    });
    var text_overlay;
    canvas['on']('dragover', function (cv) {
        if (id_imagen_drag_dropSRC == 'squareShape' || id_imagen_drag_dropSRC == 'square' || id_imagen_drag_dropSRC == 'circleShape' || id_imagen_drag_dropSRC == 'circle') {
        } else {
            if (opacityArrays['length'] == 0x0) {
                canvas['getObjects']()['forEach'](function (cw) {
                    opacityArrays[cw['id']] = cw['get']('opacity');
                });
            }
            if (!document['getElementById']('changeImageid')['value'] || changeImageid_on_drag_over) {
                if (cv['target']) {
                    if (cv['target']['id'] != document['getElementById']('changeImageid')['value'] && (cv['target'] && (cv['target']['get']('type') == 'image' || cv['target']['get']('type') == 'group' || cv['target']['get']('type') == 'path'))) {
                        if (changeImageid_on_drag_over) {
                            canvas['getObjects']()['forEach'](function (cx) {
                                if (cx['id'] === changeImageid_on_drag_over) {
                                    cx['set']('opacity', opacityArrays[cx['id']]);
                                    canvas['renderAll']();
                                }
                            });
                        }
                        cv['target']['set']('opacity', '0.8');
                        canvas['renderAll']();
                        console['log'](id_imagen_drag_dropSRC);
                        canvas['renderAll']();
                        changeImageid_on_drag_over = cv['target']['id'];
                        console['log'](cv['target']['id']);
                        document['getElementById']('changeImageid')['value'] = cv['target']['id'];
                    } else if (cv['target']['id'] == document['getElementById']('changeImageid')['value']) {
                    } else if (changeImageid_on_drag_over && (cv['target']['get']('type') != 'image' && cv['target']['get']('type') != 'group' && cv['target']['get']('type') != 'path')) {
                        console['log']('NO' + cv['target']['id'] + '\x20' + cv['target']['get']('type'));
                        document['getElementById']('changeImageid')['value'] = '';
                        if (changeImageid_on_drag_over) {
                            canvas['getObjects']()['forEach'](function (cy) {
                                if (cy['id'] === changeImageid_on_drag_over) {
                                    console['log']('cambiamos\x20opacidad:\x20' + opacityArrays[cy['id']]);
                                    cy['set']('opacity', opacityArrays[cy['id']]);
                                    canvas['renderAll']();
                                }
                            });
                        }
                    } else {
                        console['log']('OUT\x20OF\x20SPACE');
                    }
                } else {
                }
            } else {
                console['log']('out\x202');
            }
        }
    });
    canvas['on']('dragleave', function (cz) {
        console['log']('drag\x20leave');
        if (changeImageid_on_drag_over) {
            canvas['getObjects']()['forEach'](function (cA) {
                if (cA['id'] == changeImageid_on_drag_over) {
                    if (cz['target']) {
                        console['log']('opacidad:\x20' + opacityArrays[cA['id']]);
                        cA['set']('opacity', opacityArrays[cA['id']]);
                        canvas['renderAll']();
                        changeImageid_on_drag_over = '';
                        document['getElementById']('changeImageid')['value'] = '';
                    }
                }
            });
        }
    });
}
function initAligningGuidelines(cB) {
    var cC = cB['getSelectionContext'](), cD = 0x5, cE = 0x4, cF = 0x1, cG = color_lineas_ayuda, cH, cI = 0x1;
    function cJ(cK) {
        cN(cK['x'] + 0.5, cK['y1'] > cK['y2'] ? cK['y2'] : cK['y1'], cK['x'] + 0.5, cK['y2'] > cK['y1'] ? cK['y2'] : cK['y1']);
    }
    function cL(cM) {
        cN(cM['x1'] > cM['x2'] ? cM['x2'] : cM['x1'], cM['y'] + 0.5, cM['x2'] > cM['x1'] ? cM['x2'] : cM['x1'], cM['y'] + 0.5);
    }
    function cN(cO, cP, cQ, cR) {
        cC['save']();
        cC['lineWidth'] = cF;
        cC['strokeStyle'] = cG;
        cC['beginPath']();
        cC['moveTo']((cO + cH[0x4]) * cI, (cP + cH[0x5]) * cI);
        cC['lineTo']((cQ + cH[0x4]) * cI, (cR + cH[0x5]) * cI);
        cC['stroke']();
        cC['restore']();
    }
    function cS(cT, cU) {
        cT = Math['round'](cT);
        cU = Math['round'](cU);
        for (var cV = cT - cE, cW = cT + cE; cV <= cW; cV++) {
            if (cV === cU) {
                return !![];
            }
        }
        return ![];
    }
    var cX = [], cY = [];
    cB['on']('mouse:down', function () {
        cH = cB['viewportTransform'];
        cI = cB['getZoom']();
    });
    if (sistema_bloqueo_capas == 0x1) {
        cB['on']('mouse:up', function (cZ) {
            if (cB['getActiveObject']()) {
                var d0 = cB['getActiveObject']();
                d0['hasControls'] = !![];
                d0['hasBorders'] = !![];
            }
        });
    }
    cB['on']('object:scaling', function (d1) {
        var d2 = d1['target'], d3 = cB['getObjects'](), d4 = d2['getCenterPoint'](), d5 = d4['x'], d6 = d4['y'], d7 = d2['getBoundingRect']()['height'] / cH[0x3], d8 = d2['getBoundingRect']()['width'] / cH[0x0], d9 = ![], da = ![], db = cB['_currentTransform'];
        var dc = d2['get']('width') * d2['get']('scaleX');
        var dd = d2['get']('height') * d2['get']('scaleY');
        document['getElementById']('coords_size')['style']['display'] = '';
        document['getElementById']('coords_size')['innerHTML'] = traduccion_javascript_object_size + '\x20' + Math['round'](dc) + '\x20x\x20' + Math['round'](dd);
        if (!db)
            return;
        for (var de = d3['length']; de--;) {
            if (d3[de] === d2)
                continue;
            var df = d3[de]['getCenterPoint'](), dg = df['x'], dh = df['y'], di = d3[de]['getBoundingRect']()['height'] / cH[0x3], dj = d3[de]['getBoundingRect']()['width'] / cH[0x0];
            if (cS(dg, d5)) {
                da = !![];
                cX['push']({
                    'x': dg,
                    'y1': dh < d6 ? dh - di / 0x2 - cD : dh + di / 0x2 + cD,
                    'y2': d6 > dh ? d6 + d7 / 0x2 + cD : d6 - d7 / 0x2 - cD
                });
            }
            if (cS(dg - dj / 0x2, d5 - d8 / 0x2)) {
                da = !![];
                cX['push']({
                    'x': dg - dj / 0x2,
                    'y1': dh < d6 ? dh - di / 0x2 - cD : dh + di / 0x2 + cD,
                    'y2': d6 > dh ? d6 + d7 / 0x2 + cD : d6 - d7 / 0x2 - cD
                });
            }
            if (cS(dg + dj / 0x2, d5 + d8 / 0x2)) {
                da = !![];
                cX['push']({
                    'x': dg + dj / 0x2,
                    'y1': dh < d6 ? dh - di / 0x2 - cD : dh + di / 0x2 + cD,
                    'y2': d6 > dh ? d6 + d7 / 0x2 + cD : d6 - d7 / 0x2 - cD
                });
            }
            if (cS(dh, d6)) {
                d9 = !![];
                cY['push']({
                    'y': dh,
                    'x1': dg < d5 ? dg - dj / 0x2 - cD : dg + dj / 0x2 + cD,
                    'x2': d5 > dg ? d5 + d8 / 0x2 + cD : d5 - d8 / 0x2 - cD
                });
            }
            if (cS(dh - di / 0x2, d6 - d7 / 0x2)) {
                d9 = !![];
                cY['push']({
                    'y': dh - di / 0x2,
                    'x1': dg < d5 ? dg - dj / 0x2 - cD : dg + dj / 0x2 + cD,
                    'x2': d5 > dg ? d5 + d8 / 0x2 + cD : d5 - d8 / 0x2 - cD
                });
            }
            if (cS(dh + di / 0x2, d6 + d7 / 0x2)) {
                d9 = !![];
                cY['push']({
                    'y': dh + di / 0x2,
                    'x1': dg < d5 ? dg - dj / 0x2 - cD : dg + dj / 0x2 + cD,
                    'x2': d5 > dg ? d5 + d8 / 0x2 + cD : d5 - d8 / 0x2 - cD
                });
            }
        }
        if (!d9) {
            cY['length'] = 0x0;
        }
        if (!da) {
            cX['length'] = 0x0;
        }
        console['log']('scaling....');
    });
    cB['on']('object:moving', function (dk) {
        if (sistema_bloqueo_capas == 0x1) {
            if (IsSafari() != 'mac') {
                var dl = cB['getActiveObject']();
                clearTimeout(mouseTimeoutShort);
                clearTimeout(mouseTimeout);
                if (dl['get']('type') == 'text' || dl['get']('type') == 'i-text' || dl['get']('type') == 'textbox') {
                    dl['exitEditing']();
                }
            }
        }
        var dm = dk['target'], dn = cB['getObjects'](), dp = dm['getCenterPoint'](), dq = dp['x'], dr = dp['y'], ds = dm['getBoundingRect']()['height'] / cH[0x3], dt = dm['getBoundingRect']()['width'] / cH[0x0], du = ![], dv = ![], dw = cB['_currentTransform'];
        if (!dw)
            return;
        for (var dx = dn['length']; dx--;) {
            if (dn[dx] === dm)
                continue;
            var dy = dn[dx]['getCenterPoint'](), dz = dy['x'], dA = dy['y'], dB = dn[dx]['getBoundingRect']()['height'] / cH[0x3], dC = dn[dx]['getBoundingRect']()['width'] / cH[0x0];
            if (cS(dz, dq)) {
                dv = !![];
                cX['push']({
                    'x': dz,
                    'y1': dA < dr ? dA - dB / 0x2 - cD : dA + dB / 0x2 + cD,
                    'y2': dr > dA ? dr + ds / 0x2 + cD : dr - ds / 0x2 - cD
                });
                dm['setPositionByOrigin'](new fabric['Point'](dz, dr), 'center', 'center');
            }
            if (cS(dz - dC / 0x2, dq - dt / 0x2)) {
                dv = !![];
                cX['push']({
                    'x': dz - dC / 0x2,
                    'y1': dA < dr ? dA - dB / 0x2 - cD : dA + dB / 0x2 + cD,
                    'y2': dr > dA ? dr + ds / 0x2 + cD : dr - ds / 0x2 - cD
                });
                dm['setPositionByOrigin'](new fabric['Point'](dz - dC / 0x2 + dt / 0x2, dr), 'center', 'center');
            }
            if (cS(dz + dC / 0x2, dq + dt / 0x2)) {
                dv = !![];
                cX['push']({
                    'x': dz + dC / 0x2,
                    'y1': dA < dr ? dA - dB / 0x2 - cD : dA + dB / 0x2 + cD,
                    'y2': dr > dA ? dr + ds / 0x2 + cD : dr - ds / 0x2 - cD
                });
                dm['setPositionByOrigin'](new fabric['Point'](dz + dC / 0x2 - dt / 0x2, dr), 'center', 'center');
            }
            if (cS(dA, dr)) {
                du = !![];
                cY['push']({
                    'y': dA,
                    'x1': dz < dq ? dz - dC / 0x2 - cD : dz + dC / 0x2 + cD,
                    'x2': dq > dz ? dq + dt / 0x2 + cD : dq - dt / 0x2 - cD
                });
                dm['setPositionByOrigin'](new fabric['Point'](dq, dA), 'center', 'center');
            }
            if (cS(dA - dB / 0x2, dr - ds / 0x2)) {
                du = !![];
                cY['push']({
                    'y': dA - dB / 0x2,
                    'x1': dz < dq ? dz - dC / 0x2 - cD : dz + dC / 0x2 + cD,
                    'x2': dq > dz ? dq + dt / 0x2 + cD : dq - dt / 0x2 - cD
                });
                dm['setPositionByOrigin'](new fabric['Point'](dq, dA - dB / 0x2 + ds / 0x2), 'center', 'center');
            }
            if (cS(dA + dB / 0x2, dr + ds / 0x2)) {
                du = !![];
                cY['push']({
                    'y': dA + dB / 0x2,
                    'x1': dz < dq ? dz - dC / 0x2 - cD : dz + dC / 0x2 + cD,
                    'x2': dq > dz ? dq + dt / 0x2 + cD : dq - dt / 0x2 - cD
                });
                dm['setPositionByOrigin'](new fabric['Point'](dq, dA + dB / 0x2 - ds / 0x2), 'center', 'center');
            }
        }
        if (!du) {
            cY['length'] = 0x0;
        }
        if (!dv) {
            cX['length'] = 0x0;
        }
    });
    cB['on']('before:render', function () {
        cB['clearContext'](cB['contextTop']);
    });
    cB['on']('after:render', function () {
        for (var dD = cX['length']; dD--;) {
            cJ(cX[dD]);
        }
        for (var dD = cY['length']; dD--;) {
            cL(cY[dD]);
        }
        cX['length'] = cY['length'] = 0x0;
    });
    cB['on']('mouse:up', function () {
        cX['length'] = cY['length'] = 0x0;
        cB['renderAll']();
    });
}
if (activar_notificaciones == 0x1)
    console['log']('Activamos\x20guias');
var win = $(this);
if (win['width']() > 0x400) {
    initAligningGuidelines(canvas);
}
var yatextoadd = 0x0;
function addText(dF) {
    text2 = 0x0;
    if (overlayImage != '' && carga_finalizada == 0x2) {
        quitar_overlay();
    }
    if (0x1 == 0x1) {
        $('#colorTexto')['spectrum']({
            'color': document['getElementById']('colorGeneral')['value'],
            'showPaletteOnly': !![],
            'showInput': !![],
            'togglePaletteOnly': !![],
            'togglePaletteMoreText': 'more',
            'showSelectionPalette': !![],
            'localStorageKey': 'edit.org',
            'preferredFormat': 'hex',
            'togglePaletteLessText': 'less',
            'change': function (dG) {
                document['getElementById']('colorTexto')['value'] = dG;
            },
            'palette': [
                [
                    '#FFFFFF',
                    '#E6E6E6',
                    '#B3B3B3',
                    '#808080',
                    '#4D4D4D',
                    '#1A1A1A',
                    '#000000'
                ],
                [
                    '#D3F2F4',
                    '#A1EDF7',
                    '#48D9ED',
                    '#1CAFCF',
                    '#167D8E',
                    '#0F5766',
                    '#034149'
                ],
                [
                    '#C5E7F9',
                    '#9BD8FD',
                    '#2DABFC',
                    '#127AC4',
                    '#0E66A1',
                    '#0B456A',
                    '#032F47'
                ],
                [
                    '#DCE4F9',
                    '#B6C3F3',
                    '#677EDD',
                    '#3366CC',
                    '#1834A0',
                    '#091F66',
                    '#031238'
                ],
                [
                    '#E5CEF4',
                    '#D1A2EA',
                    '#B557DE',
                    '#8830B7',
                    '#5C1B7A',
                    '#3B1154',
                    '#210435'
                ],
                [
                    '#F9E1EE',
                    '#FBC6E2',
                    '#F779BB',
                    '#E72389',
                    '#9A0F57',
                    '#60083A',
                    '#3A0325'
                ],
                [
                    '#F7D8D5',
                    '#FECAC3',
                    '#FD8373',
                    '#EF2E20',
                    '#A1180E',
                    '#510C02',
                    '#2D0501'
                ],
                [
                    '#F7E2D2',
                    '#F7D3B5',
                    '#FDA963',
                    '#FD7D23',
                    '#AD5515',
                    '#512705',
                    '#301602'
                ],
                [
                    '#F7EAD7',
                    '#FCE4BE',
                    '#FEC564',
                    '#FDA429',
                    '#A46C19',
                    '#603F08',
                    '#3A2303'
                ],
                [
                    '#F9F1D2',
                    '#FEEFB1',
                    '#FEE478',
                    '#FECE2F',
                    '#B7951F',
                    '#64520D',
                    '#493907'
                ],
                [
                    '#F9F7D2',
                    '#FFFDB1',
                    '#FFFB7B',
                    '#F3ED3E',
                    '#B8B424',
                    '#797715',
                    '#514D08'
                ],
                [
                    '#E4F2C4',
                    '#D8F4A4',
                    '#B9F74D',
                    '#8BEB3B',
                    '#69B02C',
                    '#426E1D',
                    '#284709'
                ],
                [
                    '#CBEFD7',
                    '#A4F1BF',
                    '#86F4AA',
                    '#32D364',
                    '#1F893A',
                    '#0C5B22',
                    '#053A11'
                ],
                [
                    '#F7B19C',
                    '#57D0FC',
                    '#FB5379',
                    '#FCDA86',
                    '#527CFA',
                    '#59FCAC',
                    '#8266F7'
                ],
                [
                    '#FF6700',
                    '#2BF9FE',
                    '#FC0E1C',
                    '#FFFD38',
                    '#FD29FC',
                    '#45FA54',
                    '#1024FB'
                ],
                ['transparent']
            ]
        });
        $('#colorGradient1')['spectrum']({
            'showPaletteOnly': !![],
            'showInput': !![],
            'showSelectionPalette': !![],
            'localStorageKey': 'edit.org',
            'togglePaletteOnly': !![],
            'togglePaletteMoreText': 'more',
            'preferredFormat': 'hex',
            'togglePaletteLessText': 'less',
            'change': function (dH) {
                cambioColorGradient();
                $(this)['css']('background-color', dH['toHexString']());
            },
            'palette': [
                [
                    '#FFFFFF',
                    '#E6E6E6',
                    '#B3B3B3',
                    '#808080',
                    '#4D4D4D',
                    '#1A1A1A',
                    '#000000'
                ],
                [
                    '#D3F2F4',
                    '#A1EDF7',
                    '#48D9ED',
                    '#1CAFCF',
                    '#167D8E',
                    '#0F5766',
                    '#034149'
                ],
                [
                    '#C5E7F9',
                    '#9BD8FD',
                    '#2DABFC',
                    '#127AC4',
                    '#0E66A1',
                    '#0B456A',
                    '#032F47'
                ],
                [
                    '#DCE4F9',
                    '#B6C3F3',
                    '#677EDD',
                    '#3366CC',
                    '#1834A0',
                    '#091F66',
                    '#031238'
                ],
                [
                    '#E5CEF4',
                    '#D1A2EA',
                    '#B557DE',
                    '#8830B7',
                    '#5C1B7A',
                    '#3B1154',
                    '#210435'
                ],
                [
                    '#F9E1EE',
                    '#FBC6E2',
                    '#F779BB',
                    '#E72389',
                    '#9A0F57',
                    '#60083A',
                    '#3A0325'
                ],
                [
                    '#F7D8D5',
                    '#FECAC3',
                    '#FD8373',
                    '#EF2E20',
                    '#A1180E',
                    '#510C02',
                    '#2D0501'
                ],
                [
                    '#F7E2D2',
                    '#F7D3B5',
                    '#FDA963',
                    '#FD7D23',
                    '#AD5515',
                    '#512705',
                    '#301602'
                ],
                [
                    '#F7EAD7',
                    '#FCE4BE',
                    '#FEC564',
                    '#FDA429',
                    '#A46C19',
                    '#603F08',
                    '#3A2303'
                ],
                [
                    '#F9F1D2',
                    '#FEEFB1',
                    '#FEE478',
                    '#FECE2F',
                    '#B7951F',
                    '#64520D',
                    '#493907'
                ],
                [
                    '#F9F7D2',
                    '#FFFDB1',
                    '#FFFB7B',
                    '#F3ED3E',
                    '#B8B424',
                    '#797715',
                    '#514D08'
                ],
                [
                    '#E4F2C4',
                    '#D8F4A4',
                    '#B9F74D',
                    '#8BEB3B',
                    '#69B02C',
                    '#426E1D',
                    '#284709'
                ],
                [
                    '#CBEFD7',
                    '#A4F1BF',
                    '#86F4AA',
                    '#32D364',
                    '#1F893A',
                    '#0C5B22',
                    '#053A11'
                ],
                [
                    '#F7B19C',
                    '#57D0FC',
                    '#FB5379',
                    '#FCDA86',
                    '#527CFA',
                    '#59FCAC',
                    '#8266F7'
                ],
                [
                    '#FF6700',
                    '#2BF9FE',
                    '#FC0E1C',
                    '#FFFD38',
                    '#FD29FC',
                    '#45FA54',
                    '#1024FB'
                ],
                ['transparent']
            ]
        });
        $('#colorGradient2')['spectrum']({
            'showPaletteOnly': !![],
            'showInput': !![],
            'showSelectionPalette': !![],
            'localStorageKey': 'edit.org',
            'togglePaletteOnly': !![],
            'togglePaletteMoreText': 'more',
            'preferredFormat': 'hex',
            'togglePaletteLessText': 'less',
            'change': function (dI) {
                cambioColorGradient();
                $(this)['css']('background-color', dI['toHexString']());
            },
            'palette': [
                [
                    '#FFFFFF',
                    '#E6E6E6',
                    '#B3B3B3',
                    '#808080',
                    '#4D4D4D',
                    '#1A1A1A',
                    '#000000'
                ],
                [
                    '#D3F2F4',
                    '#A1EDF7',
                    '#48D9ED',
                    '#1CAFCF',
                    '#167D8E',
                    '#0F5766',
                    '#034149'
                ],
                [
                    '#C5E7F9',
                    '#9BD8FD',
                    '#2DABFC',
                    '#127AC4',
                    '#0E66A1',
                    '#0B456A',
                    '#032F47'
                ],
                [
                    '#DCE4F9',
                    '#B6C3F3',
                    '#677EDD',
                    '#3366CC',
                    '#1834A0',
                    '#091F66',
                    '#031238'
                ],
                [
                    '#E5CEF4',
                    '#D1A2EA',
                    '#B557DE',
                    '#8830B7',
                    '#5C1B7A',
                    '#3B1154',
                    '#210435'
                ],
                [
                    '#F9E1EE',
                    '#FBC6E2',
                    '#F779BB',
                    '#E72389',
                    '#9A0F57',
                    '#60083A',
                    '#3A0325'
                ],
                [
                    '#F7D8D5',
                    '#FECAC3',
                    '#FD8373',
                    '#EF2E20',
                    '#A1180E',
                    '#510C02',
                    '#2D0501'
                ],
                [
                    '#F7E2D2',
                    '#F7D3B5',
                    '#FDA963',
                    '#FD7D23',
                    '#AD5515',
                    '#512705',
                    '#301602'
                ],
                [
                    '#F7EAD7',
                    '#FCE4BE',
                    '#FEC564',
                    '#FDA429',
                    '#A46C19',
                    '#603F08',
                    '#3A2303'
                ],
                [
                    '#F9F1D2',
                    '#FEEFB1',
                    '#FEE478',
                    '#FECE2F',
                    '#B7951F',
                    '#64520D',
                    '#493907'
                ],
                [
                    '#F9F7D2',
                    '#FFFDB1',
                    '#FFFB7B',
                    '#F3ED3E',
                    '#B8B424',
                    '#797715',
                    '#514D08'
                ],
                [
                    '#E4F2C4',
                    '#D8F4A4',
                    '#B9F74D',
                    '#8BEB3B',
                    '#69B02C',
                    '#426E1D',
                    '#284709'
                ],
                [
                    '#CBEFD7',
                    '#A4F1BF',
                    '#86F4AA',
                    '#32D364',
                    '#1F893A',
                    '#0C5B22',
                    '#053A11'
                ],
                [
                    '#F7B19C',
                    '#57D0FC',
                    '#FB5379',
                    '#FCDA86',
                    '#527CFA',
                    '#59FCAC',
                    '#8266F7'
                ],
                [
                    '#FF6700',
                    '#2BF9FE',
                    '#FC0E1C',
                    '#FFFD38',
                    '#FD29FC',
                    '#45FA54',
                    '#1024FB'
                ],
                ['transparent']
            ]
        });
        canvas['isDrawingMode'] = ![];
        var dJ = trad_doble_clic_editarme;
        var dK = document['getElementById']('inputFuente')['value'];
        if (document['getElementById']('valorFontFamily')['value']) {
            var dK = document['getElementById']('valorFontFamily')['value'];
        }
        yatextoadd = yatextoadd + 0x1;
        if (activar_notificaciones == 0x1)
            console['log']('add_text_ok:' + add_text_ok);
        if (texto_add_efecto != null && add_text_ok == 0x1) {
            dJ = texto_add_efecto;
            agrandamos_texto = 0x1;
        } else {
            agrandamos_texto = 0x0;
        }
        if (ancho < 0x12c) {
            document['getElementById']('tamanyoTexto_backup')['value'] = 0x19;
            var dM = 0xa;
            var dN = 0xa;
            var dO = 0x1;
        } else {
            var dM = 0x32;
            var dN = 0x32;
            var dO = 0x2;
        }
        var dS = canvas['getActiveObject']();
        if (add_text_ok == 0x1) {
            barraAjax('i-text', 'FFFFFF');
            var dT = new FontFaceObserver(dK);
            dT['load']()['then'](function () {
                if (activar_notificaciones == 0x1)
                    console['log']('11We\x20load\x20font:\x20' + dK);
                var dU = new fabric['IText'](dJ, {
                    'fontFamily': dK,
                    'left': 0x32,
                    'top': 0x32,
                    'fill': document['getElementById']('colorGeneral')['value'],
                    'fontSize': document['getElementById']('tamanyoTexto_backup')['value']
                });
                canvas['add'](dU)['setActiveObject'](dU);
                canvas['renderAll']();
            });
        } else {
            if (dJ == '')
                dJ = 'Your\x20text\x20here';
            var dT = new FontFaceObserver(dK);
            dT['load']()['then'](function () {
                if (activar_notificaciones == 0x1)
                    console['log']('11We\x20load\x20font:\x20' + dK);
                var dW = new fabric['IText'](dJ, {
                    'fontFamily': dK,
                    'left': 0x32,
                    'top': 0x32,
                    'fill': document['getElementById']('colorGeneral')['value'],
                    'fontSize': document['getElementById']('tamanyoTexto_backup')['value']
                });
                canvas['add'](dW)['setActiveObject'](dW);
                canvas['renderAll']();
            });
        }
        if (agrandamos_texto == 0x1 && text2 == 0x1) {
            if (ancho_de_efecto) {
                text['scaleToWidth'](parseInt(ancho_de_efecto) - 0x46);
            }
        }
    }
    $('.closePanel')['trigger']('click');
    canvas['renderAll']();
}
function centerElements(dX) {
    canvas['forEachObject'](function (dY) {
        if (dY['get']('type') == 'i-text' || dY['get']('type') == 'textbox') {
            newZoomLevel_backup0 = newZoomLevel_backup;
            setZoom2(0x1);
            reestablecemos_zoom = 0x1;
            dY['centerH']();
            canvas['calcOffset']();
            canvas['renderAll']();
            setZoom2(newZoomLevel_backup0);
        }
    });
}
function centerTexts(dZ) {
    canvas['forEachObject'](function (e0) {
        if (e0['get']('type') == 'i-text' || e0['get']('type') == 'textbox') {
            e0['set']('textAlign', dZ);
            canvas['calcOffset']();
            canvas['renderAll']();
        }
    });
}
function changeTexttoTextBox() {
    canvas['forEachObject'](function (e1) {
        if (e1['get']('type') == 'i-text') {
            var e2 = e1['text'];
            var e3 = e1['toObject']();
            delete e3['text'];
            delete e3['type'];
            var e4 = JSON['parse'](JSON['stringify'](e3));
            var e5 = new fabric['Textbox'](e2, e4);
            canvas['remove'](e1);
            canvas['add'](e5);
            canvas['calcOffset']();
            canvas['renderAll']();
            console['log']('todo\x20textbox');
        }
    });
}
function deleteObject() {
    if (canvas['getActiveObjects']()) {
        var e6 = canvas['getActiveObject']();
        if (canvas['getActiveObjects']()) {
            var e7 = canvas['getActiveObjects']();
        }
        if (e7) {
            var e8 = canvas['getActiveObjects']();
            e8['forEach'](function (e9) {
                canvas['remove'](e9);
                canvas['discardActiveObject']();
            });
            canvas['renderAll']();
            return ![];
        } else if (e6) {
            canvas['remove'](e6);
            canvas['renderAll']();
            return ![];
        } else {
            if (activar_notificaciones == 0x1)
                console['log']('Select\x20an\x20element\x20to\x20delete\x20it');
        }
    } else {
        alert(traduccion_javascript_select_object);
    }
}
function getFileExtension(ea) {
    var eb = /^.+\.([^.]+)$/['exec'](ea);
    return eb == null ? '' : eb[0x1];
}
function uploadImageAjax_profile(ec) {
    uploadImageAjax_profile(ec);
}
var subimos_imagen_perfil = 0x0;
var origen_recurso;
function uploadImageAjax(ed) {
    if (estamos_en_fotoefectos == '1' && user_email == '') {
        alert('Register\x20to\x20upload\x20photos\x0a\x20Tienes\x20que\x20estar\x20registrado\x20para\x20subir\x20fotos');
        return;
    }
    if (activar_notificaciones == 0x1)
        console['log']('intentamos\x20subir\x20la\x20imagen');
    try {
        ep = document['getElementById']('origen_recurso')['value'];
    } catch (ee) {
    }
    if (ep == '' && is_admin != '' && subimos_imagen_perfil != 0x1) {
        document['getElementById']('origen_recurso')['style']['borderStyle'] = 'dotted';
        document['getElementById']('origen_recurso')['style']['borderColor'] = 'red';
    } else {
        if (activar_notificaciones == 0x1)
            console['log']('ENTRAMOS\x201');
        subimos_imagen_perfil = 0x0;
        try {
            document['getElementById']('origen_recurso')['style']['borderStyle'] = '';
            document['getElementById']('origen_recurso')['style']['borderColor'] = '';
        } catch (ef) {
        }
        var eg = 0x1;
        if (eg) {
            try {
                zt['hide']($('#reemplazarImagen'));
                zt['hide']($('#file_upload_button'));
            } catch (eh) {
            }
            activate_loading('ini');
            var ei = $('#file')[0x0]['files'][0x0];
            if (!ei) {
                alert(traduccion_javascript_no_file);
                activate_loading('end');
            } else {
                var ej = new FormData();
                var ek = $('#file')[0x0]['files'][0x0];
                ej['append']('file', ek);
                var el = getFileExtension($('#file')[0x0]['files'][0x0]['name']);
                var em = $('#file')[0x0]['files'][0x0]['size'];
                if (el['toLowerCase']() == 'jpg' || el['toLowerCase']() == 'png' || el['toLowerCase']() == 'png' || el['toLowerCase']() == 'svg' || el['toLowerCase']() == 'jpeg') {
                    if (ed == '' || ed == 'upload_normal') {
                        var en = document['getElementById']('id_categoria_recurso')['value'];
                        var eo = document['getElementById']('id_tipo_recurso')['value'];
                        var ep = document['getElementById']('origen_recurso')['value'];
                        var eq = document['getElementById']('nombre_recurso')['value'];
                    } else {
                        var en = '-';
                        var eo = '-';
                        var ep = '-';
                        var eq = '-';
                    }
                    if (activar_notificaciones == 0x1)
                        console['log']('/upload.php?id_categoria_recurso=' + en + '&id_tipo_recurso=' + eo + '&origen_recurso=' + ep + '&nombre_recurso=' + eq + '&what=' + ed);
                    if (em < 0xe8fd50) {
                        $['ajax']({
                            'url': '/upload.php?id_categoria_recurso=' + en + '&id_tipo_recurso=' + eo + '&origen_recurso=' + ep + '&nombre_recurso=' + eq + '&what=' + ed,
                            'type': 'post',
                            'data': ej,
                            'contentType': ![],
                            'processData': ![],
                            'success': function (eg) {
                                console['log'](eg);
                                if (activar_notificaciones == 0x1)
                                    console['log']('WHATTTTTTTTTT\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + ed);
                                closeAllTooltips();
                                if (ed == 'profile' && eg != 0x0) {
                                    activate_loading('end');
                                    eg = '/' + eg;
                                    if (activar_notificaciones == 0x1)
                                        console['log']('Subimos\x20la\x20foto\x20a\x20usuario:\x20' + eg);
                                    ed = '';
                                    $['ajax']({
                                        'type': 'POST',
                                        'url': '/' + trad_url_photo_editor,
                                        'dataType': 'text',
                                        'data': { 'user_image_update': eg },
                                        'success': function (ew) {
                                            document['getElementById']('image_userBIG')['src'] = eg;
                                            document['getElementById']('imagen_user')['src'] = eg;
                                            setCookie('imagen', eg, 0x7);
                                        },
                                        'error': function (ex, ey, ez) {
                                        }
                                    });
                                } else if (eg != 0x0) {
                                    if (activar_notificaciones == 0x1)
                                        console['log'](eg);
                                    activate_loading('end');
                                    eg = '/' + eg;
                                    if (eg != '/fichero-extension') {
                                        if (eg['indexOf']('svg') > 0x0) {
                                            if (document['getElementById']('changeImageid')['value']) {
                                                document['getElementById']('changeImageUrl')['value'] = eg;
                                                $['when'](changeImage())['then'](function () {
                                                });
                                            } else {
                                                changeCategoryRecursos('.recursos-propios', '', '');
                                            }
                                        } else {
                                            if (document['getElementById']('changeImageid')['value']) {
                                                document['getElementById']('changeImageUrl')['value'] = eg;
                                                $['when'](changeImage())['then'](function () {
                                                });
                                            } else {
                                                changeCategoryRecursos('.recursos-propios', '', '');
                                            }
                                        }
                                    } else {
                                        alert(traduccion_javascript_only_jpg_etc + '..');
                                    }
                                } else {
                                    alert(traduccion_javascript_file_not_uploaded);
                                    activate_loading('end');
                                }
                            }
                        });
                    } else {
                        alert(traduccion_javascript_filesize_max);
                        activate_loading('end');
                    }
                } else {
                    alert(traduccion_javascript_only_jpg_etc);
                    activate_loading('end');
                }
            }
        }
    }
}
function cerrarFoggy(eA) {
    if (eA) {
        if ($('#' + eA)['length'] > 0x0) {
            document['getElementById'](eA)['style']['display'] = 'none';
        }
    }
    try {
        $('.frame-overflow')['foggy'](![]);
    } catch (eB) {
    }
    try {
        if ($('#selectordeFormatos')['length'] > 0x0) {
            document['getElementById']('selectordeFormatos')['style']['display'] = 'none';
        }
        if ($('#selectordeFormatos')['length'] > 0x0) {
            document['getElementById']('selectordeFormatos')['innerHTML'] = '';
        }
        if ($('#registroUsuario')['length'] > 0x0) {
            document['getElementById']('registroUsuario')['style']['display'] = 'none';
        }
        if ($('#loading-bar')['length'] > 0x0) {
            document['getElementById']('loading-bar')['style']['display'] = 'none';
        }
    } catch (eC) {
        send_error_to_log(eC + 'error_code_25');
    }
}
function desactivar1() {
    activate_loading('ini');
    desactivar2();
}
var data1;
var data2;
function desactivar2(eD, eE, eF) {
    activate_loading('ini');
    cerrarFoggy('selectordeFormatos');
    if (eD == 'pdfedit') {
        var eG = document['getElementById']('zoom_value')['innerHTML'];
        zoom_new = eE;
        setZoom2(zoom_new);
        canvas['renderAll']();
        canvas['calcOffset']();
        var eH = canvas['toDataURL']('image/jpeg', 0x1);
        var eI = new jsPDF('portrait', 'pt', [
            ancho,
            alto
        ]);
        eI['addImage'](eH, 'JPEG', 0x0, 0x0, ancho, alto);
        eI['save']('download.pdf');
        setZoom2(eG);
        return;
    }
    finished_loading_json = 0x0;
    document['getElementById']('efectoOverlay')['value'] = 0x0;
    if (estamos_en_fotoefectos == '1') {
        document['getElementById']('loadingText')['innerHTML'] = str_var_creando_diseno;
    } else {
        if (estamos_en_fotoefectos != '1') {
            document['getElementById']('loadingText')['innerHTML'] = traduccion_javascript_downloading_design_preparating;
        }
    }
    if (!canvas['backgroundColor']) {
        canvas['backgroundColor'] = '#FFFFFF';
    }
    if (crea_ejemplo_grande == 0x1) {
    } else {
        circle = new fabric['Circle']({
            'radius': 0x1,
            'fill': 'white',
            'left': -0x64,
            'top': -0x64
        });
        canvas['add'](circle)['setActiveObject'](circle);
    }
    var eG = document['getElementById']('zoom_value')['innerHTML'];
    if (estamos_en_fotoefectos != '1') {
        if (suscription_type == 'premium' && days_last_suscription > 0x0) {
        } else {
            alert(traduccion_javascript_premium_alta);
        }
    }
    if (eE == 0x1) {
        calidad_jpg = 0.9;
    } else {
    }
    calidad_jpg = 0.9;
    zoom_new = 0x1;
    setZoom2(zoom_new);
    if (activar_notificaciones == 0x1)
        console['log']('aaaaaa11111111111111111111');
    if (eE == 0x2) {
        setFondoColorSeleccionado('transparent');
    }
    if (0x1 == 0x1) {
        $['ajax']({
            'type': 'POST',
            'url': '/' + trad_url_photo_editor,
            'data': {
                'download_file': '1',
                'id_canvas_global': id_canvas_global,
                'base64data': canvas['toDataURL']('image/jpeg', calidad_jpg),
                'calidad': eE,
                'formato_archivo': eD,
                'es_premium': es_premium,
                'addWatermark_yes_no': addWatermark_yes_no
            },
            'dataType': 'text',
            'success': function (eK) {
                if (estamos_en_fotoefectos != '1') {
                    document['getElementById']('loadingText')['innerHTML'] = traduccion_javascript_downloading_design;
                }
                if (activar_notificaciones == 0x1)
                    console['log']('aaaaaaaaaaaaaaaaa');
                setZoom2(eG);
                if (estamos_en_fotoefectos == '1') {
                    var eK = eK + '?rnd=' + Math['random']();
                    window['location']['href'] = eK;
                    activate_loading('end');
                    if (activar_notificaciones == 0x1)
                        console['log']('AAAAAAAAAAAAAAAAAAA');
                } else {
                    data_in_id = eK['split']('|||');
                    data0 = data_in_id[0x0];
                    data1 = data_in_id[0x1];
                    try {
                        if (data1['length'] < 0x3e8) {
                            dominant_text = '';
                            max_font_size = 0x1;
                            canvas['forEachObject'](function (eM) {
                                if (eM['get']('type') == 'textbox' || eM['get']('type') == 'i-text') {
                                    if (eM['get']('fontSize') > max_font_size) {
                                        dominant_text = eM['get']('text')['toLowerCase']()['substr'](0x0, 0x19)['replace']('\x20', '_');
                                        max_font_size = eM['get']('fontSize');
                                    }
                                }
                            });
                            dominant_text = dominant_text['replace'](/(\r\n|\n|\r)/gm, '');
                            data1_name = dominant_text + '_' + categoriaTemplate + '__EDIT.org.' + eD;
                            if (suscription_type == 'premium' && days_last_suscription > 0x0) {
                            } else {
                                data1_name = traduccion_javascript_premium_resolucion + data1_name;
                            }
                            var eN = $('<a>')['attr']('href', '/' + data1)['attr']('download', '/' + data1_name)['appendTo']('body');
                            eN[0x0]['click']();
                            eN['remove']();
                            if (activar_notificaciones == 0x1)
                                console['log']('data0:\x20' + data0 + '\x0a\x20data1:\x20' + data1);
                        } else {
                            alert(traduccion_javascript_error_tecnic);
                            activateChat();
                        }
                    } catch (eO) {
                        send_error_to_log(eO + 'error_code_24');
                    }
                    activate_loading('end');
                }
            },
            'error': function (eP, eQ, eR) {
                if (activar_notificaciones == 0x1)
                    console['log']('ERORRRRR3333333333');
                activate_loading('end');
            }
        });
    }
}
function cambioOpacity(eS) {
    console['log'](eS);
    var eT = canvas['getActiveObject']();
    eT['set']({ 'opacity': eS / 0xa });
    canvas['renderAll']();
}
function cambioSizeTexto() {
    var eU = canvas['getActiveObject']();
    if (eU) {
        document['getElementById']('tamanyoTexto_backup')['value'] = document['getElementById']('tamanyoTexto')['value'];
        if (!eU['isEditing']) {
            if (!eU)
                return;
            if (eU['styles']) {
                var eV = eU['styles'];
                for (var eW in eV) {
                    for (var eX in eV[eW]) {
                        if ('fontSize' in eV[eW][eX]) {
                            delete eV[eW][eX]['fontSize'];
                        }
                    }
                }
            }
        }
        setStyle(eU, 'fontSize', parseInt(document['getElementById']('tamanyoTexto')['value']));
        eU['setCoords']();
        canvas['calcOffset']();
        canvas['renderAll']();
    }
    console['log'](canvas['getActiveObject']()['get']('type'));
    if (canvas['getActiveObject']()['get']('type') == 'activeSelection') {
        canvas['getActiveObject']()['forEachObject'](function (eY) {
            console['log']('entramos\x20en\x20el\x20grupo');
            if (eY['styles']) {
                var eV = eY['styles'];
                for (var eW in eV) {
                    for (var eX in eV[eW]) {
                        if ('fontSize' in eV[eW][eX]) {
                            delete eV[eW][eX]['fontSize'];
                        }
                    }
                }
            }
            var f2 = {};
            f2['fontSize'] = document['getElementById']('tamanyoTexto')['value'];
            eY['set'](f2);
            eY['set']('fontSize', document['getElementById']('tamanyoTexto')['value']);
            eY['setCoords']();
            canvas['calcOffset']();
            canvas['renderAll']();
        });
    }
    canvas['calcOffset']();
    canvas['renderAll']();
}
function cambioLineHeightTexto(f3) {
    var f4 = canvas['getActiveObject']();
    if (f4) {
        if ($('#infoLineHeightTexto')['length'] > 0x0 && $('#sizeLineHeightTexto')['length'] > 0x0) {
            document['getElementById']('infoLineHeightTexto')['innerHTML'] = document['getElementById']('sizeLineHeightTexto')['value'];
        }
        if (canvas['getActiveObject']()['get']('type') == 'activeSelection') {
            canvas['getActiveObject']()['forEachObject'](function (f5) {
                f5['set']('lineHeight', f3);
            });
        } else if (f4) {
            f4['set']('lineHeight', f3);
        }
    }
    canvas['renderAll']();
}
function cambioCharSpacingTexto(f6) {
    var f7 = canvas['getActiveObject']();
    if (f7) {
        if ($('#infoCharSpacingTexto')['length'] > 0x0 && $('#sizeCharSpacingTexto')['length'] > 0x0) {
            try {
                document['getElementById']('infoCharSpacingTexto')['innerHTML'] = document['getElementById']('sizeCharSpacingTexto')['value'];
            } catch (f8) {
            }
        }
        if (canvas['getActiveObject']()['get']('type') == 'activeSelection') {
            canvas['getActiveObject']()['forEachObject'](function (f9) {
                f9['set']('charSpacing', f6);
            });
        } else if (f7) {
            f7['set']('charSpacing', f6);
        }
    }
    canvas['renderAll']();
}
function textBackground(fa) {
    if (canvas['getActiveObject']()) {
        var fb = new Image();
        fb['src'] = fa;
        var fc = canvas['getActiveObject']();
        fabric['util']['loadImage'](fa, function (fb) {
            fc['set']('fill', new fabric['Pattern']({
                'source': fb,
                'repeat': 'repeat'
            }));
            canvas['renderAll']();
        });
    }
}
function cambioFontFamily(fe) {
    var ff = canvas['getActiveObject']();
    ff['fontFamily'] = fe;
    canvas['renderAll']();
    document['getElementById']('valorFontFamily')['value'] = fe;
}
varShadowonoff = 0x0;
function textShadow() {
    if (canvas['getActiveObject']()['get']('type') == 'i-text') {
        var fg = canvas['getActiveObject']();
        if (varShadowonoff == 0x1) {
            fg['setShadow']('');
            varShadowonoff = 0x0;
        } else {
            fg['setShadow']('rgba(0,0,0,0.3)\x205px\x205px\x205px');
            varShadowonoff = 0x1;
        }
        canvas['renderAll']();
    }
    if (escupir_console_log == 0x1)
        if (notificaciones == 0x1)
            console['log']('shadow');
}
function bringForward2() {
    var fh = canvas['getActiveObject']();
    canvas['bringForward'](fh);
}
function textOverline() {
    if (notificaciones == 0x1)
        console['log']('overline');
    if (canvas['getActiveObject']()['get']('type')) {
        if (canvas['getActiveObject']()['get']('type') == 'i-text') {
            var fi = canvas['getActiveObject']();
            if (fi['underline'] == ![]) {
                fi['set']('overline', !![]);
            } else {
                fi['set']('overline', ![]);
            }
            canvas['renderAll']();
        }
    }
}
function textUnderlineBold(fj) {
    if (canvas['getActiveObject']()) {
        object = canvas['getActiveObject']();
        canvasDemo['updateCanvasState']();
        if (fj == 'underline') {
            if (object['setSelectionStyles'] && object['isEditing']) {
                setActiveStyle('underline', !![]);
            } else {
                if (object['underline'] == ![]) {
                    object['set']('underline', !![]);
                } else {
                    object['set']('underline', ![]);
                }
            }
        } else if (fj == 'bold') {
            if (object['setSelectionStyles'] && object['isEditing']) {
                setActiveStyle('fontWeight', 'bold');
            } else {
                if (object['get']('fontWeight') != 'bold') {
                    object['set']('fontWeight', 'bold');
                } else {
                    object['set']('fontWeight', 'normal');
                }
            }
        } else if (fj == 'italic') {
            if (object['setSelectionStyles'] && object['isEditing']) {
                setActiveStyle('fontStyle', 'italic');
            } else {
                if (object['get']('fontStyle') != 'italic') {
                    object['set']('fontStyle', 'italic');
                } else {
                    object['set']('fontStyle', 'normal');
                }
            }
        }
        canvas['renderAll']();
    }
}
function textLineThrough() {
    if (canvas['getActiveObject']()['get']('type') == 'i-text') {
        var fk = canvas['getActiveObject']();
        if (!fk)
            return;
        if (canvas['getActiveObject']()['textDecoration'] == '') {
            fk['setTextDecoration']('line-through');
        } else if (canvas['getActiveObject']()['textDecoration'] == 'overline') {
            fk['setTextDecoration']('line-through');
        } else if (canvas['getActiveObject']()['textDecoration'] == 'line-through') {
            fk['setTextDecoration']('');
        } else if (canvas['getActiveObject']()['textDecoration'] == 'underline') {
            fk['setTextDecoration']('line-through');
        }
        canvas['renderAll']();
    }
}
function cambioOpacidadTexto() {
    document['getElementById']('infoOpacidadTexto')['innerHTML'] = document['getElementById']('opacidadTexto')['value'];
    if (canvas['getActiveObject']()['get']('type') == 'i-text') {
        var fl = canvas['getActiveObject']();
        if (!fl)
            return;
        fl['setOpacity'](document['getElementById']('opacidadTexto')['value'] / 0x64);
        canvas['renderAll']();
    }
}
function cambioSizeLapiz() {
    var fm = document['getElementById']('sizeLapiz')['value'];
    document['getElementById']('infoSizeLapiz')['innerHTML'] = fm;
    canvas['freeDrawingBrush']['width'] = parseInt(fm, 0xa) || 0x1;
    var fn = fm * 0.6;
    document['getElementById']('ejemploLapiz')['style']['height'] = fn + 'px';
}
function cambioColorPaleta(fo) {
    document['getElementById']('colorPintar')['value'] = fo;
    cambioColorPintar();
}
var changePintarold;
function changePintar(fp, fq) {
    if (changePintarold) {
        document['getElementById']('lapiz' + changePintarold)['style']['border'] = '0px';
    } else {
        document['getElementById']('lapizPencil')['style']['border'] = '0px';
    }
    document['getElementById']('lapiz' + fp)['style']['border'] = '2px\x20solid\x20#CCC';
    changePintarold = fp;
    if (fp === 'hline') {
        canvas['freeDrawingBrush'] = vLinePatternBrush;
    } else if (fp === 'vline') {
        canvas['freeDrawingBrush'] = hLinePatternBrush;
    } else if (fp === 'square') {
        canvas['freeDrawingBrush'] = squarePatternBrush;
    } else if (fp === 'diamond') {
        canvas['freeDrawingBrush'] = diamondPatternBrush;
    } else if (fp === 'texture') {
        if (fq) {
            var fr = new Image();
            fr['src'] = fq;
            var fs = new fabric['PatternBrush'](canvas);
            fs['source'] = fr;
        }
        canvas['freeDrawingBrush'] = fs;
    } else {
        canvas['freeDrawingBrush'] = new fabric[fp + 'Brush'](canvas);
    }
    if (canvas['freeDrawingBrush']) {
        canvas['freeDrawingBrush']['color'] = document['getElementById']('colorGeneral')['value'];
        canvas['freeDrawingBrush']['width'] = parseInt(document['getElementById']('sizeLapiz')['value'], 0xa) || 0x1;
    }
}
function cambioColorPintar() {
    canvas['freeDrawingBrush']['color'] = document['getElementById']('colorGeneral')['value'];
    ;
    try {
        document['getElementById']('ejemploLapiz')['style']['backgroundColor'] = document['getElementById']('colorGeneral')['value'];
        ;
    } catch (ft) {
    }
}
function cambioColorBg() {
    var fu = canvas['getActiveObject']();
    if (!fu)
        return;
    fu['set']('textBackgroundColor', document['getElementById']('colorFondoTextoValue')['value']);
    canvas['renderAll']();
}
function cambioBordeTexto() {
    var fv = document['getElementById']('bordeTexto')['value'];
    document['getElementById']('infoBordeTexto')['innerHTML'] = fv;
    var fw = canvas['getActiveObject']();
    if (!fw)
        return;
    fw['set']('strokeWidth', parseInt(fv, 0xa));
    canvas['renderAll']();
}
function cambioColorBorde() {
    var fx = canvas['getActiveObject']();
    if (!fx)
        return;
    fx['setStroke'](document['getElementById']('colorBorde')['value']);
    fx['set']('stroke', document['getElementById']('colorBorde')['value']);
    canvas['renderAll']();
}
function cambioColorPaletaTexto(fy) {
    document['getElementById']('colorTexto')['value'] = fy;
    cambioColorTexto();
}
function cambioColorTexto() {
    var fz = canvas['getActiveObject']();
    if (!fz)
        return;
    setActiveStyle('fill', document['getElementById']('colorGeneral')['value']);
    canvas['renderAll']();
}
function cambioColorTextoStroke() {
    var fA = canvas['getActiveObject']();
    if (!fA)
        return;
    if (canvas['getActiveObject']()['get']('type') == 'activeSelection') {
        canvas['getActiveObject']()['forEachObject'](function (fB) {
            var fA = fB;
            fA['set']('stroke', document['getElementById']('colorTextoStroke2')['value']);
        });
    } else if (fA) {
        fA['set']('stroke', document['getElementById']('colorTextoStroke2')['value']);
    }
    canvas['renderAll']();
}
function cambioColorTextoShadow(fD) {
    if (canvas['getActiveObject']()) {
        if (fD)
            document['getElementById']('sizeTextoShadow1')['value'] = fD;
        else
            fD = document['getElementById']('sizeTextoShadow1')['value'];
        var fE = canvas['getActiveObject']();
        if (canvas['getActiveObject']()['get']('type') == 'activeSelection') {
            canvas['getActiveObject']()['forEachObject'](function (fF) {
                var fE = fF;
                fE['setShadow']({
                    'color': document['getElementById']('colorTextoShadow')['value'],
                    'blur': document['getElementById']('textShadowBLUR')['value'],
                    'offsetX': document['getElementById']('offsetXVALUE')['value'],
                    'offsetY': document['getElementById']('offsetYVALUE')['value']
                });
            });
        } else if (fE) {
            fE['setShadow']({
                'color': document['getElementById']('colorTextoShadow')['value'],
                'blur': document['getElementById']('textShadowBLUR')['value'],
                'offsetX': document['getElementById']('offsetXVALUE')['value'],
                'offsetY': document['getElementById']('offsetYVALUE')['value']
            });
        }
        if (!fE)
            return;
        if (activar_notificaciones == 0x1)
            console['log'](document['getElementById']('colorTextoShadow1')['value']);
        canvas['renderAll']();
        document['getElementById']('infoSizeTextoShadow')['innerHTML'] = fD;
    }
}
var opacityShadow = 0x1;
var colorShadow = '#000000';
function shadowOptions(fH, fI) {
    if (canvas['getActiveObject']()) {
        if (fH == 'cancel') {
            if (canvas['getActiveObject']()) {
                canvas['getActiveObject']()['setShadow']('');
                canvas['renderAll']();
            }
        } else {
            if (canvas['getActiveObject']()['get']('type') == 'activeSelection') {
                canvas['getActiveObject']()['forEachObject'](function (fJ) {
                    var fK = fJ;
                    if (fH == 'blur' && fK && fI) {
                        fK['shadow']['blur'] = fI;
                        document['getElementById']('infoSizeTextoShadowBlur')['innerHTML'] = fI;
                    } else if (fH == 'offsetX' && fK && fI) {
                        fK['shadow']['offsetX'] = fI;
                        document['getElementById']('infoSizeTextoShadowoffsetX')['innerHTML'] = fI;
                    } else if (fH == 'offsetY' && fK && fI) {
                        fK['shadow']['offsetY'] = fI;
                        document['getElementById']('infoSizeTextoShadowoffsetY')['innerHTML'] = fI;
                    } else if (fH == 'color' && fK && fI) {
                        fK['shadow']['offsetY'] = fI;
                        document['getElementById']('infoSizeTextoShadowoffsetY')['innerHTML'] = fI;
                    }
                });
            } else if (canvas['getActiveObject']()) {
                var fL = canvas['getActiveObject']();
                if (fH == 'blur' && fL && fI) {
                    document['getElementById']('infoSizeTextoShadowBlur')['innerHTML'] = fI;
                } else if (fH == 'offsetX' && fL && fI) {
                    document['getElementById']('infoSizeTextoShadowoffsetX')['innerHTML'] = fI;
                } else if (fH == 'offsetY' && fL && fI) {
                    document['getElementById']('infoSizeTextoShadowoffsetY')['innerHTML'] = fI;
                } else if (fH == 'color' && fL && fI) {
                    colorShadow = fI;
                } else if (fH == 'opacity' && fL && fI) {
                    document['getElementById']('infoSizeTextoShadowOpacity')['innerHTML'] = fI;
                    opacityShadow = fI;
                }
                var fM = {
                    'color': colorShadow,
                    'blur': document['getElementById']('infoSizeTextoShadowBlur')['innerHTML'],
                    'offsetX': document['getElementById']('infoSizeTextoShadowoffsetX')['innerHTML'],
                    'offsetY': document['getElementById']('infoSizeTextoShadowoffsetY')['innerHTML']
                };
                fL['setShadow'](fM);
            }
            canvas['renderAll']();
        }
    }
}
function cambioColorPaletaTextoBorde(fN) {
    document['getElementById']('colorTextoBorde')['value'] = fN;
    cambioColorTextoBorde();
    if (escupir_console_log == 0x1)
        if (notificaciones == 0x1)
            console['log'](fN);
}
function cambioColorTextoBorde(fO) {
    var fP = canvas['getActiveObject']();
    if (fO == 'SizeTextoBorde') {
        if (canvas['getActiveObject']()['get']('type') == 'activeSelection') {
            canvas['getActiveObject']()['forEachObject'](function (fQ) {
                fQ['set']('strokeWidth', parseInt(document['getElementById']('SizeTextoBorde')['value']));
            });
        } else if (canvas['getActiveObject']()) {
            canvas['getActiveObject']()['set']('strokeWidth', parseInt(document['getElementById']('SizeTextoBorde')['value']));
        }
    }
    cambioColorTextoStroke();
    document['getElementById']('infoSizeTextoBorde')['innerHTML'] = canvas['getActiveObject']()['get']('strokeWidth');
    canvas['renderAll']();
    if (escupir_console_log == 0x1)
        if (notificaciones == 0x1)
            console['log'](document['getElementById']('SizeTextoBorde')['value']);
}
var categoria_editor;
function cambioSubCategoriaPorAjax(fR) {
    categoria_editor = fR;
    console['log']('\x20\x20cambioSubCategoriaPorAjax\x20' + fR);
    cambioSubCategoria('efectos2');
}
var subcatEditor;
function cambioSubSubcategoriaPorAjax(fS) {
    subcatEditor = fS;
    window['history']['pushState']('object\x20or\x20string', 'TITLE\x20HERE', 'https://' + dominio + '/edit/cat/' + tipo_editor + '/' + fS);
    cambioSubCategoria('efectos2');
    $('.buttonDesigns')['trigger']('click');
    console['log']('cambioSubSubcategoriaPorAjax!!!!!!!!!!!!!!!!!!!!');
}
function columnChange(fT) {
    if (fT == 'double') {
        $('section')['addClass']('double-templates');
        $('.tooltipSelectDesign')['addClass']('nimize');
    } else {
        $('section')['removeClass']('double-templates');
        $('.tooltipSelectDesign')['removeClass']('nimize');
    }
}
var subcategory;
function cambioTipoPorAjax(fU, fV, fW) {
    activate_loading('ini');
    tipo_editor = fU;
    subcatEditor = '';
    if (fV == '1001001') {
        fV = '';
    }
    subcategory = fV;
    if (fW) {
        categoria_editor = fW;
        console['log']('\x20\x20cambioSubCategoriaPorAjax\x20' + categoria_editor);
        cambioSubCategoria('efectos2');
        return;
    }
    loadpremium = '';
    if (fU == '9999') {
        tipo_editor = '';
    } else {
        if (fV > 0x0) {
            window['history']['pushState']('object\x20or\x20string', 'TITLE\x20HERE', 'https://' + dominio + '/edit/cat/' + tipo_editor + '/' + fV);
        } else {
            window['history']['pushState']('object\x20or\x20string', 'TITLE\x20HERE', 'https://' + dominio + '/edit/cat/' + tipo_editor);
        }
    }
    if (!fV) {
        $['ajax']({
            'type': 'POST',
            'url': '/' + trad_url_photo_editor,
            'dataType': 'text',
            'data': {
                'load_categories_area': 0x1,
                'category_load1': category_change_selected,
                'tipo_categoria': fU
            },
            'success': function (fX) {
                document['getElementById']('tooltipSelectCategories')['innerHTML'] = fX;
                var fY = new LazyLoad({});
                activate_loading('end');
            },
            'error': function (fZ, g0, g1) {
            }
        });
    }
    $['when']($('.buttonDesigns')['trigger']('click'))['done'](function () {
    });
}
var click_button_template_or_categories;
function cambioFolderPorAjax(g2, g3) {
    try {
        tour['end']();
    } catch (g4) {
    }
    try {
        $('#button_select_categories')['removeClass']('active');
        document['getElementById']('selector_category_green')['style']['visibility'] = 'inline';
    } catch (g5) {
    }
    tipo_editor = g2;
    categoria_editor = 'folders';
    subcatEditor = 'folders';
    subcategory = '';
    if (g2 == '9999') {
        tipo_editor = '9999';
        valor_editor = '';
        valor_editor2 = '';
        categoria_editor = '';
    } else if (g3) {
        window['history']['pushState']('object\x20or\x20string', 'TITLE\x20HERE', 'https://' + dominio + '/edit/folders/' + g2 + '/');
    } else {
        window['history']['pushState']('object\x20or\x20string', 'TITLE\x20HERE', 'https://' + dominio + '/edit/cat/' + g2 + '/');
    }
    loadpremium = g3;
    $('.buttonDesigns')['trigger']('click');
}
function cambioSearchPorAjax(g6) {
    search_editor = g6;
    cambioSubCategoria('efectos2');
}
function cambioTexto() {
    var g7 = canvas['getActiveObject']();
    if (!g7)
        return;
    if (canvas['getActiveObject']()['get']('type') == 'i-text') {
    } else
        {
        }
    canvas['renderAll']();
}
function activarPintar() {
    canvas['isDrawingMode'] = !![];
    canvas['freeDrawingMode'] = 'Pencil';
    canvas['freeDrawingCursor'] = 'url(\x27/editor/pencil-draw.png\x27)\x200\x2072,\x20default';
    canvas['freeDrawingBrush']['width'] = parseInt(0xa, 0xa) || 0x1;
    canvas['freeDrawingBrush']['color'] = document['getElementById']('colorGeneral')['value'];
}
var you_can_load_BarraAjax = 0x1;
function cambioSubCategoria(g8, g9) {
    try {
        ga('send', 'pageview', 'editor---cambioSubCategoria--' + g8 + '--' + g9);
    } catch (ga) {
    }
    console['log']('cambioSubCategoria1' + categoria_editor);
    if (g8 != 'myDesigns' && g8 != 'efectos2') {
    }
    $('.sidebar')['removeClass']('hidden-sidebar');
    $('.desplegable-hidden')['removeClass']('hide');
    $('.workspace')['removeClass']('wide-nosidePanel');
    $('.userBlock')['removeClass']('activeOptionsUser');
    the_end_scroll_has_been_detected = 0x0;
    you_can_load_BarraAjax = 0x0;
    try {
        zt['hide']($('#buttonDesigns'));
    } catch (gb) {
    }
    id_imagen_drag_dropSRC = '';
    if (overlayImage != '' && carga_finalizada == 0x2) {
        quitar_overlay();
    }
    if (g8 == 'pegatinas' || g8 == 'pintar' || g8 == 'texto' || g8 == 'filtros') {
        var gc = document['getElementById']('efectoOverlay')['value'];
        if (gc == 0x1) {
            if (confirm('str_confirm_bg_overlay')) {
                document['getElementById']('contBtnsCollage')['style']['display'] = 'none';
                if (escupir_console_log == 0x1)
                    if (notificaciones == 0x1)
                        console['log']('123_4');
                document['getElementById']('text-loading')['innerHTML'] = str_generando_img_final;
                circle = new fabric['Circle']({
                    'radius': 0x1,
                    'fill': 'white',
                    'left': -0x64,
                    'top': -0x64
                });
                canvas['add'](circle)['setActiveObject'](circle);
                var gd = 'acoplar2';
                canvas['forEachObject'](function (ge) {
                });
                $['ajax']({
                    'type': 'POST',
                    'url': '/' + trad_url_photo_editor,
                    'dataType': 'text',
                    'data': {
                        'base64data': canvas['toDataURL']('image/png'),
                        'acoplar': gd
                    },
                    'success': function (gf) {
                        var gf = gf + '?rnd=' + Math['random']();
                        canvas['clear']()['renderAll']();
                        canvas['setOverlayImage'](null, canvas['renderAll']['bind'](canvas));
                        var gh = new Image();
                        gh['src'] = gf;
                        gh['onload'] = function () {
                            canvas['setBackgroundImage'](gf, canvas['renderAll']['bind'](canvas));
                            cambioSubCategoriaNoOverlay(g8);
                            document['getElementById']('text-loading')['innerHTML'] = '';
                            document['getElementById']('efectoOverlay')['value'] = 0x0;
                        };
                    },
                    'error': function (gi, gj, gk) {
                    }
                });
            }
        } else {
            cambioSubCategoriaNoOverlay(g8, g9);
        }
    } else {
        cambioSubCategoriaNoOverlay(g8, g9);
    }
}
function cambioSubCategoriaNoOverlay(gl, gm) {
    category_of_template = gl;
    activate_loading('ini');
    if (gl == 'emojis') {
    } else if (gl == 'recursos') {
    } else if (gl == 'capas') {
    } else if (gl == 'pintar') {
        if (escupir_console_log == 0x1)
            if (notificaciones == 0x1)
                console['log']('dibujar\x20overlay' + document['getElementById']('esOverlay')['value']);
        if (document['getElementById']('esOverlay')['value'] == 0x2) {
            if (confirm('str_confirm_bg_overlay')) {
                if (escupir_console_log == 0x1)
                    if (notificaciones == 0x1)
                        console['log']('123_3');
                document['getElementById']('efectoOverlay')['value'] = 0x1;
                document['getElementById']('text-loading')['innerHTML'] = str_generando_img_final;
                var gn = 'acoplar2';
                $['ajax']({
                    'type': 'POST',
                    'url': '/' + trad_url_photo_editor,
                    'dataType': 'text',
                    'data': {
                        'base64data': canvas['toDataURL']('image/jpeg', 0.8),
                        'acoplar': gn
                    },
                    'success': function (go) {
                        var go = go + '?rnd=' + Math['random']();
                        canvas['clear']()['renderAll']();
                        canvas['setOverlayImage'](null, canvas['renderAll']['bind'](canvas));
                        var gq = new Image();
                        gq['src'] = go;
                        gq['onload'] = function () {
                            canvas['setBackgroundImage'](go, canvas['renderAll']['bind'](canvas));
                            document['getElementById']('efectosResponsive')['style']['display'] = 'none';
                            document['getElementById']('efectosResponsive')['innerHTML'] = '';
                            document['getElementById']('text-loading')['innerHTML'] = '';
                            document['getElementById']('efectoOverlay')['value'] = 0x0;
                        };
                    },
                    'error': function (gr, gs, gt) {
                    }
                });
                canvas['renderAll']();
                document['getElementById']('esOverlay')['value'] = 0x0;
            }
        }
        canvas['isDrawingMode'] = !![];
        canvas['freeDrawingMode'] = 'Pencil';
        canvas['freeDrawingCursor'] = 'url(\x27/editor/pencil-draw.png\x27)\x200\x2072,\x20default';
        canvas['freeDrawingBrush']['width'] = parseInt(0xa, 0xa) || 0x1;
        canvas['freeDrawingBrush']['color'] = document['getElementById']('colorGeneral')['value'];
    } else {
        canvas['isDrawingMode'] = ![];
    }
    if (gl == 'texto') {
        document['getElementById']('textOptions')['value'] = 'showTextOptions';
    } else {
        document['getElementById']('textOptions')['value'] = 'hideTextOptions';
    }
    console['log']('subcatEditor\x20' + subcatEditor);
    if (subcatEditor == 'undefined') {
        subcatEditor = '';
    }
    if (subcatEditor == undefined) {
        subcatEditor = '';
    }
    var gu = $(this);
    window_width = gu['width']();
    if (user_email == 'dani26381@gmail.com') {
    }
    s_textbox = 0x0;
    if (canvas['getActiveObject']()) {
        s_textbox = canvas['getActiveObject']()['get']('type');
    }
    console['log']('/devuelveAjaxEditorNEW.php?cambioSubCategoria=true&catAnterior=' + gl + '&s_textbox=' + s_textbox + '&categoria_editor=' + categoria_editor + '&loadpremium=' + loadpremium + '&valor_editor2=' + valor_editor2 + '&valor_editor=' + valor_editor + '&lang=' + lang + '&notificacion_borrada=' + notificacion_borrada + '&search_editor=' + search_editor + '&tipo_editor=' + tipo_editor + '&categoria_donde_estamos=' + categoria_donde_estamos + '&carpeta_donde_estamos=' + carpeta_donde_estamos + '&ModPagespeed=off' + '&subcatEditor=' + subcatEditor + '&subcategory=' + subcategory + '&id_json_short=' + id_json_short + '&window_width=' + window_width);
    ajax = Ajax();
    ajax['open']('GET', '/devuelveAjaxEditorNEW.php?cambioSubCategoria=true&catAnterior=' + gl + '&s_textbox=' + s_textbox + '&categoria_editor=' + categoria_editor + '&loadpremium=' + loadpremium + '&valor_editor2=' + valor_editor2 + '&valor_editor=' + valor_editor + '&lang=' + lang + '&notificacion_borrada=' + notificacion_borrada + '&search_editor=' + search_editor + '&tipo_editor=' + tipo_editor + '&categoria_donde_estamos=' + categoria_donde_estamos + '&carpeta_donde_estamos=' + carpeta_donde_estamos + '&ModPagespeed=off' + '&subcatEditor=' + subcatEditor + '&subcategory=' + subcategory + '&id_json_short=' + id_json_short + '&window_width=' + window_width);
    ajax['onreadystatechange'] = function () {
        if (ajax['readyState'] == 0x4) {
            search_editor = '';
            var gv = ajax['responseText'];
            search_finalizada = 0x1;
            if (gl == 'filtros') {
                $('.contentDesign')['show']();
                $('.sidePanel')['toggleClass']('slideUpPanel');
                $('.sidebar')['toggleClass']('sideBarShow');
                $('.sidePanel')['addClass']('slideUpPanel');
                $('.sidebar')['addClass']('sideBarShow');
            }
            you_can_load_BarraAjax = 0x1;
            activate_loading('end');
            carpeta_donde_estamos = '';
            eventListener_scroll();
            scrollUp();
            if (activar_boton_formato == 0x1) {
                $('#button_select_format')['addClass']('active');
            }
            if (gl == 'colors') {
                document['getElementById']('subCategories')['innerHTML'] = '';
                document['getElementById']('subCategories1')['innerHTML'] = gv;
                $('.sample-color-tabs\x20.comb-tab')['bind']('click', function () {
                    $(this)['addClass']('active');
                    $('.grad-tab')['removeClass']('active');
                    $('.colors-tab')['removeClass']('active');
                    $('.gradient-sample')['hide']();
                    $('.colors-sample')['hide']();
                    $('.combination-sample')['show']();
                });
                $('.sample-color-tabs\x20.grad-tab')['bind']('click', function () {
                    $(this)['addClass']('active');
                    $('.comb-tab')['removeClass']('active');
                    $('.colors-tab')['removeClass']('active');
                    $('.colors-sample')['hide']();
                    $('.combination-sample')['hide']();
                    $('.gradient-sample')['show']();
                });
                $('.sample-color-tabs\x20.colors-tab')['bind']('click', function () {
                    $(this)['addClass']('active');
                    $('.grad-tab')['removeClass']('active');
                    $('.comb-tab')['removeClass']('active');
                    $('.gradient-sample')['hide']();
                    $('.combination-sample')['hide']();
                    $('.colors-sample')['show']();
                });
                if (typeof document['getElementById']('color_principal') !== 'undefined') {
                    marcar_colores();
                }
                marcar_colores_documento('colors');
                document['getElementById']('wrapHeight1')['style']['display'] = '';
                document['getElementById']('subCategories1')['style']['display'] = '';
                $('.wrapHeight')['attr']('style', 'display:none\x20!important');
                $('#wrapHeight')['attr']('style', 'display:none\x20!important');
                console['log']('ocultamos\x20capas');
            } else {
                document['getElementById']('subCategories')['innerHTML'] = gv;
                document['getElementById']('subCategories1')['innerHTML'] = '';
                document['getElementById']('wrapHeight')['style']['display'] = '';
                document['getElementById']('subCategories')['style']['display'] = '';
                document['getElementById']('wrapHeight1')['style']['display'] = 'none\x20!important';
                document['getElementById']('subCategories1')['style']['display'] = 'none\x20!important';
            }
            if (gl == 'backgrounds') {
                document['getElementById']('subCategories')['innerHTML'] = gv;
                document['getElementById']('subCategories1')['innerHTML'] = '';
                marcar_colores_documento('backgrounds');
                console['log']('backgroundssssssssssssssssssssssss');
            }
            actualizamosBorde();
            if (gl == 'efectos') {
                document['getElementById']('ancho_canvas')['value'] = canvas['width'];
                document['getElementById']('alto_canvas')['value'] = canvas['height'];
                document['getElementById']('ancho_canvas_zoom')['value'] = canvas['width'];
                document['getElementById']('alto_canvas_zoom')['value'] = canvas['height'];
            }
            if (gl == 'texto') {
                document['getElementById']('textOptions')['value'] = 'showTextOptions';
            }
            if (gl == 'emojis') {
                var gw = new LazyLoad({});
                $('.scrollWapper')['animate']({ 'scrollTop': 0x0 });
            } else if (gl == 'myDesigns') {
                var gw = new LazyLoad({});
            } else if (gl == 'recursos') {
                var gw = new LazyLoad({});
            } else if (gl == 'pegatinas') {
                $('#fileuploader')['uploadFile']({
                    'url': 'articulos.php',
                    'dragDropStr': '<span><b>Selector\x20pruebas,\x20no\x20usar</b></span>',
                    'abortStr': 'Abandonar',
                    'cancelStr': 'Cancelar',
                    'doneStr': 'fait',
                    'multiDragErrorStr': 'Plusieurs\x20Drag\x20&amp;\x20Drop\x20de\x20fichiers\x20ne\x20sont\x20pas\x20autorisés.',
                    'extErrorStr': 'n\x27est\x20pas\x20autorisé.\x20Extensions\x20autorisées:',
                    'sizeErrorStr': 'n\x27est\x20pas\x20autorisé.\x20Admis\x20taille\x20max:',
                    'uploadErrorStr': 'Upload\x20n\x27est\x20pas\x20autorisé',
                    'uploadStr': 'Subir\x20foto',
                    'fileName': 'uploadfile',
                    'showPreview': !![],
                    'previewHeight': '100px',
                    'previewWidth': '100px',
                    'dynamicFormData': function () {
                        var gz = { 'imageName': document['getElementById']('image_name')['value'] };
                        return gz;
                    },
                    'onSuccess': function (gA, gB, gC, gD) {
                        console['log'](gB);
                    }
                });
                var gw = new LazyLoad({
                    'effect': 'fadeIn',
                    'effectspeed': 0x3e8,
                    'threshold': 0xc8
                });
                if (mostramos_tooltip_fotos == 0x1) {
                    try {
                        document['getElementById']('reemplazarImagen')['innerHTML'] = var_traduccion_reemplaza_foto_boton_cancel;
                    } catch (gF) {
                    }
                    mostramos_tooltip_fotos = '';
                }
            } else if (gl == 'capas') {
                allLayers();
            } else if (gl == 'pintar') {
                $('#colorPintar')['spectrum']({
                    'color': '#000',
                    'showPaletteOnly': !![],
                    'showInput': !![],
                    'showSelectionPalette': !![],
                    'localStorageKey': 'edit.org',
                    'togglePaletteOnly': !![],
                    'togglePaletteMoreText': 'more',
                    'preferredFormat': 'hex',
                    'togglePaletteLessText': 'less',
                    'change': function (gG) {
                        document['getElementById']('colorGeneral')['value'] = gG;
                        document['getElementById']('colorPintar')['value'] = gG;
                    },
                    'palette': [
                        [
                            '#FFFFFF',
                            '#E6E6E6',
                            '#B3B3B3',
                            '#808080',
                            '#4D4D4D',
                            '#1A1A1A',
                            '#000000'
                        ],
                        [
                            '#D3F2F4',
                            '#A1EDF7',
                            '#48D9ED',
                            '#1CAFCF',
                            '#167D8E',
                            '#0F5766',
                            '#034149'
                        ],
                        [
                            '#C5E7F9',
                            '#9BD8FD',
                            '#2DABFC',
                            '#127AC4',
                            '#0E66A1',
                            '#0B456A',
                            '#032F47'
                        ],
                        [
                            '#DCE4F9',
                            '#B6C3F3',
                            '#677EDD',
                            '#3366CC',
                            '#1834A0',
                            '#091F66',
                            '#031238'
                        ],
                        [
                            '#E5CEF4',
                            '#D1A2EA',
                            '#B557DE',
                            '#8830B7',
                            '#5C1B7A',
                            '#3B1154',
                            '#210435'
                        ],
                        [
                            '#F9E1EE',
                            '#FBC6E2',
                            '#F779BB',
                            '#E72389',
                            '#9A0F57',
                            '#60083A',
                            '#3A0325'
                        ],
                        [
                            '#F7D8D5',
                            '#FECAC3',
                            '#FD8373',
                            '#EF2E20',
                            '#A1180E',
                            '#510C02',
                            '#2D0501'
                        ],
                        [
                            '#F7E2D2',
                            '#F7D3B5',
                            '#FDA963',
                            '#FD7D23',
                            '#AD5515',
                            '#512705',
                            '#301602'
                        ],
                        [
                            '#F7EAD7',
                            '#FCE4BE',
                            '#FEC564',
                            '#FDA429',
                            '#A46C19',
                            '#603F08',
                            '#3A2303'
                        ],
                        [
                            '#F9F1D2',
                            '#FEEFB1',
                            '#FEE478',
                            '#FECE2F',
                            '#B7951F',
                            '#64520D',
                            '#493907'
                        ],
                        [
                            '#F9F7D2',
                            '#FFFDB1',
                            '#FFFB7B',
                            '#F3ED3E',
                            '#B8B424',
                            '#797715',
                            '#514D08'
                        ],
                        [
                            '#E4F2C4',
                            '#D8F4A4',
                            '#B9F74D',
                            '#8BEB3B',
                            '#69B02C',
                            '#426E1D',
                            '#284709'
                        ],
                        [
                            '#CBEFD7',
                            '#A4F1BF',
                            '#86F4AA',
                            '#32D364',
                            '#1F893A',
                            '#0C5B22',
                            '#053A11'
                        ],
                        [
                            '#F7B19C',
                            '#57D0FC',
                            '#FB5379',
                            '#FCDA86',
                            '#527CFA',
                            '#59FCAC',
                            '#8266F7'
                        ],
                        [
                            '#FF6700',
                            '#2BF9FE',
                            '#FC0E1C',
                            '#FFFD38',
                            '#FD29FC',
                            '#45FA54',
                            '#1024FB'
                        ],
                        ['transparent']
                    ]
                });
            }
            if (gl == 'texto2') {
                var gw = new LazyLoad({});
            }
            if (gl == 'texto') {
                cambioTexto();
                $('.sample-color-tabs\x20.comb-tab')['bind']('click', function () {
                    $(this)['addClass']('active');
                    $('.grad-tab')['removeClass']('active');
                    $('.design-tab')['removeClass']('active');
                    $('.gradient-sample')['hide']();
                    $('.design-sample')['hide']();
                    $('.combination-sample')['show']();
                });
                $('.sample-color-tabs\x20.grad-tab')['bind']('click', function () {
                    $(this)['addClass']('active');
                    $('.comb-tab')['removeClass']('active');
                    $('.design-tab')['removeClass']('active');
                    $('.gradient-sample')['show']();
                    $('.design-sample')['hide']();
                    $('.combination-sample')['hide']();
                });
                $('.sample-color-tabs\x20.design-tab')['bind']('click', function () {
                    $(this)['addClass']('active');
                    $('.grad-tab')['removeClass']('active');
                    $('.comb-tab')['removeClass']('active');
                    $('.gradient-sample')['hide']();
                    $('.combination-sample')['hide']();
                    $('.design-sample')['show']();
                });
                var gw = new LazyLoad({});
            }
            if (gl == 'efectos') {
                document['getElementById']('idNombreCanvas')['value'] = document['getElementById']('idNombreCanvas_backup')['value'];
                if (prueba_editor == 0x1) {
                    loadCanvas(0x2);
                }
            }
            if (gl == 'efectos2' || gl == 'efectos2-new') {
                try {
                    if (getCookie('cargamosTourPremium') == 0x1 && getCookie('pack_category') == 'restaurant' && $(window)['width']() > 0x3f5) {
                        console['log']('SIII\x20cargamos\x20tootltip,\x20no\x20estamos\x20en\x20restaurant');
                        if (tourStage == 0x1) {
                            addTour(0x1);
                            tourStage = 0x2;
                        } else if (tourStage == 0x2) {
                            $('html,\x20body')['animate']({ 'scrollTop': 0x0 }, 'slow');
                            addTour(0x3);
                        }
                    } else {
                        console['log']('No\x20cargamos\x20tootltip,\x20no\x20estamos\x20en\x20restaurant');
                    }
                } catch (gJ) {
                }
                $('.sample-color-tabs\x20.comb-tab')['bind']('click', function () {
                    $(this)['addClass']('active');
                    $('.grad-tab')['removeClass']('active');
                    $('.gradient-sample')['hide']();
                    $('.combination-sample')['show']();
                });
                $('.sample-color-tabs\x20.grad-tab')['bind']('click', function () {
                    $(this)['addClass']('active');
                    $('.comb-tab')['removeClass']('active');
                    $('.gradient-sample')['show']();
                    $('.combination-sample')['hide']();
                });
                var gw = new LazyLoad({});
                if (prueba_editor == 0x1) {
                    loadCanvas(0x2);
                }
            }
            if (edicion_texto == 0x1) {
                if (typeof document['getElementById']('colorTexto') !== 'undefined') {
                    $('#colorTexto')['spectrum']({
                        'color': document['getElementById']('colorGeneral')['value'],
                        'showPaletteOnly': !![],
                        'showInput': !![],
                        'showSelectionPalette': !![],
                        'localStorageKey': 'edit.org',
                        'togglePaletteOnly': !![],
                        'togglePaletteMoreText': 'more',
                        'preferredFormat': 'hex',
                        'togglePaletteLessText': 'less',
                        'change': function (gL) {
                            document['getElementById']('colorTexto')['value'] = gL;
                        },
                        'palette': [
                            [
                                '#FFFFFF',
                                '#E6E6E6',
                                '#B3B3B3',
                                '#808080',
                                '#4D4D4D',
                                '#1A1A1A',
                                '#000000'
                            ],
                            [
                                '#D3F2F4',
                                '#A1EDF7',
                                '#48D9ED',
                                '#1CAFCF',
                                '#167D8E',
                                '#0F5766',
                                '#034149'
                            ],
                            [
                                '#C5E7F9',
                                '#9BD8FD',
                                '#2DABFC',
                                '#127AC4',
                                '#0E66A1',
                                '#0B456A',
                                '#032F47'
                            ],
                            [
                                '#DCE4F9',
                                '#B6C3F3',
                                '#677EDD',
                                '#3366CC',
                                '#1834A0',
                                '#091F66',
                                '#031238'
                            ],
                            [
                                '#E5CEF4',
                                '#D1A2EA',
                                '#B557DE',
                                '#8830B7',
                                '#5C1B7A',
                                '#3B1154',
                                '#210435'
                            ],
                            [
                                '#F9E1EE',
                                '#FBC6E2',
                                '#F779BB',
                                '#E72389',
                                '#9A0F57',
                                '#60083A',
                                '#3A0325'
                            ],
                            [
                                '#F7D8D5',
                                '#FECAC3',
                                '#FD8373',
                                '#EF2E20',
                                '#A1180E',
                                '#510C02',
                                '#2D0501'
                            ],
                            [
                                '#F7E2D2',
                                '#F7D3B5',
                                '#FDA963',
                                '#FD7D23',
                                '#AD5515',
                                '#512705',
                                '#301602'
                            ],
                            [
                                '#F7EAD7',
                                '#FCE4BE',
                                '#FEC564',
                                '#FDA429',
                                '#A46C19',
                                '#603F08',
                                '#3A2303'
                            ],
                            [
                                '#F9F1D2',
                                '#FEEFB1',
                                '#FEE478',
                                '#FECE2F',
                                '#B7951F',
                                '#64520D',
                                '#493907'
                            ],
                            [
                                '#F9F7D2',
                                '#FFFDB1',
                                '#FFFB7B',
                                '#F3ED3E',
                                '#B8B424',
                                '#797715',
                                '#514D08'
                            ],
                            [
                                '#E4F2C4',
                                '#D8F4A4',
                                '#B9F74D',
                                '#8BEB3B',
                                '#69B02C',
                                '#426E1D',
                                '#284709'
                            ],
                            [
                                '#CBEFD7',
                                '#A4F1BF',
                                '#86F4AA',
                                '#32D364',
                                '#1F893A',
                                '#0C5B22',
                                '#053A11'
                            ],
                            [
                                '#F7B19C',
                                '#57D0FC',
                                '#FB5379',
                                '#FCDA86',
                                '#527CFA',
                                '#59FCAC',
                                '#8266F7'
                            ],
                            [
                                '#FF6700',
                                '#2BF9FE',
                                '#FC0E1C',
                                '#FFFD38',
                                '#FD29FC',
                                '#45FA54',
                                '#1024FB'
                            ],
                            ['transparent']
                        ]
                    });
                    $('#colorFondoTexto')['spectrum']({
                        'color': '#FFF',
                        'showPaletteOnly': !![],
                        'showInput': !![],
                        'showSelectionPalette': !![],
                        'localStorageKey': 'edit.org',
                        'togglePaletteOnly': !![],
                        'togglePaletteMoreText': 'more',
                        'preferredFormat': 'hex',
                        'togglePaletteLessText': 'less',
                        'change': function (gM) {
                            document['getElementById']('colorFondoTextoValue')['value'] = gM;
                        },
                        'palette': [
                            [
                                '#FFFFFF',
                                '#E6E6E6',
                                '#B3B3B3',
                                '#808080',
                                '#4D4D4D',
                                '#1A1A1A',
                                '#000000'
                            ],
                            [
                                '#D3F2F4',
                                '#A1EDF7',
                                '#48D9ED',
                                '#1CAFCF',
                                '#167D8E',
                                '#0F5766',
                                '#034149'
                            ],
                            [
                                '#C5E7F9',
                                '#9BD8FD',
                                '#2DABFC',
                                '#127AC4',
                                '#0E66A1',
                                '#0B456A',
                                '#032F47'
                            ],
                            [
                                '#DCE4F9',
                                '#B6C3F3',
                                '#677EDD',
                                '#3366CC',
                                '#1834A0',
                                '#091F66',
                                '#031238'
                            ],
                            [
                                '#E5CEF4',
                                '#D1A2EA',
                                '#B557DE',
                                '#8830B7',
                                '#5C1B7A',
                                '#3B1154',
                                '#210435'
                            ],
                            [
                                '#F9E1EE',
                                '#FBC6E2',
                                '#F779BB',
                                '#E72389',
                                '#9A0F57',
                                '#60083A',
                                '#3A0325'
                            ],
                            [
                                '#F7D8D5',
                                '#FECAC3',
                                '#FD8373',
                                '#EF2E20',
                                '#A1180E',
                                '#510C02',
                                '#2D0501'
                            ],
                            [
                                '#F7E2D2',
                                '#F7D3B5',
                                '#FDA963',
                                '#FD7D23',
                                '#AD5515',
                                '#512705',
                                '#301602'
                            ],
                            [
                                '#F7EAD7',
                                '#FCE4BE',
                                '#FEC564',
                                '#FDA429',
                                '#A46C19',
                                '#603F08',
                                '#3A2303'
                            ],
                            [
                                '#F9F1D2',
                                '#FEEFB1',
                                '#FEE478',
                                '#FECE2F',
                                '#B7951F',
                                '#64520D',
                                '#493907'
                            ],
                            [
                                '#F9F7D2',
                                '#FFFDB1',
                                '#FFFB7B',
                                '#F3ED3E',
                                '#B8B424',
                                '#797715',
                                '#514D08'
                            ],
                            [
                                '#E4F2C4',
                                '#D8F4A4',
                                '#B9F74D',
                                '#8BEB3B',
                                '#69B02C',
                                '#426E1D',
                                '#284709'
                            ],
                            [
                                '#CBEFD7',
                                '#A4F1BF',
                                '#86F4AA',
                                '#32D364',
                                '#1F893A',
                                '#0C5B22',
                                '#053A11'
                            ],
                            [
                                '#F7B19C',
                                '#57D0FC',
                                '#FB5379',
                                '#FCDA86',
                                '#527CFA',
                                '#59FCAC',
                                '#8266F7'
                            ],
                            [
                                '#FF6700',
                                '#2BF9FE',
                                '#FC0E1C',
                                '#FFFD38',
                                '#FD29FC',
                                '#45FA54',
                                '#1024FB'
                            ],
                            ['transparent']
                        ]
                    });
                    $('#colorGradient1')['spectrum']({
                        'showPaletteOnly': !![],
                        'showInput': !![],
                        'showSelectionPalette': !![],
                        'localStorageKey': 'edit.org',
                        'togglePaletteOnly': !![],
                        'togglePaletteMoreText': 'more',
                        'preferredFormat': 'hex',
                        'togglePaletteLessText': 'less',
                        'change': function (gN) {
                            document['getElementById']('gradient1')['value'] = gN;
                            cambioColorGradient();
                            $(this)['css']('background-color', gN['toHexString']());
                        },
                        'palette': [
                            [
                                '#FFFFFF',
                                '#E6E6E6',
                                '#B3B3B3',
                                '#808080',
                                '#4D4D4D',
                                '#1A1A1A',
                                '#000000'
                            ],
                            [
                                '#D3F2F4',
                                '#A1EDF7',
                                '#48D9ED',
                                '#1CAFCF',
                                '#167D8E',
                                '#0F5766',
                                '#034149'
                            ],
                            [
                                '#C5E7F9',
                                '#9BD8FD',
                                '#2DABFC',
                                '#127AC4',
                                '#0E66A1',
                                '#0B456A',
                                '#032F47'
                            ],
                            [
                                '#DCE4F9',
                                '#B6C3F3',
                                '#677EDD',
                                '#3366CC',
                                '#1834A0',
                                '#091F66',
                                '#031238'
                            ],
                            [
                                '#E5CEF4',
                                '#D1A2EA',
                                '#B557DE',
                                '#8830B7',
                                '#5C1B7A',
                                '#3B1154',
                                '#210435'
                            ],
                            [
                                '#F9E1EE',
                                '#FBC6E2',
                                '#F779BB',
                                '#E72389',
                                '#9A0F57',
                                '#60083A',
                                '#3A0325'
                            ],
                            [
                                '#F7D8D5',
                                '#FECAC3',
                                '#FD8373',
                                '#EF2E20',
                                '#A1180E',
                                '#510C02',
                                '#2D0501'
                            ],
                            [
                                '#F7E2D2',
                                '#F7D3B5',
                                '#FDA963',
                                '#FD7D23',
                                '#AD5515',
                                '#512705',
                                '#301602'
                            ],
                            [
                                '#F7EAD7',
                                '#FCE4BE',
                                '#FEC564',
                                '#FDA429',
                                '#A46C19',
                                '#603F08',
                                '#3A2303'
                            ],
                            [
                                '#F9F1D2',
                                '#FEEFB1',
                                '#FEE478',
                                '#FECE2F',
                                '#B7951F',
                                '#64520D',
                                '#493907'
                            ],
                            [
                                '#F9F7D2',
                                '#FFFDB1',
                                '#FFFB7B',
                                '#F3ED3E',
                                '#B8B424',
                                '#797715',
                                '#514D08'
                            ],
                            [
                                '#E4F2C4',
                                '#D8F4A4',
                                '#B9F74D',
                                '#8BEB3B',
                                '#69B02C',
                                '#426E1D',
                                '#284709'
                            ],
                            [
                                '#CBEFD7',
                                '#A4F1BF',
                                '#86F4AA',
                                '#32D364',
                                '#1F893A',
                                '#0C5B22',
                                '#053A11'
                            ],
                            [
                                '#F7B19C',
                                '#57D0FC',
                                '#FB5379',
                                '#FCDA86',
                                '#527CFA',
                                '#59FCAC',
                                '#8266F7'
                            ],
                            [
                                '#FF6700',
                                '#2BF9FE',
                                '#FC0E1C',
                                '#FFFD38',
                                '#FD29FC',
                                '#45FA54',
                                '#1024FB'
                            ],
                            ['transparent']
                        ]
                    });
                    $('#colorGradient2')['spectrum']({
                        'showPaletteOnly': !![],
                        'showInput': !![],
                        'showSelectionPalette': !![],
                        'localStorageKey': 'edit.org',
                        'togglePaletteOnly': !![],
                        'togglePaletteMoreText': 'more',
                        'preferredFormat': 'hex',
                        'togglePaletteLessText': 'less',
                        'change': function (gO) {
                            document['getElementById']('gradient2')['value'] = gO;
                            cambioColorGradient();
                            $(this)['css']('background-color', gO['toHexString']());
                        },
                        'palette': [
                            [
                                '#FFFFFF',
                                '#E6E6E6',
                                '#B3B3B3',
                                '#808080',
                                '#4D4D4D',
                                '#1A1A1A',
                                '#000000'
                            ],
                            [
                                '#D3F2F4',
                                '#A1EDF7',
                                '#48D9ED',
                                '#1CAFCF',
                                '#167D8E',
                                '#0F5766',
                                '#034149'
                            ],
                            [
                                '#C5E7F9',
                                '#9BD8FD',
                                '#2DABFC',
                                '#127AC4',
                                '#0E66A1',
                                '#0B456A',
                                '#032F47'
                            ],
                            [
                                '#DCE4F9',
                                '#B6C3F3',
                                '#677EDD',
                                '#3366CC',
                                '#1834A0',
                                '#091F66',
                                '#031238'
                            ],
                            [
                                '#E5CEF4',
                                '#D1A2EA',
                                '#B557DE',
                                '#8830B7',
                                '#5C1B7A',
                                '#3B1154',
                                '#210435'
                            ],
                            [
                                '#F9E1EE',
                                '#FBC6E2',
                                '#F779BB',
                                '#E72389',
                                '#9A0F57',
                                '#60083A',
                                '#3A0325'
                            ],
                            [
                                '#F7D8D5',
                                '#FECAC3',
                                '#FD8373',
                                '#EF2E20',
                                '#A1180E',
                                '#510C02',
                                '#2D0501'
                            ],
                            [
                                '#F7E2D2',
                                '#F7D3B5',
                                '#FDA963',
                                '#FD7D23',
                                '#AD5515',
                                '#512705',
                                '#301602'
                            ],
                            [
                                '#F7EAD7',
                                '#FCE4BE',
                                '#FEC564',
                                '#FDA429',
                                '#A46C19',
                                '#603F08',
                                '#3A2303'
                            ],
                            [
                                '#F9F1D2',
                                '#FEEFB1',
                                '#FEE478',
                                '#FECE2F',
                                '#B7951F',
                                '#64520D',
                                '#493907'
                            ],
                            [
                                '#F9F7D2',
                                '#FFFDB1',
                                '#FFFB7B',
                                '#F3ED3E',
                                '#B8B424',
                                '#797715',
                                '#514D08'
                            ],
                            [
                                '#E4F2C4',
                                '#D8F4A4',
                                '#B9F74D',
                                '#8BEB3B',
                                '#69B02C',
                                '#426E1D',
                                '#284709'
                            ],
                            [
                                '#CBEFD7',
                                '#A4F1BF',
                                '#86F4AA',
                                '#32D364',
                                '#1F893A',
                                '#0C5B22',
                                '#053A11'
                            ],
                            [
                                '#F7B19C',
                                '#57D0FC',
                                '#FB5379',
                                '#FCDA86',
                                '#527CFA',
                                '#59FCAC',
                                '#8266F7'
                            ],
                            [
                                '#FF6700',
                                '#2BF9FE',
                                '#FC0E1C',
                                '#FFFD38',
                                '#FD29FC',
                                '#45FA54',
                                '#1024FB'
                            ],
                            ['transparent']
                        ]
                    });
                }
            }
            barraAjax('initial', 'FFFFFF');
        }
    };
    ajax['send'](null);
}
function zoomIn1() {
    canvas['setZoom'](canvas['getZoom']() * 1.1);
}
function zoomOut1() {
    canvas['setZoom'](canvas['getZoom']() / 1.1);
}
function moverCanvas(gP) {
    if (gP == 'derecha') {
        var gQ = 0xa;
        var gR = new fabric['Point'](gQ, 0x0);
        canvas['relativePan'](gR);
    } else if (gP == 'izquierda') {
        var gQ = 0xa;
        var gR = new fabric['Point'](-gQ, 0x0);
        canvas['relativePan'](gR);
    } else if (gP == 'arriba') {
        var gQ = 0xa;
        var gR = new fabric['Point'](0x0, -gQ);
        canvas['relativePan'](gR);
    } else if (gP == 'abajo') {
        var gQ = 0xa;
        var gR = new fabric['Point'](0x0, gQ);
        canvas['relativePan'](gR);
    }
}
function addCircle() {
    var gY = new fabric['Circle']({
        'radius': 0x28,
        'fill': '#000',
        'left': 0xc8,
        'top': 0x32
    });
    canvas['add'](gY);
}
function applyFilter(gZ, h0) {
    var h1 = canvas['getActiveObject']();
    h1['filters'][gZ] = h0;
    var h2 = +new Date();
    h1['applyFilters']();
    var h3 = +new Date();
    var h4 = canvas['getActiveObject']()['width'] + '\x20x\x20' + canvas['getActiveObject']()['height'];
    $('bench')['innerHTML'] = h4 + 'px\x20' + parseFloat(h3 - h2) + 'ms';
    canvas['renderAll']();
}
function getFilter(h5) {
    var h6 = canvas['getActiveObject']();
    return h6['filters'][h5];
}
function applyFilterValue(h7, h8, h9) {
    var ha = canvas['getActiveObject']();
    if (ha['filters'][h7]) {
        ha['filters'][h7][h8] = h9;
        var hb = +new Date();
        ha['applyFilters']();
        var hc = +new Date();
        var hd = canvas['getActiveObject']()['width'] + '\x20x\x20' + canvas['getActiveObject']()['height'];
        $('bench')['innerHTML'] = hd + 'px\x20' + parseFloat(hc - hb) + 'ms';
        canvas['renderAll']();
    }
}
var f = fabric['Image']['filters'];
var tintColor;
function aplicaFiltrosTint(he) {
    tintColor = he;
    aplicaFiltros('tint-color2', 0x1);
}
function aplicaFiltros(hf, hg) {
    grabar_accion('addFilter', hf);
    if (hf == 'white-background-2') {
        canvas['renderAll']();
        if (canvas['getActiveObject']()['get']('type') == 'image') {
            activate_loading('ini');
            alert(traduccion_javascript_white_insert);
            MakeBorderwhiteBackground1 = canvas['getActiveObject']()['_originalElement']['currentSrc'];
            $['ajax']({
                'type': 'POST',
                'url': '/krello_upper_code.php',
                'dataType': 'text',
                'data': {
                    'MakeBorderwhiteBackground': MakeBorderwhiteBackground1,
                    'quehacer1': hg
                },
                'success': function (hh) {
                    activate_loading('end');
                    console['log'](hh);
                    if (suscription_type == 'premium' && days_last_suscription > 0x0) {
                    } else {
                        alert(traduccion_javascript_white_premium);
                    }
                    fabric['Image']['fromURL']('/' + hh, function (hi) {
                        canvas['add'](hi['set']({
                            'left': 0x64,
                            'top': 0x64,
                            'angle': 0x0,
                            'opacity': 0x1
                        }))['setActiveObject'](hi);
                        canvas['renderAll']();
                    });
                    canvas['renderAll']();
                },
                'error': function (hj, hk, hl) {
                }
            });
        } else {
            alert('');
        }
        return;
    }
    if (canvas['getActiveObject']()) {
        if (canvas['getActiveObject']()['get']('type') != 'image') {
            console['log']('No\x20hay\x20ninguna\x20imagen\x20seleccionada');
            imagen_seleccionada = 0x0;
        } else {
            imagen_seleccionada = 0x1;
        }
    } else {
        console['log']('No\x20hay\x20ninguna\x20imagen\x20seleccionada');
        imagen_seleccionada = 0x0;
    }
    if (imagen_seleccionada == 0x0) {
        canvas['forEachObject'](function (hm) {
            if (hm['get']('type') == 'image') {
                imagen_seleccionada = 0x1;
                canvas['renderAll']();
                canvas['setActiveObject'](hm);
            }
        });
    }
    if (imagen_seleccionada == 0x1) {
        if (hg == 0x0) {
        }
        if (hf == 'BlackWhite' && hg == 0x1) {
            var hn = new fabric['Image']['filters']['BlackWhite']();
        }
        if (hf == 'Vintage' && hg == 0x1) {
            var hn = new fabric['Image']['filters']['Vintage']();
        }
        if (hf == 'Kodachrome' && hg == 0x1) {
            var hn = new fabric['Image']['filters']['Kodachrome']();
        }
        if (hf == 'Technicolor' && hg == 0x1) {
            var hn = new fabric['Image']['filters']['Technicolor']();
        }
        if (hf == 'Polaroid' && hg == 0x1) {
            var hn = new fabric['Image']['filters']['Polaroid']();
        }
        if (hf == 'ImprovePixelated' && hg == 0x1) {
            var hs = canvas['getActiveObject']();
            var hn = new fabric['Image']['filters']['Resize']({
                'resizeType': 'hermite',
                'scaleX': hs['scaleX'],
                'scaleY': hs['scaleY']
            });
        }
        if (hf == 'Grayscale' && hg == 0x1) {
            var hn = new fabric['Image']['filters']['Grayscale']();
        }
        if (hf == 'Polaroid' && hg == 0x1) {
            var hn = new fabric['Image']['filters']['Polaroid']();
        }
        if (hf == 'Sepia' && hg == 0x1) {
            var hn = new fabric['Image']['filters']['Sepia']();
        }
        if (hf == 'Invert' && hg == 0x1) {
            var hn = new fabric['Image']['filters']['Invert']();
        }
        if (hf == 'Brightness' && hg == 0x1) {
            var hn = new fabric['Image']['filters']['Brightness']({ 'brightness': parseFloat(document['getElementById']('Brightness')['value']) });
            console['log'](parseFloat(document['getElementById']('Brightness')['value']));
        }
        if (hf == 'Contrast' && hg == 0x1) {
            var hn = new fabric['Image']['filters']['Contrast']({ 'contrast': parseFloat(document['getElementById']('Contrast')['value']) });
            console['log'](parseFloat(document['getElementById']('Contrast')['value']));
        }
        if (hf == 'Pixelate' && hg == 0x1) {
            var hn = new fabric['Image']['filters']['Pixelate']({ 'blocksize': parseInt(document['getElementById']('Pixelate')['value']) });
        }
        if (hf == 'tint-color' && hg == 0x1) {
            var hn = new fabric['Image']['filters']['BlendColor']({
                'color': document['getElementById']('tint-color')['value'],
                'opacity': parseFloat(document['getElementById']('tint-opacity')['value'])
            });
        }
        if (hf == 'tint-color2' && hg == 0x1) {
            var hn = new fabric['Image']['filters']['BlendColor']({
                'color': tintColor,
                'opacity': 0x1
            });
        }
        if (hf == 'RemoveWhite' && hg == 0x1) {
            var hn = new fabric['Image']['filters']['RemoveColor']({
                'threshold': 0.1,
                'distance': 0.1
            });
        }
        if (hf == 'Noise' && hg == 0x1) {
            var hn = new fabric['Image']['filters']['Noise']({ 'noise': parseInt(document['getElementById']('Noise')['value']) });
        }
        if (hf == 'Blur' && hg == 0x1) {
            var hn = new fabric['Image']['filters']['Blur']({ 'blur': document['getElementById']('Blur')['value'] });
            console['log'](document['getElementById']('Blur')['value']);
        }
        if (hf == 'Sharpen' && hg == 0x1) {
            var hn = new fabric['Image']['filters']['Convolute']({
                'matrix': [
                    0x0,
                    -0x1,
                    0x0,
                    -0x1,
                    0x5,
                    -0x1,
                    0x0,
                    -0x1,
                    0x0
                ]
            });
        }
        if (hf == 'Emboss' && hg == 0x1) {
            var hn = new fabric['Image']['filters']['Convolute']({
                'matrix': [
                    0x1,
                    0x1,
                    0x1,
                    0x1,
                    0.7,
                    -0x1,
                    -0x1,
                    -0x1,
                    -0x1
                ]
            });
        }
        if (hg == 0x1) {
            canvas['getActiveObject']()['filters'] = [];
            canvas['getActiveObject']()['filters']['push'](hn);
            canvas['getActiveObject']()['applyFilters']();
            canvas['renderAll']();
        } else {
            canvas['getActiveObject']()['filters'] = [];
            canvas['getActiveObject']()['applyFilters']();
            canvas['renderAll']();
        }
    } else {
        alert(traduccion_javascript_filters_only_images);
    }
}
function cambioSubCatResponsive(hI) {
    if (hI == 'pegatinas' || hI == 'pintar' || hI == 'texto') {
        var hJ = document['getElementById']('efectoOverlay')['value'];
        if (hJ == 0x1) {
            if (confirm('str_confirm_bg_overlay')) {
                document['getElementById']('contBtnsCollage')['style']['display'] = 'none';
                if (escupir_console_log == 0x1)
                    if (notificaciones == 0x1)
                        console['log']('123_2');
                circle = new fabric['Circle']({
                    'radius': 0x1,
                    'fill': 'white',
                    'left': -0x64,
                    'top': -0x64
                });
                canvas['add'](circle)['setActiveObject'](circle);
                var hK = 'acoplar2';
                canvas['forEachObject'](function (hL) {
                });
                $['ajax']({
                    'type': 'POST',
                    'url': '/' + trad_url_photo_editor,
                    'dataType': 'text',
                    'data': {
                        'base64data': canvas['toDataURL']('image/png'),
                        'acoplar': hK
                    },
                    'success': function (hM) {
                        var hM = hM + '?rnd=' + Math['random']();
                        canvas['clear']()['renderAll']();
                        canvas['setOverlayImage'](null, canvas['renderAll']['bind'](canvas));
                        var hO = new Image();
                        hO['src'] = hM;
                        hO['onload'] = function () {
                            canvas['setBackgroundImage'](hM, canvas['renderAll']['bind'](canvas));
                            cambioSubCatRespNoOverlay(hI);
                            document['getElementById']('text-loading')['innerHTML'] = '';
                            document['getElementById']('efectoOverlay')['value'] = 0x0;
                        };
                    },
                    'error': function (hP, hQ, hR) {
                    }
                });
            }
        } else {
            cambioSubCatRespNoOverlay(hI);
        }
    } else {
        cambioSubCatRespNoOverlay(hI);
    }
}
function cambioSubCatRespNoOverlay(hS) {
    if (hS == 'pintar') {
        if (document['getElementById']('esOverlay')['value'] == 0x2) {
            if (confirm('str_confirm_bg_overlay')) {
                if (escupir_console_log == 0x1)
                    if (notificaciones == 0x1)
                        console['log']('123_1');
                document['getElementById']('efectoOverlay')['value'] = 0x1;
                document['getElementById']('text-loading')['innerHTML'] = str_generando_img_final;
                var hT = 'acoplar2';
                $['ajax']({
                    'type': 'POST',
                    'url': '/' + trad_url_photo_editor,
                    'dataType': 'text',
                    'data': {
                        'base64data': canvas['toDataURL']('image/jpeg', 0.8),
                        'acoplar': hT
                    },
                    'success': function (hU) {
                        var hU = hU + '?rnd=' + Math['random']();
                        canvas['clear']()['renderAll']();
                        canvas['setOverlayImage'](null, canvas['renderAll']['bind'](canvas));
                        var hW = new Image();
                        hW['src'] = hU;
                        hW['onload'] = function () {
                            canvas['setBackgroundImage'](hU, canvas['renderAll']['bind'](canvas));
                            document['getElementById']('efectosResponsive')['style']['display'] = 'none';
                            document['getElementById']('efectosResponsive')['innerHTML'] = '';
                            document['getElementById']('text-loading')['innerHTML'] = '';
                            document['getElementById']('efectoOverlay')['value'] = 0x0;
                        };
                    },
                    'error': function (hX, hY, hZ) {
                    }
                });
                canvas['renderAll']();
                document['getElementById']('esOverlay')['value'] = 0x0;
            }
        }
        canvas['isDrawingMode'] = !![];
        canvas['freeDrawingBrush']['width'] = parseInt(0xa, 0xa) || 0x1;
        canvas['freeDrawingBrush']['color'] = document['getElementById']('colorGeneral')['value'];
    } else {
        canvas['isDrawingMode'] = ![];
    }
    if (generalWidth < 0x26d) {
        if (generalWidth < 0x1c3) {
            var i0 = 0x32;
        } else {
            var i0 = 61.5;
        }
    } else {
        var i0 = 0x5f;
    }
    ajax = Ajax();
    ajax['open']('GET', '/devuelveAjaxEditorNEW.php?cambioSubCatResponsive=true&subCategoria=' + hS + '&bgSize=' + i0);
    ajax['onreadystatechange'] = function () {
        if (ajax['readyState'] == 0x4) {
            document['getElementById']('categories')['innerHTML'] = ajax['responseText'];
            if (hS == 'pintar') {
                $('#colorPintar')['spectrum']({
                    'color': '#000',
                    'showPaletteOnly': !![],
                    'showInput': !![],
                    'showSelectionPalette': !![],
                    'localStorageKey': 'edit.org',
                    'togglePaletteOnly': !![],
                    'togglePaletteMoreText': 'more',
                    'preferredFormat': 'hex',
                    'togglePaletteLessText': 'less',
                    'change': function (i3) {
                        document['getElementById']('colorGeneral')['value'] = i3;
                        document['getElementById']('colorPintar')['value'] = i3;
                    },
                    'palette': [
                        [
                            '#FFFFFF',
                            '#E6E6E6',
                            '#B3B3B3',
                            '#808080',
                            '#4D4D4D',
                            '#1A1A1A',
                            '#000000'
                        ],
                        [
                            '#D3F2F4',
                            '#A1EDF7',
                            '#48D9ED',
                            '#1CAFCF',
                            '#167D8E',
                            '#0F5766',
                            '#034149'
                        ],
                        [
                            '#C5E7F9',
                            '#9BD8FD',
                            '#2DABFC',
                            '#127AC4',
                            '#0E66A1',
                            '#0B456A',
                            '#032F47'
                        ],
                        [
                            '#DCE4F9',
                            '#B6C3F3',
                            '#677EDD',
                            '#3366CC',
                            '#1834A0',
                            '#091F66',
                            '#031238'
                        ],
                        [
                            '#E5CEF4',
                            '#D1A2EA',
                            '#B557DE',
                            '#8830B7',
                            '#5C1B7A',
                            '#3B1154',
                            '#210435'
                        ],
                        [
                            '#F9E1EE',
                            '#FBC6E2',
                            '#F779BB',
                            '#E72389',
                            '#9A0F57',
                            '#60083A',
                            '#3A0325'
                        ],
                        [
                            '#F7D8D5',
                            '#FECAC3',
                            '#FD8373',
                            '#EF2E20',
                            '#A1180E',
                            '#510C02',
                            '#2D0501'
                        ],
                        [
                            '#F7E2D2',
                            '#F7D3B5',
                            '#FDA963',
                            '#FD7D23',
                            '#AD5515',
                            '#512705',
                            '#301602'
                        ],
                        [
                            '#F7EAD7',
                            '#FCE4BE',
                            '#FEC564',
                            '#FDA429',
                            '#A46C19',
                            '#603F08',
                            '#3A2303'
                        ],
                        [
                            '#F9F1D2',
                            '#FEEFB1',
                            '#FEE478',
                            '#FECE2F',
                            '#B7951F',
                            '#64520D',
                            '#493907'
                        ],
                        [
                            '#F9F7D2',
                            '#FFFDB1',
                            '#FFFB7B',
                            '#F3ED3E',
                            '#B8B424',
                            '#797715',
                            '#514D08'
                        ],
                        [
                            '#E4F2C4',
                            '#D8F4A4',
                            '#B9F74D',
                            '#8BEB3B',
                            '#69B02C',
                            '#426E1D',
                            '#284709'
                        ],
                        [
                            '#CBEFD7',
                            '#A4F1BF',
                            '#86F4AA',
                            '#32D364',
                            '#1F893A',
                            '#0C5B22',
                            '#053A11'
                        ],
                        [
                            '#F7B19C',
                            '#57D0FC',
                            '#FB5379',
                            '#FCDA86',
                            '#527CFA',
                            '#59FCAC',
                            '#8266F7'
                        ],
                        [
                            '#FF6700',
                            '#2BF9FE',
                            '#FC0E1C',
                            '#FFFD38',
                            '#FD29FC',
                            '#45FA54',
                            '#1024FB'
                        ],
                        ['transparent']
                    ]
                });
            }
            if (edicion_texto == 0x1) {
                addText();
                $('#colorTexto')['spectrum']({
                    'color': document['getElementById']('colorGeneral')['value'],
                    'showPaletteOnly': !![],
                    'showInput': !![],
                    'showSelectionPalette': !![],
                    'localStorageKey': 'edit.org',
                    'togglePaletteOnly': !![],
                    'togglePaletteMoreText': 'more',
                    'preferredFormat': 'hex',
                    'togglePaletteLessText': 'less',
                    'change': function (i4) {
                        document['getElementById']('colorTexto')['value'] = i4;
                    },
                    'palette': [
                        [
                            '#FFFFFF',
                            '#E6E6E6',
                            '#B3B3B3',
                            '#808080',
                            '#4D4D4D',
                            '#1A1A1A',
                            '#000000'
                        ],
                        [
                            '#D3F2F4',
                            '#A1EDF7',
                            '#48D9ED',
                            '#1CAFCF',
                            '#167D8E',
                            '#0F5766',
                            '#034149'
                        ],
                        [
                            '#C5E7F9',
                            '#9BD8FD',
                            '#2DABFC',
                            '#127AC4',
                            '#0E66A1',
                            '#0B456A',
                            '#032F47'
                        ],
                        [
                            '#DCE4F9',
                            '#B6C3F3',
                            '#677EDD',
                            '#3366CC',
                            '#1834A0',
                            '#091F66',
                            '#031238'
                        ],
                        [
                            '#E5CEF4',
                            '#D1A2EA',
                            '#B557DE',
                            '#8830B7',
                            '#5C1B7A',
                            '#3B1154',
                            '#210435'
                        ],
                        [
                            '#F9E1EE',
                            '#FBC6E2',
                            '#F779BB',
                            '#E72389',
                            '#9A0F57',
                            '#60083A',
                            '#3A0325'
                        ],
                        [
                            '#F7D8D5',
                            '#FECAC3',
                            '#FD8373',
                            '#EF2E20',
                            '#A1180E',
                            '#510C02',
                            '#2D0501'
                        ],
                        [
                            '#F7E2D2',
                            '#F7D3B5',
                            '#FDA963',
                            '#FD7D23',
                            '#AD5515',
                            '#512705',
                            '#301602'
                        ],
                        [
                            '#F7EAD7',
                            '#FCE4BE',
                            '#FEC564',
                            '#FDA429',
                            '#A46C19',
                            '#603F08',
                            '#3A2303'
                        ],
                        [
                            '#F9F1D2',
                            '#FEEFB1',
                            '#FEE478',
                            '#FECE2F',
                            '#B7951F',
                            '#64520D',
                            '#493907'
                        ],
                        [
                            '#F9F7D2',
                            '#FFFDB1',
                            '#FFFB7B',
                            '#F3ED3E',
                            '#B8B424',
                            '#797715',
                            '#514D08'
                        ],
                        [
                            '#E4F2C4',
                            '#D8F4A4',
                            '#B9F74D',
                            '#8BEB3B',
                            '#69B02C',
                            '#426E1D',
                            '#284709'
                        ],
                        [
                            '#CBEFD7',
                            '#A4F1BF',
                            '#86F4AA',
                            '#32D364',
                            '#1F893A',
                            '#0C5B22',
                            '#053A11'
                        ],
                        [
                            '#F7B19C',
                            '#57D0FC',
                            '#FB5379',
                            '#FCDA86',
                            '#527CFA',
                            '#59FCAC',
                            '#8266F7'
                        ],
                        [
                            '#FF6700',
                            '#2BF9FE',
                            '#FC0E1C',
                            '#FFFD38',
                            '#FD29FC',
                            '#45FA54',
                            '#1024FB'
                        ],
                        ['transparent']
                    ]
                });
                $('#colorGradient1')['spectrum']({
                    'showPaletteOnly': !![],
                    'showInput': !![],
                    'showSelectionPalette': !![],
                    'localStorageKey': 'edit.org',
                    'togglePaletteOnly': !![],
                    'togglePaletteMoreText': 'more',
                    'preferredFormat': 'hex',
                    'togglePaletteLessText': 'less',
                    'change': function (i5) {
                        cambioColorGradient();
                        $(this)['css']('background-color', i5['toHexString']());
                    },
                    'palette': [
                        [
                            '#FFFFFF',
                            '#E6E6E6',
                            '#B3B3B3',
                            '#808080',
                            '#4D4D4D',
                            '#1A1A1A',
                            '#000000'
                        ],
                        [
                            '#D3F2F4',
                            '#A1EDF7',
                            '#48D9ED',
                            '#1CAFCF',
                            '#167D8E',
                            '#0F5766',
                            '#034149'
                        ],
                        [
                            '#C5E7F9',
                            '#9BD8FD',
                            '#2DABFC',
                            '#127AC4',
                            '#0E66A1',
                            '#0B456A',
                            '#032F47'
                        ],
                        [
                            '#DCE4F9',
                            '#B6C3F3',
                            '#677EDD',
                            '#3366CC',
                            '#1834A0',
                            '#091F66',
                            '#031238'
                        ],
                        [
                            '#E5CEF4',
                            '#D1A2EA',
                            '#B557DE',
                            '#8830B7',
                            '#5C1B7A',
                            '#3B1154',
                            '#210435'
                        ],
                        [
                            '#F9E1EE',
                            '#FBC6E2',
                            '#F779BB',
                            '#E72389',
                            '#9A0F57',
                            '#60083A',
                            '#3A0325'
                        ],
                        [
                            '#F7D8D5',
                            '#FECAC3',
                            '#FD8373',
                            '#EF2E20',
                            '#A1180E',
                            '#510C02',
                            '#2D0501'
                        ],
                        [
                            '#F7E2D2',
                            '#F7D3B5',
                            '#FDA963',
                            '#FD7D23',
                            '#AD5515',
                            '#512705',
                            '#301602'
                        ],
                        [
                            '#F7EAD7',
                            '#FCE4BE',
                            '#FEC564',
                            '#FDA429',
                            '#A46C19',
                            '#603F08',
                            '#3A2303'
                        ],
                        [
                            '#F9F1D2',
                            '#FEEFB1',
                            '#FEE478',
                            '#FECE2F',
                            '#B7951F',
                            '#64520D',
                            '#493907'
                        ],
                        [
                            '#F9F7D2',
                            '#FFFDB1',
                            '#FFFB7B',
                            '#F3ED3E',
                            '#B8B424',
                            '#797715',
                            '#514D08'
                        ],
                        [
                            '#E4F2C4',
                            '#D8F4A4',
                            '#B9F74D',
                            '#8BEB3B',
                            '#69B02C',
                            '#426E1D',
                            '#284709'
                        ],
                        [
                            '#CBEFD7',
                            '#A4F1BF',
                            '#86F4AA',
                            '#32D364',
                            '#1F893A',
                            '#0C5B22',
                            '#053A11'
                        ],
                        [
                            '#F7B19C',
                            '#57D0FC',
                            '#FB5379',
                            '#FCDA86',
                            '#527CFA',
                            '#59FCAC',
                            '#8266F7'
                        ],
                        [
                            '#FF6700',
                            '#2BF9FE',
                            '#FC0E1C',
                            '#FFFD38',
                            '#FD29FC',
                            '#45FA54',
                            '#1024FB'
                        ],
                        ['transparent']
                    ]
                });
                $('#colorGradient2')['spectrum']({
                    'showPaletteOnly': !![],
                    'showInput': !![],
                    'showSelectionPalette': !![],
                    'localStorageKey': 'edit.org',
                    'togglePaletteOnly': !![],
                    'togglePaletteMoreText': 'more',
                    'preferredFormat': 'hex',
                    'togglePaletteLessText': 'less',
                    'change': function (i6) {
                        cambioColorGradient();
                        $(this)['css']('background-color', i6['toHexString']());
                    },
                    'palette': [
                        [
                            '#FFFFFF',
                            '#E6E6E6',
                            '#B3B3B3',
                            '#808080',
                            '#4D4D4D',
                            '#1A1A1A',
                            '#000000'
                        ],
                        [
                            '#D3F2F4',
                            '#A1EDF7',
                            '#48D9ED',
                            '#1CAFCF',
                            '#167D8E',
                            '#0F5766',
                            '#034149'
                        ],
                        [
                            '#C5E7F9',
                            '#9BD8FD',
                            '#2DABFC',
                            '#127AC4',
                            '#0E66A1',
                            '#0B456A',
                            '#032F47'
                        ],
                        [
                            '#DCE4F9',
                            '#B6C3F3',
                            '#677EDD',
                            '#3366CC',
                            '#1834A0',
                            '#091F66',
                            '#031238'
                        ],
                        [
                            '#E5CEF4',
                            '#D1A2EA',
                            '#B557DE',
                            '#8830B7',
                            '#5C1B7A',
                            '#3B1154',
                            '#210435'
                        ],
                        [
                            '#F9E1EE',
                            '#FBC6E2',
                            '#F779BB',
                            '#E72389',
                            '#9A0F57',
                            '#60083A',
                            '#3A0325'
                        ],
                        [
                            '#F7D8D5',
                            '#FECAC3',
                            '#FD8373',
                            '#EF2E20',
                            '#A1180E',
                            '#510C02',
                            '#2D0501'
                        ],
                        [
                            '#F7E2D2',
                            '#F7D3B5',
                            '#FDA963',
                            '#FD7D23',
                            '#AD5515',
                            '#512705',
                            '#301602'
                        ],
                        [
                            '#F7EAD7',
                            '#FCE4BE',
                            '#FEC564',
                            '#FDA429',
                            '#A46C19',
                            '#603F08',
                            '#3A2303'
                        ],
                        [
                            '#F9F1D2',
                            '#FEEFB1',
                            '#FEE478',
                            '#FECE2F',
                            '#B7951F',
                            '#64520D',
                            '#493907'
                        ],
                        [
                            '#F9F7D2',
                            '#FFFDB1',
                            '#FFFB7B',
                            '#F3ED3E',
                            '#B8B424',
                            '#797715',
                            '#514D08'
                        ],
                        [
                            '#E4F2C4',
                            '#D8F4A4',
                            '#B9F74D',
                            '#8BEB3B',
                            '#69B02C',
                            '#426E1D',
                            '#284709'
                        ],
                        [
                            '#CBEFD7',
                            '#A4F1BF',
                            '#86F4AA',
                            '#32D364',
                            '#1F893A',
                            '#0C5B22',
                            '#053A11'
                        ],
                        [
                            '#F7B19C',
                            '#57D0FC',
                            '#FB5379',
                            '#FCDA86',
                            '#527CFA',
                            '#59FCAC',
                            '#8266F7'
                        ],
                        [
                            '#FF6700',
                            '#2BF9FE',
                            '#FC0E1C',
                            '#FFFD38',
                            '#FD29FC',
                            '#45FA54',
                            '#1024FB'
                        ],
                        ['transparent']
                    ]
                });
            }
        }
        $('.m-carousel')['carousel']();
    };
    ajax['send'](null);
}
function cargaMenuResponsive(i7) {
    canvas['isDrawingMode'] = ![];
    document['getElementById']('efectosResponsive')['style']['display'] = 'none';
    document['getElementById']('efectosResponsive')['innerHTML'] = '';
    ajax = Ajax();
    ajax['open']('GET', '/devuelveAjaxEditorNEW.php?cargaMenuResponsive=true&catsActivas=' + i7);
    ajax['onreadystatechange'] = function () {
        if (ajax['readyState'] == 0x4) {
            document['getElementById']('categories')['innerHTML'] = ajax['responseText'];
        }
        $('.m-carousel')['carousel']();
    };
    ajax['send'](null);
}
function catProximamente(i8) {
    alert(str_alert_proximamente);
}
$(function () {
    $('#formSearcImagenes')['on']('submit', function (i9) {
        i9['preventDefault']();
        $['ajax']({
            'async': ![],
            'type': 'POST',
            'url': '/devuelveAjaxEditorNEW.php',
            'data': {
                'myString': $('#search')['val'](),
                'paginacion': document['getElementById']('paginacion')['value']
            }
        })['success'](function (ia) {
            if (ia == 'end') {
                alert('No\x20more\x20results');
            } else {
                document['getElementById']('paginacion')['value'] = parseInt(document['getElementById']('paginacion')['value']) + parseInt(0x8);
                document['getElementById']('cargaAjax')['innerHTML'] = ia + document['getElementById']('cargaAjax')['innerHTML'];
            }
        });
        return ![];
    });
});
function cambioCategoriaResporNormal(ib) {
    fondo_menu_lateral('div_' + ib);
    if (myWidth > 0x31f) {
        cambioSubCategoria(ib);
    } else {
        cambioSubCatResponsive(ib);
    }
}
function scaleControlLessMore(ic) {
    var id = canvas['getActiveObject']();
    if (!id)
        return;
    console['log'](parseFloat(id['get']('scaleX')));
    if (ic == 'more') {
        id['scale'](parseFloat(id['get']('scaleX')) + parseFloat(0.01))['setCoords']();
    } else {
        id['scale'](parseFloat(id['get']('scaleX')) - parseFloat(0.01))['setCoords']();
    }
    canvas['renderAll']();
}
function angleControlLessMore(ie) {
    var ig = canvas['getActiveObject']();
    if (!ig)
        return;
    if (ie == 'more') {
        ig['rotate'](ig['get']('angle') + 0x1)['setCoords']();
    }
    if (ie == 'less') {
        ig['rotate'](ig['get']('angle') - 0x1)['setCoords']();
    }
    document['getElementById']('coords_size')['innerHTML'] = ig['get']('angle') + 'º';
    canvas['renderAll']();
}
function angleControl(ih) {
    var ii = canvas['getActiveObject']();
    if (!ii)
        return;
    ii['rotate'](parseInt(ih, 0xa))['setCoords']();
    console['log'](ih);
    angle_value = parseInt(ih, 0xa);
    document['getElementById']('coords_size')['innerHTML'] = ii['get']('angle') + 'º';
    canvas['renderAll']();
}
function scaleControl(ij) {
    var ik = canvas['getActiveObject']();
    if (!ik)
        return;
    console['log']('Scale\x20TO\x20:\x20' + ij);
    ik['scale'](parseFloat(ij))['setCoords']();
    console['log'](ik['scale']);
    canvas['renderAll']();
}
function cambioColorGeneral() {
    var il = document['getElementById']('colorPintar');
    if (typeof il != 'undefined' && il != null) {
        document['getElementById']('colorPintar')['value'] = document['getElementById']('colorGeneral')['value'];
        cambioColorPintar();
    }
}
function updateControlsObj() {
    var im = canvas['getActiveObject']();
    if (im) {
        try {
            document['getElementById']('angleControl')['value'] = im['get']('angle');
        } catch (io) {
        }
        ocultaAlMover();
        if (im['id'] > 0x0) {
            scaleControl2();
        }
    }
}
function changeSize(ip) {
    var iq = canvas['getActiveObject']();
    if (escupir_console_log == 0x1)
        if (notificaciones == 0x1)
            console['log']('scale\x20initial:\x20' + iq['get']('ScaleX'));
    if (ip == 0x1) {
        document['getElementById']('scaleControl')['stepUp']();
    } else {
        document['getElementById']('scaleControl')['stepDown']();
    }
    scaleControl();
}
function cargarMasEfectos(ir, is, it) {
    divCarga = 'cargarEfectos' + ir;
    document['getElementById'](divCarga)['style']['widht'] = 'inherit';
    document['getElementById'](divCarga)['style']['height'] = 'inherit';
    document['getElementById'](divCarga)['style']['margin'] = 0x0;
    ajax = Ajax();
    ajax['open']('GET', '/devuelveAjaxEditorNEW.php?cargarMasEfectos=1&cat=' + is + '&subcat=' + it);
    ajax['onreadystatechange'] = function () {
        if (ajax['readyState'] == 0x4) {
            document['getElementById'](divCarga)['innerHTML'] = ajax['responseText'];
        }
    };
    ajax['send'](null);
}
function hideControlsObj() {
}
function showControlsObj() {
}
function mostrarEfectosResp(iu, iv, iw) {
    document['getElementById']('efectosResponsive')['style']['display'] = 'block';
    if (generalWidth < 0x26d) {
        if (generalWidth < 0x1c3) {
            var ix = 0x1c2;
        } else {
            var ix = 0x26c;
        }
    } else {
        var ix = 0x31f;
    }
    ajax = Ajax();
    ajax['open']('GET', '/devuelveAjaxEditorNEW.php?efectosResponsive=true&classArray=' + iu + '&cat=' + iv + '&subCat=' + iw + '&bgSize=' + ix);
    ajax['onreadystatechange'] = function () {
        if (ajax['readyState'] == 0x4) {
            document['getElementById']('efectosResponsive')['innerHTML'] = ajax['responseText'];
        }
        $('.m-carousel')['carousel']();
    };
    ajax['send'](null);
}
function mostrarMisFotos() {
    document['getElementById']('efectosResponsive')['style']['display'] = 'block';
    ajax = Ajax();
    ajax['open']('GET', '/devuelveAjaxEditorNEW.php?misfotos=1');
    ajax['onreadystatechange'] = function () {
        if (ajax['readyState'] == 0x4) {
            document['getElementById']('efectosResponsive')['innerHTML'] = ajax['responseText'];
        }
        $('.m-carousel')['carousel']();
    };
    ajax['send'](null);
}
function pregSalirSi() {
    var iA = !![];
    window['onbeforeunload'] = pregSalirSi;
    if (iA)
        return str_preguntar_salir;
}
function pregSalirNo() {
    var iB = ![];
    window['onbeforeunload'] = pregSalirNo;
}
$('drawing-mode-selector1')['onchange'] = function () {
    if (this['value'] === 'hline') {
        canvas['freeDrawingBrush'] = vLinePatternBrush;
    } else if (this['value'] === 'vline') {
        canvas['freeDrawingBrush'] = hLinePatternBrush;
    } else if (this['value'] === 'square') {
        canvas['freeDrawingBrush'] = squarePatternBrush;
    } else if (this['value'] === 'diamond') {
        canvas['freeDrawingBrush'] = diamondPatternBrush;
    } else if (this['value'] === 'texture') {
        canvas['freeDrawingBrush'] = texturePatternBrush;
    } else {
        canvas['freeDrawingBrush'] = new fabric[this['value'] + 'Brush'](canvas);
    }
    if (canvas['freeDrawingBrush']) {
        canvas['freeDrawingBrush']['width'] = parseInt(drawingLineWidthEl['value'], 0xa) || 0x1;
        canvas['freeDrawingBrush']['shadowBlur'] = parseInt(drawingShadowWidth['value'], 0xa) || 0x0;
    }
};
var hLinePatternBrush = new fabric['PatternBrush'](canvas);
hLinePatternBrush['getPatternSrc'] = function () {
    var iC = fabric['document']['createElement']('canvas');
    iC['width'] = iC['height'] = 0xa;
    var iD = iC['getContext']('2d');
    iD['strokeStyle'] = document['getElementById']('colorGeneral')['value'];
    iD['lineWidth'] = 0x5;
    iD['beginPath']();
    iD['moveTo'](0x5, 0x0);
    iD['lineTo'](0x5, 0xa);
    iD['closePath']();
    iD['stroke']();
    return iC;
};
var squarePatternBrush = new fabric['PatternBrush'](canvas);
squarePatternBrush['getPatternSrc'] = function () {
    var iE = 0xa, iF = 0x2;
    var iG = fabric['document']['createElement']('canvas');
    iG['width'] = iG['height'] = iE + iF;
    var iH = iG['getContext']('2d');
    iH['fillStyle'] = document['getElementById']('colorGeneral')['value'];
    iH['fillRect'](0x0, 0x0, iE, iE);
    return iG;
};
function rgbToHex(iI, iJ, iK) {
    return toHex(iI) + toHex(iJ) + toHex(iK);
}
function toHex(iL) {
    iL = parseInt(iL, 0xa);
    if (isNaN(iL))
        return '00';
    iL = Math['max'](0x0, Math['min'](iL, 0xff));
    return '0123456789ABCDEF'['charAt']((iL - iL % 0x10) / 0x10) + '0123456789ABCDEF'['charAt'](iL % 0x10);
}
function addGrid(iM) {
    if (iM == 'ocultar') {
        canvas['forEachObject'](function (iN) {
            if (iN['id'] == 'grid_lines') {
                iN['set']('opacity', 0x0);
            }
        });
    } else {
        var iO = canvas['width'];
        var iP = canvas['height'];
        var iQ = 0x0;
        var iR = null;
        var iS = [];
        var iT = 0x14;
        if (escupir_console_log == 0x1)
            if (notificaciones == 0x1)
                console['log'](iO + ':' + iP);
        for (var iU = 0x0; iU < Math['ceil'](iO / 0x14); ++iU) {
            iS[0x0] = iU * iT;
            iS[0x1] = 0x0;
            iS[0x2] = iU * iT;
            iS[0x3] = iP;
            iR = null;
            iR = new fabric['Line'](iS, {
                'stroke': '#999',
                'zindex': 0x8ac7230489e80000,
                'id': 'grid_lines',
                'opacity': 0.5
            });
            iR['selectable'] = ![];
            canvas['add'](iR);
            iR['sendToBack']();
        }
        for (iU = 0x0; iU < Math['ceil'](iP / 0x14); ++iU) {
            iS[0x0] = 0x0;
            iS[0x1] = iU * iT;
            iS[0x2] = iO;
            iS[0x3] = iU * iT;
            iR = null;
            iR = new fabric['Line'](iS, {
                'stroke': '#999',
                'zindex': 0x8ac7230489e80000,
                'id': 'grid_lines',
                'opacity': 0.5
            });
            iR['selectable'] = ![];
            canvas['add'](iR);
            iR['sendToBack']();
        }
    }
    canvas['renderAll']();
}
function ocultaAlMover() {
    $('#controlsObjectsResp')['fadeOut'](0xc8);
    $('#subCategories')['fadeOut'](0xc8);
    $('#content-sub-cats')['fadeOut'](0xc8);
    $('#toolbar')['fadeOut'](0xc8);
}
function mostrarControles() {
    $('#controlsObjectsResp')['fadeIn'](0xc8);
    $('#subCategories')['fadeIn'](0xc8);
    $('#content-sub-cats')['fadeIn'](0xc8);
    $('#toolbar')['fadeIn'](0xc8);
}
function hacer_seleccionable() {
    canvas['freeDrawing'] = ![];
    mode = 'select';
    canvas['selection'] = !![];
    canvas['discardActiveObject']()['renderAll']();
    canvas['isDrawingMode'] = ![];
    canvas['renderAll']();
    if (notificaciones == 0x1)
        console['log']('Ahora\x20puedes\x20seleccionar');
    fondo_menu_lateral('div_seleccionable');
}
function fondo_menu_lateral(iV) {
    var iW = $('#toolbar\x20div');
    iW['each'](function (iX) {
        if (this['id'] != 'colorchanger') {
            document['getElementById'](this['id'])['style']['backgroundColor'] = 'rgba(242,242,242,0.98)';
        }
    });
    if (this['id'] != 'colorchanger') {
        document['getElementById'](iV)['style']['backgroundColor'] = 'rgba(100,100,100,0.50)';
    }
}
function mostrarBordes() {
    var iY = canvas['getActiveObject']();
    iY['setControlsVisibility']({
        'mt': !![],
        'mb': !![],
        'ml': !![],
        'mr': !![],
        'bl': !![],
        'br': !![],
        'tl': !![],
        'tr': !![],
        'mtr': !![]
    });
}
function quitarBordes() {
    var iZ = canvas['getActiveObject']();
    iZ['setControlsVisibility']({
        'mt': ![],
        'mb': ![],
        'ml': ![],
        'mr': ![],
        'bl': ![],
        'br': ![],
        'tl': ![],
        'tr': ![],
        'mtr': ![]
    });
}
function mostrar_layers() {
    if (document['getElementById']('undoredo')['style']['display'] == '') {
        document['getElementById']('undoredo')['style']['display'] = 'none';
    } else {
        document['getElementById']('undoredo')['style']['display'] = '';
    }
}
$(document)['keydown'](function (j0) {
    try {
        var j1 = 0x5a;
        var j2 = 0x5b;
        if ((j0['ctrlKey'] || j0['metaKey']) && j0['keyCode'] == j1) {
            canvasDemo['undo']();
        }
        if (j0['keyCode'] == 0x21) {
            sendTofront('key');
        }
        if (j0['keyCode'] == 0x22) {
            sendtoback('key');
        }
        if (j0['keyCode'] == 0x9) {
            openModalTextBoxNext();
        }
        if (j0['keyCode'] == 0x5a && j0['ctrlKey'] || j0['keyCode'] == 0x5b && j0['keyCode'] == 0x5a) {
            canvasDemo['undo']();
            if (notificaciones == 0x1)
                console['log'](j0['keyCode']);
        }
        obj = canvas['getActiveObject']();
        if (is_admin == 0x1 && obj) {
            if (obj['isEditing']) {
            } else {
                if ((j0['ctrlKey'] || j0['metaKey']) && j0['keyCode'] == 0x43) {
                    Copy();
                }
                if ((j0['ctrlKey'] || j0['metaKey']) && j0['keyCode'] == 0x56) {
                    if ($('input')['is'](':focus')) {
                        console['log']('Focus\x20is\x20on\x20a\x20@input,\x20we\x20dont\x20make\x20paste');
                    } else {
                        Paste();
                    }
                }
            }
        }
        obj = canvas['getActiveObject']();
        if (j0['keyCode'] == 0x2e || j0['keyCode'] == 0x8) {
            if (document['activeElement']['type'] != 'text' && document['activeElement']['type'] != 'textarea') {
                if (notificaciones == 0x1)
                    console['log']('\x20¿Está\x20editandose?' + obj['isEditing']);
                if (obj) {
                    if (!obj['isEditing']) {
                        deleteObject();
                    }
                }
            }
        }
        if (j0['keyCode'] == 0x1b) {
            canvas['discardActiveObject']()['renderAll']();
        }
        if (document['getElementById']('exampleModal')['style']['display'] == 'block') {
        } else {
            if (canvas['getActiveObject']() || canvas['getActiveObjects']()) {
                try {
                    if (j0['keyCode'] == 0x27) {
                        var j3 = canvas['getActiveObject']();
                        var j4 = canvas['getActiveObjects']();
                        if (j3) {
                            var j5 = j3['get']('left') + parseInt(0x1);
                            j3['set']('left', j5);
                            j3['setCoords']();
                            canvas['renderAll']();
                        } else if (j4) {
                            var j5 = j4['get']('left') + parseInt(0x1);
                            j4['set']('left', j5);
                            j4['setCoords']();
                            canvas['renderAll']();
                            updateControls();
                        }
                        ;
                    }
                    if (j0['keyCode'] == 0x25) {
                        var j3 = canvas['getActiveObject']();
                        var j4 = canvas['getActiveObjects']();
                        if (j3) {
                            var j5 = j3['get']('left') - parseInt(0x1);
                            j3['set']('left', j5);
                            j3['setCoords']();
                            canvas['renderAll']();
                        } else if (j4) {
                            var j5 = j4['get']('left') - parseInt(0x1);
                            j4['set']('left', j5);
                            j4['setCoords']();
                            canvas['renderAll']();
                            updateControls();
                        }
                        ;
                    }
                    if (j0['keyCode'] == 0x28) {
                        var j3 = canvas['getActiveObject']();
                        var j4 = canvas['getActiveObjects']();
                        if (j3) {
                            var j5 = j3['get']('top') + parseInt(0x1);
                            j3['set']('top', j5);
                            j3['setCoords']();
                            canvas['renderAll']();
                        } else if (j4) {
                            var j5 = j4['get']('top') + parseInt(0x1);
                            j4['set']('top', j5);
                            j4['setCoords']();
                            canvas['renderAll']();
                            updateControls();
                        }
                        ;
                    }
                    if (j0['keyCode'] == 0x26) {
                        var j3 = canvas['getActiveObject']();
                        var j4 = canvas['getActiveObjects']();
                        if (j3) {
                            var j5 = j3['get']('top') - parseInt(0x1);
                            j3['set']('top', j5);
                            j3['setCoords']();
                            canvas['renderAll']();
                        } else if (j4) {
                            var j5 = j4['get']('top') - parseInt(0x1);
                            j4['set']('top', j5);
                            j4['setCoords']();
                            canvas['renderAll']();
                            updateControls();
                        }
                        ;
                    }
                } catch (jj) {
                    send_error_to_log(jj + 'error_code34\x20+\x20keyCode:' + keyCode);
                }
            }
        }
    } catch (jk) {
    }
});
function copypaste(jl) {
    if (jl == 'copy') {
        if (canvas['getActiveObject']()) {
            var jm = canvas['getActiveObject']();
            var jn = canvas['getObjects']()['indexOf'](jm);
            document['getElementById']('item_copypaste')['value'] = jn;
        }
    }
    if (jl == 'paste') {
        var jo = document['getElementById']('item_copypaste')['value'];
        if (canvas['getActiveObject'](jo)) {
            var jp = canvas['getActiveObject'](jo);
            var jq = fabric['util']['object']['clone'](jp);
            jq['set']({
                'left': 0x64,
                'top': 0x64
            });
            canvas['add'](jq);
        }
        canvas['renderAll']();
    }
}
function reemplazarImagenSolicitar(jr) {
    grabar_accion('templates', 'replace_img_button');
    console['log']('grabamos\x20reemplazo');
    finished_loading_json = 0x0;
    if (jr == 'last_image') {
        first_layer_image = '';
        var js = canvas['getObjects']();
        var jt = js['length'];
        while (jt--) {
            if (js[jt]['get']('type') == 'image') {
                first_layer_image = js[jt]['id'];
                first_layer_image_object = js[jt];
            }
        }
        if (first_layer_image) {
            var ju = first_layer_image;
            canvas['setActiveObject'](first_layer_image_object);
            try {
                zt['hide']($('#reemplazarImagen'));
                zt['hide']($('#file_upload_button'));
            } catch (jv) {
            }
            $('#buttonPhotos')['click']();
            mostramos_tooltip_fotos = 0x1;
            document['getElementById']('changeImageid')['value'] = ju;
            console['log']('reemplazamos' + document['getElementById']('changeImageid')['value']);
        }
    } else {
        if (canvas['getActiveObject']()) {
            if (canvas['getActiveObject']()['get']('type') == 'image' || canvas['getActiveObject']()['get']('type') == 'group' || canvas['getActiveObject']()['get']('type') == 'path') {
                var ju = canvas['getActiveObject']()['id'];
                try {
                    zt['hide']($('#reemplazarImagen'));
                    zt['hide']($('#file_upload_button'));
                } catch (jx) {
                }
                $('#buttonPhotos')['click']();
                mostramos_tooltip_fotos = 0x1;
                document['getElementById']('changeImageid')['value'] = ju;
                console['log']('reemplazamos' + document['getElementById']('changeImageid')['value']);
            } else {
                alert(traduccion_selecciona_imagen_para_cambiar);
            }
        } else {
            alert(traduccion_selecciona_imagen_para_cambiar);
        }
    }
}
function changeImage_0(jy) {
    if (document['getElementById']('changeImageid')['value'] != '') {
        document['getElementById']('changeImageUrl')['value'] = jy;
        $['when'](changeImage())['then'](function () {
        });
    }
}
function changeImage() {
    if (user_email == 'dani26381@gmail.com') {
        changeImage_PROD();
    } else {
        changeImage_PROD();
    }
}
function changeImage_PROD() {
    canvasDemo['updateCanvasState']();
    finished_loading_json = 0x0;
    if (document['getElementById']('changeImageUrl')['value'] == '') {
        var jz = canvas['getActiveObject']();
        if (jz) {
            var jA = canvas['getActiveObject']()['id'];
            cambioSubCategoria('pegatinas');
            document['getElementById']('changeImageid')['value'] = jA;
        } else {
            alert(traduccion_javascript_no_image_selected);
        }
    } else {
        var jA = document['getElementById']('changeImageid')['value'];
        canvas['getObjects']()['forEach'](function (jC) {
            console['log'](document['getElementById']('changeImageid')['value'] + '\x20' + jC['id']);
            if (jC['id'] == document['getElementById']('changeImageid')['value']) {
                console['log']('object.id:\x20\x20\x20' + jC['id'] + '\x20changeImageid:\x20' + document['getElementById']('changeImageid')['value']);
                var jD = canvas['getObjects']()['indexOf'](jC);
                var jE = jC['get']('width') * jC['get']('scaleX');
                var jF = jC['get']('height') * jC['get']('scaleY');
                console['log']('ANGULO:\x20' + jC['get']('angle'));
                if (jC['get']('angle') > 0xa || jC['get']('angle') < 0x0) {
                    var jG = jC['getBoundingRect']()['top'];
                    var jH = jC['getBoundingRect']()['left'];
                    if (jC['get']('angle') < 0x168 && jC['get']('angle') > 0x12c) {
                        var jH = jC['get']('left');
                        var jG = jC['get']('top');
                    }
                } else {
                    var jH = jC['get']('left');
                    var jG = jC['get']('top');
                }
                console['log'](jC['get']('angle') + '\x20topImage:\x20' + jG + '\x20leftImage:' + jH + '\x20\x20angle:\x20' + jC['get']('angle'));
                var jM = jC['get']('scaleX');
                var jN = jC['get']('scaleY');
                getFilters('');
                if (jC['id'] != null) {
                    fuente_id = 'ini|' + jC['id'] + '|aaa';
                    if (fuente_id['indexOf']('sizeClipTo')) {
                        data_in_id = fuente_id['split']('|');
                        if (data_in_id[0x1] == 'sizeClipTo') {
                            sizeClipTo = data_in_id[0x2];
                        }
                    }
                }
                console['log']('escalamos\x20a\x20' + jE + '\x20' + jF);
                canvas['remove'](jC);
                try {
                    zt['hide']($('#reemplazarImagen'));
                    zt['hide']($('#file_upload_button'));
                } catch (jO) {
                }
                if (document['getElementById']('changeImageUrl')['value']['indexOf']('.svg') > 0x1) {
                    fabric['loadSVGFromURL'](document['getElementById']('changeImageUrl')['value'], function (jP, jQ) {
                        var jR = fabric['util']['groupSVGElements'](jP, jQ);
                        jR['set']({
                            'left': jH,
                            'top': jG,
                            'id': document['getElementById']('changeImageid')['value']
                        })['setCoords']();
                        canvas['add'](jR);
                        jR['moveTo'](jD);
                        document['getElementById']('changeImageid')['value'] = '';
                        document['getElementById']('changeImageUrl')['value'] = '';
                        var jS = jR['get']('width');
                        var jT = jR['get']('height');
                        var jz = jR, jV = canvas['viewportTransform'];
                        activeObjectHeight = jz['getBoundingRect']()['height'] / jV[0x3];
                        activeObjectWidth = jz['getBoundingRect']()['width'] / jV[0x0];
                        width_canvas = canvas['width'] / jV[0x0];
                        height_canvas = canvas['height'] / jV[0x0];
                        if (jE > width_canvas && jF > height_canvas) {
                            var jW = jF / jT;
                            var jX = jE / jS;
                            if (jW > jX) {
                                jY = jW;
                            } else {
                                jY = jX;
                            }
                        } else {
                            if (jE / jS > jF / jT) {
                                var jY = jF / jT;
                            } else {
                                var jY = jE / jS;
                            }
                        }
                        jR['set']('scaleX', jY);
                        jR['set']('scaleY', jY);
                        leftImage_resta = (jE - jR['get']('width') * jY) / 0x2;
                        jR['set']('left', jH + leftImage_resta);
                        activate_loading('end');
                        if (filter_of_image) {
                            jR['filters']['push'](filter_of_image);
                            jR['applyFilters']();
                            filter_of_image = '';
                        }
                        canvas['renderAll']();
                        jR['setCoords']();
                        newZoomLevel_backup0 = newZoomLevel_backup;
                        setZoom2(0x1);
                        reestablecemos_zoom = 0x1;
                        setZoom2(newZoomLevel_backup0);
                        jR['setCoords']();
                        canvas['calcOffset']();
                        canvas['renderAll']();
                        canvas['setActiveObject'](jR);
                        canvas['renderAll']();
                    });
                } else {
                    fabric['Image']['fromURL'](document['getElementById']('changeImageUrl')['value'], function (k0) {
                        object2 = k0['set']({
                            'left': jH,
                            'top': jG,
                            'id': document['getElementById']('changeImageid')['value']
                        });
                        canvas['add'](object2);
                        object2['moveTo'](jD);
                        document['getElementById']('changeImageid')['value'] = '';
                        document['getElementById']('changeImageUrl')['value'] = '';
                        var k1 = object2['get']('width');
                        var k2 = object2['get']('height');
                        var jz = object2, k4 = canvas['viewportTransform'];
                        activeObjectHeight = jz['getBoundingRect']()['height'] / k4[0x3];
                        activeObjectWidth = jz['getBoundingRect']()['width'] / k4[0x0];
                        width_canvas = canvas['width'] / k4[0x0];
                        height_canvas = canvas['height'] / k4[0x0];
                        if (jE > width_canvas && jF > height_canvas) {
                            var k5 = jF / k2;
                            var k6 = jE / k1;
                            if (k5 > k6) {
                                k7 = k5;
                            } else {
                                k7 = k6;
                            }
                        } else {
                            if (jE / k1 > jF / k2) {
                                var k7 = jF / k2;
                            } else {
                                var k7 = jE / k1;
                            }
                        }
                        object2['set']('scaleX', k7);
                        object2['set']('scaleY', k7);
                        leftImage_resta = (jE - object2['get']('width') * k7) / 0x2;
                        object2['set']('left', jH + leftImage_resta);
                        activate_loading('end');
                        if (filter_of_image) {
                            object2['filters']['push'](filter_of_image);
                            object2['applyFilters']();
                            filter_of_image = '';
                        }
                        canvas['renderAll']();
                        object2['setCoords']();
                        newZoomLevel_backup0 = newZoomLevel_backup;
                        setZoom2(0x1);
                        reestablecemos_zoom = 0x1;
                        setZoom2(newZoomLevel_backup0);
                        object2['setCoords']();
                        canvas['calcOffset']();
                        canvas['renderAll']();
                        canvas['setActiveObject'](object2);
                        canvas['renderAll']();
                        activate_loading('end');
                    });
                }
            }
        });
        activate_loading('end');
        canvas['renderAll']();
    }
    canvasDemo['updateCanvasState']();
    layersAddIds();
}
function changeImage_DEV() {
    canvasDemo['updateCanvasState']();
    finished_loading_json = 0x0;
    if (document['getElementById']('changeImageUrl')['value'] == '') {
        var k9 = canvas['getActiveObject']();
        if (k9) {
            var ka = canvas['getActiveObject']()['id'];
            cambioSubCategoria('pegatinas');
            document['getElementById']('changeImageid')['value'] = ka;
        } else {
            alert(traduccion_javascript_no_image_selected);
        }
    } else {
        var ka = document['getElementById']('changeImageid')['value'];
        canvas['getObjects']()['forEach'](function (kc) {
            console['log'](document['getElementById']('changeImageid')['value'] + '\x20' + kc['id']);
            if (kc['id'] == document['getElementById']('changeImageid')['value']) {
                console['log']('object.id:\x20\x20\x20' + kc['id'] + '\x20changeImageid:\x20' + document['getElementById']('changeImageid')['value']);
                var kd = canvas['getObjects']()['indexOf'](kc);
                var ke = kc['get']('width') * kc['get']('scaleX');
                var kf = kc['get']('height') * kc['get']('scaleY');
                var kg = kc['get']('width');
                var kh = kc['get']('height');
                viewportTransform = canvas['viewportTransform'];
                activeObjectHeight1 = kc['getBoundingRect']()['height'] / viewportTransform[0x3];
                activeObjectWidth1 = kc['getBoundingRect']()['width'] / viewportTransform[0x0];
                console['log']('ANGULO:\x20' + kc['get']('angle'));
                if (kc['get']('angle') > 0xa || kc['get']('angle') < 0x0) {
                    var ki = kc['getBoundingRect']()['top'];
                    var kj = kc['getBoundingRect']()['left'];
                    if (kc['get']('angle') < 0x168 && kc['get']('angle') > 0x12c) {
                        var kj = kc['get']('left');
                        var ki = kc['get']('top');
                    }
                } else {
                    var kj = kc['get']('left');
                    var ki = kc['get']('top');
                }
                console['log'](kc['get']('angle') + '\x20topImage:\x20' + ki + '\x20leftImage:' + kj + '\x20\x20angle:\x20' + kc['get']('angle'));
                var ko = kc['get']('scaleX');
                var kp = kc['get']('scaleY');
                getFilters('');
                if (kc['id'] != null) {
                    fuente_id = 'ini|' + kc['id'] + '|aaa';
                    if (fuente_id['indexOf']('sizeClipTo')) {
                        data_in_id = fuente_id['split']('|');
                        if (data_in_id[0x1] == 'sizeClipTo') {
                            sizeClipTo = data_in_id[0x2];
                        }
                    }
                }
                console['log']('1---escalamos\x20a\x20' + ke + '\x20' + kf);
                canvas['remove'](kc);
                try {
                    zt['hide']($('#reemplazarImagen'));
                    zt['hide']($('#file_upload_button'));
                } catch (kq) {
                }
                if (document['getElementById']('changeImageUrl')['value']['indexOf']('.svg') > 0x1) {
                    fabric['loadSVGFromURL'](document['getElementById']('changeImageUrl')['value'], function (kr, ks) {
                        var kt = fabric['util']['groupSVGElements'](kr, ks);
                        kt['set']({
                            'left': kj,
                            'top': ki,
                            'id': document['getElementById']('changeImageid')['value']
                        })['setCoords']();
                        canvas['add'](kt);
                        kt['moveTo'](kd);
                        document['getElementById']('changeImageid')['value'] = '';
                        document['getElementById']('changeImageUrl')['value'] = '';
                        var ku = kt['get']('width');
                        var kv = kt['get']('height');
                        var k9 = kt, kx = canvas['viewportTransform'];
                        activeObjectHeight = k9['getBoundingRect']()['height'] / kx[0x3];
                        activeObjectWidth = k9['getBoundingRect']()['width'] / kx[0x0];
                        width_canvas = canvas['width'] / kx[0x0];
                        height_canvas = canvas['height'] / kx[0x0];
                        if (ke > width_canvas && kf > height_canvas) {
                            var ky = kf / kv;
                            var kz = ke / ku;
                            if (ky > kz) {
                                kA = ky;
                            } else {
                                kA = kz;
                            }
                        } else {
                            if (ke / ku > kf / kv) {
                                var kA = kf / kv;
                            } else {
                                var kA = ke / ku;
                            }
                        }
                        kt['set']('scaleX', kA);
                        kt['set']('scaleY', kA);
                        leftImage_resta = (ke - kt['get']('width') * kA) / 0x2;
                        kt['set']('left', kj + leftImage_resta);
                        if (filter_of_image) {
                            kt['filters']['push'](filter_of_image);
                            kt['applyFilters']();
                            filter_of_image = '';
                        }
                        canvas['renderAll']();
                        kt['setCoords']();
                        newZoomLevel_backup0 = newZoomLevel_backup;
                        setZoom2(0x1);
                        reestablecemos_zoom = 0x1;
                        setZoom2(newZoomLevel_backup0);
                        kt['setCoords']();
                        canvas['calcOffset']();
                        canvas['renderAll']();
                        canvas['setActiveObject'](kt);
                        canvas['renderAll']();
                    });
                } else {
                    console['log']('Reemplazamos1');
                    fabric['Image']['fromURL'](document['getElementById']('changeImageUrl')['value'], function (kC) {
                        object2 = kC['set']({
                            'left': kj,
                            'top': ki,
                            'id': document['getElementById']('changeImageid')['value']
                        });
                        canvas['add'](object2);
                        object2['moveTo'](kd);
                        document['getElementById']('changeImageid')['value'] = '';
                        document['getElementById']('changeImageUrl')['value'] = '';
                        var kD = object2['get']('width');
                        var kE = object2['get']('height');
                        var k9 = object2, kG = canvas['viewportTransform'];
                        activeObjectHeight = k9['getBoundingRect']()['height'] / kG[0x3];
                        activeObjectWidth = k9['getBoundingRect']()['width'] / kG[0x0];
                        width_canvas = canvas['width'] / kG[0x0];
                        height_canvas = canvas['height'] / kG[0x0];
                        if (user_email == 'dani26381@gmail.com') {
                            console['log']('\x20anchoImage:' + ke + '\x20altoImage:' + kf + '\x20scaleX:' + ko + '\x20scaleY:' + kp);
                            object2['set']('left', kj);
                            object2['set']('top', ki);
                            var kH = kh / kE;
                            var kI = kg / kD;
                            var kJ = object2['get']('scaleX');
                            var kK = object2['get']('scaleY');
                            console['log']('anchoImage1:' + kg + 'scaleX:' + ko + 'altoImage1:' + kh + 'scaleY:' + kp + '\x0a\x0a\x20anchoNuevo:' + kD + '\x20altoNuevo:' + kE + '\x20scaleX2:' + kJ + '\x20scaleY2:' + kK);
                            var kL = object2['get']('width') * object2['get']('scaleX');
                            var kM = object2['get']('height') * object2['get']('scaleY');
                            if (kL < ke) {
                                if (ke > width_canvas && kf > height_canvas) {
                                    var kH = kf / kE;
                                    var kI = ke / kD;
                                    if (kH > kI) {
                                        kP = kH;
                                    } else {
                                        kP = kI;
                                    }
                                } else {
                                    if (ke / kD > kf / kE) {
                                        var kP = kf / kE;
                                    } else {
                                        var kP = ke / kD;
                                    }
                                }
                                object2['set']('scaleX', kP);
                                object2['set']('scaleY', kP);
                                leftImage_resta = (ke - object2['get']('width') * kP) / 0x2;
                                object2['set']('left', kj + leftImage_resta);
                            } else if (kg * ko / (kD * kJ) > kh * kp / (kE * kK)) {
                                newScale = ke / kL;
                                object2['set']('scaleX', newScale);
                                var kL = object2['get']('width') * object2['get']('scaleX');
                                var kM = object2['get']('height') * object2['get']('scaleY');
                                newCropY = (kM - kf) / 0x2;
                                newheight = kM - kf;
                                object2['set']('cropY', newCropY);
                                object2['set']('height', kf);
                                console['log']('La\x20imagen\x20nueva\x20ajustamos\x20a\x20ANCHO\x20' + ke + '\x20' + newScale + '\x20\x20newCropY:' + newCropY + '\x20height' + newheight);
                            } else if (kg * ko / (kD * kJ) == kh * kp / (kE * kK)) {
                                newScale = kf / kM;
                                console['log']('Tiene\x20las\x20mismas\x20proporciones\x20' + kf + '\x20' + newScale);
                                object2['set']('scaleY', newScale);
                                newScale2 = ke / kL;
                                console['log']('Tiene\x20las\x20mismas\x20proporciones\x20' + ke + '\x20' + newScale2);
                                object2['set']('scaleX', newScale2);
                            } else {
                                newScale = kf / kM;
                                console['log']('La\x20imagen\x20nueva\x20ajustamos\x20a\x20ALTO\x20' + kf + '\x20' + newScale);
                                object2['set']('scaleY', newScale);
                                object2['set']('scaleX', newScale);
                                var kL = object2['get']('width') * object2['get']('scaleX');
                                var kM = object2['get']('height') * object2['get']('scaleY');
                                newCropX = (kL - ke) / 0x2;
                                object2['set']('cropX', newCropX);
                                object2['set']('width', ke);
                            }
                        } else {
                            if (ke > width_canvas && kf > height_canvas) {
                                var kH = kf / kE;
                                var kI = ke / kD;
                                if (kH > kI) {
                                    kP = kH;
                                } else {
                                    kP = kI;
                                }
                            } else {
                                if (ke / kD > kf / kE) {
                                    var kP = kf / kE;
                                } else {
                                    var kP = ke / kD;
                                }
                            }
                            object2['set']('scaleX', kP);
                            object2['set']('scaleY', kP);
                            leftImage_resta = (ke - object2['get']('width') * kP) / 0x2;
                            object2['set']('left', kj + leftImage_resta);
                        }
                        activate_loading('end');
                        if (filter_of_image) {
                            object2['filters']['push'](filter_of_image);
                            object2['applyFilters']();
                            filter_of_image = '';
                        }
                        canvas['renderAll']();
                        object2['setCoords']();
                        newZoomLevel_backup0 = newZoomLevel_backup;
                        setZoom2(0x1);
                        reestablecemos_zoom = 0x1;
                        setZoom2(newZoomLevel_backup0);
                        object2['setCoords']();
                        canvas['calcOffset']();
                        canvas['renderAll']();
                        canvas['setActiveObject'](object2);
                        canvas['renderAll']();
                    });
                }
            }
        });
        canvas['renderAll']();
        activate_loading('end');
    }
    canvasDemo['updateCanvasState']();
    layersAddIds();
}
function textAlign(kZ) {
    if (kZ == 'center') {
        document['getElementById']('alignButton')['setAttribute']('onclick', 'textAlign(\x27right\x27)');
        document['getElementById']('alignButton')['src'] = 'https://dpo3tbth99ua1.cloudfront.net/editor/iconos/centerIcon.svg';
    } else if (kZ == 'right') {
        document['getElementById']('alignButton')['setAttribute']('onclick', 'textAlign(\x27left\x27)');
        document['getElementById']('alignButton')['src'] = 'https://dpo3tbth99ua1.cloudfront.net/editor/iconos/rightIcon.svg';
    } else if (kZ == 'left') {
        document['getElementById']('alignButton')['setAttribute']('onclick', 'textAlign(\x27center\x27)');
        document['getElementById']('alignButton')['src'] = 'https://dpo3tbth99ua1.cloudfront.net/editor/iconos/leftIcon.svg';
    }
    var l0 = canvas['getActiveObject']();
    if (l0) {
        if (l0['get']('type') == 'i-text' || l0['get']('type') == 'textbox') {
            l0['set']('textAlign', kZ);
        }
        if (canvas['getActiveObject']()['get']('type') == 'activeSelection') {
            canvas['getActiveObject']()['forEachObject'](function (l0) {
                if (l0['get']('type') == 'i-text' || l0['get']('type') == 'textbox') {
                    l0['set']('textAlign', kZ);
                }
            });
        }
        canvas['renderAll']();
    }
}
canvasScale = 0x1;
SCALE_FACTOR = 1.01;
function zoomIn() {
    canvas['setZoom'](canvas['getZoom']() * SCALE_FACTOR);
    canvas['setHeight'](canvas['getHeight']() * SCALE_FACTOR);
    canvas['setWidth'](canvas['getWidth']() * SCALE_FACTOR);
    canvas['renderAll']();
}
function zoomOut() {
    canvas['setZoom'](canvas['getZoom']() / SCALE_FACTOR);
    canvas['setHeight'](canvas['getHeight']() / SCALE_FACTOR);
    canvas['setWidth'](canvas['getWidth']() / SCALE_FACTOR);
    canvas['renderAll']();
}
function resetZoom() {
    canvas['setHeight'](canvas['getHeight']() / canvas['getZoom']());
    canvas['setWidth'](canvas['getWidth']() / canvas['getZoom']());
    canvas['setZoom'](0x1);
    canvas['renderAll']();
    canvas['css']('left', 0x0);
    canvas['css']('top', 0x0);
}
function scaleControl2() {
    var l2 = canvas['getActiveObject']();
    var l3 = l2['id'];
    document['getElementById']('id_seleccionado')['value'] = l3;
    var l4 = document['getElementById']('left' + l3);
    if (l4 === null) {
    } else {
        document['getElementById']('left' + l3)['value'] = l2['left'];
        document['getElementById']('top' + l3)['value'] = l2['top'];
        document['getElementById']('width' + l3)['value'] = l2['getWidth']();
        document['getElementById']('height' + l3)['value'] = l2['getHeight']();
    }
}
function ajustaControles() {
    var l5 = parseInt(document['getElementById']('canvas')['style']['width']) + parseInt(document['getElementById']('extCanvas')['offsetTop']) + 0x2a;
    document['getElementById']('controlsObjectsResp')['style']['top'] = l5 + 'px';
    document['getElementById']('controlsObjectsResp')['style']['left'] = document['getElementById']('extCanvas')['offsetLeft'] + 'px';
    ;
}
function dejarSoloRecortes() {
    canvas['setBackgroundImage']('img/transparentpixel.png');
    canvas['renderAll']();
}
function clearCanvas(l6) {
    if (l6 == 'no') {
        canvas['clear']();
    } else {
        if (confirm(traduccion_javascript_estas_seguro)) {
            canvas['clear']();
        }
    }
    canvas['renderAll']();
}
function sendtobackFondo() {
    var l7 = canvas['getActiveObject']();
    if (l7) {
        canvas['sendToBack'](l7);
    } else {
        alert(traduccion_javascript_select_object);
    }
}
function sendtoback(l8) {
    if (canvas['getActiveObject']()) {
        var l9 = canvas['getActiveObject']();
        if (l9) {
            canvas['sendBackwards'](l9);
        }
        objects_count = canvas['getObjects']()['length'] - 0x1;
        z_index = canvas['getObjects']()['indexOf'](l9);
        lock = l9['lockMovementX'];
        if (l8 != 'key') {
            document['getElementById']('bringToFront_icon')['style']['visibility'] = 'inline';
            document['getElementById']('sendtoback_icon')['style']['visibility'] = 'inline';
            if (objects_count == z_index) {
                document['getElementById']('bringToFront_icon')['style']['visibility'] = 'hidden';
            }
            if (z_index == 0x0) {
                document['getElementById']('sendtoback_icon')['style']['visibility'] = 'hidden';
            }
        }
        canvas['renderAll']();
    } else {
        alert(traduccion_javascript_select_object);
    }
}
function bringToFront(la) {
    if (canvas['getActiveObject']()) {
        var lb = canvas['getActiveObject']();
        if (lb) {
            canvas['bringForward'](lb);
        }
        objects_count = canvas['getObjects']()['length'] - 0x1;
        z_index = canvas['getObjects']()['indexOf'](lb);
        lock = lb['lockMovementX'];
        if (la != 'key') {
            document['getElementById']('bringToFront_icon')['style']['visibility'] = 'inline';
            document['getElementById']('sendtoback_icon')['style']['visibility'] = 'inline';
            if (objects_count == z_index) {
                document['getElementById']('bringToFront_icon')['style']['visibility'] = 'hidden';
            }
            if (z_index == 0x0) {
                document['getElementById']('sendtoback_icon')['style']['visibility'] = 'hidden';
            }
        }
        canvas['renderAll']();
    } else {
        alert(traduccion_javascript_select_object);
    }
}
function bringForward2() {
    if (canvas['getActiveObject']()) {
        var lc = canvas['getActiveObject']();
        if (lc) {
            canvas['bringForward'](lc);
        }
        canvas['renderAll']();
    } else {
        alert(traduccion_javascript_select_object);
    }
}
function sendTofront() {
    if (canvas['getActiveObject']()) {
        var ld = canvas['getActiveObject']();
        if (ld) {
            canvas['bringToFront'](ld);
        }
        canvas['renderAll']();
    } else {
        alert(traduccion_javascript_select_object);
    }
}
var _clipboard;
function Copy() {
    try {
        if (canvas['getActiveObject']()) {
            canvas['getActiveObject']()['clone'](function (le) {
                _clipboard = le;
            });
        }
    } catch (lf) {
    }
}
function Paste() {
    try {
        _clipboard['clone'](function (lg) {
            canvas['discardActiveObject']();
            lg['set']({
                'left': lg['left'] + 0xa,
                'top': lg['top'] + 0xa,
                'evented': !![]
            });
            if (lg['type'] === 'activeSelection') {
                lg['canvas'] = canvas;
                lg['forEachObject'](function (lh) {
                    canvas['add'](lh);
                });
                lg['setCoords']();
            } else {
                canvas['add'](lg);
                layersAddIds();
            }
            _clipboard['top'] += 0xa;
            _clipboard['left'] += 0xa;
            canvas['setActiveObject'](lg);
            canvas['requestRenderAll']();
        });
    } catch (li) {
    }
}
function duplicateObj() {
    grabar_accion('botones_barra', 'duplicar');
    if (canvas['getActiveObject']()) {
        var lj = confirm(traduccion_javascript_duplicate_object);
        if (lj == !![]) {
            Copy();
            Paste();
        } else {
            console['log']('Admin\x20dont\x20want\x20to\x20make\x20a\x20copy');
        }
    } else {
        alert(traduccion_javascript_select_object);
    }
}
function ocultarSinId() {
    canvas['renderAll']();
    canvas['forEachObject'](function (lk) {
        if (lk['id'] > 0x0) {
        } else {
            lk['set']('opacity', 0x0);
        }
    });
    circle = new fabric['Circle']({
        'radius': 0x1,
        'fill': 'white',
        'left': -0x64,
        'top': -0x64
    });
    canvas['add'](circle)['setActiveObject'](circle);
    canvas['renderAll']();
}
function ocultarConId() {
    canvas['renderAll']();
    canvas['forEachObject'](function (ll) {
        if (ll['id'] > 0x0) {
            ll['set']('opacity', 0x0);
        }
    });
    circle = new fabric['Circle']({
        'radius': 0x1,
        'fill': 'white',
        'left': -0x64,
        'top': -0x64
    });
    canvas['add'](circle)['setActiveObject'](circle);
    canvas['renderAll']();
}
function mostrarTodas() {
    canvas['forEachObject'](function (lm) {
        lm['set']('opacity', 0x1);
    });
    circle = new fabric['Circle']({
        'radius': 0x1,
        'fill': 'white',
        'left': -0x64,
        'top': -0x64
    });
    canvas['add'](circle)['setActiveObject'](circle);
    canvas['renderAll']();
}
function setFondoTransparente() {
    canvas['setBackgroundImage'](0x0);
    canvas['setBackgroundColor'](null);
    canvas['renderAll']();
}
function setFondoColorSeleccionado(ln) {
    canvas['setBackgroundImage'](0x0);
    canvas['backgroundColor'] = ln;
    canvas['renderAll']();
}
function descargaImagen() {
    activate_loading('ini');
    setZoom2(0x1);
    var lo = JSON['stringify'](self['canvas']['toJSON']([
        ancho,
        alto
    ]));
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'data': { 'base64descarga': canvas['toDataURL']('image/jpeg', 0.8) },
        'dataType': 'text',
        'success': function (lp) {
            barraAjax('descarga', lp);
            activate_loading('end');
        },
        'error': function (lq, lr, ls) {
        }
    });
}
function saveCanvasAdminQuestion(lt) {
    var lu = confirm('Do\x20you\x20want\x20to\x20make\x20a\x20copy\x20of\x20this\x20Template?');
    if (lu == !![]) {
        saveCanvas('nuevo', '', '', lt);
    } else {
        console['log']('Admin\x20dont\x20want\x20to\x20make\x20a\x20copy');
    }
}
function saveCanvasUserQuestion() {
    var lv = confirm('Do\x20you\x20want\x20to\x20make\x20a\x20copy\x20of\x20this\x20design?');
    if (lv == !![]) {
        saveCanvasUser('nuevo');
    } else {
        console['log']('User\x20dont\x20want\x20to\x20make\x20a\x20copy');
    }
}
function saveCanvasUserQuestion2(lw, lx, ly) {
    var lz = confirm(traduccion_javascript_crear_copia);
    if (lz == !![]) {
        saveCanvasUser(lw, lx, ly);
    } else {
        console['log']('User\x20dont\x20want\x20to\x20make\x20a\x20copy');
    }
}
function saveCanvasUser(lA, lB, lC, lD) {
    if (magic_resize == 0x2 & days_last_suscription <= 0x0 && (lA != 'updateUser' && lA != 'nuevo')) {
        activarID('getPremiumResize');
        popup_question_premium('getPremiumResize');
    } else {
        we_have_edite_the_template = 0x0;
        open_template_not_edited = 0x1;
        autosave_edit = 0x0;
        if (lB == 0x1) {
        } else {
            $('.frame-overflow')['foggy']({
                'blurRadius': 0x4,
                'opacity': 0.9,
                'cssFilterSupport': !![]
            });
        }
        console['log']('entramos\x20en\x20saveCanvasUser');
        if (typeof getCookie('email') !== 'undefined' && getCookie('email')) {
            if (lB == 0x1) {
                document['getElementById']('botonUpdate')['disabled'] = 'true';
            } else {
                activate_loading('ini');
            }
            if (lC) {
                var lE = 'REPLACE';
                base64dataRecorte_template = '';
            } else {
                if (user_email == 'dani26381---@gmail.com') {
                    var lE = JSON['stringify'](self['canvas']['toDatalessJSON']([
                        'hasControls',
                        'width',
                        'height',
                        'id',
                        'lockMovementX',
                        'lockMovementY',
                        'lockRotation',
                        'lockScalingX',
                        'lockScalingY',
                        'lockUniScaling',
                        'sizeClipTo',
                        'evented',
                        'selectable',
                        'targetFindTolerance',
                        'perPixelTargetFind'
                    ]));
                } else {
                    var lE = JSON['stringify'](self['canvas']['toJSON']([
                        'hasControls',
                        'width',
                        'height',
                        'id',
                        'lockMovementX',
                        'lockMovementY',
                        'lockRotation',
                        'lockScalingX',
                        'lockScalingY',
                        'lockUniScaling',
                        'sizeClipTo',
                        'evented',
                        'selectable',
                        'targetFindTolerance',
                        'perPixelTargetFind'
                    ]));
                }
                base64dataRecorte_template = canvas['toDataURL']('image/png');
            }
            var lH = document['getElementById']('idNombreCanvas_rel')['value'];
            var lI = document['getElementById']('idNombreCanvas_backup')['value'];
            var lJ = document['getElementById']('nombreTemplate')['value'];
            var lK = document['getElementById']('agrupador_templates')['value'];
            tabla = 'json_efectos_user';
            lE = lE['replace'](/'/g, '\x5c\x27');
            valor_editor2 = valor_editor;
            if (tipo_user_or_template == 'json_efectos_user') {
                id_json_short_origen = '';
            } else {
                id_json_short_origen = id_json_short;
            }
            if (tabla_current != tabla) {
                lI = '';
            }
            $['ajax']({
                'type': 'POST',
                'url': '/' + trad_url_photo_editor,
                'data': {
                    'json_values': lE,
                    'base64dataRecorte_template': base64dataRecorte_template,
                    'width': ancho,
                    'height': alto,
                    'user_save': 0x1,
                    'idNombreCanvas': lI,
                    'idNombreCanvas_rel': lH,
                    'nombreTemplate': lJ,
                    'quehacemos': lA,
                    'agrupador_templates': lK,
                    'tabla_': tabla,
                    'existe_id_canvas_user': document['getElementById']('id_canvas_user')['value'],
                    'id_json_short_copy': lC,
                    'id_json_short_origen': id_json_short_origen,
                    'save_hidden_premium': lD
                },
                'dataType': 'text',
                'success': function (lL) {
                    console['log'](lL + '\x20' + trad_url_photo_editor);
                    document['getElementById']('registroUsuario')['style']['display'] = 'none';
                    cerrarFoggy();
                    var lM = lL['split'](';');
                    idNombreCanvas_rel = lM[0x0];
                    if (idNombreCanvas_rel == 'NOT_REGISTERED') {
                        registroUsuario('', 'login');
                        return;
                    } else if (idNombreCanvas_rel == 'no_user_space') {
                        activate_loading('end');
                        activarID('getPremiumSpace');
                        popup_question_premium('getPremiumSpace');
                        return;
                    }
                    idNombreCanvas = lM[0x1];
                    id_canvas_user = lM[0x3];
                    document['getElementById']('botonUpdate')['setAttribute']('onclick', 'saveCanvasUser(\x27updateUser\x27)');
                    document['getElementById']('shareTeam')['setAttribute']('onclick', 'shareDesign(\x27design\x27);');
                    document['getElementById']('botonUpdate')['style']['opacity'] = '1';
                    document['getElementById']('shareTeam')['style']['opacity'] = '1';
                    we_have_edite_the_template = 0x0;
                    valor_editor = lM[0x4];
                    if (valor_editor == '') {
                        valor_editor = valor_editor2;
                        lM[0x4] = valor_editor;
                    }
                    tipo_user_or_template = 'json_efectos_user';
                    if (lA == 'updateUser') {
                        try {
                            instance['destroy']();
                        } catch (lN) {
                        }
                        try {
                            button = document['querySelector']('.buttonMyDesigns');
                            instance = tippy(button);
                            instance['set']({
                                'arrow': !![],
                                'placement': 'left',
                                'theme': 'light'
                            });
                            instance['setContent'](traduccion_javascript_copia_mydesigns);
                            instance['show']();
                        } catch (lO) {
                        }
                    }
                    if (share_design_after_save == 0x1) {
                        share_design_after_save = 0x0;
                        open_template_not_edited = 0x0;
                        shareDesign('design');
                    }
                    if (id_canvas_user) {
                        if (lA == 'nuevo') {
                            window['location']['assign']('/edit/my/' + lM[0x4]);
                        } else {
                            window['history']['pushState']('object\x20or\x20string', 'TITLE\x20HERE', 'https://' + dominio + '/edit/my/' + lM[0x4]);
                        }
                        if (lB == 0x1) {
                            document['getElementById']('botonUpdate')['disabled'] = 'false';
                            document['getElementById']('botonUpdate')['innerHTML'] = traduccion_javascript_saved;
                            $('#botonUpdate')['slideUp'](0x1f4)['slideDown'](0x1f4);
                            open_template_not_edited = 0x0;
                        }
                    }
                    if (lD) {
                        popup_payments(lD);
                    }
                    document['getElementById']('id_canvas_user')['value'] = idNombreCanvas;
                    document['getElementById']('id_canvas_user')['value'] = id_canvas_user;
                    activate_loading('end');
                },
                'error': function (lP, lQ, lR) {
                    console['log']('$_POST\x20OK');
                    activate_loading('end');
                    console['log']('Something\x20goes\x20wrong!');
                }
            });
        } else {
            solicita_guardar = 0x1;
            registroUsuario();
        }
    }
}
function createNewDesignBlank() {
    if (ancho > 0x0) {
    } else {
        ancho = 0x438;
        alto = 0x438;
    }
    if (!valor_editor) {
        window['location']['href'] = '/edit/new/' + ancho + 'x' + alto;
    } else {
        window['open']('/edit/new/' + ancho + 'x' + alto);
    }
}
function saveCanvas(lS, lT, lU, lV, lW, lX) {
    if (lX) {
        if (document['getElementById']('packs_affiliates')['value'] == '') {
            alert('Selecciona\x20el\x20pack\x20en\x20el\x20que\x20quieres\x20añadir\x20la\x20plantilla');
            return;
        }
        var lY = document['getElementById']('packs_affiliates')['value'];
    } else {
        lY = '';
    }
    if (lS == 'version') {
    } else {
        lT = '';
        lS == 'nuevo';
    }
    newLang_id_json_short = '';
    if (lW) {
        newLang_id_json_short = valor_editor;
    }
    if (document['getElementById']('idNombreCanvas_backup')['value'] == '1810528830a2440ab0996f872dedfe24' && lS != 'nuevo') {
        console['log']('This\x20template\x20can\x20not\x20be\x20updated,\x20is\x20blank\x20design') + lS;
    } else {
        estamos_editando = 0x0;
        we_have_edite_the_template = 0x0;
        activate_loading('ini');
        we_have_edite_the_template = 0x0;
        console['log']('saveCanvas\x20UPDATE\x20updateamos');
        if (user_email == 'dani26381---@gmail.com') {
            var lZ = JSON['stringify'](self['canvas']['toDatalessJSON']([
                'hasControls',
                'width',
                'height',
                'id',
                'lockMovementX',
                'lockMovementY',
                'lockRotation',
                'lockScalingX',
                'lockScalingY',
                'lockUniScaling',
                'sizeClipTo',
                'evented',
                'selectable',
                'targetFindTolerance',
                'perPixelTargetFind'
            ]));
            alert('grabamos\x20usuario');
        } else {
            var lZ = JSON['stringify'](self['canvas']['toJSON']([
                'ruta',
                'hasControls',
                'width',
                'height',
                'id',
                'lockMovementX',
                'lockMovementY',
                'lockRotation',
                'lockScalingX',
                'lockScalingY',
                'lockUniScaling',
                'sizeClipTo',
                'evented',
                'selectable',
                'targetFindTolerance',
                'perPixelTargetFind'
            ]));
        }
        var m1 = document['getElementById']('idNombreCanvas_backup')['value'];
        var m2 = document['getElementById']('nombreTemplate')['value'];
        if (lX) {
            var m3 = 'affiliates';
        } else {
            var m3 = document['getElementById']('categoriaTemplate')['value'];
        }
        var m5 = document['getElementById']('agrupador_templates')['value'];
        var m6 = document['getElementById']('color1')['value'];
        var m7 = document['getElementById']('color2')['value'];
        var m8 = document['getElementById']('color3')['value'];
        var m9 = document['getElementById']('font1')['value'];
        var ma = document['getElementById']('font2')['value'];
        var mb = document['getElementById']('font3')['value'];
        var mc = document['getElementById']('imagen_sustituta1')['value'];
        if (escupir_console_log == 0x1)
            if (notificaciones == 0x1)
                console['log']('idNombreCanvas_value\x20' + m1);
        if (m3 == 'tipos') {
            canvas['backgroundColor'] = '#263147';
            console['log']('backgroundColor\x20null');
        }
        if (lS == 'updateModerar') {
            lS = 'update';
            moderado = 0x1;
        } else {
            moderado = 0x0;
        }
        lZ = lZ['replace'](/'/g, '\x5c\x27');
        $['ajax']({
            'type': 'POST',
            'url': '/' + trad_url_photo_editor,
            'data': {
                'json_values': lZ,
                'base64dataRecorte_template': canvas['toDataURL']('image/png'),
                'width': document['getElementById']('ancho_canvas_zoom')['value'],
                'height': document['getElementById']('alto_canvas_zoom')['value'],
                'idNombreCanvas': m1,
                'nombreTemplate': m2,
                'agrupador_templates': m5,
                'color1': m6,
                'color2': m7,
                'color3': m8,
                'font1': m9,
                'font2': ma,
                'font3': mb,
                'newCategory': lV,
                'version_id_json_short': lT,
                'imagen_sustituta1': mc,
                'categoriaTemplate': m3,
                'quehacemos': lS,
                'moderado': moderado,
                'newLang': lW,
                'newLang_id_json_short': newLang_id_json_short,
                'packs_affiliates_value': lY
            },
            'dataType': 'text',
            'success': function (md) {
                console['log']('grabamos\x20data:' + md + '\x20');
                var me = md['split'](';');
                if (me[0x0] == 'NO_PERMISSION') {
                    activate_loading('end');
                    alert('NO_PERMISSION\x20CONTACT\x20EDIT\x20TEAM');
                    return;
                }
                if (lS == 'nuevo' || lS == 'version') {
                    console['log']('newsize:\x20' + lU);
                    if (typeof lU !== 'undefined') {
                        lU = '/' + lU;
                    } else {
                        lU = '';
                    }
                    window['open']('/edit/all/' + me[0x4] + lU);
                    if (lS == 'version') {
                        console['log']('Grabamos\x20versión\x20from\x20' + lT);
                    }
                }
                activate_loading('end');
            },
            'error': function (mf, mg, mh) {
                alert(data + '|Hay\x20un\x20ERROR');
            }
        });
    }
    function mi(mj) {
        return _(canvas['getObjects']())['where']({ 'clipFor': mj })['first']();
    }
    function mk(ml) {
        return ml * (Math['PI'] / 0xb4);
    }
    var mm = function (mn) {
        this['setCoords']();
        var mo = mi(this['clipName']);
        var mp = 0x1 / this['scaleX'];
        var mq = 0x1 / this['scaleY'];
        mn['save']();
        var mr = -(this['width'] / 0x2) + mo['strokeWidth'];
        var ms = -(this['height'] / 0x2) + mo['strokeWidth'];
        var mt = mo['width'] - mo['strokeWidth'];
        var mu = mo['height'] - mo['strokeWidth'];
        mn['translate'](mr, ms);
        mn['scale'](mp, mq);
        mn['rotate'](mk(this['angle'] * -0x1));
        mn['beginPath']();
        var mv = mo instanceof fabric['Polygon'];
        if (mv) {
            var mw = [];
            for (i in mo['points'])
                mw['push']({
                    'x': mo['left'] + mo['width'] / 0x2 + mo['points'][i]['x'] - this['oCoords']['tl']['x'],
                    'y': mo['top'] + mo['height'] / 0x2 + mo['points'][i]['y'] - this['oCoords']['tl']['y']
                });
            mn['moveTo'](mw[0x0]['x'], mw[0x0]['y']);
            for (i = 0x1; i < mw['length']; ++i) {
                mn['lineTo'](mw[i]['x'], mw[i]['y']);
            }
            mn['lineTo'](mw[0x0]['x'], mw[0x0]['y']);
        } else
            {
                mn['rect'](mo['left'] - this['oCoords']['tl']['x'], mo['top'] - this['oCoords']['tl']['y'], mo['width'], mo['height']);
            }
        mn['closePath']();
        mn['restore']();
    };
    function mx() {
        var my = 'https://www.google.com/images/srpr/logo4w.png';
        var mz = 'https://fabricjs.com/lib/pug.jpg';
        var mA = new fabric['Polygon']([
            {
                'x': 0xb4,
                'y': 0xa
            },
            {
                'x': 0x12c,
                'y': 0x32
            },
            {
                'x': 0x12c,
                'y': 0xb4
            },
            {
                'x': 0xb4,
                'y': 0xdc
            }
        ], {
            'originX': 'left',
            'originY': 'top',
            'left': 0xb4,
            'top': 0xa,
            'width': 0xc8,
            'height': 0xc8,
            'fill': '#DDD',
            'strokeWidth': 0x0,
            'selectable': ![]
        });
        mA['set']({ 'clipFor': 'pug' });
        canvas['add'](mA);
        var mB = new fabric['Rect']({
            'originX': 'left',
            'originY': 'top',
            'left': 0xa,
            'top': 0xa,
            'width': 0x96,
            'height': 0x96,
            'fill': '#DDD',
            'strokeWidth': 0x0,
            'selectable': ![]
        });
        mB['set']({ 'clipFor': 'logo' });
        canvas['add'](mB);
        var mC = new Image();
        mC['onload'] = function (mD) {
            var mE = new fabric['Image'](mC, {
                'angle': 0x2d,
                'width': 0x1f4,
                'height': 0x1f4,
                'left': 0xe6,
                'top': 0x32,
                'scaleX': 0.3,
                'scaleY': 0.3,
                'clipName': 'pug',
                'clipTo': function (mF) {
                    return _['bind'](mm, mE)(mF);
                }
            });
            canvas['add'](mE);
        };
        mC['src'] = mz;
        var mG = new Image();
        mG['onload'] = function (mH) {
            var mI = new fabric['Image'](mG, {
                'angle': 0x0,
                'width': 0x226,
                'height': 0xbe,
                'left': 0x32,
                'top': 0x32,
                'scaleX': 0.25,
                'scaleY': 0.25,
                'clipName': 'logo',
                'clipTo': function (mJ) {
                    return _['bind'](mm, mI)(mJ);
                }
            });
            canvas['add'](mI);
        };
    }
}
function loadCanvas(mK) {
    if (!mK)
        mK = 0x1;
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'data': { 'loadnombreCanvas': mK },
        'dataType': 'text',
        'success': function (mL) {
            var mM = mL['split'](';');
            ancho = mM[0x0];
            alto = mM[0x1];
            var mN = mM[0x2];
            var mO = mM[0x3];
            var mP = mM[0x4];
            var mQ = mM[0x5];
            var mR = mM[0x6];
            var mS = mM[0x7];
            var mQ = mM[0x8];
            var mU = mM[0x9];
            var mV = mM[0xa];
            var mW = mM[0xe];
            var mX = mM[0x8];
            document['getElementById']('color1')['value'] = color1;
            document['getElementById']('color2')['value'] = mR;
            document['getElementById']('color3')['value'] = mS;
            document['getElementById']('font1')['value'] = mQ;
            document['getElementById']('font2')['value'] = mU;
            document['getElementById']('font3')['value'] = mV;
            document['getElementById']('imagen_sustituta1')['value'] = mX;
            if (escupir_console_log == 0x1)
                if (notificaciones == 0x1)
                    console['log'](mN);
            document['getElementById']('idNombreCanvas_backup')['value'] = mN;
            document['getElementById']('nombreTemplate')['value'] = mO;
            document['getElementById']('categoriaTemplate')['value'] = mP;
            document['getElementById']('agrupador_templates')['value'] = mW;
            $['getJSON']('/editor/json/' + mK + '.json?random=' + Math['random'](), function (mY) {
                canvas['loadFromJSON'](mY, function () {
                    if (notificaciones == 0x1)
                        console['log']('a1');
                    canvas['setWidth'](ancho);
                    canvas['setHeight'](alto);
                    $('#mainDIV')['width'](parseInt(ancho) + 0xa);
                    $('#mainDIV')['height'](parseInt(alto) + 0xa);
                    canvas['calcOffset']();
                });
            })['fail'](function (mZ, n0, n1) {
                var n2 = n0 + ',\x20' + n1;
                console['log']('Request\x20Failed:\x2010536' + n2);
                activate_loading('end');
                cambioSubCategoria('efectos2');
            });
            canvas['renderAll']();
        },
        'error': function (n3, n4, n5) {
        }
    });
}
function componentToHex(n6) {
    var n7 = n6['toString'](0x10);
    return n7['length'] == 0x1 ? '0' + n7 : n7;
}
function rgbToHex(n8, n9, na) {
    return '#' + componentToHex(n8) + componentToHex(n9) + componentToHex(na);
}
function checkRgb(nb) {
    var nc = /([R][G][B][A]?[(]\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])(\s*,\s*((0\.[0-9]{1})|(1\.0)|(1)))?[)])/i;
    if (nc['test'](nb)) {
        return !![];
    }
}
function rgb2hex(nd) {
    if (notificaciones == 0x1)
        console['log']('RGB:|' + nd + '|');
    if (checkRgb(nd)) {
        if (nd != null) {
            nd = nd['match'](/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
            return nd && nd['length'] === 0x4 ? '#' + ('0' + parseInt(nd[0x1], 0xa)['toString'](0x10))['slice'](-0x2) + ('0' + parseInt(nd[0x2], 0xa)['toString'](0x10))['slice'](-0x2) + ('0' + parseInt(nd[0x3], 0xa)['toString'](0x10))['slice'](-0x2) : '';
        }
    }
}
function lockAllLayers() {
    canvas['selection'] = ![];
    canvas['forEachObject'](function (ne) {
        ne['set']('lockMovementX', !![]);
        ne['set']('lockMovementY', !![]);
    });
    canvas['renderAll']();
}
function seleccionaColor() {
    canvas['defaultCursor'] = 'crosshair';
    document['getElementById']('SeleccionandoColor')['value'] = 0x1;
    canvas['discardActiveObject']();
    canvas['selection'] = ![];
    canvas['forEachObject'](function (nf) {
        nf['selectable'] = ![];
    });
    canvas['renderAll']();
}
function setZoom(ng) {
    zoomLevel = ng;
    canvas['setZoom'](zoomLevel);
    canvasHeight = 0x320;
    canvasWidth = 0x258;
    canvas['setHeight'](canvasHeight * zoomLevel);
    canvas['setWidth'](canvasWidth * zoomLevel);
}
function resetZoom() {
    zoomLevel = 0x1;
    canvas['setZoom'](0x1);
}
function random_num(nh) {
    result = Math['floor'](Math['random']() * nh);
    return result;
}
function addCircleShape() {
    grabar_accion('add_element', 'circleShape');
    var ni = new fabric['Circle']({
        'radius': 0xc8,
        'fill': 'transparent',
        'opacity': 0x1,
        'top': 0x32,
        'stroke': document['getElementById']('colorGeneral')['value'],
        'strokeWidth': 0xf,
        'left': 0x32
    });
    canvas['add'](ni);
    canvas['setActiveObject'](ni);
    canvas['renderAll']();
}
function lockObject() {
    var nj = canvas['getActiveObject']();
    if (nj['selectable'] == !![])
        nj['selectable'] = ![];
    else
        nj['selectable'] = !![];
    canvas['renderAll']();
}
function flipObject(nk) {
    var nl = canvas['getActiveObject']();
    if (nk == 'x') {
        if (nk == 'x' && nl['flipX'] == !![])
            nl['flipX'] = ![];
        else
            nl['flipX'] = !![];
    }
    if (nk == 'y') {
        if (nk == 'y' && nl['flipY'] == !![]) {
            nl['flipY'] = ![];
        } else {
            nl['flipY'] = !![];
        }
        if (escupir_console_log == 0x1)
            if (notificaciones == 0x1)
                console['log']('flipY:' + nl['flipY']);
    }
    canvas['renderAll']();
}
function allLayers() {
    document['getElementById']('capas-layers')['innerHTML'] = '';
    var nm = canvas['getObjects']();
    var nn = nm['length'];
    while (nn--) {
        if (nm[nn]['get']('lockMovementX') == !![]) {
            selectable = '';
            lock_or_unlock = '';
        } else {
            selectable = '';
            lock_or_unlock = 'checked';
        }
        var no = nm[nn]['get']('type');
        var np = canvas['getObjects']()['indexOf'](nm[nn]);
        var nq = nm[nn]['fill'];
        texto_imagen = '';
        if (no == 'i-text' || no == 'textbox')
            texto_imagen = nm[nn]['text'];
        else if (no == 'image')
            texto_imagen = 'IMAGEN';
        else {
            texto_imagen = 'VECTOR';
        }
        if (no == 'image' && nm[nn]['src']) {
            texto_imagen = 'IMAGEN';
            nq = '#FFF';
        }
        texto_imagen = texto_imagen + '\x20' + nm[nn]['id'];
        if (lock_or_unlock == 'checked') {
            $('#capas-layers')['prepend']('<li\x20onclick=\x22selectObject(' + np + ')\x22\x20\x20style=\x22color:\x20white;text-shadow:\x201px\x201px\x20#000000;background-color:' + nq + '\x22><input\x20class=\x22layer-eye\x22\x20type=\x22checkbox\x22><figure><img\x20src=\x22' + nm[nn]['src'] + '\x22\x20alt=\x22\x22></figure><input\x20style=\x22color:\x20white;text-shadow:\x201px\x201px\x20#000000;\x22\x20class=\x22layer-name\x22\x20type=\x22text\x22\x20placeholder=\x22' + texto_imagen + '\x22><input\x20onclick=\x22lock_or_unlock(\x27\x27)\x22\x20class=\x22layer-lock\x22\x20style=\x22filter:\x20drop-shadow(\x20-1px\x20-1px\x205px\x20#000\x20);\x22\x20type=\x22checkbox\x22\x20checked\x20></li>');
        } else {
            $('#capas-layers')['prepend']('<li\x20onclick=\x22selectObject(' + np + ')\x22\x20\x20style=\x22color:\x20white;text-shadow:\x201px\x201px\x20#000000;background-color:' + nq + '\x22><input\x20class=\x22layer-eye\x22\x20type=\x22checkbox\x22><figure><img\x20src=\x22' + nm[nn]['src'] + '\x22\x20alt=\x22\x22></figure><input\x20style=\x22color:\x20white;text-shadow:\x201px\x201px\x20#000000;\x22\x20class=\x22layer-name\x22\x20type=\x22text\x22\x20placeholder=\x22' + texto_imagen + '\x22><input\x20onclick=\x22lock_or_unlock(\x27\x27)\x22\x20class=\x22layer-lock\x22\x20style=\x22filter:\x20drop-shadow(\x20-1px\x20-1px\x205px\x20#000\x20);\x22\x20type=\x22checkbox\x22\x20\x20></li>');
        }
    }
}
function selectObject(nr) {
    if (escupir_console_log == 0x1)
        if (notificaciones == 0x1)
            console['log'](nr);
    canvas['setActiveObject'](canvas['item'](nr));
    barraAjax('i-text', 'FFFFFF');
    canvas['renderAll']();
}
function popup_payments_apply(ns) {
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'dataType': 'text',
        'data': { 'popup_payments_end2': ns },
        'success': function (nt) {
            alert(nt);
            window['history']['pushState']('object\x20or\x20string', 'TITLE\x20HERE', 'https://' + dominio + '/edit');
            try {
                document['getElementById']('suscribete_div_header')['style']['display'] = 'none';
            } catch (nu) {
            }
        },
        'error': function (nv, nw, nx) {
        }
    });
}
function popup_payments_end() {
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'dataType': 'text',
        'data': { 'popup_payments_end': 0x1 },
        'success': function (ny) {
            data1 = ny['split']('|');
            alert(data1[0x0]);
            if (data1[0x1]) {
                window['location']['href'] = '/edit/my/' + data1[0x1];
                $('.buttonMyDesigns')['trigger']('click');
            }
        },
        'error': function (nz, nA, nB) {
        }
    });
}
function cerrarChat() {
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'dataType': 'text',
        'data': { 'popup_cerrarChat': 0x1 },
        'success': function (nC) {
            document['getElementById']('chat_popup')['style']['display'] = 'none';
        },
        'error': function (nD, nE, nF) {
        }
    });
}
var lang_stripe = '';
function changelangpayments(nG) {
    lang_stripe = nG;
    if (lang_stripe == 'es' || lang_stripe == 'eu') {
        popup_payments('IVA');
    } else {
        popup_payments();
    }
}
function popup_payments(nH) {
    if (!valor_editor && nH == 'lurqui') {
        alert('Debes\x20de\x20abrir\x20una\x20plantilla\x20para\x20poder\x20comprarla');
    } else {
        estamos_editando = '0';
        if (getCookie('email') == null) {
            registroUsuario();
        } else {
            url = 'https://js.stripe.com/v3/';
            $['ajax']({
                'type': 'POST',
                'url': '/krello_upper_code.php',
                'dataType': 'text',
                'data': {
                    'popup_payments': 0x1,
                    'payment_type': nH,
                    'valor_editor1': valor_editor,
                    'lang_stripe1': lang_stripe
                },
                'success': function (nI) {
                    if (document['getElementById']('suscription')['style']['display'] == 'none') {
                        activarID('suscription');
                    }
                    try {
                        document['getElementById']('suscription')['innerHTML'] = nI;
                    } catch (nJ) {
                    }
                    $['getScript'](url, function (nI, nL, nM) {
                        if (host == 'https://editas.co/') {
                            var nN = Stripe('pk_test_0fI7HWi01kRlcTGKARUOwsAb');
                        } else {
                            var nN = Stripe('pk_live_ftp4IUglsy5HNLiGrUOwA80d');
                        }
                        var nP = nN['elements']();
                        var nQ = {
                            'base': {
                                'color': '#fff',
                                'fontWeight': 0x258,
                                'fontFamily': 'Quicksand,\x20Open\x20Sans,\x20Segoe\x20UI,\x20sans-serif',
                                'fontSize': '16px',
                                'fontSmoothing': 'antialiased',
                                ':focus': { 'color': '#424770' },
                                '::placeholder': { 'color': '#9BACC8' },
                                ':focus::placeholder': { 'color': '#CFD7DF' }
                            },
                            'invalid': {
                                'color': '#fff',
                                ':focus': { 'color': '#FA755A' },
                                '::placeholder': { 'color': '#FFCCA5' }
                            }
                        };
                        var nR = nP['create']('card', { 'hidePostalCode': !![] }, { 'style': nQ });
                        nR['mount']('#card-element');
                        nR['addEventListener']('change', function (nS) {
                            var nT = document['getElementById']('card-errors');
                            if (nS['error']) {
                                nT['textContent'] = nS['error']['message'];
                            } else {
                                nT['textContent'] = '';
                            }
                        });
                        var nU = document['getElementById']('payment-form');
                        nU['addEventListener']('submit', function (nV) {
                            nV['preventDefault']();
                            document['getElementById']('stripe_submit_payment_button')['style']['display'] = 'none';
                            nN['createToken'](nR)['then'](function (nW) {
                                if (nW['error']) {
                                    var nX = document['getElementById']('card-errors');
                                    nX['textContent'] = nW['error']['message'];
                                    document['getElementById']('stripe_submit_payment_button')['style']['display'] = '';
                                } else {
                                    nY(nW['token']);
                                    document['getElementById']('stripe_submit_payment_button')['style']['display'] = 'none';
                                    document['getElementById']('loading_payment')['style']['display'] = '';
                                    document['getElementById']('loadingText')['innerHTML'] = traduccion_javascript_validating_payment;
                                    activate_loading('ini');
                                }
                            });
                        });
                        function nY(nZ) {
                            var nU = document['getElementById']('payment-form');
                            var o1 = document['createElement']('input');
                            o1['setAttribute']('type', 'hidden');
                            o1['setAttribute']('name', 'stripeToken');
                            o1['setAttribute']('value', nZ['id']);
                            nU['appendChild'](o1);
                            var o2 = document['createElement']('input');
                            o2['setAttribute']('type', 'hidden');
                            o2['setAttribute']('name', 'email_stripe');
                            o2['setAttribute']('value', user_email);
                            nU['appendChild'](o2);
                            var o3 = document['createElement']('input');
                            o3['setAttribute']('type', 'hidden');
                            o3['setAttribute']('name', 'id_plan');
                            o3['setAttribute']('value', document['getElementById']('id_plan')['value']);
                            nU['appendChild'](o3);
                            nU['submit']();
                        }
                    });
                },
                'error': function (o4, o5, o6) {
                }
            });
        }
    }
}
function change_magic_resize(o7) {
    magic_resize = o7;
}
function popup_question_0() {
    new_size = document['getElementById']('width_new1')['value'] + 'x' + document['getElementById']('height_new1')['value'];
    popup_question('resize_template_popup', category_of_template, new_size);
}
function activarID(o8) {
    try {
        if (o8 == 'sharePanel' && suscription_type == 'premium' && days_last_suscription > 0x0) {
            alert(traduccion_javascript_hazte_premium_teams);
            return;
        }
        if (o8 == 'sharePanel' && days_last_suscription <= 0x0) {
            activarID('getPremiumTeams');
            popup_question_premium('getPremiumTeams');
            return;
        }
        if (o8 == 'sharePanel' && days_last_suscription <= 0x0) {
            activarID('getPremiumTeams');
            popup_question_premium('getPremiumTeams');
            return;
        }
        if (document['getElementById'](o8)['style']['display'] == 'none') {
            grabar_accion('popup_premium', o8 + '\x20open');
            $('.frame-overflow')['foggy']({
                'blurRadius': 0x4,
                'opacity': 0.9,
                'cssFilterSupport': !![]
            });
            document['getElementById'](o8)['style']['display'] = 'inline';
            if (o8 == 'sharePanel') {
                getTeamMembersInvitations();
            }
            if (o8 == 'inviteFriends') {
                inviteFriends();
                return;
            }
        } else {
            document['getElementById'](o8)['style']['display'] = 'none';
            document['getElementById'](o8)['innerHTML'] = '';
            cerrarFoggy();
            grabar_accion('popup_premium', o8 + '\x20close');
        }
    } catch (o9) {
        send_error_to_log(o9 + '\x20activarID(id)' + o8);
        alert(traduccion_javascript_fallo_solving + '\x20\x20cod.\x20error:\x20' + o8);
    }
}
function send_error_to_log(oa) {
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'dataType': 'text',
        'data': { 'error_to_send': oa },
        'success': function (ob) {
        },
        'error': function (oc, od, oe) {
        }
    });
}
function popup_question_premium_activate(of) {
    activarID(of);
    popup_question_premium(of);
}
var what_last_premium_popup;
function popup_question_premium(og) {
    what_last_premium_popup = og;
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'dataType': 'text',
        'data': { 'popup_question_premium': og },
        'success': function (oh) {
            document['getElementById'](og)['innerHTML'] = oh;
        },
        'error': function (oi, oj, ok) {
        }
    });
}
function popup_getcongratulations() {
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'dataType': 'text',
        'data': { 'getcongratulations': 0x1 },
        'success': function (ol) {
            $('.frame-overflow')['foggy']({
                'blurRadius': 0x4,
                'opacity': 0.9,
                'cssFilterSupport': !![]
            });
            $('#congratulations')['show']();
            document['getElementById']('congratulations')['innerHTML'] = ol;
        },
        'error': function (om, on, oo) {
        }
    });
}
function popup_question(op, oq, or) {
    if (days_last_suscription <= 0x0) {
        activarID('getPremiumResize');
        popup_question_premium('getPremiumResize');
    } else {
        add_user_action('click', 'change_size', valor_editor, oq);
        if (or == '888') {
            if (document['getElementById']('customsizes1')['style']['display'] == 'none') {
                or = document['getElementById']('width_new')['value'] + 'x' + document['getElementById']('height_new')['value'];
            } else {
                or = document['getElementById']('width_new1')['value'] + 'x' + document['getElementById']('height_new1')['value'];
            }
        }
        $['ajax']({
            'type': 'POST',
            'url': '/' + trad_url_photo_editor,
            'dataType': 'text',
            'data': {
                'popup_question': op,
                'new_category': oq,
                'new_size': or,
                'id_json_short1': valor_editor
            },
            'success': function (os) {
                activarID('replaceTheme');
                document['getElementById']('replaceTheme')['innerHTML'] = os;
            },
            'error': function (ot, ou, ov) {
            }
        });
    }
}
function changeCanvasSize_update(ow, ox) {
    if (magic_resize == 0x2 && days_last_suscription <= 0x0) {
        activarID('getPremiumResize');
        popup_question_premium('getPremiumResize');
    } else {
        cerrarFoggy();
        activarID('replaceTheme');
        activate_loading('ini');
        if (!id_json_short) {
            subcatEditor = '';
            document['getElementById']('loadingText')['innerHTML'] = traduccion_javascript_edit_working_size;
            alert_change_size = 0x0;
            document['getElementById']('tooltipSelectFormat')['style']['display'] = 'none';
            var oy = ow['split']('x');
            ancho = oy[0x0];
            alto = oy[0x1];
            canvas['setWidth'](ancho);
            canvas['setHeight'](alto);
            ajustar_canvas(ancho, alto);
            canvas['calcOffset']();
            canvas['renderAll']();
            activate_loading('end');
        } else {
            subcatEditor = '';
            document['getElementById']('loadingText')['innerHTML'] = traduccion_javascript_edit_working_size;
            alert_change_size = 0x0;
            document['getElementById']('tooltipSelectFormat')['style']['display'] = 'none';
            $['when']['apply'](this, changeCanvasSize(ow, '1', ox, '', 0x1))['then'](function () {
                ajustar_canvas(ancho, alto);
                if (big_layer >= 0x0 && canvas['item'](big_layer)['get']('type') == 'image') {
                    if (canvas['item'](big_layer)['get']('angle') == '0' || canvas['item'](big_layer)['get']('angle') == 'undefined') {
                        obj = canvas['item'](big_layer);
                        if (obj['get']('scaleX') < 0x1)
                            big_layer_w = obj['get']('width') / obj['get']('scaleX');
                        else
                            big_layer_w = obj['get']('width') * obj['get']('scaleX');
                        if (obj['get']('scaleX') < 0x1)
                            big_layer_h = obj['get']('height') / obj['get']('scaleX');
                        else
                            big_layer_h = obj['get']('height') * obj['get']('scaleX');
                        big_layer_w_data = obj['get']('width') + '\x20' + obj['get']('scaleX');
                        rel_width = canvas['width'] / canvas['item'](big_layer)['get']('width');
                        rel_height = canvas['height'] / canvas['item'](big_layer)['get']('height');
                        var oz = canvas['item'](big_layer);
                        var oA = canvas['viewportTransform'];
                        var oB = canvas['width'] / canvas['getZoom']();
                        var oC = canvas['height'] / canvas['getZoom']();
                        rel_h = big_layer_h / oC;
                        rel_w = big_layer_w / oB;
                        if (rel_h < 0x1 || rel_w < 0x1) {
                            rel_h1 = 0x1 - rel_h;
                            canvas['item'](big_layer)['set']('scaleX', canvas['item'](big_layer)['get']('scaleX') + rel_h);
                            canvas['item'](big_layer)['set']('scaleY', canvas['item'](big_layer)['get']('scaleX') + rel_h);
                            if (canvas['item'](big_layer)['get']('scaleX') < 0x1)
                                big_layer_w = canvas['item'](big_layer)['get']('width') / obj['get']('scaleX');
                            else
                                big_layer_w = canvas['item'](big_layer)['get']('width') * obj['get']('scaleX');
                            if (canvas['item'](big_layer)['get']('scaleX') < 0x1)
                                big_layer_h = canvas['item'](big_layer)['get']('height') / obj['get']('scaleX');
                            else
                                big_layer_h = canvas['item'](big_layer)['get']('height') * obj['get']('scaleX');
                        }
                        if (canvas['item'](big_layer)['get']('angle') == 0x0 || canvas['item'](big_layer)['get']('angle') == 'undefined') {
                            big_layer_w = canvas['item'](big_layer)['get']('width') * obj['get']('scaleX');
                            big_layer_h = canvas['item'](big_layer)['get']('height') * obj['get']('scaleX');
                            oA = canvas['viewportTransform'];
                            width_canvas = canvas['width'] / oA[0x0];
                            height_canvas = canvas['height'] / oA[0x0];
                            resta_width = (big_layer_w - width_canvas) / 0x2;
                            resta_height = (big_layer_h - height_canvas) / 0x2;
                            if (resta_width > 0x0) {
                                canvas['item'](big_layer)['set']('left', -resta_width);
                                canvas['item'](big_layer)['set']('top', -resta_height);
                            } else {
                                canvas['item'](big_layer)['set']('left', 0x0);
                                canvas['item'](big_layer)['set']('top', 0x0);
                            }
                        }
                        canvas['calcOffset']();
                        canvas['renderAll']();
                    }
                }
                if (big_layer >= 0x0) {
                    canvas['setActiveObject'](canvas['item'](big_layer));
                    alignObject('centerH');
                    alignObject('centerV');
                    console['log']('big_layer:' + big_layer);
                }
            });
        }
    }
}
var mismo_ratio = 0x1;
var alert_change_size = 0x1;
var category_change_selected;
function changeCanvasSize(oD, oE, oF, oG, oH) {
    valor_editor = '';
    tipo_editor = '';
    if (oF != '999') {
        window['history']['pushState']('object\x20or\x20string', 'TITLE\x20HERE', 'https://' + dominio + '/edit/' + oF);
    }
    category_change_selected = oF;
    console['log']('category_change_selected2\x20' + category_change_selected);
    if (oD == 'custom') {
        if (document['getElementById']('customsizes1')['style']['display'] == 'none') {
            oD = document['getElementById']('width_new')['value'] + 'x' + document['getElementById']('height_new')['value'];
        } else {
            oD = document['getElementById']('width_new1')['value'] + 'x' + document['getElementById']('height_new1')['value'];
        }
    }
    if ((!id_json_short || oF == 'custom') && oE != 0x3e7) {
        activate_loading('ini');
        console['log']('CALL\x20STACK\x20OVERFLOW123');
        cambioSubCategoriaPorAjax(oF);
    } else if (oE == 0x3e7) {
        activate_loading('ini');
        console['log']('CALL\x20STACK\x20OVERFLOW2');
        cambioSubCategoriaPorAjax(oF);
        $('.buttonBackgrounds,\x20.buttonColors2,.buttonMyDesigns,\x20.buttonSearch,\x20.buttonColors,\x20.buttonPhotos,\x20.buttonBackground,\x20.buttonTexts,\x20.buttonObjects,\x20.buttonUploads,\x20.buttonEmojis,\x20.buttonPaint')['removeClass']('active');
        $('.contentSearch,\x20.contentPhotos,\x20.contentBackground,\x20.contentTexts,\x20.contentObjects,\x20.contentUploads')['hide']();
        $('.sidePanel')['toggleClass']('slideUpPanel');
        $('.sidebar')['toggleClass']('sideBarShow');
        $('.tooltipSelectDesign')['removeClass']('wideScreen');
        $('.sidePanel')['addClass']('slideUpPanel');
        $('.sidebar')['addClass']('sideBarShow');
        console['log']('ENTRAMOS\x20123');
        return;
    } else {
        we_can_scale = 0x0;
        console['log']('Entramos\x20en\x20changeCanvasSize1' + magic_resize + '\x20magic_resize_auto:' + oE);
        var oI = document['getElementById']('zoom_value')['innerHTML'];
        console['log']('\x20zoom_old\x20' + oI);
        zoom_new = 0x1;
        setZoom2(zoom_new);
        layersNoScale();
        if (oE == '999') {
            oE = '';
        }
        if (oF != '' && magic_resize == 0x0) {
            cambioSubCategoriaPorAjax(oF);
        } else {
            if (oF) {
                $('#categoriaTemplate')['val'](oF);
            }
        }
        if (magic_resize != 0x0 || oE < 0x3e7) {
            console['log']('Entramos\x20en\x20changeCanvasSize2' + oD + '\x20magic_resize_auto:' + oE);
            document['getElementById']('tooltipSelectDesign')['style']['display'] = 'none';
            if (oD) {
                var oJ = oD['split']('x');
                var oK = document['getElementById']('ancho_canvas_zoom')['value'];
                var oL = document['getElementById']('alto_canvas_zoom')['value'];
                console['log']('\x20anchoooooo:' + oJ[0x0] + '\x20altooooooo:' + oJ[0x1]);
                setZoom3(0x1);
                document['getElementById']('ancho_canvas_zoom')['value'] = oJ[0x0];
                document['getElementById']('alto_canvas_zoom')['value'] = oJ[0x1];
                ancho = oJ[0x0];
                alto = oJ[0x1];
                canvas['setWidth'](oJ[0x0]);
                canvas['setHeight'](oJ[0x1]);
                ancho_canvas_nuevo = oJ[0x0];
                if (magic_resize == 0x2 || oE == 0x2) {
                    var oM = oJ[0x0] / oK;
                    var oN = oJ[0x1] / oL;
                    console['log']('magic_resize\x20OK');
                    canvas['forEachObject'](function (oO) {
                        if (oM < oN) {
                            ratio_a_utilizar = oM;
                        } else {
                            ratio_a_utilizar = oN;
                        }
                        if (oO['styles']) {
                            var oP = oO['styles'];
                            for (var oQ in oP) {
                                for (var oR in oP[oQ]) {
                                    if ('fontSize' in oP[oQ][oR]) {
                                        oP[oQ][oR]['fontSize'] = oP[oQ][oR]['fontSize'] * ratio_a_utilizar;
                                    }
                                }
                            }
                        }
                        if ((oM = oJ[0x0] / oK) == (oN = oJ[0x1] / oL)) {
                            console_log_colors('mismo\x20ratio' + ratio_a_utilizar, 'yellow', 'black');
                            oO['set']('left', oO['get']('left') * ratio_a_utilizar);
                            oO['set']('top', oO['get']('top') * ratio_a_utilizar);
                            oO['set']('scaleX', oO['get']('scaleX') * ratio_a_utilizar);
                            oO['set']('scaleY', oO['get']('scaleY') * ratio_a_utilizar);
                            if (oO['get']('strokeWidth') > 0x1) {
                                console_log_colors('BEFORE\x20strokeWidth' + oO['get']('strokeWidth'), 'black', 'green');
                                new_stroke = Math['round'](oO['get']('strokeWidth') * ratio_a_utilizar);
                                oO['set']('strokeWidth', new_stroke);
                                console_log_colors('AFTER\x20strokeWidth\x20' + oO['get']('strokeWidth') + '\x20' + new_stroke, 'black', 'green');
                            }
                            mismo_ratio = 0x1;
                        } else
                            {
                                console_log_colors('different\x20ratio' + ratio_a_utilizar, 'black', 'green');
                                mismo_ratio = 0x0;
                                console['log']('\x20\x20\x20\x20\x20\x20ratio_a_utilizar' + ratio_a_utilizar);
                                console['log'](oO['id'] + 'ancho_antiguo:' + oO['get']('width') * oO['get']('scaleX'));
                                console['log'](oO['id'] + '\x20getCenterPoint:\x20' + oO['getCenterPoint']());
                                console['log'](oO['id'] + 'ancho_canvas_old:' + oK);
                                center_x = String(oO['getCenterPoint']());
                                center_x = center_x['split'](',');
                                centro_nuevo = ancho_canvas_nuevo * (center_x[0x0] / oK);
                                left_old = oO['get']('left');
                                left_nuevo = ancho_canvas_nuevo * (oO['get']('left') * ratio_a_utilizar / oK);
                                left_diference1 = oO['get']('left') / oK;
                                width_old = oO['get']('width') * oO['get']('scaleX');
                                if (oO['get']('type') == 'polygon') {
                                    left_diference1 = oO['get']('left') / oK;
                                    left_centro_nuevo = centro_nuevo - oO['get']('width') * oO['get']('scaleX') * ratio_a_utilizar / 0x2;
                                } else {
                                    left_diference1 = oO['get']('left') / oK;
                                    left_centro_nuevo = centro_nuevo - oO['get']('width') * oO['get']('scaleX') * ratio_a_utilizar / 0x2;
                                }
                                console['log']('left_centro_nuevo:\x20' + left_centro_nuevo + '\x20\x20\x20resta_centro\x20nuevo\x20:' + oO['get']('width') * ratio_a_utilizar / 0x2 + '\x20\x20left_nuevo:\x09' + left_nuevo);
                                oO['set']('left', left_centro_nuevo);
                                oO['set']('top', oO['get']('top') * ratio_a_utilizar);
                                if (oO['get']('type') == 'image' || oO['get']('type') == 'group') {
                                    oO['set']('scaleX', oO['get']('scaleX') * ratio_a_utilizar);
                                    oO['set']('scaleY', oO['get']('scaleY') * ratio_a_utilizar);
                                } else if (oO['get']('type') == 'i-text' || oO['get']('type') == 'text' || oO['get']('type') == 'textbox') {
                                    oO['set']('scaleX', oO['get']('scaleX') * ratio_a_utilizar);
                                    oO['set']('scaleY', oO['get']('scaleY') * ratio_a_utilizar);
                                } else {
                                    oO['set']('scaleX', oO['get']('scaleX') * ratio_a_utilizar);
                                    oO['set']('scaleY', oO['get']('scaleY') * ratio_a_utilizar);
                                }
                                if (width_old > oK && oO['get']('type') == 'rect') {
                                    oO['set']('width', ancho_canvas_nuevo);
                                    oO['set']('left', 0x0);
                                    console_log_colors('ESTA\x20RECT\x20ESTABA\x20AL\x20100\x20LO\x20AMPLIAMOS\x20AL\x20100%', 'blue', 'black');
                                }
                                if (oO['get']('type') == 'rect') {
                                    console_log_colors('RECT:\x20width_old:\x20' + width_old + '\x20ancho_canvas_old:' + oK + '\x20\x20\x20\x20LEFT_OLD\x20' + left_old, 'blue', 'black');
                                }
                                console['log'](oO['id'] + '\x20getCenterPoint_new:\x20' + oO['getCenterPoint']());
                                console['log'](oO['id'] + 'ancho_new:' + oO['get']('width') * oO['get']('scaleX'));
                                console['log']('\x20ancho_canvas_new:' + oJ[0x0]);
                                console['log']('centro_nuevo:' + centro_nuevo);
                                center_x = String(oO['getCenterPoint']());
                                center_x = center_x['split'](',');
                                console['log']('\x20center_x_new:' + center_x[0x0]);
                                left_diference2 = oO['get']('left') / oJ[0x0];
                                console['log']('ancho_nuevo:\x20' + oO['get']('width') * oO['get']('scaleX'));
                                console['log']('left_nuevo:' + oO['get']('left'));
                                left_nuevo = oO['get']('left');
                                ancho_canvas_new = oO['get']('width') * oO['get']('scaleX');
                                console['log']('ancho\x20canvas\x20nuevo:\x20' + oJ[0x0] + '\x20\x20ancho_canvas_old:' + oK);
                            }
                        oO['setCoords']();
                        canvas['calcOffset']();
                    });
                    console['log']('ancho\x20canvas\x20nuevo:\x20' + oJ[0x0] + '\x20\x20ancho_canvas_old:' + oK);
                    console['log']('cerramos\x20el\x20selector\x20de\x20tamaños');
                    document['getElementById']('tooltipSelectFormat')['style']['display'] = 'none';
                }
                ajustar_canvas(oJ[0x0], oJ[0x1]);
            }
            setZoom2(oI);
            if (mismo_ratio == 0x0) {
                if (magic_resize == 0x2 || oE == 0x2) {
                    layersOrder();
                }
            }
            console['log']('\x20zoom_old\x20' + oI);
            canvas['renderAll']();
            if (oG != 0x1) {
            }
            activate_loading('end');
        }
        we_can_scale = 0x1;
        alert_change_size = 0x1;
        if (oE == 0x1 && oH != 0x1) {
            saveCanvas('update');
        }
        activate_loading('end');
    }
}
function canvasSizeShow() {
    alert(canvas['width'] + '\x20\x20\x20' + canvas['height'] + '\x20zoom:' + canvas['getZoom']());
}
canvas['on']('mouse:up', function (oS) {
    document['getElementById']('coords_size')['style']['display'] = '';
    document['getElementById']('coords_size')['innerHTML'] = '' + parseInt(ancho) + '\x20x\x20' + parseInt(alto);
});
function showSizesOnEditor() {
    document['getElementById']('tooltipSelectDesign')['style']['display'] = '';
}
function closePanel() {
    $('.sidePanel')['removeClass']('slideUpPanel');
    $('.sideBarNav\x20button')['removeClass']('active');
    $('.sidebar')['removeClass']('sideBarShow');
}
function closeAllTooltips() {
    try {
        document['getElementById']('groupFolder')['style']['display'] = 'none';
    } catch (oT) {
    }
    try {
        document['getElementById']('getPremiumResize')['style']['display'] = 'none';
    } catch (oU) {
    }
    try {
        document['getElementById']('inviteFriends')['style']['display'] = 'none';
    } catch (oV) {
    }
    try {
        document['getElementById']('cropImage')['style']['display'] = 'none';
    } catch (oW) {
    }
    try {
        document['getElementById']('getPremiumPacks')['style']['display'] = 'none';
    } catch (oX) {
    }
    try {
        document['getElementById']('getPremiumFolders')['style']['display'] = 'none';
    } catch (oY) {
    }
    try {
        document['getElementById']('getPremiumRegister')['style']['display'] = 'none';
    } catch (oZ) {
    }
    try {
        document['getElementById']('getPremiumRegisterHelp')['style']['display'] = 'none';
    } catch (p0) {
    }
    try {
        document['getElementById']('yourFonts')['style']['display'] = 'none';
    } catch (p1) {
    }
    try {
        document['getElementById']('getPremiumTeams')['style']['display'] = 'none';
    } catch (p2) {
    }
    try {
        document['getElementById']('getAffiliates')['style']['display'] = 'none';
    } catch (p3) {
    }
    try {
        document['getElementById']('captarEmails')['style']['display'] = 'none';
    } catch (p4) {
    }
    try {
        document['getElementById']('congratulations')['style']['display'] = 'none';
    } catch (p5) {
    }
    try {
        document['getElementById']('suscription')['style']['display'] = 'none';
    } catch (p6) {
    }
    try {
        document['getElementById']('suscription')['style']['display'] = 'none';
    } catch (p7) {
    }
    try {
        document['getElementById']('coupon')['style']['display'] = 'none';
    } catch (p8) {
    }
    try {
        document['getElementById']('getPremiumSizes')['style']['display'] = 'none';
    } catch (p9) {
    }
    try {
        document['getElementById']('tooltipSelectFormat')['style']['display'] = 'none';
    } catch (pa) {
    }
    try {
        document['getElementById']('tooltipSelectCategories')['style']['display'] = 'none';
    } catch (pb) {
    }
    try {
        document['getElementById']('tooltipSelectFormat')['style']['display'] = 'none';
    } catch (pc) {
    }
    try {
        document['getElementById']('tooltipSelectDesign')['style']['display'] = 'none';
    } catch (pd) {
    }
    try {
        document['getElementById']('sharePanel')['style']['display'] = 'none';
    } catch (pe) {
    }
    try {
        document['getElementById']('replaceTheme')['style']['display'] = 'none';
    } catch (pf) {
    }
    try {
        document['getElementById']('selectordeFormatos')['style']['display'] = 'none';
    } catch (pg) {
    }
    try {
        cerrarFoggy();
    } catch (ph) {
    }
}
function showSizesOnEditorNew(pi) {
    closePanel();
    try {
        ga('send', 'pageview', 'editor---ShowSizesButton');
    } catch (pj) {
    }
    if (document['getElementById']('tooltipSelectFormat')['style']['display'] == '' && pi != 'gotosizes')
        {
            document['getElementById']('tooltipSelectFormat')['style']['display'] = 'none';
            $('#button_select_format')['removeClass']('active');
        }
    else {
        $['ajax']({
            'type': 'POST',
            'url': '/' + trad_url_photo_editor,
            'dataType': 'text',
            'data': { 'load_sizes_area': 0x1 },
            'success': function (pk) {
                $('.greenColor')['removeClass']('active');
                document['getElementById']('tooltipSelectFormat')['innerHTML'] = pk;
                document['getElementById']('tooltipSelectFormat')['style']['display'] = '';
                document['getElementById']('tooltipSelectCategories')['style']['display'] = 'none';
                $('#button_select_format')['addClass']('active');
                if (ancho) {
                    document['getElementById']('width_new')['value'] = ancho;
                    document['getElementById']('height_new')['value'] = alto;
                    document['getElementById']('width_new1')['value'] = ancho;
                    document['getElementById']('height_new1')['value'] = alto;
                }
                if (pi == 'gotosizes') {
                    document['getElementById']('customsizes1')['style']['display'] = '';
                    document['getElementById']('customsizes2')['style']['display'] = 'none';
                }
            },
            'error': function (pl, pm, pn) {
            }
        });
    }
}
var cargamos_add_tour = 0x0;
var what_we_load_before;
function showFormatsOnEditorNew(po) {
    try {
        ga('send', 'pageview', 'editor---ShowFormatsButton');
    } catch (pp) {
    }
    if (po == 'reload') {
        activate_loading('ini');
    }
    closePanel();
    try {
        document['getElementById']('button_select_sub_categories')['style']['display'] = 'none';
    } catch (pq) {
    }
    load_category_again_not_close = '0';
    if (what_we_load_before != po) {
        load_category_again_not_close = 0x1;
    }
    console['log']('load_category_again_not_close:\x20' + load_category_again_not_close + '\x20' + po);
    if (po != 'reload' && document['getElementById']('tooltipSelectCategories')['style']['display'] == '' && load_category_again_not_close == '0') {
        document['getElementById']('tooltipSelectCategories')['style']['display'] = 'none';
        try {
            $('#button_select_categories')['removeClass']('active');
            document['getElementById']('selector_category_green')['style']['visibility'] = 'inline';
        } catch (pr) {
        }
        if (po)
            what_we_load_before = po;
        else
            what_we_load_before = 'categories';
    } else {
        if (po == 'reload') {
            document['getElementById']('tooltipSelectCategories')['style']['display'] = '';
        }
        try {
            if (po) {
                $('#button_select_categories')['removeClass']('active');
                document['getElementById']('selector_category_green')['style']['visibility'] = 'inline';
            }
        } catch (ps) {
        }
        what_we_load_before = po;
        $['ajax']({
            'type': 'POST',
            'url': '/' + trad_url_photo_editor,
            'dataType': 'text',
            'data': {
                'load_categories_area': 0x1,
                'category_load1': category_change_selected,
                'what_premium_category': po
            },
            'success': function (pt) {
                document['getElementById']('tooltipSelectCategories')['innerHTML'] = pt;
                var pu = new LazyLoad({});
                if (po == 'reload') {
                    activate_loading('end');
                }
                if (po == 'premium') {
                    $('#button_select_format')['removeClass']('active');
                } else {
                    $('#button_select_format')['removeClass']('active');
                }
            },
            'error': function (pv, pw, px) {
            }
        });
        if (po == 'premium') {
            try {
                $('#button_select_categories_premium')['addClass']('active');
            } catch (py) {
            }
        } else {
            $('#button_select_categories')['addClass']('active');
            $('.greenColor')['addClass']('active');
        }
        document['getElementById']('tooltipSelectCategories')['style']['display'] = '';
        document['getElementById']('tooltipSelectFormat')['style']['display'] = 'none';
        if (categoria_editor != '') {
        } else
            {
            }
    }
}
canvas['on']('selection:cleared', function (pz) {
    document['getElementById']('contTopMenu')['style']['visibility'] = 'hidden';
    if (!canvas['getActiveObject']()) {
        console['log']('barra\x20normal');
        barraAjax('initial', 'FFFFFF');
    }
});
canvas['on']('object:moving', function (pA) {
    estamos_editando = 0x1;
    we_have_edite_the_template = 0x1;
    var pB = canvas['getActiveObject']();
    if (pB) {
        var pC = Math['round'](pB['left']);
        var pD = Math['round'](pB['top']);
        var pE = $('canvas')['offset']();
        document['getElementById']('coords')['style']['display'] = '';
        document['getElementById']('coords')['style']['left'] = parseInt(pE['left']) + parseInt(0x2) + 'px';
        document['getElementById']('coords')['style']['top'] = parseInt(pE['top']) + parseInt(0x2) + 'px';
        document['getElementById']('coords')['innerHTML'] = 'x:\x20' + pC + '\x20y:\x20' + pD;
        document['getElementById']('coords_size')['innerHTML'] = '' + parseInt(pE['left']) + parseInt(0x2) + 'px' + '\x20x\x20' + parseInt(pE['top']) + parseInt(0x2);
    }
});
var value_share_team_function;
function resetUndoRedo() {
    _config = {
        'canvasState': [],
        'currentStateIndex': -0x1,
        'undoStatus': ![],
        'redoStatus': ![],
        'undoFinishedStatus': 0x1,
        'redoFinishedStatus': 0x1,
        'undoButton': document['getElementById']('undo'),
        'redoButton': document['getElementById']('redo')
    };
}
try {
    var _config = {
        'canvasState': [],
        'currentStateIndex': -0x1,
        'undoStatus': ![],
        'redoStatus': ![],
        'undoFinishedStatus': 0x1,
        'redoFinishedStatus': 0x1,
        'undoButton': document['getElementById']('undo'),
        'redoButton': document['getElementById']('redo')
    };
    var canvasDemo = function () {
        canvas['on']('object:modified', function () {
            if (finished_loading_json == 0x1) {
                pF();
            }
        });
        canvas['on']('object:added', function () {
            if (finished_loading_json == 0x1) {
                pF();
            }
        });
        canvas['on']('object:removed', function () {
            if (finished_loading_json == 0x1) {
                pF();
            }
        });
        var pF = function () {
            console_log_colors('updateCanvasState', 'yellow', 'black');
            if (canvas['getActiveObject']()) {
                canvas['calcOffset']();
                canvas['getActiveObject']()['setCoords']();
                canvas['renderAll']();
                console['log']('scaling....\x20END');
            }
            if (_config['undoStatus'] == ![] && _config['redoStatus'] == ![]) {
                var pG = canvas['toJSON']();
                var pH = JSON['stringify'](pG);
                if (_config['currentStateIndex'] < _config['canvasState']['length'] - 0x1) {
                    var pI = _config['currentStateIndex'] + 0x1;
                    _config['canvasState'][pI] = pH;
                    var pJ = pI + 0x1;
                    _config['canvasState'] = _config['canvasState']['splice'](0x0, pJ);
                } else {
                    _config['canvasState']['push'](pH);
                }
                _config['currentStateIndex'] = _config['canvasState']['length'] - 0x1;
                if (_config['currentStateIndex'] == _config['canvasState']['length'] - 0x1 && _config['currentStateIndex'] != -0x1) {
                    _config['redoButton']['disabled'] = 'disabled';
                }
            }
        };
        var pK = function () {
            if (_config['currentStateIndex'] != 0x0) {
                if (_config['undoFinishedStatus']) {
                    if (_config['currentStateIndex'] == -0x1) {
                        _config['undoStatus'] = ![];
                    } else {
                        if (_config['canvasState']['length'] >= 0x1) {
                            _config['undoFinishedStatus'] = 0x0;
                            if (_config['currentStateIndex'] != 0x0) {
                                _config['undoStatus'] = !![];
                                canvas['loadFromJSON'](_config['canvasState'][_config['currentStateIndex'] - 0x1], function () {
                                    var pL = JSON['parse'](_config['canvasState'][_config['currentStateIndex'] - 0x1]);
                                    canvas['renderAll']();
                                    console['log']('UNDO');
                                    layersAddIds();
                                    _config['undoStatus'] = ![];
                                    _config['currentStateIndex'] -= 0x1;
                                    _config['undoButton']['removeAttribute']('disabled');
                                    if (_config['currentStateIndex'] !== _config['canvasState']['length'] - 0x1) {
                                        _config['redoButton']['removeAttribute']('disabled');
                                    }
                                    _config['undoFinishedStatus'] = 0x1;
                                });
                            } else if (_config['currentStateIndex'] == 0x0) {
                                canvas['clear']();
                                _config['undoFinishedStatus'] = 0x1;
                                _config['undoButton']['disabled'] = 'disabled';
                                _config['redoButton']['removeAttribute']('disabled');
                                _config['currentStateIndex'] -= 0x1;
                            }
                        }
                    }
                }
            }
        };
        var pM = function () {
            if (_config['redoFinishedStatus']) {
                if (_config['currentStateIndex'] == _config['canvasState']['length'] - 0x1 && _config['currentStateIndex'] != -0x1) {
                    _config['redoButton']['disabled'] = 'disabled';
                } else {
                    if (_config['canvasState']['length'] > _config['currentStateIndex'] && _config['canvasState']['length'] != 0x0) {
                        _config['redoFinishedStatus'] = 0x0;
                        _config['redoStatus'] = !![];
                        canvas['loadFromJSON'](_config['canvasState'][_config['currentStateIndex'] + 0x1], function () {
                            var pN = JSON['parse'](_config['canvasState'][_config['currentStateIndex'] + 0x1]);
                            canvas['renderAll']();
                            console['log']('REDO');
                            layersAddIds();
                            _config['redoStatus'] = ![];
                            _config['currentStateIndex'] += 0x1;
                            if (_config['currentStateIndex'] != -0x1) {
                                _config['undoButton']['removeAttribute']('disabled');
                            }
                            _config['redoFinishedStatus'] = 0x1;
                            if (_config['currentStateIndex'] == _config['canvasState']['length'] - 0x1 && _config['currentStateIndex'] != -0x1) {
                                _config['redoButton']['disabled'] = 'disabled';
                            }
                        });
                    }
                }
            }
        };
        return {
            'undoButton': _config['undoButton'],
            'redoButton': _config['redoButton'],
            'undo': pK,
            'updateCanvasState': pF,
            'redo': pM
        };
    }();
    $('#undo')['click'](function () {
        canvasDemo['undo']();
    });
    $('#redo')['click'](function () {
        canvasDemo['redo']();
    });
} catch (pO) {
    send_error_to_log(pO + 'error_code49');
}
search_finalizada = 0x1;
$(document)['keyup'](function (pP) {
    if ($('#searchHeaderInput')['is'](':focus') && pP['key'] == 'Enter') {
        if (search_finalizada == 0x1) {
            ajaxSearchPixabay('searchHeader');
        }
    }
});
var API_KEY = '1631539-db8210cabd2636c6df59812df';
var unsplash_page2 = 0x0;
var unsplash_page3 = 0x0;
if (lang == 'en') {
    var unsplash_client_id = 'e865fb3d5886535f9d1004c57378f9499db4bbc8ab2b5384e55f5b04023bd995';
} else {
    var unsplash_client_id = '6a2b5f69f09ef346adde1541f66be9e2165e3d9ee28075e390034ff7a497a0dc';
}
if (dominio == 'editas.co') {
    var API_KEY = '8939190-6d86bfa0453023248ee34d77d';
    var API_KEY = '3088228-ce458592fb266d9cb44751e83';
    var unsplash_client_id = '461c9d99c8f727b37220ed0b0c6a212d33ec1707bfcbdced15d2e095e23fe935';
} else {
    var API_KEY = '3088228-ce458592fb266d9cb44751e83';
}
if (estamos_en_fotoefectos == 0x1) {
    var unsplash_client_id = 'a767c65d2d1a49f377f0862e9f91a24bab671df431b3469a76b80915518d9a24';
}
function unsplash_search(pQ) {
    if (pQ == 0x2 && unsplash_page2 == 0x0 || pQ == 0x3 && unsplash_page3 == 0x0) {
        console['log']('NO\x20CARGAMOS');
        return;
    }
    console['log']('CARGAMOS\x20150');
    var pR = 0x0;
    $['ajax']({
        'url': 'https://api.unsplash.com/search/photos/?client_id=' + unsplash_client_id + '&per_page=30&page=' + pQ + '&query=' + encodeURIComponent(document['getElementById']('searchInput')['value']),
        'dataType': 'text',
        'success': function (pS) {
            var pT = $['parseJSON'](pS);
            for (var pU = 0x0; pU < pT['results']['length']; ++pU) {
                var pV = pT['results'][pU]['urls'];
                pR++;
                existe = 0x1;
                if (pR < 0x14) {
                    document['getElementById']('contenido')['innerHTML'] = document['getElementById']('contenido')['innerHTML'] + '<img\x20draggable=\x22true\x22\x20\x20onmouseover=\x22imagen_mouseOverSRC(\x27' + pV['full'] + '\x27,0)\x22\x20class=\x22cliqueable\x22\x20onclick=\x22addRuta2(\x27' + pV['full'] + '\x27,\x27\x27,\x27' + pV['id'] + '\x27);\x22\x20style=\x22width:\x2046.7%\x20!important;\x22\x20alt=\x22' + existe + '\x20\x22src=\x22' + pV['thumb'] + '\x22\x20/>';
                } else {
                    document['getElementById']('contenido')['innerHTML'] = document['getElementById']('contenido')['innerHTML'] + '<img\x20draggable=\x22true\x22\x20\x20onmouseover=\x22imagen_mouseOverSRC(\x27' + pV['full'] + '\x27,0)\x22\x20class=\x22cliqueable\x22\x20onclick=\x22addRuta2(\x27' + pV['full'] + '\x27,\x27\x27,\x27' + pV['id'] + '\x27);\x22\x20style=\x22width:\x2046.7%\x20!important;\x22\x20alt=\x22' + existe + '\x20\x22data-src=\x22' + pV['thumb'] + '\x22\x20/>';
                }
            }
            var pW = new LazyLoad({});
        }
    });
}
function searchUpdate() {
    try {
        if ($('#searchInput')['length'] > 0x0) {
            console['log']('searchUpdate111');
            document['getElementById']('searchInput')['value'] = document['getElementById']('searchHeaderInput')['value'];
        }
    } catch (pX) {
        console['log'](pX);
    }
}
function ajaxSearchPixabay(pY) {
    try {
        ga('send', 'pageview', 'editor---ajaxSearchPixabay');
    } catch (pZ) {
    }
    if (user_email || estamos_en_fotoefectos == 0x1 || document['getElementById']('tipo_pixabay')['value'] == 'edit.org') {
        activate_loading('ini');
        try {
            grabar_accion('photo_pixabay_search', document['getElementById']('tipo_pixabay')['value']);
        } catch (q0) {
        }
        valor_editor = '';
        if (pY == 'searchHeader') {
            if (document['getElementById']('searchHeaderInput')['value'] != '') {
                cambioSearchPorAjax(document['getElementById']('searchHeaderInput')['value']);
                window['history']['pushState']('object\x20or\x20string', 'TITLE\x20HERE', 'https://' + dominio + '/edit/search/' + document['getElementById']('searchHeaderInput')['value']['replace']('\x20', '+'));
                console['log']('busqcmoooooooooooooooooooooooooooooooooooooooo');
            } else {
                alert(traduccion_javascript_introduce_busqueda);
                document['getElementById']('searchHeaderInput')['focus']();
                activate_loading('end');
            }
        } else if (document['getElementById']('tipo_pixabay')['value'] == 'edit.org') {
            if ($('#searchInput')['val']() != '') {
                cambioSearchPorAjax($('#searchInput')['val']());
                window['history']['pushState']('object\x20or\x20string', 'TITLE\x20HERE', 'https://' + dominio + '/edit/search/' + $('#searchInput')['val']()['replace']('\x20', '+'));
            } else {
                alert(traduccion_javascript_introduce_busqueda);
                document['getElementById']('searchInput')['focus']();
                activate_loading('end');
            }
        } else {
            activate_loading('ini');
            var q1 = 'https://pixabay.com/api/?key=' + API_KEY + '&safesearch=true&per_page=50&lang=es&q=' + encodeURIComponent($('#searchInput')['val']()) + '&image_type=photo&response_group=high_resolution';
            var q2 = q1;
            var q1 = 'https://pixabay.com/api/?key=' + API_KEY + '&safesearch=true&per_page=100&lang=es&q=' + encodeURIComponent($('#searchInput')['val']()) + '&image_type=vector&response_group=high_resolution';
            console['log'](q1);
            var q4 = q1;
            if (document['getElementById']('tipo_pixabay')['value'] == 'thenounproject') {
                q1 = '/devuelveAjaxEditorNEW.php?api=1&term=' + encodeURIComponent($('#searchInput')['val']());
            }
            if (document['getElementById']('tipo_pixabay')['value'] == 'unsplash.com') {
                q1 = '/devuelveAjaxEditorNEW.php?api=1&term=' + encodeURIComponent($('#searchInput')['val']());
            }
            if (notificaciones == 0x1)
                console['log'](q1);
            var q5 = 0x0;
            document['getElementById']('contenido')['innerHTML'] = '';
            document['getElementById']('listado_recursos')['style']['display'] = 'none';
            document['getElementById']('header_cabeceras')['style']['display'] = 'none';
            if (document['getElementById']('tipo_pixabay')['value'] == 'pixabay.com') {
                console['log'](document['getElementById']('tipo_pixabay')['value']);
                try {
                    $['when']($['getJSON'](q4, function (q6) {
                        var q5 = 0x0;
                        $['each'](q6['hits'], function (q8, q9) {
                            if (q9['vectorURL'])
                                ruta = q9['vectorURL'];
                            else if (q9['largeImageURL'])
                                ruta = q9['largeImageURL'];
                            else
                                ruta = q9['webformatURL'];
                            q5++;
                            if (q5 < 0x14) {
                                document['getElementById']('contenido')['innerHTML'] = document['getElementById']('contenido')['innerHTML'] + '<img\x20draggable=\x22true\x22\x20onmouseover=\x22imagen_mouseOverSRC(\x27' + ruta + '\x27,0)\x22\x20class=\x22cliqueable\x22\x20onclick=\x22addRuta2(\x27' + ruta + '\x27,\x27\x27,\x27' + q9['id_hash'] + '\x27);\x22\x20style=\x22width:\x2046.7%\x20!important;\x22\x20\x20src=\x22' + q9['previewURL'] + '\x22\x20/>';
                            } else {
                                document['getElementById']('contenido')['innerHTML'] = document['getElementById']('contenido')['innerHTML'] + '<img\x20draggable=\x22true\x22\x20onmouseover=\x22imagen_mouseOverSRC(\x27' + ruta + '\x27,0)\x22\x20class=\x22cliqueable\x22\x20onclick=\x22addRuta2(\x27' + ruta + '\x27,\x27\x27,\x27' + q9['id_hash'] + '\x27);\x22\x20style=\x22width:\x2046.7%\x20!important;\x22\x20\x20data-src=\x22' + q9['previewURL'] + '\x22\x20/>';
                            }
                        });
                    }))['then'](function () {
                        var qa = new LazyLoad({});
                        console['log']('Hemos\x20hecho\x20una\x20busqueda.');
                    });
                } catch (qb) {
                }
                activate_loading('end');
            } else if (document['getElementById']('tipo_pixabay')['value'] == 'unsplash.com') {
                console['log'](document['getElementById']('tipo_pixabay')['value']);
                $['when'](unsplash_search(0x1), unsplash_search(0x2), unsplash_search(0x3), $['getJSON'](q2, function (qc) {
                    var q5 = 0x0;
                    $['each'](qc['hits'], function (qe, qf) {
                        if (qf['vectorURL'])
                            ruta = qf['vectorURL'];
                        else if (qf['largeImageURL'])
                            ruta = qf['largeImageURL'];
                        else
                            ruta = qf['webformatURL'];
                        q5++;
                        if (q5 < 0x14) {
                            document['getElementById']('contenido')['innerHTML'] = document['getElementById']('contenido')['innerHTML'] + '<img\x20draggable=\x22true\x22\x20\x20onmouseover=\x22imagen_mouseOverSRC(\x27' + ruta + '\x27,0)\x22\x20class=\x22cliqueable\x22\x20onclick=\x22addRuta2(\x27' + ruta + '\x27,\x27\x27,\x27' + qf['id_hash'] + '\x27);\x22\x20style=\x22width:\x2046.7%\x20!important;\x22\x20src=\x22' + qf['previewURL'] + '\x22\x20/>';
                        } else {
                            document['getElementById']('contenido')['innerHTML'] = document['getElementById']('contenido')['innerHTML'] + '<img\x20draggable=\x22true\x22\x20\x20onmouseover=\x22imagen_mouseOverSRC(\x27' + ruta + '\x27,0)\x22\x20class=\x22cliqueable\x22\x20onclick=\x22addRuta2(\x27' + ruta + '\x27,\x27\x27,\x27' + qf['id_hash'] + '\x27);\x22\x20style=\x22width:\x2046.7%\x20!important;\x22\x20data-src=\x22' + qf['previewURL'] + '\x22\x20/>';
                        }
                    });
                }), $['getJSON'](q4, function (qg) {
                    var q5 = 0x0;
                    $['each'](qg['hits'], function (qi, qj) {
                        if (qj['vectorURL'])
                            ruta = qj['vectorURL'];
                        else if (qj['largeImageURL'])
                            ruta = qj['largeImageURL'];
                        else
                            ruta = qj['webformatURL'];
                        q5++;
                        if (q5 < 0x14) {
                            document['getElementById']('contenido')['innerHTML'] = document['getElementById']('contenido')['innerHTML'] + '<img\x20draggable=\x22true\x22\x20\x20onmouseover=\x22imagen_mouseOverSRC(\x27' + ruta + '\x27,0)\x22\x20class=\x22cliqueable\x22\x20onclick=\x22addRuta2(\x27' + ruta + '\x27,\x27\x27,\x27' + qj['id_hash'] + '\x27);\x22\x20style=\x22width:\x2046.7%\x20!important;\x22\x20src=\x22' + qj['previewURL'] + '\x22\x20/>';
                        } else {
                            document['getElementById']('contenido')['innerHTML'] = document['getElementById']('contenido')['innerHTML'] + '<img\x20draggable=\x22true\x22\x20\x20onmouseover=\x22imagen_mouseOverSRC(\x27' + ruta + '\x27,0)\x22\x20class=\x22cliqueable\x22\x20onclick=\x22addRuta2(\x27' + ruta + '\x27,\x27\x27,\x27' + qj['id_hash'] + '\x27);\x22\x20style=\x22width:\x2046.7%\x20!important;\x22\x20data-src=\x22' + qj['previewURL'] + '\x22\x20/>';
                        }
                    });
                }))['then'](function () {
                    console['log']('Hemos\x20hecho\x20una\x20busqueda.');
                    var qk = new LazyLoad({});
                });
                activate_loading('end');
            } else if (document['getElementById']('tipo_pixabay')['value'] == 'thenounproject') {
                $['getJSON'](q1, function (ql) {
                    document['getElementById']('pixabay-logo')['style']['display'] = '';
                    $['each'](ql, function (qm, qn) {
                        ruta = qn['preview_url_84'];
                        q5++;
                        if (q5 < 0x14) {
                            document['getElementById']('contenido')['innerHTML'] = '<img\x20draggable=\x22true\x22\x20onmouseover=\x22imagen_mouseOverSRC(\x27' + counter['full'] + '\x27,0)\x22\x20\x20class=\x22cliqueable\x22\x20onclick=\x22addRuta2(\x27' + ruta + '\x27,\x27\x27,\x27' + qn['preview_url_84'] + '\x27);\x22\x20style=\x22width:\x2046.7%\x20!important;\x22\x20src=\x22' + qn['preview_url_84'] + '\x22\x20/>' + document['getElementById']('contenido')['innerHTML'];
                        } else {
                            document['getElementById']('contenido')['innerHTML'] = '<img\x20draggable=\x22true\x22\x20onmouseover=\x22imagen_mouseOverSRC(\x27' + counter['full'] + '\x27,0)\x22\x20\x20class=\x22cliqueable\x22\x20onclick=\x22addRuta2(\x27' + ruta + '\x27,\x27\x27,\x27' + qn['preview_url_84'] + '\x27);\x22\x20style=\x22width:\x2046.7%\x20!important;\x22\x20data-src=\x22' + qn['preview_url_84'] + '\x22\x20/>' + document['getElementById']('contenido')['innerHTML'];
                        }
                    });
                    var qo = new LazyLoad({});
                });
                activate_loading('end');
            } else {
                $['getJSON'](q1, function (qp) {
                    if (notificaciones == 0x1)
                        console['log'](qp);
                    var q5 = 0x0;
                    document['getElementById']('contenido')['innerHTML'] = '';
                    if (parseInt(qp['totalHits']) > 0x0)
                        $['each'](qp['hits'], function (qr, qs) {
                            if (qs['vectorURL'])
                                ruta = qs['vectorURL'];
                            else if (qs['largeImageURL'])
                                ruta = qs['largeImageURL'];
                            else
                                ruta = qs['webformatURL'];
                            q5++;
                            if (q5 < 0x14) {
                                document['getElementById']('contenido')['innerHTML'] = '<img\x20draggable=\x22true\x22\x20onmouseover=\x22imagen_mouseOverSRC(\x27' + counter['full'] + '\x27,0)\x22\x20class=\x22cliqueable\x22\x20onclick=\x22addRuta2(\x27' + ruta + '\x27,\x27\x27,\x27' + qs['id_hash'] + '\x27);\x22\x20style=\x22width:\x2046.7%\x20!important;\x22\x20\x20data-src=\x22' + qs['previewURL'] + '\x22\x20/>' + document['getElementById']('contenido')['innerHTML'];
                            } else {
                                document['getElementById']('contenido')['innerHTML'] = '<img\x20draggable=\x22true\x22\x20onmouseover=\x22imagen_mouseOverSRC(\x27' + counter['full'] + '\x27,0)\x22\x20class=\x22cliqueable\x22\x20onclick=\x22addRuta2(\x27' + ruta + '\x27,\x27\x27,\x27' + qs['id_hash'] + '\x27);\x22\x20style=\x22width:\x2046.7%\x20!important;\x22\x20\x20src=\x22' + qs['previewURL'] + '\x22\x20/>' + document['getElementById']('contenido')['innerHTML'];
                            }
                        });
                    else if (notificaciones == 0x1)
                        console['log']('No\x20hits');
                    var qt = new LazyLoad({});
                });
                activate_loading('end');
            }
        }
    } else {
        registroUsuario(traduccion_javascript_registro_subir_buscar_fotos2);
    }
}
function ajaxSearch() {
    $['ajax']({
        'async': ![],
        'type': 'POST',
        'url': '/devuelveAjaxEditorNEW.php',
        'data': {
            'myString': $('#search')['val'](),
            'paginacion': document['getElementById']('paginacion')['value']
        }
    })['success'](function (qu) {
        if (qu == 'end') {
        } else {
            document['getElementById']('paginacion')['value'] = parseInt(document['getElementById']('paginacion')['value']) + parseInt(0x8);
            document['getElementById']('cargaAjax')['innerHTML'] = qu + document['getElementById']('cargaAjax')['innerHTML'];
        }
    });
}
var canvas = this['__canvas'];
function addRuta2(qv, qw, qx) {
    activate_loading('ini');
    timerStart = Date['now']();
    LoadingChanges();
    var qy = document['getElementById']('id_categoria_recurso')['value'];
    if ($('#nombre_recurso')['length'] > 0x0) {
        var qz = document['getElementById']('nombre_recurso')['value'];
        if (qz == '') {
            qz = document['getElementById']('searchInput')['value'];
        }
    } else {
        if ($('#searchInput')['length'] > 0x0) {
            var qz = document['getElementById']('searchInput')['value'];
        } else {
            var qz = '-';
        }
    }
    var qC = document['getElementById']('tipo_pixabay');
    var qD = qC['options'][qC['selectedIndex']]['value'];
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor + '?id_categoria_recurso=' + qy + '&id_tipo_recurso=' + qz + '&origen_buscador=' + qD,
        'dataType': 'text',
        'data': {
            'url_pixabay': qv,
            'id_categoria_recurso': qy,
            'id_tipo_recurso': qz,
            'origen_buscador': qD,
            'tags': qw,
            'id_pixabay': qx
        },
        'success': function (qE) {
            console['log'](qE);
            addRuta('/' + qE);
        },
        'error': function (qF, qG, qH) {
        }
    });
}
function newCanvas() {
    ancho = 0x400;
    alto = 0x400;
    if (admin == 0x1) {
        document['getElementById']('idNombreCanvas_backup')['value'] = '';
        document['getElementById']('nombreTemplate')['value'] = '';
        document['getElementById']('categoriaTemplate')['value'] = '';
        document['getElementById']('agrupador_templates')['value'] = '';
        document['getElementById']('color1')['value'] = '';
        document['getElementById']('color2')['value'] = '';
        document['getElementById']('color3')['value'] = '';
        document['getElementById']('font1')['value'] = '';
        document['getElementById']('font2')['value'] = '';
        document['getElementById']('font3')['value'] = '';
        document['getElementById']('imagen_sustituta1')['value'] = '';
        if (estamos_en_fotoefectos == 0x1) {
            canvas['backgroundColor'] = 'white';
            var qI = prompt('Introduce\x20el\x20idtexto', 'idtexto');
            if (qI != null) {
                document['getElementById']('agrupador_templates')['value'] = qI;
            }
        }
    }
    clearCanvas('no');
    canvas['setWidth'](ancho);
    canvas['setHeight'](alto);
    ajustar_canvas(ancho, alto);
    canvas['calcOffset']();
    canvas['renderAll']();
}
function setearPropiedadesID(qJ) {
}
var posicion_bottom = 0x0;
function loadCanvasFont(qK, qL) {
    colores = [
        '#000000',
        '#F7B19C',
        '#57D0FC',
        '#FB5379',
        '#FCDA86',
        '#527CFA',
        '#59FCAC',
        '#8266F7',
        '#FF6700',
        '#2BF9FE',
        '#FC0E1C',
        '#FFFD38',
        '#FD29FC',
        '#45FA54',
        '#1024FB',
        '#000000'
    ];
    color = colores[Math['floor'](Math['random']() * colores['length'])];
    color = '#000000';
    closeAllTooltips();
    grabar_accion('templates', 'add_text_combination');
    if (overlayImage != '' && carga_finalizada == 0x2) {
        quitar_overlay();
    }
    if (!qK)
        qK = 0x1;
    $['ajax']({
        'type': 'POST',
        'url': '/editas.php',
        'data': {
            'loadnombreCanvas': qK,
            'tabla_': 'json_efectos'
        },
        'dataType': 'text',
        'success': function (qM) {
            var qN;
            var qO;
            var qP;
            var qQ;
            var qN;
            var qS;
            var qT;
            var qU;
            var qV = new fabric['ActiveSelection']([], { 'canvas': canvas });
            if (qL != '') {
                qL = '/' + qL;
            } else {
                qL = '/editor/json';
            }
            if (estamos_en_fotoefectos == 0x1) {
                qL = qL['replace']('json', 'json_fotoefectos');
            }
            $['getJSON'](qL + '/' + qK + '.json?rand=' + Math['random'](), function (qW) {
                $['each'](qW['objects'], function (qX, qY) {
                    numero_objeto = 0x1;
                    var qZ = qY;
                    fabric['util']['enlivenObjects']([qZ], function (r0) {
                        r0['forEach'](function (r1) {
                            if (r1['get']('type') == 'i-text' || r1['get']('type') == 'textbox') {
                                var r2 = new FontFaceObserver(r1['fontFamily']);
                                r2['load']()['then'](function () {
                                    canvas['add'](r1);
                                    r1['set']('lockMovementX', ![]);
                                    r1['set']('lockMovementY', ![]);
                                    viewportTransform = canvas['viewportTransform'];
                                    width_canvas = canvas['width'] / viewportTransform[0x0];
                                    height_canvas = canvas['height'] / viewportTransform[0x0];
                                    if (numero_objeto > 0x1) {
                                        r1['set']('fill', color);
                                    }
                                    numero_objeto++;
                                    r1['scaleToWidth'](width_canvas - width_canvas / 0x64 * 0x43);
                                    canvas['setActiveObject'](r1);
                                    alignObject('centerH');
                                    if (r1['get']('opacity') === null) {
                                        r1['set']('opacity', 0x1);
                                    }
                                    if (r1['get']('type') == 'i-text' || r1['get']('type') == 'textbox') {
                                        r1['text'] = replaceAll(r1['text'], '¬', '\x27');
                                        r1['perPixelTargetFind'] = ![];
                                        r1['targetFindTolerance'] = 0x0;
                                        if (r1['get']('selectable') == ![]) {
                                            r1['set']('selectable', 'true');
                                        }
                                    }
                                    r1['setCoords']();
                                    canvas['calcOffset']();
                                    if (posicion_bottom != 0x0) {
                                        if (posicion_bottom > height_canvas - 0x73) {
                                            posicion_bottom = 0x64;
                                        }
                                        r1['set']('top', posicion_bottom);
                                    } else {
                                        r1['set']('top', 0x46);
                                    }
                                    posicion_bottom = r1['get']('top') + r1['get']('height') * r1['scaleX'] + 0x32;
                                    r1['setCoords']();
                                    canvas['calcOffset']();
                                    if (r1['get']('fill') == 'rgb(230,\x20230,\x20230)' || r1['get']('fill') == 'rgb(242,\x20242,\x20242)') {
                                        r1['set']('fill', '#000000');
                                    }
                                    layersAddIds();
                                    canvas['renderAll']();
                                })['catch'](function (r3) {
                                });
                            } else {
                                canvas['add'](r1);
                                r1['set']('lockMovementX', ![]);
                                r1['set']('lockMovementY', ![]);
                                canvas['calcOffset']();
                                r1['setCoords']();
                                canvas['calcOffset']();
                            }
                        });
                    });
                    console['log'](qY['type']);
                });
                canvas['renderAll']();
            })['fail'](function (r4, r5, r6) {
                var r7 = r5 + ',\x20' + r6;
                console['log']('Request\x20Failed\x2013966:\x20' + r7);
                activate_loading('end');
                cambioSubCategoria('efectos2');
            });
            ;
        },
        'error': function (r8, r9, ra) {
            alert(traduccion_javascript_error_tecnic + r9 + ra);
            activateChat();
        }
    });
}
function loadCanvasFontCOPY(rb, rc) {
    closeAllTooltips();
    grabar_accion('templates', 'add_text_combination');
    if ($('#way_insert_combination_texts')['val']() == 'insert') {
        loadAllElementsFromJson(rb, rc);
    } else {
        if (overlayImage != '' && carga_finalizada == 0x2) {
            quitar_overlay();
        }
        if (!rb)
            rb = 0x1;
        $['ajax']({
            'type': 'POST',
            'url': '/editas.php',
            'data': {
                'loadnombreCanvas': rb,
                'tabla_': 'json_efectos'
            },
            'dataType': 'text',
            'success': function (rd) {
                var re;
                var rf;
                var rg;
                var rh;
                var re;
                var rj;
                var rk;
                var rl;
                var rm = new fabric['ActiveSelection']([], { 'canvas': canvas });
                if (rc != '') {
                    rc = '/' + rc;
                } else {
                    rc = '/editor/json';
                }
                if (estamos_en_fotoefectos == 0x1) {
                    rc = rc['replace']('json', 'json_fotoefectos');
                }
                var rn = 0x19;
                var ro = 0x0;
                var rl;
                var rq = '';
                var rr = '';
                var rs = '';
                var rt = '';
                var ru = '';
                var rv = '';
                var rq = '';
                var rx = '';
                var ry = '';
                var rz = '';
                var rA = '';
                var rB = '';
                var rC = '';
                var rD = '';
                var rE = '';
                var rF = '';
                var rA = '';
                var rH = '';
                var rI = '';
                var rJ = '';
                canvas['discardActiveObject']()['renderAll']();
                if ($('#way_insert_combination_texts')['val']() == 'insert') {
                    insert_or_update = 'insert';
                } else {
                    insert_or_update = 'insert';
                }
                $['getJSON'](rc + '/' + rb + '.json?rand=' + Math['random'](), function (rK) {
                    $['each'](rK['objects'], function (rL, rM) {
                        rM['set']('fill', '#000000');
                    });
                })['fail'](function (rN, rO, rP) {
                    var rQ = rO + ',\x20' + rP;
                    console['log']('Request\x20Failed\x2013966:\x20' + rQ);
                    activate_loading('end');
                    cambioSubCategoria('efectos2');
                });
                ;
            },
            'error': function (rR, rS, rT) {
                alert(traduccion_javascript_error_tecnic + rS + rT);
                activateChat();
            }
        });
    }
}
var created_guides = '';
var array_of_guides = [];
function loadAllElementsFromJson(rU, rV, rW) {
    if (created_guides) {
        array_of_guides['forEach'](function (rX) {
            canvas['remove'](rX);
        });
        canvas['renderAll']();
        created_guides = '';
    } else {
        $['ajax']({
            'type': 'POST',
            'url': '/editas.php',
            'data': {
                'loadnombreCanvas': rU,
                'tabla_': 'json_efectos'
            },
            'dataType': 'text',
            'success': function (rY) {
                if (rV != '') {
                    rV = '/' + rV;
                } else {
                    rV = '/editor/json';
                }
                if (estamos_en_fotoefectos == 0x1) {
                    rV = rV['replace']('json', 'json_fotoefectos');
                }
                console['log']('Añadimos\x20objeto1');
                $['getJSON'](rV + '/' + rU + '.json?rand=' + Math['random'](), function (rZ) {
                    $['each'](rZ['objects'], function (s0, s1) {
                        console['log'](rZ['objects'][s0]['type']);
                        console['log'](rZ['objects'][s0]);
                        if (rZ['objects'][s0]['type'] == 'rect') {
                            var s2 = new fabric['Rect']({});
                            canvas['add'](s2);
                            $['each'](rZ['objects'][s0], function (s3, s4) {
                                s2['set'](s3, s4);
                                console['log'](s3 + s4);
                            });
                        } else if (rZ['objects'][s0]['type'] == 'image') {
                            var s2 = new fabric['Image']('/assets/images/Logo-Blanco-EDIT1.svg', {});
                            canvas['add'](s2);
                            $['each'](rZ['objects'][s0], function (s6, s7) {
                                s2['set'](s6, s7);
                                console['log'](s6 + s7);
                            });
                        } else if (rZ['objects'][s0]['type'] == 'circle') {
                            var s2 = new fabric['Circle']({});
                            canvas['add'](s2);
                            $['each'](rZ['objects'][s0], function (s9, sa) {
                                s2['set'](s9, sa);
                                console['log'](s9 + sa);
                            });
                        } else if (rZ['objects'][s0]['type'] == 'i-text' || rZ['objects'][s0]['type'] == 'textbox') {
                            if (rZ['objects'][s0]['type'] == 'textbox')
                                var s2 = new fabric['Textbox']('Here\x20the\x20text', {});
                            else
                                var s2 = new fabric['IText']('Here\x20the\x20text', {});
                            $['each'](rZ['objects'][s0], function (sd, se) {
                                s2['set'](sd, se);
                                console['log'](sd + se);
                                if (sd == 'fontFamily' && se) {
                                    s1 = se;
                                }
                            });
                            if (s1) {
                                var sf = new FontFaceObserver(s1);
                                sf['load']()['then'](function () {
                                    canvas['add'](s2);
                                    $['each'](rZ['objects'][s0], function (sg, sh) {
                                        s2['set'](sg, sh);
                                        console['log'](sg + sh);
                                    });
                                    canvas['renderAll']();
                                });
                            }
                            if (rW == 'no') {
                                s2['selectable'] = ![];
                            }
                        }
                        if (rW == 'no') {
                            s2['id'] = 'guides';
                        }
                        if (rW == 'no') {
                            s2['perPixelTargetFind'] = !![];
                            s2['targetFindTolerance'] = 0x4;
                            s2['hasControls'] = s2['hasBorders'] = ![];
                            console['log']('hascontrols\x20False:\x2018604');
                        }
                        if (rW == 'no') {
                            s2['set']('opacity', 0.35);
                            array_of_guides['push'](s2);
                        }
                        s2['setCoords']();
                    });
                    canvas['renderAll']();
                    if (rW == 'no') {
                        created_guides = 0x1;
                    }
                })['fail'](function (si, sj, sk) {
                    var sl = sj + ',\x20' + sk;
                    console['log']('Request\x20Failed\x2014234:\x20' + sl);
                    activate_loading('end');
                    cambioSubCategoria('efectos2');
                });
            },
            'error': function (sm, sn, so) {
                alert(traduccion_javascript_error_tecnic + sn + so);
                activateChat();
            }
        });
    }
}
function addTooltip(sp, sq) {
    alert(sp);
}
function is_shared() {
    if (0x1 == 0x1) {
    } else {
        $['ajax']({
            'type': 'POST',
            'url': '/' + trad_url_photo_editor,
            'dataType': 'text',
            'data': { 'is_shared': valor_editor },
            'success': function (sr) {
                console['log']('SHARED?' + sr);
                var ss = sr['split'](';');
                if (ss[0x0] == 0x1) {
                    $('#shareTeam')['addClass']('deslice');
                    document['getElementById']('span_design_shared')['innerHTML'] = traduccion_javascript_team_share_design_share_design;
                    share = 0x1;
                } else {
                    $('#shareTeam')['removeClass']('deslice');
                    document['getElementById']('span_design_shared')['innerHTML'] = traduccion_javascript_team_share_design_share_design;
                    share = 0x3e7;
                }
                try {
                    if (ss[0x1] == 0x1) {
                        $('#shareTeamTemplate')['addClass']('deslice');
                        document['getElementById']('span_design_sharedTemplate')['innerHTML'] = traduccion_javascript_team_share_shared_template;
                        share = 0x1;
                    } else {
                        $('#shareTeamTemplate')['removeClass']('deslice');
                        document['getElementById']('span_design_sharedTemplate')['innerHTML'] = traduccion_javascript_team_share_design_share_template;
                        share = 0x3e7;
                    }
                } catch (st) {
                }
            },
            'error': function (su, sv, sw) {
            }
        });
    }
}
function resize_canvas_automatic(sx, sy) {
    if (sx && sy) {
        changeCanvasSize(sx + 'x' + sy, '2', '', '1');
    }
}
function numeroAleatorio(sz, sA) {
    return Math['round'](Math['random']() * (sA - sz) + sz);
}
var categoriaTemplate;
var open_template_not_edited = 0x0;
var tabla_current;
var es_premium = 0x0;
var imgOverlay;
var imgOverlay1;
var montajefinal_added_yet = 0x0;
var id_json_short;
function loadCanvas2(sB, sC, sD, sE, sF, sG, sH, sI) {
    var sJ = 0x0;
    id_json_short = sB;
    try {
        ga('send', 'pageview', 'editor---id_canvas--' + sC + '-' + sB);
    } catch (sK) {
    }
    $('section')['removeClass']('double-templates');
    if (user_email != '') {
        document['getElementById']('redimension_menu')['style']['display'] = '';
        document['getElementById']('redimension_menu2')['style']['display'] = '';
    }
    closeAllTooltips();
    if (tourStage == 0x2) {
        tourStage = 'end';
    }
    try {
        if (getCookie('cargamosTourPremium') == 0x1) {
            if (tourStage == 'end') {
                $('html,\x20body')['animate']({ 'scrollTop': 0x0 }, 'slow');
                tour['end']();
                addTour(0x4);
                tourStage == 'end2';
            }
        }
    } catch (sL) {
    }
    resetUndoRedo();
    if (!sI) {
        sI = '';
    } else {
        alert_change_size = 0x0;
    }
    tabla_current = sC;
    if (sC == 'json_efectos_user') {
        open_template_not_edited = 0x0;
    } else
        {
            open_template_not_edited = 0x1;
        }
    finished_loading_json = 0x0;
    console_log_colors(sI, 'black', 'blue');
    $('.userBlock')['removeClass']('activeOptionsUser');
    tipo_user_or_template = sC;
    if (suscription_type == 'premium_tems') {
        document['getElementById']('shareTeam')['style']['display'] = '';
    }
    $('#shareTeam')['removeClass']('deslice');
    document['getElementById']('span_design_shared')['innerHTML'] = traduccion_javascript_team_share_design_share;
    share = 0x3e7;
    if (tipo_user_or_template == 'json_efectos') {
    }
    try {
        zt['hide']($('#buttonDesigns'));
    } catch (sM) {
    }
    document['getElementById']('tooltipSelectCategories')['style']['display'] = 'none';
    document['getElementById']('tooltipSelectFormat')['style']['display'] = 'none';
    entramos = 0x1;
    if (estamos_en_fotoefectos == 0x1) {
        we_have_edite_the_template = '';
    }
    if (we_have_edite_the_template == 0x1) {
        var sN = confirm(traduccion_se_perderan_los_cambios);
        if (sN == !![]) {
            entramos = 0x1;
        } else {
            entramos = 0x0;
        }
    }
    if (entramos == 0x1) {
        estamos_editando = 0x0;
        we_have_edite_the_template = 0x0;
        document['getElementById']('tooltipSelectDesign')['style']['display'] = 'none';
        try {
            zt['hide']($('#reemplazarImagen'));
            zt['hide']($('#file_upload_button'));
        } catch (sO) {
        }
        tooltipHide = 0x0;
        if (sC == 'json_efectos') {
            porcion_url = 'all/';
        } else if (sC == 'json_efectos_foto') {
            porcion_url = 'all/';
        } else {
            porcion_url = 'my/';
        }
        if (dominio == 'edit.org') {
            window['history']['pushState']('object\x20or\x20string', 'TITLE\x20HERE', 'https://' + dominio + '/edit/' + porcion_url + sB + sI);
        } else {
            window['history']['pushState']('object\x20or\x20string', 'TITLE\x20HERE', 'https://' + dominio + '/edit/' + porcion_url + sB + sI);
        }
        activate_loading('ini');
        if (sC == 'json_efectos') {
            document['getElementById']('usuarioPlantilla')['value'] = 'json_efectos';
        } else {
            document['getElementById']('usuarioPlantilla')['value'] = 'json_efectos_user';
        }
        id_canvas_global = sB;
        if (!sB)
            sB = 0x1;
        $['ajax']({
            'type': 'POST',
            'url': '/editas.php',
            'data': {
                'loadnombreCanvas': sB,
                'tabla_': sC
            },
            'dataType': 'text',
            'success': function (sP) {
                var sQ = sP['split'](';');
                if ($('#packs_affiliates')['length'] > 0x0) {
                    if (sQ[0x13] != user_email) {
                        document['getElementById']('actualizar_template_affiliates')['style']['display'] = 'none';
                    } else {
                        document['getElementById']('actualizar_template_affiliates')['style']['display'] = '';
                    }
                    document['getElementById']('packs_affiliates')['value'] = sQ[0x11];
                }
                if (sQ[0x0] == 'FOTO_NO_JSON' && estamos_en_fotoefectos == 0x1) {
                    anchoEfecto = sQ[0x1];
                    altoEfecto = sQ[0x2];
                    archivoMini = sQ[0x3];
                    archivoFinal = sQ[0x4];
                    copyrigth = sQ[0x5];
                    anchoRecorte = sQ[0x6];
                    altoRecorte = sQ[0x7];
                    ajustaleft = sQ[0x8];
                    ajustaTop = sQ[0x9];
                    numImagenes = sQ[0xa];
                    oculto = sQ[0xb];
                    ordenSprite = sQ[0xc];
                    montajefinal = sQ[0xd];
                    ancho = anchoEfecto;
                    alto = altoEfecto;
                    if (archivoFinal) {
                        canvas['setWidth'](anchoEfecto);
                        canvas['setHeight'](altoEfecto);
                        ajustar_canvas(anchoEfecto, altoEfecto);
                        var sR = document['getElementById']('zoom_value')['innerHTML'];
                        zoom_new = 0x1;
                        setZoom2(zoom_new);
                        canvas['getObjects']()['forEach'](function (sS) {
                            if (sS['id'] === '99999999999999') {
                                canvas['remove'](sS);
                            }
                        });
                        imgOverlay1 = fabric['Image']['fromURL']('/' + archivoFinal, function (sT) {
                            canvas['add'](sT['set']({
                                'left': 0x0,
                                'top': 0x0,
                                'id': '99999999999999',
                                'angle': 0x0,
                                'opacity': 0x1
                            }));
                            sT['set']('lockMovementX', !![]);
                            sT['set']('lockMovementY', !![]);
                            sT['hasControls'] = sT['hasBorders'] = ![];
                            console['log']('hascontrols\x20False:\x2018604');
                            sT['selectable'] = ![];
                            sT['lockMovementY'] = !![];
                            sT['lockMovementX'] = !![];
                            sT['lockRotation'] = !![];
                            sT['set']('perPixelTargetFind', !![]);
                            sT['targetFindTolerance'] = 0x4;
                            sT['scaleToWidth'](anchoEfecto);
                            sT['centerH']();
                            sT['centerV']();
                            ajustar_canvas(anchoEfecto, altoEfecto);
                            canvas['renderAll']();
                            setZoom2(sR);
                            canvas['bringToFront'](sT)['renderAll']();
                        });
                    }
                    if (montajefinal && montajefinal_added_yet == 0x0) {
                        document['getElementById']('ancho_canvas')['value'] = ancho;
                        document['getElementById']('alto_canvas')['value'] = alto;
                        ancho_ancho = montajefinal_width / ancho;
                        alto_alto = montajefinal_height / alto;
                        if (alto_alto <= 0x1 || ancho_ancho <= 0x1) {
                            console['log']('redimensionamos,\x20la\x20imagen\x20es\x20más\x20pequeñas\x20que\x20el\x20lienzo:\x20' + ancho_ancho + '\x20' + alto_alto);
                            if (alto_alto < ancho_ancho) {
                                montajefinal_width2 = ancho * (alto / montajefinal_height);
                                montajefinal_height2 = alto;
                            } else {
                                montajefinal_width2 = ancho;
                                montajefinal_height2 = alto * (ancho / montajefinal_width);
                            }
                        } else {
                            console['log']('tamaños\x20ok,\x20centramos');
                            montajefinal_width2 = montajefinal_width;
                            montajefinal_height2 = montajefinal_height;
                        }
                        canvas['setWidth'](ancho);
                        canvas['setHeight'](alto);
                        ajustar_canvas(ancho, alto);
                        var sR = document['getElementById']('zoom_value')['innerHTML'];
                        zoom_new = 0x1;
                        setZoom2(zoom_new);
                        img = fabric['Image']['fromURL'](montajefinal, function (sV) {
                            canvas['add'](sV['set']({
                                'left': 0x0,
                                'top': 0x0,
                                'angle': 0x0,
                                'opacity': 0x1
                            }));
                            sV['scaleToWidth'](montajefinal_width2);
                            sV['centerH']();
                            sV['centerV']();
                            ajustar_canvas(ancho, alto);
                            canvas['renderAll']();
                            setZoom2(sR);
                            montajefinal_added_yet = '1';
                            canvas['sendToBack'](sV)['renderAll']();
                        });
                    }
                    if (copyrigth) {
                        addRuta('https://www.fotoefectos.com/' + copyrigth);
                    }
                    activate_loading('end');
                    return;
                }
                if (sP == 'NOPERMISSION') {
                    activate_loading('end');
                    cambioSubCategoria('efectos2');
                    alert(traduccion_javascript_noacces_to_file);
                } else if (sP == 'NOFILE') {
                    activate_loading('end');
                    cambioSubCategoria('efectos2');
                    alert(traduccion_javascript_file_no_exists);
                } else {
                    $('.sidePanel')['removeClass']('slideUpPanel');
                    $('.sidebar')['removeClass']('sideBarShow');
                    ancho = sQ[0x0];
                    alto = sQ[0x1];
                    var sW = sQ[0x2];
                    var sX = sQ[0x3];
                    categoriaTemplate = sQ[0x4];
                    document['getElementById']('coords_size')['style']['display'] = '';
                    document['getElementById']('coords_size')['innerHTML'] = '' + parseInt(ancho) + '\x20x\x20' + parseInt(alto);
                    if (estamos_en_fotoefectos != 0x1) {
                        try {
                            document['getElementById']('categoria_copy' + categoriaTemplate)['style']['backgroundColor'] = '#BE296B';
                            document['getElementById']('categoria_copy' + categoriaTemplate)['color'] = 'white\x20!important';
                        } catch (sY) {
                        }
                    }
                    var sZ = sQ[0x5];
                    var t0 = sQ[0x6];
                    var t1 = sQ[0x7];
                    var t2 = sQ[0x8];
                    var t3 = sQ[0x9];
                    var t4 = sQ[0xa];
                    var t5 = sQ[0x8];
                    var t6 = sQ[0xc];
                    var t7 = sQ[0xd];
                    var t8 = sQ[0xe];
                    version_id_json_short = sQ[0xf];
                    pack = sQ[0x11];
                    price = sQ[0x10];
                    comprado = sQ[0x12];
                    premium = sQ[0x13];
                    es_premium = premium;
                    added_watermark = 0x0;
                    if (estamos_en_fotoefectos != 0x1) {
                        test_ok = '1';
                        if (test_ok) {
                            if (price > 0x0 && comprado == '0') {
                                document['getElementById']('botonFinalizar')['style']['backgroundColor'] = 'steelblue';
                                document['getElementById']('botonFinalizar')['innerHTML'] = traduccion_javascript_lurqui_comprar_por;
                                $('#botonFinalizar')['attr']('onclick', 'saveCanvasUser(\x27updateUser\x27,\x27\x27,\x27\x27,\x27lurqui\x27);');
                                document['getElementById']('botonUpdate')['style']['display'] = 'none';
                            } else {
                                document['getElementById']('botonFinalizar')['style']['backgroundColor'] = '#42414';
                                if (comprado == '1') {
                                    document['getElementById']('botonFinalizar')['style']['backgroundColor'] = 'steelblue';
                                }
                                document['getElementById']('botonUpdate')['style']['display'] = '';
                                document['getElementById']('botonFinalizar')['innerHTML'] = traduccion_javascript_descargar;
                            }
                        }
                    }
                    sB = sW;
                    is_shared();
                    if (sC == 'json_efectos') {
                        document['getElementById']('id_canvas_user')['value'] = '';
                    } else if (sC == 'json_efectos_foto') {
                        document['getElementById']('id_canvas_user')['value'] = '';
                    } else {
                        document['getElementById']('id_canvas_user')['value'] = sQ[0xe];
                    }
                    if (admin == 0x1) {
                        document['getElementById']('color1')['value'] = sZ;
                        document['getElementById']('color2')['value'] = t0;
                        document['getElementById']('color3')['value'] = t1;
                        document['getElementById']('font1')['value'] = t2;
                        document['getElementById']('font2')['value'] = t3;
                        document['getElementById']('font3')['value'] = t4;
                        document['getElementById']('imagen_sustituta1')['value'] = t5;
                        document['getElementById']('nombreTemplate')['value'] = sX;
                        document['getElementById']('categoriaTemplate')['value'] = categoriaTemplate;
                        document['getElementById']('agrupador_templates')['value'] = t8;
                    }
                    document['getElementById']('idNombreCanvas_backup')['value'] = sW;
                    document['getElementById']('idNombreCanvas_rel')['value'] = t7;
                    if (t6 != '') {
                        t6 = '/' + t6;
                    } else {
                        t6 = '/editor/json';
                    }
                    if (is_admin == 0x1) {
                        console['log']('https://editas.co/' + t6 + '/' + sB + '.json');
                    }
                    if (sB) {
                        $['getJSON'](t6 + '/' + sB + '.json?rand=' + Math['random'](), function (t9) {
                            var ta = [];
                            $['each'](t9['objects'], function (tb, tc) {
                                if (tc['id'] != null) {
                                    fuente_id = 'ini|' + tc['id'] + '|aaa';
                                    if (fuente_id['indexOf']('sizeClipTo')) {
                                        data_in_id = fuente_id['split']('|');
                                        if (data_in_id[0x1] == 'sizeClipTo') {
                                            sizeClipTo = data_in_id[0x2];
                                            console['log']('sizeClipTo' + sizeClipTo);
                                        }
                                    }
                                }
                                if (tc['fontFamily'] != null) {
                                    if (notificaciones == 0x1)
                                        console['log']('Fuentes\x20en\x20json:\x20' + tc['fontFamily']);
                                    ta['push'](tc['fontFamily']);
                                }
                            });
                            if (notificaciones == 0x1)
                                console['log'](ta);
                            var td = [];
                            $['each'](ta, function (te, tf) {
                                if ($['inArray'](tf, td) === -0x1)
                                    td['push'](tf);
                            });
                            if (notificaciones == 0x1)
                                console['log'](td);
                            var tg = 0x0;
                            if (td['length'] > 0x0) {
                                for (var th = 0x0; th < td['length']; th++) {
                                    fuente_a_cargar = td[th];
                                    var ti = new FontFaceObserver(fuente_a_cargar);
                                    ti['load']()['then'](function () {
                                        if (activar_notificaciones == 0x1)
                                            console['log'](fuente_a_cargar + '\x20is\x20available');
                                        tg++;
                                        if (td['length'] == tg) {
                                            canvas['loadFromJSON'](t9, function () {
                                                console['log']('finish\x20loadfromJSON\x20loadcanvas2\x201');
                                                $['when'](loadCanvas3(sB, sC, sD, sE, sF, sG, sH, sI))['then'](function () {
                                                    console['log']('when\x20then\x20loadcanvas3');
                                                    try {
                                                        $('#exampleModal')['modal']('hide');
                                                    } catch (tj) {
                                                    }
                                                    if (es_premium == 0x1 && added_watermark == 0x0 && is_admin != 0x1 && days_last_suscription <= 0x0 && sC == 'json_efectos' && 0x1 == 0x2) {
                                                        console['log']('Añadimos\x20watermark\x20en\x20una\x20esquina' + sC);
                                                        added_watermark = 0x1;
                                                        viewportTransform = canvas['viewportTransform'];
                                                        canvasRealWidth = canvas['width'] / viewportTransform[0x0];
                                                        watermark_width = Math['round'](ancho / 0xa);
                                                        if (watermark_width < 0x64) {
                                                            watermark_width = 0x64;
                                                        }
                                                        watermark_width2 = watermark_width * viewportTransform[0x0];
                                                        fabric['loadSVGFromURL']('/editor/user_files/2018/12/11/d/3/d37c6c3f5775437b5f3d9b5a723eadea.svg', function (tk, tl) {
                                                            var tm = fabric['util']['groupSVGElements'](tk, tl);
                                                            tm['set']({
                                                                'left': 0x0,
                                                                'top': 0x0
                                                            })['setCoords']();
                                                            canvas['add'](tm);
                                                            tm['scaleToWidth'](watermark_width2);
                                                            tm['evented'] = ![];
                                                            canvas['renderAll']();
                                                            finished_loading_json = 0x1;
                                                            canvasDemo['updateCanvasState']();
                                                        });
                                                    } else {
                                                        finished_loading_json = 0x1;
                                                        canvasDemo['updateCanvasState']();
                                                    }
                                                });
                                            });
                                        }
                                    }, function () {
                                        console['log']('Font\x20is\x20not\x20available\x20after\x20waiting\x205\x20seconds');
                                        tg++;
                                        if (td['length'] == tg) {
                                            canvas['loadFromJSON'](t9, function () {
                                                console['log']('loadFOMJSOM\x20loadcanvas2\x20\x202');
                                                loadCanvas3(sB, sC, sD, sE, sF, sG, sH, sI);
                                            });
                                        }
                                    });
                                }
                            } else {
                                canvas['loadFromJSON'](t9, function () {
                                    console['log']('Finish\x20loadFromJSON\x20loadcanvas2\x203');
                                    loadCanvas3(sB, sC, sD, sE, sF, sG, sH, sI);
                                });
                            }
                            if (sD == 'loading') {
                                console['log']('FROM\x20LOADING');
                                cambioSubCategoria('efectos2');
                            }
                            if (sD == 'redim') {
                                console['log']('FROM\x20REDIM');
                                cambioSubCategoria('efectos2');
                            }
                            if (sE) {
                                var tn = sE['split']('x');
                                createDesignNew(tn[0x0], tn[0x1]);
                            }
                            console['log']('finalizado\x20getJSON');
                        })['fail'](function (to, tp, tq) {
                            var tr = tp + ',\x20' + tq + '\x20\x20GET\x20JSON\x20\x20LINE:14999';
                            console['log']('Request\x20Failed\x2015000:\x20' + tr);
                            activate_loading('end');
                            cambioSubCategoria('efectos2');
                            if (sC == 'json_efectos_user') {
                                $('.buttonMyDesigns')['trigger']('click');
                            }
                            alert(traduccion_javascript_fallo_solving + '\x20\x20cod.\x20error:\x20' + sB);
                            $['ajax']({
                                'type': 'POST',
                                'url': '/' + trad_url_photo_editor,
                                'dataType': 'text',
                                'data': { 'error_to_send': tr },
                                'success': function (sP) {
                                },
                                'error': function (tt, tp, tv) {
                                }
                            });
                        })['always'](function () {
                            console['log']('finalizado\x20carga\x20JSON\x20.always');
                        })['done'](function () {
                            console['log']('finalizado\x20carga\x20JSON\x20.done');
                        });
                    }
                }
            },
            'error': function (tw, tx, ty) {
                alert(traduccion_javascript_error_tecnic + tx + ty);
                activateChat();
                activate_loading('end');
            },
            'complete': function (tz) {
                console['log']('ajax\x20end');
            }
        });
    }
}
function detect_img_from_database(tA, tB) {
    console['log']('tipo' + tB);
    $['ajax']({
        'type': 'POST',
        'url': '/_pruebacanvas.php',
        'dataType': 'text',
        'data': {
            'svg_or_image_url1': tA,
            'tipe': tB
        },
        'success': function (tC) {
            console['log']('FINISHED\x20DETECTING:\x20' + tC);
        },
        'error': function (tD, tE, tF) {
            alert(tE);
        }
    });
}
function loadCanvas3(tG, tH, tI, tJ, tK, tL, tM, tN) {
    ajustar_canvas(ancho, alto);
    canvas['calcOffset']();
    if (tK) {
        changeCanvasSize(tK, 0x1);
    }
    resize_canvas_automatic(tL, tM);
    canvas['forEachObject'](function (tO) {
        if (tO['get']('opacity') === null) {
            tO['set']('opacity', 0x1);
        }
        if (tO['get']('type') == 'i-text' || tO['get']('type') == 'textbox') {
            tO['text'] = replaceAll(tO['text'], '¬', '\x27');
            tO['perPixelTargetFind'] = ![];
            tO['targetFindTolerance'] = 0x0;
            if (tO['get']('selectable') == ![]) {
                tO['set']('selectable', 'true');
            }
        }
        tO['id'] = '';
    });
    activate_loading('end');
    setearPropiedadesID(0x1);
    console['log']('Finish\x20loadcanvas3');
    layersAddIds();
    console['log']('blocked_layers\x20loadcanvas3\x20:\x20' + blocked_layers);
    canvas['renderAll']();
    if (pasteTextPropertiesAfterLoading == 0x1) {
        pasteTextProperties1();
    }
}
if (suscription_type == 'premium' && days_last_suscription > 0x0) {
    var max_height_weight = 0x3e80;
} else {
    var max_height_weight = 0xbb8;
}
function checkSizesMaxWidthHeight(tP) {
    if (suscription_type == 'premium' && days_last_suscription > 0x0) {
        if (document['getElementById'](tP)['value'] > max_height_weight) {
            document['getElementById'](tP)['value'] = max_height_weight;
            alert(traduccion_javascript_exceed_size_premium + max_height_weight + 'px');
        }
    } else {
        if (document['getElementById'](tP)['value'] > max_height_weight) {
            document['getElementById'](tP)['value'] = max_height_weight;
            alert(traduccion_javascript_exceed_size + max_height_weight + 'px');
        }
    }
}
function setZoomPlusMinus() {
    var tQ = document['getElementById']('zoom_value')['innerHTML'];
    if (notificaciones == 0x1)
        console['log']('\x20zoom_old\x20' + tQ);
    zoom_new = parseInt(tQ) + parseInt(0.1);
    if (notificaciones == 0x1)
        console['log'](zoom_new);
    zoom_new = 1.1;
    setZoom2(zoom_new);
    document['getElementById']('zoom_value')['innerHTML'] = zoom_new;
}
function alignObject(tR) {
    if (canvas['getActiveObject']()) {
        canvas['calcOffset']();
        canvas['renderAll']();
        viewportTransform = canvas['viewportTransform'];
        width_canvas = canvas['width'] / viewportTransform[0x0];
        height_canvas = canvas['height'] / viewportTransform[0x0];
        var tS = canvas['getActiveObject']();
        activeObjectHeight = tS['getBoundingRect']()['height'] / viewportTransform[0x3], activeObjectWidth = tS['getBoundingRect']()['width'] / viewportTransform[0x0];
        if (tR == 'center') {
            tS['viewportCenter']();
        } else if (tR == 'centerV') {
            tS['viewportCenterV']();
        } else if (tR == 'centerH') {
            tS['viewportCenterH']();
        } else if (tR == 'left') {
            tS['left'] = 0x0;
        } else if (tR == 'right') {
            left_align_right = width_canvas - activeObjectWidth;
            tS['left'] = left_align_right;
        } else if (tR == 'top') {
            tS['top'] = 0x0;
        } else if (tR == 'bottom') {
            top_align = height_canvas - activeObjectHeight;
            tS['top'] = top_align;
        }
        tS['setCoords']();
        canvas['renderAll']();
        if (notificaciones == 0x1)
            console['log']('newZoomLevel_backup1:\x20' + newZoomLevel_backup0);
    } else {
        alert(traduccion_javascript_select_object);
    }
}
function setZoom3_new(tT, tU) {
    zoomLevel = tT;
    canvas['setZoom'](zoomLevel);
    if (document['getElementById']('customsizes1')['style']['display'] == 'none') {
        if (document['getElementById']('width_new')['value'] > max_height_weight)
            document['getElementById']('width_new')['value'] = max_height_weight;
        if (document['getElementById']('height_new')['value'] > max_height_weight)
            document['getElementById']('height_new')['value'] = max_height_weight;
        ancho = document['getElementById']('width_new')['value'];
        alto = document['getElementById']('height_new')['value'];
    } else {
        if (document['getElementById']('width_new1')['value'] > max_height_weight)
            document['getElementById']('width_new1')['value'] = max_height_weight;
        if (document['getElementById']('height_new1')['value'] > max_height_weight)
            document['getElementById']('height_new1')['value'] = max_height_weight;
        ancho = document['getElementById']('width_new1')['value'];
        alto = document['getElementById']('height_new1')['value'];
    }
    canvas['setWidth'](ancho * zoomLevel);
    canvas['setHeight'](alto * zoomLevel);
    $('#mainDIV')['width'](parseInt(ancho * zoomLevel) + 0xa);
    $('#mainDIV')['height'](parseInt(alto * zoomLevel) + 0xa);
    canvas['calcOffset']();
    canvas['renderAll']();
    ajustar_canvas(ancho, alto);
    document['getElementById']('tooltipSelectFormat')['style']['display'] = 'none';
}
function setZoom3(tV, tW) {
    if (tW == 'activate_button') {
        document['getElementById']('activate_button_zoom1')['style']['display'] = '';
        console['log']('activamos');
    } else {
        document['getElementById']('activate_button_zoom1')['style']['display'] = 'none';
        zoomLevel = tV;
        canvas['setZoom'](zoomLevel);
        if (tW == 'zoom_bar') {
            if (document['getElementById']('ancho_canvas_zoom')['value'] > max_height_weight)
                document['getElementById']('ancho_canvas_zoom')['value'] = max_height_weight;
            if (document['getElementById']('alto_canvas_zoom')['value'] > max_height_weight)
                document['getElementById']('alto_canvas_zoom')['value'] = max_height_weight;
            ancho = document['getElementById']('ancho_canvas_zoom')['value'];
            alto = document['getElementById']('alto_canvas_zoom')['value'];
            document['getElementById']('activate_button_zoom1')['style']['display'] = 'none';
        } else {
            ancho = document['getElementById']('ancho_canvas')['value'];
            alto = document['getElementById']('alto_canvas')['value'];
        }
        canvas['setWidth'](ancho * zoomLevel);
        canvas['setHeight'](alto * zoomLevel);
        $('#mainDIV')['width'](parseInt(ancho * zoomLevel) + 0xa);
        $('#mainDIV')['height'](parseInt(alto * zoomLevel) + 0xa);
        canvas['calcOffset']();
        canvas['renderAll']();
        ajustar_canvas(ancho, alto);
    }
}
function btnAddText() {
    var tX = new fabric['Text']('Testing', {
        'fontSize': 0x32,
        'fill': 'green',
        'top': 0x32,
        'left': 0x32
    });
    canvas['add'](tX);
    tX['globalCompositeOperation'] = 'source-atop';
    canvas['bringToFront'](tX);
    canvas['calcOffset']();
    canvas['renderAll']();
}
function btnAddText1() {
    fabric['Image']['fromURL']('https://fabricjs.com/assets/pug_small.jpg', function (tY) {
        var tZ = tY['set']({
            'left': 0xc8,
            'top': 0xc8,
            'width': 0x96,
            'height': 0x96
        });
        tZ['globalCompositeOperation'] = 'source-over';
        canvas['add'](tZ);
    });
    canvas['calcOffset']();
    canvas['renderAll']();
}
function addClipTo2() {
    var u0;
    fabric['Image']['fromURL']('/efectos/photo-filter-colorful-sparkles-shiny-stars.png', function (u1, u2) {
        u0 = u1;
        u0['set']({
            'left': 0x0,
            'top': 0x0,
            'selectable': ![]
        });
        canvas['add'](u0);
        canvas['renderAll']();
    });
    canvas['renderAll']();
}
function addClipTo() {
    var u3 = '/editor/user_files/89.jpg';
    var u4 = new fabric['Rect']({
        'originX': 'left',
        'originY': 'top',
        'left': 0x6b,
        'top': 0x61,
        'width': 0x12c,
        'height': 0x12c,
        'fill': 'transparent',
        'strokeWidth': 0x1,
        'selectable': ![]
    });
    u4['set']({ 'clipFor': 'pug' });
    canvas['add'](u4);
    var u5 = new Image();
    u5['onload'] = function (u6) {
        var u7 = new fabric['Image'](u5, {
            'angle': 0x0,
            'width': 0x12c,
            'height': 0x12c,
            'left': 0x6b,
            'top': 0x61,
            'scaleX': 0x1,
            'scaleY': 0x1,
            'clipName': 'pug',
            'clipTo': function (u8) {
                return _['bind'](clipByName, u7)(u8);
            }
        });
        canvas['add'](u7);
    };
    u5['src'] = u3;
    canvas['renderAll']();
}
function findByClipName(u9) {
    return _(canvas['getObjects']())['where']({ 'clipFor': u9 })['first']();
}
function degToRad(ua) {
    return ua * (Math['PI'] / 0xb4);
}
var clipByName = function (ub) {
    this['setCoords']();
    var uc = findByClipName(this['clipName']);
    var ud = 0x1 / this['scaleX'];
    var ue = 0x1 / this['scaleY'];
    ub['save']();
    var uf = -(this['width'] / 0x2) + uc['strokeWidth'];
    var ug = -(this['height'] / 0x2) + uc['strokeWidth'];
    var uh = uc['width'] - uc['strokeWidth'];
    var ui = uc['height'] - uc['strokeWidth'];
    ub['translate'](uf, ug);
    ub['scale'](ud, ue);
    ub['rotate'](degToRad(this['angle'] * -0x1));
    ub['beginPath']();
    var uj = uc instanceof fabric['Polygon'];
    if (uj) {
        var uk = [];
        for (i in uc['points'])
            uk['push']({
                'x': uc['left'] + uc['width'] / 0x2 + uc['points'][i]['x'] - this['oCoords']['tl']['x'],
                'y': uc['top'] + uc['height'] / 0x2 + uc['points'][i]['y'] - this['oCoords']['tl']['y']
            });
        ub['moveTo'](uk[0x0]['x'], uk[0x0]['y']);
        for (i = 0x1; i < uk['length']; ++i) {
            ub['lineTo'](uk[i]['x'], uk[i]['y']);
        }
        ub['lineTo'](uk[0x0]['x'], uk[0x0]['y']);
    } else
        {
            ub['rect'](uc['left'] - this['oCoords']['tl']['x'], uc['top'] - this['oCoords']['tl']['y'], uc['width'], uc['height']);
        }
    ub['closePath']();
    ub['restore']();
};
function noScaleObject() {
    var ul = canvas['getActiveObject']();
    if (notificaciones == 0x1)
        console['log'](ul['scaleX'] + '\x20\x20\x20\x20' + ul['scaleY']);
    var um = ul['width'] * ul['scaleX'];
    var un = ul['height'] * ul['scaleY'];
    ul['set']('width', um);
    ul['set']('height', un);
    ul['scaleX'] = 0x1;
    ul['scaleY'] = 0x1;
    canvas['renderAll']();
}
function setStroke(uo) {
    var up = canvas['getActiveObject']();
    if (up['get']('stroke')) {
        document['getElementById']('colorTextoStroke2')['value'] = up['get']('stroke');
        document['getElementById']('stroke_value_info')['innerHTML'] = '\x20' + uo;
    }
    var uq = up['width'] * up['scaleX'];
    var ur = up['height'] * up['scaleY'];
    up['set']('width', uq);
    up['set']('height', ur);
    up['scaleX'] = 0x1;
    up['scaleY'] = 0x1;
    up['set']('stroke', document['getElementById']('colorTextoStroke2')['value']);
    up['set']('strokeWidth', parseInt(uo));
    up['setCoords']();
    canvas['calcOffset']();
    canvas['renderAll']();
}
function unselectAllObjects() {
    canvas['discardActiveObject']()['renderAll']();
}
function rotateElement(us) {
    var ut = canvas['getActiveObject']();
    var uu = ut['get']('angle');
    ut['rotate'](parseInt(uu) + parseInt(us));
    canvas['renderAll']();
}
function groupElements(uv) {
    grabar_accion('botones_barra', 'agrupar_elementos');
    if (uv == 'agrupar') {
        if (objects == null || objects['length'] < 0x1)
            return;
        this['canvas']['discardActiveObject']();
        if (objects['length'] == 0x1) {
            this['canvas']['setActiveObject'](objects[0x0]);
        } else {
            var uw = objects['map'](function (ux) {
                return ux['set']('active', !![]);
            });
            this['selectedGroup'] = new fabric['Group'](uw, {
                'originX': 'center',
                'originY': 'center'
            });
            this['canvas']['setActiveGroup'](this['selectedGroup']['setCoords']())['renderAll']();
        }
        if (notificaciones == 0x1)
            console['log']('agrupamos');
    } else if (uv == 'desagrupar') {
        if (!canvas['getActiveObject']()) {
            return;
        }
        if (canvas['getActiveObject']()['type'] !== 'group') {
            return;
        }
        canvas['getActiveObject']()['toActiveSelection']();
        canvas['renderAll']();
        if (notificaciones == 0x1)
            console['log']('desagrupamos');
    }
}
function setIDFuncionCapa(uy) {
    var uz = canvas['getActiveObject']();
    if (uy == 'que') {
        alert(uz['get']('id'));
    } else {
        uz['set']('id', uy);
        console['log']('seteamos\x20capa\x20seleccionada\x20como\x20' + uy);
    }
}
function IMGToLienzo() {
    var uA = canvas['getActiveObject']();
    var uB = canvas['width'] + parseInt(canvas['getActiveObject']()['padding']) * 0x2;
    var uC = canvas['height'] + parseInt(canvas['getActiveObject']()['padding']) * 0x2;
    uA['scaleToHeight'](uC);
    uA['scaleToWidth'](uB);
    console['log'](canvas['getActiveObject']()['padding']);
    uA['left'] = -parseInt(canvas['getActiveObject']()['padding']);
    uA['top'] = -parseInt(canvas['getActiveObject']()['padding']);
    canvas['calcOffset']();
    canvas['renderAll']();
}
function lienzoToIMG() {
    setZoom2(0x1);
    var uD = canvas['getActiveObject']();
    var uE = uD['width'];
    var uF = uD['height'];
    uD['set']('width', uD['width']);
    uD['set']('height', uD['height']);
    uD['scaleX'] = 0x1;
    uD['scaleY'] = 0x1;
    changeCanvasSize(uE + 'x' + uF);
    uD['left'] = 0x0;
    uD['top'] = 0x0;
    canvas['calcOffset']();
    canvas['renderAll']();
}
function apilarObjetos() {
    var uG = 0x0;
    var uH = '';
    var uI = canvas['getActiveObjects']();
    var uJ = uI['getObjects']();
    uJ['forEach'](function (uK) {
        if (uK['get']('top') > uG) {
            uG = uK['get']('top');
            id_objeto = canvas['getObjects']()['indexOf'](uK);
        }
    });
    if (notificaciones == 0x1)
        console['log'](uG + '\x20' + id_objeto + '\x20' + canvas['getActiveObject'](id_objeto));
}
function alignGroup(uL) {
    if (uL == 'top' || uL == 'left') {
        left_min_value = 0xc350;
    }
    var uM = canvas['getActiveObjects']();
    var uN = uM['getObjects']();
    canvas['discardActiveGroup']();
    uN['forEach'](function (uO) {
        if (uO['get'](uL) < left_min_value)
            left_min_value = uO['get'](uL);
        if (notificaciones == 0x1)
            console['log'](uO['get'](uL));
    });
    uN['forEach'](function (uP) {
        uP['set'](uL, left_min_value);
    });
    canvas['renderAll']();
}
function textAddList(uQ) {
    if (uQ == 'bullet1') {
        document['getElementById']('cajaTexto')['value'] = '•List\x201\x0a•List\x202\x0a•List\x203';
    }
    if (uQ == 'bulletredondo') {
        document['getElementById']('cajaTexto')['value'] = '○List\x201\x0a○List\x202\x0a○List\x203';
    }
    if (uQ == 'bullet1-tick') {
        document['getElementById']('cajaTexto')['value'] = '✔List\x201\x0a○List\x202\x0a○List\x203';
    }
    addText();
}
function setCustomReplace(uR) {
    var uS = canvas['getActiveObject']();
    if (notificaciones == 0x1)
        console['log']('1:' + uR + '\x20\x20\x20\x202:' + canvas['getActiveObject']()['get']('type'));
    document['getElementById'](uR)['value'] = uS['get']('fontFamily');
    if ((uR == 'font1' || uR == 'font2' || uR == 'font3') && (canvas['getActiveObject']()['get']('type') == 'textbox' || canvas['getActiveObject']()['get']('type') == 'i-text')) {
        document['getElementById'](uR)['value'] = uS['get']('fontFamily');
    } else if (uR == 'image' && uS['get']('src')) {
        document['getElementById']('imagen_sustituta1')['value'] = uS['get']('src');
    } else {
        color = uS['get']('fill');
        document['getElementById']('color' + uR)['value'] = color;
    }
}
function changeColors(uT, uU, uV, uW) {
    canvas['forEachObject'](function (uX) {
        if (uX['get']('src')) {
            if (notificaciones == 0x1)
                console['log']('datos:\x201:' + uW + '\x20\x20\x20\x20\x202:' + uX['get']('src') + '\x20\x20\x20\x20\x203:' + document['getElementById']('imagen_sustituta1')['value']);
        }
        if (uW == 'changeFonts') {
            if ((uX['get']('type') == 'i-text' || uX['get']('type') == 'textbox') && document['getElementById']('font1')['value'] == uX['get']('fontFamily')) {
                uX['set']('fontFamily', uT);
                if (notificaciones == 0x1)
                    console['log']('Fuente\x20que\x20sustituimos' + uX['get']('fontFamily') + '\x20\x20\x20por\x20\x20' + uT);
                canvas['renderAll']();
            }
            if ((uX['get']('type') == 'i-text' || uX['get']('type') == 'textbox') && document['getElementById']('font2')['value'] == uX['get']('fontFamily')) {
                uX['set']('fontFamily', uU);
                if (notificaciones == 0x1)
                    console['log']('Fuente\x20que\x20sustituimos' + uX['get']('fontFamily') + '\x20\x20\x20por\x20\x20' + uU);
                canvas['renderAll']();
            }
            if ((uX['get']('type') == 'i-text' || uX['get']('type') == 'textbox') && document['getElementById']('font3')['value'] == uX['get']('fontFamily')) {
                uX['set']('fontFamily', uV);
                if (notificaciones == 0x1)
                    console['log']('Fuente\x20que\x20sustituimos' + uX['get']('fontFamily') + '\x20\x20\x20por\x20\x20' + uT);
                canvas['renderAll']();
            }
        } else {
            if (uX['get']('src') == document['getElementById']('imagen_sustituta1')['value'] && uW != '') {
                uX['setSrc'](uW, function () {
                    canvas['renderAll']();
                    uX['setCoords']();
                });
                canvas['renderAll']();
                document['getElementById']('imagen_sustituta1')['value'] = uW;
                if (notificaciones == 0x1)
                    console['log']('aaaaaaaaaaaaaaaaaaaaa' + uW);
            }
            if (uX['get']('fill') == document['getElementById']('color1')['value']) {
                uX['set']('fill', uT);
                document['getElementById']('color1')['value'] = uT;
            }
            if (uX['get']('fill') == document['getElementById']('color2')['value']) {
                uX['set']('fill', uU);
                document['getElementById']('color2')['value'] = uU;
            }
            if (uX['get']('fill') == document['getElementById']('color3')['value']) {
                uX['set']('fill', uV);
                document['getElementById']('color3')['value'] = uV;
            }
        }
    });
    canvas['calcOffset']();
    canvas['renderAll']();
}
function RecalcularCanvas() {
    var uY = canvas['getActiveObject']();
    if (uY) {
        uY['setCoords']();
    }
    canvas['calcOffset']();
    canvas['renderAll']();
}
function addTriangle() {
    grabar_accion('add_element', 'triangle');
    var uZ = {
            'x': 0x32,
            'y': 0x32
        }, v0 = {
            'x': 0x28,
            'y': 0x3c
        }, v1 = {
            'x': 0x3c,
            'y': 0x3c
        };
    var v2 = new fabric['Polygon']([
        uZ,
        v0,
        v1
    ]);
    canvas['add'](v2);
    v2['scaleToWidth'](0xfa);
    canvas['calcOffset']();
    canvas['renderAll']();
}
$('#workspace-section')['click'](function () {
    $('.userBlock')['removeClass']('activeOptionsUser');
    if (navigator['userAgent']['toLowerCase']()['indexOf']('firefox') > -0x1) {
        console['log']('we\x20don\x27t\x20deselect\x20the\x20object\x20in\x20firefox\x20becouse\x20fail.\x20We\x20have\x20to\x20fix\x20it');
    } else {
        var v3 = canvas['getPointer'](event['e']);
        var v4 = v3['x'] * zoomLevel1;
        var v5 = v3['y'] * zoomLevel1;
        if (v4 < 0x0 || v5 < 0x0 || v4 > canvas['width'] || v5 > canvas['height']) {
            unselectAllObjects();
        }
        if (notificaciones == 0x1)
            console['log']('\x20\x20\x20\x20\x20\x20');
        if (notificaciones == 0x1)
            console['log'](Math['floor'](v5));
        if (notificaciones == 0x1)
            if (notificaciones == 0x1)
                console['log'](zoomLevel1);
    }
});
function rellenar_div_texturas() {
    $['ajax']({
        'type': 'POST',
        'url': '/devuelveAjaxEditorNEW.php',
        'dataType': 'text',
        'data': { 'rellena_div_texturas': 'rellenar' },
        'success': function (v6) {
            var v6 = v6;
            document['getElementById']('div_texturas')['innerHTML'] = v6;
        },
        'error': function (v8, v9, va) {
            alert(v9);
        }
    });
}
function traducir(vb) {
    document['getElementById']('botonTraducir')['style']['display'] = 'none';
    document['getElementById']('botonTraducir2')['style']['display'] = 'none';
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'dataType': 'text',
        'data': {
            'text_traducir': document['getElementById']('currentSelectedText')['value'],
            'traducir': 0x1,
            'origenLang': vb
        },
        'success': function (vc) {
            var vc = vc;
            document['getElementById']('currentSelectedText')['value'] = vc;
            document['getElementById']('botonTraducir')['style']['display'] = '';
            document['getElementById']('botonTraducir2')['style']['display'] = '';
        },
        'error': function (ve, vf, vg) {
            alert(vf);
        }
    });
}
var property = new Array();
function copyPasteFormat(vh) {
    activeObject = canvas['getActiveObject']();
    if (vh == 'copy') {
        textProperties['forEach'](function (vi) {
            property[vi] = activeObject['get'](vi);
            if (notificaciones == 0x1)
                console['log'](activeObject['get'](vi));
        });
    } else if (vh == 'paste') {
        textProperties['forEach'](function (vj) {
            activeObject['set'](vj, property[vj]);
            if (notificaciones == 0x1)
                console['log'](property[vj]);
        });
    }
}
function groupElements(vk) {
    if (vk == 'agrupar') {
        if (objects == null || objects['length'] < 0x1)
            return;
        this['canvas']['discardActiveObject']();
        if (objects['length'] == 0x1) {
            this['canvas']['setActiveObject'](objects[0x0]);
        } else {
            var vl = objects['map'](function (vm) {
                return vm['set']('active', !![]);
            });
            this['selectedGroup'] = new fabric['Group'](vl, {
                'originX': 'center',
                'originY': 'center'
            });
            this['canvas']['setActiveGroup'](this['selectedGroup']['setCoords']())['renderAll']();
        }
        if (notificaciones == 0x1)
            console['log']('agrupamos');
    } else if (vk == 'desagrupar') {
        if (!canvas['getActiveObject']()) {
            return;
        }
        if (canvas['getActiveObject']()['type'] !== 'group') {
            return;
        }
        canvas['getActiveObject']()['toActiveSelection']();
        canvas['renderAll']();
        if (notificaciones == 0x1)
            console['log']('desagrupamos');
    }
}
function noScaleObject() {
    var vn = canvas['getActiveObject']();
    if (notificaciones == 0x1)
        console['log'](vn['scaleX'] + '\x20\x20\x20\x20' + vn['scaleY']);
    var vo = vn['width'] * vn['scaleX'];
    var vp = vn['height'] * vn['scaleY'];
    vn['set']('width', vo);
    vn['set']('height', vp);
    vn['scaleX'] = 0x1;
    vn['scaleY'] = 0x1;
    canvas['renderAll']();
}
function setStroke(vq) {
    var vr = canvas['getActiveObject']();
    if (vr['get']('stroke'))
        document['getElementById']('colorTextoStroke2')['value'] = vr['get']('stroke');
    document['getElementById']('stroke_value_info')['innerHTML'] = '\x20' + vq;
    var vs = vr['width'] * vr['scaleX'];
    var vt = vr['height'] * vr['scaleY'];
    vr['set']('width', vs);
    vr['set']('height', vt);
    vr['scaleX'] = 0x1;
    vr['scaleY'] = 0x1;
    vr['set']('stroke', document['getElementById']('colorTextoStroke2')['value']);
    vr['set']('strokeWidth', parseInt(vq));
    vr['setCoords']();
    canvas['calcOffset']();
    canvas['renderAll']();
}
function unselectAllObjects() {
    canvas['discardActiveObject']()['renderAll']();
}
function rotateElement(vu) {
    var vv = canvas['getActiveObject']();
    var vw = vv['get']('angle');
    vv['rotate'](parseInt(vw) + parseInt(vu));
    canvas['renderAll']();
}
function addClipTo() {
    var vx = '/editor/user_files/89.jpg';
    var vy = new fabric['Rect']({
        'originX': 'left',
        'originY': 'top',
        'left': 0x6b,
        'top': 0x61,
        'width': 0x12c,
        'height': 0x12c,
        'fill': 'transparent',
        'strokeWidth': 0x1,
        'selectable': ![]
    });
    vy['set']({ 'clipFor': 'pug' });
    canvas['add'](vy);
    var vz = new Image();
    vz['onload'] = function (vA) {
        var vB = new fabric['Image'](vz, {
            'angle': 0x0,
            'width': 0x12c,
            'height': 0x12c,
            'left': 0x6b,
            'top': 0x61,
            'scaleX': 0x1,
            'scaleY': 0x1,
            'clipName': 'pug',
            'clipTo': function (vC) {
                return _['bind'](clipByName, vB)(vC);
            }
        });
        canvas['add'](vB);
    };
    vz['src'] = vx;
    canvas['renderAll']();
}
function addClipTo2() {
    var vD;
    fabric['Image']['fromURL']('/efectos/photo-filter-colorful-sparkles-shiny-stars.png', function (vE, vF) {
        vD = vE;
        vD['set']({
            'left': 0x0,
            'top': 0x0,
            'selectable': ![]
        });
        canvas['add'](vD);
        canvas['renderAll']();
    });
    canvas['renderAll']();
}
function alignObjectGroup(vG) {
    if (canvas['getActiveObjects']()) {
        x = 0x0;
        var vH = new Array();
        ;
        canvas['getActiveObjects']()['forEach'](function (vI) {
            x++;
            var vJ = canvas['getObjects']()['indexOf'](vI);
            vH[x] = vJ;
        });
    } else if (canvas['getActiveObject']())
        {
        }
    unselectAllObjects();
    group = new fabric['Group']();
    while (x > 0x0) {
        capa = vH[x];
        if (notificaciones == 0x1)
            console['log'](capa);
        x--;
        canvas['setActiveObject'](canvas['item'](capa));
        alignObject('centerH');
        group['add'](canvas['item'](capa));
    }
    canvas['setActiveObject'](group);
    canvas['add'](group);
    canvas['renderAll']();
}
function distributeObjects(vK) {
    var vL = new Array();
    var vM = new Array();
    if (vK == 'vertical') {
        var vN = 0x0;
        var vO = new Array();
        canvas['getActiveObjects']()['forEach'](function (vP) {
            vN++;
            id_selected = canvas['getObjects']()['indexOf'](vP);
            vO[vN] = id_selected;
        });
        var vQ = vN;
        var vR = vN;
        unselectAllObjects();
        var vS = 0x2710;
        while (vN > 0x0) {
            capa = vO[vN];
            vM[capa] = canvas['item'](capa)['get']('top');
            vN--;
        }
        var vT = [];
        for (var vU in vM) {
            vT['push'](vU);
        }
        vT['sort'](function (vV, vW) {
            var vX = vM[vV];
            var vY = vM[vW];
            return vX < vY ? -0x1 : vX > vY ? 0x1 : 0x0;
        });
        for (var vZ = 0x0; vZ < vT['length']; ++vZ) {
            var vU = vT[vZ];
            var w1 = vM[vU];
        }
        var w2 = 0x0;
        var w3 = 0x0;
        var w4 = 0x0;
        vR = vR;
        z = 0x1;
        vT['forEach'](function (w5) {
            if (z == 0x1) {
                w2 = canvas['item'](w5)['get']('top');
                w3 = w3 + canvas['item'](w5)['get']('height');
                suma_altura_primero = canvas['item'](w5)['get']('height');
            } else if (z == vR) {
                w4 = canvas['item'](w5)['get']('top');
            } else {
                w3 = w3 + canvas['item'](w5)['get']('height');
                console['log']('\x0aelemento\x20de\x20en\x20medio' + w5 + '\x20height:' + canvas['item'](w5)['get']('height') + '\x20' + canvas['item'](w5)['get']('scaleX'));
            }
            z++;
        });
        var w6 = vR - 0x1;
        var w7 = (w4 - w2 - w3) / w6;
        var w8 = w4 - w3;
        var w7 = w8 / w6;
        console['log']('espacio_entre_elementos' + w7 + '\x0aespacio_en_blanco:\x20' + w8 + '\x0anumero_espacios:' + w6 + '\x0ainicio_distribucion\x20' + w2 + '\x0asuma_alturas_otros' + w3 + '\x0afin_distribucion' + w4 + '\x0aespacio_entre_elementos' + w7);
        z = 0x1;
        var wa = parseInt(w2) + parseInt(w7) + parseInt(suma_altura_primero);
        console['log']('siguiente_elemento:\x20\x20\x20' + wa);
        vT['forEach'](function (wb) {
            if (z == 0x1) {
                console['log']('no\x20hacemos\x20nada');
            } else if (z == vR) {
                console['log']('no\x20hacemos\x20nada');
            } else {
                console['log'](wb + ':\x20siguiente_elemento:' + wa + '\x20espacio_entre_elementos:' + w7);
                canvas['item'](wb)['set']('top', wa)['setCoords']();
                wa = parseInt(wa) + parseInt(w7) + parseInt(canvas['item'](wb)['get']('height'));
            }
            z++;
        });
        canvas['renderAll']();
    }
}
function elementProperties() {
    var wc = canvas['getActiveObject']();
    console['log'](wc['height']);
}
function alignObjectGroup2(wd) {
    if (wd == 'middle' || wd == 'bottom') {
        var we = canvas['getActiveObjects']();
        if (we) {
            canvas['getActiveObjects']()['forEach'](function (wf) {
                var wg = wf['getBoundingRect']()['width'];
                var wh = wf['getBoundingRect']()['height'];
                if (wd == 'middle') {
                    wf['set']({
                        'left': 0x0 - wg / 0x2,
                        'originX': 'left'
                    });
                    wf['setCoords']();
                    canvas['renderAll']();
                }
            });
        }
    } else {
        var wi = 0x0;
        var wj = new Array();
        canvas['getActiveObjects']()['forEach'](function (wk) {
            wi++;
            id_selected = canvas['getObjects']()['indexOf'](wk);
            wj[wi] = id_selected;
        });
        var wl = wi;
        unselectAllObjects();
        var wm = 0x2710;
        while (wi > 0x0) {
            capa = wj[wi];
            wi--;
            if (canvas['item'](capa)['get'](wd) < wm)
                wm = canvas['item'](capa)['get'](wd);
        }
        while (wl > 0x0) {
            capa = wj[wl];
            if (notificaciones == 0x1)
                console['log'](capa);
            wl--;
            canvas['item'](capa)['set'](wd, wm);
        }
    }
    canvas['renderAll']();
}
var TextPropertiesCopy = new Array();
function copyTextProperties() {
    for (var wn = 0x0; wn < textProperties['length']; wn++) {
        var wo = textProperties[wn];
        TextPropertiesCopy[wo] = canvas['getActiveObject']()['get'](wo);
    }
}
function pasteTextProperties() {
    for (var wp = 0x0; wp < TextPropertiesCopy['length']; wp++) {
        var wq = textProperties[wp];
        text2['set'](wq, TextPropertiesCopy[wq]);
    }
}
function insertEmoji(wr) {
    addRuta('/img/emoji/twemoji-gh-pages/svg/' + wr + '.svg');
}
function lockMovement() {
    if (canvas['getActiveObject']()) {
        var ws = canvas['getActiveObject']();
        for (var wt = 0x0; wt < blocked_layers['length']; wt++) {
            if (blocked_layers[wt] === ws['get']('id')) {
                blocked_layers['splice'](wt, 0x1);
            }
        }
        for (var wt = 0x0; wt < blocked_layers_not['length']; wt++) {
            if (blocked_layers_not[wt] === ws['get']('id')) {
                blocked_layers_not['splice'](wt, 0x1);
            }
        }
        blocked_layers['push'](ws['id']);
        ws['set']('lockMovementX', !![]);
        ws['set']('lockMovementY', !![]);
        try {
            document['getElementById']('lock_element_a')['style']['display'] = 'none';
            document['getElementById']('unlock_element_a')['style']['display'] = '';
        } catch (wv) {
        }
        canvas['renderAll']();
        console['log']('locked');
    } else {
        alert(traduccion_javascript_select_object);
    }
}
function unlockMovement() {
    console['log']('unlock1');
    if (canvas['getActiveObject']()) {
        console['log']('unlock1DONE');
        var ww = canvas['getActiveObject']();
        ww['set']('lockMovementX', ![]);
        ww['set']('lockMovementY', ![]);
        var ww = canvas['getActiveObject']();
        console['log']('what\x20inside\x20blocked_layers?');
        for (var wy = 0x0; wy < blocked_layers['length']; wy++) {
            console['log'](blocked_layers[wy]);
            if (blocked_layers[wy] === ww['get']('id')) {
                blocked_layers['splice'](wy, 0x1);
                if (activar_notificaciones == 0x1)
                    console['log']('borramos\x20' + wy + '\x20de\x20blocked_layers');
            }
        }
        if (activar_notificaciones == 0x1)
            console['log']('what\x20inside\x20blocked_layers_not?');
        for (var wy = 0x0; wy < blocked_layers_not['length']; wy++) {
            console['log'](blocked_layers_not[wy]);
            if (blocked_layers_not[wy] === ww['get']('id')) {
                blocked_layers_not['splice'](wy, 0x1);
                if (activar_notificaciones == 0x1)
                    console['log']('borramos\x20' + wy + '\x20de\x20blocked_layers_not');
            }
        }
        if (activar_notificaciones == 0x1)
            console['log']('blocked_layers_not:\x20' + blocked_layers_not);
        if (activar_notificaciones == 0x1)
            console['log']('blocked_layers:\x20' + blocked_layers);
        blocked_layers_not['push'](ww['id']);
        console['log']('blocked_layers_not2:\x20' + blocked_layers_not);
        console['log']('blocked_layers2:\x20' + blocked_layers);
        console['log'](ww['get']('id'));
        try {
            document['getElementById']('lock_element_a')['style']['display'] = '';
            document['getElementById']('unlock_element_a')['style']['display'] = 'none';
            document['getElementById']('unlock_element_a2')['style']['display'] = 'none';
        } catch (wA) {
        }
        canvas['renderAll']();
    }
}
var ArrayPropertiesText = [
    'fill',
    'stroke',
    'strokeWidth',
    'strokeDashArray',
    'strokeLineCap',
    'strokeDashOffset',
    'strokeLineJoin',
    'strokeMiterLimit',
    'opacity',
    'shadow',
    'backgroundColor',
    'fillRule',
    'paintFirst',
    'transformMatrix',
    'skewX',
    'skewY',
    'text',
    'fontSize',
    'fontWeight',
    'fontFamily',
    'fontStyle',
    'lineHeight',
    'underline',
    'overline',
    'linethrough',
    'textAlign',
    'textBackgroundColor',
    'charSpacing'
];
var ArrayPropertiesTextValues = new Array();
var pasteTextPropertiesAfterLoading = 0x0;
function copyTextProperties() {
    ArrayPropertiesText['forEach'](function (wB) {
        if (wB) {
            console['log'](wB + '\x20' + canvas['getActiveObject']()['get'](wB));
            ArrayPropertiesTextValues[wB] = canvas['getActiveObject']()['get'](wB);
        }
    });
    pasteTextPropertiesAfterLoading = 0x1;
    loadCanvas2('1iulu1', 'json_efectos', '', '', '', '', '', '');
    canvas['renderAll']();
}
function pasteTextProperties1() {
    zz = 0x1;
    canvas['forEachObject'](function (wC) {
        console['log']('Entramos\x20foreach\x20de\x20objetos' + zz);
        if (0x1 == 0x1) {
            ArrayPropertiesText['forEach'](function (wD) {
                console['log']('Entramos\x20en\x20el\x20' + zz + '\x20elemento\x20change:\x20' + wD);
                wC['set'](wD, ArrayPropertiesTextValues[wD]);
            });
            wC['set']('strokeUniform', !![]);
            wC['scaleToWidth'](canvas['width'] / 0x2);
        }
        zz++;
        wC['centerV']();
        wC['centerH']();
    });
    pasteTextPropertiesAfterLoading = 0x0;
    $('#categoriaTemplate')['val']('designCombi');
    canvas['renderAll']();
    saveCanvas('nuevo');
}
function addImage(wE, wF, wG) {
    fabric['Image']['fromURL'](wE, function (wH) {
        wH['set']({
            'left': 0x64,
            'top': 0x64,
            'angle': 0x0
        })['scale'](0x0)['setCoords']();
        canvas['add'](wH);
    });
}
;
function cambioFontFamilyResp(wI, wJ, wK) {
    closeAllTooltips();
    grabar_accion('templates', 'change_text_family');
    var wL = canvas['getActiveObject']();
    if (canvas['getActiveObjects']()) {
        var wM = canvas['getActiveObjects']();
    }
    console['log']('aaaa' + $('#insertTextUpdate')['value']);
    if ($('#insertTextUpdate')['length'] > 0x0) {
        insertTextUpdate = document['getElementById']('insertTextUpdate')['checked'];
    } else {
        insertTextUpdate = ![];
    }
    if (wK == 'change') {
        insertTextUpdate = ![];
    }
    if (wM['length'] > 0x0 && insertTextUpdate == ![]) {
        var wN = canvas['getActiveObjects']();
        wN['forEach'](function (wO) {
            console['log'](wO['get']('type'));
            var wP = wI;
            if (typeof document['getElementById']('fuente_por_defecto') !== 'undefined' && document['getElementById']('fuente_por_defecto') != null) {
                document['getElementById']('fuente_por_defecto')['style']['marginTop'] = '0px\x20!important';
                document['getElementById']('fuente_por_defecto')['src'] = '/editor/ttf/thumbs/' + wI + '.png';
            }
            document['getElementById']('valorFontFamily')['value'] = wP;
            var wQ = new FontFaceObserver(wP);
            wQ['load']()['then'](function () {
                if (!wO['isEditing']) {
                    if (!wO)
                        return;
                    if (wO['styles']) {
                        var wR = wO['styles'];
                        for (var wS in wR) {
                            for (var wT in wR[wS]) {
                                if ('fontFamily' in wR[wS][wT]) {
                                    delete wR[wS][wT]['fontFamily'];
                                }
                            }
                        }
                    }
                }
                setActiveStyle('fontFamily', wP);
                wO['set']('fontFamily', wP)['setCoords']();
                canvas['renderAll']();
                canvas['renderAll']();
            })['catch'](function (wU) {
                send_error_to_log(wU + 'error_code66');
                alert(traduccion_javascript_error_tecnic + wP);
                activateChat();
            });
            wL['setCoords']();
            canvas['calcOffset']();
            canvas['renderAll']();
        });
        canvas['renderAll']();
        return ![];
    } else if (canvas['getActiveObject']() && (canvas['getActiveObject']()['get']('type') == 'i-text' || canvas['getActiveObject']()['get']('type') == 'textbox') && insertTextUpdate == ![]) {
        console['log']('cambiamos\x20el\x20texto1');
        if (wI) {
            var wV = wI;
            if (typeof document['getElementById']('fuente_por_defecto') !== 'undefined' && document['getElementById']('fuente_por_defecto') != null) {
                document['getElementById']('fuente_por_defecto')['style']['marginTop'] = '0px\x20!important';
                document['getElementById']('fuente_por_defecto')['src'] = '/editor/ttf/thumbs/' + wI + '.png';
            }
        } else {
            var wW = document['getElementById']('selectOpt');
            var wV = wW['options'][wW['selectedIndex']]['value'];
            document['getElementById']('inputFuente')['value'] = wV;
        }
        var wL = canvas['getActiveObject']();
        document['getElementById']('valorFontFamily')['value'] = wV;
        loadAndUse(wV);
        console['log']('cambiamos\x20el\x20texto');
        wL['setCoords']();
        canvas['calcOffset']();
        canvas['renderAll']();
    } else {
        console['log']('11We\x20load\x20font:\x20' + wI + '\x20' + wZ);
        var wZ = new FontFaceObserver(wI);
        if (typeof texto == 'undefined') {
            texto = trad_doble_clic_editarme;
        }
        if (texto == '') {
            texto = trad_doble_clic_editarme;
        }
        viewportTransform = canvas['viewportTransform'];
        width_canvas = canvas['width'] / viewportTransform[0x0];
        height_canvas = canvas['height'] / viewportTransform[0x0];
        colores = [
            '#000000',
            '#F7B19C',
            '#57D0FC',
            '#FB5379',
            '#FCDA86',
            '#527CFA',
            '#59FCAC',
            '#8266F7',
            '#FF6700',
            '#2BF9FE',
            '#FC0E1C',
            '#FFFD38',
            '#FD29FC',
            '#45FA54',
            '#1024FB',
            '#000000'
        ];
        color = colores[Math['floor'](Math['random']() * colores['length'])];
        ancho_resta = 0x1e;
        width_box = canvas['width'] / document['getElementById']('zoom_value')['innerHTML'] - canvas['width'] / document['getElementById']('zoom_value')['innerHTML'] / 0x64 * ancho_resta;
        viewportTransform = canvas['viewportTransform'];
        canvasRealWidth = canvas['width'] / viewportTransform[0x0];
        fontSize = canvasRealWidth / 0x64 * 0x6;
        wZ['load']()['then'](function () {
            console['log']('11We\x20load\x20font:\x20' + wV);
            var x0 = new fabric['Textbox'](trad_doble_clic_editarme, {
                'width': width_box,
                'fontFamily': wI,
                'top': -0x1f4,
                'left': canvas['width'] / document['getElementById']('zoom_value')['innerHTML'] / 0x64 * 0x5,
                'fontSize': fontSize,
                'textAlign': 'center',
                'fill': color
            });
            canvas['add'](x0);
            canvas['setActiveObject'](x0);
            var x1 = canvas['viewportTransform'];
            activeObjectWidth = x0['getBoundingRect']()['width'] / x1[0x3];
            alignObject('centerH');
            canvas['renderAll']();
            if (posicion_bottom != 0x0) {
                if (posicion_bottom > height_canvas - 0x73) {
                    posicion_bottom = 0x64;
                }
                x0['set']('top', posicion_bottom);
            } else {
                x0['set']('top', 0x32);
            }
            posicion_bottom = x0['get']('top') + x0['get']('height') * x0['scaleX'] + 0x32;
            canvas['setActiveObject'](x0);
            x0['animate']('top', posicion_bottom, {
                'duration': 0x3e8,
                'onChange': canvas['renderAll']['bind'](canvas),
                'onComplete': function () {
                    canvas['renderAll']();
                    canvasDemo['updateCanvasState']();
                },
                'easing': fabric['util']['ease']['easeOutBounce']
            });
        });
    }
}
function addElementShapes(x2) {
    if (x2 == 'circle') {
        var x3 = new fabric['Circle']({
            'radius': 0x28,
            'id': document['getElementById']('numero_recorte')['value'],
            'fill': document['getElementById']('colorGeneral')['value'],
            'left': 0x64,
            'top': 0x64,
            'opacity': 0x1
        });
        canvas['add'](x3)['setActiveObject'](x3);
    }
}
function addElement(x4, x5) {
    if (document['getElementById']('colorGeneral')['value'] == '#000000') {
        colores = [
            '#000000',
            '#F7B19C',
            '#57D0FC',
            '#FB5379',
            '#FCDA86',
            '#527CFA',
            '#59FCAC',
            '#8266F7',
            '#FF6700',
            '#2BF9FE',
            '#FC0E1C',
            '#FFFD38',
            '#FD29FC',
            '#45FA54',
            '#1024FB',
            '#000000'
        ];
        color = colores[Math['floor'](Math['random']() * colores['length'])];
    } else {
        color = document['getElementById']('colorGeneral')['value'];
    }
    grabar_accion('add_element', x4);
    viewportTransform = canvas['viewportTransform'];
    canvasRealWidth = canvas['width'] / viewportTransform[0x0];
    ancho_alto = canvasRealWidth / 0x2;
    ancho_alto_radius = canvasRealWidth / 0x4;
    left_top = canvasRealWidth / 0x14;
    ancho_shape = canvasRealWidth / 0x28;
    document['getElementById']('numero_recorte')['value'] = parseInt(document['getElementById']('numero_recorte')['value']) + 0x1;
    if (document['getElementById']('numero_recorte')['value'] > 0x4 && x5 == 0x1) {
        alert('solo\x20puedes\x20añadir\x204\x20recortes\x20a\x20la\x20imagen');
    } else {
        if (x4 == 'circle') {
            var x6 = new fabric['Circle']({
                'radius': ancho_alto_radius,
                'fill': document['getElementById']('colorGeneral')['value'],
                'left': left_top,
                'top': left_top,
                'fill': color,
                'opacity': 0x1
            });
            canvas['add'](x6)['setActiveObject'](x6);
            canvas['setActiveObject'](x6);
            alignObject('centerH');
            alignObject('centerV');
            canvas['renderAll']();
        }
        if (x4 == 'line') {
            canvas['add'](new fabric['Line']([
                0x0,
                0x14,
                0x258,
                0x14
            ], {
                'strokeDashArray': [
                    0x5,
                    0x5
                ],
                'stroke': document['getElementById']('colorGeneral')['value']
            }));
        }
        if (x4 == 'triangle') {
            var x7 = {
                    'x': 0x32,
                    'y': 0x32
                }, x8 = {
                    'x': 0x28,
                    'y': 0x3c
                }, x9 = {
                    'x': 0x3c,
                    'y': 0x3c
                };
            var xa = new fabric['Polygon']([
                x7,
                x8,
                x9
            ]);
            canvas['add'](xa);
            xa['set']('fill', color);
            xa['scaleToWidth'](ancho_alto / 0x5);
            console['log'](ancho_alto);
            xa['animate']('top', left_top, {
                'duration': 0x32,
                'onChange': canvas['renderAll']['bind'](canvas),
                'onComplete': function () {
                    canvas['renderAll']();
                    canvasDemo['updateCanvasState']();
                },
                'easing': fabric['util']['ease']['easeOutBounce']
            });
            canvas['setActiveObject'](xa);
            alignObject('centerH');
            alignObject('centerV');
            canvas['renderAll']();
            canvas['calcOffset']();
            canvas['renderAll']();
        }
        if (x4 == 'square') {
            var xb = new fabric['Rect']({
                'width': ancho_alto,
                'height': ancho_alto,
                'fill': color,
                'left': left_top,
                'fill': color,
                'top': left_top,
                'opacity': 0x1
            });
            canvas['add'](xb)['setActiveObject'](xb);
            canvas['setActiveObject'](xb);
            alignObject('centerH');
            alignObject('centerV');
            canvas['renderAll']();
        }
        if (x4 == 'heart') {
            fabric['Image']['fromURL']('pruebas/fabric/img/heart.png', function (xc) {
                canvas['add'](xc['set']({
                    'id': document['getElementById']('numero_recorte')['value'],
                    'left': 0x0,
                    'top': 0x0,
                    'angle': 0x0,
                    'opacity': 0.9
                })['scale'](0.25))['setActiveObject'](xc);
            });
        }
        if (x4 == 'face') {
            fabric['Image']['fromURL']('pruebas/fabric/img/face_oval.png', function (xd) {
                canvas['add'](xd['set']({
                    'id': document['getElementById']('numero_recorte')['value'],
                    'left': left_top,
                    'top': left_top,
                    'angle': 0x0,
                    'opacity': 0.9
                })['scale'](0.25))['setActiveObject'](xd);
            });
        }
        if (x4 == 'circleShape') {
            var xe = new fabric['Circle']({
                'radius': ancho_alto_radius,
                'fill': 'transparent',
                'opacity': 0x1,
                'top': left_top,
                'stroke': color,
                'strokeWidth': ancho_shape,
                'left': left_top
            });
            canvas['add'](xe);
            canvas['setActiveObject'](xe);
            alignObject('centerH');
            alignObject('centerV');
            canvas['renderAll']();
        }
        if (x4 == 'squareShape') {
            var xf = new fabric['Rect']({
                'left': left_top,
                'top': left_top,
                'width': ancho_alto,
                'height': ancho_alto,
                'fill': 'transparent',
                'stroke': color,
                'strokeWidth': ancho_shape,
                'selectable': !![]
            }, { 'tipo': 'foobar' });
            canvas['add'](xf);
            canvas['setActiveObject'](xf);
            alignObject('centerH');
            alignObject('centerV');
            canvasDemo['updateCanvasState']();
            canvas['renderAll']();
        }
        var xg = document['getElementById']('numero_recorte')['value'];
        document['getElementById']('id_seleccionado')['value'] = xg;
        if (canvas['getActiveObject']()) {
            try {
                document['getElementById']('left' + xg)['value'] = canvas['getActiveObject']()['get']('left');
                document['getElementById']('top' + xg)['value'] = canvas['getActiveObject']()['get']('top');
                document['getElementById']('width' + xg)['value'] = canvas['getActiveObject']()['get']('width');
                document['getElementById']('height' + xg)['value'] = canvas['getActiveObject']()['get']('height');
            } catch (xh) {
                send_error_to_log(xh + 'error_code38');
            }
        }
    }
    canvas['renderAll']();
}
function addCuadradoShape() {
}
function addTextBox(xi, xj) {
    grabar_accion('templates', 'add_text');
    var xk = document['getElementById']('inputFuente')['value'];
    if (document['getElementById']('valorFontFamily')['value']) {
        var xk = document['getElementById']('valorFontFamily')['value'];
    }
    fontSize = 0x32;
    ancho_resta = 0xa;
    top_text = 0xf;
    viewportTransform = canvas['viewportTransform'];
    canvasRealWidth = canvas['width'] / viewportTransform[0x0];
    if (xj == 'title') {
        fontSize = canvasRealWidth / 0x64 * 0xa;
        ancho_resta = 0x1e;
        top_text = 0x5;
        trad_doble_clic_editarme = 'Your\x20title';
    } else if (xj == 'subtitle') {
        fontSize = canvasRealWidth / 0x64 * 0x6;
        top_text = 0x23;
        ancho_resta = 0x32;
        trad_doble_clic_editarme = 'Here\x20your\x20subtitle';
    } else if (xj == 'sometext') {
        fontSize = canvasRealWidth / 0x64 * 0x3;
        ancho_resta = 0x1e;
        top_text = 0x3c;
        trad_doble_clic_editarme = 'You\x20can\x20write\x20some\x20cool\x20texts\x20here\x20\x0a\x20enlarge\x20the\x20box\x20to\x20make\x20the\x20line\x20larger';
    }
    var xm = new FontFaceObserver(xk);
    console['log'](document['getElementById']('zoom_value')['innerHTML']);
    top_text = canvas['height'] / document['getElementById']('zoom_value')['innerHTML'] / 0x64 * top_text;
    width_box = canvas['width'] / document['getElementById']('zoom_value')['innerHTML'] - canvas['width'] / document['getElementById']('zoom_value')['innerHTML'] / 0x64 * ancho_resta;
    xm['load']()['then'](function () {
        console['log']('11We\x20load\x20font:\x20' + xk);
        var xn = new fabric['Textbox'](trad_doble_clic_editarme, {
            'width': width_box,
            'fontFamily': xk,
            'top': -0x1f4,
            'left': canvas['width'] / document['getElementById']('zoom_value')['innerHTML'] / 0x64 * 0x5,
            'fontSize': fontSize,
            'textAlign': 'center'
        });
        canvas['add'](xn);
        canvas['setActiveObject'](xn);
        var xo = canvas['viewportTransform'];
        activeObjectWidth = xn['getBoundingRect']()['width'] / xo[0x3];
        alignObject('centerH');
        canvas['renderAll']();
        xn['animate']('top', top_text, {
            'duration': 0x4b0,
            'onChange': canvas['renderAll']['bind'](canvas),
            'onComplete': function () {
                canvas['renderAll']();
                canvasDemo['updateCanvasState']();
            },
            'easing': fabric['util']['ease']['easeOutBounce']
        });
    });
}
function setZoomPlusMinus() {
    var xp = document['getElementById']('zoom_value')['innerHTML'];
    console['log']('\x20zoom_old\x20' + xp);
    zoom_new = parseInt(xp) + parseInt(0.1);
    console['log'](zoom_new);
    zoom_new = 1.1;
    setZoom2(zoom_new);
    document['getElementById']('zoom_value')['innerHTML'] = zoom_new;
}
function findByClipName(xq) {
    return _(canvas['getObjects']())['where']({ 'clipFor': xq })['first']();
}
function degToRad(xr) {
    return xr * (Math['PI'] / 0xb4);
}
var clipByName = function (xs) {
    this['setCoords']();
    var xt = findByClipName(this['clipName']);
    var xu = 0x1 / this['scaleX'];
    var xv = 0x1 / this['scaleY'];
    xs['save']();
    var xw = -(this['width'] / 0x2) + xt['strokeWidth'];
    var xx = -(this['height'] / 0x2) + xt['strokeWidth'];
    var xy = xt['width'] - xt['strokeWidth'];
    var xz = xt['height'] - xt['strokeWidth'];
    xs['translate'](xw, xx);
    xs['scale'](xu, xv);
    xs['rotate'](degToRad(this['angle'] * -0x1));
    xs['beginPath']();
    var xA = xt instanceof fabric['Polygon'];
    if (xA) {
        var xB = [];
        for (i in xt['points'])
            xB['push']({
                'x': xt['left'] + xt['width'] / 0x2 + xt['points'][i]['x'] - this['oCoords']['tl']['x'],
                'y': xt['top'] + xt['height'] / 0x2 + xt['points'][i]['y'] - this['oCoords']['tl']['y']
            });
        xs['moveTo'](xB[0x0]['x'], xB[0x0]['y']);
        for (i = 0x1; i < xB['length']; ++i) {
            xs['lineTo'](xB[i]['x'], xB[i]['y']);
        }
        xs['lineTo'](xB[0x0]['x'], xB[0x0]['y']);
    } else
        {
            xs['rect'](xt['left'] - this['oCoords']['tl']['x'], xt['top'] - this['oCoords']['tl']['y'], xt['width'], xt['height']);
        }
    xs['closePath']();
    xs['restore']();
};
$('#canvas')['mousemove'](function (xC) {
    handleMouseMove(xC);
});
var put_image_on_background_yet;
function addRutaNoOverlay(xD, xE, xF, xG, xH, xI) {
    var xJ = document['getElementById']('loading');
    if (typeof xJ != 'undefined' && xJ != null) {
        activate_loading('ini');
    }
    if (document['getElementById']('changeImageid')['value']) {
        activate_loading('ini');
        document['getElementById']('changeImageUrl')['value'] = xD;
        $['when'](changeImage())['then'](function () {
        });
    } else if (xD['indexOf']('.png') > 0x1 || xD['indexOf']('.jpg') > 0x1 || xD['indexOf']('.svg') > 0x1) {
        clearTimeout(loadingTimeoutShort);
        console['log']('WE\x20ADDDDD' + '' + xD);
        canvas['isDrawingMode'] = ![];
        if (ancho < 0x12c) {
            var xK = 0xd2;
            var xL = 0xd2;
            var xM = 0x64;
            var xN = 0x64;
        } else {
            var xK = 0xfa;
            var xL = 0xfa;
            var xM = 0xc8;
            var xN = 0xc8;
        }
        if (xD['indexOf']('.svg') > 0x1) {
            var xS = xD;
            console['log'](xS + 'ES\x20UN\x20SVG');
            var xT = new Image();
            xT['src'] = xD;
            var xU = xT['width'];
            xS = xS['replace'](/\/\//g, '/');
            if (user_email == 'dani26381@gmail.com') {
            } else {
                fabric['loadSVGFromURL'](xS, function (xV, xW) {
                    var xX = fabric['util']['groupSVGElements'](xV, xW);
                    xX['set']({
                        'left': xK,
                        'ruta': xD,
                        'top': -0x1f4
                    })['setCoords']();
                    canvas['add'](xX);
                    canvas['renderAll']();
                    xX['animate']('top', xL, {
                        'duration': 0x4b0,
                        'onChange': canvas['renderAll']['bind'](canvas),
                        'onComplete': function () {
                            console['log']('text\x20loaded');
                            canvas['renderAll']();
                        },
                        'easing': fabric['util']['ease']['easeOutBounce']
                    });
                    if (estamos_en_fotoefectos == 0x1) {
                        xX['scaleToWidth'](canvas['width'] / 0x2);
                    }
                    canvas['setActiveObject'](xX);
                    xX['scaleToWidth'](xM);
                    xX['scaleToHeight'](xN);
                    layersAddIds();
                    canvas['renderAll']();
                });
            }
        } else {
            if (!mouseX) {
                mouseX = 0x0;
                mouseY = 0x0;
            } else {
                mouseX = mouseX * canvas['getZoom']();
                mouseY = mouseY * canvas['getZoom']();
                if (mouseX + 0x12c > canvas['width']) {
                    mouseX = 0x0;
                    mouseY = 0x0;
                }
            }
            mouseX = 0x0;
            mouseY = 0x0;
            if (estamos_en_fotoefectos == 0x1) {
                mouseX = 0x32;
                mouseY = 0x32;
            }
            fabric['Image']['fromURL'](xD, function (xY) {
                canvas['add'](xY['set']({
                    'left': mouseX,
                    'top': -0x3e8,
                    'angle': 0x0,
                    'opacity': 0x1
                }))['setActiveObject'](xY);
                if (estamos_en_fotoefectos == 0x1) {
                    xY['scaleToHeight'](canvas['height'] / 0x4);
                    mouseX = 0x32;
                    mouseY = 0x32;
                } else {
                    xY['scaleToWidth'](canvas['width'] / 0x2);
                }
                canvas['renderAll']();
                xY['animate']('top', mouseY, {
                    'duration': 0x4b0,
                    'onChange': canvas['renderAll']['bind'](canvas),
                    'onComplete': function () {
                        console['log']('text\x20loaded');
                        $['when'](canvas['renderAll']())['then'](function () {
                            var xZ = ![];
                            layersAddIds();
                            if (xZ == !![]) {
                                imageToBackground();
                            }
                            barraAjax('image', 'background');
                        });
                    },
                    'easing': fabric['util']['ease']['easeOutBounce']
                });
                canvas['renderAll']();
                console['log']('changeImageid2:\x20' + document['getElementById']('changeImageid')['value']);
                if (document['getElementById']('changeImageid')['value'] == '') {
                    xY['id'] = parseInt(document['getElementById']('numero_imagen_subida')['value']) + parseInt(0x1);
                    ;
                    document['getElementById']('numero_imagen_subida')['value'] = xY['id'];
                    console['log']('AÃ±adimos\x20imagen' + xD);
                } else {
                    console['log']('No\x20aÃ±adimos\x20imagen');
                }
            });
        }
        canvas['renderAll']();
        canvas['requestRenderAll']();
        var xJ = document['getElementById']('loading');
        if (typeof xJ != 'undefined' && xJ != null) {
            activate_loading('end');
        }
    } else {
        ruta11 = xD;
        ajax = Ajax();
        ajax['open']('GET', '/devuelveAjaxEditorNEW.php?obtenerCopyright=true&ruta=' + xD);
        ajax['onreadystatechange'] = function () {
            if (ajax['readyState'] == 0x4) {
                var y1 = '/' + ajax['responseText'];
                canvas['isDrawingMode'] = ![];
                xD = y1 + '?rnd=' + Math['random']();
                var y2 = fabric['Image']['fromURL'](xD, function (y3) {
                    var xT = new Image();
                    xT['src'] = xD;
                    var xU = xT['width'];
                    var y6 = xT['height'];
                    if (ancho_canvas >= alto_canvas) {
                        var y7 = ancho_canvas * 0x21 / 0x64;
                        var y8 = y7 * y6 / xU;
                    } else {
                        var y8 = alto_canvas * 0x21 / 0x64;
                        var y7 = y8 * xU / y6;
                    }
                    var yb = Math['floor'](Math['random']() * (ancho_canvas - y7 + 0x1)) + 0x1;
                    var yc = Math['floor'](Math['random']() * (alto_canvas - y8 + 0x1)) + 0x1;
                    if (xG) {
                        if (xU > y6) {
                            var yd = xH;
                            var ye = xU * yd / y6;
                            if (ye > xG) {
                                var yf = ye - xG;
                                xE = xE - yf / 0x2;
                            }
                        } else {
                            var ye = xG;
                            var yd = y6 * ye / xU;
                            if (yd > xH) {
                                var yf = yd - xH;
                                xF = xF - yf / 0x2;
                            }
                        }
                        y3['set']({
                            'left': xE,
                            'top': xF,
                            'width': ye,
                            'height': yd
                        });
                    } else {
                        y3['set']({
                            'left': yb,
                            'top': yc,
                            'width': y7,
                            'height': y8
                        });
                    }
                    if (ruta11 != '') {
                        console['log']('changeImageid111\x20' + document['getElementById']('changeImageid')['value']);
                        if (document['getElementById']('changeImageid')['value'] = '') {
                            canvas['add'](y3)['setActiveObject'](y3);
                            y3['id'] = parseInt(document['getElementById']('numero_imagen_subida')['value']) + parseInt(0x1);
                            document['getElementById']('numero_imagen_subida')['value'] = y3['id'];
                            console['log']('AÃ±adimos\x20imagen.');
                        } else {
                            console['log']('No\x20aÃ±adimos\x20imagen.');
                        }
                    }
                });
                if (ruta11 == null) {
                    try {
                        canvas['setActiveObject'](canvas['item'](0x0));
                    } catch (yj) {
                    }
                }
                canvas['renderAll']();
                activate_loading('end');
            }
        };
        ajax['send'](null);
    }
}
function addRuta(yk, yl, ym, yn, yo, yp) {
    closeAllTooltips();
    if (overlayImage != '' && carga_finalizada == 0x2) {
        quitar_overlay();
    }
    var yq = document['getElementById']('loading');
    if (typeof yq != 'undefined' && yq != null) {
        activate_loading('ini');
    }
    $('.closePanel')['trigger']('click');
    console['log'](document['getElementById']('esOverlay')['value']);
    if (document['getElementById']('esOverlay')['value'] == 0x2) {
        document['getElementById']('efectoOverlay')['value'] = 0x1;
        document['getElementById']('loading')['style']['visibility'] = 'visible';
        document['getElementById']('text-loading')['innerHTML'] = str_generando_img_final;
        var yr = this['__canvas'];
        circle = new fabric['Circle']({
            'radius': 0x1,
            'fill': 'white',
            'left': -0x64,
            'top': -0x64
        });
        yr['add'](circle)['setActiveObject'](circle);
        var ys = 'acoplar2';
        yr['forEachObject'](function (yt) {
            yt['setOpacity'](0x1);
        });
        $['ajax']({
            'type': 'POST',
            'url': '/' + trad_url_photo_editor,
            'dataType': 'text',
            'data': {
                'base64data': yr['toDataURL']('image/jpeg', 0.8),
                'acoplar': ys
            },
            'success': function (yu) {
                var yu = yu + '?rnd=' + Math['random']();
                yr['clear']()['renderAll']();
                yr['setOverlayImage'](null, yr['renderAll']['bind'](yr));
                var yw = new Image();
                yw['src'] = yu;
                yw['onload'] = function () {
                    document['getElementById']('loading')['style']['visibility'] = 'hidden';
                    console['log']('FIN_ADD_RUTA1');
                    document['getElementById']('efectoOverlay')['value'] = 0x0;
                };
            },
            'error': function (yx, yy, yz) {
            }
        });
        yr['renderAll']();
        document['getElementById']('esOverlay')['value'] = 0x0;
    }
    if (document['getElementById']('esOverlay')['value'] == 0x1) {
        document['getElementById']('esOverlay')['value'] = 0x2;
    }
    if (!yl) {
        var yA = document['getElementById']('efectoOverlay')['value'];
        if (yA == 0x1) {
            if (confirm(str_confirm_bg_overlay)) {
                console['log']('123_6');
                activate_loading('ini');
                document['getElementById']('text-loading')['innerHTML'] = str_generando_img_final;
                var yr = this['__canvas'];
                circle = new fabric['Circle']({
                    'radius': 0x1,
                    'fill': 'white',
                    'left': -0x64,
                    'top': -0x64
                });
                yr['add'](circle)['setActiveObject'](circle);
                var ys = 'acoplar2';
                yr['forEachObject'](function (yD) {
                    yD['setOpacity'](0x1);
                });
                $['ajax']({
                    'type': 'POST',
                    'url': '/' + trad_url_photo_editor,
                    'dataType': 'text',
                    'data': {
                        'base64data': yr['toDataURL']('image/png'),
                        'acoplar': ys,
                        'overlay': 0xa
                    },
                    'success': function (yE) {
                        var yE = yE + '?rnd=' + Math['random']();
                        window['location']['href'] = 'editor-fotos';
                    },
                    'error': function (yG, yH, yI) {
                    }
                });
            }
        } else {
            addRutaNoOverlay(yk, yl, ym, yn, yo, yp);
        }
    } else {
        addRutaNoOverlay(yk, yl, ym, yn, yo, yp);
    }
}
function setStyle(yJ, yK, yL) {
    if (yJ['setSelectionStyles'] && yJ['isEditing']) {
        var yM = {};
        yM[yK] = yL;
        yJ['setSelectionStyles'](yM);
    } else {
        yJ[yK] = yL;
    }
    canvas['setActiveObject'](yJ);
    yJ['setCoords']();
    canvas['calcOffset']();
    canvas['renderAll']();
}
function getStyle(yN, yO) {
    return yN['getSelectionStyles'] && yN['isEditing'] ? yN['getSelectionStyles']()[yO] : yN[yO];
}
function quitar_overlay() {
    console['log']('quitamos\x20Overlay');
    var yP = overlayImage + '?rnd=' + Math['random']();
    canvas['setOverlayImage'](null, canvas['renderAll']['bind'](canvas));
    canvas['renderAll']();
    console['log'](overlayImage);
    img = fabric['Image']['fromURL'](overlayImage, function (yQ) {
        canvas['add'](yQ['set']({
            'left': 0x0,
            'top': 0x0,
            'angle': 0x0,
            'width': ancho,
            'height': alto,
            'opacity': 0x1
        }));
        yQ['set']('lockMovementX', !![]);
        yQ['set']('lockMovementY', !![]);
        yQ['hasControls'] = yQ['hasBorders'] = ![];
        yQ['selectable'] = ![];
        yQ['lockMovementY'] = !![];
        yQ['lockMovementX'] = !![];
        yQ['lockRotation'] = !![];
        overlayImage = '';
        canvas['bringToFront'](yQ)['renderAll']();
        canvas['renderAll']();
    });
}
function registroUsuario(yR, yS) {
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'dataType': 'text',
        'data': { 'registerPopup': 0x1 },
        'success': function (yT) {
            document['getElementById']('registroUsuario')['innerHTML'] = yT;
            document['getElementById']('registroUsuario')['style']['display'] = 'inline';
            $('.frame-overflow')['foggy']({
                'blurRadius': 0x4,
                'opacity': 0.9,
                'cssFilterSupport': !![]
            });
            if (yR) {
                document['getElementById']('message_on_register')['innerHTML'] = yR;
            }
            if (yS == 'login') {
                changeRegisterLogin();
            }
            activate_loading('end');
        },
        'error': function (yU, yV, yW) {
        }
    });
}
function checkpasscorrect() {
    if (document['getElementById']('errorPassword')['style']['display'] == '') {
        var yX = document['getElementById']('pass1')['value'];
        yX = yX['length'];
        if (yX > 0x5) {
            document['getElementById']('errorPassword')['style']['display'] = 'none';
        }
    }
}
var enviado_resend_valildation = 0x0;
function resend_validation() {
    if (enviado_resend_valildation == 0x0) {
        enviado_resend_valildation = 0x1;
        $['ajax']({
            'type': 'POST',
            'url': '/' + trad_url_photo_editor,
            'dataType': 'text',
            'data': { 'resend_validation': '1' },
            'success': function (yY) {
                document['getElementById']('resend_validation')['style']['display'] = 'none';
                alert('We\x20have\x20just\x20sent\x20the\x20email\x20with\x20the\x20validation\x20link!');
            },
            'error': function (yZ, z0, z1) {
                console['log'](z0);
            }
        });
    } else {
        alert('Today\x20we\x20have\x20already\x20sent\x20you\x20a\x20validation\x20email');
    }
}
var filter_of_image;
function getFilters() {
    var z2 = canvas['getActiveObject']();
    if (canvas['getActiveObject']()) {
        if (z2['get']('type') == 'image') {
            filter_of_image = '';
            if (z2) {
                z2['filters']['forEach'](function (z3) {
                    filter_of_image = z3;
                });
            }
        }
    }
}
function applyFilters() {
    var z4 = canvas['getActiveObject']();
    if (filter_of_image && z4['get']('type') == 'image') {
        canvas['getActiveObject']()['filters']['push'](filter_of_image);
        canvas['getActiveObject']()['applyFilters']();
        canvas['renderAll']();
    }
}
function changeLang(z5) {
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'dataType': 'text',
        'data': { 'changeLang': z5 },
        'success': function (z6) {
            location['reload']();
        },
        'error': function (z7, z8, z9) {
            console['log'](z8);
        }
    });
}
var suscribe_popup = 0x0;
function suscribe_or_register() {
    if (getCookie('email') == null) {
        suscribe_popup = 0x1;
        registroUsuario();
    } else {
        popup_payments();
    }
}
function register_terms_checkbox_action() {
    if (document['getElementById']('terms_checkbox')['checked'] == ![])
        {
            document['getElementById']('errorTerminos')['style']['display'] = '';
            document['getElementById']('terms_checkbox')['style']['background'] = 'indianred';
            error_terminos = 0x1;
            console['log']('You\x20have\x20to\x20accept\x20terms1');
            $('#errorTerminos')['slideUp'](0x1f4)['slideDown'](0x1f4);
            $('#terms_checkbox')['slideUp'](0x1f4)['slideDown'](0x1f4);
            setTimeout(function () {
                document['getElementById']('link_register_or_access')['style']['fontWeight'] = 'bold';
                document['getElementById']('link_register_or_access')['innerHTML'] = document['getElementById']('link_register_or_access')['innerHTML'] + '?';
            }, 0x3e8);
        }
    else {
        error_terminos = 0x0;
        document['getElementById']('errorTerminos')['style']['display'] = 'none';
        document['getElementById']('terms_checkbox')['style']['background'] = '#fff';
    }
}
var var_comprobateValidationAndClose = 0x0;
function comprobateValidationAndClose(za) {
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'dataType': 'text',
        'data': { 'comprobateValidationAndClose': 0x1 },
        'success': function (zb) {
            var zc = zb['split']('|');
            fecha_suscripcion = zc[0x0];
            suscription_type = zc[0x1];
            zb = zc[0x2];
            if (za == 0x1) {
                var_comprobateValidationAndClose = 0x0;
            }
            if (var_comprobateValidationAndClose == 0x1) {
                if (za == 'close') {
                    document['getElementById']('notValid')['style']['display'] = 'none';
                }
                $('#botonFinalizar')['attr']('onclick', 'comprobateValidationAndClose(1);');
            } else if (zb == '') {
                if (za == 'close') {
                    document['getElementById']('notValid')['style']['display'] = 'none';
                }
                $('#botonFinalizar')['attr']('onclick', 'desactivar0();');
                $('#botonUpdate')['attr']('onclick', 'saveCanvasUser(\x27updateUser\x27);');
            } else {
                document['getElementById']('notValid')['style']['display'] = '';
                document['getElementById']('notValid')['innerHTML'] = zb;
                $('#botonFinalizar')['attr']('onclick', 'comprobateValidationAndClose();');
                $('#notValid')['slideUp'](0x1f4)['slideDown'](0x3e8);
            }
            var_comprobateValidationAndClose = 0x1;
        },
        'error': function (zd, ze, zf) {
            console['log'](ze);
        }
    });
}
function registro() {
    var zg = document['getElementById']('registerOrLogin')['value'];
    document['getElementById']('emailRegistro')['value'] = document['getElementById']('emailRegistro')['value']['toLowerCase']();
    error_password = 0x0;
    var zh = document['getElementById']('pass1')['value'];
    zh = zh['length'];
    if (zh > 0x5) {
        document['getElementById']('errorPassword')['style']['display'] = 'none';
        console['log']('Password\x20is\x20in\x20correct\x20format');
    } else {
        error_password = 0x1;
        document['getElementById']('errorPassword')['style']['display'] = '';
        document['getElementById']('errorPassword')['innerHTML'] = traduccion_password_erroneo;
        console['log']('Password\x20format\x20is\x20not\x20correct');
    }
    register_terms_checkbox_action();
    if (document['getElementById']('terms_checkbox')['checked'])
        {
        }
    error_email = 0x0;
    var zi = /[\w-\.]{1,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    if (zi['test'](document['getElementById']('emailRegistro')['value']) && document['getElementById']('emailRegistro')['value'] != '') {
        document['getElementById']('errorEmail')['style']['display'] = 'none';
        console['log']('email\x20format\x20is\x20\x20correct');
    } else {
        document['getElementById']('errorEmail')['style']['display'] = '';
        document['getElementById']('errorEmail')['innerHTML'] = traduccion_email_incorrect;
        error_email = 0x1;
        console['log']('Fail\x20email1' + traduccion_email_incorrect);
    }
    if (error_email == 0x0 && error_password == 0x0 && error_terminos == 0x0) {
        if (register_or_login == 'login') {
            zj = !![];
        } else {
            var zj = confirm(traduccion_javascript_want_to_register['replace']('EMAIL_HERE', document['getElementById']('emailRegistro')['value']));
        }
        if (zj == !![]) {
            $['ajax']({
                'type': 'POST',
                'url': '/' + trad_url_photo_editor,
                'dataType': 'text',
                'data': {
                    'email': document['getElementById']('emailRegistro')['value'],
                    'password': document['getElementById']('pass1')['value'],
                    'register_or_login': register_or_login
                },
                'success': function (zk) {
                    console['log'](zk);
                    var zl = zk['split'](';');
                    var zm = zl[0x1];
                    var zn = zl[0x2];
                    var zo = zl[0x3];
                    var zk = zl[0x0];
                    var zq = zl[0x4];
                    var zr = zl[0x5];
                    var zs = zl[0x6];
                    document['getElementById']('teamMembers')['value'] = zq;
                    console['log']('meses_cupon_aplicado:' + zs);
                    document['getElementById']('buttonMyDesigns')['style']['display'] = '';
                    document['getElementById']('buttonObjects')['style']['display'] = '';
                    document['getElementById']('emailRegistro')['value'] == undefined;
                    if (document['getElementById']('emailRegistro')['value'] == undefined || document['getElementById']('emailRegistro')['value'] == 'undefined') {
                        document['getElementById']('registroUsuario')['style']['display'] = 'none';
                        cerrarFoggy();
                        document['getElementById']('emailRegistro')['value'] = '';
                        eraseCookie('email');
                        eraseCookie('id_usuario');
                        alert(traduccion_javascript_error_tecnic);
                        activateChat();
                        return;
                    }
                    if (zk == 'registroLoginNoExiste') {
                        document['getElementById']('errorEmail')['innerHTML'] = traduccion_email_incorrect;
                    } else if (zk == 'registroOK' || zk == 'yaRegistradoNOFB' || zk == 'yaRegistradoNOFB') {
                        logueado(document['getElementById']('emailRegistro')['value'], '/editor/img/no-login-photo2.jpg', document['getElementById']('emailRegistro')['value'], zo);
                        user_email = document['getElementById']('emailRegistro')['value'];
                        charguePhotoIfInCategory();
                        try {
                            ga('send', 'event', {
                                'eventCategory': 'premium',
                                'eventAction': 'registro'
                            });
                        } catch (zt) {
                        }
                        try {
                            document['getElementById']('fbLinkMail1')['style']['display'] = 'none';
                        } catch (zu) {
                        }
                        console['log']('registroOK1');
                        if (zk == 'registroOK') {
                            charguePhotoIfInCategory();
                            $('.frame-overflow')['foggy']({
                                'blurRadius': 0x4,
                                'opacity': 0.9,
                                'cssFilterSupport': !![]
                            });
                            activarID('getPremiumRegister');
                            popup_question_premium('getPremiumRegister');
                        } else {
                            cerrarFoggy();
                        }
                        if ((zm && zr != 0x1 || zs > 0x0) && zs != 0x3e8) {
                            alert(traduccion_javascript_registered_code + '\x20' + zm + '\x20\x0a\x0a' + traduccion_javascript_premium_until + '\x20' + zn);
                        }
                        if (zm && zs == 0x3e8) {
                            popup_payments();
                        } else if (zs > 0x0) {
                        } else {
                            if (zm && zr == 0x1) {
                                popup_payments();
                            }
                            if (suscription_loaded == 0x1 || suscribe_popup == 0x1) {
                                popup_payments();
                                suscription_loaded = '';
                                suscribe_popup = '';
                            }
                        }
                        $('.userProfile')['trigger']('click');
                        if (zk == 'registroOK' + '4YFN' || zk == 'yaRegistradoNOFB' + '4YFN') {
                            document['getElementById']('date_suscription')['innerHTML'] = '';
                        }
                        document['getElementById']('botonUpdate')['disabled'] = ![];
                        document['getElementById']('linkLogout')['style']['display'] = '';
                        if (solicita_guardar == 0x1) {
                            saveCanvasUser('updateUser');
                        }
                        loadPremiumHeader();
                        document['getElementById']('registroUsuario')['style']['display'] = 'none';
                        if (zk != 'registroOK') {
                            cerrarFoggy();
                        }
                    } else if (zk == 'RegistroYaEXistia') {
                        logueado(document['getElementById']('emailRegistro')['value'], '/editor/img/no-login-photo2.jpg', document['getElementById']('emailRegistro')['value'], zo);
                        document['getElementById']('linkLogout')['style']['display'] = '';
                        document['getElementById']('registroUsuario')['style']['display'] = 'none';
                        cerrarFoggy();
                        document['getElementById']('botonUpdate')['disabled'] = ![];
                        charguePhotoIfInCategory();
                        if (solicita_guardar == 0x1) {
                            saveCanvasUser('updateUser');
                        }
                        loadPremiumHeader();
                        user_email = document['getElementById']('emailRegistro')['value'];
                        console['log']('registroOK2');
                    } else if (zk == 'ExistNoCorrect') {
                        alert(traduccion_javascript_error_tecnic + zk);
                        activateChat();
                        document['getElementById']('botonUpdate')['disabled'] = ![];
                        document['getElementById']('registro-box')['style']['opacity'] = '1';
                    } else if (zk == 'noEmail') {
                        error_email = 0x1;
                        document['getElementById']('errorPassword')['style']['display'] = '';
                        document['getElementById']('errorPassword')['innerHTML'] = traduccion_password_erroneo_email_ok;
                        document['getElementById']('botonUpdate')['disabled'] = ![];
                        document['getElementById']('registro-box')['style']['opacity'] = '1';
                    } else {
                        alert(traduccion_javascript_error_tecnic + zk);
                        activateChat();
                        document['getElementById']('registroUsuario')['style']['display'] = 'none';
                        cerrarFoggy();
                    }
                },
                'error': function (zv, zw, zx) {
                }
            });
        }
    } else {
        document['getElementById']('botonUpdate')['disabled'] = ![];
        document['getElementById']('registro-box')['style']['opacity'] = '1';
    }
}
function mostrarPass(zy) {
    if (document['getElementById']('pass' + zy)['type'] == 'password')
        document['getElementById']('pass' + zy)['type'] = 'text';
    else
        document['getElementById']('pass' + zy)['type'] = 'password';
}
function charguePhotoIfInCategory() {
    console['log']('Estamos\x20en\x20fotos???');
    try {
        if ($('.buttonPhotos')['hasClass']('active') || $('#file_upload_button')['length'] > 0x0) {
            $('#buttonPhotos')['click']();
        }
    } catch (zz) {
    }
}
var register_or_login = 'register';
function changeRegisterLogin() {
    if (document['getElementById']('registerOrLogin')['value'] == 'register') {
        document['getElementById']('registerOrLogin')['value'] = 'login';
        document['getElementById']('loginRegisterYatienesCuenta')['innerHTML'] = traduccion_login_yatienescuenta;
        document['getElementById']('loginRegisterYatienesCuenta2')['innerHTML'] = traduccion_login_registrateylopetaras;
        document['getElementById']('registroLoginConEmail')['innerHTML'] = traduccion_login_accedecontuemail;
        document['getElementById']('loginRegisterIniciaoRegistra')['innerHTML'] = traduccion_login_iniciarsescion;
        document['getElementById']('link_register_or_access')['innerHTML'] = traduccion_login_registro;
        document['getElementById']('terms_checkboxText')['style']['display'] = 'none';
        document['getElementById']('terms_checkbox')['checked'] = !![];
        document['getElementById']('errorTerminos')['style']['display'] = 'none';
        document['getElementById']('botonUpdateRegistro')['innerHTML'] = traduccion_javascript_login_button;
        document['getElementById']('botonUpdateRegistro')['style']['backgroundColor'] = '#6a9997';
        document['getElementById']('link_register_or_access')['style']['color'] = '#cd2e78';
        register_or_login = 'login';
    } else {
        document['getElementById']('registerOrLogin')['value'] = 'register';
        document['getElementById']('loginRegisterYatienesCuenta')['innerHTML'] = traduccion_login_registrateylopetaras;
        document['getElementById']('loginRegisterYatienesCuenta2')['innerHTML'] = traduccion_login_yatengounacuenta;
        document['getElementById']('registroLoginConEmail')['innerHTML'] = traduccion_login_registratecontuemail;
        document['getElementById']('loginRegisterIniciaoRegistra')['innerHTML'] = traduccion_login_registramitienda;
        document['getElementById']('link_register_or_access')['innerHTML'] = traduccion_login_iniciarsescion;
        document['getElementById']('terms_checkboxText')['style']['display'] = 'flex';
        document['getElementById']('terms_checkbox')['checked'] = ![];
        document['getElementById']('botonUpdateRegistro')['innerHTML'] = traduccion_javascript_register_button;
        document['getElementById']('botonUpdateRegistro')['style']['backgroundColor'] = '#6a9997';
        document['getElementById']('link_register_or_access')['style']['color'] = '#6a9997';
        register_or_login = 'register';
    }
}
function openNewWindow(zA) {
    var zB = confirm(traduccion_javascript_open_new_window);
    if (zB == !![]) {
        window['open'](zA);
    } else {
    }
}
function openPack(zC) {
    var zD = confirm(traduccion_javascript_open_new_window_pack);
    if (zD == !![]) {
        window['open'](zC);
    } else {
    }
}
var lastSelect = '';
function showDeleteButton(zE, zF, zG) {
    var zH;
    var zI = confirm(traduccion_javascript_delete_design);
    if (zI == !![]) {
        deleteButton(zE, zG);
    } else {
    }
}
function deleteButton(zJ, zK) {
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'dataType': 'text',
        'data': {
            'tabla_': zK,
            'deleteTemplate': zJ
        },
        'success': function (zL) {
            console['log'](zL + '\x20' + zK + '\x20' + zJ);
            if (zL == 'deleted') {
                if (zK == 'images') {
                    $('#images_' + zJ)['fadeOut']('slow');
                } else {
                    $('#template' + zJ)['fadeOut']('slow');
                }
            } else {
                alert(traduccion_javascript_error_tecnic);
                activateChat();
            }
        },
        'error': function (zM, zN, zO) {
            console['log'](zN);
        }
    });
}
function changeCategoryRecursos(zP, zQ, zR) {
    try {
        document['getElementById']('recursos_contenedor_por_cat')['style']['display'] = '';
    } catch (zS) {
    }
    try {
        document['getElementById']('header_cabeceras')['style']['display'] = 'none';
    } catch (zT) {
    }
    try {
        zt['hide']($('#reemplazarImagen'));
        zt['hide']($('#file_upload_button'));
    } catch (zU) {
    }
    $['ajax']({
        'type': 'GET',
        'url': '/include_recursos.php',
        'dataType': 'text',
        'data': { 'categoria_carga': zP },
        'success': function (zV) {
            try {
                document['getElementById']('listado_recursos')['innerHTML'] = zV;
            } catch (zW) {
            }
            try {
                document['getElementById']('img_cat_recursos')['src'] = zQ;
            } catch (zX) {
            }
            try {
                document['getElementById']('name_cat_recursos')['innerHTML'] = zR;
            } catch (zY) {
            }
            var zZ = new LazyLoad({});
        },
        'error': function (A0, A1, A2) {
            alert(traduccion_javascript_error_tecnic + '\x20' + A1);
            activateChat();
        }
    });
}
function volverRecursos() {
    $('.buttonObjects')['trigger']('click');
}
function noAvisarReplaceImage() {
    try {
        zt['hide']($('#reemplazarImagen'));
        zt['hide']($('#file_upload_button'));
    } catch (A3) {
    }
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'dataType': 'text',
        'data': { 'queTooltipNoAvisar': 'reemplazarImagen' },
        'success': function (A4) {
            MostrarReemplazarImagen = 'NO';
            console['log']('No\x20avisamos\x20reemplazarImagen');
        },
        'error': function (A5, A6, A7) {
            alert(traduccion_javascript_error_tecnic + '\x20' + A6);
            activateChat();
        }
    });
}
function add_user_action(A8, A9, Aa, Ab) {
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'dataType': 'text',
        'data': {
            'add_user_action': '1',
            'accion_add': A8,
            'tipo_add': A9,
            'id_json_add': Aa
        },
        'success': function (Ac) {
            MostrarReemplazarImagen = 'NO';
            console['log']('No\x20avisamos\x20reemplazarImagen');
        },
        'error': function (Ad, Ae, Af) {
            alert(traduccion_javascript_error_tecnic + '\x20' + Ae);
            activateChat();
        }
    });
}
function setIDFuncionCapa2(Ag) {
    var Ah = canvas['getActiveObject']();
    if (Ah) {
        Ah['set']('id', Ag);
        console['log']('Guardamos\x20imagen\x20de\x20fondo');
        $['ajax']({
            'type': 'POST',
            'url': '/' + trad_url_photo_editor,
            'dataType': 'text',
            'data': {
                'setIDFuncionCapa2': Ah['get']('src'),
                'id_json2': document['getElementById']('idNombreCanvas_backup')['value']
            },
            'success': function (Ai) {
                if (Ai != '') {
                    alert('Error!!\x20avisar\x20a\x20Dani\x20con\x20el\x20enlace\x20de\x20esta\x20plantilla' + Ai);
                } else {
                    document['getElementById']('setBackground')['innerHTML'] = 'Marcado\x20ok!';
                    document['getElementById']('setBackground')['style']['backgroundColor'] = 'green';
                }
            },
            'error': function (Aj, Ak, Al) {
                alert(traduccion_javascript_error_tecnic);
                activateChat();
            }
        });
    }
}
var color1_old;
var color2_old;
var tipo_old;
function addTextGradients(Am, An, Ao) {
    grabar_accion('templates', 'colors_gradient');
    if (canvas['getActiveObject']()) {
        var Ap = canvas['getActiveObject']();
        if (color1_old == An) {
            color1_back = An;
            An = Ao;
            Ao = color1_back;
        }
        if (tipo_old == 'v') {
            Am = 'h';
        } else {
            Am = 'v';
        }
        color1_old = An;
        color2_old = Ao;
        tipo_old = Am;
        if (Am == 'v') {
            Ap['setGradient']('fill', {
                'x1': 0x0,
                'y1': 0x0,
                'x2': 0x0,
                'y2': Ap['height'],
                'colorStops': {
                    0: An,
                    1: Ao
                }
            });
        } else {
            Ap['setGradient']('fill', {
                'x1': 0x0,
                'y1': Ap['width'] / 0x2,
                'x2': Ap['height'],
                'y2': Ap['width'] / 0x2,
                'colorStops': {
                    0: An,
                    1: Ao
                }
            });
        }
        canvas['renderAll']();
    } else {
        alert(traduccion_javascript_select_to_gradient);
    }
}
function cambioColorGradient() {
    var Aq = '';
    var Ar = document['getElementById']('gradient12');
    Ar['style']['background'] = 'linear-gradient(' + document['getElementById']('gradient1')['value'] + ',\x20' + document['getElementById']('gradient2')['value'] + ')';
}
function saveGradient() {
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'dataType': 'text',
        'data': {
            'name_gradient': document['getElementById']('name_gradient')['value'],
            'gradient1': document['getElementById']('gradient1')['value'],
            'gradient2': document['getElementById']('gradient2')['value']
        },
        'success': function (As) {
            alert(traduccion_javascript_save_gradient);
        },
        'error': function (At, Au, Av) {
            alert(traduccion_javascript_error_tecnic);
            activateChat();
        }
    });
}
function createNewDesign() {
    $('.buttonDesigns')['trigger']('click');
}
function redirect_as_email() {
    window['open']('https://edit.org/edit?emailfake=' + document['getElementById']('email_user_fake')['value'], '_blank');
}
function getUnsplash() {
    $['ajax']({
        'url': 'https://api.unsplash.com/photos/?client_id=e865fb3d5886535f9d1004c57378f9499db4bbc8ab2b5384e55f5b04023bd995&per_page=30&page=1&query=golf',
        'dataType': 'text',
        'success': function (Aw) {
            var Ax = $['parseJSON'](Aw);
            for (var Ay = 0x0; Ay < Ax['length']; ++Ay) {
                console['log'](Ax[Ay]['id']);
                var Az = Ax[Ay]['urls'];
                console['log'](Az['thumb']);
            }
        }
    });
}
function actions_folder(AA, AB) {
    if (AA == 'delete_folder') {
        if (confirm(traduccion_javascript_delete_folder_all_designs)) {
            do_action = 0x1;
        } else {
            do_action = 0x0;
        }
    }
    if (AA == 'move_folder' || AA == 'change_name_folder') {
        alert(traduccion_javascript_not_avalaible_function);
        do_action = 0x0;
    }
    if (do_action == 0x1) {
        $['ajax']({
            'type': 'POST',
            'url': '/' + trad_url_photo_editor,
            'dataType': 'text',
            'data': {
                'actions_folder': AB,
                'what': AA
            },
            'success': function (AC) {
                console['log'](AC);
                if (AC == 'folder_deleted') {
                    try {
                        $('#id_folder_' + AB)['hide']();
                    } catch (AD) {
                    }
                }
                if (AC == 'folder_not_deleted') {
                    alert(traduccion_javascript_delete_cannot);
                }
            },
            'error': function (AE, AF, AG) {
            }
        });
    }
}
function go_to_folder(AH, AI, AJ) {
    if (AH == 'buttonMyDesigns') {
        carpeta_donde_estamos = AI;
        selector_designs_photos_objects(AH);
    }
}
var categoria_donde_estamos = '';
var carpeta_donde_estamos = '';
function selector_designs_photos_objects(AK) {
    cerrarFoggy();
    if (AK == 'buttonTeamDesigns') {
        if (days_last_suscription <= 0x0) {
            activarID('getPremiumTeams');
            popup_question_premium('getPremiumTeams');
        } else {
            if (document['getElementById']('teamMembers')['value'] > 0x0) {
                categoria_donde_estamos = 'buttonTeamDesigns';
                cambioSubCategoriaPorAjax('team');
            } else {
                activarID('sharePanel');
            }
        }
    } else if (AK == 'buttonMyDesigns') {
        categoria_donde_estamos = 'buttonMyDesigns';
        $('.' + AK)['trigger']('click');
    } else if (AK == 'buttonDesigns') {
        categoria_donde_estamos = 'buttonDesigns';
        cambioSubCategoriaPorAjax('');
    } else if (AK == 'buttonObjects') {
        categoria_donde_estamos = 'buttonMyDesigns';
        $('.' + AK)['trigger']('click');
    } else if (AK == 'buttonPhotos') {
        categoria_donde_estamos = 'buttonPhotos';
        $('.' + AK)['trigger']('click');
    }
}
function filtro_resize() {
    var AL = canvas['getActiveObject']();
    AL['filters']['push'](new fabric['Image']['filters']['Resize']({
        'resizeType': 'hermite',
        'scaleX': AL['scaleX'],
        'scaleY': AL['scaleY']
    }));
    canvas['getActiveObject']()['applyFilters']();
}
function activarIDsinFoggy(AM) {
    if (document['getElementById'](AM)['style']['display'] == 'none') {
        document['getElementById'](AM)['style']['display'] = 'inline';
    } else {
        document['getElementById'](AM)['style']['display'] = 'none';
    }
}
function addSuscription() {
    activarID('suscription');
}
function cambioRedondeado(AN) {
    console['log'](AN);
    canvas['getActiveObject']()['set']('rx', AN);
    canvas['getActiveObject']()['set']('ry', AN);
    rx = canvas['getActiveObject']()['rx'] ? Math['min'](canvas['getActiveObject']()['rx'] / canvas['getActiveObject']()['scaleX'], canvas['getActiveObject']()['width'] / 0x2) : 0x0;
    ry = canvas['getActiveObject']()['ry'] ? Math['min'](canvas['getActiveObject']()['ry'] / canvas['getActiveObject']()['scaleY'], canvas['getActiveObject']()['height'] / 0x2) : 0x0;
    document['getElementById']('infoRedondeado')['innerHTML'] = document['getElementById']('SizeRedondeado')['value'];
    canvas['renderAll']();
}
function activa_cupon() {
    document['getElementById']('coupon')['style']['display'] = '';
}
function oculta_capa(AO) {
    document['getElementById'](AO)['style']['display'] = 'none';
    if (AO == 'coupon') {
        window['history']['pushState']('object\x20or\x20string', 'EDIT\x20templates', 'https://' + dominio + '/edit');
    }
}
$('#pass1')['keypress'](function (AP) {
    if (AP['which'] == 0xd) {
        AP['preventDefault']();
        registro();
    }
});
function altaCupon() {
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'dataType': 'text',
        'data': {
            'name_coupon': document['getElementById']('name_coupon')['value'],
            'number_months': document['getElementById']('number_months')['value'],
            'coupon_text_es': document['getElementById']('coupon_text_es')['value'],
            'coupon_text_en': document['getElementById']('coupon_text_en')['value'],
            'money_discount': document['getElementById']('money_discount')['value'],
            'notas_discount': document['getElementById']('notas_discount')['value'],
            'date_validity': document['getElementById']('date_validity')['value']
        },
        'success': function (AQ) {
            console['log'](AQ);
            $('.buttonSearch')['click']();
        },
        'error': function (AR, AS, AT) {
        }
    });
}
function openMyDesigns() {
    $('.buttonMyDesigns')['trigger']('click');
}
var color1_backup = '';
var color2_backup = '';
function trim(AU) {
    return AU['replace'](/^\s+|\s+$/gm, '');
}
function rgbaToHex(AV) {
    if ((AV['match'](/,/g) || [])['length'] == 0x2) {
        var AW = AV['substring'](AV['indexOf']('('))['split'](','), AX = parseInt(trim(AW[0x0]['substring'](0x1)), 0xa), AY = parseInt(trim(AW[0x1]), 0xa), AZ = parseInt(trim(AW[0x2]), 0xa);
        return '#' + componentToHex(AX) + componentToHex(AY) + componentToHex(AZ);
    } else {
        var AW = AV['substring'](AV['indexOf']('('))['split'](','), AX = parseInt(trim(AW[0x0]['substring'](0x1)), 0xa), AY = parseInt(trim(AW[0x1]), 0xa), AZ = parseInt(trim(AW[0x2]), 0xa), B4 = parseFloat(trim(AW[0x3]['substring'](0x0, AW[0x3]['length'] - 0x1)))['toFixed'](0x2);
        return '#' + AX['toString'](0x10) + AY['toString'](0x10) + AZ['toString'](0x10) + (B4 * 0xff)['toString'](0x10)['substring'](0x0, 0x2);
    }
}
function checkRgb2(B5) {
    var B6 = /([R][G][B][A]?[(]\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])(\s*,\s*((0\.[0-9]{1})|(1\.0)|(1)))?[)])/i;
    if (B6['test'](B5)) {
        return !![];
    }
}
function changeColors2(B7, B8, B9, Ba) {
    grabar_accion('templates', 'colors_combination');
    var Bb;
    var Bc;
    var Bd;
    var Be;
    var Bb;
    var Bg;
    var Bh;
    var Bi;
    var Bj = '';
    var Bk = '';
    canvas['forEachObject'](function (Bl) {
        if (Bl['fill'] != null && (Bl['type'] == 'rect' || Bl['type'] == 'i-text' || Bl['type'] == 'textbox')) {
            if (checkRgb2(Bl['get']('fill'))) {
                console['log'](Bl['get']('fill'));
                obj_fill = rgbaToHex(Bl['get']('fill'));
            } else {
                obj_fill = Bl['get']('fill');
            }
            if (Bj == '' && obj_fill != '') {
                Bj = obj_fill;
                console['log']('color1_template:' + Bj + '\x20' + Bl['get']('type'));
            } else if (obj_fill != Bj && obj_fill != '') {
                Bk = obj_fill;
                console['log']('color2_template' + Bk + '\x20' + Bl['get']('type'));
            }
        }
    });
    console['log']('||color1_template' + Bj + 'color2_template' + Bk);
    canvas['forEachObject'](function (Bm) {
        if (checkRgb2(Bm['get']('fill'))) {
            console['log'](Bm['get']('fill'));
            obj_fill = rgbaToHex(Bm['get']('fill'));
        } else {
            obj_fill = Bm['get']('fill');
        }
        if (obj_fill != null) {
            if (obj_fill == Bj) {
                Bm['set']('fill', B7);
                console['log']('color\x201\x20cambiamos');
            }
            if (obj_fill == Bk) {
                Bm['set']('fill', B8);
                console['log']('color\x202\x20cambiamos');
            }
        }
    });
    canvas['renderAll']();
}
function changeColors2_RGB(Bn, Bo, Bp) {
    Bn = hexToRgbNew(Bn['replace']('#', ''));
    Bo = hexToRgbNew(Bo['replace']('#', ''));
    if (color1_backup == Bn && color2_backup == Bo) {
        console['log']('intercambiamos\x20colores\x20INI:\x20' + Bn + '\x20' + Bo);
        color1_backup = Bn;
        color2_backup = Bo;
        Bn = color2_backup;
        Bo = color1_backup;
        color1_backup = Bn;
        color2_backup = Bo;
        console['log']('intercambiamos\x20colores\x20FIN:\x20' + Bn + '\x20' + Bo);
    } else {
        color1_backup = Bn;
        color2_backup = Bo;
    }
    var Bq;
    var Br;
    var Bs;
    var Bt;
    var Bq;
    var Bv;
    var Bw;
    var Bx;
    var By = '';
    var Bz = '';
    canvas['forEachObject'](function (BA) {
        if (BA['get']('fill') != null && (BA['type'] == 'rect' || BA['type'] == 'i-text' || BA['type'] == 'textbox')) {
            console['log']('colores\x20a\x20cambiar:\x20' + BA['get']('fill'));
            if (By == '' && BA['get']('fill') != '' && BA['get']('fill') != 'undefined') {
                By = BA['get']('fill');
                console['log']('color1_template:' + By);
                color1_backup = By;
            } else if (BA['get']('fill') != By && BA['get']('fill') != '' && Bz == '' && BA['get']('fill') != 'undefined') {
                Bz = BA['get']('fill');
                console['log']('color2_template' + Bz);
                color2_backup = Bz;
            }
        }
    });
    console['log']('||color1_template' + By + 'color2_template' + Bz);
    canvas['forEachObject'](function (BB) {
        if (BB['get']('fill') != null) {
            if (rgb2hex(BB['get']('fill')) == By) {
                console['log']('color\x201\x20cambiamos\x20from:\x20' + rgb2hex(BB['get']('fill')) + '\x20to:\x20' + hexToRgbNew(Bn['replace']('#', '')) + '\x20' + Bn);
                BB['set']('fill', hexToRgbNew(Bn['replace']('#', '')));
            }
            if (rgb2hex(BB['get']('fill')) == Bz) {
                console['log']('color\x202\x20cambiamos\x20from:\x20' + rgb2hex(BB['get']('fill')) + '\x20to:\x20' + hexToRgbNew(Bo['replace']('#', '')) + '\x20' + Bo);
                BB['set']('fill', hexToRgbNew(Bo['replace']('#', '')));
            }
        }
    });
    console['log']('\x20\x20\x20\x20\x20\x20\x20');
    console['log']('\x20\x20\x20\x20\x20\x20\x20');
    canvas['renderAll']();
}
function selectAllObjects() {
    canvas['discardActiveObject']();
    var BC = new fabric['ActiveSelection'](canvas['getObjects'](), { 'canvas': canvas });
    canvas['setActiveObject'](BC);
    barraAjax('activeSelection', 'FFFFFF');
    canvas['requestRenderAll']();
}
function inArray(BD, BE) {
    var BF = BE['length'];
    for (var BG = 0x0; BG < BF; BG++) {
        if (BE[BG] == BD)
            return !![];
    }
    return ![];
}
function is_is_inside() {
    var BH = [];
    BH['push'](0x1);
    BH['push'](0x1);
    BH['push'](0x1);
}
function invertSelection() {
    var BI = [];
    canvas['getActiveObjects']()['forEach'](function (BJ) {
        BI['push'](BJ['id']);
        console['log']('\x20\x20\x20activeObject.id\x20' + BJ['id']);
    });
    var BK = new fabric['ActiveSelection']([], { 'canvas': canvas });
    canvas['forEachObject'](function (BL) {
        console['log']('Está\x20dentro\x20del\x20array?' + jQuery['inArray'](BL['get']('id'), BI) + '\x20|' + BL['id']);
        if (jQuery['inArray'](BL['get']('id'), BI) == -0x1) {
            if (BL['id'] != 'guides') {
                BK['addWithUpdate'](BL);
            }
            console['log']('\x20SI\x20\x20obj.get(\x27id\x27)' + BL['get']('id'));
        } else {
            console['log']('\x20NO\x20\x20obj.get(\x27id\x27)' + BL['get']('id'));
        }
    });
    canvas['setActiveObject'](BK);
    canvas['renderAll']();
}
function scalePolygon(BM, BN, BO) {
    for (var BP = 0x0; BP < BM['length']; BP++) {
        var BQ = BM[BP];
        BQ['setWidth'](BQ['getWidth']() * BN);
        BQ['setHeight'](BQ['getHeight']() * BO);
        if (BQ['points']) {
            for (var BR = 0x0; BR < BQ['points']['length']; BR++) {
                BQ['points'][BR]['x'] *= BN;
                BQ['points'][BR]['y'] *= BO;
            }
        }
        BQ['setLeft'](BQ['getLeft']() * BN);
        BQ['setTop'](BQ['getTop']() * BO);
        BQ['setCoords']();
    }
}
function layersNoScale() {
    canvas['forEachObject'](function (BS) {
        if (BS['get']('type') == 'polygon') {
        } else {
            if (BS['get']('type') == 'image') {
            } else
                {
                }
            BS['setCoords']();
        }
    });
    canvas['renderAll']();
}
var big_layer;
var big_layer_w;
var big_layer_h;
function layersOrder() {
    unselectAllObjects();
    size_in_pixels = 0x1;
    size_in_pixels_old = 0x0;
    z = 0x0;
    canvas['forEachObject'](function (BT) {
        if (BT['get']('type') == 'image') {
            size_in_pixels_old = size_in_pixels;
            BT['id'] = z;
            size_in_pixels = BT['get']('width') * BT['get']('height');
            if (size_in_pixels > size_in_pixels_old) {
                big_layer = BT['id'];
                if (BT['get']('scaleX') < 0x1)
                    big_layer_w = BT['get']('width') / BT['get']('scaleX');
                else
                    big_layer_w = BT['get']('width') * BT['get']('scaleX');
                if (BT['get']('scaleX') < 0x1)
                    big_layer_h = BT['get']('height') / BT['get']('scaleX');
                else
                    big_layer_h = BT['get']('height') * BT['get']('scaleX');
                big_layer_w_data = BT['get']('width') + '\x20' + BT['get']('scaleX');
            }
        }
    });
    if (big_layer >= 0x0) {
        rel_width = canvas['width'] / canvas['item'](big_layer)['get']('width');
        rel_height = canvas['height'] / canvas['item'](big_layer)['get']('height');
        var BU = canvas['item'](big_layer);
        var BV = canvas['viewportTransform'];
        activeObjectHeight = BU['getBoundingRect']()['height'] / BV[0x3], activeObjectWidth = BU['getBoundingRect']()['width'] / BV[0x0];
        var BW = canvas['width'] / canvas['getZoom']();
        var BX = canvas['height'] / canvas['getZoom']();
        scaleX = canvas['width'] / canvas['getZoom']() / canvas['item'](big_layer)['get']('width');
        scaleY = canvas['height'] / canvas['getZoom']() / canvas['item'](big_layer)['get']('height');
        BV = canvas['viewportTransform'];
        canvasRealWidth = canvas['width'] / BV[0x0];
        canvasRealHeight = canvas['height'] / BV[0x0];
        if (big_layer_w > canvasRealWidth || big_layer_h > canvasRealHeight) {
            if (rel_width > rel_height) {
                canvas['item'](big_layer)['set']('scaleX', scaleX);
                canvas['item'](big_layer)['set']('scaleY', scaleX);
            } else {
                canvas['item'](big_layer)['set']('scaleX', scaleY);
                canvas['item'](big_layer)['set']('scaleY', scaleY);
            }
        }
        canvas['item'](big_layer)['centerH']();
    }
    canvas['renderAll']();
}
function marcar_colores() {
    var BY = new ColorScheme();
    BY['from_hue'](0x15)['scheme']('triade')['variation']('soft');
    var BZ = canvas['getActiveObject']();
    if (BZ) {
        document['getElementById']('colorGeneral')['value'] = rgb2hex(BZ['get']('fill'));
    } else if (canvas['backgroundColor']) {
        document['getElementById']('colorGeneral')['value'] = rgb2hex(canvas['backgroundColor']);
    }
    if (document['getElementById']('colorGeneral')['value'] != 'undefined') {
        try {
            var C0 = BY['colors']();
        } catch (C1) {
        }
        try {
            document['getElementById']('color_principal')['style']['backgroundColor'] = document['getElementById']('colorGeneral')['value'];
        } catch (C2) {
        }
        var C3 = document['getElementById']('colorGeneral')['value'];
        BY['from_hex'](C3['replace']('#', ''));
        var C4 = BY['colors']()[0x0];
        number = 0x1;
        try {
            var C0 = BY['colors']();
            for (var C6 in C0) {
                var C7 = C0[C6];
                if (number < 0x14) {
                    console['log']('similar' + number + '\x20' + C7);
                    document['getElementById']('similar' + number)['style']['background'] = '#' + C7;
                }
                number++;
            }
        } catch (C8) {
        }
    }
}
function marcar_colores_documento(C9) {
    console['log']('AAAAAAAAAAAAAAAAA\x20BBBBBBBBBBBBBBBBBBBBBB');
    var Ca = [];
    colors_document = 0x0;
    if (canvas['backgroundColor']) {
        colors_document = 0x1;
        if (C9 == 'backgrounds') {
            document['getElementById']('document_colors')['innerHTML'] = document['getElementById']('document_colors')['innerHTML'] + '<button\x20\x20onclick=\x22setFondoColorSeleccionado(\x27' + canvas['backgroundColor'] + '\x27);\x22\x20style=\x22background:\x20' + canvas['backgroundColor'] + '\x22></button>';
        } else {
            document['getElementById']('document_colors')['innerHTML'] = document['getElementById']('document_colors')['innerHTML'] + '<button\x20\x20onclick=\x22cambioColorPassColor(\x27' + canvas['backgroundColor'] + '\x27);\x22\x20style=\x22background:\x20' + canvas['backgroundColor'] + '\x22></button>';
        }
        Ca['push'](canvas['backgroundColor']);
    }
    canvas['forEachObject'](function (Cb) {
        color = rgb2hex(Cb['get']('fill'));
        console['log']('NO\x20color\x20está?' + Ca['indexOf'](color) + color);
        if (Ca['indexOf'](color) == -0x1) {
            colors_document = 0x1;
            if (C9 == 'backgrounds') {
                document['getElementById']('document_colors')['innerHTML'] = document['getElementById']('document_colors')['innerHTML'] + '<button\x20\x20onclick=\x22setFondoColorSeleccionado(\x27' + color + '\x27);\x22\x20style=\x22background:\x20' + color + '\x22></button>';
            } else {
                document['getElementById']('document_colors')['innerHTML'] = document['getElementById']('document_colors')['innerHTML'] + '<button\x20\x20onclick=\x22cambioColorPassColor(\x27' + color + '\x27);\x22\x20style=\x22background:\x20' + color + '\x22></button>';
            }
        }
        Ca['push'](color);
    });
    if (colors_document == 0x1)
        document['getElementById']('document_colors_div')['style']['display'] = '';
    else
        document['getElementById']('document_colors_div')['style']['display'] = 'none';
    var Cc = [
        '#FFFFFF',
        '#E6E6E6',
        '#B3B3B3',
        '#808080',
        '#4D4D4D',
        '#1A1A1A',
        '#000000',
        '#D3F2F4',
        '#A1EDF7',
        '#48D9ED',
        '#1CAFCF',
        '#167D8E',
        '#0F5766',
        '#034149',
        '#C5E7F9',
        '#9BD8FD',
        '#2DABFC',
        '#127AC4',
        '#0E66A1',
        '#0B456A',
        '#032F47',
        '#DCE4F9',
        '#B6C3F3',
        '#677EDD',
        '#3366CC',
        '#1834A0',
        '#091F66',
        '#031238',
        '#E5CEF4',
        '#D1A2EA',
        '#B557DE',
        '#8830B7',
        '#5C1B7A',
        '#3B1154',
        '#210435',
        '#F9E1EE',
        '#FBC6E2',
        '#F779BB',
        '#E72389',
        '#9A0F57',
        '#60083A',
        '#3A0325',
        '#F7D8D5',
        '#FECAC3',
        '#FD8373',
        '#EF2E20',
        '#A1180E',
        '#510C02',
        '#2D0501',
        '#F7E2D2',
        '#F7D3B5',
        '#FDA963',
        '#FD7D23',
        '#AD5515',
        '#512705',
        '#301602',
        '#F7EAD7',
        '#FCE4BE',
        '#FEC564',
        '#FDA429',
        '#A46C19',
        '#603F08',
        '#3A2303',
        '#F9F1D2',
        '#FEEFB1',
        '#FEE478',
        '#FECE2F',
        '#B7951F',
        '#64520D',
        '#493907',
        '#F9F7D2',
        '#FFFDB1',
        '#FFFB7B',
        '#F3ED3E',
        '#B8B424',
        '#797715',
        '#514D08',
        '#E4F2C4',
        '#D8F4A4',
        '#B9F74D',
        '#8BEB3B',
        '#69B02C',
        '#426E1D',
        '#284709',
        '#CBEFD7',
        '#A4F1BF',
        '#86F4AA',
        '#32D364',
        '#1F893A',
        '#0C5B22',
        '#053A11',
        '#F7B19C',
        '#57D0FC',
        '#FB5379',
        '#FCDA86',
        '#527CFA',
        '#59FCAC',
        '#8266F7',
        '#FF6700',
        '#2BF9FE',
        '#FC0E1C',
        '#FFFD38',
        '#FD29FC',
        '#45FA54',
        '#1024FB'
    ];
    CLen = Cc['length'];
    document['getElementById']('document_colors_pal')['innerHTML'] = document['getElementById']('document_colors_pal')['innerHTML'] + '<button\x20style=\x22box-shadow:\x20inset\x201px\x201px\x200\x20rgba(4,21,22,.05),\x20inset\x20-1px\x20-1px\x200\x20rgba(20,\x2016,\x2014,\x201);background:\x20url(data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABHAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCQzNFMDYxODVGNjAxMUU5QTE1NDgyRkE4NzNERkM5RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCQzNFMDYxOTVGNjAxMUU5QTE1NDgyRkE4NzNERkM5RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJDM0UwNjE2NUY2MDExRTlBMTU0ODJGQTg3M0RGQzlFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJDM0UwNjE3NUY2MDExRTlBMTU0ODJGQTg3M0RGQzlFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+IMWElDQ19QUk9GSUxFAAEBAAAMSExpbm8CEAAAbW50clJHQiBYWVogB84AAgAJAAYAMQAAYWNzcE1TRlQAAAAASUVDIHNSR0IAAAAAAAAAAAAAAAAAAPbWAAEAAAAA0y1IUCAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARY3BydAAAAVAAAAAzZGVzYwAAAYQAAABsd3RwdAAAAfAAAAAUYmtwdAAAAgQAAAAUclhZWgAAAhgAAAAUZ1hZWgAAAiwAAAAUYlhZWgAAAkAAAAAUZG1uZAAAAlQAAABwZG1kZAAAAsQAAACIdnVlZAAAA0wAAACGdmlldwAAA9QAAAAkbHVtaQAAA/gAAAAUbWVhcwAABAwAAAAkdGVjaAAABDAAAAAMclRSQwAABDwAAAgMZ1RSQwAABDwAAAgMYlRSQwAABDwAAAgMdGV4dAAAAABDb3B5cmlnaHQgKGMpIDE5OTggSGV3bGV0dC1QYWNrYXJkIENvbXBhbnkAAGRlc2MAAAAAAAAAEnNSR0IgSUVDNjE5NjYtMi4xAAAAAAAAAAAAAAASc1JHQiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAADzUQABAAAAARbMWFlaIAAAAAAAAAAAAAAAAAAAAABYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9kZXNjAAAAAAAAABZJRUMgaHR0cDovL3d3dy5pZWMuY2gAAAAAAAAAAAAAABZJRUMgaHR0cDovL3d3dy5pZWMuY2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZGVzYwAAAAAAAAAuSUVDIDYxOTY2LTIuMSBEZWZhdWx0IFJHQiBjb2xvdXIgc3BhY2UgLSBzUkdCAAAAAAAAAAAAAAAuSUVDIDYxOTY2LTIuMSBEZWZhdWx0IFJHQiBjb2xvdXIgc3BhY2UgLSBzUkdCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRlc2MAAAAAAAAALFJlZmVyZW5jZSBWaWV3aW5nIENvbmRpdGlvbiBpbiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAACxSZWZlcmVuY2UgVmlld2luZyBDb25kaXRpb24gaW4gSUVDNjE5NjYtMi4xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB2aWV3AAAAAAATpP4AFF8uABDPFAAD7cwABBMLAANcngAAAAFYWVogAAAAAABMCVYAUAAAAFcf521lYXMAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAKPAAAAAnNpZyAAAAAAQ1JUIGN1cnYAAAAAAAAEAAAAAAUACgAPABQAGQAeACMAKAAtADIANwA7AEAARQBKAE8AVABZAF4AYwBoAG0AcgB3AHwAgQCGAIsAkACVAJoAnwCkAKkArgCyALcAvADBAMYAywDQANUA2wDgAOUA6wDwAPYA+wEBAQcBDQETARkBHwElASsBMgE4AT4BRQFMAVIBWQFgAWcBbgF1AXwBgwGLAZIBmgGhAakBsQG5AcEByQHRAdkB4QHpAfIB+gIDAgwCFAIdAiYCLwI4AkECSwJUAl0CZwJxAnoChAKOApgCogKsArYCwQLLAtUC4ALrAvUDAAMLAxYDIQMtAzgDQwNPA1oDZgNyA34DigOWA6IDrgO6A8cD0wPgA+wD+QQGBBMEIAQtBDsESARVBGMEcQR+BIwEmgSoBLYExATTBOEE8AT+BQ0FHAUrBToFSQVYBWcFdwWGBZYFpgW1BcUF1QXlBfYGBgYWBicGNwZIBlkGagZ7BowGnQavBsAG0QbjBvUHBwcZBysHPQdPB2EHdAeGB5kHrAe/B9IH5Qf4CAsIHwgyCEYIWghuCIIIlgiqCL4I0gjnCPsJEAklCToJTwlkCXkJjwmkCboJzwnlCfsKEQonCj0KVApqCoEKmAquCsUK3ArzCwsLIgs5C1ELaQuAC5gLsAvIC+EL+QwSDCoMQwxcDHUMjgynDMAM2QzzDQ0NJg1ADVoNdA2ODakNww3eDfgOEw4uDkkOZA5/DpsOtg7SDu4PCQ8lD0EPXg96D5YPsw/PD+wQCRAmEEMQYRB+EJsQuRDXEPURExExEU8RbRGMEaoRyRHoEgcSJhJFEmQShBKjEsMS4xMDEyMTQxNjE4MTpBPFE+UUBhQnFEkUahSLFK0UzhTwFRIVNBVWFXgVmxW9FeAWAxYmFkkWbBaPFrIW1hb6Fx0XQRdlF4kXrhfSF/cYGxhAGGUYihivGNUY+hkgGUUZaxmRGbcZ3RoEGioaURp3Gp4axRrsGxQbOxtjG4obshvaHAIcKhxSHHscoxzMHPUdHh1HHXAdmR3DHeweFh5AHmoelB6+HukfEx8+H2kflB+/H+ogFSBBIGwgmCDEIPAhHCFIIXUhoSHOIfsiJyJVIoIiryLdIwojOCNmI5QjwiPwJB8kTSR8JKsk2iUJJTglaCWXJccl9yYnJlcmhya3JugnGCdJJ3onqyfcKA0oPyhxKKIo1CkGKTgpaymdKdAqAio1KmgqmyrPKwIrNitpK50r0SwFLDksbiyiLNctDC1BLXYtqy3hLhYuTC6CLrcu7i8kL1ovkS/HL/4wNTBsMKQw2zESMUoxgjG6MfIyKjJjMpsy1DMNM0YzfzO4M/E0KzRlNJ402DUTNU01hzXCNf02NzZyNq426TckN2A3nDfXOBQ4UDiMOMg5BTlCOX85vDn5OjY6dDqyOu87LTtrO6o76DwnPGU8pDzjPSI9YT2hPeA+ID5gPqA+4D8hP2E/oj/iQCNAZECmQOdBKUFqQaxB7kIwQnJCtUL3QzpDfUPARANER0SKRM5FEkVVRZpF3kYiRmdGq0bwRzVHe0fASAVIS0iRSNdJHUljSalJ8Eo3Sn1KxEsMS1NLmkviTCpMcky6TQJNSk2TTdxOJU5uTrdPAE9JT5NP3VAnUHFQu1EGUVBRm1HmUjFSfFLHUxNTX1OqU/ZUQlSPVNtVKFV1VcJWD1ZcVqlW91dEV5JX4FgvWH1Yy1kaWWlZuFoHWlZaplr1W0VblVvlXDVchlzWXSddeF3JXhpebF69Xw9fYV+zYAVgV2CqYPxhT2GiYfViSWKcYvBjQ2OXY+tkQGSUZOllPWWSZedmPWaSZuhnPWeTZ+loP2iWaOxpQ2maafFqSGqfavdrT2una/9sV2yvbQhtYG25bhJua27Ebx5veG/RcCtwhnDgcTpxlXHwcktypnMBc11zuHQUdHB0zHUodYV14XY+dpt2+HdWd7N4EXhueMx5KnmJeed6RnqlewR7Y3vCfCF8gXzhfUF9oX4BfmJ+wn8jf4R/5YBHgKiBCoFrgc2CMIKSgvSDV4O6hB2EgITjhUeFq4YOhnKG14c7h5+IBIhpiM6JM4mZif6KZIrKizCLlov8jGOMyo0xjZiN/45mjs6PNo+ekAaQbpDWkT+RqJIRknqS45NNk7aUIJSKlPSVX5XJljSWn5cKl3WX4JhMmLiZJJmQmfyaaJrVm0Kbr5wcnImc951kndKeQJ6unx2fi5/6oGmg2KFHobaiJqKWowajdqPmpFakx6U4pammGqaLpv2nbqfgqFKoxKk3qamqHKqPqwKrdavprFys0K1ErbiuLa6hrxavi7AAsHWw6rFgsdayS7LCszizrrQltJy1E7WKtgG2ebbwt2i34LhZuNG5SrnCuju6tbsuu6e8IbybvRW9j74KvoS+/796v/XAcMDswWfB48JfwtvDWMPUxFHEzsVLxcjGRsbDx0HHv8g9yLzJOsm5yjjKt8s2y7bMNcy1zTXNtc42zrbPN8+40DnQutE80b7SP9LB00TTxtRJ1MvVTtXR1lXW2Ndc1+DYZNjo2WzZ8dp22vvbgNwF3IrdEN2W3hzeot8p36/gNuC94UThzOJT4tvjY+Pr5HPk/OWE5g3mlucf56noMui86Ubp0Opb6uXrcOv77IbtEe2c7ijutO9A78zwWPDl8XLx//KM8xnzp/Q09ML1UPXe9m32+/eK+Bn4qPk4+cf6V/rn+3f8B/yY/Sn9uv5L/tz/bf///+4AJkFkb2JlAGTAAAAAAQMAFQQDBgoNAAARbAAAEY0AABIPAAASjP/bAIQABAMDAwMDBAMDBAYEAwQGBgUEBAUGBwYGBgYGBwoHCAgICAcKCgsMDAwLCgwMDAwMDBERERERExMTExMTExMTEwEEBAQIBwgOCgoOFA4ODhQUExMTExQTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMT/8IAEQgALAAsAwERAAIRAQMRAf/EAIEAAQEBAQAAAAAAAAAAAAAAAAYAAQcBAQAAAAAAAAAAAAAAAAAAAAAQAQEBAQEAAAAAAAAAAAAAACERAEFQEQEAAAAAAAAAAAAAAAAAAABQEgEAAAAAAAAAAAAAAAAAAABQEwABBAICAwEAAAAAAAAAAAAA8AExUSFxEWFBgZFQ/9oADAMBAAIRAxEAAAHvwQFwRFwRIWhIWhIWmhEWhIWhIhaEhaEhaaERaEhaEiFoSFoSFp//2gAIAQEAAQUC3ed51xGkaQzSNI1xGkaQzSNI1xGkaT//2gAIAQIAAQUC8T//2gAIAQMAAQUC8T//2gAIAQICBj8CE//aAAgBAwIGPwIT/9oACAEBAQY/AhP/2gAIAQEDAT8hd24OH+jlvg4f6OW+Dh/obLyaINkmiDZJogfDwbJNEGyTRBskbLyaINkmiDZJogfDwbJNEGyTRBskbLyaINkmiDZJog//2gAIAQIDAT8h/E//2gAIAQMDAT8h/E//2gAMAwEAAhEDEQAAEAAABJJBJJBJJBJJBJJP/9oACAEBAwE/EOQy0P5KD+nZYb26KD+nZYb26KD+nZgdmsQNQgexA1CB7EDUZHR6ED2IGoQPYgahA9mB2axA1CB7EDUIHsQNRkdHoQPYgahA9iBqED2YHZrEDUIHsQNQgexA1H//2gAIAQIDAT8Q/E//2gAIAQMDAT8Q/E//2Q==);no-repeat;\x22\x20\x20onclick=\x22alert(\x27' + traduccion_javascript_fondo_transparente + '\x27);setFondoColorSeleccionado(\x27transparent\x27);\x22\x20></button>';
    for (i = 0x0; i < CLen; i++) {
        if (C9 == 'backgrounds') {
            document['getElementById']('document_colors_pal')['innerHTML'] = document['getElementById']('document_colors_pal')['innerHTML'] + '<button\x20onclick=\x22setFondoColorSeleccionado(\x27' + Cc[i] + '\x27);\x22\x20style=\x22background:\x20' + Cc[i] + '\x22></button>';
        } else {
            document['getElementById']('document_colors_pal')['innerHTML'] = document['getElementById']('document_colors_pal')['innerHTML'] + '<button\x20onclick=\x22cambioColorPassColor(\x27' + Cc[i] + '\x27);\x22\x20style=\x22background:\x20' + Cc[i] + '\x22></button>';
        }
    }
    if (is_admin == 0x1) {
    }
}
function cambioColor(Cd) {
    var Ce = canvas['getActiveObject']();
    if (!Ce) {
        alert(traduccion_javascript_select_object_change_color);
    } else {
        Cd = document['getElementById'](Cd)['style']['background'];
        setActiveStyle('fill', Cd);
        canvas['renderAll']();
    }
}
function cambioColorPassColor(Cf) {
    var Cg = canvas['getActiveObject']();
    if (Cg['get']('type') == 'image') {
        aplicaFiltrosTint(Cf);
    } else {
        if (!Cg) {
            alert(traduccion_javascript_select_object_change_color);
        } else {
            Cf = Cf;
            setActiveStyle('fill', Cf);
            canvas['renderAll']();
        }
    }
}
function changeCategoryAjax(Ch) {
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'dataType': 'text',
        'data': {
            'name_coupon': document['getElementById']('name_coupon')['value'],
            'number_months': document['getElementById']('number_months')['value']
        },
        'success': function (Ci) {
            document['getElementById']('codigosDiscount')['innerHTML'] = Ci;
        },
        'error': function (Cj, Ck, Cl) {
        }
    });
}
function team_cancel(Cm) {
    if (confirm('Do\x20you\x20want\x20to\x20exit\x20the\x20group?')) {
        team_cancel1(Cm);
    } else {
    }
}
function team_cancel1(Cn) {
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'dataType': 'text',
        'data': { 'team_cancel': Cn },
        'success': function (Co) {
            alert(Co);
            location['reload']();
        },
        'error': function (Cp, Cq, Cr) {
        }
    });
}
function member_team_cancel(Cs, Ct) {
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'dataType': 'text',
        'data': { 'member_team_cancel': Cs },
        'success': function (Cu) {
            document['getElementById']('invitado_' + Cs)['style']['display'] = 'none';
            alert('canceled\x20user\x20invitation\x20for\x20email:\x20' + Cs);
        },
        'error': function (Cv, Cw, Cx) {
        }
    });
}
function member_team_accept(Cy, Cz) {
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'dataType': 'text',
        'data': {
            'member_team_accept': Cy,
            'id_usuario_que_invita_': Cz
        },
        'success': function (CA) {
            alert(traduccion_javascript_team_accepted_invitation);
            location['reload']();
        },
        'error': function (CB, CC, CD) {
        }
    });
}
function getTeamMembersInvitations() {
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'dataType': 'text',
        'data': { 'members_team_to_invite': 0x1 },
        'success': function (CE) {
            document['getElementById']('members_html')['innerHTML'] = CE;
        },
        'error': function (CF, CG, CH) {
        }
    });
}
function sendTeamMembersInvitations(CI) {
    var CJ = document['getElementById']('invitation_' + CI)['value'];
    var CK = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    if (CK['test'](CJ) && CJ != '') {
        document['getElementById']('invitation_' + CI)['disabled'] = !![];
        $['ajax']({
            'type': 'POST',
            'url': '/' + trad_url_photo_editor,
            'dataType': 'text',
            'data': { 'email_to_invite': CJ },
            'success': function (CL) {
                if (CL == 'YaInvitado') {
                    alert(traduccion_javascript_team_only_one_group);
                } else {
                    document['getElementById']('invitation_' + CI)['disabled'] = !![];
                    document['getElementById']('invitation_button_' + CI)['disabled'] = !![];
                    document['getElementById']('invitation_button_' + CI)['innerHTML'] = traduccion_javascript_team_invitation_send;
                    document['getElementById']('invitation_button_' + CI)['style']['opacity'] = '0.4';
                }
            },
            'error': function (CM, CN, CO) {
            }
        });
    } else {
        alert(traduccion_javascript_email_incorrect);
    }
}
var share_design_after_save = 0x0;
function shareDesign(CP) {
    if (days_last_suscription <= 0x0) {
        activarID('getPremiumTeams');
        popup_question_premium('getPremiumTeams');
        return;
    }
    if (open_template_not_edited == 0x1 && is_admin != 0x1 && finished_loading_json == 0x1) {
        if (typeof getCookie('email') !== 'undefined' && getCookie('email') !== null) {
            document['getElementById']('botonUpdate')['setAttribute']('onclick', 'console.log(\x27We\x20are\x20saving\x202\x27)');
            document['getElementById']('shareTeam')['setAttribute']('onclick', 'console.log(\x27We\x20are\x20saving\x203\x27)');
            value_share_team_function = document['getElementById']('shareTeam')['getAttribute']('onclick');
            document['getElementById']('botonUpdate')['style']['opacity'] = '0.5';
            document['getElementById']('shareTeam')['style']['opacity'] = '0.5';
            console['log']('We\x20are\x20saving\x201\x20quitamos\x20opacidad\x20y\x20onclicks');
            botonUpdate_html = document['getElementById']('botonUpdate')['innerHTML'];
            saveCanvasUser('updateUser', 0x1);
        }
    } else {
        if (CP == 'template') {
            add_template = traduccion_javascript_team_share_template;
            name_of_shared = traduccion_javascript_team_share_template;
        } else {
            add_template = traduccion_javascript_team_share_design;
            name_of_shared = traduccion_javascript_team_share_design;
        }
        if ($('#shareTeam' + add_template)['hasClass']('deslice')) {
            $('#shareTeam' + add_template)['removeClass']('deslice');
            document['getElementById']('span_design_shared' + add_template)['innerHTML'] = traduccion_javascript_team_share + name_of_shared;
            share = 0x3e7;
        } else {
            $('#shareTeam' + add_template)['addClass']('deslice');
            document['getElementById']('span_design_shared' + add_template)['innerHTML'] = name_of_shared + traduccion_javascript_team_shared;
            share = 0x1;
        }
        $['ajax']({
            'type': 'POST',
            'url': '/' + trad_url_photo_editor,
            'dataType': 'text',
            'data': {
                'id_json_short_share': valor_editor,
                'share': share,
                'tipo_user_or_template': 'json_efectos_user',
                'what_to_share': CP
            },
            'success': function (CQ) {
                console['log'](CQ);
            },
            'error': function (CR, CS, CT) {
            }
        });
    }
}
function exitTeam() {
    alert(traduccion_javascript_not_avalaible_function);
}
function changeTeamName() {
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'dataType': 'text',
        'data': { 'team_name': document['getElementById']('team_name')['value'] },
        'success': function (CU) {
            console['log'](CU);
            document['getElementById']('team_name')['style']['backgroundColor'] = 'green';
            document['getElementById']('style_div_users')['style']['display'] = '';
        },
        'error': function (CV, CW, CX) {
        }
    });
}
function cliconCats(CY) {
    $('.' + CY)['trigger']('click');
}
function textTransform(CZ) {
    var D0 = canvas['getActiveObject']();
    if (D0) {
        console['log'](CZ);
        if (CZ == 'upper') {
            document['getElementById']('mayusButton')['setAttribute']('onclick', 'textTransform(\x27lower\x27)');
            document['getElementById']('mayusButton')['src'] = 'https://dpo3tbth99ua1.cloudfront.net/editor/iconos/newbar/text-aaaa.svg';
        } else if (CZ == 'lower') {
            document['getElementById']('mayusButton')['setAttribute']('onclick', 'textTransform(\x27first\x27)');
            document['getElementById']('mayusButton')['src'] = 'https://dpo3tbth99ua1.cloudfront.net/editor/iconos/newbar/text-aaa.svg';
        } else if (CZ == 'first') {
            document['getElementById']('mayusButton')['setAttribute']('onclick', 'textTransform(\x27upper\x27)');
            document['getElementById']('mayusButton')['src'] = 'https://dpo3tbth99ua1.cloudfront.net/editor/iconos/newbar/text-a.svg';
        } else {
            document['getElementById']('mayusButton')['setAttribute']('onclick', 'textTransform(\x27lower\x27)');
            document['getElementById']('mayusButton')['src'] = 'https://dpo3tbth99ua1.cloudfront.net/editor/iconos/newbar/text-aaaa.svg';
        }
        if (D0['get']('type') == 'i-text' || D0['get']('type') == 'textbox') {
            console['log']('cambiamos\x20el\x20texto\x20del\x20objeto');
            if (CZ == 'upper') {
                D0['text'] = D0['text']['toUpperCase']();
            } else if (CZ == 'lower') {
                D0['text'] = D0['text']['toLowerCase']();
            } else if (CZ == 'first') {
                D0['text'] = D0['text']['toLowerCase']();
                D0['text'] = D0['text']['charAt'](0x0)['toUpperCase']() + D0['text']['slice'](0x1);
            }
            canvas['renderAll']();
        }
    }
    if (canvas['getActiveObject']()['get']('type') == 'activeSelection') {
        canvas['getActiveObject']()['forEachObject'](function (D0) {
            if (D0['get']('type') == 'i-text' || D0['get']('type') == 'textbox') {
                console['log']('cambiamos\x20el\x20texto\x20del\x20objeto');
                if (CZ == 'upper') {
                    D0['text'] = D0['text']['toUpperCase']();
                } else if (CZ == 'lower') {
                    D0['text'] = D0['text']['toLowerCase']();
                } else if (CZ == 'first') {
                    D0['text'] = D0['text']['toLowerCase']();
                    D0['text'] = D0['text']['charAt'](0x0)['toUpperCase']() + D0['text']['slice'](0x1);
                }
            }
        });
    }
    canvas['renderAll']();
}
function allowDrop(D2) {
    D2['preventDefault']();
}
function drag(D3) {
    D3['dataTransfer']['setData']('text', D3['target']['id']);
}
function drop(D4) {
    D4['preventDefault']();
    var D5 = D4['dataTransfer']['getData']('text');
    console['log'](D5);
}
function drop_on_folder(D6, D7) {
    D6['preventDefault']();
    var D8 = D6['dataTransfer']['getData']('text');
    console['log'](D8 + '\x20\x20\x20\x20\x20id_json_short_drag_drop:' + id_json_short_drag_drop + '\x20\x20\x20folder' + D7);
}
var id_json_short_drag_drop = '';
var id_json_short_drag_drop_folder = '';
function imagen_mouseOver(D9, Da)
    {
        id_json_short_drag_drop = D9;
        id_json_short_drag_drop_folder = Da;
        id_json_short_font_drag_dropSRC = '';
        directory_font_drag_dropSRC = '';
        what_font_drag_dropSRC = '';
        id_imagen_drag_dropSRC = '';
        intern_or_extern = '';
    }
var id_imagen_drag_dropSRC = '';
var intern_or_extern = '';
var isPremimOverlay = '';
function imagen_mouseOverSRC(Db, Dc, Dd) {
    id_imagen_drag_dropSRC = Db;
    intern_or_extern = Dc;
    Dd = Dd;
    id_json_short_drag_drop = '';
    id_json_short_font_drag_dropSRC = '';
    directory_font_drag_dropSRC = '';
    what_font_drag_dropSRC = '';
}
var id_json_short_font_drag_dropSRC = '';
var directory_font_drag_dropSRC = '';
var what_font_drag_dropSRC = '';
function font_mouseOverSRC(De, Df, Dg) {
    id_json_short_font_drag_dropSRC = Df;
    directory_font_drag_dropSRC = Dg;
    what_font_drag_dropSRC = De;
    id_imagen_drag_dropSRC = '';
    intern_or_extern = '';
    id_json_short_drag_drop = '';
}
function dodrop(Dh) {
    Dh['preventDefault']();
    if (!id_json_short_drag_drop_folder)
        id_json_short_drag_drop_folder = 'json_efectos';
    if (id_json_short_drag_drop) {
        console['log']('id_json_short_drag_drop:\x20' + id_json_short_drag_drop + '\x20\x20\x20\x20id_json_short_drag_drop_folder' + id_json_short_drag_drop_folder);
        loadCanvas2(id_json_short_drag_drop, id_json_short_drag_drop_folder);
        id_json_short_drag_drop = '';
    } else if (what_font_drag_dropSRC) {
        if (what_font_drag_dropSRC == 'singlefont') {
            cambioFontFamilyResp(id_json_short_font_drag_dropSRC);
        } else {
            loadCanvasFont(id_json_short_font_drag_dropSRC, directory_font_drag_dropSRC);
        }
        id_json_short_font_drag_dropSRC = '';
        directory_font_drag_dropSRC = '';
    } else if (id_imagen_drag_dropSRC) {
        if (id_imagen_drag_dropSRC == 'squareShape' || id_imagen_drag_dropSRC == 'square' || id_imagen_drag_dropSRC == 'circleShape' || id_imagen_drag_dropSRC == 'circle') {
            addElement(id_imagen_drag_dropSRC);
        } else if (intern_or_extern == 0x1) {
            addRuta(id_imagen_drag_dropSRC, '', '', '', '', isPremimOverlay);
        } else {
            addRuta2(id_imagen_drag_dropSRC, '', '');
        }
    }
    id_json_short_drag_drop = '';
    id_imagen_drag_dropSRC = '';
    return ![];
}
var loadingTimeoutShort;
var rand_phrase = 'Loading...';
var timerStart = Date['now']();
var persons_born_per_second = Math['floor'](Math['random']() * 0x2) + 0x6;
var text_loading;
try {
    var phrases = [];
    phrases['push']('“Live\x20in\x20the\x20leading—the\x20spaces\x20in\x20between\x20the\x20rules.”\x20\x20–\x20Stefan\x20Mumaw');
    phrases['push']('“Have\x20no\x20fear\x20of\x20perfection—you’ll\x20never\x20reach\x20it.”\x20\x20–\x20Salvador\x20Dali');
    phrases['push']('“Good\x20design\x20is\x20like\x20a\x20refrigerator—when\x20it\x20works,\x20no\x20one\x20notices,\x20but\x20when\x20it\x20doesn’t,\x20it\x20sure\x20stinks.”\x20\x20–\x20Irene\x20Au');
    phrases['push']('“Digital\x20design\x20is\x20like\x20painting,\x20except\x20the\x20paint\x20never\x20dries.”\x20-Neville\x20Brody');
    phrases['push']('“The\x20alternative\x20to\x20good\x20design\x20is\x20always\x20bad\x20design.\x20There\x20is\x20no\x20such\x20thing\x20as\x20no\x20design.”\x20\x20–\x20Adam\x20Judge');
    phrases['push']('“It’s\x20easier\x20to\x20ask\x20forgiveness\x20than\x20it\x20is\x20to\x20get\x20permission.”\x20-Grace\x20Hopper');
    phrases['push']('“Creativity\x20is\x20a\x20highfalutin\x20word\x20for\x20the\x20work\x20I\x20have\x20to\x20do\x20between\x20now\x20and\x20Tuesday.”\x20\x20–\x20Ray\x20Kroc');
    phrases['push']('“Creativity\x20is\x20nothing\x20but\x20a\x20mind\x20set\x20free.”\x20\x20–\x20Torrie\x20T.\x20Asai');
    phrases['push']('“Art\x20is\x20anything\x20you\x20can\x20get\x20away\x20with.”\x20\x20–\x20Marshal\x20McLuhan');
    phrases['push']('“The\x20role\x20of\x20the\x20designer\x20is\x20that\x20of\x20a\x20good,\x20thoughtful\x20host\x20anticipating\x20the\x20needs\x20of\x20his\x20guests”\x20\x20–\x20Charles\x20Eames');
    phrases['push']('“Graphic\x20design\x20will\x20save\x20the\x20world\x20right\x20after\x20rock\x20and\x20roll\x20does.”\x20\x20–\x20David\x20Carson');
    phrases['push']('“Make\x20it\x20simple,\x20but\x20significant.”\x20\x20–\x20Don\x20Draper');
    phrases['push']('“Design\x20can\x20be\x20art.\x20Design\x20can\x20be\x20simple.\x20That’s\x20why\x20it’s\x20so\x20complicated.”\x20\x20–\x20Paul\x20Rand');
    phrases['push']('“Simplicity\x20is\x20the\x20ultimate\x20sophistication.”\x20\x20–\x20Leonardo\x20da\x20Vinci');
    phrases['push']('“Whitespace\x20is\x20like\x20air:\x20it\x20is\x20necessary\x20for\x20design\x20to\x20breathe.”\x20\x20–\x20Wojciech\x20Zieliński');
    phrases['push']('“You\x20don’t\x20have\x20to\x20be\x20‘a\x20creative’\x20to\x20be\x20creative.”\x20\x20–\x20Droby\x20Ben-Menachem');
    phrases['push']('“For\x20every\x20complex\x20problem,\x20there\x20is\x20an\x20aswer\x20that\x20is\x20clear,\x20simple,\x20and\x20wrong.”\x20\x20–\x20H.\x20L.\x20Mencken');
    phrases['push']('“Design\x20is\x20thinking\x20made\x20visual.”\x20\x20–\x20Saul\x20Bass');
    phrases['push']('“Good\x20design\x20is\x20honest.”\x20\x20–\x20Dieter\x20Rams');
    phrases['push']('“The\x20best\x20way\x20to\x20predict\x20the\x20future\x20is\x20to\x20create\x20it”\x20\x20–\x20Abraham\x20Lincoln');
    phrases['push']('“Recognizing\x20the\x20need\x20is\x20the\x20primary\x20condition\x20for\x20design.”\x20\x20–\x20Charles\x20Eames');
    phrases['push']('“Good\x20design\x20is\x20obvious.\x20Great\x20design\x20is\x20transparent.”\x20\x20–\x20Joe\x20Sparano');
    phrases['push']('“If\x20I\x20had\x20asked\x20people\x20what\x20they\x20wanted,\x20they\x20would\x20have\x20said\x20faster\x20horses.”\x20\x20–\x20Henry\x20Ford');
    phrases['push']('“Design\x20is\x20a\x20solution\x20to\x20a\x20problem.\x20Art\x20is\x20a\x20question\x20to\x20a\x20problem.”\x20\x20–\x20John\x20Maeda');
    phrases['push']('“Simplicity\x20is\x20about\x20subtracting\x20the\x20obvious\x20and\x20adding\x20the\x20meaningful.”\x20\x20–\x20John\x20Maeda');
    phrases['push']('“Simplicity\x20is\x20not\x20the\x20goal.\x20It\x20is\x20the\x20by-product\x20of\x20a\x20good\x20idea\x20and\x20modest\x20expectations.”\x20\x20–\x20Paul\x20Rand');
    phrases['push']('“Simplicity,\x20wit,\x20and\x20good\x20typography.”\x20\x20–\x20Michael\x20Bierut');
    phrases['push']('“Design\x20is\x20more\x20important\x20than\x20technology\x20in\x20most\x20consumer\x20applications.”\x20\x20–\x20Dave\x20McClure');
    phrases['push']('“The\x20details\x20are\x20not\x20the\x20details.\x20They\x20make\x20the\x20design.”\x20\x20–\x20Charles\x20Eames');
    phrases['push']('“Great\x20design\x20is\x20a\x20multi-layered\x20relationship\x20between\x20human\x20life\x20and\x20its\x20environment.”\x20\x20–\x20Naoto\x20Fukasawa');
    phrases['push']('“Design\x20is\x20so\x20simple.\x20That’s\x20why\x20it’s\x20so\x20complicated.”\x20\x20–\x20Paul\x20Rand');
    phrases['push']('“Any\x20product\x20that\x20needs\x20a\x20manual\x20to\x20work\x20is\x20broken.”\x20\x20–\x20Elon\x20Musk');
    phrases['push']('“I\x20believe\x20in\x20design.”\x20\x20–\x20Daniel\x20Rodriguez');
    phrases['push']('“Design\x20and\x20win.”\x20\x20–\x20Ernest\x20Carballido');
} catch (Di) {
}
function LoadingChanges() {
    try {
        rand_phrase = phrases[Math['floor'](Math['random']() * phrases['length'])];
    } catch (Dj) {
    }
    document['getElementById']('loadingText')['innerHTML'] = rand_phrase;
    text_loading = '';
    console['log']('%c\x20Loading1', 'background:\x20#222;\x20color:\x20#bada55');
    console['log']('%c\x20Loading2', 'background:\x20#222;\x20color:\x20#bada55');
    doMessage();
}
function doMessage() {
    try {
        rand_phrase = phrases[Math['floor'](Math['random']() * phrases['length'])];
    } catch (Dk) {
    }
    document['getElementById']('loadingText')['innerHTML'] = '';
    rand_phrase;
}
function IsSafari() {
    var Dl = navigator['platform']['match'](/(Mac|iPhone|iPod|iPad)/i) ? !![] : ![];
    if (Dl) {
    }
    return 'mac';
}
function openInNewTab(Dm) {
    var Dn = window['open'](Dm, '_blank');
    Dn['focus']();
}
function createDesignNew() {
    if (ancho > 0x0 && alto > 0x0) {
    } else {
        ancho = 0x438;
        alto = 0x438;
    }
    canvas['clear']();
    changeCanvasSize(ancho + 'x' + alto);
    saveCanvasUser('nuevo');
}
var sizeClipTo;
function changeClipTO(Do) {
    sizeClipTo = Do;
    if (sizeClipTo > 0x0) {
        var Dp = canvas['getActiveObject']();
        Dp['clipTo'] = function (Dq) {
            Dq['arc'](0x1f4, 0x1f4, sizeClipTo, 0x0, Math['PI'] * 0x2, !![]);
        };
        Dp['set']('id', 'sizeClipTo|' + sizeClipTo);
        document['getElementById']('infoClipTo')['innerHTML'] = sizeClipTo;
        document['getElementById']('infoClipTo_backup')['value'] = sizeClipTo;
        canvas['calcOffset']();
        canvas['renderAll']();
    }
}
function addClipTo() {
    var Dr = canvas['getActiveObject']();
    if (Dr['width'] > Dr['height'])
        sizeClipTo = Dr['height'] / 0x2;
    else
        sizeClipTo = Dr['width'] / 0x2;
    Dr['clipTo'] = function (Ds) {
        Ds['arc'](0x0, 0x0, sizeClipTo, 0x0, Math['PI'] * 0x2, !![]);
    };
    canvas['renderAll']();
    Dr['set']('id', 'sizeClipTo|' + sizeClipTo);
}
function addClipToRect() {
    var Dt = canvas['getActiveObject']();
    x_square = Dt['width'] / 0x2 / 0x2;
    y_square = Dt['height'] / 0x2 / 0x2;
    w_square = Dt['width'] / 0x2;
    y_square = Dt['height'] / 0x2;
    x_square = 0x32;
    y_square = 0x32;
    w_square = 0x64;
    y_square = 0x64;
    console['log'](x_square + '\x20' + y_square + '\x20' + w_square + '\x20' + y_square);
    Dt['clipTo'] = function (Du) {
        Du['rect'](x_square, y_square, w_square, y_square);
    };
    canvas['renderAll']();
}
function groupElements() {
    if (!canvas['getActiveObject']()) {
        return;
    }
    if (canvas['getActiveObject']()['type'] !== 'activeSelection') {
        return;
    }
    canvas['getActiveObject']()['toGroup']();
    canvas['requestRenderAll']();
    if ($('#agrupate_button')['length'] > 0x0) {
        document['getElementById']('agrupate_button')['onclick'] = 'unGroupElements();';
        document['getElementById']('agrupate_button_span')['innerHTML'] = '' + traduccion_javascript_desagrupate + '';
        document['getElementById']('agrupate_button')['setAttribute']('onclick', 'unGroupElements();');
    }
}
function unGroupElements(Dv) {
    if (is_admin == 0x1) {
        traduccion_javascript_desagrupar = traduccion_javascript_desagrupar_admin['replace']('XXX', Dv);
    }
    if (confirm(traduccion_javascript_desagrupar)) {
        grabar_accion('botones_barra', 'desagrupar_elementos');
        if (!canvas['getActiveObject']()) {
            unselectAllObjects();
            return;
        }
        if (canvas['getActiveObject']()['type'] !== 'group') {
            unselectAllObjects();
            return;
        }
        canvas['getActiveObject']()['toActiveSelection']();
        canvas['requestRenderAll']();
        if ($('#Desagrupate')['length'] > 0x0) {
            document['getElementById']('agrupate_button')['onclick'] = 'groupElements();';
            document['getElementById']('agrupate_button_span')['innerHTML'] = '' + traduccion_javascript_agrupate + '';
            document['getElementById']('agrupate_button')['setAttribute']('onclick', 'groupElements();');
        }
    } else {
        grabar_accion('botones_barra', 'desagrupar_elementos_cancel');
    }
}
function getLocalstorage() {
    var Dw = localStorage['getItem']('AUTOSAVE_EDIT');
    $['getJSON'](Dw, function (Dx) {
        var Dy = [];
        $['each'](Dx['objects'], function (Dz, DA) {
            if (DA['id'] != null) {
                fuente_id = 'ini|' + DA['id'] + '|aaa';
                if (fuente_id['indexOf']('sizeClipTo')) {
                    data_in_id = fuente_id['split']('|');
                    if (data_in_id[0x1] == 'sizeClipTo') {
                        sizeClipTo = data_in_id[0x2];
                    }
                }
            }
            if (DA['fontFamily'] != null) {
                if (notificaciones == 0x1)
                    console['log']('Fuentes\x20en\x20json:\x20' + DA['fontFamily']);
                Dy['push'](DA['fontFamily']);
            }
        });
        if (notificaciones == 0x1)
            console['log'](Dy);
        var DB = [];
        $['each'](Dy, function (DC, DD) {
            if ($['inArray'](DD, DB) === -0x1)
                DB['push'](DD);
        });
        if (notificaciones == 0x1)
            console['log'](DB);
        var DE = 0x0;
        if (DB['length'] > 0x0) {
            for (var DF = 0x0; DF < DB['length']; DF++) {
                fuente_a_cargar = DB[DF];
                var DG = new FontFaceObserver(fuente_a_cargar);
                DG['load']()['then'](function () {
                    if (activar_notificaciones == 0x1)
                        console['log'](fuente_a_cargar + '\x20is\x20available');
                    DE++;
                    if (DB['length'] == DE) {
                        canvas['loadFromJSON'](Dx, function () {
                            if (notificaciones == 0x1)
                                console['log']('CARGAMOS\x20JSON');
                            ajustar_canvas(ancho, alto);
                            canvas['calcOffset']();
                            canvas['renderAll']();
                            setearPropiedadesID(0x3);
                            activate_loading('end');
                        });
                    }
                }, function () {
                    console['log']('Font\x20is\x20not\x20available\x20after\x20waiting\x205\x20seconds');
                    DE++;
                    if (DB['length'] == DE) {
                        canvas['loadFromJSON'](Dx, function () {
                            if (notificaciones == 0x1)
                                console['log']('CARGAMOS\x20JSON');
                            ajustar_canvas(ancho, alto);
                            canvas['calcOffset']();
                            canvas['renderAll']();
                            activate_loading('end');
                            setearPropiedadesID(0x2);
                        });
                    }
                });
            }
        } else {
            canvas['loadFromJSON'](Dx, function () {
                if (notificaciones == 0x1)
                    console['log']('CARGAMOS\x20JSON');
                ajustar_canvas(ancho, alto);
                canvas['calcOffset']();
                canvas['renderAll']();
                activate_loading('end');
                setearPropiedadesID(0x1);
            });
        }
        if (from == 'loading') {
            cambioSubCategoria('efectos2');
        }
        if (size) {
            var DH = size['split']('x');
            createDesignNew(DH[0x0], DH[0x1]);
        }
    })['fail'](function (DI, DJ, DK) {
        var DL = DJ + ',\x20' + DK;
        console['log']('Request\x20Failed\x2022140:\x20' + DL);
        activate_loading('end');
        cambioSubCategoria('efectos2');
    });
}
function fonts_list_by_family(DM) {
    document['getElementById']('button_select_categories_select')['options'][0x0]['innerHTML'] = traduccion_var_all_fonts;
    $('#fonts_list')['find']('a')['each'](function () {
        if (DM == 'all') {
            $(this)['show']();
        } else if ($(this)['attr']('data-font-family') == DM) {
            $(this)['show']();
        } else {
            $(this)['hide']();
        }
    });
}
function fonts_list_by_lang(DN) {
    $('#fonts_list')['find']('a')['each'](function () {
        if (DN == 'all') {
            $(this)['show']();
        } else if ($(this)['attr']('data-font-lang') == DN) {
            $(this)['show']();
        } else {
            $(this)['hide']();
        }
    });
}
function scrollUp(DO) {
    if (DO) {
        var DP = new SimpleBar(document['getElementById'](DO));
        DP['getScrollElement']();
        DP['scrollContentEl']['scrollTop'] = 0x0;
    } else {
        var DP = new SimpleBar(document['getElementById']('wrapHeight'));
        DP['getScrollElement']();
        DP['scrollContentEl']['scrollTop'] = 0x0;
    }
    console['log']('Subimos\x20arriba\x20del\x20todo');
}
function folders_functions(DR, DS, DT, DU, DV, DW) {
    shared_or_not = getRadioValue('type_shared');
    if (!DS) {
        if (!DU) {
            DU = document['getElementById']('name_folder')['value'];
        }
    }
    console['log'](tabla_current);
    if (!DV) {
        DV = tabla_current;
    }
    if (!DT) {
        DT = valor_editor;
    }
    if (!DU && !DS) {
        document['getElementById']('errorFolder')['style']['display'] = '';
        document['getElementById']('errorFolder')['innerHTML'] = traduccion_javascript_folders_not_empty;
    } else {
        $['ajax']({
            'type': 'POST',
            'url': '/' + trad_url_photo_editor,
            'dataType': 'text',
            'data': {
                'folders_functions': 0x1,
                'what': DR,
                'id_folder': DS,
                'id_element': DT,
                'name_folder': DU,
                'type_': DV,
                'shared_or_not': shared_or_not
            },
            'success': function (DX) {
                if (DX == 'add_element_to_folders_elements_is_premium');
                {
                    if (days_last_suscription <= 0x0 && DR == 'add_to_folder') {
                        activarID('getPremiumFolders');
                        popup_question_premium('getPremiumFolders');
                    }
                }
                if (DU) {
                    $('.buttonMyDesigns')['trigger']('click');
                } else if (DX == 'add_element_to_folders_elements') {
                    document['getElementById']('groupFolder')['style']['display'] = 'none';
                    cerrarFoggy();
                    if (DW) {
                        $('#template' + DW)['fadeOut']('slow');
                        $('#id_folder_' + DS)['slideUp'](0x1f4)['slideDown'](0x1f4);
                    }
                }
                if (DX == 'update_folder') {
                    document['getElementById']('groupFolder')['style']['display'] = 'none';
                    cerrarFoggy();
                    if (DW) {
                        $('#template' + DW)['fadeOut']('slow');
                        $('#id_folder_' + DS)['slideUp'](0x1f4)['slideDown'](0x1f4);
                    }
                }
                if (DX == 'folder_exists') {
                    document['getElementById']('errorFolder')['style']['display'] = '';
                    document['getElementById']('errorFolder')['innerHTML'] = traduccion_javascript_folders_same_name;
                }
                if (DR == 'create_new_folder') {
                    document['getElementById']('groupFolder')['style']['display'] = 'none';
                    cerrarFoggy();
                    $('.buttonMyDesigns')['trigger']('click');
                }
            },
            'error': function (DY, DZ, E0) {
            }
        });
    }
}
function folders_tooltip(E1, E2, E3, E4) {
    grabar_accion('folders', E1);
    if (days_last_suscription <= 0x0 && (E1 == 'create_folder' || E1 == 'add_to_folder')) {
        activarID('getPremiumFolders');
        popup_question_premium('getPremiumFolders');
    } else {
        if (E1 == 'create_folder') {
            document['getElementById']('groupFolder')['style']['display'] = 'none';
        }
        estamos_editando = '0';
        if (getCookie('email') == null) {
            registroUsuario();
        } else {
            shared_or_not = getRadioValue('type_shared');
            if (!E2) {
                E2 = tabla_current;
            }
            if (!E3 && E3 != -0x1) {
                E3 = valor_editor;
            }
            if (E3 == -0x1) {
                E3 = '';
            }
            $['ajax']({
                'type': 'POST',
                'url': '/' + trad_url_photo_editor,
                'dataType': 'text',
                'data': {
                    'popup_folders': 0x1,
                    'what': E1,
                    'id_element': E3,
                    'type_': E2,
                    'shared_or_not': shared_or_not,
                    'id_element_md5': E4
                },
                'success': function (E5) {
                    activarID('groupFolder');
                    document['getElementById']('groupFolder')['innerHTML'] = E5;
                    if (E1 = 'add_to_folder') {
                        $('.buttonMyDesigns')['trigger']('click');
                    }
                },
                'error': function (E6, E7, E8) {
                }
            });
        }
    }
}
function getRadioValue(E9) {
    var Ea = document['getElementsByName'](E9);
    for (var Eb = 0x0, Ec = Ea['length']; Eb < Ec; Eb++) {
        if (Ea[Eb]['checked']) {
            return Ea[Eb]['value'];
            break;
        }
    }
}
function payments_select_single_teams(Ed, Ee) {
    $('#select_single')['removeClass']('activeRadio');
    $('#select_team')['removeClass']('activeRadio');
    $('#' + Ee)['addClass']('activeRadio');
    document['getElementById'](Ed)['checked'] = 'checked';
    if (Ee == 'select_single') {
        document['getElementById']('teams_plan_html')['style']['display'] = 'none';
        document['getElementById']('single_plan_html')['style']['display'] = '';
        document['getElementById']('id_plan')['value'] = 0x1;
        try {
            document['getElementById']('price1')['checked'] = 'checked';
        } catch (Ef) {
        }
    } else {
        document['getElementById']('single_plan_html')['style']['display'] = 'none';
        document['getElementById']('teams_plan_html')['style']['display'] = '';
        document['getElementById']('id_plan')['value'] = 0x3;
        try {
            document['getElementById']('price3')['checked'] = 'checked';
        } catch (Eg) {
        }
    }
}
function activateRadioById(Eh, Ei) {
    document['getElementById'](Eh)['checked'] = 'checked';
    if ($(Ei)['length'] > 0x0) {
        document['getElementById']('id_plan')['value'] = Ei;
    }
    if (Ei == 0x1) {
        $('#div_teams_2')['removeClass']('activeRadio');
        $('#div_teams_1')['addClass']('activeRadio');
    }
    if (Ei == 0x2) {
        $('#div_teams_1')['removeClass']('activeRadio');
        $('#div_teams_2')['addClass']('activeRadio');
    }
    if (Ei == 0x3) {
        $('#div_teams_4')['removeClass']('activeRadio');
        $('#div_teams_3')['addClass']('activeRadio');
    }
    if (Ei == 0x4) {
        $('#div_teams_3')['removeClass']('activeRadio');
        $('#div_teams_4')['addClass']('activeRadio');
    }
}
var done_ajax_search_for_templates = 0x1;
var position_when_scroll;
function eventListener_scroll() {
    myScroller = new SimpleBar(document['getElementById']('wrapHeight'));
    myScroller['getScrollElement']()['addEventListener']('scroll', function () {
        try {
            zt['hide']($('#reemplazarImagen'));
            zt['hide']($('#file_upload_button'));
        } catch (Ej) {
        }
        console['log']($(this)['scrollTop']() + $(this)['innerHeight']() + '\x20this.scrollHeight\x20:' + $(this)[0x0]['scrollHeight']);
        if ($(this)['scrollTop']() + $(this)['innerHeight']() + 0x28 >= $(this)[0x0]['scrollHeight']) {
            if (the_end_scroll_has_been_detected != 0x3e7) {
                console['log']('Bottom\x20reached1!\x20' + the_end_scroll_has_been_detected);
                if (done_ajax_search_for_templates == 0x1) {
                    load_more_elements_templates();
                    position_when_scroll = $(this)['scrollTop']();
                }
            } else {
                console['log']('Bottom\x20reached\x20buf\x20no\x20more\x20templates\x20to\x20show,\x20show\x20alternatives?');
            }
        }
    }, ![]);
}
function load_more_elements_templates() {
    try {
        console['log']('the_end_scroll_has_been_detected111111' + the_end_scroll_has_been_detected);
        if (the_end_scroll_has_been_detected == 0x0) {
            console['log']('aaaaaa2222');
            document['getElementById']('loading-templates')['style']['display'] = '';
            the_end_scroll_has_been_detected = 0x1;
            console['log']('aaaaaa22222222223333');
            done_ajax_search_for_templates = 0x0;
            $['ajax']({
                'type': 'POST',
                'url': '/' + trad_url_photo_editor,
                'dataType': 'text',
                'data': { 'load_more_elements_templates': '1' },
                'success': function (Ek) {
                    var El = Ek['split']('|');
                    query = El[0x0];
                    Ek = El[0x1];
                    if (Ek) {
                        $('#templates_list')['append'](Ek);
                        document['getElementById']('loading-templates')['style']['display'] = 'none';
                        console_log_colors('There\x20is\x20data,\x20we\x20load\x20templates', 'white', 'black');
                        the_end_scroll_has_been_detected = 0x0;
                    } else {
                        the_end_scroll_has_been_detected = 0x3e7;
                        console_log_colors('There\x20was\x20no\x20data\x20returned,\x20so\x20no\x20load\x20more\x20elements', 'white', 'red');
                        document['getElementById']('loading-templates')['style']['display'] = 'none';
                    }
                    myScroller['getScrollElement']()['scrollTo'](0x0, position_when_scroll);
                    done_ajax_search_for_templates = 0x1;
                },
                'error': function (Em, En, Eo) {
                    console['log']('There\x20is\x20and\x20error' + Eo);
                }
            });
        } else {
            var Ep = new Date();
            var Eq = Ep['getMinutes']() + ':' + Ep['getSeconds']();
            console_log_colors(Eq + 'Aún\x20no\x20ha\x20acabado\x20ajax\x20=\x200', 'red', 'white');
        }
    } catch (Er) {
    }
}
$('.logoweb,.userProfile')['bind']('click', function () {
    $['ajax']({
        'type': 'POST',
        'url': '/_saveAction.php',
        'dataType': 'text',
        'data': { 'load_user_area': 0x1 },
        'success': function (Es) {
            $['when'](document['getElementById']('user_data_div')['innerHTML'] = Es)['then'](function () {
                $('.userBlock')['addClass']('activeOptionsUser');
                if (getCookie('imagen')) {
                    document['getElementById']('image_userBIG')['src'] = getCookie('imagen');
                }
                if (getCookie('name')) {
                    document['getElementById']('name_userBIG')['innerHTML'] = getCookie('name')['substr'](0x0, 0x14);
                }
                if (getCookie('email') == null) {
                    document['getElementById']('fbLinkMail')['style']['display'] = '';
                    try {
                        document['getElementById']('fbLinkMail1')['style']['display'] = '';
                    } catch (Et) {
                    }
                    document['getElementById']('linkLogout')['style']['display'] = 'none';
                } else {
                    document['getElementById']('fbLinkMail')['style']['display'] = 'none';
                    try {
                        document['getElementById']('fbLinkMail1')['style']['display'] = 'none';
                    } catch (Eu) {
                    }
                    document['getElementById']('linkLogout')['style']['display'] = '';
                }
            });
        },
        'error': function (Ev, Ew, Ex) {
        }
    });
});
function setEventedFalse(Ey) {
    if (Ey == 'all') {
        canvas['forEachObject'](function (Ez) {
            Ez['evented'] = !![];
            Ez['selectable'] = !![];
            Ez['hasControls'] = !![];
            Ez['set']('lockMovementX', ![]);
            Ez['set']('lockMovementY', ![]);
            Ez['set']('perPixelTargetFind', ![]);
        });
        blocked_layers = [];
        blocked_layers_not = [];
        console['log']('aaaaaaaaaaaaaaaaaa:' + blocked_layers);
        layersAddIds();
        canvas['calcOffset']();
        canvas['renderAll']();
        alert('Todas\x20las\x20capas\x20se\x20pueden\x20seleccionar');
        console['log']('aaaaaaaaaaaaaaaaaa:' + blocked_layers);
        console['log']('bbbbbbbbbbbbbbbbbb:' + blocked_layers_not);
    } else if (Ey == 'textos_bringtofront') {
        canvas['forEachObject'](function (EA) {
            if (EA['get']('type') == 'i-text' || EA['get']('type') == 'textbox') {
                canvas['bringToFront'](EA);
                console['log']('subimos\x20el\x20elemento');
            }
        });
        canvas['calcOffset']();
        canvas['renderAll']();
        alert('Todos\x20los\x20textos\x20están\x20en\x20las\x20capas\x20superiores');
    } else if (Ey == 'textos_todos') {
        canvas['forEachObject'](function (EB) {
            EB['set']('hasControls', ![]);
            EB['hasControls'] = ![];
            EB['set']('lockMovementX', !![]);
            EB['set']('lockMovementY', !![]);
            EB['set']('lockScalingFlip', !![]);
        });
        canvas['calcOffset']();
        canvas['renderAll']();
        alert('Bloqueadas\x20todas\x20las\x20capas');
    } else if (Ey == 'textos') {
        var EC = canvas['getActiveObject']();
        EC['set']('hasControls', ![]);
        EC['hasControls'] = ![];
        EC['set']('lockMovementX', !![]);
        EC['set']('lockMovementY', !![]);
        EC['set']('lockScalingFlip', !![]);
    } else if (Ey == 'editable') {
        if (canvas['getActiveObject']()['get']('type') == 'activeSelection') {
            canvas['getActiveObject']()['forEachObject'](function (ED) {
                EC = ED;
                for (var EE = 0x0; EE < blocked_layers['length']; EE++) {
                    if (blocked_layers[EE] === EC['get']('id')) {
                        blocked_layers['splice'](EE, 0x1);
                    }
                }
                for (var EE = 0x0; EE < blocked_layers_not['length']; EE++) {
                    if (blocked_layers_not[EE] === EC['get']('id')) {
                        blocked_layers_not['splice'](EE, 0x1);
                    }
                }
                blocked_layers['push'](EC['id']);
                EC['set']('lockMovementX', !![]);
                EC['set']('lockMovementY', !![]);
            });
        } else if (canvas['getActiveObject']()) {
            var EC = canvas['getActiveObject']();
            var EH = canvas['getActiveObject']();
            for (var EI = 0x0; EI < blocked_layers['length']; EI++) {
                if (blocked_layers[EI] === EH['get']('id')) {
                    blocked_layers['splice'](EI, 0x1);
                }
            }
            for (var EI = 0x0; EI < blocked_layers_not['length']; EI++) {
                if (blocked_layers_not[EI] === EH['get']('id')) {
                    blocked_layers_not['splice'](EI, 0x1);
                }
            }
            blocked_layers['push'](EH['id']);
            EC['set']('lockMovementX', !![]);
            EC['set']('lockMovementY', !![]);
        }
    } else if (Ey == 'overlay_selectable') {
        if (canvas['getActiveObject']()['get']('type') == 'activeSelection') {
            canvas['getActiveObject']()['forEachObject'](function (EK) {
                EC = EK;
                EC['set']('evented', 'true');
                EC['set']('lockMovementX', !![]);
                EC['set']('lockMovementY', !![]);
                EC['set']('lockScalingFlip', !![]);
                EC['evented'] = !![];
                EC['selectable'] = !![];
                EC['hasControls'] = ![];
                EC['set']('perPixelTargetFind', !![]);
                EC['targetFindTolerance'] = 0x4;
                canvas['calcOffset']();
                canvas['renderAll']();
                console['log']('foreach\x20objeto');
            });
        } else if (canvas['getActiveObject']()) {
            var EC = canvas['getActiveObject']();
            console['log']('solo\x201\x20\x20objeto');
            EC['set']('evented', 'true');
            EC['set']('lockMovementX', !![]);
            EC['set']('lockMovementY', !![]);
            EC['set']('lockScalingFlip', !![]);
            EC['evented'] = !![];
            EC['selectable'] = !![];
            EC['hasControls'] = ![];
            EC['set']('perPixelTargetFind', !![]);
            EC['targetFindTolerance'] = 0x4;
            canvas['calcOffset']();
            canvas['renderAll']();
        }
    } else {
        console['log'](canvas['getActiveObject']()['get']('type'));
        if (canvas['getActiveObject']()['get']('type') == 'activeSelection') {
            console['log']('entramos\x20en\x20activwe\x20selection');
            canvas['getActiveObject']()['forEachObject'](function (EM) {
                EC = EM;
                EC['set']('evented', 'false');
                EC['evented'] = ![];
                EC['selectable'] = ![];
                EC['hasControls'] = ![];
                console['log'](EC['get']('type') + 'bbbbbbbb');
                canvas['calcOffset']();
                canvas['renderAll']();
            });
        } else if (canvas['getActiveObject']()) {
            var EC = canvas['getActiveObject']();
            EC['set']('evented', 'false');
            EC['evented'] = ![];
            EC['selectable'] = ![];
            EC['hasControls'] = ![];
            console['log'](EC['get']('type') + 'aaaaaaa');
            canvas['calcOffset']();
            canvas['renderAll']();
            canvas['calcOffset']();
            canvas['renderAll']();
        }
    }
}
var addWatermark_yes_no = '';
function desactivar0(EO) {
    addWatermark_yes_no = '';
    add_user_action('click', 'boton', valor_editor, 'download_design');
    if (EO == 0x1 && document['getElementById']('getPremiumPacks')['style']['display'] != 'none') {
        activarID('getPremiumPacks');
    }
    console['log']('es_premium' + es_premium);
    if (es_premium == 0x1) {
        if (suscription_type == 'premium' && days_last_suscription > 0x0) {
            console['log']('Is\x20premium\x20suscription_type:' + suscription_type + '\x20days_last_suscription:' + days_last_suscription);
        } else {
            if (typeof getCookie('email') !== 'undefined' && getCookie('email')) {
                if (EO == 0x1) {
                    addWatermark_yes_no = EO;
                    console['log']('we\x20add\x20watermark');
                } else {
                    activarID('getPremiumPacks');
                    popup_question_premium('getPremiumPacks');
                    return;
                }
            } else {
                registroUsuario();
                return;
            }
        }
    }
    selector_de_formatos_descarga = 0x1;
    $('.frame-overflow')['foggy']({
        'blurRadius': 0x4,
        'opacity': 0.9,
        'cssFilterSupport': !![]
    });
    if (typeof getCookie('email') !== 'undefined' && getCookie('email')) {
        downloadPopup();
    } else {
        registroUsuario();
    }
}
function downloadPopup() {
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'dataType': 'text',
        'data': {
            'downloadPopup': 0x1,
            'addWatermark_yes_no': addWatermark_yes_no
        },
        'success': function (EP) {
            document['getElementById']('selectordeFormatos')['innerHTML'] = EP;
            document['getElementById']('selectordeFormatos')['style']['display'] = '';
            activate_loading('end');
        },
        'error': function (EQ, ER, ES) {
        }
    });
}
function inviteFriends() {
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'dataType': 'text',
        'data': { 'inviteFriends': 0x1 },
        'success': function (ET) {
            document['getElementById']('inviteFriends')['innerHTML'] = ET;
            activate_loading('end');
        },
        'error': function (EU, EV, EW) {
        }
    });
}
function loadPremiumHeader() {
    $['ajax']({
        'type': 'POST',
        'url': '/' + trad_url_photo_editor,
        'dataType': 'text',
        'data': { 'loadPremiumHeader': 0x1 },
        'success': function (EX) {
            var EY = EX['split']('|');
            mensaje_premium = EY[0x0];
            filter_premium_star = EY[0x1];
            days_last_suscription = EY[0x2];
            suscription_type = EY[0x3];
            activate_loading('end');
        },
        'error': function (EZ, F0, F1) {
        }
    });
}
function getStyles() {
    object = canvas['getActiveObject']();
    console['log'](object['get']('text'));
    object['set']('styles', '{\x20}');
    object['set']('styles', '');
    canvas['calcOffset']();
    canvas['renderAll']();
}
function changePasswordFunction(F2) {
    if (document['getElementById']('passwordFieldChange')['style']['display'] == 'none' && F2 != 'reset') {
        alert('Introduce\x20tu\x20nuevo\x20password\x20para\x20cambiarlo');
        document['getElementById']('passwordFieldChange')['style']['display'] = '';
    } else {
        if (F2 == 'reset') {
            lenght_pass = document['getElementById']('passwordFieldChangeValue1')['value']['length'];
            passwordFieldChangeValue = document['getElementById']('passwordFieldChangeValue1')['value'];
        } else {
            lenght_pass = document['getElementById']('passwordFieldChangeValue')['value']['length'];
            passwordFieldChangeValue = document['getElementById']('passwordFieldChangeValue')['value'];
        }
        if (lenght_pass > 0x5) {
            $['ajax']({
                'type': 'POST',
                'url': '/' + trad_url_photo_editor,
                'dataType': 'text',
                'data': { 'passwordFieldChange': passwordFieldChangeValue },
                'success': function (F3) {
                    alert(traduccion_javascript_cambio_pass_ok);
                    if (F2 == 'reset') {
                        document['getElementById']('changePasswordResetTooltip')['style']['display'] = 'none';
                    } else {
                        document['getElementById']('passwordFieldChangeValue')['value'] = '';
                        document['getElementById']('passwordFieldChange')['style']['display'] = 'none';
                    }
                },
                'error': function (F4, F5, F6) {
                    alert('ERR:\x20' + document['getElementById']('passwordFieldChangeValue'));
                }
            });
        } else {
            alert(traduccion_password_erroneo + '\x20' + lenght_pass);
        }
    }
}
function imageToBackground() {
    if (canvas['getActiveObject']()) {
        img = canvas['getActiveObject']();
        put_image_on_background_yet = 0x1;
        if (img['get']('width') / canvas['width'] > img['get']('height') / canvas['height']) {
            img['scaleToHeight'](canvas['height'] + 0x64);
        } else {
            img['scaleToWidth'](canvas['width'] + 0x64);
        }
        viewportTransform = canvas['viewportTransform'];
        canvasRealWidth = canvas['width'] / viewportTransform[0x0];
        canvasRealHeight = canvas['height'] / viewportTransform[0x0];
        left_img_ini = (canvasRealWidth - img['get']('width') * img['get']('scaleX')) / 0x2;
        top_img_ini = (canvasRealHeight - img['get']('height') * img['get']('scaleY')) / 0x2;
        console['log']('canvas_\x20' + canvasRealWidth + '\x20img:' + img['get']('width') * img['get']('scaleX') + '\x20left_img_ini:' + left_img_ini);
        console['log']('canvas_\x20' + canvasRealHeight + '\x20height\x20img:' + img['get']('height') * img['get']('scaleX') + '\x20top_img_ini:' + top_img_ini);
        img['set']('top', top_img_ini);
        img['set']('left', left_img_ini);
        id_inserted = img['get']('src');
        canvas['sendToBack'](img)['renderAll']();
    }
}
function expand_bar_function(F7) {
    grabar_accion('templates_expand_retract', F7);
    if (F7 == 'expand') {
        $('section')['toggleClass']('double-templates');
        $('.tooltipSelectDesign')['toggleClass']('nimize');
        try {
            document['getElementById']('shrink_button')['style']['display'] = '';
            document['getElementById']('ampling_button')['style']['display'] = 'none';
        } catch (F8) {
        }
    } else {
        $('section')['removeClass']('double-templates');
        $('.tooltipSelectDesign')['removeClass']('nimize');
        try {
            document['getElementById']('shrink_button')['style']['display'] = 'none';
            document['getElementById']('ampling_button')['style']['display'] = '';
        } catch (F9) {
        }
    }
}
var locale_lang;
function activateChat(Fa) {
    if (estamos_en_fotoefectos == 0x1) {
    } else {
        grabar_accion('open_chat', 'open_chat');
        !function () {
            var Fb = window['driftt'] = window['drift'] = window['driftt'] || [];
            if (!Fb['init']) {
                if (Fb['invoked'])
                    return void (window['console'] && console['error'] && console['error']('Drift\x20snippet\x20included\x20twice.'));
                Fb['invoked'] = !0x0, Fb['methods'] = [
                    'identify',
                    'config',
                    'track',
                    'reset',
                    'debug',
                    'show',
                    'ping',
                    'page',
                    'hide',
                    'off',
                    'on'
                ], Fb['factory'] = function (Fc) {
                    return function () {
                        var Fd = Array['prototype']['slice']['call'](arguments);
                        return Fd['unshift'](Fc), Fb['push'](Fd), Fb;
                    };
                }, Fb['methods']['forEach'](function (Fe) {
                    Fb[Fe] = Fb['factory'](Fe);
                }), Fb['load'] = function (Fb) {
                    var Fg = 0x493e0, Fh = Math['ceil'](new Date() / Fg) * Fg, Fi = document['createElement']('script');
                    Fi['type'] = 'text/javascript', Fi['async'] = !0x0, Fi['crossorigin'] = 'anonymous', Fi['src'] = 'https://js.driftt.com/include/' + Fh + '/' + Fb + '.js';
                    var Fj = document['getElementsByTagName']('script')[0x0];
                    Fj['parentNode']['insertBefore'](Fi, Fj);
                };
            }
        }();
        drift['SNIPPET_VERSION'] = '0.3.1';
        if (lang == 'es') {
            locale_lang = 'es-ES';
        } else {
            locale_lang = 'en-US';
        }
        if (Fa == 'team') {
            welcomeMessageChoose = traduccion_javascript_chat_welcomeMessageTeam;
        } else {
            welcomeMessageChoose = traduccion_javascript_chat_welcomeMessage;
        }
        console['log'](welcomeMessageChoose);
        drift['config']({
            'locale': locale_lang,
            'messages': {
                'welcomeMessage': welcomeMessageChoose,
                'awayMessage': traduccion_javascript_chat_awayMessage,
                'emailCaptureMessage': traduccion_javascript_chat_emailCaptureMessage,
                'thankYouMessage': traduccion_javascript_chat_thankYouMessage
            },
            'autoAssignee': {
                'name': traduccion_javascript_chat_nombre,
                'title': traduccion_javascript_chat_nombre1
            }
        });
        drift['load']('wg59nyx33nmd');
        drift['identify'](user_email);
        console['log'](window['innerWidth']);
        drift['on']('ready', function (Fk, Fl) {
            if (window['innerWidth'] >= 0x30c) {
                Fk['sidebar']['open']();
            }
        });
    }
}
document['addEventListener']('click', function (Fm) {
    if ($('.frame-overflow')['css']('-webkit-filter')['indexOf']('lur') == 0x1) {
        console['log']($('.frame-overflow')['css']('-webkit-filter'));
        if ($(Fm['target'])['attr']('class') == 'simplebar-content') {
            console['log'](Fm['target']);
            closeAllTooltips();
        }
    }
}, ![]);
function canvastoSVG() {
    console['log'](canvas['toSVG']());
}
$(document)['mouseup'](function (Fn) {
    var Fo = $('#user_data_div');
    if (!Fo['is'](Fn['target']) && Fo['has'](Fn['target'])['length'] === 0x0) {
        $('.userBlock')['removeClass']('activeOptionsUser');
    }
});
function addVideo() {
    var Fp = document['getElementById']('video1');
    var Fq = new fabric['Image'](Fp, {
        'left': 0xc8,
        'top': 0x12c,
        'angle': -0xf,
        'originX': 'center',
        'originY': 'center',
        'objectCaching': ![]
    });
    canvas['add'](Fq);
    Fq['getElement']()['play']();
    canvas['renderAll']();
}