var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.apptbook;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = '25C7BD6DFC0CCDA2BB54F3B5A3931DC4';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 'object', $intern_1 = 'java.lang', $intern_2 = 'com.google.gwt.core.client', $intern_3 = {3:1, 5:1}, $intern_4 = 'com.google.gwt.core.client.impl', $intern_5 = 65535, $intern_6 = {3:1, 4:1}, $intern_7 = {74:1, 27:1, 3:1, 7:1, 6:1}, $intern_8 = 'com.google.gwt.dom.client', $intern_9 = 'com.google.web.bindery.event.shared', $intern_10 = 'com.google.gwt.event.shared', $intern_11 = 'com.google.gwt.event.dom.client', $intern_12 = 'click', $intern_13 = {42:1, 3:1, 5:1}, $intern_14 = 'UmbrellaException', $intern_15 = 'com.google.gwt.http.client', $intern_16 = 'com.google.gwt.user.client', $intern_17 = 'Content-Type', $intern_18 = {29:1, 3:1, 5:1}, $intern_19 = 'yyyy/MM/dd hh:mm a', $intern_20 = 'com.google.gwt.i18n.shared', $intern_21 = 'DateTimeFormat', $intern_22 = 'com.google.gwt.i18n.client', $intern_23 = 'DefaultDateTimeFormatInfo', $intern_24 = 4194303, $intern_25 = 1048575, $intern_26 = 524288, $intern_27 = 4194304, $intern_28 = 17592186044416, $intern_29 = -9223372036854775808, $intern_30 = 'com.google.gwt.text.shared.testing', $intern_31 = 'CSS1Compat', $intern_32 = 65536, $intern_33 = 16777216, $intern_34 = 33554432, $intern_35 = 67108864, $intern_36 = 'com.google.gwt.user.client.rpc', $intern_37 = 'com.google.gwt.user.client.rpc.impl', $intern_38 = {9:1, 3:1, 7:1, 6:1}, $intern_39 = 'com.google.gwt.user.client.ui', $intern_40 = {19:1, 14:1, 17:1, 16:1, 20:1, 13:1, 12:1}, $intern_41 = 'verticalAlign', $intern_42 = {19:1, 14:1, 17:1, 16:1, 20:1, 53:1, 13:1, 12:1}, $intern_43 = {26:1, 3:1, 7:1, 6:1}, $intern_44 = 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (', $intern_45 = 'Expect more errors.', $intern_46 = 'edu.pdx.cs410J', $intern_47 = "My Owner's appointment book with ", $intern_48 = ' appointments', $intern_49 = 'edu.pdx.cs410J.whitlock.client', $intern_50 = 'com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533', $intern_51 = 'com.google.gwt.user.client.rpc.RpcTokenException/2345075298', $intern_52 = 'com.google.gwt.user.client.rpc.XsrfToken/4254043109', $intern_53 = 'edu.pdx.cs410J.whitlock.client.Appointment/3851555314', $intern_54 = 'edu.pdx.cs410J.whitlock.client.AppointmentBook/2348650516', $intern_55 = '[Ledu.pdx.cs410J.whitlock.client.Appointment;/2278264828', $intern_56 = 'java.lang.Boolean/476441737', $intern_57 = 'java.lang.String/2004016611', $intern_58 = 'java.util.ArrayList/4159755760', $intern_59 = 'java.util.Arrays$ArrayList/2507071751', $intern_60 = 'java.util.Collections$EmptyList/4157118744', $intern_61 = 'java.util.Collections$EmptySet/3523698179', $intern_62 = 'java.util.Collections$SingletonList/1586180994', $intern_63 = 'java.util.HashSet/3273092938', $intern_64 = 'java.util.LinkedHashSet/95640124', $intern_65 = 'java.util.LinkedList/3953877921', $intern_66 = 'java.util.Stack/1346942793', $intern_67 = 'java.util.TreeMap/1493889780', $intern_68 = 'java.util.TreeSet/4043497002', $intern_69 = 'java.util.Vector/3057315478', $intern_70 = 'For input string: "', $intern_71 = 'java.util', $intern_72 = {11:1, 24:1}, $intern_73 = {11:1, 18:1}, $intern_74 = {3:1, 11:1, 18:1}, $intern_75 = {3:1, 11:1, 24:1}, $intern_76 = {3:1, 23:1}, $intern_77 = '__proto__', $intern_78 = {3:1, 7:1, 6:1, 30:1}, $intern_79 = 'com.google.gwt.lang';
var _, com_google_gwt_lang_ModuleUtils_initFnList, com_google_gwt_lang_JavaClassHierarchySetupUtil_prototypesByTypeId = {}, com_google_gwt_lang_CollapsedPropertyHolder_permutationId = -1;
function com_google_gwt_lang_JavaClassHierarchySetupUtil_typeMarkerFn__V(){
}

function com_google_gwt_lang_JavaClassHierarchySetupUtil_portableObjCreate__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function com_google_gwt_lang_JavaClassHierarchySetupUtil_modernizeBrowser__V(){
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

function com_google_gwt_lang_JavaClassHierarchySetupUtil_maybeGetClassLiteralFromPlaceHolder__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(entry){
  return entry instanceof Array?entry[0]:null;
}

function com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V(){
}

function com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(typeId, superTypeId, castableTypeMap){
  var prototypesByTypeId = com_google_gwt_lang_JavaClassHierarchySetupUtil_prototypesByTypeId;
  var createSubclassPrototype = com_google_gwt_lang_JavaClassHierarchySetupUtil_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2;
  var maybeGetClassLiteralFromPlaceHolder = com_google_gwt_lang_JavaClassHierarchySetupUtil_maybeGetClassLiteralFromPlaceHolder__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2;
  var prototype = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype);
  if (prototype && !clazz) {
    _ = prototype;
  }
   else {
    _ = prototypesByTypeId[typeId] = !superTypeId?{}:createSubclassPrototype(superTypeId);
    _.java_lang_Object_castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    !superTypeId && (_.java_lang_Object_typeMarker$ = com_google_gwt_lang_JavaClassHierarchySetupUtil_typeMarkerFn__V);
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.java_lang_Object__1_1_1clazz$ = clazz);
}

function com_google_gwt_lang_JavaClassHierarchySetupUtil_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(superTypeId){
  var prototypesByTypeId = com_google_gwt_lang_JavaClassHierarchySetupUtil_prototypesByTypeId;
  return com_google_gwt_lang_JavaClassHierarchySetupUtil_portableObjCreate__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(prototypesByTypeId[superTypeId]);
}

function com_google_gwt_lang_ModuleUtils_setGwtProperty__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V(propertyName, propertyValue){
  typeof window === $intern_0 && typeof window['$gwt'] === $intern_0 && (window['$gwt'][propertyName] = propertyValue);
}

function com_google_gwt_lang_ModuleUtils_registerEntry__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_core_client_impl_Impl_entry__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2;
}

function com_google_gwt_lang_ModuleUtils_gwtOnLoad__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(errFn, modName, modBase, softPermutationId){
  com_google_gwt_lang_ModuleUtils_ensureModuleInit__V();
  var initFnList = com_google_gwt_lang_ModuleUtils_initFnList;
  $moduleName = modName;
  $moduleBase = modBase;
  com_google_gwt_lang_CollapsedPropertyHolder_permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function com_google_gwt_lang_ModuleUtils_ensureModuleInit__V(){
  com_google_gwt_lang_ModuleUtils_initFnList == null && (com_google_gwt_lang_ModuleUtils_initFnList = []);
}

function com_google_gwt_lang_ModuleUtils_addInitFunctions__V(){
  com_google_gwt_lang_ModuleUtils_ensureModuleInit__V();
  var initFnList = com_google_gwt_lang_ModuleUtils_initFnList;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function java_lang_Object_Object__V(){
}

function java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(this$static, other){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(this$static)?java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static, other):com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(this$static)?this$static.equals__Ljava_lang_Object_2Z$(other):com_google_gwt_lang_Cast_isJavaArray__Ljava_lang_Object_2Z(this$static)?this$static === other:this$static === other;
}

function java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(this$static){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(this$static)?com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit:com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(this$static)?this$static.java_lang_Object__1_1_1clazz$:com_google_gwt_lang_Cast_isJavaArray__Ljava_lang_Object_2Z(this$static)?this$static.java_lang_Object__1_1_1clazz$:com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit;
}

function java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(this$static){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(this$static)?java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(this$static):com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(this$static)?this$static.hashCode__I$():com_google_gwt_lang_Cast_isJavaArray__Ljava_lang_Object_2Z(this$static)?com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(this$static):com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(this$static);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(1, null, {}, java_lang_Object_Object__V);
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Object_equals__Ljava_lang_Object_2Z(other){
  return this === other;
}
;
_.getClass__Ljava_lang_Class_2$ = function java_lang_Object_getClass__Ljava_lang_Class_2(){
  return this.java_lang_Object__1_1_1clazz$;
}
;
_.hashCode__I$ = function java_lang_Object_hashCode__I(){
  return com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(this);
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Object_toString__Ljava_lang_String_2(){
  return java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(this)) + '@' + (java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(this) >>> 0).toString(16);
}
;
_.toString = function(){
  return this.toString__Ljava_lang_String_2$();
}
;
com_google_gwt_lang_Cast_stringCastMap = {3:1, 250:1, 7:1, 2:1};
com_google_gwt_lang_JavaClassHierarchySetupUtil_modernizeBrowser__V();
function com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(src_0) && !!com_google_gwt_lang_Cast_stringCastMap[dstId] || src_0.java_lang_Object_castableTypeMap$ && !!src_0.java_lang_Object_castableTypeMap$[dstId];
}

function com_google_gwt_lang_Cast_charToString__CLjava_lang_String_2(x_0){
  return String.fromCharCode(x_0);
}

function com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(src_0, dstId){
  if (src_0 != null && !com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId)) {
    throw new java_lang_ClassCastException_ClassCastException__V;
  }
  return src_0;
}

function com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  if (src_0 != null && !(!com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(src_0) && !com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(src_0))) {
    throw new java_lang_ClassCastException_ClassCastException__V;
  }
  return src_0;
}

function com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  if (src_0 != null && !com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(src_0)) {
    throw new java_lang_ClassCastException_ClassCastException__V;
  }
  return src_0;
}

function com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(src_0){
  return !com_google_gwt_lang_Cast_instanceofArray__Ljava_lang_Object_2Z(src_0) && com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(src_0);
}

function com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId){
  return src_0 != null && com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId);
}

function com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(src_0){
  return src_0 != null && !com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(src_0) && !com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(src_0);
}

function com_google_gwt_lang_Cast_instanceofArray__Ljava_lang_Object_2Z(src_0){
  return Array.isArray(src_0);
}

function com_google_gwt_lang_Cast_isJavaArray__Ljava_lang_Object_2Z(src_0){
  return com_google_gwt_lang_Cast_instanceofArray__Ljava_lang_Object_2Z(src_0) && com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(src_0);
}

function com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(src_0){
  return typeof src_0 === 'string';
}

function com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  return src_0 == null?null:src_0;
}

function com_google_gwt_lang_Cast_round_1int__DI(x_0){
  return ~~Math.max(Math.min(x_0, 2147483647), -2147483648);
}

function com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(o){
  if (o != null) {
    throw new java_lang_ClassCastException_ClassCastException__V;
  }
  return null;
}

var com_google_gwt_lang_Cast_stringCastMap;
function java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this$static){
  if (this$static.java_lang_Class_typeName != null) {
    return;
  }
  java_lang_Class_initializeNames__Ljava_lang_Class_2V(this$static);
}

function java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this$static){
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this$static);
  return this$static.java_lang_Class_typeName;
}

function java_lang_Class_Class__V(){
  ++java_lang_Class_nextSequentialId;
  this.java_lang_Class_typeName = null;
  this.java_lang_Class_simpleName = null;
  this.java_lang_Class_packageName = null;
  this.java_lang_Class_compoundName = null;
  this.java_lang_Class_canonicalName = null;
  this.java_lang_Class_typeId = null;
  this.java_lang_Class_arrayLiterals = null;
}

function java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName){
  var clazz;
  clazz = new java_lang_Class_Class__V;
  clazz.java_lang_Class_packageName = packageName;
  clazz.java_lang_Class_compoundName = compoundClassName;
  return clazz;
}

function java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2(packageName, compoundClassName, typeId){
  var clazz;
  clazz = java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName);
  java_lang_Class_maybeSetClassLiteral__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2V(typeId, clazz);
  return clazz;
}

function java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName);
  java_lang_Class_maybeSetClassLiteral__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2V(typeId, clazz);
  clazz.java_lang_Class_modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function java_lang_Class_createForInterface__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2(packageName, compoundClassName){
  var clazz;
  clazz = java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName);
  clazz.java_lang_Class_modifiers = 2;
  return clazz;
}

function java_lang_Class_createForPrimitive__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(className, primitiveTypeId){
  var clazz;
  clazz = java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2('', className);
  clazz.java_lang_Class_typeId = primitiveTypeId;
  clazz.java_lang_Class_modifiers = 1;
  return clazz;
}

function java_lang_Class_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(leafClass, dimensions){
  var arrayLiterals = leafClass.java_lang_Class_arrayLiterals = leafClass.java_lang_Class_arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.private$java_lang_Class$createClassLiteralForArray__ILjava_lang_Class_2(dimensions));
}

function java_lang_Class_getPrototypeForClass__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2(clazz){
  if (clazz.isPrimitive__Z()) {
    return null;
  }
  var typeId = clazz.java_lang_Class_typeId;
  var prototype = com_google_gwt_lang_JavaClassHierarchySetupUtil_prototypesByTypeId[typeId];
  return prototype;
}

function java_lang_Class_initializeNames__Ljava_lang_Class_2V(clazz){
  if (clazz.isArray__Z()) {
    var componentType = clazz.java_lang_Class_componentType;
    componentType.isPrimitive__Z()?(clazz.java_lang_Class_typeName = '[' + componentType.java_lang_Class_typeId):!componentType.isArray__Z()?(clazz.java_lang_Class_typeName = '[L' + componentType.getName__Ljava_lang_String_2() + ';'):(clazz.java_lang_Class_typeName = '[' + componentType.getName__Ljava_lang_String_2());
    clazz.java_lang_Class_canonicalName = componentType.getCanonicalName__Ljava_lang_String_2() + '[]';
    clazz.java_lang_Class_simpleName = componentType.getSimpleName__Ljava_lang_String_2() + '[]';
    return;
  }
  var packageName = clazz.java_lang_Class_packageName;
  var compoundName = clazz.java_lang_Class_compoundName;
  compoundName = compoundName.split('/');
  clazz.java_lang_Class_typeName = java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('.', [packageName, java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('$', compoundName)]);
  clazz.java_lang_Class_canonicalName = java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('.', [packageName, java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('.', compoundName)]);
  clazz.java_lang_Class_simpleName = compoundName[compoundName.length - 1];
}

function java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function java_lang_Class_maybeSetClassLiteral__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2V(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.java_lang_Class_typeId = typeId;
  var prototype = java_lang_Class_getPrototypeForClass__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2(clazz);
  if (!prototype) {
    com_google_gwt_lang_JavaClassHierarchySetupUtil_prototypesByTypeId[typeId] = [clazz];
    return;
  }
  prototype.java_lang_Object__1_1_1clazz$ = clazz;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(77, 1, {}, java_lang_Class_Class__V);
_.private$java_lang_Class$createClassLiteralForArray__ILjava_lang_Class_2 = function java_lang_Class_createClassLiteralForArray__ILjava_lang_Class_2(dimensions){
  var clazz;
  clazz = new java_lang_Class_Class__V;
  clazz.java_lang_Class_modifiers = 4;
  dimensions > 1?(clazz.java_lang_Class_componentType = java_lang_Class_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(this, dimensions - 1)):(clazz.java_lang_Class_componentType = this);
  return clazz;
}
;
_.getCanonicalName__Ljava_lang_String_2 = function java_lang_Class_getCanonicalName__Ljava_lang_String_2(){
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this);
  return this.java_lang_Class_canonicalName;
}
;
_.getName__Ljava_lang_String_2 = function java_lang_Class_getName__Ljava_lang_String_2(){
  return java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this);
}
;
_.getSimpleName__Ljava_lang_String_2 = function java_lang_Class_getSimpleName__Ljava_lang_String_2(){
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this);
  return this.java_lang_Class_simpleName;
}
;
_.isArray__Z = function java_lang_Class_isArray__Z(){
  return (this.java_lang_Class_modifiers & 4) != 0;
}
;
_.isPrimitive__Z = function java_lang_Class_isPrimitive__Z(){
  return (this.java_lang_Class_modifiers & 1) != 0;
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Class_toString__Ljava_lang_String_2(){
  return ((this.java_lang_Class_modifiers & 2) != 0?'interface ':(this.java_lang_Class_modifiers & 1) != 0?'':'class ') + (java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this) , this.java_lang_Class_typeName);
}
;
_.java_lang_Class_modifiers = 0;
var java_lang_Class_nextSequentialId = 1;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Object', 1), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'JavaScriptObject$', 0), com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Class_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Class', 77);
function java_lang_Throwable_$initCause__Ljava_lang_Throwable_2Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this$static, cause){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkState__ZLjava_lang_Object_2V(!this$static.java_lang_Throwable_cause);
  com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalArgument__ZLjava_lang_Object_2V(cause != this$static, 'Self-causation not permitted');
  this$static.java_lang_Throwable_cause = cause;
  return this$static;
}

function java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2(this$static){
  var className, msg;
  className = java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this$static.java_lang_Object__1_1_1clazz$);
  msg = this$static.getMessage__Ljava_lang_String_2();
  return msg != null?className + ': ' + msg:className;
}

function java_lang_Throwable_Throwable__Ljava_lang_String_2Ljava_lang_Throwable_2V(message, cause){
  this.java_lang_Throwable_cause = cause;
  this.java_lang_Throwable_detailMessage = message;
  com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Throwable_2Ljava_lang_Object_2V(this, this.java_lang_Throwable_detailMessage);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(5, 1, $intern_3);
_.getMessage__Ljava_lang_String_2 = function java_lang_Throwable_getMessage__Ljava_lang_String_2(){
  return this.java_lang_Throwable_detailMessage;
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Throwable_toString__Ljava_lang_String_2(){
  return java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Throwable_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Throwable', 5);
function java_lang_Exception_Exception__Ljava_lang_String_2V(message){
  this.java_lang_Throwable_detailMessage = message;
  com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Throwable_2Ljava_lang_Object_2V(this, this.java_lang_Throwable_detailMessage);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(38, 5, $intern_3);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Exception_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Exception', 38);
function java_lang_RuntimeException_RuntimeException__V(){
  com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Throwable_2Ljava_lang_Object_2V(this, this.java_lang_Throwable_detailMessage);
}

function java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V(message){
  java_lang_Exception_Exception__Ljava_lang_String_2V.call(this, message);
}

function java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2Ljava_lang_Throwable_2V(message, cause){
  java_lang_Throwable_Throwable__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, message, cause);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(10, 38, $intern_3);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1RuntimeException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'RuntimeException', 10);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(103, 10, $intern_3);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1JavaScriptExceptionBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'JavaScriptExceptionBase', 103);
function com_google_gwt_core_client_JavaScriptException_$clinit__V(){
  com_google_gwt_core_client_JavaScriptException_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_core_client_JavaScriptException_NOT_1SET = new java_lang_Object_Object__V;
}

function com_google_gwt_core_client_JavaScriptException_$ensureInit__Lcom_google_gwt_core_client_JavaScriptException_2V(this$static){
  var exception;
  if (this$static.com_google_gwt_core_client_JavaScriptException_message == null) {
    exception = com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_core_client_JavaScriptException_e) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_core_client_JavaScriptException_NOT_1SET)?null:this$static.com_google_gwt_core_client_JavaScriptException_e;
    this$static.com_google_gwt_core_client_JavaScriptException_name = exception == null?'null':com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(exception)?com_google_gwt_core_client_JavaScriptException_getExceptionName0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2Ljava_lang_Object_2(exception)):com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(exception)?'String':java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(exception));
    this$static.com_google_gwt_core_client_JavaScriptException_description = this$static.com_google_gwt_core_client_JavaScriptException_description + ': ' + (com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(exception)?com_google_gwt_core_client_JavaScriptException_getExceptionDescription0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2Ljava_lang_Object_2(exception)):exception + '');
    this$static.com_google_gwt_core_client_JavaScriptException_message = '(' + this$static.com_google_gwt_core_client_JavaScriptException_name + ') ' + this$static.com_google_gwt_core_client_JavaScriptException_description;
  }
}

function com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V(e){
  com_google_gwt_core_client_JavaScriptException_$clinit__V();
  this.java_lang_Throwable_cause = null;
  this.java_lang_Throwable_detailMessage = null;
  this.com_google_gwt_core_client_JavaScriptException_description = '';
  this.com_google_gwt_core_client_JavaScriptException_e = e;
  this.com_google_gwt_core_client_JavaScriptException_description = '';
}

function com_google_gwt_core_client_JavaScriptException_getExceptionDescription0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(e){
  return e == null?null:e.message;
}

function com_google_gwt_core_client_JavaScriptException_getExceptionName0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(e){
  return e == null?null:e.name;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(25, 103, {25:1, 3:1, 5:1}, com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V);
_.getMessage__Ljava_lang_String_2 = function com_google_gwt_core_client_JavaScriptException_getMessage__Ljava_lang_String_2(){
  return com_google_gwt_core_client_JavaScriptException_$ensureInit__Lcom_google_gwt_core_client_JavaScriptException_2V(this) , this.com_google_gwt_core_client_JavaScriptException_message;
}
;
_.getThrown__Ljava_lang_Object_2 = function com_google_gwt_core_client_JavaScriptException_getThrown__Ljava_lang_Object_2(){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this.com_google_gwt_core_client_JavaScriptException_e) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_core_client_JavaScriptException_NOT_1SET)?null:this.com_google_gwt_core_client_JavaScriptException_e;
}
;
var com_google_gwt_core_client_JavaScriptException_NOT_1SET;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'JavaScriptException', 25);
function com_google_gwt_core_client_JsDate_create__DLcom_google_gwt_core_client_JsDate_2(milliseconds){
  return new Date(milliseconds);
}

function com_google_gwt_core_client_JsDate_now__D(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(216, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1Scheduler_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Scheduler', 216);
function com_google_gwt_core_client_impl_Impl_apply__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var _;
}

function com_google_gwt_core_client_impl_Impl_enter__Z(){
  var now_0;
  if (com_google_gwt_core_client_impl_Impl_entryDepth != 0) {
    now_0 = com_google_gwt_core_client_JsDate_now__D();
    if (now_0 - com_google_gwt_core_client_impl_Impl_watchdogEntryDepthLastScheduled > 2000) {
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthLastScheduled = now_0;
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = $wnd.setTimeout(com_google_gwt_core_client_impl_Impl_watchdogEntryDepthRun__V, 10);
    }
  }
  if (com_google_gwt_core_client_impl_Impl_entryDepth++ == 0) {
    com_google_gwt_core_client_impl_SchedulerImpl_$flushEntryCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE));
    return true;
  }
  return false;
}

function com_google_gwt_core_client_impl_Impl_entry__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(jsFunction){
  return function(){
    return com_google_gwt_core_client_impl_Impl_entry0__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, this, arguments);
    var _;
  }
  ;
}

function com_google_gwt_core_client_impl_Impl_entry0__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = com_google_gwt_core_client_impl_Impl_enter__Z();
  try {
    return com_google_gwt_core_client_impl_Impl_apply__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, args);
  }
   finally {
    com_google_gwt_core_client_impl_Impl_exit__ZV(initialEntry);
  }
}

function com_google_gwt_core_client_impl_Impl_exit__ZV(initialEntry){
  initialEntry && com_google_gwt_core_client_impl_SchedulerImpl_$flushFinallyCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE));
  --com_google_gwt_core_client_impl_Impl_entryDepth;
  if (initialEntry) {
    if (com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId != -1) {
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthCancel__IV(com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId);
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = -1;
    }
  }
}

function com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(o){
  return o.$H || (o.$H = ++com_google_gwt_core_client_impl_Impl_sNextHashId);
}

function com_google_gwt_core_client_impl_Impl_getModuleBaseURL__Ljava_lang_String_2(){
  var key = '__gwtDevModeHook:' + $moduleName + ':moduleBase';
  var global = $wnd || self;
  return global[key] || $moduleBase;
}

function com_google_gwt_core_client_impl_Impl_reportToBrowser__Ljava_lang_Object_2V(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function com_google_gwt_core_client_impl_Impl_watchdogEntryDepthCancel__IV(timerId){
  $wnd.clearTimeout(timerId);
}

function com_google_gwt_core_client_impl_Impl_watchdogEntryDepthRun__V(){
  com_google_gwt_core_client_impl_Impl_entryDepth != 0 && (com_google_gwt_core_client_impl_Impl_entryDepth = 0);
  com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = -1;
}

var com_google_gwt_core_client_impl_Impl_entryDepth = 0, com_google_gwt_core_client_impl_Impl_sNextHashId = 0, com_google_gwt_core_client_impl_Impl_watchdogEntryDepthLastScheduled = 0, com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = -1;
function com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V(){
  com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE = new com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V;
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushEntryCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldQueue, rescheduled;
  if (this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands;
      this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands = null;
      rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(oldQueue, rescheduled);
    }
     while (this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands);
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands = rescheduled;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushFinallyCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldQueue, rescheduled;
  if (this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands;
      this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = null;
      rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(oldQueue, rescheduled);
    }
     while (this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands);
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = rescheduled;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V(){
}

function com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].nullMethod() && (rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(rescheduled, t)):com_google_gwt_user_client_impl_WindowImplIE_$initWindowCloseHandlerImpl__Lcom_google_gwt_user_client_impl_WindowImplIE_2V();
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 5)) {
        e = $e0;
        com_google_gwt_core_client_impl_Impl_reportToBrowser__Ljava_lang_Object_2V(com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(e, 25)?com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(e, 25).getThrown__Ljava_lang_Object_2():e);
      }
       else 
        throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    }
  }
  return rescheduled;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(140, 216, {}, com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V);
var com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1SchedulerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'SchedulerImpl', 140);
function com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V(){
  com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  var c, enforceLegacy;
  enforceLegacy = !(!!Error.stackTraceLimit || 'stack' in new Error);
  c = new com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V;
  com_google_gwt_core_client_impl_StackTraceCreator_collector = enforceLegacy?new com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V:c;
}

function com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Throwable_2Ljava_lang_Object_2V(throwable, reference){
  com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V();
  com_google_gwt_core_client_impl_StackTraceCreator_collector.collect__Ljava_lang_Object_2Ljava_lang_Object_2V(throwable, reference);
}

function com_google_gwt_core_client_impl_StackTraceCreator_extractFunctionName__Ljava_lang_String_2Ljava_lang_String_2(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

var com_google_gwt_core_client_impl_StackTraceCreator_collector;
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(227, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$Collector_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'StackTraceCreator/Collector', 227);
function com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(104, 227, {}, com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V);
_.collect__Ljava_lang_Object_2Ljava_lang_Object_2V = function com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_collect__Ljava_lang_Object_2Ljava_lang_Object_2V(t, thrownIgnored){
  var seen = {}, com_google_gwt_core_client_impl_StackTraceCreator_getFunctionName__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2_name_0;
  t.fnStack = [];
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = (com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V() , callee.name || (callee.name = com_google_gwt_core_client_impl_StackTraceCreator_extractFunctionName__Ljava_lang_String_2Ljava_lang_String_2(callee.toString())));
    t.fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorLegacy_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'StackTraceCreator/CollectorLegacy', 104);
function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_$clinit__V(){
  com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  Error.stackTraceLimit = 64;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(228, 227, {});
_.collect__Ljava_lang_Object_2Ljava_lang_Object_2V = function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_collect__Ljava_lang_Object_2Ljava_lang_Object_2V(t, jsThrown){
  function fixIE(e){
    if (!('stack' in e)) {
      try {
        throw e;
      }
       catch (ignored) {
      }
    }
    return e;
  }

  var backingJsError;
  typeof jsThrown == 'string'?(backingJsError = fixIE(new Error(jsThrown))):jsThrown instanceof Object && 'stack' in jsThrown?(backingJsError = jsThrown):(backingJsError = fixIE(new Error));
  t.__gwt$backingJsError = backingJsError;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorModern_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'StackTraceCreator/CollectorModern', 228);
function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V(){
  com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_$clinit__V();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(105, 228, {}, com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorModernNoSourceMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'StackTraceCreator/CollectorModernNoSourceMap', 105);
function com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalArgument__ZLjava_lang_Object_2V(expression, errorMessage){
  if (!expression) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('' + errorMessage);
  }
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(expression){
  if (!expression) {
    throw new java_util_NoSuchElementException_NoSuchElementException__V;
  }
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(reference){
  if (reference == null) {
    throw new java_lang_NullPointerException_NullPointerException__V;
  }
  return reference;
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkPositionIndex__IIV(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkState__ZLjava_lang_Object_2V(expression){
  if (!expression) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("Can't overwrite cause");
  }
}

function com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static, newChild){
  return this$static.appendChild(newChild);
}

function com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function com_google_gwt_dom_client_Element_$setClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static, className){
  this$static.className = className || '';
}

function com_google_gwt_dom_client_Element_$setPropertyInt__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2IV(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function com_google_gwt_dom_client_Element_$setPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function com_google_gwt_dom_client_DOMImplStandard_$setInnerText__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, text_0){
  elem.textContent = text_0 || '';
}

function com_google_gwt_dom_client_DOMImplStandardBase_$eventGetCurrentTarget__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_dom_client_EventTarget_2(event_0){
  return event_0.currentTarget || $wnd;
}

function com_google_gwt_dom_client_DOMImplIE9_$getTabIndex__Lcom_google_gwt_dom_client_DOMImplIE9_2Lcom_google_gwt_dom_client_Element_2I(elem){
  return elem.tabIndex < $intern_5?elem.tabIndex:-(elem.tabIndex % $intern_5) - 1;
}

function com_google_gwt_dom_client_DOMImplTrident_isOrHasChildImpl__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Z(parent_0, child){
  if (parent_0.nodeType != 1 && parent_0.nodeType != 9) {
    return parent_0 == child;
  }
  if (child.nodeType != 1) {
    child = child.parentNode;
    if (!child) {
      return false;
    }
  }
  if (parent_0.nodeType == 9) {
    return parent_0 === child || parent_0.body && parent_0.body.contains(child);
  }
   else {
    return parent_0 === child || parent_0.contains(child);
  }
}

function com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function java_lang_Enum_$compareTo__Ljava_lang_Enum_2Ljava_lang_Enum_2I(this$static, other){
  return this$static.java_lang_Enum_ordinal - other.java_lang_Enum_ordinal;
}

function java_lang_Enum_Enum__Ljava_lang_String_2IV(name_0, ordinal){
  this.java_lang_Enum_name = name_0;
  this.java_lang_Enum_ordinal = ordinal;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(6, 1, {3:1, 7:1, 6:1});
_.compareTo__Ljava_lang_Object_2I = function java_lang_Enum_compareTo__Ljava_lang_Object_2I(other){
  return java_lang_Enum_$compareTo__Ljava_lang_Enum_2Ljava_lang_Enum_2I(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 6));
}
;
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Enum_equals__Ljava_lang_Object_2Z(other){
  return this === other;
}
;
_.hashCode__I$ = function java_lang_Enum_hashCode__I(){
  return com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(this);
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Enum_toString__Ljava_lang_String_2(){
  return this.java_lang_Enum_name != null?this.java_lang_Enum_name:'' + this.java_lang_Enum_ordinal;
}
;
_.java_lang_Enum_ordinal = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Enum_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Enum', 6);
function com_google_gwt_dom_client_Style$TextAlign_$clinit__V(){
  com_google_gwt_dom_client_Style$TextAlign_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_dom_client_Style$TextAlign_CENTER = new com_google_gwt_dom_client_Style$TextAlign$1_Style$TextAlign$1__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$TextAlign_JUSTIFY = new com_google_gwt_dom_client_Style$TextAlign$2_Style$TextAlign$2__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$TextAlign_LEFT = new com_google_gwt_dom_client_Style$TextAlign$3_Style$TextAlign$3__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$TextAlign_RIGHT = new com_google_gwt_dom_client_Style$TextAlign$4_Style$TextAlign$4__Ljava_lang_String_2IV;
}

function com_google_gwt_dom_client_Style$TextAlign_Style$TextAlign__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_dom_client_Style$TextAlign_values___3Lcom_google_gwt_dom_client_Style$TextAlign_2(){
  com_google_gwt_dom_client_Style$TextAlign_$clinit__V();
  return com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign_12_1classLit, 1), $intern_6, 27, 0, [com_google_gwt_dom_client_Style$TextAlign_CENTER, com_google_gwt_dom_client_Style$TextAlign_JUSTIFY, com_google_gwt_dom_client_Style$TextAlign_LEFT, com_google_gwt_dom_client_Style$TextAlign_RIGHT]);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(27, 6, $intern_7);
var com_google_gwt_dom_client_Style$TextAlign_CENTER, com_google_gwt_dom_client_Style$TextAlign_JUSTIFY, com_google_gwt_dom_client_Style$TextAlign_LEFT, com_google_gwt_dom_client_Style$TextAlign_RIGHT;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_8, 'Style/TextAlign', 27, com_google_gwt_dom_client_Style$TextAlign_values___3Lcom_google_gwt_dom_client_Style$TextAlign_2);
function com_google_gwt_dom_client_Style$TextAlign$1_Style$TextAlign$1__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$TextAlign_Style$TextAlign__Ljava_lang_String_2IV.call(this, 'CENTER', 0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(149, 27, $intern_7, com_google_gwt_dom_client_Style$TextAlign$1_Style$TextAlign$1__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign$1_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_8, 'Style/TextAlign/1', 149, null);
function com_google_gwt_dom_client_Style$TextAlign$2_Style$TextAlign$2__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$TextAlign_Style$TextAlign__Ljava_lang_String_2IV.call(this, 'JUSTIFY', 1);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(150, 27, $intern_7, com_google_gwt_dom_client_Style$TextAlign$2_Style$TextAlign$2__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign$2_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_8, 'Style/TextAlign/2', 150, null);
function com_google_gwt_dom_client_Style$TextAlign$3_Style$TextAlign$3__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$TextAlign_Style$TextAlign__Ljava_lang_String_2IV.call(this, 'LEFT', 2);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(151, 27, $intern_7, com_google_gwt_dom_client_Style$TextAlign$3_Style$TextAlign$3__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign$3_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_8, 'Style/TextAlign/3', 151, null);
function com_google_gwt_dom_client_Style$TextAlign$4_Style$TextAlign$4__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$TextAlign_Style$TextAlign__Ljava_lang_String_2IV.call(this, 'RIGHT', 3);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(152, 27, $intern_7, com_google_gwt_dom_client_Style$TextAlign$4_Style$TextAlign$4__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign$4_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_8, 'Style/TextAlign/4', 152, null);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(236, 1, {});
_.toString__Ljava_lang_String_2$ = function com_google_web_bindery_event_shared_Event_toString__Ljava_lang_String_2(){
  return 'An event type';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1Event_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_9, 'Event', 236);
function com_google_gwt_event_shared_GwtEvent_$overrideSource__Lcom_google_gwt_event_shared_GwtEvent_2Ljava_lang_Object_2V(this$static, source){
  this$static.com_google_web_bindery_event_shared_Event_source = source;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(237, 236, {});
_.com_google_gwt_event_shared_GwtEvent_dead = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1GwtEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_10, 'GwtEvent', 237);
function com_google_gwt_event_dom_client_DomEvent_$setNativeEvent__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(this$static, nativeEvent){
  this$static.com_google_gwt_event_dom_client_DomEvent_nativeEvent = nativeEvent;
}

function com_google_gwt_event_dom_client_DomEvent_$setRelativeElement__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_Element_2V(this$static, relativeElem){
  this$static.com_google_gwt_event_dom_client_DomEvent_relativeElem = relativeElem;
}

function com_google_gwt_event_dom_client_DomEvent_fireNativeEvent__Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_event_shared_HasHandlers_2Lcom_google_gwt_dom_client_Element_2V(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (com_google_gwt_event_dom_client_DomEvent_registered) {
    types = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_event_dom_client_PrivateMap_$unsafeGet__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2(com_google_gwt_event_dom_client_DomEvent_registered, nativeEvent.type), 18);
    if (types) {
      for (type$iterator = types.iterator__Ljava_util_Iterator_2(); type$iterator.hasNext__Z();) {
        type_0 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(type$iterator.next__Ljava_lang_Object_2(), 68);
        currentNative = type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_nativeEvent;
        currentRelativeElem = type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_relativeElem;
        com_google_gwt_event_dom_client_DomEvent_$setNativeEvent__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, nativeEvent);
        com_google_gwt_event_dom_client_DomEvent_$setRelativeElement__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_Element_2V(type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, relativeElem);
        com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2V(handlerSource, type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight);
        com_google_gwt_event_dom_client_DomEvent_$setNativeEvent__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, currentNative);
        com_google_gwt_event_dom_client_DomEvent_$setRelativeElement__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_Element_2V(type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, currentRelativeElem);
      }
    }
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(238, 237, {});
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_dom_client_DomEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_TYPE;
}
;
var com_google_gwt_event_dom_client_DomEvent_registered;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1DomEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'DomEvent', 238);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(239, 238, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1HumanInputEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'HumanInputEvent', 239);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(240, 239, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1MouseEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'MouseEvent', 240);
function com_google_gwt_event_dom_client_ClickEvent_$clinit__V(){
  com_google_gwt_event_dom_client_ClickEvent_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_event_dom_client_ClickEvent_TYPE = new com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V(new com_google_gwt_event_dom_client_ClickEvent_ClickEvent__V);
}

function com_google_gwt_event_dom_client_ClickEvent_ClickEvent__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(141, 240, {}, com_google_gwt_event_dom_client_ClickEvent_ClickEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_dom_client_ClickEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  edu_pdx_cs410J_whitlock_client_AppointmentBookGwt_$createAppointments__Ledu_pdx_cs410J_whitlock_client_AppointmentBookGwt_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 249).edu_pdx_cs410J_whitlock_client_AppointmentBookGwt$2_this$01);
}
;
var com_google_gwt_event_dom_client_ClickEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1ClickEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'ClickEvent', 141);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(142, 1, {});
_.hashCode__I$ = function com_google_web_bindery_event_shared_Event$Type_hashCode__I(){
  return this.com_google_web_bindery_event_shared_Event$Type_index;
}
;
_.toString__Ljava_lang_String_2$ = function com_google_web_bindery_event_shared_Event$Type_toString__Ljava_lang_String_2(){
  return 'Event type';
}
;
_.com_google_web_bindery_event_shared_Event$Type_index = 0;
var com_google_web_bindery_event_shared_Event$Type_nextHashCode = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1Event$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_9, 'Event/Type', 142);
function com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V(){
  this.com_google_web_bindery_event_shared_Event$Type_index = ++com_google_web_bindery_event_shared_Event$Type_nextHashCode;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(67, 142, {}, com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1GwtEvent$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_10, 'GwtEvent/Type', 67);
function com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V(flyweight){
  var types;
  com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V.call(this);
  this.com_google_gwt_event_dom_client_DomEvent$Type_flyweight = flyweight;
  !com_google_gwt_event_dom_client_DomEvent_registered && (com_google_gwt_event_dom_client_DomEvent_registered = new com_google_gwt_event_dom_client_PrivateMap_PrivateMap__V);
  types = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_event_dom_client_DomEvent_registered.com_google_gwt_event_dom_client_PrivateMap_map[$intern_12], 18);
  if (!types) {
    types = new java_util_ArrayList_ArrayList__V;
    com_google_gwt_event_dom_client_PrivateMap_$unsafePut__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2V(com_google_gwt_event_dom_client_DomEvent_registered, types);
  }
  types.add__Ljava_lang_Object_2Z(this);
  this.com_google_gwt_event_dom_client_DomEvent$Type_name = $intern_12;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(68, 67, {68:1}, com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1DomEvent$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'DomEvent/Type', 68);
function com_google_gwt_event_dom_client_PrivateMap_$unsafeGet__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  return this$static.com_google_gwt_event_dom_client_PrivateMap_map[key];
}

function com_google_gwt_event_dom_client_PrivateMap_$unsafePut__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2V(this$static, value_0){
  this$static.com_google_gwt_event_dom_client_PrivateMap_map[$intern_12] = value_0;
}

function com_google_gwt_event_dom_client_PrivateMap_PrivateMap__V(){
  this.com_google_gwt_event_dom_client_PrivateMap_map = {};
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(154, 1, {}, com_google_gwt_event_dom_client_PrivateMap_PrivateMap__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1PrivateMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_11, 'PrivateMap', 154);
function com_google_gwt_event_logical_shared_CloseEvent_CloseEvent__Ljava_lang_Object_2ZV(){
}

function com_google_gwt_event_logical_shared_CloseEvent_fire__Lcom_google_gwt_event_logical_shared_HasCloseHandlers_2Ljava_lang_Object_2ZV(source){
  var event_0;
  if (com_google_gwt_event_logical_shared_CloseEvent_TYPE) {
    event_0 = new com_google_gwt_event_logical_shared_CloseEvent_CloseEvent__Ljava_lang_Object_2ZV;
    com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(source, event_0);
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(158, 237, {}, com_google_gwt_event_logical_shared_CloseEvent_CloseEvent__Ljava_lang_Object_2ZV);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_logical_shared_CloseEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 251);
  com_google_gwt_user_client_ui_RootPanel_detachWidgets__V();
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_logical_shared_CloseEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_event_logical_shared_CloseEvent_TYPE;
}
;
var com_google_gwt_event_logical_shared_CloseEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1logical_1shared_1CloseEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.event.logical.shared', 'CloseEvent', 158);
function com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static, type_0, handler){
  return new com_google_gwt_event_shared_LegacyHandlerWrapper_LegacyHandlerWrapper__Lcom_google_web_bindery_event_shared_HandlerRegistration_2V(com_google_web_bindery_event_shared_SimpleEventBus_$doAdd__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2Lcom_google_web_bindery_event_shared_HandlerRegistration_2(this$static.com_google_gwt_event_shared_HandlerManager_eventBus, type_0, handler));
}

function com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, event_0){
  var e, oldSource;
  !event_0.com_google_gwt_event_shared_GwtEvent_dead || (event_0.com_google_gwt_event_shared_GwtEvent_dead = false , event_0.com_google_web_bindery_event_shared_Event_source = null);
  oldSource = event_0.com_google_web_bindery_event_shared_Event_source;
  com_google_gwt_event_shared_GwtEvent_$overrideSource__Lcom_google_gwt_event_shared_GwtEvent_2Ljava_lang_Object_2V(event_0, this$static.com_google_gwt_event_shared_HandlerManager_source);
  try {
    com_google_web_bindery_event_shared_SimpleEventBus_$doFire__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event_2Ljava_lang_Object_2V(this$static.com_google_gwt_event_shared_HandlerManager_eventBus, event_0);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 42)) {
      e = $e0;
      throw new com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(e.com_google_web_bindery_event_shared_UmbrellaException_causes);
    }
     else 
      throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
   finally {
    oldSource == null?(event_0.com_google_gwt_event_shared_GwtEvent_dead = true , event_0.com_google_web_bindery_event_shared_Event_source = null):(event_0.com_google_web_bindery_event_shared_Event_source = oldSource);
  }
}

function com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V(source){
  this.com_google_gwt_event_shared_HandlerManager_eventBus = new com_google_gwt_event_shared_HandlerManager$Bus_HandlerManager$Bus__ZV;
  this.com_google_gwt_event_shared_HandlerManager_source = source;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(69, 1, {14:1}, com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1HandlerManager_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_10, 'HandlerManager', 69);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(241, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1EventBus_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_9, 'EventBus', 241);
function com_google_web_bindery_event_shared_SimpleEventBus_$defer__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_SimpleEventBus$Command_2V(this$static, command){
  !this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas && (this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas = new java_util_ArrayList_ArrayList__V);
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas, command);
}

function com_google_web_bindery_event_shared_SimpleEventBus_$doAdd__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2Lcom_google_web_bindery_event_shared_HandlerRegistration_2(this$static, type_0, handler){
  if (!type_0) {
    throw new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('Cannot add a handler with a null type');
  }
  this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth > 0?com_google_web_bindery_event_shared_SimpleEventBus_$defer__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_SimpleEventBus$Command_2V(this$static, new com_google_web_bindery_event_shared_SimpleEventBus$2_SimpleEventBus$2__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$static, type_0, handler)):com_google_web_bindery_event_shared_SimpleEventBus_$doAddNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static, type_0, null, handler);
  return new com_google_web_bindery_event_shared_SimpleEventBus$1_SimpleEventBus$1__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V;
}

function com_google_web_bindery_event_shared_SimpleEventBus_$doAddNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static, type_0, source, handler){
  var l;
  l = com_google_web_bindery_event_shared_SimpleEventBus_$ensureHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, source);
  l.add__Ljava_lang_Object_2Z(handler);
}

function com_google_web_bindery_event_shared_SimpleEventBus_$doFire__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event_2Ljava_lang_Object_2V(this$static, event_0){
  var causes, e, handler, handlers, it;
  if (!event_0) {
    throw new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('Cannot fire null event');
  }
  try {
    ++this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth;
    handlers = com_google_web_bindery_event_shared_SimpleEventBus_$getDispatchList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, event_0.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2());
    causes = null;
    it = this$static.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder?handlers.listIterator__ILjava_util_ListIterator_2(handlers.size__I()):handlers.listIterator__Ljava_util_ListIterator_2();
    while (this$static.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder?it.hasPrevious__Z():it.hasNext__Z()) {
      handler = this$static.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder?it.previous__Ljava_lang_Object_2():it.next__Ljava_lang_Object_2();
      try {
        event_0.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 214));
      }
       catch ($e0) {
        $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
        if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 5)) {
          e = $e0;
          !causes && (causes = new java_util_HashSet_HashSet__V);
          java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(causes, e);
        }
         else 
          throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      }
    }
    if (causes) {
      throw new com_google_web_bindery_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(causes);
    }
  }
   finally {
    --this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth;
    this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth == 0 && com_google_web_bindery_event_shared_SimpleEventBus_$handleQueuedAddsAndRemoves__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$static);
  }
}

function com_google_web_bindery_event_shared_SimpleEventBus_$ensureHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map.get__Ljava_lang_Object_2Ljava_lang_Object_2(type_0), 23);
  if (!sourceMap) {
    sourceMap = new java_util_HashMap_HashMap__V;
    this$static.com_google_web_bindery_event_shared_SimpleEventBus_map.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(type_0, sourceMap);
  }
  handlers = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(sourceMap.get__Ljava_lang_Object_2Ljava_lang_Object_2(source), 18);
  if (!handlers) {
    handlers = new java_util_ArrayList_ArrayList__V;
    sourceMap.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(source, handlers);
  }
  return handlers;
}

function com_google_web_bindery_event_shared_SimpleEventBus_$getDispatchList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0){
  var directHandlers;
  directHandlers = com_google_web_bindery_event_shared_SimpleEventBus_$getHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0);
  return directHandlers;
}

function com_google_web_bindery_event_shared_SimpleEventBus_$getHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0){
  var handlers, sourceMap;
  sourceMap = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map.get__Ljava_lang_Object_2Ljava_lang_Object_2(type_0), 23);
  if (!sourceMap) {
    return java_util_Collections_$clinit__V() , java_util_Collections_$clinit__V() , java_util_Collections_EMPTY_1LIST;
  }
  handlers = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(sourceMap.get__Ljava_lang_Object_2Ljava_lang_Object_2(null), 18);
  if (!handlers) {
    return java_util_Collections_$clinit__V() , java_util_Collections_$clinit__V() , java_util_Collections_EMPTY_1LIST;
  }
  return handlers;
}

function com_google_web_bindery_event_shared_SimpleEventBus_$handleQueuedAddsAndRemoves__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$static){
  var c, c$iterator;
  if (this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas) {
    try {
      for (c$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas); c$iterator.java_util_AbstractList$IteratorImpl_i < c$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
        c = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(c$iterator.java_util_AbstractList$IteratorImpl_i < c$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(c$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(c$iterator.java_util_AbstractList$IteratorImpl_i++), 252));
        com_google_web_bindery_event_shared_SimpleEventBus_$doAddNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(c.com_google_web_bindery_event_shared_SimpleEventBus$2_this$01, c.com_google_web_bindery_event_shared_SimpleEventBus$2_val$type2, c.com_google_web_bindery_event_shared_SimpleEventBus$2_val$source3, c.com_google_web_bindery_event_shared_SimpleEventBus$2_val$handler4);
      }
    }
     finally {
      this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas = null;
    }
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(145, 241, {});
_.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth = 0;
_.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1SimpleEventBus_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_9, 'SimpleEventBus', 145);
function com_google_gwt_event_shared_HandlerManager$Bus_HandlerManager$Bus__ZV(){
  this.com_google_web_bindery_event_shared_SimpleEventBus_map = new java_util_HashMap_HashMap__V;
  this.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder = false;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(146, 145, {}, com_google_gwt_event_shared_HandlerManager$Bus_HandlerManager$Bus__ZV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1HandlerManager$Bus_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_10, 'HandlerManager/Bus', 146);
function com_google_gwt_event_shared_LegacyHandlerWrapper_LegacyHandlerWrapper__Lcom_google_web_bindery_event_shared_HandlerRegistration_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(155, 1, {}, com_google_gwt_event_shared_LegacyHandlerWrapper_LegacyHandlerWrapper__Lcom_google_web_bindery_event_shared_HandlerRegistration_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1LegacyHandlerWrapper_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_10, 'LegacyHandlerWrapper', 155);
function com_google_web_bindery_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(causes){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, com_google_web_bindery_event_shared_UmbrellaException_makeMessage__Ljava_util_Set_2Ljava_lang_String_2(causes), com_google_web_bindery_event_shared_UmbrellaException_makeCause__Ljava_util_Set_2Ljava_lang_Throwable_2(causes));
  this.com_google_web_bindery_event_shared_UmbrellaException_causes = causes;
}

function com_google_web_bindery_event_shared_UmbrellaException_makeCause__Ljava_util_Set_2Ljava_lang_Throwable_2(causes){
  var iterator;
  iterator = causes.iterator__Ljava_util_Iterator_2();
  if (!iterator.hasNext__Z()) {
    return null;
  }
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(iterator.next__Ljava_lang_Object_2(), 5);
}

function com_google_web_bindery_event_shared_UmbrellaException_makeMessage__Ljava_util_Set_2Ljava_lang_String_2(causes){
  var b, count, first, t, t$iterator;
  count = causes.size__I();
  if (count == 0) {
    return null;
  }
  b = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator__Ljava_util_Iterator_2(); t$iterator.hasNext__Z();) {
    t = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(t$iterator.next__Ljava_lang_Object_2(), 5);
    first?(first = false):(b.java_lang_AbstractStringBuilder_string += '; ' , b);
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(b, t.getMessage__Ljava_lang_String_2());
  }
  return b.java_lang_AbstractStringBuilder_string;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(42, 10, $intern_13, com_google_web_bindery_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1UmbrellaException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_9, $intern_14, 42);
function com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(causes){
  com_google_web_bindery_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V.call(this, causes);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(83, 42, $intern_13, com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1UmbrellaException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_10, $intern_14, 83);
function com_google_gwt_http_client_Request_$cancel__Lcom_google_gwt_http_client_Request_2V(this$static){
  var xhr;
  if (!this$static.com_google_gwt_http_client_Request_xmlHttpRequest) {
    return;
  }
  com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static.com_google_gwt_http_client_Request_timer);
  xhr = this$static.com_google_gwt_http_client_Request_xmlHttpRequest;
  this$static.com_google_gwt_http_client_Request_xmlHttpRequest = null;
  com_google_gwt_xhr_client_XMLHttpRequest_$clearOnReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(xhr);
  xhr.abort();
}

function com_google_gwt_http_client_Request_$fireOnResponseReceived__Lcom_google_gwt_http_client_Request_2Lcom_google_gwt_http_client_RequestCallback_2V(this$static, callback){
  var response, xhr;
  if (!this$static.com_google_gwt_http_client_Request_xmlHttpRequest) {
    return;
  }
  com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static.com_google_gwt_http_client_Request_timer);
  xhr = this$static.com_google_gwt_http_client_Request_xmlHttpRequest;
  this$static.com_google_gwt_http_client_Request_xmlHttpRequest = null;
  response = new com_google_gwt_http_client_Request$RequestImplIE8And9$1_Request$RequestImplIE8And9$1__Lcom_google_gwt_http_client_Request$RequestImplIE8And9_2Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(xhr);
  com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_$onResponseReceived__Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_2Lcom_google_gwt_http_client_Request_2Lcom_google_gwt_http_client_Response_2V(callback, response);
}

function com_google_gwt_http_client_Request_$fireOnTimeout__Lcom_google_gwt_http_client_Request_2V(this$static){
  if (!this$static.com_google_gwt_http_client_Request_xmlHttpRequest) {
    return;
  }
  com_google_gwt_http_client_Request_$cancel__Lcom_google_gwt_http_client_Request_2V(this$static);
  com_google_gwt_user_client_Window_alert__Ljava_lang_String_2V(java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2(new com_google_gwt_http_client_RequestTimeoutException_RequestTimeoutException__Lcom_google_gwt_http_client_Request_2IV(this$static.com_google_gwt_http_client_Request_timeoutMillis)));
}

function com_google_gwt_http_client_Request_Request__Lcom_google_gwt_xhr_client_XMLHttpRequest_2ILcom_google_gwt_http_client_RequestCallback_2V(xmlHttpRequest, timeoutMillis, callback){
  this.com_google_gwt_http_client_Request_timer = new com_google_gwt_http_client_Request$1_Request$1__Lcom_google_gwt_http_client_Request_2V(this);
  if (!xmlHttpRequest) {
    throw new java_lang_NullPointerException_NullPointerException__V;
  }
  if (!callback) {
    throw new java_lang_NullPointerException_NullPointerException__V;
  }
  if (timeoutMillis < 0) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__V;
  }
  this.com_google_gwt_http_client_Request_timeoutMillis = timeoutMillis;
  this.com_google_gwt_http_client_Request_xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2IV(this.com_google_gwt_http_client_Request_timer, timeoutMillis);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(184, 1, {}, com_google_gwt_http_client_Request_Request__Lcom_google_gwt_xhr_client_XMLHttpRequest_2ILcom_google_gwt_http_client_RequestCallback_2V);
_.com_google_gwt_http_client_Request_timeoutMillis = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1Request_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_15, 'Request', 184);
function com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static){
  if (!this$static.com_google_gwt_user_client_Timer_timerId) {
    return;
  }
  ++this$static.com_google_gwt_user_client_Timer_cancelCounter;
  this$static.com_google_gwt_user_client_Timer_isRepeating?com_google_gwt_user_client_Timer_clearInterval__IV(this$static.com_google_gwt_user_client_Timer_timerId.java_lang_Integer_value):com_google_gwt_user_client_Timer_clearTimeout__IV(this$static.com_google_gwt_user_client_Timer_timerId.java_lang_Integer_value);
  this$static.com_google_gwt_user_client_Timer_timerId = null;
}

function com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2IV(this$static, delayMillis){
  if (delayMillis < 0) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('must be non-negative');
  }
  !!this$static.com_google_gwt_user_client_Timer_timerId && com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static);
  this$static.com_google_gwt_user_client_Timer_isRepeating = false;
  this$static.com_google_gwt_user_client_Timer_timerId = java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_user_client_Timer_setTimeout__Lcom_google_gwt_core_client_JavaScriptObject_2II(com_google_gwt_user_client_Timer_createCallback__Lcom_google_gwt_user_client_Timer_2ILcom_google_gwt_core_client_JavaScriptObject_2(this$static, this$static.com_google_gwt_user_client_Timer_cancelCounter), delayMillis));
}

function com_google_gwt_user_client_Timer_clearInterval__IV(timerId){
  $wnd.clearInterval(timerId);
}

function com_google_gwt_user_client_Timer_clearTimeout__IV(timerId){
  $wnd.clearTimeout(timerId);
}

function com_google_gwt_user_client_Timer_createCallback__Lcom_google_gwt_user_client_Timer_2ILcom_google_gwt_core_client_JavaScriptObject_2(timer, cancelCounter){
  return $entry(function(){
    timer.package_private$com_google_gwt_user_client_Timer$fire__IV(cancelCounter);
  }
  );
}

function com_google_gwt_user_client_Timer_setTimeout__Lcom_google_gwt_core_client_JavaScriptObject_2II(func, time){
  return $wnd.setTimeout(func, time);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(187, 1, {});
_.package_private$com_google_gwt_user_client_Timer$fire__IV = function com_google_gwt_user_client_Timer_fire__IV(scheduleCancelCounter){
  if (scheduleCancelCounter != this.com_google_gwt_user_client_Timer_cancelCounter) {
    return;
  }
  this.com_google_gwt_user_client_Timer_isRepeating || (this.com_google_gwt_user_client_Timer_timerId = null);
  com_google_gwt_http_client_Request_$fireOnTimeout__Lcom_google_gwt_http_client_Request_2V(this.com_google_gwt_http_client_Request$1_this$01);
}
;
_.com_google_gwt_user_client_Timer_cancelCounter = 0;
_.com_google_gwt_user_client_Timer_isRepeating = false;
_.com_google_gwt_user_client_Timer_timerId = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Timer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_16, 'Timer', 187);
function com_google_gwt_http_client_Request$1_Request$1__Lcom_google_gwt_http_client_Request_2V(this$0){
  this.com_google_gwt_http_client_Request$1_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(188, 187, {}, com_google_gwt_http_client_Request$1_Request$1__Lcom_google_gwt_http_client_Request_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1Request$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_15, 'Request/1', 188);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(246, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1Response_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_15, 'Response', 246);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(185, 246, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1ResponseImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_15, 'ResponseImpl', 185);
function com_google_gwt_http_client_Request$RequestImplIE8And9$1_Request$RequestImplIE8And9$1__Lcom_google_gwt_http_client_Request$RequestImplIE8And9_2Lcom_google_gwt_xhr_client_XMLHttpRequest_2V($anonymous0){
  this.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest = $anonymous0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(186, 185, {}, com_google_gwt_http_client_Request$RequestImplIE8And9$1_Request$RequestImplIE8And9$1__Lcom_google_gwt_http_client_Request$RequestImplIE8And9_2Lcom_google_gwt_xhr_client_XMLHttpRequest_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1Request$RequestImplIE8And9$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_15, 'Request/RequestImplIE8And9/1', 186);
function com_google_gwt_http_client_RequestBuilder_$clinit__V(){
  com_google_gwt_http_client_RequestBuilder_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  new com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V('DELETE');
  new com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V('GET');
  new com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V('HEAD');
  com_google_gwt_http_client_RequestBuilder_POST = new com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V('POST');
  new com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V('PUT');
}

function com_google_gwt_http_client_RequestBuilder_$doSend__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Lcom_google_gwt_http_client_RequestCallback_2Lcom_google_gwt_http_client_Request_2(this$static, requestData, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest;
  try {
    com_google_gwt_xhr_client_XMLHttpRequest_$open__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Ljava_lang_String_2Ljava_lang_String_2V(xmlHttpRequest, this$static.com_google_gwt_http_client_RequestBuilder_httpMethod, this$static.com_google_gwt_http_client_RequestBuilder_url);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 25)) {
      e = $e0;
      requestPermissionException = new com_google_gwt_http_client_RequestPermissionException_RequestPermissionException__Ljava_lang_String_2V(this$static.com_google_gwt_http_client_RequestBuilder_url);
      java_lang_Throwable_$initCause__Ljava_lang_Throwable_2Ljava_lang_Throwable_2Ljava_lang_Throwable_2(requestPermissionException, new com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V(e.getMessage__Ljava_lang_String_2()));
      throw requestPermissionException;
    }
     else 
      throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
  com_google_gwt_http_client_RequestBuilder_$setHeaders__Lcom_google_gwt_http_client_RequestBuilder_2Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(this$static, xmlHttpRequest);
  this$static.com_google_gwt_http_client_RequestBuilder_includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new com_google_gwt_http_client_Request_Request__Lcom_google_gwt_xhr_client_XMLHttpRequest_2ILcom_google_gwt_http_client_RequestCallback_2V(xmlHttpRequest, this$static.com_google_gwt_http_client_RequestBuilder_timeoutMillis, callback);
  com_google_gwt_xhr_client_XMLHttpRequest_$setOnReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Lcom_google_gwt_xhr_client_ReadyStateChangeHandler_2V(xmlHttpRequest, new com_google_gwt_http_client_RequestBuilder$1_RequestBuilder$1__Lcom_google_gwt_http_client_RequestBuilder_2V(request, callback));
  try {
    xmlHttpRequest.send(requestData);
  }
   catch ($e1) {
    $e1 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e1);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e1, 25)) {
      e = $e1;
      throw new com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V(e.getMessage__Ljava_lang_String_2());
    }
     else 
      throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e1);
  }
  return request;
}

function com_google_gwt_http_client_RequestBuilder_$setHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, header, value_0){
  com_google_gwt_http_client_StringValidator_throwIfEmptyOrNull__Ljava_lang_String_2Ljava_lang_String_2V('header', header);
  com_google_gwt_http_client_StringValidator_throwIfEmptyOrNull__Ljava_lang_String_2Ljava_lang_String_2V('value', value_0);
  !this$static.com_google_gwt_http_client_RequestBuilder_headers && (this$static.com_google_gwt_http_client_RequestBuilder_headers = new java_util_HashMap_HashMap__V);
  this$static.com_google_gwt_http_client_RequestBuilder_headers.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(header, value_0);
}

function com_google_gwt_http_client_RequestBuilder_$setHeaders__Lcom_google_gwt_http_client_RequestBuilder_2Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(this$static, xmlHttpRequest){
  var e, header, header$iterator;
  if (!!this$static.com_google_gwt_http_client_RequestBuilder_headers && this$static.com_google_gwt_http_client_RequestBuilder_headers.size__I() > 0) {
    for (header$iterator = this$static.com_google_gwt_http_client_RequestBuilder_headers.entrySet__Ljava_util_Set_2().iterator__Ljava_util_Iterator_2(); header$iterator.hasNext__Z();) {
      header = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(header$iterator.next__Ljava_lang_Object_2(), 8);
      try {
        com_google_gwt_xhr_client_XMLHttpRequest_$setRequestHeader__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Ljava_lang_String_2Ljava_lang_String_2V(xmlHttpRequest, com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(header.getKey__Ljava_lang_Object_2()), com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(header.getValue__Ljava_lang_Object_2()));
      }
       catch ($e0) {
        $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
        if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 25)) {
          e = $e0;
          throw new com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V(e.getMessage__Ljava_lang_String_2());
        }
         else 
          throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      }
    }
  }
   else {
    com_google_gwt_xhr_client_XMLHttpRequest_$setRequestHeader__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Ljava_lang_String_2Ljava_lang_String_2V(xmlHttpRequest, $intern_17, 'text/plain; charset=utf-8');
  }
}

function com_google_gwt_http_client_RequestBuilder_RequestBuilder__Lcom_google_gwt_http_client_RequestBuilder$Method_2Ljava_lang_String_2V(httpMethod, url_0){
  com_google_gwt_http_client_RequestBuilder_$clinit__V();
  com_google_gwt_http_client_RequestBuilder_RequestBuilder__Ljava_lang_String_2Ljava_lang_String_2V.call(this, !httpMethod?null:httpMethod.com_google_gwt_http_client_RequestBuilder$Method_name, url_0);
}

function com_google_gwt_http_client_RequestBuilder_RequestBuilder__Ljava_lang_String_2Ljava_lang_String_2V(httpMethod, url_0){
  com_google_gwt_http_client_StringValidator_throwIfEmptyOrNull__Ljava_lang_String_2Ljava_lang_String_2V('httpMethod', httpMethod);
  com_google_gwt_http_client_StringValidator_throwIfEmptyOrNull__Ljava_lang_String_2Ljava_lang_String_2V('url', url_0);
  this.com_google_gwt_http_client_RequestBuilder_httpMethod = httpMethod;
  this.com_google_gwt_http_client_RequestBuilder_url = url_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(98, 1, {}, com_google_gwt_http_client_RequestBuilder_RequestBuilder__Lcom_google_gwt_http_client_RequestBuilder$Method_2Ljava_lang_String_2V);
_.com_google_gwt_http_client_RequestBuilder_includeCredentials = false;
_.com_google_gwt_http_client_RequestBuilder_timeoutMillis = 0;
var com_google_gwt_http_client_RequestBuilder_POST;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_15, 'RequestBuilder', 98);
function com_google_gwt_http_client_RequestBuilder$1_RequestBuilder$1__Lcom_google_gwt_http_client_RequestBuilder_2V(val$request, val$callback){
  this.com_google_gwt_http_client_RequestBuilder$1_val$request2 = val$request;
  this.com_google_gwt_http_client_RequestBuilder$1_val$callback3 = val$callback;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(191, 1, {}, com_google_gwt_http_client_RequestBuilder$1_RequestBuilder$1__Lcom_google_gwt_http_client_RequestBuilder_2V);
_.onReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V = function com_google_gwt_http_client_RequestBuilder$1_onReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(xhr){
  if (xhr.readyState == 4) {
    com_google_gwt_xhr_client_XMLHttpRequest_$clearOnReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(xhr);
    com_google_gwt_http_client_Request_$fireOnResponseReceived__Lcom_google_gwt_http_client_Request_2Lcom_google_gwt_http_client_RequestCallback_2V(this.com_google_gwt_http_client_RequestBuilder$1_val$request2, this.com_google_gwt_http_client_RequestBuilder$1_val$callback3);
  }
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestBuilder$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_15, 'RequestBuilder/1', 191);
function com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V(name_0){
  this.com_google_gwt_http_client_RequestBuilder$Method_name = name_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(50, 1, {}, com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V);
_.toString__Ljava_lang_String_2$ = function com_google_gwt_http_client_RequestBuilder$Method_toString__Ljava_lang_String_2(){
  return this.com_google_gwt_http_client_RequestBuilder$Method_name;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestBuilder$Method_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_15, 'RequestBuilder/Method', 50);
function com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V(message){
  java_lang_Exception_Exception__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(29, 38, $intern_18, com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_15, 'RequestException', 29);
function com_google_gwt_http_client_RequestPermissionException_RequestPermissionException__Ljava_lang_String_2V(url_0){
  com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(200, 29, $intern_18, com_google_gwt_http_client_RequestPermissionException_RequestPermissionException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestPermissionException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_15, 'RequestPermissionException', 200);
function com_google_gwt_http_client_RequestTimeoutException_RequestTimeoutException__Lcom_google_gwt_http_client_Request_2IV(timeoutMillis){
  com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(211, 29, $intern_18, com_google_gwt_http_client_RequestTimeoutException_RequestTimeoutException__Lcom_google_gwt_http_client_Request_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestTimeoutException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_15, 'RequestTimeoutException', 211);
function com_google_gwt_http_client_StringValidator_throwIfEmptyOrNull__Ljava_lang_String_2Ljava_lang_String_2V(name_0, value_0){
  com_google_gwt_http_client_StringValidator_throwIfNull__Ljava_lang_String_2Ljava_lang_Object_2V(name_0, value_0);
  if (0 == java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(value_0).length) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V(name_0 + ' cannot be empty');
  }
}

function com_google_gwt_http_client_StringValidator_throwIfNull__Ljava_lang_String_2Ljava_lang_Object_2V(name_0, value_0){
  if (null == value_0) {
    throw new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V(name_0 + ' cannot be null');
  }
}

function com_google_gwt_i18n_client_BidiUtils_getDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2(elem){
  var dirPropertyValue;
  dirPropertyValue = com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(elem, 'dir');
  if (java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z('rtl', dirPropertyValue)) {
    return com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_RTL;
  }
   else if (java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z('ltr', dirPropertyValue)) {
    return com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_LTR;
  }
  return com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT;
}

function com_google_gwt_i18n_client_BidiUtils_setDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2V(elem, direction){
  switch (direction.java_lang_Enum_ordinal) {
    case 0:
      {
        com_google_gwt_dom_client_Element_$setPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(elem, 'dir', 'rtl');
        break;
      }

    case 1:
      {
        com_google_gwt_dom_client_Element_$setPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(elem, 'dir', 'ltr');
        break;
      }

    case 2:
      {
        com_google_gwt_i18n_client_BidiUtils_getDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2(elem) != (com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT) && com_google_gwt_dom_client_Element_$setPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(elem, 'dir', '');
        break;
      }

  }
}

function com_google_gwt_i18n_shared_DateTimeFormat_$clinit__V(){
  com_google_gwt_i18n_shared_DateTimeFormat_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  new java_util_HashMap_HashMap__V;
}

function com_google_gwt_i18n_shared_DateTimeFormat_$addPart__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2IV(this$static, buf, count){
  var java_lang_AbstractStringBuilder_$setLength__Ljava_lang_AbstractStringBuilder_2IV_oldLength_0;
  if (buf.java_lang_AbstractStringBuilder_string.length > 0) {
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_i18n_shared_DateTimeFormat_patternParts, new com_google_gwt_i18n_shared_DateTimeFormat$PatternPart_DateTimeFormat$PatternPart__Ljava_lang_String_2IV(buf.java_lang_AbstractStringBuilder_string, count));
    java_lang_AbstractStringBuilder_$setLength__Ljava_lang_AbstractStringBuilder_2IV_oldLength_0 = buf.java_lang_AbstractStringBuilder_string.length;
    0 < java_lang_AbstractStringBuilder_$setLength__Ljava_lang_AbstractStringBuilder_2IV_oldLength_0?(buf.java_lang_AbstractStringBuilder_string = java_lang_String_$substring__Ljava_lang_String_2IILjava_lang_String_2(buf.java_lang_AbstractStringBuilder_string, 0, 0)):0 > java_lang_AbstractStringBuilder_$setLength__Ljava_lang_AbstractStringBuilder_2IV_oldLength_0 && (buf.java_lang_AbstractStringBuilder_string += java_lang_String_valueOf___3CLjava_lang_String_2(com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_C_1classLit, {3:1}, 0, -java_lang_AbstractStringBuilder_$setLength__Ljava_lang_AbstractStringBuilder_2IV_oldLength_0, 7, 1)));
  }
}

function com_google_gwt_i18n_shared_DateTimeFormat_$format__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_util_Date_2Lcom_google_gwt_i18n_shared_TimeZone_2Ljava_lang_String_2(this$static, date, timeZone){
  var ch_0, diff, i, j, keepDate, keepTime, n, toAppendTo, trailQuote;
  !timeZone && (timeZone = com_google_gwt_i18n_client_TimeZone_createTimeZone__ILcom_google_gwt_i18n_client_TimeZone_2(date.java_util_Date_jsdate.getTimezoneOffset()));
  diff = (date.java_util_Date_jsdate.getTimezoneOffset() - timeZone.com_google_gwt_i18n_client_TimeZone_standardOffset) * 60000;
  keepDate = new java_util_Date_Date__JV(com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2(date.java_util_Date_jsdate.getTime()), com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(diff)));
  keepTime = keepDate;
  if (keepDate.java_util_Date_jsdate.getTimezoneOffset() != date.java_util_Date_jsdate.getTimezoneOffset()) {
    diff > 0?(diff -= 86400000):(diff += 86400000);
    keepTime = new java_util_Date_Date__JV(com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2(date.java_util_Date_jsdate.getTime()), com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(diff)));
  }
  toAppendTo = new java_lang_StringBuilder_StringBuilder__IV;
  n = this$static.com_google_gwt_i18n_shared_DateTimeFormat_pattern.length;
  for (i = 0; i < n;) {
    ch_0 = java_lang_String_$charAt__Ljava_lang_String_2IC(this$static.com_google_gwt_i18n_shared_DateTimeFormat_pattern, i);
    if (ch_0 >= 97 && ch_0 <= 122 || ch_0 >= 65 && ch_0 <= 90) {
      for (j = i + 1; j < n && java_lang_String_$charAt__Ljava_lang_String_2IC(this$static.com_google_gwt_i18n_shared_DateTimeFormat_pattern, j) == ch_0; ++j)
      ;
      com_google_gwt_i18n_shared_DateTimeFormat_$subFormat__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2CILjava_util_Date_2Ljava_util_Date_2Ljava_util_Date_2Lcom_google_gwt_i18n_shared_TimeZone_2Z(toAppendTo, ch_0, j - i, keepDate, keepTime, timeZone);
      i = j;
    }
     else if (ch_0 == 39) {
      ++i;
      if (i < n && java_lang_String_$charAt__Ljava_lang_String_2IC(this$static.com_google_gwt_i18n_shared_DateTimeFormat_pattern, i) == 39) {
        toAppendTo.java_lang_AbstractStringBuilder_string += "'";
        ++i;
        continue;
      }
      trailQuote = false;
      while (!trailQuote) {
        j = i;
        while (j < n && java_lang_String_$charAt__Ljava_lang_String_2IC(this$static.com_google_gwt_i18n_shared_DateTimeFormat_pattern, j) != 39) {
          ++j;
        }
        if (j >= n) {
          throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V("Missing trailing '");
        }
        j + 1 < n && java_lang_String_$charAt__Ljava_lang_String_2IC(this$static.com_google_gwt_i18n_shared_DateTimeFormat_pattern, j + 1) == 39?++j:(trailQuote = true);
        java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(toAppendTo, java_lang_String_$substring__Ljava_lang_String_2IILjava_lang_String_2(this$static.com_google_gwt_i18n_shared_DateTimeFormat_pattern, i, j));
        i = j + 1;
      }
    }
     else {
      toAppendTo.java_lang_AbstractStringBuilder_string += com_google_gwt_lang_Cast_charToString__CLjava_lang_String_2(ch_0);
      ++i;
    }
  }
  return toAppendTo.java_lang_AbstractStringBuilder_string;
}

function com_google_gwt_i18n_shared_DateTimeFormat_$formatFractionalSeconds__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V(buf, count, date){
  var time, value_0;
  time = com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2(date.java_util_Date_jsdate.getTime());
  if (com_google_gwt_lang_LongLib_lt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(time, {l:0, m:0, h:0})) {
    value_0 = 1000 - com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(com_google_gwt_lang_LongLib_mod__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(time), {l:1000, m:0, h:0}));
    value_0 == 1000 && (value_0 = 0);
  }
   else {
    value_0 = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(com_google_gwt_lang_LongLib_mod__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(time, {l:1000, m:0, h:0}));
  }
  if (count == 1) {
    value_0 = ~~((value_0 + 50) / 100) < 9?~~((value_0 + 50) / 100):9;
    buf.java_lang_AbstractStringBuilder_string += String.fromCharCode(48 + value_0 & $intern_5);
  }
   else if (count == 2) {
    value_0 = ~~((value_0 + 5) / 10) < 99?~~((value_0 + 5) / 10):99;
    com_google_gwt_i18n_shared_DateTimeFormat_$zeroPaddingNumber__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2IIV(buf, value_0, 2);
  }
   else {
    com_google_gwt_i18n_shared_DateTimeFormat_$zeroPaddingNumber__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2IIV(buf, value_0, 3);
    count > 3 && com_google_gwt_i18n_shared_DateTimeFormat_$zeroPaddingNumber__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2IIV(buf, 0, count - 3);
  }
}

function com_google_gwt_i18n_shared_DateTimeFormat_$formatMonth__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V(buf, count, date){
  var value_0;
  value_0 = date.java_util_Date_jsdate.getMonth();
  switch (count) {
    case 5:
      java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(buf, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_6, 2, 4, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'])[value_0]);
      break;
    case 4:
      java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(buf, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_6, 2, 4, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])[value_0]);
      break;
    case 3:
      java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(buf, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_6, 2, 4, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])[value_0]);
      break;
    default:com_google_gwt_i18n_shared_DateTimeFormat_$zeroPaddingNumber__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2IIV(buf, value_0 + 1, count);
  }
}

function com_google_gwt_i18n_shared_DateTimeFormat_$formatYear__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V(buf, count, date){
  var value_0;
  value_0 = date.java_util_Date_jsdate.getFullYear() - 1900 + 1900;
  value_0 < 0 && (value_0 = -value_0);
  switch (count) {
    case 1:
      buf.java_lang_AbstractStringBuilder_string += value_0;
      break;
    case 2:
      com_google_gwt_i18n_shared_DateTimeFormat_$zeroPaddingNumber__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2IIV(buf, value_0 % 100, 2);
      break;
    default:com_google_gwt_i18n_shared_DateTimeFormat_$zeroPaddingNumber__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2IIV(buf, value_0, count);
  }
}

function com_google_gwt_i18n_shared_DateTimeFormat_$getNextCharCountInPattern__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_String_2II(start_0){
  var ch_0, next;
  ch_0 = $intern_19.charCodeAt(start_0);
  next = start_0 + 1;
  while (next < 18 && $intern_19.charCodeAt(next) == ch_0) {
    ++next;
  }
  return next - start_0;
}

function com_google_gwt_i18n_shared_DateTimeFormat_$identifyAbutStart__Lcom_google_gwt_i18n_shared_DateTimeFormat_2V(this$static){
  var abut, i, len;
  abut = false;
  len = this$static.com_google_gwt_i18n_shared_DateTimeFormat_patternParts.java_util_ArrayList_array.length;
  for (i = 0; i < len; i++) {
    if (com_google_gwt_i18n_shared_DateTimeFormat_$isNumeric__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Lcom_google_gwt_i18n_shared_DateTimeFormat$PatternPart_2Z(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.com_google_gwt_i18n_shared_DateTimeFormat_patternParts, i), 51))) {
      if (!abut && i + 1 < len && com_google_gwt_i18n_shared_DateTimeFormat_$isNumeric__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Lcom_google_gwt_i18n_shared_DateTimeFormat$PatternPart_2Z(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.com_google_gwt_i18n_shared_DateTimeFormat_patternParts, i + 1), 51))) {
        abut = true;
        com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.com_google_gwt_i18n_shared_DateTimeFormat_patternParts, i), 51).com_google_gwt_i18n_shared_DateTimeFormat$PatternPart_abutStart = true;
      }
    }
     else {
      abut = false;
    }
  }
}

function com_google_gwt_i18n_shared_DateTimeFormat_$isNumeric__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Lcom_google_gwt_i18n_shared_DateTimeFormat$PatternPart_2Z(part){
  var i;
  if (part.com_google_gwt_i18n_shared_DateTimeFormat$PatternPart_count <= 0) {
    return false;
  }
  i = java_lang_String_$indexOf__Ljava_lang_String_2Ljava_lang_String_2I('MLydhHmsSDkK', java_lang_String_fromCodePoint__ILjava_lang_String_2(part.com_google_gwt_i18n_shared_DateTimeFormat$PatternPart_text.charCodeAt(0)));
  return i > 1 || i >= 0 && part.com_google_gwt_i18n_shared_DateTimeFormat$PatternPart_count < 3;
}

function com_google_gwt_i18n_shared_DateTimeFormat_$parsePattern__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_String_2V(this$static){
  var buf, ch_0, count, i, inQuote;
  buf = new java_lang_StringBuilder_StringBuilder__IV;
  inQuote = false;
  for (i = 0; i < 18; i++) {
    ch_0 = $intern_19.charCodeAt(i);
    if (ch_0 == 32) {
      com_google_gwt_i18n_shared_DateTimeFormat_$addPart__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2IV(this$static, buf, 0);
      buf.java_lang_AbstractStringBuilder_string += ' ';
      com_google_gwt_i18n_shared_DateTimeFormat_$addPart__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2IV(this$static, buf, 0);
      while (i + 1 < 18 && $intern_19.charCodeAt(i + 1) == 32) {
        ++i;
      }
      continue;
    }
    if (inQuote) {
      if (ch_0 == 39) {
        if (i + 1 < 18 && $intern_19.charCodeAt(i + 1) == 39) {
          buf.java_lang_AbstractStringBuilder_string += "'";
          ++i;
        }
         else {
          inQuote = false;
        }
      }
       else {
        buf.java_lang_AbstractStringBuilder_string += com_google_gwt_lang_Cast_charToString__CLjava_lang_String_2(ch_0);
      }
      continue;
    }
    if (java_lang_String_$indexOf__Ljava_lang_String_2Ljava_lang_String_2I('GyMLdkHmsSEcDahKzZv', java_lang_String_fromCodePoint__ILjava_lang_String_2(ch_0)) > 0) {
      com_google_gwt_i18n_shared_DateTimeFormat_$addPart__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2IV(this$static, buf, 0);
      buf.java_lang_AbstractStringBuilder_string += com_google_gwt_lang_Cast_charToString__CLjava_lang_String_2(ch_0);
      count = com_google_gwt_i18n_shared_DateTimeFormat_$getNextCharCountInPattern__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_String_2II(i);
      com_google_gwt_i18n_shared_DateTimeFormat_$addPart__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2IV(this$static, buf, count);
      i += count - 1;
      continue;
    }
    if (ch_0 == 39) {
      if (i + 1 < 18 && $intern_19.charCodeAt(i + 1) == 39) {
        buf.java_lang_AbstractStringBuilder_string += "'";
        ++i;
      }
       else {
        inQuote = true;
      }
    }
     else {
      buf.java_lang_AbstractStringBuilder_string += com_google_gwt_lang_Cast_charToString__CLjava_lang_String_2(ch_0);
    }
  }
  com_google_gwt_i18n_shared_DateTimeFormat_$addPart__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2IV(this$static, buf, 0);
  com_google_gwt_i18n_shared_DateTimeFormat_$identifyAbutStart__Lcom_google_gwt_i18n_shared_DateTimeFormat_2V(this$static);
}

function com_google_gwt_i18n_shared_DateTimeFormat_$subFormat__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2CILjava_util_Date_2Ljava_util_Date_2Ljava_util_Date_2Lcom_google_gwt_i18n_shared_TimeZone_2Z(buf, ch_0, count, adjustedDate, adjustedTime, timezone){
  var com_google_gwt_i18n_shared_DateTimeFormat_$formatEra__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0, com_google_gwt_i18n_shared_DateTimeFormat_$format24Hours__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0, com_google_gwt_i18n_shared_DateTimeFormat_$formatDayOfWeek__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0, com_google_gwt_i18n_shared_DateTimeFormat_$format1To12Hours__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0, com_google_gwt_i18n_shared_DateTimeFormat_$format0To11Hours__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0, com_google_gwt_i18n_shared_DateTimeFormat_$format0To23Hours__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0, com_google_gwt_i18n_shared_DateTimeFormat_$formatStandaloneDay__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0, com_google_gwt_i18n_shared_DateTimeFormat_$formatStandaloneMonth__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0, com_google_gwt_i18n_shared_DateTimeFormat_$formatQuarter__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0, com_google_gwt_i18n_shared_DateTimeFormat_$formatDate__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0, com_google_gwt_i18n_shared_DateTimeFormat_$formatMinutes__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0, com_google_gwt_i18n_shared_DateTimeFormat_$formatSeconds__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0;
  switch (ch_0) {
    case 71:
      com_google_gwt_i18n_shared_DateTimeFormat_$formatEra__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0 = adjustedDate.java_util_Date_jsdate.getFullYear() - 1900 >= -1900?1:0;
      count >= 4?java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(buf, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_6, 2, 4, ['Before Christ', 'Anno Domini'])[com_google_gwt_i18n_shared_DateTimeFormat_$formatEra__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0]):java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(buf, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_6, 2, 4, ['BC', 'AD'])[com_google_gwt_i18n_shared_DateTimeFormat_$formatEra__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0]);
      break;
    case 121:
      com_google_gwt_i18n_shared_DateTimeFormat_$formatYear__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V(buf, count, adjustedDate);
      break;
    case 77:
      com_google_gwt_i18n_shared_DateTimeFormat_$formatMonth__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V(buf, count, adjustedDate);
      break;
    case 107:
      com_google_gwt_i18n_shared_DateTimeFormat_$format24Hours__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0 = adjustedTime.java_util_Date_jsdate.getHours();
      com_google_gwt_i18n_shared_DateTimeFormat_$format24Hours__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0 == 0?com_google_gwt_i18n_shared_DateTimeFormat_$zeroPaddingNumber__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2IIV(buf, 24, count):com_google_gwt_i18n_shared_DateTimeFormat_$zeroPaddingNumber__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2IIV(buf, com_google_gwt_i18n_shared_DateTimeFormat_$format24Hours__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0, count);
      break;
    case 83:
      com_google_gwt_i18n_shared_DateTimeFormat_$formatFractionalSeconds__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V(buf, count, adjustedTime);
      break;
    case 69:
      com_google_gwt_i18n_shared_DateTimeFormat_$formatDayOfWeek__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0 = adjustedDate.java_util_Date_jsdate.getDay();
      count == 5?java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(buf, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_6, 2, 4, ['S', 'M', 'T', 'W', 'T', 'F', 'S'])[com_google_gwt_i18n_shared_DateTimeFormat_$formatDayOfWeek__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0]):count == 4?java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(buf, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_6, 2, 4, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])[com_google_gwt_i18n_shared_DateTimeFormat_$formatDayOfWeek__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0]):java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(buf, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_6, 2, 4, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])[com_google_gwt_i18n_shared_DateTimeFormat_$formatDayOfWeek__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0]);
      break;
    case 97:
      adjustedTime.java_util_Date_jsdate.getHours() >= 12 && adjustedTime.java_util_Date_jsdate.getHours() < 24?java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(buf, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_6, 2, 4, ['AM', 'PM'])[1]):java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(buf, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_6, 2, 4, ['AM', 'PM'])[0]);
      break;
    case 104:
      com_google_gwt_i18n_shared_DateTimeFormat_$format1To12Hours__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0 = adjustedTime.java_util_Date_jsdate.getHours() % 12;
      com_google_gwt_i18n_shared_DateTimeFormat_$format1To12Hours__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0 == 0?com_google_gwt_i18n_shared_DateTimeFormat_$zeroPaddingNumber__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2IIV(buf, 12, count):com_google_gwt_i18n_shared_DateTimeFormat_$zeroPaddingNumber__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2IIV(buf, com_google_gwt_i18n_shared_DateTimeFormat_$format1To12Hours__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0, count);
      break;
    case 75:
      com_google_gwt_i18n_shared_DateTimeFormat_$format0To11Hours__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0 = adjustedTime.java_util_Date_jsdate.getHours() % 12;
      com_google_gwt_i18n_shared_DateTimeFormat_$zeroPaddingNumber__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2IIV(buf, com_google_gwt_i18n_shared_DateTimeFormat_$format0To11Hours__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0, count);
      break;
    case 72:
      com_google_gwt_i18n_shared_DateTimeFormat_$format0To23Hours__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0 = adjustedTime.java_util_Date_jsdate.getHours();
      com_google_gwt_i18n_shared_DateTimeFormat_$zeroPaddingNumber__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2IIV(buf, com_google_gwt_i18n_shared_DateTimeFormat_$format0To23Hours__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0, count);
      break;
    case 99:
      com_google_gwt_i18n_shared_DateTimeFormat_$formatStandaloneDay__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0 = adjustedDate.java_util_Date_jsdate.getDay();
      count == 5?java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(buf, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_6, 2, 4, ['S', 'M', 'T', 'W', 'T', 'F', 'S'])[com_google_gwt_i18n_shared_DateTimeFormat_$formatStandaloneDay__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0]):count == 4?java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(buf, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_6, 2, 4, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])[com_google_gwt_i18n_shared_DateTimeFormat_$formatStandaloneDay__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0]):count == 3?java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(buf, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_6, 2, 4, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])[com_google_gwt_i18n_shared_DateTimeFormat_$formatStandaloneDay__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0]):com_google_gwt_i18n_shared_DateTimeFormat_$zeroPaddingNumber__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2IIV(buf, com_google_gwt_i18n_shared_DateTimeFormat_$formatStandaloneDay__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0, 1);
      break;
    case 76:
      com_google_gwt_i18n_shared_DateTimeFormat_$formatStandaloneMonth__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0 = adjustedDate.java_util_Date_jsdate.getMonth();
      count == 5?java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(buf, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_6, 2, 4, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'])[com_google_gwt_i18n_shared_DateTimeFormat_$formatStandaloneMonth__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0]):count == 4?java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(buf, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_6, 2, 4, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])[com_google_gwt_i18n_shared_DateTimeFormat_$formatStandaloneMonth__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0]):count == 3?java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(buf, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_6, 2, 4, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])[com_google_gwt_i18n_shared_DateTimeFormat_$formatStandaloneMonth__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0]):com_google_gwt_i18n_shared_DateTimeFormat_$zeroPaddingNumber__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2IIV(buf, com_google_gwt_i18n_shared_DateTimeFormat_$formatStandaloneMonth__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0 + 1, count);
      break;
    case 81:
      com_google_gwt_i18n_shared_DateTimeFormat_$formatQuarter__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0 = ~~(adjustedDate.java_util_Date_jsdate.getMonth() / 3);
      count < 4?java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(buf, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_6, 2, 4, ['Q1', 'Q2', 'Q3', 'Q4'])[com_google_gwt_i18n_shared_DateTimeFormat_$formatQuarter__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0]):java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(buf, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_6, 2, 4, ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'])[com_google_gwt_i18n_shared_DateTimeFormat_$formatQuarter__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0]);
      break;
    case 100:
      com_google_gwt_i18n_shared_DateTimeFormat_$formatDate__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0 = adjustedDate.java_util_Date_jsdate.getDate();
      com_google_gwt_i18n_shared_DateTimeFormat_$zeroPaddingNumber__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2IIV(buf, com_google_gwt_i18n_shared_DateTimeFormat_$formatDate__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0, count);
      break;
    case 109:
      com_google_gwt_i18n_shared_DateTimeFormat_$formatMinutes__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0 = adjustedTime.java_util_Date_jsdate.getMinutes();
      com_google_gwt_i18n_shared_DateTimeFormat_$zeroPaddingNumber__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2IIV(buf, com_google_gwt_i18n_shared_DateTimeFormat_$formatMinutes__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0, count);
      break;
    case 115:
      com_google_gwt_i18n_shared_DateTimeFormat_$formatSeconds__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0 = adjustedTime.java_util_Date_jsdate.getSeconds();
      com_google_gwt_i18n_shared_DateTimeFormat_$zeroPaddingNumber__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2IIV(buf, com_google_gwt_i18n_shared_DateTimeFormat_$formatSeconds__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2ILjava_util_Date_2V_value_0, count);
      break;
    case 122:
      count < 4?java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(buf, timezone.com_google_gwt_i18n_client_TimeZone_tzNames[0]):java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(buf, timezone.com_google_gwt_i18n_client_TimeZone_tzNames[1]);
      break;
    case 118:
      java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(buf, timezone.com_google_gwt_i18n_client_TimeZone_timezoneID);
      break;
    case 90:
      count < 3?java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(buf, com_google_gwt_i18n_client_TimeZone_$getRFCTimeZoneString__Lcom_google_gwt_i18n_client_TimeZone_2Ljava_util_Date_2Ljava_lang_String_2(timezone)):count == 3?java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(buf, com_google_gwt_i18n_client_TimeZone_$getISOTimeZoneString__Lcom_google_gwt_i18n_client_TimeZone_2Ljava_util_Date_2Ljava_lang_String_2(timezone)):java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(buf, com_google_gwt_i18n_client_TimeZone_composeGMTString__ILjava_lang_String_2(timezone.com_google_gwt_i18n_client_TimeZone_standardOffset));
      break;
    default:return false;
  }
  return true;
}

function com_google_gwt_i18n_shared_DateTimeFormat_$zeroPaddingNumber__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_StringBuilder_2IIV(buf, value_0, minWidth){
  var b, i;
  b = 10;
  for (i = 0; i < minWidth - 1; i++) {
    value_0 < b && (buf.java_lang_AbstractStringBuilder_string += '0' , buf);
    b *= 10;
  }
  buf.java_lang_AbstractStringBuilder_string += value_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(207, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1i18n_1shared_1DateTimeFormat_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_20, $intern_21, 207);
function com_google_gwt_i18n_client_DateTimeFormat_$clinit__V(){
  com_google_gwt_i18n_client_DateTimeFormat_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_i18n_shared_DateTimeFormat_$clinit__V();
  com_google_gwt_i18n_client_DateTimeFormat_cache = new java_util_HashMap_HashMap__V;
}

function com_google_gwt_i18n_client_DateTimeFormat_DateTimeFormat__Ljava_lang_String_2Lcom_google_gwt_i18n_client_DateTimeFormatInfo_2V(){
  com_google_gwt_i18n_shared_DateTimeFormat_$clinit__V();
  this.com_google_gwt_i18n_shared_DateTimeFormat_patternParts = new java_util_ArrayList_ArrayList__V;
  this.com_google_gwt_i18n_shared_DateTimeFormat_pattern = $intern_19;
  com_google_gwt_i18n_shared_DateTimeFormat_$parsePattern__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_lang_String_2V(this);
}

function com_google_gwt_i18n_client_DateTimeFormat_getFormat__Ljava_lang_String_2Lcom_google_gwt_i18n_client_DateTimeFormatInfo_2Lcom_google_gwt_i18n_client_DateTimeFormat_2(dtfi){
  com_google_gwt_i18n_client_DateTimeFormat_$clinit__V();
  var defaultDtfi, dtf;
  defaultDtfi = com_google_gwt_i18n_client_LocaleInfo_$getDateTimeFormatInfo__Lcom_google_gwt_i18n_client_LocaleInfo_2Lcom_google_gwt_i18n_client_DateTimeFormatInfo_2((com_google_gwt_i18n_client_LocaleInfo_$clinit__V() , com_google_gwt_i18n_client_LocaleInfo_$clinit__V() , com_google_gwt_i18n_client_LocaleInfo_instance));
  dtf = null;
  dtfi == defaultDtfi && (dtf = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_i18n_client_DateTimeFormat_cache.get__Ljava_lang_Object_2Ljava_lang_Object_2($intern_19), 73));
  if (!dtf) {
    dtf = new com_google_gwt_i18n_client_DateTimeFormat_DateTimeFormat__Ljava_lang_String_2Lcom_google_gwt_i18n_client_DateTimeFormatInfo_2V;
    dtfi == defaultDtfi && com_google_gwt_i18n_client_DateTimeFormat_cache.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2($intern_19, dtf);
  }
  return dtf;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(73, 207, {73:1}, com_google_gwt_i18n_client_DateTimeFormat_DateTimeFormat__Ljava_lang_String_2Lcom_google_gwt_i18n_client_DateTimeFormatInfo_2V);
var com_google_gwt_i18n_client_DateTimeFormat_cache;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1i18n_1client_1DateTimeFormat_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_22, $intern_21, 73);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(247, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1i18n_1shared_1DefaultDateTimeFormatInfo_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_20, $intern_23, 247);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(248, 247, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1i18n_1client_1DefaultDateTimeFormatInfo_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_22, $intern_23, 248);
function com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V(){
  com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_i18n_client_HasDirection$Direction_RTL = new com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV('RTL', 0);
  com_google_gwt_i18n_client_HasDirection$Direction_LTR = new com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV('LTR', 1);
  com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT = new com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV('DEFAULT', 2);
}

function com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_i18n_client_HasDirection$Direction_values___3Lcom_google_gwt_i18n_client_HasDirection$Direction_2(){
  com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V();
  return com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1i18n_1client_1HasDirection$Direction_12_1classLit, 1), $intern_6, 45, 0, [com_google_gwt_i18n_client_HasDirection$Direction_RTL, com_google_gwt_i18n_client_HasDirection$Direction_LTR, com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT]);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(45, 6, {45:1, 3:1, 7:1, 6:1}, com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV);
var com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT, com_google_gwt_i18n_client_HasDirection$Direction_LTR, com_google_gwt_i18n_client_HasDirection$Direction_RTL;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1i18n_1client_1HasDirection$Direction_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'HasDirection/Direction', 45, com_google_gwt_i18n_client_HasDirection$Direction_values___3Lcom_google_gwt_i18n_client_HasDirection$Direction_2);
function com_google_gwt_i18n_client_LocaleInfo_$clinit__V(){
  com_google_gwt_i18n_client_LocaleInfo_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_i18n_client_LocaleInfo_instance = new com_google_gwt_i18n_client_LocaleInfo_LocaleInfo__Lcom_google_gwt_i18n_client_impl_LocaleInfoImpl_2Lcom_google_gwt_i18n_client_impl_CldrImpl_2V;
}

function com_google_gwt_i18n_client_LocaleInfo_$getDateTimeFormatInfo__Lcom_google_gwt_i18n_client_LocaleInfo_2Lcom_google_gwt_i18n_client_DateTimeFormatInfo_2(this$static){
  !this$static.com_google_gwt_i18n_client_LocaleInfo_dateTimeFormatInfo && (this$static.com_google_gwt_i18n_client_LocaleInfo_dateTimeFormatInfo = new com_google_gwt_i18n_client_impl_cldr_DateTimeFormatInfoImpl_DateTimeFormatInfoImpl__V);
  return this$static.com_google_gwt_i18n_client_LocaleInfo_dateTimeFormatInfo;
}

function com_google_gwt_i18n_client_LocaleInfo_LocaleInfo__Lcom_google_gwt_i18n_client_impl_LocaleInfoImpl_2Lcom_google_gwt_i18n_client_impl_CldrImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(143, 1, {}, com_google_gwt_i18n_client_LocaleInfo_LocaleInfo__Lcom_google_gwt_i18n_client_impl_LocaleInfoImpl_2Lcom_google_gwt_i18n_client_impl_CldrImpl_2V);
var com_google_gwt_i18n_client_LocaleInfo_instance;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1i18n_1client_1LocaleInfo_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_22, 'LocaleInfo', 143);
function com_google_gwt_i18n_client_TimeZone_$getISOTimeZoneString__Lcom_google_gwt_i18n_client_TimeZone_2Ljava_util_Date_2Ljava_lang_String_2(this$static){
  var data_0, offset;
  offset = -this$static.com_google_gwt_i18n_client_TimeZone_standardOffset;
  data_0 = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_C_1classLit, 1), {3:1}, 0, 7, [43, 48, 48, 58, 48, 48]);
  if (offset < 0) {
    data_0[0] = 45;
    offset = -offset;
  }
  data_0[1] = data_0[1] + ~~(~~(offset / 60) / 10) & $intern_5;
  data_0[2] = data_0[2] + ~~(offset / 60) % 10 & $intern_5;
  data_0[4] = data_0[4] + ~~(offset % 60 / 10) & $intern_5;
  data_0[5] = data_0[5] + offset % 10 & $intern_5;
  return java_lang_String__1_1valueOf___3CIILjava_lang_String_2(data_0, 0, data_0.length);
}

function com_google_gwt_i18n_client_TimeZone_$getRFCTimeZoneString__Lcom_google_gwt_i18n_client_TimeZone_2Ljava_util_Date_2Ljava_lang_String_2(this$static){
  var data_0, offset;
  offset = -this$static.com_google_gwt_i18n_client_TimeZone_standardOffset;
  data_0 = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_C_1classLit, 1), {3:1}, 0, 7, [43, 48, 48, 48, 48]);
  if (offset < 0) {
    data_0[0] = 45;
    offset = -offset;
  }
  data_0[1] = data_0[1] + ~~(~~(offset / 60) / 10) & $intern_5;
  data_0[2] = data_0[2] + ~~(offset / 60) % 10 & $intern_5;
  data_0[3] = data_0[3] + ~~(offset % 60 / 10) & $intern_5;
  data_0[4] = data_0[4] + offset % 10 & $intern_5;
  return java_lang_String__1_1valueOf___3CIILjava_lang_String_2(data_0, 0, data_0.length);
}

function com_google_gwt_i18n_client_TimeZone_TimeZone__V(){
}

function com_google_gwt_i18n_client_TimeZone_composeGMTString__ILjava_lang_String_2(offset){
  var data_0;
  data_0 = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_C_1classLit, 1), {3:1}, 0, 7, [71, 77, 84, 45, 48, 48, 58, 48, 48]);
  if (offset <= 0) {
    data_0[3] = 43;
    offset = -offset;
  }
  data_0[4] = data_0[4] + ~~(~~(offset / 60) / 10) & $intern_5;
  data_0[5] = data_0[5] + ~~(offset / 60) % 10 & $intern_5;
  data_0[7] = data_0[7] + ~~(offset % 60 / 10) & $intern_5;
  data_0[8] = data_0[8] + offset % 10 & $intern_5;
  return java_lang_String__1_1valueOf___3CIILjava_lang_String_2(data_0, 0, data_0.length);
}

function com_google_gwt_i18n_client_TimeZone_composePOSIXTimeZoneID__ILjava_lang_String_2(offset){
  var str;
  if (offset == 0) {
    return 'Etc/GMT';
  }
  if (offset < 0) {
    offset = -offset;
    str = 'Etc/GMT-';
  }
   else {
    str = 'Etc/GMT+';
  }
  return str + com_google_gwt_i18n_client_TimeZone_offsetDisplay__ILjava_lang_String_2(offset);
}

function com_google_gwt_i18n_client_TimeZone_composeUTCString__ILjava_lang_String_2(offset){
  var str;
  if (offset == 0) {
    return 'UTC';
  }
  if (offset < 0) {
    offset = -offset;
    str = 'UTC+';
  }
   else {
    str = 'UTC-';
  }
  return str + com_google_gwt_i18n_client_TimeZone_offsetDisplay__ILjava_lang_String_2(offset);
}

function com_google_gwt_i18n_client_TimeZone_createTimeZone__ILcom_google_gwt_i18n_client_TimeZone_2(timeZoneOffsetInMinutes){
  var tz;
  tz = new com_google_gwt_i18n_client_TimeZone_TimeZone__V;
  tz.com_google_gwt_i18n_client_TimeZone_standardOffset = timeZoneOffsetInMinutes;
  tz.com_google_gwt_i18n_client_TimeZone_timezoneID = com_google_gwt_i18n_client_TimeZone_composePOSIXTimeZoneID__ILjava_lang_String_2(timeZoneOffsetInMinutes);
  tz.com_google_gwt_i18n_client_TimeZone_tzNames = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, $intern_6, 2, 2, 4, 1);
  tz.com_google_gwt_i18n_client_TimeZone_tzNames[0] = com_google_gwt_i18n_client_TimeZone_composeUTCString__ILjava_lang_String_2(timeZoneOffsetInMinutes);
  tz.com_google_gwt_i18n_client_TimeZone_tzNames[1] = com_google_gwt_i18n_client_TimeZone_composeUTCString__ILjava_lang_String_2(timeZoneOffsetInMinutes);
  return tz;
}

function com_google_gwt_i18n_client_TimeZone_offsetDisplay__ILjava_lang_String_2(offset){
  var hour, mins;
  hour = ~~(offset / 60);
  mins = offset % 60;
  if (mins == 0) {
    return '' + hour;
  }
  return '' + hour + ':' + ('' + mins);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(213, 1, {}, com_google_gwt_i18n_client_TimeZone_TimeZone__V);
_.com_google_gwt_i18n_client_TimeZone_standardOffset = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1i18n_1client_1TimeZone_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_22, 'TimeZone', 213);
function com_google_gwt_i18n_client_impl_cldr_DateTimeFormatInfoImpl_DateTimeFormatInfoImpl__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(212, 248, {}, com_google_gwt_i18n_client_impl_cldr_DateTimeFormatInfoImpl_DateTimeFormatInfoImpl__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1i18n_1client_1impl_1cldr_1DateTimeFormatInfoImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.i18n.client.impl.cldr', 'DateTimeFormatInfoImpl', 212);
function com_google_gwt_i18n_shared_DateTimeFormat$PatternPart_DateTimeFormat$PatternPart__Ljava_lang_String_2IV(txt, cnt){
  this.com_google_gwt_i18n_shared_DateTimeFormat$PatternPart_text = txt;
  this.com_google_gwt_i18n_shared_DateTimeFormat$PatternPart_count = cnt;
  this.com_google_gwt_i18n_shared_DateTimeFormat$PatternPart_abutStart = false;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(51, 1, {51:1}, com_google_gwt_i18n_shared_DateTimeFormat$PatternPart_DateTimeFormat$PatternPart__Ljava_lang_String_2IV);
_.com_google_gwt_i18n_shared_DateTimeFormat$PatternPart_abutStart = false;
_.com_google_gwt_i18n_shared_DateTimeFormat$PatternPart_count = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1i18n_1shared_1DateTimeFormat$PatternPart_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_20, 'DateTimeFormat/PatternPart', 51);
function com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(clazz, dimensions){
  return java_lang_Class_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(clazz, dimensions);
}

function com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = com_google_gwt_lang_Array_initializeArrayElementsWithDefaults__IILjava_lang_Object_2(elementTypeCategory, length_0);
  com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.java_lang_Object__1_1_1clazz$ = arrayClass;
  array.java_lang_Object_castableTypeMap$ = castableTypeMap;
  array.java_lang_Object_typeMarker$ = com_google_gwt_lang_JavaClassHierarchySetupUtil_typeMarkerFn__V;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function com_google_gwt_lang_Array_initializeArrayElementsWithDefaults__IILjava_lang_Object_2(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 6:
      initValue = {l:0, m:0, h:0};
      break;
    case 7:
      initValue = 0;
      break;
    case 8:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(array, index_0, value_0){
  var elementTypeId;
  if (value_0 != null) {
    switch (array.__elementTypeCategory$) {
      case 4:
        if (!com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(value_0)) {
          throw new java_lang_ArrayStoreException_ArrayStoreException__V;
        }

        break;
      case 0:
        {
          elementTypeId = array.__elementTypeId$;
          if (!com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(value_0, elementTypeId)) {
            throw new java_lang_ArrayStoreException_ArrayStoreException__V;
          }
          break;
        }

      case 2:
        if (!(!com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(value_0) && !com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(value_0))) {
          throw new java_lang_ArrayStoreException_ArrayStoreException__V;
        }

        break;
      case 1:
        {
          elementTypeId = array.__elementTypeId$;
          if (!(!com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(value_0) && !com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(value_0)) && !com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(value_0, elementTypeId)) {
            throw new java_lang_ArrayStoreException_ArrayStoreException__V;
          }
          break;
        }

    }
  }
  return array[index_0] = value_0;
}

function com_google_gwt_lang_Exceptions_cacheJavaScriptException__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptException_2V(e, jse){
  if (e && typeof e == $intern_0) {
    try {
      e.__gwt$exception = jse;
    }
     catch (ignored) {
    }
  }
}

function com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2(e){
  var jse;
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(e, 25)) {
    jse = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(e, 25);
    if (com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(jse.com_google_gwt_core_client_JavaScriptException_e) !== com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2((com_google_gwt_core_client_JavaScriptException_$clinit__V() , com_google_gwt_core_client_JavaScriptException_NOT_1SET))) {
      return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(jse.com_google_gwt_core_client_JavaScriptException_e) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_core_client_JavaScriptException_NOT_1SET)?null:jse.com_google_gwt_core_client_JavaScriptException_e;
    }
  }
  return e;
}

function com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2(e){
  var jse;
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(e, 5)) {
    return e;
  }
  jse = e && e.__gwt$exception;
  if (!jse) {
    jse = new com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V(e);
    com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Throwable_2Ljava_lang_Object_2V(jse, e);
    com_google_gwt_lang_Exceptions_cacheJavaScriptException__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptException_2V(e, jse);
  }
  return jse;
}

function com_google_gwt_lang_LongLibBase_create__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_24;
  a1 = value_0 >> 22 & $intern_24;
  a2 = value_0 < 0?$intern_25:0;
  return com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(a0, a1, a2);
}

function com_google_gwt_lang_LongLibBase_create__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a){
  return com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(a.l, a.m, a.h);
}

function com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(l, m, h){
  return {l:l, m:m, h:h};
}

function com_google_gwt_lang_LongLibBase_divMod__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2ZLcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw new java_lang_ArithmeticException_ArithmeticException__Ljava_lang_String_2V;
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, 0));
    return com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, 0);
  }
  if (b.h == $intern_26 && b.m == 0 && b.l == 0) {
    return com_google_gwt_lang_LongLibBase_divModByMinValue__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ZLcom_google_gwt_lang_LongLibBase$LongEmul_2(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(b);
    negative = true;
  }
  bpower = com_google_gwt_lang_LongLibBase_powerOfTwo__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_26 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = com_google_gwt_lang_LongLibBase_create__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2((com_google_gwt_lang_LongLib$Const_$clinit__V() , com_google_gwt_lang_LongLib$Const_MAX_1VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = com_google_gwt_lang_LongLib_shr__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a, bpower);
      negative && com_google_gwt_lang_LongLibBase_negate__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V(c);
      computeRemainder && (com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return com_google_gwt_lang_LongLibBase_divModByShift__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IZZZLcom_google_gwt_lang_LongLibBase$LongEmul_2(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (!com_google_gwt_lang_LongLib_gte__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, b)) {
    computeRemainder && (aIsNegative?(com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a)):(com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(a.l, a.m, a.h)));
    return com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, 0);
  }
  return com_google_gwt_lang_LongLibBase_divModHelper__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2ZZZZLcom_google_gwt_lang_LongLibBase$LongEmul_2(aIsCopy?a:com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function com_google_gwt_lang_LongLibBase_divModByMinValue__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ZLcom_google_gwt_lang_LongLibBase$LongEmul_2(a, computeRemainder){
  if (a.h == $intern_26 && a.m == 0 && a.l == 0) {
    computeRemainder && (com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, 0));
    return com_google_gwt_lang_LongLibBase_create__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2((com_google_gwt_lang_LongLib$Const_$clinit__V() , com_google_gwt_lang_LongLib$Const_ONE));
  }
  computeRemainder && (com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(a.l, a.m, a.h));
  return com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, 0);
}

function com_google_gwt_lang_LongLibBase_divModByShift__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IZZZLcom_google_gwt_lang_LongLibBase$LongEmul_2(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = com_google_gwt_lang_LongLib_shr__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a, bpower);
  negative && com_google_gwt_lang_LongLibBase_negate__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V(c);
  if (computeRemainder) {
    a = com_google_gwt_lang_LongLibBase_maskRight__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a, bpower);
    aIsNegative?(com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a)):(com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(a.l, a.m, a.h));
  }
  return c;
}

function com_google_gwt_lang_LongLibBase_divModHelper__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2ZZZZLcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a1_0, com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a2_0, com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a0_0;
  shift_0 = com_google_gwt_lang_LongLibBase_numberOfLeadingZeros__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(b) - com_google_gwt_lang_LongLibBase_numberOfLeadingZeros__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(a);
  bshift = com_google_gwt_lang_LongLib_shl__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(b, shift_0);
  quotient = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, 0);
  while (shift_0 >= 0) {
    gte = com_google_gwt_lang_LongLibBase_trialSubtract__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a1_0 = bshift.m;
    com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a2_0 = bshift.h;
    com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a0_0 = bshift.l;
    com_google_gwt_lang_LongLibBase_setH__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(bshift, com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a2_0 >>> 1);
    bshift.m = com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a1_0 >>> 1 | (com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a2_0 & 1) << 21;
    bshift.l = com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a0_0 >>> 1 | (com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a1_0 & 1) << 21;
    --shift_0;
  }
  negative && com_google_gwt_lang_LongLibBase_negate__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a);
      aIsMinValue && (com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLib_sub__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLibBase_remainder, (com_google_gwt_lang_LongLib$Const_$clinit__V() , com_google_gwt_lang_LongLib$Const_ONE)));
    }
     else {
      com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function com_google_gwt_lang_LongLibBase_maskRight__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(b0, b1, b2);
}

function com_google_gwt_lang_LongLibBase_negate__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_24;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_24;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_25;
  com_google_gwt_lang_LongLibBase_setL__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, neg0);
  com_google_gwt_lang_LongLibBase_setM__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, neg1);
  com_google_gwt_lang_LongLibBase_setH__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, neg2);
}

function com_google_gwt_lang_LongLibBase_numberOfLeadingZeros__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(a){
  var b1, b2;
  b2 = java_lang_Integer_numberOfLeadingZeros__II(a.h);
  if (b2 == 32) {
    b1 = java_lang_Integer_numberOfLeadingZeros__II(a.m);
    return b1 == 32?java_lang_Integer_numberOfLeadingZeros__II(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

function com_google_gwt_lang_LongLibBase_powerOfTwo__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(a){
  var h, l, m;
  l = a.l;
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return java_lang_Integer_numberOfTrailingZeros__II(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return java_lang_Integer_numberOfTrailingZeros__II(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return java_lang_Integer_numberOfTrailingZeros__II(h) + 44;
  }
  return -1;
}

function com_google_gwt_lang_LongLibBase_setH__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, x_0){
  a.h = x_0;
}

function com_google_gwt_lang_LongLibBase_setL__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, x_0){
  a.l = x_0;
}

function com_google_gwt_lang_LongLibBase_setM__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, x_0){
  a.m = x_0;
}

function com_google_gwt_lang_LongLibBase_toDoubleHelper__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D(a){
  return a.l + a.m * $intern_27 + a.h * $intern_28;
}

function com_google_gwt_lang_LongLibBase_trialSubtract__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  com_google_gwt_lang_LongLibBase_setL__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, sum0 & $intern_24);
  com_google_gwt_lang_LongLibBase_setM__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, sum1 & $intern_24);
  com_google_gwt_lang_LongLibBase_setH__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, sum2 & $intern_25);
  return true;
}

var com_google_gwt_lang_LongLibBase_remainder;
function com_google_gwt_lang_LongLib_add__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return {l:sum0 & $intern_24, m:sum1 & $intern_24, h:sum2 & $intern_25};
}

function com_google_gwt_lang_LongLib_eq__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, b){
  return a.l == b.l && a.m == b.m && a.h == b.h;
}

function com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2(value_0){
  var a0, a1, a2, negative, result;
  if (isNaN(value_0)) {
    return com_google_gwt_lang_LongLib$Const_$clinit__V() , com_google_gwt_lang_LongLib$Const_ZERO;
  }
  if (value_0 < $intern_29) {
    return com_google_gwt_lang_LongLib$Const_$clinit__V() , com_google_gwt_lang_LongLib$Const_MIN_1VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return com_google_gwt_lang_LongLib$Const_$clinit__V() , com_google_gwt_lang_LongLib$Const_MAX_1VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_28) {
    a2 = com_google_gwt_lang_Cast_round_1int__DI(value_0 / $intern_28);
    value_0 -= a2 * $intern_28;
  }
  a1 = 0;
  if (value_0 >= $intern_27) {
    a1 = com_google_gwt_lang_Cast_round_1int__DI(value_0 / $intern_27);
    value_0 -= a1 * $intern_27;
  }
  a0 = com_google_gwt_lang_Cast_round_1int__DI(value_0);
  result = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(a0, a1, a2);
  negative && com_google_gwt_lang_LongLibBase_negate__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V(result);
  return result;
}

function com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(value_0){
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    com_google_gwt_lang_LongLib_boxedValues == null && (com_google_gwt_lang_LongLib_boxedValues = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1LongLibBase$LongEmul_12_1classLit, $intern_6, 254, 256, 0, 1));
    result = com_google_gwt_lang_LongLib_boxedValues[rebase];
    !result && (result = com_google_gwt_lang_LongLib_boxedValues[rebase] = com_google_gwt_lang_LongLibBase_create__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(value_0));
    return result;
  }
  return com_google_gwt_lang_LongLibBase_create__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(value_0);
}

function com_google_gwt_lang_LongLib_gte__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l >= b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l < b.l);
}

function com_google_gwt_lang_LongLib_lt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, b){
  return !com_google_gwt_lang_LongLib_gte__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, b);
}

function com_google_gwt_lang_LongLib_mod__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b){
  com_google_gwt_lang_LongLibBase_divMod__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2ZLcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b, true);
  return com_google_gwt_lang_LongLibBase_remainder;
}

function com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_24;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_24;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_25;
  return com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(neg0, neg1, neg2);
}

function com_google_gwt_lang_LongLib_shl__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return {l:res0 & $intern_24, m:res1 & $intern_24, h:res2 & $intern_25};
}

function com_google_gwt_lang_LongLib_shr__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_26) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_25:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_25:0;
    res1 = negative?$intern_24:0;
    res0 = a2 >> n - 44;
  }
  return {l:res0 & $intern_24, m:res1 & $intern_24, h:res2 & $intern_25};
}

function com_google_gwt_lang_LongLib_shru__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_25;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return {l:res0 & $intern_24, m:res1 & $intern_24, h:res2 & $intern_25};
}

function com_google_gwt_lang_LongLib_sub__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return {l:sum0 & $intern_24, m:sum1 & $intern_24, h:sum2 & $intern_25};
}

function com_google_gwt_lang_LongLib_toDouble__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D(a){
  if (com_google_gwt_lang_LongLib_eq__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, (com_google_gwt_lang_LongLib$Const_$clinit__V() , com_google_gwt_lang_LongLib$Const_MIN_1VALUE))) {
    return $intern_29;
  }
  if (!com_google_gwt_lang_LongLib_gte__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, com_google_gwt_lang_LongLib$Const_ZERO)) {
    return -com_google_gwt_lang_LongLibBase_toDoubleHelper__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D(com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a));
  }
  return a.l + a.m * $intern_27 + a.h * $intern_28;
}

function com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(a){
  return a.l | a.m << 22;
}

function com_google_gwt_lang_LongLib_xor__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b){
  return {l:a.l ^ b.l, m:a.m ^ b.m, h:a.h ^ b.h};
}

var com_google_gwt_lang_LongLib_boxedValues;
function com_google_gwt_lang_LongLib$Const_$clinit__V(){
  com_google_gwt_lang_LongLib$Const_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_lang_LongLib$Const_MAX_1VALUE = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2($intern_24, $intern_24, 524287);
  com_google_gwt_lang_LongLib$Const_MIN_1VALUE = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, $intern_26);
  com_google_gwt_lang_LongLib$Const_ONE = com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(1);
  com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(2);
  com_google_gwt_lang_LongLib$Const_ZERO = com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(0);
}

var com_google_gwt_lang_LongLib$Const_MAX_1VALUE, com_google_gwt_lang_LongLib$Const_MIN_1VALUE, com_google_gwt_lang_LongLib$Const_ONE, com_google_gwt_lang_LongLib$Const_ZERO;
function com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(o){
  return o.java_lang_Object_typeMarker$ === com_google_gwt_lang_JavaClassHierarchySetupUtil_typeMarkerFn__V;
}

function com_google_gwt_lang_edu_100046pdx_100046cs410J_100046whitlock_100046AppointmentBookGwt_1_1EntryMethodHolder_init__V(){
  $wnd.setTimeout($entry(com_google_gwt_useragent_client_UserAgentAsserter_assertCompileTimeUserAgent__V));
  com_google_gwt_user_client_DocumentModeAsserter_$onModuleLoad__Lcom_google_gwt_user_client_DocumentModeAsserter_2V();
  edu_pdx_cs410J_whitlock_client_AppointmentBookGwt_$onModuleLoad__Ledu_pdx_cs410J_whitlock_client_AppointmentBookGwt_2V(new edu_pdx_cs410J_whitlock_client_AppointmentBookGwt_AppointmentBookGwt__V);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(242, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1text_1shared_1AbstractRenderer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.text.shared', 'AbstractRenderer', 242);
function com_google_gwt_text_shared_testing_PassthroughParser_PassthroughParser__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(157, 1, {}, com_google_gwt_text_shared_testing_PassthroughParser_PassthroughParser__V);
var com_google_gwt_text_shared_testing_PassthroughParser_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1text_1shared_1testing_1PassthroughParser_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_30, 'PassthroughParser', 157);
function com_google_gwt_text_shared_testing_PassthroughRenderer_PassthroughRenderer__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(156, 242, {}, com_google_gwt_text_shared_testing_PassthroughRenderer_PassthroughRenderer__V);
var com_google_gwt_text_shared_testing_PassthroughRenderer_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1text_1shared_1testing_1PassthroughRenderer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_30, 'PassthroughRenderer', 156);
function com_google_gwt_user_client_DOM_$clinit__V(){
  com_google_gwt_user_client_DOM_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_user_client_impl_DOMImplStandard_$clinit__V();
}

function com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(evt, elem, listener){
  com_google_gwt_user_client_DOM_$clinit__V();
  var prevCurrentEvent;
  prevCurrentEvent = com_google_gwt_user_client_DOM_currentEvent;
  com_google_gwt_user_client_DOM_currentEvent = evt;
  elem == com_google_gwt_user_client_DOM_sCaptureElem && com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(evt.type) == 8192 && (com_google_gwt_user_client_DOM_sCaptureElem = null);
  listener.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(evt);
  com_google_gwt_user_client_DOM_currentEvent = prevCurrentEvent;
}

function com_google_gwt_user_client_DOM_insertChild__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2IV(parent_0, child, index_0){
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_user_client_impl_DOMImplStandard_$insertChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2IV(parent_0, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(child), index_0);
}

function com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(maybePotential){
  com_google_gwt_user_client_DOM_$clinit__V();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

var com_google_gwt_user_client_DOM_currentEvent = null, com_google_gwt_user_client_DOM_sCaptureElem;
function com_google_gwt_user_client_DocumentModeAsserter_$onModuleLoad__Lcom_google_gwt_user_client_DocumentModeAsserter_2V(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_6, 2, 4, [$intern_31]);
  for (i = 0; i < allowedModes.length; i++) {
    if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z($intern_31, allowedModes[0]) && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function com_google_gwt_user_client_Event_getTypeInt__Ljava_lang_String_2I(typeName){
  return com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I((com_google_gwt_user_client_DOM_$clinit__V() , typeName));
}

function com_google_gwt_user_client_Window_addCloseHandler__Lcom_google_gwt_event_logical_shared_CloseHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(handler){
  com_google_gwt_user_client_Window_maybeInitializeCloseHandlers__V();
  return com_google_gwt_user_client_Window_addHandler__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(com_google_gwt_event_logical_shared_CloseEvent_TYPE?com_google_gwt_event_logical_shared_CloseEvent_TYPE:(com_google_gwt_event_logical_shared_CloseEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V), handler);
}

function com_google_gwt_user_client_Window_addHandler__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(type_0, handler){
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2((!com_google_gwt_user_client_Window_handlers && (com_google_gwt_user_client_Window_handlers = new com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V) , com_google_gwt_user_client_Window_handlers), type_0, handler);
}

function com_google_gwt_user_client_Window_alert__Ljava_lang_String_2V(msg){
  $wnd.alert(msg);
}

function com_google_gwt_user_client_Window_maybeInitializeCloseHandlers__V(){
  var com_google_gwt_user_client_impl_WindowImplIE_$initHandler__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V_scriptElem_0, com_google_gwt_dom_client_DOMImplStandardBase_$createScriptElement__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ScriptElement_2_elem_1;
  if (!com_google_gwt_user_client_Window_closeHandlersInitialized) {
    com_google_gwt_user_client_impl_WindowImplIE_$initHandler__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V_scriptElem_0 = (com_google_gwt_dom_client_DOMImplStandardBase_$createScriptElement__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ScriptElement_2_elem_1 = $doc.createElement('script') , com_google_gwt_dom_client_DOMImplStandard_$setInnerText__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(com_google_gwt_dom_client_DOMImplStandardBase_$createScriptElement__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ScriptElement_2_elem_1, 'function __gwt_initWindowCloseHandler(beforeunload, unload) {\n  var wnd = window\n  , oldOnBeforeUnload = wnd.onbeforeunload\n  , oldOnUnload = wnd.onunload;\n  \n  wnd.onbeforeunload = function(evt) {\n    var ret, oldRet;\n    try {\n      ret = beforeunload();\n    } finally {\n      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);\n    }\n    // Avoid returning null as IE6 will coerce it into a string.\n    // Ensure that "" gets returned properly.\n    if (ret != null) {\n      return ret;\n    }\n    if (oldRet != null) {\n      return oldRet;\n    }\n    // returns undefined.\n  };\n  \n  wnd.onunload = function(evt) {\n    try {\n      unload();\n    } finally {\n      oldOnUnload && oldOnUnload(evt);\n      wnd.onresize = null;\n      wnd.onscroll = null;\n      wnd.onbeforeunload = null;\n      wnd.onunload = null;\n    }\n  };\n  \n  // Remove the reference once we\'ve initialize the handler\n  wnd.__gwt_initWindowCloseHandler = undefined;\n}\n') , com_google_gwt_dom_client_DOMImplStandardBase_$createScriptElement__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ScriptElement_2_elem_1);
    com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2($doc.body, com_google_gwt_user_client_impl_WindowImplIE_$initHandler__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V_scriptElem_0);
    com_google_gwt_user_client_impl_WindowImplIE_$initWindowCloseHandlerImpl__Lcom_google_gwt_user_client_impl_WindowImplIE_2V();
    com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2($doc.body, com_google_gwt_user_client_impl_WindowImplIE_$initHandler__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V_scriptElem_0);
    com_google_gwt_user_client_Window_closeHandlersInitialized = true;
  }
}

function com_google_gwt_user_client_Window_onClosed__V(){
  com_google_gwt_user_client_Window_closeHandlersInitialized && com_google_gwt_event_logical_shared_CloseEvent_fire__Lcom_google_gwt_event_logical_shared_HasCloseHandlers_2Ljava_lang_Object_2ZV((!com_google_gwt_user_client_Window_handlers && (com_google_gwt_user_client_Window_handlers = new com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V) , com_google_gwt_user_client_Window_handlers));
}

function com_google_gwt_user_client_Window_onClosing__Ljava_lang_String_2(){
  var event_0;
  if (com_google_gwt_user_client_Window_closeHandlersInitialized) {
    event_0 = new com_google_gwt_user_client_Window$ClosingEvent_Window$ClosingEvent__V;
    !!com_google_gwt_user_client_Window_handlers && com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(com_google_gwt_user_client_Window_handlers, event_0);
    return null;
  }
  return null;
}

var com_google_gwt_user_client_Window_closeHandlersInitialized = false, com_google_gwt_user_client_Window_handlers;
function com_google_gwt_user_client_Window$ClosingEvent_$clinit__V(){
  com_google_gwt_user_client_Window$ClosingEvent_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_user_client_Window$ClosingEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V;
}

function com_google_gwt_user_client_Window$ClosingEvent_Window$ClosingEvent__V(){
  com_google_gwt_user_client_Window$ClosingEvent_$clinit__V();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(144, 237, {}, com_google_gwt_user_client_Window$ClosingEvent_Window$ClosingEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_user_client_Window$ClosingEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(handler);
  null.nullMethod();
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_user_client_Window$ClosingEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_user_client_Window$ClosingEvent_TYPE;
}
;
var com_google_gwt_user_client_Window$ClosingEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Window$ClosingEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_16, 'Window/ClosingEvent', 144);
function com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V(){
  com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V.call(this, null);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(92, 69, {14:1}, com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Window$WindowHandlers_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_16, 'Window/WindowHandlers', 92);
function com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case $intern_12:
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return $intern_32;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_26;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return $intern_27;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_33;
    case 'gesturechange':
      return $intern_34;
    case 'gestureend':
      return $intern_35;
    default:return -1;
  }
}

function com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V(){
  if (!com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized) {
    com_google_gwt_user_client_impl_DOMImplStandard_$initEventSystem__Lcom_google_gwt_user_client_impl_DOMImplStandard_2V();
    com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized = true;
  }
}

function com_google_gwt_user_client_impl_DOMImpl_getEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2(elem){
  var maybeListener = elem.__listener;
  return !com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(maybeListener) && com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(maybeListener, 17)?maybeListener:null;
}

function com_google_gwt_user_client_impl_DOMImpl_setEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(elem, listener){
  elem.__listener = listener;
}

var com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized = false;
function com_google_gwt_user_client_impl_DOMImplStandard_$clinit__V(){
  com_google_gwt_user_client_impl_DOMImplStandard_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_user_client_impl_DOMImplStandard_bitlessEventDispatchers = {_default_:com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent__Lcom_google_gwt_user_client_Event_2V, dragenter:com_google_gwt_user_client_impl_DOMImplStandard_dispatchDragEvent__Lcom_google_gwt_user_client_Event_2V, dragover:com_google_gwt_user_client_impl_DOMImplStandard_dispatchDragEvent__Lcom_google_gwt_user_client_Event_2V};
  com_google_gwt_user_client_impl_DOMImplStandard_captureEventDispatchers = {click:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, dblclick:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mousedown:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mouseup:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mousemove:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mouseover:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mouseout:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mousewheel:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, keydown:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent__Lcom_google_gwt_user_client_Event_2V, keyup:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent__Lcom_google_gwt_user_client_Event_2V, keypress:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent__Lcom_google_gwt_user_client_Event_2V, touchstart:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, touchend:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, touchmove:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, touchcancel:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, gesturestart:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, gestureend:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, gesturechange:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V};
}

function com_google_gwt_user_client_impl_DOMImplStandard_$getChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2ILcom_google_gwt_dom_client_Element_2(elem, index_0){
  var count = 0, child = elem.firstChild;
  while (child) {
    if (child.nodeType == 1) {
      if (index_0 == count)
        return child;
      ++count;
    }
    child = child.nextSibling;
  }
  return null;
}

function com_google_gwt_user_client_impl_DOMImplStandard_$getChildCount__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2I(elem){
  var count = 0, child = elem.firstChild;
  while (child) {
    child.nodeType == 1 && ++count;
    child = child.nextSibling;
  }
  return count;
}

function com_google_gwt_user_client_impl_DOMImplStandard_$initEventSystem__Lcom_google_gwt_user_client_impl_DOMImplStandard_2V(){
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent = $entry(com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent__Lcom_google_gwt_user_client_Event_2V);
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent = $entry(com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent__Lcom_google_gwt_user_client_Event_2V);
  var foreach = com_google_gwt_user_client_impl_EventMap_foreach__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V;
  var bitlessEvents = com_google_gwt_user_client_impl_DOMImplStandard_bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents = com_google_gwt_user_client_impl_DOMImplStandard_captureEventDispatchers;
  foreach(captureEvents, function(e, fn){
    captureEvents[e] = $entry(fn);
  }
  );
  foreach(captureEvents, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function com_google_gwt_user_client_impl_DOMImplStandard_$insertChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2IV(parent_0, toAdd, index_0){
  var count = 0, child = parent_0.firstChild, before = null;
  while (child) {
    if (child.nodeType == 1) {
      if (count == index_0) {
        before = child;
        break;
      }
      ++count;
    }
    child = child.nextSibling;
  }
  parent_0.insertBefore(toAdd, before);
}

function com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEvent__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, eventTypeName){
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEventImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, eventTypeName);
  java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('dragover', eventTypeName) && com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEventImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, 'dragenter');
}

function com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEventImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, eventTypeName){
  var dispatchMap = com_google_gwt_user_client_impl_DOMImplStandard_bitlessEventDispatchers;
  var dispatcher = dispatchMap[eventTypeName] || dispatchMap['_default_'];
  elem.addEventListener(eventTypeName, dispatcher, false);
}

function com_google_gwt_user_client_impl_DOMImplStandard_$sinkEvents__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2IV(elem, bits){
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  com_google_gwt_user_client_impl_DOMImplStandard_$sinkEventsImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2IV(elem, bits);
}

function com_google_gwt_user_client_impl_DOMImplStandard_$sinkEventsImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2IV(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 2 && (elem.ondblclick = bits & 2?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 4 && (elem.onmousedown = bits & 4?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 8 && (elem.onmouseup = bits & 8?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 16 && (elem.onmouseover = bits & 16?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 32 && (elem.onmouseout = bits & 32?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 64 && (elem.onmousemove = bits & 64?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 128 && (elem.onkeydown = bits & 128?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 256 && (elem.onkeypress = bits & 256?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 512 && (elem.onkeyup = bits & 512?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 1024 && (elem.onchange = bits & 1024?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 4096 && (elem.onblur = bits & 4096?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 32768 && (elem.onload = bits & 32768?com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent:null);
  chMask & $intern_32 && (elem.onerror = bits & $intern_32?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & $intern_26 && (elem.onpaste = bits & $intern_26?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 1048576 && (elem.ontouchstart = bits & 1048576?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & $intern_27 && (elem.ontouchend = bits & $intern_27?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & $intern_33 && (elem.ongesturestart = bits & $intern_33?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & $intern_34 && (elem.ongesturechange = bits & $intern_34?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & $intern_35 && (elem.ongestureend = bits & $intern_35?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
}

function com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent__Lcom_google_gwt_user_client_Event_2V(evt){
  com_google_gwt_user_client_DOM_$clinit__V();
}

function com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V(evt){
  com_google_gwt_user_client_DOM_$clinit__V();
  return;
}

function com_google_gwt_user_client_impl_DOMImplStandard_dispatchDragEvent__Lcom_google_gwt_user_client_Event_2V(evt){
  evt.preventDefault();
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent__Lcom_google_gwt_user_client_Event_2V(evt);
}

function com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent__Lcom_google_gwt_user_client_Event_2V(evt){
  var element;
  element = com_google_gwt_user_client_impl_DOMImplStandard_getFirstAncestorWithListener__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_dom_client_Element_2(evt);
  if (!element) {
    return;
  }
  com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(evt, element.nodeType != 1?null:element, com_google_gwt_user_client_impl_DOMImpl_getEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2(element));
}

function com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent__Lcom_google_gwt_user_client_Event_2V(evt){
  var element;
  element = com_google_gwt_dom_client_DOMImplStandardBase_$eventGetCurrentTarget__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_dom_client_EventTarget_2(evt);
  com_google_gwt_dom_client_Element_$setPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(element, '__gwtLastUnhandledEvent', evt.type);
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent__Lcom_google_gwt_user_client_Event_2V(evt);
}

function com_google_gwt_user_client_impl_DOMImplStandard_getFirstAncestorWithListener__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_dom_client_Element_2(evt){
  var curElem;
  curElem = com_google_gwt_dom_client_DOMImplStandardBase_$eventGetCurrentTarget__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_dom_client_EventTarget_2(evt);
  while (!!curElem && !com_google_gwt_user_client_impl_DOMImpl_getEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var com_google_gwt_user_client_impl_DOMImplStandard_bitlessEventDispatchers, com_google_gwt_user_client_impl_DOMImplStandard_captureEventDispatchers, com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent, com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent;
function com_google_gwt_user_client_impl_EventMap_foreach__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function com_google_gwt_user_client_impl_WindowImplIE_$initWindowCloseHandlerImpl__Lcom_google_gwt_user_client_impl_WindowImplIE_2V(){
  $wnd.__gwt_initWindowCloseHandler($entry(com_google_gwt_user_client_Window_onClosing__Ljava_lang_String_2), $entry(com_google_gwt_user_client_Window_onClosed__V));
}

function com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_IncompatibleRemoteServiceException__V(){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, 'This application is out of date, please click the refresh button on your browser.');
}

function com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_IncompatibleRemoteServiceException__Ljava_lang_String_2V(msg){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, 'This application is out of date, please click the refresh button on your browser. ( ' + msg + ' )');
}

function com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_IncompatibleRemoteServiceException__Ljava_lang_String_2Ljava_lang_Throwable_2V(cause){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, 'The response could not be deserialized', cause);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(56, 10, $intern_3, com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_IncompatibleRemoteServiceException__V, com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_IncompatibleRemoteServiceException__Ljava_lang_String_2V, com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_IncompatibleRemoteServiceException__Ljava_lang_String_2Ljava_lang_Throwable_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1IncompatibleRemoteServiceException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_36, 'IncompatibleRemoteServiceException', 56);
function com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2V(streamReader, instance){
  com_google_gwt_user_client_rpc_core_java_lang_Throwable_1FieldSerializer_setDetailMessage__Ljava_lang_Throwable_2Ljava_lang_String_2V(instance, com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_$getString__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2ILjava_lang_String_2(streamReader, com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_$readInt__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2I(streamReader)));
}

function com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2(streamReader){
  return new com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_IncompatibleRemoteServiceException__V;
}

function com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_1FieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2V(streamWriter, instance){
  com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_$writeString__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2Ljava_lang_String_2V(streamWriter, instance.java_lang_Throwable_detailMessage);
}

function com_google_gwt_user_client_rpc_InvocationException_InvocationException__Ljava_lang_String_2V(s){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, s, null);
}

function com_google_gwt_user_client_rpc_InvocationException_InvocationException__Ljava_lang_String_2Ljava_lang_Throwable_2V(s, cause){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, s, cause);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(49, 10, $intern_3, com_google_gwt_user_client_rpc_InvocationException_InvocationException__Ljava_lang_String_2V, com_google_gwt_user_client_rpc_InvocationException_InvocationException__Ljava_lang_String_2Ljava_lang_Throwable_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1InvocationException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_36, 'InvocationException', 49);
function com_google_gwt_user_client_rpc_RpcRequestBuilder_$create__Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2Ljava_lang_String_2Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2(this$static, serviceEntryPoint){
  this$static.com_google_gwt_user_client_rpc_RpcRequestBuilder_builder = new com_google_gwt_http_client_RequestBuilder_RequestBuilder__Lcom_google_gwt_http_client_RequestBuilder$Method_2Ljava_lang_String_2V((com_google_gwt_http_client_RequestBuilder_$clinit__V() , com_google_gwt_http_client_RequestBuilder_POST), serviceEntryPoint);
  return this$static;
}

function com_google_gwt_user_client_rpc_RpcRequestBuilder_$doFinish__Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2Lcom_google_gwt_http_client_RequestBuilder_2V(rb){
  com_google_gwt_http_client_RequestBuilder_$setHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2V(rb, 'X-GWT-Permutation', $strongName);
  com_google_gwt_http_client_RequestBuilder_$setHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2V(rb, 'X-GWT-Module-Base', com_google_gwt_core_client_impl_Impl_getModuleBaseURL__Ljava_lang_String_2());
}

function com_google_gwt_user_client_rpc_RpcRequestBuilder_$doSetCallback__Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2Lcom_google_gwt_http_client_RequestBuilder_2Lcom_google_gwt_http_client_RequestCallback_2V(rb, callback){
  com_google_gwt_http_client_StringValidator_throwIfNull__Ljava_lang_String_2Ljava_lang_Object_2V('callback', callback);
  rb.com_google_gwt_http_client_RequestBuilder_callback = callback;
}

function com_google_gwt_user_client_rpc_RpcRequestBuilder_$doSetRequestData__Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2V(rb, data_0){
  rb.com_google_gwt_http_client_RequestBuilder_requestData = data_0;
}

function com_google_gwt_user_client_rpc_RpcRequestBuilder_$finish__Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2Lcom_google_gwt_http_client_RequestBuilder_2(this$static){
  try {
    com_google_gwt_user_client_rpc_RpcRequestBuilder_$doFinish__Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2Lcom_google_gwt_http_client_RequestBuilder_2V(this$static.com_google_gwt_user_client_rpc_RpcRequestBuilder_builder);
    return this$static.com_google_gwt_user_client_rpc_RpcRequestBuilder_builder;
  }
   finally {
    this$static.com_google_gwt_user_client_rpc_RpcRequestBuilder_builder = null;
  }
}

function com_google_gwt_user_client_rpc_RpcRequestBuilder_$setCallback__Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2Lcom_google_gwt_http_client_RequestCallback_2Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2(this$static, callback){
  com_google_gwt_user_client_rpc_RpcRequestBuilder_$doSetCallback__Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2Lcom_google_gwt_http_client_RequestBuilder_2Lcom_google_gwt_http_client_RequestCallback_2V(this$static.com_google_gwt_user_client_rpc_RpcRequestBuilder_builder, callback);
  return this$static;
}

function com_google_gwt_user_client_rpc_RpcRequestBuilder_$setContentType__Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2Ljava_lang_String_2Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2(this$static){
  com_google_gwt_http_client_RequestBuilder_$setHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2V(this$static.com_google_gwt_user_client_rpc_RpcRequestBuilder_builder, $intern_17, 'text/x-gwt-rpc; charset=utf-8');
  return this$static;
}

function com_google_gwt_user_client_rpc_RpcRequestBuilder_$setRequestData__Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2Ljava_lang_String_2Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2(this$static, data_0){
  com_google_gwt_user_client_rpc_RpcRequestBuilder_$doSetRequestData__Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2V(this$static.com_google_gwt_user_client_rpc_RpcRequestBuilder_builder, data_0);
  return this$static;
}

function com_google_gwt_user_client_rpc_RpcRequestBuilder_RpcRequestBuilder__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(199, 1, {}, com_google_gwt_user_client_rpc_RpcRequestBuilder_RpcRequestBuilder__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1RpcRequestBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_36, 'RpcRequestBuilder', 199);
function com_google_gwt_user_client_rpc_RpcTokenException_RpcTokenException__V(){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, 'Invalid RPC token');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(167, 10, $intern_3, com_google_gwt_user_client_rpc_RpcTokenException_RpcTokenException__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1RpcTokenException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_36, 'RpcTokenException', 167);
function com_google_gwt_user_client_rpc_RpcTokenException_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_google_gwt_user_client_rpc_RpcTokenException_2V(streamReader, instance){
  com_google_gwt_user_client_rpc_core_java_lang_Throwable_1FieldSerializer_setDetailMessage__Ljava_lang_Throwable_2Ljava_lang_String_2V(instance, com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_$getString__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2ILjava_lang_String_2(streamReader, com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_$readInt__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2I(streamReader)));
}

function com_google_gwt_user_client_rpc_RpcTokenException_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_google_gwt_user_client_rpc_RpcTokenException_2(streamReader){
  return new com_google_gwt_user_client_rpc_RpcTokenException_RpcTokenException__V;
}

function com_google_gwt_user_client_rpc_SerializationException_SerializationException__Ljava_lang_String_2V(msg){
  java_lang_Exception_Exception__Ljava_lang_String_2V.call(this, msg);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(59, 38, {59:1, 3:1, 5:1}, com_google_gwt_user_client_rpc_SerializationException_SerializationException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1SerializationException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_36, 'SerializationException', 59);
function com_google_gwt_user_client_rpc_ServiceDefTarget$NoServiceEntryPointSpecifiedException_ServiceDefTarget$NoServiceEntryPointSpecifiedException__V(){
  com_google_gwt_user_client_rpc_InvocationException_InvocationException__Ljava_lang_String_2V.call(this, 'Service implementation URL not specified');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(164, 49, $intern_3, com_google_gwt_user_client_rpc_ServiceDefTarget$NoServiceEntryPointSpecifiedException_ServiceDefTarget$NoServiceEntryPointSpecifiedException__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1ServiceDefTarget$NoServiceEntryPointSpecifiedException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_36, 'ServiceDefTarget/NoServiceEntryPointSpecifiedException', 164);
function com_google_gwt_user_client_rpc_StatusCodeException_StatusCodeException__ILjava_lang_String_2Ljava_lang_String_2V(statusCode, statusText, encodedResponse){
  com_google_gwt_user_client_rpc_InvocationException_InvocationException__Ljava_lang_String_2V.call(this, statusCode + ' ' + statusText + ' ' + encodedResponse);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(208, 49, $intern_3, com_google_gwt_user_client_rpc_StatusCodeException_StatusCodeException__ILjava_lang_String_2Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1StatusCodeException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_36, 'StatusCodeException', 208);
function com_google_gwt_user_client_rpc_XsrfToken_1FieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Lcom_google_gwt_user_client_rpc_XsrfToken_2V(streamWriter, instance){
  com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_$writeString__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2Ljava_lang_String_2V(streamWriter, instance.nullField);
}

function com_google_gwt_user_client_rpc_core_java_lang_Boolean_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_lang_Boolean_2V(streamReader, instance){
}

function com_google_gwt_user_client_rpc_core_java_lang_Boolean_1CustomFieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_lang_Boolean_2(streamReader){
  return java_lang_Boolean_$clinit__V() , streamReader.com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_results[--streamReader.com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_index]?java_lang_Boolean_TRUE:java_lang_Boolean_FALSE;
}

function com_google_gwt_user_client_rpc_core_java_lang_Object_1Array_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2_3Ljava_lang_Object_2V(streamReader, instance){
  var itemIndex;
  for (itemIndex = 0; itemIndex < instance.length; ++itemIndex) {
    com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(instance, itemIndex, com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_$readObject__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2Ljava_lang_Object_2(streamReader));
  }
}

function com_google_gwt_user_client_rpc_core_java_lang_String_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_lang_String_2V(streamReader, instance){
}

function com_google_gwt_user_client_rpc_core_java_lang_String_1CustomFieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_lang_String_2(streamReader){
  return com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_$getString__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2ILjava_lang_String_2(streamReader, com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_$readInt__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2I(streamReader));
}

function com_google_gwt_user_client_rpc_core_java_lang_String_1CustomFieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Ljava_lang_String_2V(streamWriter, instance){
  com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_$writeInt__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2IV(streamWriter, com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_$addString__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2Ljava_lang_String_2I(streamWriter, instance));
}

function com_google_gwt_user_client_rpc_core_java_lang_Throwable_1FieldSerializer_setDetailMessage__Ljava_lang_Throwable_2Ljava_lang_String_2V(instance, value_0){
  instance.java_lang_Throwable_detailMessage = value_0;
}

function com_google_gwt_user_client_rpc_core_java_util_ArrayList_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_ArrayList_2V(streamReader, instance){
  com_google_gwt_user_client_rpc_core_java_util_Collection_1CustomFieldSerializerBase_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Collection_2V(streamReader, instance);
}

function com_google_gwt_user_client_rpc_core_java_util_ArrayList_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_ArrayList_2(streamReader){
  return new java_util_ArrayList_ArrayList__V;
}

function com_google_gwt_user_client_rpc_core_java_util_Arrays$ArrayList_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_List_2V(streamReader, instance){
}

function com_google_gwt_user_client_rpc_core_java_util_Arrays$ArrayList_1CustomFieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_List_2(streamReader){
  var array;
  array = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_$readObject__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2Ljava_lang_Object_2(streamReader), 4);
  return new java_util_Arrays$ArrayList_Arrays$ArrayList___3Ljava_lang_Object_2V(array);
}

function com_google_gwt_user_client_rpc_core_java_util_Collection_1CustomFieldSerializerBase_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Collection_2V(streamReader, instance){
  var i, obj, size_0;
  size_0 = com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_$readInt__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2I(streamReader);
  for (i = 0; i < size_0; ++i) {
    obj = com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_$readObject__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2Ljava_lang_Object_2(streamReader);
    instance.add__Ljava_lang_Object_2Z(obj);
  }
}

function com_google_gwt_user_client_rpc_core_java_util_Collections$EmptyList_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_List_2V(streamReader, instance){
}

function com_google_gwt_user_client_rpc_core_java_util_Collections$EmptyList_1CustomFieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_List_2(streamReader){
  return java_util_Collections_$clinit__V() , java_util_Collections_$clinit__V() , java_util_Collections_EMPTY_1LIST;
}

function com_google_gwt_user_client_rpc_core_java_util_Collections$EmptySet_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Set_2V(streamReader, instance){
}

function com_google_gwt_user_client_rpc_core_java_util_Collections$EmptySet_1CustomFieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Set_2(streamReader){
  return java_util_Collections_$clinit__V() , java_util_Collections_$clinit__V() , java_util_Collections_EMPTY_1SET;
}

function com_google_gwt_user_client_rpc_core_java_util_Collections$SingletonList_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_List_2V(streamReader, instance){
}

function com_google_gwt_user_client_rpc_core_java_util_Collections$SingletonList_1CustomFieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_List_2(streamReader){
  return java_util_Collections_$clinit__V() , new java_util_Collections$SingletonList_Collections$SingletonList__Ljava_lang_Object_2V(com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_$readObject__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2Ljava_lang_Object_2(streamReader));
}

function com_google_gwt_user_client_rpc_core_java_util_HashSet_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_HashSet_2V(streamReader, instance){
  com_google_gwt_user_client_rpc_core_java_util_Collection_1CustomFieldSerializerBase_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Collection_2V(streamReader, instance);
}

function com_google_gwt_user_client_rpc_core_java_util_HashSet_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_HashSet_2(streamReader){
  return new java_util_HashSet_HashSet__V;
}

function com_google_gwt_user_client_rpc_core_java_util_LinkedHashSet_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_LinkedHashSet_2V(streamReader, instance){
  com_google_gwt_user_client_rpc_core_java_util_Collection_1CustomFieldSerializerBase_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Collection_2V(streamReader, instance);
}

function com_google_gwt_user_client_rpc_core_java_util_LinkedHashSet_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_LinkedHashSet_2(streamReader){
  return new java_util_LinkedHashSet_LinkedHashSet__V;
}

function com_google_gwt_user_client_rpc_core_java_util_LinkedList_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_LinkedList_2V(streamReader, instance){
  com_google_gwt_user_client_rpc_core_java_util_Collection_1CustomFieldSerializerBase_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Collection_2V(streamReader, instance);
}

function com_google_gwt_user_client_rpc_core_java_util_LinkedList_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_LinkedList_2(streamReader){
  return new java_util_LinkedList_LinkedList__V;
}

function com_google_gwt_user_client_rpc_core_java_util_Map_1CustomFieldSerializerBase_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Map_2V(streamReader, instance){
  var i, key, size_0, value_0;
  size_0 = com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_$readInt__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2I(streamReader);
  for (i = 0; i < size_0; ++i) {
    key = com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_$readObject__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2Ljava_lang_Object_2(streamReader);
    value_0 = com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_$readObject__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2Ljava_lang_Object_2(streamReader);
    java_util_TreeMap_$put__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(instance, key, value_0);
  }
}

function com_google_gwt_user_client_rpc_core_java_util_Stack_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Stack_2V(streamReader, instance){
  com_google_gwt_user_client_rpc_core_java_util_Collection_1CustomFieldSerializerBase_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Collection_2V(streamReader, instance);
}

function com_google_gwt_user_client_rpc_core_java_util_Stack_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Stack_2(streamReader){
  return new java_util_Stack_Stack__V;
}

function com_google_gwt_user_client_rpc_core_java_util_TreeMap_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_TreeMap_2V(streamReader, instance){
  com_google_gwt_user_client_rpc_core_java_util_Map_1CustomFieldSerializerBase_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Map_2V(streamReader, instance);
}

function com_google_gwt_user_client_rpc_core_java_util_TreeMap_1CustomFieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_TreeMap_2(streamReader){
  return new java_util_TreeMap_TreeMap__Ljava_util_Comparator_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_$readObject__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2Ljava_lang_Object_2(streamReader), 215));
}

function com_google_gwt_user_client_rpc_core_java_util_TreeSet_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_TreeSet_2V(streamReader, instance){
  com_google_gwt_user_client_rpc_core_java_util_Collection_1CustomFieldSerializerBase_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Collection_2V(streamReader, instance);
}

function com_google_gwt_user_client_rpc_core_java_util_TreeSet_1CustomFieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_TreeSet_2(streamReader){
  return new java_util_TreeSet_TreeSet__Ljava_util_Comparator_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_$readObject__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2Ljava_lang_Object_2(streamReader), 215));
}

function com_google_gwt_user_client_rpc_core_java_util_Vector_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Vector_2V(streamReader, instance){
  com_google_gwt_user_client_rpc_core_java_util_Collection_1CustomFieldSerializerBase_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Collection_2V(streamReader, instance);
}

function com_google_gwt_user_client_rpc_core_java_util_Vector_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Vector_2(streamReader){
  return new java_util_Vector_Vector__V;
}

function com_google_gwt_user_client_rpc_impl_AbstractSerializationStream_$setFlags__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStream_2IV(this$static, flags){
  this$static.com_google_gwt_user_client_rpc_impl_AbstractSerializationStream_flags = flags;
}

function com_google_gwt_user_client_rpc_impl_AbstractSerializationStream_$setVersion__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStream_2IV(this$static, version){
  this$static.com_google_gwt_user_client_rpc_impl_AbstractSerializationStream_version = version;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(97, 1, {});
_.com_google_gwt_user_client_rpc_impl_AbstractSerializationStream_flags = 0;
_.com_google_gwt_user_client_rpc_impl_AbstractSerializationStream_version = 7;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1impl_1AbstractSerializationStream_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_37, 'AbstractSerializationStream', 97);
function com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_$readObject__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2Ljava_lang_Object_2(this$static){
  var token, typeSignature, com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_$deserialize__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2Ljava_lang_String_2Ljava_lang_Object_2_id_0, com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_$deserialize__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2Ljava_lang_String_2Ljava_lang_Object_2_instance_0;
  token = com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_$readInt__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2I(this$static);
  if (token < 0) {
    return java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_seenArray, -(token + 1));
  }
  typeSignature = com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_$getString__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2ILjava_lang_String_2(this$static, token);
  if (typeSignature == null) {
    return null;
  }
  return com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_$deserialize__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2Ljava_lang_String_2Ljava_lang_Object_2_id_0 = (java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_seenArray, null) , this$static.com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_seenArray.java_util_ArrayList_array.length) , com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_$deserialize__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2Ljava_lang_String_2Ljava_lang_Object_2_instance_0 = com_google_gwt_user_client_rpc_impl_SerializerBase_$instantiate__Lcom_google_gwt_user_client_rpc_impl_SerializerBase_2Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_serializer, this$static, typeSignature) , java_util_ArrayList_$set__Ljava_util_ArrayList_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_seenArray, com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_$deserialize__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2Ljava_lang_String_2Ljava_lang_Object_2_id_0 - 1, com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_$deserialize__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2Ljava_lang_String_2Ljava_lang_Object_2_instance_0) , com_google_gwt_user_client_rpc_impl_SerializerBase_$deserialize__Lcom_google_gwt_user_client_rpc_impl_SerializerBase_2Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_lang_Object_2Ljava_lang_String_2V(this$static.com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_serializer, this$static, com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_$deserialize__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2Ljava_lang_String_2Ljava_lang_Object_2_instance_0, typeSignature) , com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_$deserialize__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2Ljava_lang_String_2Ljava_lang_Object_2_instance_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(209, 97, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1impl_1AbstractSerializationStreamReader_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_37, 'AbstractSerializationStreamReader', 209);
function com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_$addString__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2Ljava_lang_String_2I(this$static, string){
  var index_0, o;
  if (string == null) {
    return 0;
  }
  o = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_stringMap.get__Ljava_lang_Object_2Ljava_lang_Object_2(string), 31);
  if (o) {
    return o.java_lang_Integer_value;
  }
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_stringTable, string);
  index_0 = this$static.com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_stringTable.java_util_ArrayList_array.length;
  this$static.com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_stringMap.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(string, java_lang_Integer_valueOf__ILjava_lang_Integer_2(index_0));
  return index_0;
}

function com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_$writeInt__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2IV(this$static, fieldValue){
  com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_append__Ljava_lang_StringBuilder_2Ljava_lang_String_2V(this$static.com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_encodeBuffer, '' + fieldValue);
}

function com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_$writeString__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2Ljava_lang_String_2V(this$static, value_0){
  com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_$writeInt__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2IV(this$static, com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_$addString__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2Ljava_lang_String_2I(this$static, value_0));
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(189, 97, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1impl_1AbstractSerializationStreamWriter_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_37, 'AbstractSerializationStreamWriter', 189);
function com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_$getString__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2ILjava_lang_String_2(this$static, index_0){
  return index_0 > 0?this$static.com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_stringTable[index_0 - 1]:null;
}

function com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_$prepareToRead__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2Ljava_lang_String_2V(this$static, encoded){
  this$static.com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_results = eval(encoded);
  this$static.com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_index = this$static.com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_results.length;
  this$static.com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_seenArray.java_util_ArrayList_array = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, $intern_6, 1, 0, 3, 1);
  com_google_gwt_user_client_rpc_impl_AbstractSerializationStream_$setVersion__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStream_2IV(this$static, com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_$readInt__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2I(this$static));
  com_google_gwt_user_client_rpc_impl_AbstractSerializationStream_$setFlags__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStream_2IV(this$static, com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_$readInt__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2I(this$static));
  if (this$static.com_google_gwt_user_client_rpc_impl_AbstractSerializationStream_version != 7) {
    throw new com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_IncompatibleRemoteServiceException__Ljava_lang_String_2V('Expecting version 7 from server, got ' + this$static.com_google_gwt_user_client_rpc_impl_AbstractSerializationStream_version + '.');
  }
  if (((this$static.com_google_gwt_user_client_rpc_impl_AbstractSerializationStream_flags | 3) ^ 3) != 0) {
    throw new com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_IncompatibleRemoteServiceException__Ljava_lang_String_2V('Got an unknown flag from server: ' + this$static.com_google_gwt_user_client_rpc_impl_AbstractSerializationStream_flags);
  }
  this$static.com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_stringTable = this$static.com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_results[--this$static.com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_index];
}

function com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_$readInt__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2I(this$static){
  return this$static.com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_results[--this$static.com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_index];
}

function com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_ClientSerializationStreamReader__Lcom_google_gwt_user_client_rpc_impl_Serializer_2V(serializer){
  this.com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_seenArray = new java_util_ArrayList_ArrayList__V;
  this.com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_serializer = serializer;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(210, 209, {}, com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_ClientSerializationStreamReader__Lcom_google_gwt_user_client_rpc_impl_Serializer_2V);
_.com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_index = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1impl_1ClientSerializationStreamReader_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_37, 'ClientSerializationStreamReader', 210);
function com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_$clinit__V(){
  com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_regex = com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_getQuotingRegex__Lcom_google_gwt_core_client_JavaScriptObject_2();
}

function com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_$toString__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_2Ljava_lang_String_2(this$static){
  var buffer;
  buffer = new java_lang_StringBuilder_StringBuilder__V;
  com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_append__Ljava_lang_StringBuilder_2Ljava_lang_String_2V(buffer, '' + this$static.com_google_gwt_user_client_rpc_impl_AbstractSerializationStream_version);
  com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_append__Ljava_lang_StringBuilder_2Ljava_lang_String_2V(buffer, '' + this$static.com_google_gwt_user_client_rpc_impl_AbstractSerializationStream_flags);
  com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_$writeStringTable__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_2Ljava_lang_StringBuilder_2Ljava_lang_StringBuilder_2(this$static, buffer);
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(buffer, this$static.com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_encodeBuffer.java_lang_AbstractStringBuilder_string);
  return buffer.java_lang_AbstractStringBuilder_string;
}

function com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_$writeStringTable__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_2Ljava_lang_StringBuilder_2Ljava_lang_StringBuilder_2(this$static, buffer){
  var s, s$iterator, stringTable;
  stringTable = this$static.com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_stringTable;
  com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_append__Ljava_lang_StringBuilder_2Ljava_lang_String_2V(buffer, '' + stringTable.java_util_ArrayList_array.length);
  for (s$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(stringTable); s$iterator.java_util_AbstractList$IteratorImpl_i < s$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
    s = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(s$iterator.java_util_AbstractList$IteratorImpl_i < s$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(s$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(s$iterator.java_util_AbstractList$IteratorImpl_i++)));
    com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_append__Ljava_lang_StringBuilder_2Ljava_lang_String_2V(buffer, com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_quoteString__Ljava_lang_String_2Ljava_lang_String_2(s));
  }
  return buffer;
}

function com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_ClientSerializationStreamWriter__Lcom_google_gwt_user_client_rpc_impl_Serializer_2Ljava_lang_String_2Ljava_lang_String_2V(moduleBaseURL, serializationPolicyStrongName){
  com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_$clinit__V();
  this.com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_objectMap = new java_util_IdentityHashMap_IdentityHashMap__V;
  this.com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_stringMap = new java_util_HashMap_HashMap__V;
  this.com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_stringTable = new java_util_ArrayList_ArrayList__V;
  this.com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_moduleBaseURL = moduleBaseURL;
  this.com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_serializationPolicyStrongName = serializationPolicyStrongName;
}

function com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_append__Ljava_lang_StringBuilder_2Ljava_lang_String_2V(sb, token){
  com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_$clinit__V();
  sb.java_lang_AbstractStringBuilder_string += token;
  sb.java_lang_AbstractStringBuilder_string += '|';
}

function com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_getQuotingRegex__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('android') != -1) {
    return /[\u0000\|\\\u0080-\uFFFF]/g;
  }
   else if (ua.indexOf('chrome/11') != -1) {
    return /[\u0000\|\\\u0300-\uFFFF]/g;
  }
   else if (ua.indexOf('webkit') != -1) {
    return /[\u0000\|\\\u0300-\u03ff\u0590-\u05FF\u0600-\u06ff\u0730-\u074A\u07eb-\u07f3\u0940-\u0963\u0980-\u09ff\u0a00-\u0a7f\u0b00-\u0b7f\u0e00-\u0e7f\u0f00-\u0fff\u1900-\u194f\u1a00-\u1a1f\u1b00-\u1b7f\u1cda-\u1cdc\u1dc0-\u1dff\u1f00-\u1fff\u2000-\u206f\u20d0-\u20ff\u2100-\u214f\u2300-\u23ff\u2a00-\u2aff\u3000-\u303f\uaab2-\uaab4\uD800-\uFFFF]/g;
  }
   else {
    return /[\u0000\|\\\uD800-\uFFFF]/g;
  }
}

function com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_quoteString__Ljava_lang_String_2Ljava_lang_String_2(str){
  var regex = com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_regex;
  var idx = 0;
  var out = '';
  var result;
  while ((result = regex.exec(str)) != null) {
    out += str.substring(idx, result.index);
    idx = result.index + 1;
    var ch_0 = result[0].charCodeAt(0);
    if (ch_0 == 0) {
      out += '\\0';
    }
     else if (ch_0 == 92) {
      out += '\\\\';
    }
     else if (ch_0 == 124) {
      out += '\\!';
    }
     else {
      var hex = ch_0.toString(16);
      out += '\\u0000'.substring(0, 6 - hex.length) + hex;
    }
  }
  return out + str.substring(idx);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(190, 189, {}, com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_ClientSerializationStreamWriter__Lcom_google_gwt_user_client_rpc_impl_Serializer_2Ljava_lang_String_2Ljava_lang_String_2V);
_.toString__Ljava_lang_String_2$ = function com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_toString__Ljava_lang_String_2(){
  return com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_$toString__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_2Ljava_lang_String_2(this);
}
;
var com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_regex;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1impl_1ClientSerializationStreamWriter_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_37, 'ClientSerializationStreamWriter', 190);
function com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_$createStreamReader__Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2Ljava_lang_String_2Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2(this$static, encoded){
  var clientSerializationStreamReader;
  clientSerializationStreamReader = new com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_ClientSerializationStreamReader__Lcom_google_gwt_user_client_rpc_impl_Serializer_2V(this$static.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_serializer);
  com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_$prepareToRead__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2Ljava_lang_String_2V(clientSerializationStreamReader, com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_getEncodedInstance__Ljava_lang_String_2Ljava_lang_String_2(encoded));
  return clientSerializationStreamReader;
}

function com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_$doInvoke__Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2Ljava_lang_String_2Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Ljava_lang_String_2Lcom_google_gwt_user_client_rpc_AsyncCallback_2Lcom_google_gwt_http_client_Request_2(this$static, methodName, statsContext, requestData){
  var ex, iex, rb;
  rb = com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_$doPrepareRequestBuilderImpl__Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2Ljava_lang_String_2Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Ljava_lang_String_2Lcom_google_gwt_user_client_rpc_AsyncCallback_2Lcom_google_gwt_http_client_RequestBuilder_2(this$static, methodName, statsContext, requestData);
  try {
    return com_google_gwt_http_client_StringValidator_throwIfNull__Ljava_lang_String_2Ljava_lang_Object_2V('callback', rb.com_google_gwt_http_client_RequestBuilder_callback) , com_google_gwt_http_client_RequestBuilder_$doSend__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Lcom_google_gwt_http_client_RequestCallback_2Lcom_google_gwt_http_client_Request_2(rb, rb.com_google_gwt_http_client_RequestBuilder_requestData, rb.com_google_gwt_http_client_RequestBuilder_callback);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 29)) {
      ex = $e0;
      iex = new com_google_gwt_user_client_rpc_InvocationException_InvocationException__Ljava_lang_String_2Ljava_lang_Throwable_2V('Unable to initiate the asynchronous service invocation (' + methodName + ') -- check the network connection', ex);
      com_google_gwt_user_client_Window_alert__Ljava_lang_String_2V(java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2(iex));
    }
     else 
      throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
   finally {
    com_google_gwt_user_client_rpc_impl_RpcStatsContext_$isStatsAvailable__Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Z() && com_google_gwt_user_client_rpc_impl_RpcStatsContext_$stats__Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(com_google_gwt_user_client_rpc_impl_RpcStatsContext_$bytesStat__Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Ljava_lang_String_2ILjava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2(statsContext, methodName, requestData.length, 'requestSent'));
  }
  return null;
}

function com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_$doPrepareRequestBuilderImpl__Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2Ljava_lang_String_2Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Ljava_lang_String_2Lcom_google_gwt_user_client_rpc_AsyncCallback_2Lcom_google_gwt_http_client_RequestBuilder_2(this$static, methodName, statsContext, requestData){
  var responseHandler;
  if (this$static.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_remoteServiceURL == null) {
    throw new com_google_gwt_user_client_rpc_ServiceDefTarget$NoServiceEntryPointSpecifiedException_ServiceDefTarget$NoServiceEntryPointSpecifiedException__V;
  }
  responseHandler = new com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_RequestCallbackAdapter__Lcom_google_gwt_user_client_rpc_SerializationStreamFactory_2Ljava_lang_String_2Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Lcom_google_gwt_user_client_rpc_AsyncCallback_2Lcom_google_gwt_user_client_rpc_RpcTokenExceptionHandler_2Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2V(this$static, methodName, statsContext);
  !this$static.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_rpcRequestBuilder && (this$static.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_rpcRequestBuilder = new com_google_gwt_user_client_rpc_RpcRequestBuilder_RpcRequestBuilder__V);
  com_google_gwt_user_client_rpc_RpcRequestBuilder_$create__Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2Ljava_lang_String_2Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2(this$static.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_rpcRequestBuilder, this$static.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_remoteServiceURL);
  com_google_gwt_user_client_rpc_RpcRequestBuilder_$setCallback__Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2Lcom_google_gwt_http_client_RequestCallback_2Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2(this$static.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_rpcRequestBuilder, responseHandler);
  com_google_gwt_user_client_rpc_RpcRequestBuilder_$setContentType__Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2Ljava_lang_String_2Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2(this$static.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_rpcRequestBuilder);
  com_google_gwt_user_client_rpc_RpcRequestBuilder_$setRequestData__Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2Ljava_lang_String_2Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2(this$static.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_rpcRequestBuilder, requestData);
  return com_google_gwt_user_client_rpc_RpcRequestBuilder_$finish__Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2Lcom_google_gwt_http_client_RequestBuilder_2(this$static.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_rpcRequestBuilder);
}

function com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_RemoteServiceProxy__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_user_client_rpc_impl_Serializer_2V(moduleBaseURL, serializer){
  this.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_moduleBaseURL = moduleBaseURL;
  this.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_remoteServiceURL = moduleBaseURL + 'appointments';
  this.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_serializer = serializer;
  this.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_serializationPolicyName = 'DFE0A0F10A6324A71B9277FC1CB40A7C';
}

function com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_getEncodedInstance__Ljava_lang_String_2Ljava_lang_String_2(encodedResponse){
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(encodedResponse.substr(0, 4), '//OK') || java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(encodedResponse.substr(0, 4), '//EX')) {
    return java_lang_String__1_1substr__Ljava_lang_String_2IILjava_lang_String_2(encodedResponse, 4, encodedResponse.length - 4);
  }
  return encodedResponse;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(161, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1impl_1RemoteServiceProxy_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_37, 'RemoteServiceProxy', 161);
function com_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_$finish__Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_2Lcom_google_gwt_user_client_rpc_AsyncCallback_2Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2Lcom_google_gwt_http_client_Request_2(this$static){
  var payload;
  payload = com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_$toString__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_2Ljava_lang_String_2(this$static.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_streamWriter);
  com_google_gwt_user_client_rpc_impl_RpcStatsContext_$isStatsAvailable__Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Z() && com_google_gwt_user_client_rpc_impl_RpcStatsContext_$stats__Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(com_google_gwt_user_client_rpc_impl_RpcStatsContext_$timeStat__Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2(this$static.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_statsContext, this$static.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_fullServiceName, 'requestSerialized'));
  return com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_$doInvoke__Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2Ljava_lang_String_2Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Ljava_lang_String_2Lcom_google_gwt_user_client_rpc_AsyncCallback_2Lcom_google_gwt_http_client_Request_2(this$static.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_this$01, this$static.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_fullServiceName, this$static.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_statsContext, payload);
}

function com_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_RemoteServiceProxy$ServiceHelper__Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2Ljava_lang_String_2Ljava_lang_String_2V(this$0){
  this.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_this$01 = this$0;
  this.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_fullServiceName = 'AppointmentBookService_Proxy.createAppointmentBook';
  this.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_methodName = 'createAppointmentBook';
  this.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_statsContext = new com_google_gwt_user_client_rpc_impl_RpcStatsContext_RpcStatsContext__V;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(163, 1, {}, com_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_RemoteServiceProxy$ServiceHelper__Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2Ljava_lang_String_2Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1impl_1RemoteServiceProxy$ServiceHelper_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_37, 'RemoteServiceProxy/ServiceHelper', 163);
function com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_$onResponseReceived__Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_2Lcom_google_gwt_http_client_Request_2Lcom_google_gwt_http_client_Response_2V(this$static, response){
  var caught, e, encodedResponse, result, statusCode, com_google_gwt_http_client_Request$RequestImplIE8And9$1_$getStatusCode__Lcom_google_gwt_http_client_Request$RequestImplIE8And9$1_2I_statusCode_0;
  result = null;
  caught = null;
  try {
    encodedResponse = response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.responseText;
    statusCode = (com_google_gwt_http_client_Request$RequestImplIE8And9$1_$getStatusCode__Lcom_google_gwt_http_client_Request$RequestImplIE8And9$1_2I_statusCode_0 = response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.status , com_google_gwt_http_client_Request$RequestImplIE8And9$1_$getStatusCode__Lcom_google_gwt_http_client_Request$RequestImplIE8And9$1_2I_statusCode_0 == 1223?204:com_google_gwt_http_client_Request$RequestImplIE8And9$1_$getStatusCode__Lcom_google_gwt_http_client_Request$RequestImplIE8And9$1_2I_statusCode_0);
    com_google_gwt_user_client_rpc_impl_RpcStatsContext_$isStatsAvailable__Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Z() && com_google_gwt_user_client_rpc_impl_RpcStatsContext_$stats__Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(com_google_gwt_user_client_rpc_impl_RpcStatsContext_$bytesStat__Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Ljava_lang_String_2ILjava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2(this$static.com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_statsContext, this$static.com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_methodName, encodedResponse.length, 'responseReceived'));
    statusCode != 200?(caught = new com_google_gwt_user_client_rpc_StatusCodeException_StatusCodeException__ILjava_lang_String_2Ljava_lang_String_2V(statusCode, response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.statusText, encodedResponse)):encodedResponse == null?(caught = new com_google_gwt_user_client_rpc_InvocationException_InvocationException__Ljava_lang_String_2V('No response payload from ' + this$static.com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_methodName)):java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(encodedResponse.substr(0, 4), '//OK')?(result = com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_$readObject__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2Ljava_lang_Object_2(com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_$createStreamReader__Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2Ljava_lang_String_2Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2(this$static.com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_streamFactory, encodedResponse))):java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(encodedResponse.substr(0, 4), '//EX')?(caught = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_$readObject__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2Ljava_lang_Object_2(com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_$createStreamReader__Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2Ljava_lang_String_2Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2(this$static.com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_streamFactory, encodedResponse)), 5)):(caught = new com_google_gwt_user_client_rpc_InvocationException_InvocationException__Ljava_lang_String_2V(encodedResponse + ' from ' + this$static.com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_methodName));
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 59)) {
      e = $e0;
      caught = new com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_IncompatibleRemoteServiceException__Ljava_lang_String_2Ljava_lang_Throwable_2V(e);
    }
     else if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 5)) {
      e = $e0;
      caught = e;
    }
     else 
      throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
   finally {
    com_google_gwt_user_client_rpc_impl_RpcStatsContext_$isStatsAvailable__Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Z() && com_google_gwt_user_client_rpc_impl_RpcStatsContext_$stats__Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(com_google_gwt_user_client_rpc_impl_RpcStatsContext_$timeStat__Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2(this$static.com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_statsContext, this$static.com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_methodName, 'responseDeserialized'));
  }
  try {
    !caught?edu_pdx_cs410J_whitlock_client_AppointmentBookGwt_$displayInAlertDialog__Ledu_pdx_cs410J_whitlock_client_AppointmentBookGwt_2Ledu_pdx_cs410J_whitlock_client_AppointmentBook_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(result, 70)):com_google_gwt_user_client_Window_alert__Ljava_lang_String_2V(java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2(caught));
  }
   finally {
    com_google_gwt_user_client_rpc_impl_RpcStatsContext_$isStatsAvailable__Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Z() && com_google_gwt_user_client_rpc_impl_RpcStatsContext_$stats__Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(com_google_gwt_user_client_rpc_impl_RpcStatsContext_$timeStat__Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2(this$static.com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_statsContext, this$static.com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_methodName, 'end'));
  }
}

function com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_RequestCallbackAdapter__Lcom_google_gwt_user_client_rpc_SerializationStreamFactory_2Ljava_lang_String_2Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Lcom_google_gwt_user_client_rpc_AsyncCallback_2Lcom_google_gwt_user_client_rpc_RpcTokenExceptionHandler_2Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2V(streamFactory, methodName, statsContext){
  this.com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_streamFactory = streamFactory;
  this.com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_methodName = methodName;
  this.com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_statsContext = statsContext;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(172, 1, {}, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_RequestCallbackAdapter__Lcom_google_gwt_user_client_rpc_SerializationStreamFactory_2Ljava_lang_String_2Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Lcom_google_gwt_user_client_rpc_AsyncCallback_2Lcom_google_gwt_user_client_rpc_RpcTokenExceptionHandler_2Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1impl_1RequestCallbackAdapter_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_37, 'RequestCallbackAdapter', 172);
function com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_$clinit__V(){
  com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_BOOLEAN = new com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$1_RequestCallbackAdapter$ResponseReader$1__Ljava_lang_String_2IV;
  com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_BYTE = new com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$2_RequestCallbackAdapter$ResponseReader$2__Ljava_lang_String_2IV;
  com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_CHAR = new com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$3_RequestCallbackAdapter$ResponseReader$3__Ljava_lang_String_2IV;
  com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_DOUBLE = new com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$4_RequestCallbackAdapter$ResponseReader$4__Ljava_lang_String_2IV;
  com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_FLOAT = new com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$5_RequestCallbackAdapter$ResponseReader$5__Ljava_lang_String_2IV;
  com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_INT = new com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$6_RequestCallbackAdapter$ResponseReader$6__Ljava_lang_String_2IV;
  com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_LONG = new com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$7_RequestCallbackAdapter$ResponseReader$7__Ljava_lang_String_2IV;
  com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_OBJECT = new com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$8_RequestCallbackAdapter$ResponseReader$8__Ljava_lang_String_2IV;
  com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_SHORT = new com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$9_RequestCallbackAdapter$ResponseReader$9__Ljava_lang_String_2IV;
  com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_STRING = new com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$10_RequestCallbackAdapter$ResponseReader$10__Ljava_lang_String_2IV;
  com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_VOID = new com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$11_RequestCallbackAdapter$ResponseReader$11__Ljava_lang_String_2IV;
}

function com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_RequestCallbackAdapter$ResponseReader__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_values___3Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2(){
  com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_$clinit__V();
  return com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1impl_1RequestCallbackAdapter$ResponseReader_12_1classLit, 1), $intern_6, 9, 0, [com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_BOOLEAN, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_BYTE, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_CHAR, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_DOUBLE, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_FLOAT, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_INT, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_LONG, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_OBJECT, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_SHORT, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_STRING, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_VOID]);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(9, 6, $intern_38);
var com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_BOOLEAN, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_BYTE, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_CHAR, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_DOUBLE, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_FLOAT, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_INT, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_LONG, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_OBJECT, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_SHORT, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_STRING, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_VOID;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1impl_1RequestCallbackAdapter$ResponseReader_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_37, 'RequestCallbackAdapter/ResponseReader', 9, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_values___3Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2);
function com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$1_RequestCallbackAdapter$ResponseReader$1__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_RequestCallbackAdapter$ResponseReader__Ljava_lang_String_2IV.call(this, 'BOOLEAN', 0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(173, 9, $intern_38, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$1_RequestCallbackAdapter$ResponseReader$1__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1impl_1RequestCallbackAdapter$ResponseReader$1_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_37, 'RequestCallbackAdapter/ResponseReader/1', 173, null);
function com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$10_RequestCallbackAdapter$ResponseReader$10__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_RequestCallbackAdapter$ResponseReader__Ljava_lang_String_2IV.call(this, 'STRING', 9);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(182, 9, $intern_38, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$10_RequestCallbackAdapter$ResponseReader$10__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1impl_1RequestCallbackAdapter$ResponseReader$10_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_37, 'RequestCallbackAdapter/ResponseReader/10', 182, null);
function com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$11_RequestCallbackAdapter$ResponseReader$11__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_RequestCallbackAdapter$ResponseReader__Ljava_lang_String_2IV.call(this, 'VOID', 10);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(183, 9, $intern_38, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$11_RequestCallbackAdapter$ResponseReader$11__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1impl_1RequestCallbackAdapter$ResponseReader$11_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_37, 'RequestCallbackAdapter/ResponseReader/11', 183, null);
function com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$2_RequestCallbackAdapter$ResponseReader$2__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_RequestCallbackAdapter$ResponseReader__Ljava_lang_String_2IV.call(this, 'BYTE', 1);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(174, 9, $intern_38, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$2_RequestCallbackAdapter$ResponseReader$2__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1impl_1RequestCallbackAdapter$ResponseReader$2_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_37, 'RequestCallbackAdapter/ResponseReader/2', 174, null);
function com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$3_RequestCallbackAdapter$ResponseReader$3__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_RequestCallbackAdapter$ResponseReader__Ljava_lang_String_2IV.call(this, 'CHAR', 2);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(175, 9, $intern_38, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$3_RequestCallbackAdapter$ResponseReader$3__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1impl_1RequestCallbackAdapter$ResponseReader$3_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_37, 'RequestCallbackAdapter/ResponseReader/3', 175, null);
function com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$4_RequestCallbackAdapter$ResponseReader$4__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_RequestCallbackAdapter$ResponseReader__Ljava_lang_String_2IV.call(this, 'DOUBLE', 3);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(176, 9, $intern_38, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$4_RequestCallbackAdapter$ResponseReader$4__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1impl_1RequestCallbackAdapter$ResponseReader$4_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_37, 'RequestCallbackAdapter/ResponseReader/4', 176, null);
function com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$5_RequestCallbackAdapter$ResponseReader$5__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_RequestCallbackAdapter$ResponseReader__Ljava_lang_String_2IV.call(this, 'FLOAT', 4);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(177, 9, $intern_38, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$5_RequestCallbackAdapter$ResponseReader$5__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1impl_1RequestCallbackAdapter$ResponseReader$5_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_37, 'RequestCallbackAdapter/ResponseReader/5', 177, null);
function com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$6_RequestCallbackAdapter$ResponseReader$6__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_RequestCallbackAdapter$ResponseReader__Ljava_lang_String_2IV.call(this, 'INT', 5);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(178, 9, $intern_38, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$6_RequestCallbackAdapter$ResponseReader$6__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1impl_1RequestCallbackAdapter$ResponseReader$6_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_37, 'RequestCallbackAdapter/ResponseReader/6', 178, null);
function com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$7_RequestCallbackAdapter$ResponseReader$7__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_RequestCallbackAdapter$ResponseReader__Ljava_lang_String_2IV.call(this, 'LONG', 6);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(179, 9, $intern_38, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$7_RequestCallbackAdapter$ResponseReader$7__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1impl_1RequestCallbackAdapter$ResponseReader$7_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_37, 'RequestCallbackAdapter/ResponseReader/7', 179, null);
function com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$8_RequestCallbackAdapter$ResponseReader$8__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_RequestCallbackAdapter$ResponseReader__Ljava_lang_String_2IV.call(this, 'OBJECT', 7);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(180, 9, $intern_38, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$8_RequestCallbackAdapter$ResponseReader$8__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1impl_1RequestCallbackAdapter$ResponseReader$8_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_37, 'RequestCallbackAdapter/ResponseReader/8', 180, null);
function com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$9_RequestCallbackAdapter$ResponseReader$9__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_RequestCallbackAdapter$ResponseReader__Ljava_lang_String_2IV.call(this, 'SHORT', 8);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(181, 9, $intern_38, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$9_RequestCallbackAdapter$ResponseReader$9__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1impl_1RequestCallbackAdapter$ResponseReader$9_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_37, 'RequestCallbackAdapter/ResponseReader/9', 181, null);
function com_google_gwt_user_client_rpc_impl_RpcStatsContext_$bytesStat__Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Ljava_lang_String_2ILjava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2(this$static, method, bytes, eventType){
  var stat = this$static.timeStat__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2(method, eventType);
  stat.bytes = bytes;
  return stat;
}

function com_google_gwt_user_client_rpc_impl_RpcStatsContext_$isStatsAvailable__Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Z(){
  return !!$stats;
}

function com_google_gwt_user_client_rpc_impl_RpcStatsContext_$stats__Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(data_0){
  return $stats(data_0);
}

function com_google_gwt_user_client_rpc_impl_RpcStatsContext_$timeStat__Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2(this$static, method, eventType){
  return {moduleName:$moduleName, sessionId:$sessionId, subSystem:'rpc', evtGroup:this$static.com_google_gwt_user_client_rpc_impl_RpcStatsContext_requestId, method:method, millis:(new Date).getTime(), type:eventType};
}

function com_google_gwt_user_client_rpc_impl_RpcStatsContext_RpcStatsContext__V(){
  com_google_gwt_user_client_rpc_impl_RpcStatsContext_RpcStatsContext__IV.call(this, com_google_gwt_user_client_rpc_impl_RpcStatsContext_requestIdCounter++);
}

function com_google_gwt_user_client_rpc_impl_RpcStatsContext_RpcStatsContext__IV(requestId){
  this.com_google_gwt_user_client_rpc_impl_RpcStatsContext_requestId = requestId;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(96, 1, {}, com_google_gwt_user_client_rpc_impl_RpcStatsContext_RpcStatsContext__V);
_.timeStat__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2 = function com_google_gwt_user_client_rpc_impl_RpcStatsContext_timeStat__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2(method, eventType){
  return com_google_gwt_user_client_rpc_impl_RpcStatsContext_$timeStat__Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2(this, method, eventType);
}
;
_.com_google_gwt_user_client_rpc_impl_RpcStatsContext_requestId = 0;
var com_google_gwt_user_client_rpc_impl_RpcStatsContext_requestIdCounter = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1impl_1RpcStatsContext_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_37, 'RpcStatsContext', 96);
function com_google_gwt_user_client_rpc_impl_SerializerBase_$check__Lcom_google_gwt_user_client_rpc_impl_SerializerBase_2Ljava_lang_String_2IV(this$static, typeSignature){
  if (!this$static.com_google_gwt_user_client_rpc_impl_SerializerBase_methodMapNative[typeSignature]) {
    throw new com_google_gwt_user_client_rpc_SerializationException_SerializationException__Ljava_lang_String_2V(typeSignature);
  }
}

function com_google_gwt_user_client_rpc_impl_SerializerBase_$deserialize__Lcom_google_gwt_user_client_rpc_impl_SerializerBase_2Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_lang_Object_2Ljava_lang_String_2V(this$static, stream, instance, typeSignature){
  com_google_gwt_user_client_rpc_impl_SerializerBase_$check__Lcom_google_gwt_user_client_rpc_impl_SerializerBase_2Ljava_lang_String_2IV(this$static, typeSignature);
  com_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_$deserialize__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_lang_Object_2Ljava_lang_String_2V(this$static.com_google_gwt_user_client_rpc_impl_SerializerBase_methodMapNative, stream, instance, typeSignature);
}

function com_google_gwt_user_client_rpc_impl_SerializerBase_$instantiate__Lcom_google_gwt_user_client_rpc_impl_SerializerBase_2Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, stream, typeSignature){
  com_google_gwt_user_client_rpc_impl_SerializerBase_$check__Lcom_google_gwt_user_client_rpc_impl_SerializerBase_2Ljava_lang_String_2IV(this$static, typeSignature);
  return com_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_$instantiate__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_rpc_impl_SerializerBase_methodMapNative, stream, typeSignature);
}

function com_google_gwt_user_client_rpc_impl_SerializerBase_SerializerBase__Ljava_util_Map_2Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2Ljava_util_Map_2Lcom_google_gwt_core_client_JsArrayString_2V(methodMapNative){
  new java_util_HashMap_HashMap__V;
  this.com_google_gwt_user_client_rpc_impl_SerializerBase_methodMapNative = methodMapNative;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(165, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1impl_1SerializerBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_37, 'SerializerBase', 165);
function com_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_$deserialize__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_lang_Object_2Ljava_lang_String_2V(this$static, stream, instance, signature){
  this$static[signature][1](stream, instance);
}

function com_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_$instantiate__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, stream, signature){
  return this$static[signature][0](stream);
}

function com_google_gwt_user_client_ui_UIObject_$getElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2(this$static){
  return com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element;
}

function com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2V(this$static, elem){
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this$static, (com_google_gwt_user_client_DOM_$clinit__V() , elem));
}

function com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this$static, elem){
  this$static.com_google_gwt_user_client_ui_UIObject_element = elem;
}

function com_google_gwt_user_client_ui_UIObject_$sinkBitlessEvent__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2V(this$static, eventTypeName){
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEvent__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static.com_google_gwt_user_client_ui_UIObject_element, eventTypeName);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(13, 1, {16:1, 13:1});
_.toString__Ljava_lang_String_2$ = function com_google_gwt_user_client_ui_UIObject_toString__Ljava_lang_String_2(){
  if (!this.com_google_gwt_user_client_ui_UIObject_element) {
    return '(null handle)';
  }
  return (com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element).outerHTML;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1UIObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'UIObject', 13);
function com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static, handler, type_0){
  var typeInt;
  typeInt = com_google_gwt_user_client_Event_getTypeInt__Ljava_lang_String_2I(type_0.com_google_gwt_event_dom_client_DomEvent$Type_name);
  typeInt == -1?com_google_gwt_user_client_ui_UIObject_$sinkBitlessEvent__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2V(this$static, type_0.com_google_gwt_event_dom_client_DomEvent$Type_name):this$static.com_google_gwt_user_client_ui_Widget_eventsToSink == -1?(com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_impl_DOMImplStandard_$sinkEvents__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2IV(this$static.com_google_gwt_user_client_ui_UIObject_element, typeInt | (this$static.com_google_gwt_user_client_ui_UIObject_element.__eventBits || 0))):(this$static.com_google_gwt_user_client_ui_Widget_eventsToSink |= typeInt);
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(!this$static.com_google_gwt_user_client_ui_Widget_handlerManager?(this$static.com_google_gwt_user_client_ui_Widget_handlerManager = new com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V(this$static)):this$static.com_google_gwt_user_client_ui_Widget_handlerManager, type_0, handler);
}

function com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, event_0){
  !!this$static.com_google_gwt_user_client_ui_Widget_handlerManager && com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static.com_google_gwt_user_client_ui_Widget_handlerManager, event_0);
}

function com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  var bitsToAdd;
  if (this$static.com_google_gwt_user_client_ui_Widget_attached) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.com_google_gwt_user_client_ui_Widget_attached = true;
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_user_client_impl_DOMImpl_setEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(this$static.com_google_gwt_user_client_ui_UIObject_element, this$static);
  bitsToAdd = this$static.com_google_gwt_user_client_ui_Widget_eventsToSink;
  this$static.com_google_gwt_user_client_ui_Widget_eventsToSink = -1;
  bitsToAdd > 0 && (this$static.com_google_gwt_user_client_ui_Widget_eventsToSink == -1?com_google_gwt_user_client_impl_DOMImplStandard_$sinkEvents__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2IV(this$static.com_google_gwt_user_client_ui_UIObject_element, bitsToAdd | (this$static.com_google_gwt_user_client_ui_UIObject_element.__eventBits || 0)):(this$static.com_google_gwt_user_client_ui_Widget_eventsToSink |= bitsToAdd));
  this$static.doAttachChildren__V();
  this$static.onLoad__V();
}

function com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this$static, event_0){
  var related;
  switch (com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget;
      if (!!related && com_google_gwt_dom_client_DOMImplTrident_isOrHasChildImpl__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Z(this$static.com_google_gwt_user_client_ui_UIObject_element, related)) {
        return;
      }

  }
  com_google_gwt_event_dom_client_DomEvent_fireNativeEvent__Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_event_shared_HasHandlers_2Lcom_google_gwt_dom_client_Element_2V(event_0, this$static, this$static.com_google_gwt_user_client_ui_UIObject_element);
}

function com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  if (!this$static.com_google_gwt_user_client_ui_Widget_attached) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.doDetachChildren__V();
  }
   finally {
    com_google_gwt_user_client_DOM_$clinit__V();
    com_google_gwt_user_client_impl_DOMImpl_setEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(this$static.com_google_gwt_user_client_ui_UIObject_element, null);
    this$static.com_google_gwt_user_client_ui_Widget_attached = false;
  }
}

function com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  if (!this$static.com_google_gwt_user_client_ui_Widget_parent) {
    com_google_gwt_user_client_ui_RootPanel_$clinit__V();
    java_util_HashSet_$contains__Ljava_util_HashSet_2Ljava_lang_Object_2Z(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, this$static) && com_google_gwt_user_client_ui_RootPanel_detachNow__Lcom_google_gwt_user_client_ui_Widget_2V(this$static);
  }
   else if (this$static.com_google_gwt_user_client_ui_Widget_parent) {
    this$static.com_google_gwt_user_client_ui_Widget_parent.remove__Lcom_google_gwt_user_client_ui_Widget_2Z(this$static);
  }
   else if (this$static.com_google_gwt_user_client_ui_Widget_parent) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("This widget's parent does not implement HasWidgets");
  }
}

function com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, parent_0){
  var oldParent;
  oldParent = this$static.com_google_gwt_user_client_ui_Widget_parent;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.com_google_gwt_user_client_ui_Widget_attached && com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this$static);
    }
     finally {
      this$static.com_google_gwt_user_client_ui_Widget_parent = null;
    }
  }
   else {
    if (oldParent) {
      throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('Cannot set a new parent without first clearing the old parent');
    }
    this$static.com_google_gwt_user_client_ui_Widget_parent = parent_0;
    parent_0.com_google_gwt_user_client_ui_Widget_attached && this$static.onAttach__V();
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(12, 13, $intern_40);
_.doAttachChildren__V = function com_google_gwt_user_client_ui_Widget_doAttachChildren__V(){
}
;
_.doDetachChildren__V = function com_google_gwt_user_client_ui_Widget_doDetachChildren__V(){
}
;
_.onAttach__V = function com_google_gwt_user_client_ui_Widget_onAttach__V(){
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
}
;
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V = function com_google_gwt_user_client_ui_Widget_onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(event_0){
  com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event_0);
}
;
_.onLoad__V = function com_google_gwt_user_client_ui_Widget_onLoad__V(){
}
;
_.com_google_gwt_user_client_ui_Widget_attached = false;
_.com_google_gwt_user_client_ui_Widget_eventsToSink = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'Widget', 12);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(232, 12, $intern_40);
_.doAttachChildren__V = function com_google_gwt_user_client_ui_Panel_doAttachChildren__V(){
  com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(this, (com_google_gwt_user_client_ui_AttachDetachException_$clinit__V() , com_google_gwt_user_client_ui_AttachDetachException_attachCommand));
}
;
_.doDetachChildren__V = function com_google_gwt_user_client_ui_Panel_doDetachChildren__V(){
  com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(this, (com_google_gwt_user_client_ui_AttachDetachException_$clinit__V() , com_google_gwt_user_client_ui_AttachDetachException_detachCommand));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Panel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'Panel', 232);
function com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, child, container){
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(child);
  com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, child);
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(container, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(child.com_google_gwt_user_client_ui_UIObject_element));
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(child, this$static);
}

function com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, w){
  var elem, com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2_parent_0;
  if (w.com_google_gwt_user_client_ui_Widget_parent != this$static) {
    return false;
  }
  try {
    com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(w, null);
  }
   finally {
    elem = (com_google_gwt_user_client_DOM_$clinit__V() , w.com_google_gwt_user_client_ui_UIObject_element);
    com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2((null , com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2_parent_0 = elem.parentNode , (!com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2_parent_0 || com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2_parent_0.nodeType != 1) && (com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2_parent_0 = null) , com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2_parent_0), elem);
    com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, w);
  }
  return true;
}

function com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V(){
  this.com_google_gwt_user_client_ui_ComplexPanel_children = new com_google_gwt_user_client_ui_WidgetCollection_WidgetCollection__Lcom_google_gwt_user_client_ui_HasWidgets_2V;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(82, 232, $intern_40);
_.iterator__Ljava_util_Iterator_2 = function com_google_gwt_user_client_ui_ComplexPanel_iterator__Ljava_util_Iterator_2(){
  return new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this.com_google_gwt_user_client_ui_ComplexPanel_children);
}
;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_ComplexPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  return com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ComplexPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'ComplexPanel', 82);
function com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, w, (com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element));
}

function com_google_gwt_user_client_ui_AbsolutePanel_changeToStaticPositioning__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(elem.style, 'left', '');
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(elem.style, 'top', '');
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(elem.style, 'position', '');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(108, 82, $intern_40);
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_AbsolutePanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  var removed;
  removed = com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
  removed && com_google_gwt_user_client_ui_AbsolutePanel_changeToStaticPositioning__Lcom_google_gwt_dom_client_Element_2V((com_google_gwt_user_client_DOM_$clinit__V() , w.com_google_gwt_user_client_ui_UIObject_element));
  return removed;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AbsolutePanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'AbsolutePanel', 108);
function com_google_gwt_user_client_ui_AttachDetachException_$clinit__V(){
  com_google_gwt_user_client_ui_AttachDetachException_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_user_client_ui_AttachDetachException_attachCommand = new com_google_gwt_user_client_ui_AttachDetachException$1_AttachDetachException$1__V;
  com_google_gwt_user_client_ui_AttachDetachException_detachCommand = new com_google_gwt_user_client_ui_AttachDetachException$2_AttachDetachException$2__V;
}

function com_google_gwt_user_client_ui_AttachDetachException_AttachDetachException__Ljava_util_Set_2V(causes){
  com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V.call(this, causes);
}

function com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(hasWidgets, c){
  com_google_gwt_user_client_ui_AttachDetachException_$clinit__V();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator__Ljava_util_Iterator_2(); w$iterator.hasNext__Z();) {
    w = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(w$iterator.next__Ljava_lang_Object_2(), 12);
    try {
      c.execute__Lcom_google_gwt_user_client_ui_Widget_2V(w);
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 5)) {
        e = $e0;
        !caught && (caught = new java_util_HashSet_HashSet__V);
        java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(caught, e);
      }
       else 
        throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    }
  }
  if (caught) {
    throw new com_google_gwt_user_client_ui_AttachDetachException_AttachDetachException__Ljava_util_Set_2V(caught);
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(112, 83, $intern_13, com_google_gwt_user_client_ui_AttachDetachException_AttachDetachException__Ljava_util_Set_2V);
var com_google_gwt_user_client_ui_AttachDetachException_attachCommand, com_google_gwt_user_client_ui_AttachDetachException_detachCommand;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AttachDetachException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'AttachDetachException', 112);
function com_google_gwt_user_client_ui_AttachDetachException$1_AttachDetachException$1__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(113, 1, {}, com_google_gwt_user_client_ui_AttachDetachException$1_AttachDetachException$1__V);
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_AttachDetachException$1_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  w.onAttach__V();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AttachDetachException$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'AttachDetachException/1', 113);
function com_google_gwt_user_client_ui_AttachDetachException$2_AttachDetachException$2__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(114, 1, {}, com_google_gwt_user_client_ui_AttachDetachException$2_AttachDetachException$2__V);
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_AttachDetachException$2_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(w);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AttachDetachException$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'AttachDetachException/2', 114);
function com_google_gwt_user_client_ui_FocusWidget_FocusWidget__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this, (com_google_gwt_user_client_DOM_$clinit__V() , elem));
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(84, 12, $intern_40);
_.onAttach__V = function com_google_gwt_user_client_ui_FocusWidget_onAttach__V(){
  var tabIndex;
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
  tabIndex = com_google_gwt_dom_client_DOMImplIE9_$getTabIndex__Lcom_google_gwt_dom_client_DOMImplIE9_2Lcom_google_gwt_dom_client_Element_2I((com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element));
  -1 == tabIndex && (this.com_google_gwt_user_client_ui_UIObject_element.tabIndex = 0 , undefined);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1FocusWidget_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'FocusWidget', 84);
function com_google_gwt_user_client_ui_ButtonBase_ButtonBase__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_user_client_ui_FocusWidget_FocusWidget__Lcom_google_gwt_dom_client_Element_2V.call(this, elem);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(118, 84, $intern_40);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ButtonBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'ButtonBase', 118);
function com_google_gwt_user_client_ui_Button_Button__Ljava_lang_String_2V(){
  var com_google_gwt_user_client_ui_Button_Button__V_com_google_gwt_dom_client_DOMImplStandardBase_$createButtonElement__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ButtonElement_2_e_0_0;
  com_google_gwt_user_client_ui_ButtonBase_ButtonBase__Lcom_google_gwt_dom_client_Element_2V.call(this, (com_google_gwt_user_client_ui_Button_Button__V_com_google_gwt_dom_client_DOMImplStandardBase_$createButtonElement__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ButtonElement_2_e_0_0 = $doc.createElement('BUTTON') , com_google_gwt_user_client_ui_Button_Button__V_com_google_gwt_dom_client_DOMImplStandardBase_$createButtonElement__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ButtonElement_2_e_0_0.setAttribute('type', 'button') , com_google_gwt_user_client_ui_Button_Button__V_com_google_gwt_dom_client_DOMImplStandardBase_$createButtonElement__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ButtonElement_2_e_0_0));
  com_google_gwt_dom_client_Element_$setClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V((com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element), 'gwt-Button');
  this.com_google_gwt_user_client_ui_UIObject_element.innerHTML = 'Ping Server';
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(85, 118, $intern_40, com_google_gwt_user_client_ui_Button_Button__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Button_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'Button', 85);
function com_google_gwt_user_client_ui_CellPanel_$setCellHorizontalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2V(td, align_0){
  com_google_gwt_dom_client_Element_$setPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V((com_google_gwt_user_client_DOM_$clinit__V() , td), 'align', align_0.com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString);
}

function com_google_gwt_user_client_ui_CellPanel_$setCellVerticalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2V(td, align_0){
  com_google_gwt_user_client_ui_CellPanel_$setCellVerticalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2V((com_google_gwt_user_client_DOM_$clinit__V() , td), align_0);
}

function com_google_gwt_user_client_ui_CellPanel_$setCellVerticalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2V(td, align_0){
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(td.style, $intern_41, align_0.com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_verticalAlignString);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(115, 82, $intern_40);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1CellPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'CellPanel', 115);
function com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(this$static){
  com_google_gwt_dom_client_DOMImplStandard_$setInnerText__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_element, 'Number of appointments');
  if (this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_textDir != this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir) {
    this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_textDir = this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir;
    com_google_gwt_i18n_client_BidiUtils_setDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2V(this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_element, this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir);
  }
}

function com_google_gwt_user_client_ui_DirectionalTextHelper_DirectionalTextHelper__Lcom_google_gwt_dom_client_Element_2ZV(element){
  this.com_google_gwt_user_client_ui_DirectionalTextHelper_element = element;
  this.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir = com_google_gwt_i18n_client_BidiUtils_getDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2(element);
  this.com_google_gwt_user_client_ui_DirectionalTextHelper_textDir = this.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(153, 1, {}, com_google_gwt_user_client_ui_DirectionalTextHelper_DirectionalTextHelper__Lcom_google_gwt_dom_client_Element_2ZV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1DirectionalTextHelper_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'DirectionalTextHelper', 153);
function com_google_gwt_user_client_ui_DockPanel_$clinit__V(){
  com_google_gwt_user_client_ui_DockPanel_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_user_client_ui_DockPanel_CENTER = new com_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_DockPanel$DockLayoutConstant__V;
  com_google_gwt_user_client_ui_DockPanel_LINE_1START = new com_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_DockPanel$DockLayoutConstant__V;
  com_google_gwt_user_client_ui_DockPanel_LINE_1END = new com_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_DockPanel$DockLayoutConstant__V;
  com_google_gwt_user_client_ui_DockPanel_EAST = new com_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_DockPanel$DockLayoutConstant__V;
  com_google_gwt_user_client_ui_DockPanel_NORTH = new com_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_DockPanel$DockLayoutConstant__V;
  com_google_gwt_user_client_ui_DockPanel_SOUTH = new com_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_DockPanel$DockLayoutConstant__V;
  com_google_gwt_user_client_ui_DockPanel_WEST = new com_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_DockPanel$DockLayoutConstant__V;
}

function com_google_gwt_user_client_ui_DockPanel_$add__Lcom_google_gwt_user_client_ui_DockPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_2V(this$static, widget, direction){
  var layout;
  if (direction == com_google_gwt_user_client_ui_DockPanel_CENTER) {
    if (widget == this$static.com_google_gwt_user_client_ui_DockPanel_center) {
      return;
    }
     else if (this$static.com_google_gwt_user_client_ui_DockPanel_center) {
      throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('Only one CENTER widget may be added');
    }
  }
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(widget);
  com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, widget);
  direction == com_google_gwt_user_client_ui_DockPanel_CENTER && (this$static.com_google_gwt_user_client_ui_DockPanel_center = widget);
  layout = new com_google_gwt_user_client_ui_DockPanel$LayoutData_DockPanel$LayoutData__Lcom_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_2V(direction);
  widget.com_google_gwt_user_client_ui_Widget_layoutData = layout;
  com_google_gwt_user_client_ui_DockPanel_$setCellHorizontalAlignment__Lcom_google_gwt_user_client_ui_DockPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2V(widget, this$static.com_google_gwt_user_client_ui_DockPanel_horzAlign);
  com_google_gwt_user_client_ui_DockPanel_$setCellVerticalAlignment__Lcom_google_gwt_user_client_ui_DockPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2V(widget, this$static.com_google_gwt_user_client_ui_DockPanel_vertAlign);
  com_google_gwt_user_client_ui_DockPanel_$realizeTable__Lcom_google_gwt_user_client_ui_DockPanel_2V(this$static);
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(widget, this$static);
}

function com_google_gwt_user_client_ui_DockPanel_$realizeTable__Lcom_google_gwt_user_client_ui_DockPanel_2V(this$static){
  var bodyElem, centerTd, child, colCount, dir_0, i, it, it0, layout, logicalLeftCol, logicalRightCol, northRow, row, rowCount, rows_0, southRow, td;
  bodyElem = (com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_CellPanel_body);
  while (com_google_gwt_user_client_impl_DOMImplStandard_$getChildCount__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2I(bodyElem) > 0) {
    com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(bodyElem, (null , com_google_gwt_user_client_impl_DOMImplStandard_$getChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2ILcom_google_gwt_dom_client_Element_2(bodyElem, 0)));
  }
  rowCount = 1;
  colCount = 1;
  for (it0 = new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children); it0.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index < it0.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_size;) {
    child = com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_Widget_2(it0);
    dir_0 = child.com_google_gwt_user_client_ui_Widget_layoutData.com_google_gwt_user_client_ui_DockPanel$LayoutData_direction;
    dir_0 == com_google_gwt_user_client_ui_DockPanel_NORTH || dir_0 == com_google_gwt_user_client_ui_DockPanel_SOUTH?++rowCount:(dir_0 == com_google_gwt_user_client_ui_DockPanel_EAST || dir_0 == com_google_gwt_user_client_ui_DockPanel_WEST || dir_0 == com_google_gwt_user_client_ui_DockPanel_LINE_1START || dir_0 == com_google_gwt_user_client_ui_DockPanel_LINE_1END) && ++colCount;
  }
  rows_0 = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1DockPanel$TmpRow_12_1classLit, $intern_6, 63, rowCount, 0, 1);
  for (i = 0; i < rowCount; ++i) {
    rows_0[i] = new com_google_gwt_user_client_ui_DockPanel$TmpRow_DockPanel$TmpRow__V;
    rows_0[i].com_google_gwt_user_client_ui_DockPanel$TmpRow_tr = $doc.createElement('tr');
    com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(bodyElem, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(rows_0[i].com_google_gwt_user_client_ui_DockPanel$TmpRow_tr));
  }
  logicalLeftCol = 0;
  logicalRightCol = colCount - 1;
  northRow = 0;
  southRow = rowCount - 1;
  centerTd = null;
  for (it = new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children); it.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index < it.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_size;) {
    child = com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_Widget_2(it);
    layout = child.com_google_gwt_user_client_ui_Widget_layoutData;
    td = $doc.createElement('td');
    layout.com_google_gwt_user_client_ui_DockPanel$LayoutData_td = td;
    com_google_gwt_dom_client_Element_$setPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(layout.com_google_gwt_user_client_ui_DockPanel$LayoutData_td, 'align', layout.com_google_gwt_user_client_ui_DockPanel$LayoutData_hAlign);
    com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(layout.com_google_gwt_user_client_ui_DockPanel$LayoutData_td.style, $intern_41, layout.com_google_gwt_user_client_ui_DockPanel$LayoutData_vAlign);
    com_google_gwt_dom_client_Element_$setPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(layout.com_google_gwt_user_client_ui_DockPanel$LayoutData_td, 'width', layout.com_google_gwt_user_client_ui_DockPanel$LayoutData_width);
    com_google_gwt_dom_client_Element_$setPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(layout.com_google_gwt_user_client_ui_DockPanel$LayoutData_td, 'height', layout.com_google_gwt_user_client_ui_DockPanel$LayoutData_height);
    if (layout.com_google_gwt_user_client_ui_DockPanel$LayoutData_direction == com_google_gwt_user_client_ui_DockPanel_NORTH) {
      com_google_gwt_user_client_DOM_insertChild__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2IV(rows_0[northRow].com_google_gwt_user_client_ui_DockPanel$TmpRow_tr, td, rows_0[northRow].com_google_gwt_user_client_ui_DockPanel$TmpRow_center);
      com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(td, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(child.com_google_gwt_user_client_ui_UIObject_element));
      com_google_gwt_dom_client_Element_$setPropertyInt__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2IV(td, 'colSpan', logicalRightCol - logicalLeftCol + 1);
      ++northRow;
    }
     else if (layout.com_google_gwt_user_client_ui_DockPanel$LayoutData_direction == com_google_gwt_user_client_ui_DockPanel_SOUTH) {
      com_google_gwt_user_client_DOM_insertChild__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2IV(rows_0[southRow].com_google_gwt_user_client_ui_DockPanel$TmpRow_tr, td, rows_0[southRow].com_google_gwt_user_client_ui_DockPanel$TmpRow_center);
      com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(td, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(child.com_google_gwt_user_client_ui_UIObject_element));
      com_google_gwt_dom_client_Element_$setPropertyInt__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2IV(td, 'colSpan', logicalRightCol - logicalLeftCol + 1);
      --southRow;
    }
     else if (layout.com_google_gwt_user_client_ui_DockPanel$LayoutData_direction == com_google_gwt_user_client_ui_DockPanel_CENTER) {
      centerTd = td;
    }
     else if (com_google_gwt_user_client_ui_DockPanel_$shouldAddToLogicalLeftOfTable__Lcom_google_gwt_user_client_ui_DockPanel_2Lcom_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_2Z(layout.com_google_gwt_user_client_ui_DockPanel$LayoutData_direction)) {
      row = rows_0[northRow];
      com_google_gwt_user_client_DOM_insertChild__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2IV(row.com_google_gwt_user_client_ui_DockPanel$TmpRow_tr, td, row.com_google_gwt_user_client_ui_DockPanel$TmpRow_center++);
      com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(td, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(child.com_google_gwt_user_client_ui_UIObject_element));
      com_google_gwt_dom_client_Element_$setPropertyInt__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2IV(td, 'rowSpan', southRow - northRow + 1);
      ++logicalLeftCol;
    }
     else if (com_google_gwt_user_client_ui_DockPanel_$shouldAddToLogicalRightOfTable__Lcom_google_gwt_user_client_ui_DockPanel_2Lcom_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_2Z(layout.com_google_gwt_user_client_ui_DockPanel$LayoutData_direction)) {
      row = rows_0[northRow];
      com_google_gwt_user_client_DOM_insertChild__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2IV(row.com_google_gwt_user_client_ui_DockPanel$TmpRow_tr, td, row.com_google_gwt_user_client_ui_DockPanel$TmpRow_center);
      com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(td, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(child.com_google_gwt_user_client_ui_UIObject_element));
      com_google_gwt_dom_client_Element_$setPropertyInt__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2IV(td, 'rowSpan', southRow - northRow + 1);
      --logicalRightCol;
    }
  }
  if (this$static.com_google_gwt_user_client_ui_DockPanel_center) {
    row = rows_0[northRow];
    com_google_gwt_user_client_DOM_insertChild__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2IV(row.com_google_gwt_user_client_ui_DockPanel$TmpRow_tr, centerTd, row.com_google_gwt_user_client_ui_DockPanel$TmpRow_center);
    com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(centerTd, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(com_google_gwt_user_client_ui_UIObject_$getElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2(this$static.com_google_gwt_user_client_ui_DockPanel_center)));
  }
}

function com_google_gwt_user_client_ui_DockPanel_$setCellHorizontalAlignment__Lcom_google_gwt_user_client_ui_DockPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2V(w, align_0){
  var data_0;
  data_0 = w.com_google_gwt_user_client_ui_Widget_layoutData;
  data_0.com_google_gwt_user_client_ui_DockPanel$LayoutData_hAlign = align_0.com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString;
  !!data_0.com_google_gwt_user_client_ui_DockPanel$LayoutData_td && com_google_gwt_user_client_ui_CellPanel_$setCellHorizontalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2V(data_0.com_google_gwt_user_client_ui_DockPanel$LayoutData_td, align_0);
}

function com_google_gwt_user_client_ui_DockPanel_$setCellVerticalAlignment__Lcom_google_gwt_user_client_ui_DockPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2V(w, align_0){
  var data_0;
  data_0 = w.com_google_gwt_user_client_ui_Widget_layoutData;
  data_0.com_google_gwt_user_client_ui_DockPanel$LayoutData_vAlign = align_0.com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_verticalAlignString;
  !!data_0.com_google_gwt_user_client_ui_DockPanel$LayoutData_td && com_google_gwt_user_client_ui_CellPanel_$setCellVerticalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2V(data_0.com_google_gwt_user_client_ui_DockPanel$LayoutData_td, align_0);
}

function com_google_gwt_user_client_ui_DockPanel_$shouldAddToLogicalLeftOfTable__Lcom_google_gwt_user_client_ui_DockPanel_2Lcom_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_2Z(widgetDirection){
  if (widgetDirection == com_google_gwt_user_client_ui_DockPanel_LINE_1START) {
    return true;
  }
  com_google_gwt_i18n_client_LocaleInfo_$clinit__V();
  return widgetDirection == com_google_gwt_user_client_ui_DockPanel_WEST;
}

function com_google_gwt_user_client_ui_DockPanel_$shouldAddToLogicalRightOfTable__Lcom_google_gwt_user_client_ui_DockPanel_2Lcom_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_2Z(widgetDirection){
  if (widgetDirection == com_google_gwt_user_client_ui_DockPanel_LINE_1END) {
    return true;
  }
  com_google_gwt_i18n_client_LocaleInfo_$clinit__V();
  return widgetDirection == com_google_gwt_user_client_ui_DockPanel_EAST;
}

function com_google_gwt_user_client_ui_DockPanel_DockPanel__V(){
  com_google_gwt_user_client_ui_DockPanel_$clinit__V();
  com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V.call(this);
  this.com_google_gwt_user_client_ui_CellPanel_table = (com_google_gwt_user_client_DOM_$clinit__V() , $doc.createElement('table'));
  this.com_google_gwt_user_client_ui_CellPanel_body = $doc.createElement('tbody');
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_CellPanel_table, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_CellPanel_body));
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2V(this, this.com_google_gwt_user_client_ui_CellPanel_table);
  this.com_google_gwt_user_client_ui_DockPanel_horzAlign = (com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT);
  this.com_google_gwt_user_client_ui_DockPanel_vertAlign = (com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP);
  com_google_gwt_dom_client_Element_$setPropertyInt__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2IV(this.com_google_gwt_user_client_ui_CellPanel_table, 'cellSpacing', 0);
  com_google_gwt_dom_client_Element_$setPropertyInt__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2IV(this.com_google_gwt_user_client_ui_CellPanel_table, 'cellPadding', 0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(116, 115, $intern_40, com_google_gwt_user_client_ui_DockPanel_DockPanel__V);
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_DockPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  var removed;
  removed = com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
  if (removed) {
    w == this.com_google_gwt_user_client_ui_DockPanel_center && (this.com_google_gwt_user_client_ui_DockPanel_center = null);
    com_google_gwt_user_client_ui_DockPanel_$realizeTable__Lcom_google_gwt_user_client_ui_DockPanel_2V(this);
  }
  return removed;
}
;
var com_google_gwt_user_client_ui_DockPanel_CENTER, com_google_gwt_user_client_ui_DockPanel_EAST, com_google_gwt_user_client_ui_DockPanel_LINE_1END, com_google_gwt_user_client_ui_DockPanel_LINE_1START, com_google_gwt_user_client_ui_DockPanel_NORTH, com_google_gwt_user_client_ui_DockPanel_SOUTH, com_google_gwt_user_client_ui_DockPanel_WEST;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1DockPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'DockPanel', 116);
function com_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_DockPanel$DockLayoutConstant__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(33, 1, {}, com_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_DockPanel$DockLayoutConstant__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1DockPanel$DockLayoutConstant_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'DockPanel/DockLayoutConstant', 33);
function com_google_gwt_user_client_ui_DockPanel$LayoutData_DockPanel$LayoutData__Lcom_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_2V(dir_0){
  this.com_google_gwt_user_client_ui_DockPanel$LayoutData_hAlign = (com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT).com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString;
  this.com_google_gwt_user_client_ui_DockPanel$LayoutData_vAlign = (com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP).com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_verticalAlignString;
  this.com_google_gwt_user_client_ui_DockPanel$LayoutData_direction = dir_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(117, 1, {}, com_google_gwt_user_client_ui_DockPanel$LayoutData_DockPanel$LayoutData__Lcom_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_2V);
_.com_google_gwt_user_client_ui_DockPanel$LayoutData_height = '';
_.com_google_gwt_user_client_ui_DockPanel$LayoutData_width = '';
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1DockPanel$LayoutData_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'DockPanel/LayoutData', 117);
function com_google_gwt_user_client_ui_DockPanel$TmpRow_DockPanel$TmpRow__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(63, 1, {63:1}, com_google_gwt_user_client_ui_DockPanel$TmpRow_DockPanel$TmpRow__V);
_.com_google_gwt_user_client_ui_DockPanel$TmpRow_center = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1DockPanel$TmpRow_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'DockPanel/TmpRow', 63);
function com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V(){
  com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V((com_google_gwt_dom_client_Style$TextAlign_$clinit__V() , 'center'));
  new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V('justify');
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT = new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V('left');
  new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V('right');
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LOCALE_1START = (com_google_gwt_i18n_client_LocaleInfo_$clinit__V() , com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT);
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT = com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LOCALE_1START;
}

var com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT, com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT, com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LOCALE_1START;
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(233, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HasHorizontalAlignment$AutoHorizontalAlignmentConstant_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'HasHorizontalAlignment/AutoHorizontalAlignmentConstant', 233);
function com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V(textAlignString){
  this.com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString = textAlignString;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(54, 233, {}, com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HasHorizontalAlignment$HorizontalAlignmentConstant_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'HasHorizontalAlignment/HorizontalAlignmentConstant', 54);
function com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__V(){
  com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  new com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V('bottom');
  new com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V('middle');
  com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP = new com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V('top');
}

var com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP;
function com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V(verticalAlignString){
  this.com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_verticalAlignString = verticalAlignString;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(64, 1, {}, com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HasVerticalAlignment$VerticalAlignmentConstant_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'HasVerticalAlignment/VerticalAlignmentConstant', 64);
function com_google_gwt_user_client_ui_LabelBase_LabelBase__Lcom_google_gwt_dom_client_Element_2ZV(element){
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this, (com_google_gwt_user_client_DOM_$clinit__V() , element));
  this.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper = new com_google_gwt_user_client_ui_DirectionalTextHelper_DirectionalTextHelper__Lcom_google_gwt_dom_client_Element_2ZV(this.com_google_gwt_user_client_ui_UIObject_element);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(86, 12, $intern_40);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1LabelBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'LabelBase', 86);
function com_google_gwt_user_client_ui_Label_Label__Ljava_lang_String_2V(){
  com_google_gwt_user_client_ui_LabelBase_LabelBase__Lcom_google_gwt_dom_client_Element_2ZV.call(this, $doc.createElement('div'));
  com_google_gwt_dom_client_Element_$setClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V((com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element), 'gwt-Label');
  com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(this.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(87, 86, $intern_40, com_google_gwt_user_client_ui_Label_Label__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Label_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'Label', 87);
function com_google_gwt_user_client_ui_RootPanel_$clinit__V(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand = new com_google_gwt_user_client_ui_RootPanel$1_RootPanel$1__V;
  com_google_gwt_user_client_ui_RootPanel_rootPanels = new java_util_HashMap_HashMap__V;
  com_google_gwt_user_client_ui_RootPanel_widgetsToDetach = new java_util_HashSet_HashSet__V;
}

function com_google_gwt_user_client_ui_RootPanel_RootPanel__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V.call(this);
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this, (com_google_gwt_user_client_DOM_$clinit__V() , elem));
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
}

function com_google_gwt_user_client_ui_RootPanel_detachNow__Lcom_google_gwt_user_client_ui_Widget_2V(widget){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  try {
    com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(widget);
  }
   finally {
    java_util_HashSet_$remove__Ljava_util_HashSet_2Ljava_lang_Object_2Z(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, widget);
  }
}

function com_google_gwt_user_client_ui_RootPanel_detachWidgets__V(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  try {
    com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand);
  }
   finally {
    com_google_gwt_user_client_ui_RootPanel_widgetsToDetach.java_util_HashSet_map.clear__V();
    com_google_gwt_user_client_ui_RootPanel_rootPanels.clear__V();
  }
}

function com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  var rp;
  rp = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_user_client_ui_RootPanel_rootPanels.get__Ljava_lang_Object_2Ljava_lang_Object_2(null), 53);
  if (rp) {
    return rp;
  }
  if (com_google_gwt_user_client_ui_RootPanel_rootPanels.size__I() == 0) {
    com_google_gwt_user_client_Window_addCloseHandler__Lcom_google_gwt_event_logical_shared_CloseHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(new com_google_gwt_user_client_ui_RootPanel$2_RootPanel$2__V);
    com_google_gwt_i18n_client_LocaleInfo_$clinit__V();
  }
  rp = new com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_RootPanel$DefaultRootPanel__V;
  com_google_gwt_user_client_ui_RootPanel_rootPanels.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(null, rp);
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, rp);
  return rp;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(53, 108, $intern_42);
var com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand, com_google_gwt_user_client_ui_RootPanel_rootPanels, com_google_gwt_user_client_ui_RootPanel_widgetsToDetach;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'RootPanel', 53);
function com_google_gwt_user_client_ui_RootPanel$1_RootPanel$1__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(110, 1, {}, com_google_gwt_user_client_ui_RootPanel$1_RootPanel$1__V);
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_RootPanel$1_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  w.com_google_gwt_user_client_ui_Widget_attached && com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(w);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'RootPanel/1', 110);
function com_google_gwt_user_client_ui_RootPanel$2_RootPanel$2__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(111, 1, {251:1, 214:1}, com_google_gwt_user_client_ui_RootPanel$2_RootPanel$2__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'RootPanel/2', 111);
function com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_RootPanel$DefaultRootPanel__V(){
  com_google_gwt_user_client_ui_RootPanel_RootPanel__Lcom_google_gwt_dom_client_Element_2V.call(this, $doc.body);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(109, 53, $intern_42, com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_RootPanel$DefaultRootPanel__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel$DefaultRootPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'RootPanel/DefaultRootPanel', 109);
function com_google_gwt_user_client_ui_ValueBoxBase_ValueBoxBase__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_text_shared_Renderer_2Lcom_google_gwt_text_shared_Parser_2V(elem){
  com_google_gwt_user_client_ui_FocusWidget_FocusWidget__Lcom_google_gwt_dom_client_Element_2V.call(this, elem);
  com_google_gwt_i18n_client_LocaleInfo_$clinit__V();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(119, 84, $intern_40);
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V = function com_google_gwt_user_client_ui_ValueBoxBase_onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(event_0){
  var type_0;
  type_0 = (com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(event_0.type));
  (type_0 & 896) != 0?com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event_0):com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event_0);
}
;
_.onLoad__V = function com_google_gwt_user_client_ui_ValueBoxBase_onLoad__V(){
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'ValueBoxBase', 119);
function com_google_gwt_user_client_ui_TextBoxBase_$clinit__V(){
  com_google_gwt_user_client_ui_TextBoxBase_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_$clinit__V();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(120, 119, $intern_40);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1TextBoxBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'TextBoxBase', 120);
function com_google_gwt_user_client_ui_TextBox_TextBox__V(){
  var com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_InputElement_2_e_0;
  com_google_gwt_user_client_ui_TextBoxBase_$clinit__V();
  com_google_gwt_user_client_ui_TextBox_TextBox__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V.call(this, (com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_InputElement_2_e_0 = $doc.createElement('INPUT') , com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_InputElement_2_e_0.type = 'text' , com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_InputElement_2_e_0));
}

function com_google_gwt_user_client_ui_TextBox_TextBox__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(element){
  com_google_gwt_user_client_ui_ValueBoxBase_ValueBoxBase__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_text_shared_Renderer_2Lcom_google_gwt_text_shared_Parser_2V.call(this, element, (!com_google_gwt_text_shared_testing_PassthroughRenderer_INSTANCE && (com_google_gwt_text_shared_testing_PassthroughRenderer_INSTANCE = new com_google_gwt_text_shared_testing_PassthroughRenderer_PassthroughRenderer__V) , !com_google_gwt_text_shared_testing_PassthroughParser_INSTANCE && (com_google_gwt_text_shared_testing_PassthroughParser_INSTANCE = new com_google_gwt_text_shared_testing_PassthroughParser_PassthroughParser__V)));
  com_google_gwt_dom_client_Element_$setClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V((com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element), 'gwt-TextBox');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(88, 120, $intern_40, com_google_gwt_user_client_ui_TextBox_TextBox__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1TextBox_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'TextBox', 88);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_$clinit__V(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_CENTER = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_ValueBoxBase$TextAlignment$1__Ljava_lang_String_2IV;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_JUSTIFY = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_ValueBoxBase$TextAlignment$2__Ljava_lang_String_2IV;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_LEFT = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_ValueBoxBase$TextAlignment$3__Ljava_lang_String_2IV;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_RIGHT = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_ValueBoxBase$TextAlignment$4__Ljava_lang_String_2IV;
}

function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_ValueBoxBase$TextAlignment__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_values___3Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_$clinit__V();
  return com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment_12_1classLit, 1), $intern_6, 26, 0, [com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_CENTER, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_JUSTIFY, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_LEFT, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_RIGHT]);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(26, 6, $intern_43);
var com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_CENTER, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_JUSTIFY, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_LEFT, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_RIGHT;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_39, 'ValueBoxBase/TextAlignment', 26, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_values___3Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_ValueBoxBase$TextAlignment$1__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_ValueBoxBase$TextAlignment__Ljava_lang_String_2IV.call(this, 'CENTER', 0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(121, 26, $intern_43, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_ValueBoxBase$TextAlignment$1__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment$1_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_39, 'ValueBoxBase/TextAlignment/1', 121, null);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_ValueBoxBase$TextAlignment$2__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_ValueBoxBase$TextAlignment__Ljava_lang_String_2IV.call(this, 'JUSTIFY', 1);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(122, 26, $intern_43, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_ValueBoxBase$TextAlignment$2__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment$2_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_39, 'ValueBoxBase/TextAlignment/2', 122, null);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_ValueBoxBase$TextAlignment$3__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_ValueBoxBase$TextAlignment__Ljava_lang_String_2IV.call(this, 'LEFT', 2);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(123, 26, $intern_43, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_ValueBoxBase$TextAlignment$3__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment$3_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_39, 'ValueBoxBase/TextAlignment/3', 123, null);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_ValueBoxBase$TextAlignment$4__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_ValueBoxBase$TextAlignment__Ljava_lang_String_2IV.call(this, 'RIGHT', 3);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(124, 26, $intern_43, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_ValueBoxBase$TextAlignment$4__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment$4_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_39, 'ValueBoxBase/TextAlignment/4', 124, null);
function com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, w, this$static.com_google_gwt_user_client_ui_WidgetCollection_size);
}

function com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, w){
  var i;
  for (i = 0; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_size; ++i) {
    if (this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i] == w) {
      return i;
    }
  }
  return -1;
}

function com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V;
  }
  if (this$static.com_google_gwt_user_client_ui_WidgetCollection_size == this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length) {
    newArray = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit, $intern_6, 12, this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length; ++i0) {
      com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(newArray, i0, this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i0]);
    }
    this$static.com_google_gwt_user_client_ui_WidgetCollection_array = newArray;
  }
  ++this$static.com_google_gwt_user_client_ui_WidgetCollection_size;
  for (i = this$static.com_google_gwt_user_client_ui_WidgetCollection_size - 1; i > beforeIndex; --i) {
    com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, i, this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i - 1]);
  }
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, beforeIndex, w);
}

function com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2IV(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V;
  }
  --this$static.com_google_gwt_user_client_ui_WidgetCollection_size;
  for (i = index_0; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_size; ++i) {
    com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, i, this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i + 1]);
  }
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, this$static.com_google_gwt_user_client_ui_WidgetCollection_size, null);
}

function com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  var index_0;
  index_0 = com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, w);
  if (index_0 == -1) {
    throw new java_util_NoSuchElementException_NoSuchElementException__V;
  }
  com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2IV(this$static, index_0);
}

function com_google_gwt_user_client_ui_WidgetCollection_WidgetCollection__Lcom_google_gwt_user_client_ui_HasWidgets_2V(){
  this.com_google_gwt_user_client_ui_WidgetCollection_array = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit, $intern_6, 12, 4, 0, 1);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(133, 1, {}, com_google_gwt_user_client_ui_WidgetCollection_WidgetCollection__Lcom_google_gwt_user_client_ui_HasWidgets_2V);
_.iterator__Ljava_util_Iterator_2 = function com_google_gwt_user_client_ui_WidgetCollection_iterator__Ljava_util_Iterator_2(){
  return new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this);
}
;
_.com_google_gwt_user_client_ui_WidgetCollection_size = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1WidgetCollection_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'WidgetCollection', 133);
function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_Widget_2(this$static){
  if (this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index >= this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_util_NoSuchElementException_NoSuchElementException__V;
  }
  this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_currentWidget = this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_array[this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index];
  ++this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index;
  return this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_currentWidget;
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this$0){
  this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(55, 1, {}, com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V);
_.hasNext__Z = function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_hasNext__Z(){
  return this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index < this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_size;
}
;
_.next__Ljava_lang_Object_2 = function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_next__Ljava_lang_Object_2(){
  return com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_Widget_2(this);
}
;
_.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1WidgetCollection$WidgetIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'WidgetCollection/WidgetIterator', 55);
function com_google_gwt_useragent_client_UserAgentAsserter_assertCompileTimeUserAgent__V(){
  var runtimeValue;
  runtimeValue = com_google_gwt_useragent_client_UserAgentImplIe9_$getRuntimeValue__Lcom_google_gwt_useragent_client_UserAgentImplIe9_2Ljava_lang_String_2();
  if (!java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('ie9', runtimeValue)) {
    throw new com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V(runtimeValue);
  }
}

function java_lang_Error_Error__Ljava_lang_String_2Ljava_lang_Throwable_2V(message, cause){
  java_lang_Throwable_Throwable__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, message, cause);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(61, 5, $intern_3);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Error_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Error', 61);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(15, 61, $intern_3);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1AssertionError_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'AssertionError', 15);
function com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V(runtimeValue){
  java_lang_Error_Error__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, '' + ($intern_44 + runtimeValue + ').\n' + $intern_45), com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($intern_44 + runtimeValue + ').\n' + $intern_45, 5)?com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($intern_44 + runtimeValue + ').\n' + $intern_45, 5):null);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(101, 15, $intern_3, com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1useragent_1client_1UserAgentAsserter$UserAgentAssertionError_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 101);
function com_google_gwt_useragent_client_UserAgentImplIe9_$getRuntimeValue__Lcom_google_gwt_useragent_client_UserAgentImplIe9_2Ljava_lang_String_2(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function com_google_gwt_xhr_client_XMLHttpRequest_$clearOnReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function com_google_gwt_xhr_client_XMLHttpRequest_$open__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, httpMethod, url_0){
  this$static.open(httpMethod, url_0, true);
}

function com_google_gwt_xhr_client_XMLHttpRequest_$setOnReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Lcom_google_gwt_xhr_client_ReadyStateChangeHandler_2V(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(_this);
  }
  );
}

function com_google_gwt_xhr_client_XMLHttpRequest_$setRequestHeader__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, header, value_0){
  this$static.setRequestHeader(header, value_0);
}

function com_google_web_bindery_event_shared_SimpleEventBus$1_SimpleEventBus$1__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(147, 1, {}, com_google_web_bindery_event_shared_SimpleEventBus$1_SimpleEventBus$1__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1SimpleEventBus$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_9, 'SimpleEventBus/1', 147);
function com_google_web_bindery_event_shared_SimpleEventBus$2_SimpleEventBus$2__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$0, val$type, val$handler){
  this.com_google_web_bindery_event_shared_SimpleEventBus$2_this$01 = this$0;
  this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$type2 = val$type;
  this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$source3 = null;
  this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$handler4 = val$handler;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(148, 1, {252:1}, com_google_web_bindery_event_shared_SimpleEventBus$2_SimpleEventBus$2__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1SimpleEventBus$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_9, 'SimpleEventBus/2', 148);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(93, 1, {93:1, 3:1});
_.toString__Ljava_lang_String_2$ = function edu_pdx_cs410J_AbstractAppointment_toString__Ljava_lang_String_2(){
  return 'My description from ' + ('START ' + new java_util_Date_Date__V) + ' until ' + ('END + ' + edu_pdx_cs410J_whitlock_client_Appointment_$formatDate__Ledu_pdx_cs410J_whitlock_client_Appointment_2Ljava_util_Date_2Ljava_lang_String_2(new java_util_Date_Date__V));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ledu_1pdx_1cs410J_1AbstractAppointment_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'AbstractAppointment', 93);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(243, 1, {3:1});
_.toString__Ljava_lang_String_2$ = function edu_pdx_cs410J_AbstractAppointmentBook_toString__Ljava_lang_String_2(){
  return $intern_47 + this.edu_pdx_cs410J_whitlock_client_AppointmentBook_appts.size__I() + $intern_48;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ledu_1pdx_1cs410J_1AbstractAppointmentBook_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'AbstractAppointmentBook', 243);
function edu_pdx_cs410J_whitlock_client_Appointment_$formatDate__Ledu_pdx_cs410J_whitlock_client_Appointment_2Ljava_util_Date_2Ljava_lang_String_2(date){
  return com_google_gwt_i18n_shared_DateTimeFormat_$format__Lcom_google_gwt_i18n_shared_DateTimeFormat_2Ljava_util_Date_2Lcom_google_gwt_i18n_shared_TimeZone_2Ljava_lang_String_2((com_google_gwt_i18n_client_DateTimeFormat_$clinit__V() , com_google_gwt_i18n_client_DateTimeFormat_getFormat__Ljava_lang_String_2Lcom_google_gwt_i18n_client_DateTimeFormatInfo_2Lcom_google_gwt_i18n_client_DateTimeFormat_2(com_google_gwt_i18n_client_LocaleInfo_$getDateTimeFormatInfo__Lcom_google_gwt_i18n_client_LocaleInfo_2Lcom_google_gwt_i18n_client_DateTimeFormatInfo_2((com_google_gwt_i18n_client_LocaleInfo_$clinit__V() , com_google_gwt_i18n_client_LocaleInfo_$clinit__V() , com_google_gwt_i18n_client_LocaleInfo_instance)))), date, null);
}

function edu_pdx_cs410J_whitlock_client_Appointment_Appointment__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(57, 93, {93:1, 57:1, 3:1}, edu_pdx_cs410J_whitlock_client_Appointment_Appointment__V);
var com_google_gwt_lang_ClassLiteralHolder_Ledu_1pdx_1cs410J_1whitlock_1client_1Appointment_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'Appointment', 57);
function edu_pdx_cs410J_whitlock_client_AppointmentBook_AppointmentBook__V(){
  this.edu_pdx_cs410J_whitlock_client_AppointmentBook_appts = new java_util_ArrayList_ArrayList__V;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(70, 243, {70:1, 3:1}, edu_pdx_cs410J_whitlock_client_AppointmentBook_AppointmentBook__V);
var com_google_gwt_lang_ClassLiteralHolder_Ledu_1pdx_1cs410J_1whitlock_1client_1AppointmentBook_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'AppointmentBook', 70);
function edu_pdx_cs410J_whitlock_client_AppointmentBookGwt_$createAppointments__Ledu_pdx_cs410J_whitlock_client_AppointmentBookGwt_2V(this$static){
  var async, numberOfAppointments, edu_pdx_cs410J_whitlock_client_AppointmentBookGwt_$getNumberOfAppointments__Ledu_pdx_cs410J_whitlock_client_AppointmentBookGwt_2I_number_0;
  async = new edu_pdx_cs410J_whitlock_client_AppointmentBookService_1Proxy_AppointmentBookService_1Proxy__V;
  numberOfAppointments = (edu_pdx_cs410J_whitlock_client_AppointmentBookGwt_$getNumberOfAppointments__Ledu_pdx_cs410J_whitlock_client_AppointmentBookGwt_2I_number_0 = com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(com_google_gwt_user_client_ui_UIObject_$getElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2(this$static.edu_pdx_cs410J_whitlock_client_AppointmentBookGwt_textBox), 'value') , java_lang_Number__1_1parseAndValidateInt__Ljava_lang_String_2IIII(edu_pdx_cs410J_whitlock_client_AppointmentBookGwt_$getNumberOfAppointments__Ledu_pdx_cs410J_whitlock_client_AppointmentBookGwt_2I_number_0));
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1Proxy_$createAppointmentBook__Ledu_pdx_cs410J_whitlock_client_AppointmentBookService_1Proxy_2ILcom_google_gwt_user_client_rpc_AsyncCallback_2V(async, numberOfAppointments);
}

function edu_pdx_cs410J_whitlock_client_AppointmentBookGwt_$displayInAlertDialog__Ledu_pdx_cs410J_whitlock_client_AppointmentBookGwt_2Ledu_pdx_cs410J_whitlock_client_AppointmentBook_2V(airline){
  var flight, flight$iterator, flights, sb;
  sb = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V($intern_47 + airline.edu_pdx_cs410J_whitlock_client_AppointmentBook_appts.size__I() + $intern_48);
  sb.java_lang_AbstractStringBuilder_string += '\n';
  flights = airline.edu_pdx_cs410J_whitlock_client_AppointmentBook_appts;
  for (flight$iterator = flights.iterator__Ljava_util_Iterator_2(); flight$iterator.hasNext__Z();) {
    flight = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(flight$iterator.next__Ljava_lang_Object_2(), 57);
    sb.java_lang_AbstractStringBuilder_string += flight;
    sb.java_lang_AbstractStringBuilder_string += '\n';
  }
  com_google_gwt_user_client_Window_alert__Ljava_lang_String_2V(sb.java_lang_AbstractStringBuilder_string);
}

function edu_pdx_cs410J_whitlock_client_AppointmentBookGwt_$onModuleLoad__Ledu_pdx_cs410J_whitlock_client_AppointmentBookGwt_2V(this$static){
  var panel, rootPanel;
  rootPanel = (com_google_gwt_user_client_ui_RootPanel_$clinit__V() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2());
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(rootPanel, this$static.edu_pdx_cs410J_whitlock_client_AppointmentBookGwt_button);
  panel = new com_google_gwt_user_client_ui_DockPanel_DockPanel__V;
  com_google_gwt_user_client_ui_DockPanel_$add__Lcom_google_gwt_user_client_ui_DockPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_2V(panel, new com_google_gwt_user_client_ui_Label_Label__Ljava_lang_String_2V, (com_google_gwt_user_client_ui_DockPanel_$clinit__V() , com_google_gwt_user_client_ui_DockPanel_WEST));
  com_google_gwt_user_client_ui_DockPanel_$add__Lcom_google_gwt_user_client_ui_DockPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_2V(panel, this$static.edu_pdx_cs410J_whitlock_client_AppointmentBookGwt_textBox, com_google_gwt_user_client_ui_DockPanel_CENTER);
  com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(rootPanel, panel, (com_google_gwt_user_client_DOM_$clinit__V() , rootPanel.com_google_gwt_user_client_ui_UIObject_element));
}

function edu_pdx_cs410J_whitlock_client_AppointmentBookGwt_AppointmentBookGwt__V(){
  this.edu_pdx_cs410J_whitlock_client_AppointmentBookGwt_button = new com_google_gwt_user_client_ui_Button_Button__Ljava_lang_String_2V;
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this.edu_pdx_cs410J_whitlock_client_AppointmentBookGwt_button, new edu_pdx_cs410J_whitlock_client_AppointmentBookGwt$2_AppointmentBookGwt$2__Ledu_pdx_cs410J_whitlock_client_AppointmentBookGwt_2V(this), (com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_TYPE));
  this.edu_pdx_cs410J_whitlock_client_AppointmentBookGwt_textBox = new com_google_gwt_user_client_ui_TextBox_TextBox__V;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(75, 1, {}, edu_pdx_cs410J_whitlock_client_AppointmentBookGwt_AppointmentBookGwt__V);
var com_google_gwt_lang_ClassLiteralHolder_Ledu_1pdx_1cs410J_1whitlock_1client_1AppointmentBookGwt_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'AppointmentBookGwt', 75);
function edu_pdx_cs410J_whitlock_client_AppointmentBookGwt$2_AppointmentBookGwt$2__Ledu_pdx_cs410J_whitlock_client_AppointmentBookGwt_2V(this$0){
  this.edu_pdx_cs410J_whitlock_client_AppointmentBookGwt$2_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(102, 1, {249:1, 214:1}, edu_pdx_cs410J_whitlock_client_AppointmentBookGwt$2_AppointmentBookGwt$2__Ledu_pdx_cs410J_whitlock_client_AppointmentBookGwt_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ledu_1pdx_1cs410J_1whitlock_1client_1AppointmentBookGwt$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'AppointmentBookGwt/2', 102);
function edu_pdx_cs410J_whitlock_client_AppointmentBookService_1Proxy_$clinit__V(){
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1Proxy_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1Proxy_SERIALIZER = new edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_AppointmentBookService_1TypeSerializer__V;
}

function edu_pdx_cs410J_whitlock_client_AppointmentBookService_1Proxy_$createAppointmentBook__Ledu_pdx_cs410J_whitlock_client_AppointmentBookService_1Proxy_2ILcom_google_gwt_user_client_rpc_AsyncCallback_2V(this$static, numberOfAppointments){
  var ex, helper, streamWriter;
  helper = new com_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_RemoteServiceProxy$ServiceHelper__Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2Ljava_lang_String_2Ljava_lang_String_2V(this$static);
  try {
    streamWriter = (com_google_gwt_user_client_rpc_impl_RpcStatsContext_$isStatsAvailable__Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Z() && com_google_gwt_user_client_rpc_impl_RpcStatsContext_$stats__Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(com_google_gwt_user_client_rpc_impl_RpcStatsContext_$timeStat__Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2(helper.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_statsContext, helper.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_fullServiceName, 'begin')) , helper.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_streamWriter = edu_pdx_cs410J_whitlock_client_AppointmentBookService_1Proxy_$createStreamWriter__Ledu_pdx_cs410J_whitlock_client_AppointmentBookService_1Proxy_2Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2(helper.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_this$01) , com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_$writeString__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2Ljava_lang_String_2V(helper.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_streamWriter, 'edu.pdx.cs410J.whitlock.client.AppointmentBookService') , com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_$writeString__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2Ljava_lang_String_2V(helper.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_streamWriter, helper.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_methodName) , com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_$writeInt__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2IV(helper.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_streamWriter, 1) , helper.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_streamWriter);
    com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_$writeInt__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2IV(streamWriter, com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_$addString__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2Ljava_lang_String_2I(streamWriter, 'I'));
    com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_append__Ljava_lang_StringBuilder_2Ljava_lang_String_2V(streamWriter.com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_encodeBuffer, '' + numberOfAppointments);
    com_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_$finish__Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_2Lcom_google_gwt_user_client_rpc_AsyncCallback_2Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2Lcom_google_gwt_http_client_Request_2(helper, com_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_$clinit__V());
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 59)) {
      ex = $e0;
      com_google_gwt_user_client_Window_alert__Ljava_lang_String_2V(java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2(ex));
    }
     else 
      throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

function edu_pdx_cs410J_whitlock_client_AppointmentBookService_1Proxy_$createStreamWriter__Ledu_pdx_cs410J_whitlock_client_AppointmentBookService_1Proxy_2Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2(this$static){
  var toReturn, com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_$createStreamWriter__Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2_clientSerializationStreamWriter_0;
  toReturn = (com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_$createStreamWriter__Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2_clientSerializationStreamWriter_0 = new com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_ClientSerializationStreamWriter__Lcom_google_gwt_user_client_rpc_impl_Serializer_2Ljava_lang_String_2Ljava_lang_String_2V(this$static.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_moduleBaseURL, this$static.com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_serializationPolicyName) , java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_$createStreamWriter__Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2_clientSerializationStreamWriter_0.com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_objectMap) , com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_$createStreamWriter__Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2_clientSerializationStreamWriter_0.com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_stringMap.clear__V() , com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_$createStreamWriter__Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2_clientSerializationStreamWriter_0.com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_stringTable.java_util_ArrayList_array = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, $intern_6, 1, 0, 3, 1) , com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_$createStreamWriter__Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2_clientSerializationStreamWriter_0.com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_encodeBuffer = new java_lang_StringBuilder_StringBuilder__V , com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_$writeString__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2Ljava_lang_String_2V(com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_$createStreamWriter__Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2_clientSerializationStreamWriter_0, com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_$createStreamWriter__Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2_clientSerializationStreamWriter_0.com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_moduleBaseURL) , com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_$writeString__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2Ljava_lang_String_2V(com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_$createStreamWriter__Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2_clientSerializationStreamWriter_0, com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_$createStreamWriter__Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2_clientSerializationStreamWriter_0.com_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_serializationPolicyStrongName) , com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_$createStreamWriter__Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2_clientSerializationStreamWriter_0);
  return toReturn;
}

function edu_pdx_cs410J_whitlock_client_AppointmentBookService_1Proxy_AppointmentBookService_1Proxy__V(){
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1Proxy_$clinit__V();
  com_google_gwt_user_client_rpc_impl_RemoteServiceProxy_RemoteServiceProxy__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_user_client_rpc_impl_Serializer_2V.call(this, com_google_gwt_core_client_impl_Impl_getModuleBaseURL__Ljava_lang_String_2(), edu_pdx_cs410J_whitlock_client_AppointmentBookService_1Proxy_SERIALIZER);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(162, 161, {}, edu_pdx_cs410J_whitlock_client_AppointmentBookService_1Proxy_AppointmentBookService_1Proxy__V);
var edu_pdx_cs410J_whitlock_client_AppointmentBookService_1Proxy_SERIALIZER;
var com_google_gwt_lang_ClassLiteralHolder_Ledu_1pdx_1cs410J_1whitlock_1client_1AppointmentBookService_11Proxy_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'AppointmentBookService_Proxy', 162);
function edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_$clinit__V(){
  var edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0, edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0;
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_methodMapNative = (edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0 = {} , edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_50] = [com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2, com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2V, com_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_1FieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2V] , edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_51] = [com_google_gwt_user_client_rpc_RpcTokenException_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_google_gwt_user_client_rpc_RpcTokenException_2, com_google_gwt_user_client_rpc_RpcTokenException_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Lcom_google_gwt_user_client_rpc_RpcTokenException_2V] , edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_52] = [undefined, undefined, com_google_gwt_user_client_rpc_XsrfToken_1FieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Lcom_google_gwt_user_client_rpc_XsrfToken_2V] , edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_53] = [edu_pdx_cs410J_whitlock_client_Appointment_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ledu_pdx_cs410J_whitlock_client_Appointment_2, edu_pdx_cs410J_whitlock_client_Appointment_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ledu_pdx_cs410J_whitlock_client_Appointment_2V] , edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_54] = [edu_pdx_cs410J_whitlock_client_AppointmentBook_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ledu_pdx_cs410J_whitlock_client_AppointmentBook_2, edu_pdx_cs410J_whitlock_client_AppointmentBook_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ledu_pdx_cs410J_whitlock_client_AppointmentBook_2V] , edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_55] = [edu_pdx_cs410J_whitlock_client_Appointment_1Array_1Rank_11_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2_3Ledu_pdx_cs410J_whitlock_client_Appointment_2, edu_pdx_cs410J_whitlock_client_Appointment_1Array_1Rank_11_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2_3Ledu_pdx_cs410J_whitlock_client_Appointment_2V] , edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_56] = [com_google_gwt_user_client_rpc_core_java_lang_Boolean_1CustomFieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_lang_Boolean_2, com_google_gwt_user_client_rpc_core_java_lang_Boolean_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_lang_Boolean_2V] , edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_57] = [com_google_gwt_user_client_rpc_core_java_lang_String_1CustomFieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_lang_String_2, com_google_gwt_user_client_rpc_core_java_lang_String_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_lang_String_2V, com_google_gwt_user_client_rpc_core_java_lang_String_1CustomFieldSerializer_serialize__Lcom_google_gwt_user_client_rpc_SerializationStreamWriter_2Ljava_lang_String_2V] , edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_58] = [com_google_gwt_user_client_rpc_core_java_util_ArrayList_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_ArrayList_2, com_google_gwt_user_client_rpc_core_java_util_ArrayList_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_ArrayList_2V] , edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_59] = [com_google_gwt_user_client_rpc_core_java_util_Arrays$ArrayList_1CustomFieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_List_2, com_google_gwt_user_client_rpc_core_java_util_Arrays$ArrayList_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_List_2V] , edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_60] = [com_google_gwt_user_client_rpc_core_java_util_Collections$EmptyList_1CustomFieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_List_2, com_google_gwt_user_client_rpc_core_java_util_Collections$EmptyList_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_List_2V] , edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_61] = [com_google_gwt_user_client_rpc_core_java_util_Collections$EmptySet_1CustomFieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Set_2, com_google_gwt_user_client_rpc_core_java_util_Collections$EmptySet_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Set_2V] , edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_62] = [com_google_gwt_user_client_rpc_core_java_util_Collections$SingletonList_1CustomFieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_List_2, com_google_gwt_user_client_rpc_core_java_util_Collections$SingletonList_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_List_2V] , edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_63] = [com_google_gwt_user_client_rpc_core_java_util_HashSet_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_HashSet_2, com_google_gwt_user_client_rpc_core_java_util_HashSet_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_HashSet_2V] , edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_64] = [com_google_gwt_user_client_rpc_core_java_util_LinkedHashSet_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_LinkedHashSet_2, com_google_gwt_user_client_rpc_core_java_util_LinkedHashSet_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_LinkedHashSet_2V] , edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_65] = [com_google_gwt_user_client_rpc_core_java_util_LinkedList_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_LinkedList_2, com_google_gwt_user_client_rpc_core_java_util_LinkedList_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_LinkedList_2V] , edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_66] = [com_google_gwt_user_client_rpc_core_java_util_Stack_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Stack_2, com_google_gwt_user_client_rpc_core_java_util_Stack_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Stack_2V] , edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_67] = [com_google_gwt_user_client_rpc_core_java_util_TreeMap_1CustomFieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_TreeMap_2, com_google_gwt_user_client_rpc_core_java_util_TreeMap_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_TreeMap_2V] , edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_68] = [com_google_gwt_user_client_rpc_core_java_util_TreeSet_1CustomFieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_TreeSet_2, com_google_gwt_user_client_rpc_core_java_util_TreeSet_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_TreeSet_2V] , edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0[$intern_69] = [com_google_gwt_user_client_rpc_core_java_util_Vector_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Vector_2, com_google_gwt_user_client_rpc_core_java_util_Vector_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ljava_util_Vector_2V] , edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadMethodsNative__Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2_result_0);
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0 = [];
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1IncompatibleRemoteServiceException_12_1classLit)] = $intern_50;
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1RpcTokenException_12_1classLit)] = $intern_51;
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1XsrfToken_12_1classLit)] = $intern_52;
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Ledu_1pdx_1cs410J_1whitlock_1client_1Appointment_12_1classLit)] = $intern_53;
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Ledu_1pdx_1cs410J_1whitlock_1client_1AppointmentBook_12_1classLit)] = $intern_54;
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ledu_1pdx_1cs410J_1whitlock_1client_1Appointment_12_1classLit, 1))] = $intern_55;
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Boolean_12_1classLit)] = $intern_56;
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit)] = $intern_57;
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ArrayList_12_1classLit)] = $intern_58;
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Arrays$ArrayList_12_1classLit)] = $intern_59;
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$EmptyList_12_1classLit)] = $intern_60;
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$EmptySet_12_1classLit)] = $intern_61;
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$SingletonList_12_1classLit)] = $intern_62;
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1HashSet_12_1classLit)] = $intern_63;
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1LinkedHashSet_12_1classLit)] = $intern_64;
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1LinkedList_12_1classLit)] = $intern_65;
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Stack_12_1classLit)] = $intern_66;
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1TreeMap_12_1classLit)] = $intern_67;
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1TreeSet_12_1classLit)] = $intern_68;
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_loadSignaturesNative__Lcom_google_gwt_core_client_JsArrayString_2_result_0[com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Vector_12_1classLit)] = $intern_69;
}

function edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_AppointmentBookService_1TypeSerializer__V(){
  edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_$clinit__V();
  com_google_gwt_user_client_rpc_impl_SerializerBase_SerializerBase__Ljava_util_Map_2Lcom_google_gwt_user_client_rpc_impl_SerializerBase$MethodMap_2Ljava_util_Map_2Lcom_google_gwt_core_client_JsArrayString_2V.call(this, edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_methodMapNative);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(166, 165, {}, edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_AppointmentBookService_1TypeSerializer__V);
var edu_pdx_cs410J_whitlock_client_AppointmentBookService_1TypeSerializer_methodMapNative;
var com_google_gwt_lang_ClassLiteralHolder_Ledu_1pdx_1cs410J_1whitlock_1client_1AppointmentBookService_11TypeSerializer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'AppointmentBookService_TypeSerializer', 166);
function edu_pdx_cs410J_whitlock_client_AppointmentBook_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ledu_pdx_cs410J_whitlock_client_AppointmentBook_2V(streamReader, instance){
  edu_pdx_cs410J_whitlock_client_AppointmentBook_1FieldSerializer_setAppts__Ledu_pdx_cs410J_whitlock_client_AppointmentBook_2Ljava_util_Collection_2V(instance, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_$readObject__Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2Ljava_lang_Object_2(streamReader), 11));
}

function edu_pdx_cs410J_whitlock_client_AppointmentBook_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ledu_pdx_cs410J_whitlock_client_AppointmentBook_2(streamReader){
  return new edu_pdx_cs410J_whitlock_client_AppointmentBook_AppointmentBook__V;
}

function edu_pdx_cs410J_whitlock_client_AppointmentBook_1FieldSerializer_setAppts__Ledu_pdx_cs410J_whitlock_client_AppointmentBook_2Ljava_util_Collection_2V(instance, value_0){
  instance.edu_pdx_cs410J_whitlock_client_AppointmentBook_appts = value_0;
}

function edu_pdx_cs410J_whitlock_client_Appointment_1Array_1Rank_11_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2_3Ledu_pdx_cs410J_whitlock_client_Appointment_2V(streamReader, instance){
  com_google_gwt_user_client_rpc_core_java_lang_Object_1Array_1CustomFieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2_3Ljava_lang_Object_2V(streamReader, instance);
}

function edu_pdx_cs410J_whitlock_client_Appointment_1Array_1Rank_11_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2_3Ledu_pdx_cs410J_whitlock_client_Appointment_2(streamReader){
  var size_0;
  size_0 = com_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_$readInt__Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2I(streamReader);
  return com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ledu_1pdx_1cs410J_1whitlock_1client_1Appointment_12_1classLit, $intern_6, 57, size_0, 0, 1);
}

function edu_pdx_cs410J_whitlock_client_Appointment_1FieldSerializer_deserialize__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ledu_pdx_cs410J_whitlock_client_Appointment_2V(streamReader, instance){
}

function edu_pdx_cs410J_whitlock_client_Appointment_1FieldSerializer_instantiate__Lcom_google_gwt_user_client_rpc_SerializationStreamReader_2Ledu_pdx_cs410J_whitlock_client_Appointment_2(streamReader){
  return new edu_pdx_cs410J_whitlock_client_Appointment_Appointment__V;
}

function java_lang_AbstractStringBuilder_AbstractStringBuilder__Ljava_lang_String_2V(string){
  this.java_lang_AbstractStringBuilder_string = string;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(62, 1, {});
_.toString__Ljava_lang_String_2$ = function java_lang_AbstractStringBuilder_toString__Ljava_lang_String_2(){
  return this.java_lang_AbstractStringBuilder_string;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1AbstractStringBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'AbstractStringBuilder', 62);
function java_lang_ArithmeticException_ArithmeticException__Ljava_lang_String_2V(){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, 'divide by zero');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(107, 10, $intern_3, java_lang_ArithmeticException_ArithmeticException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ArithmeticException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'ArithmeticException', 107);
function java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(43, 10, $intern_3, java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V, java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IndexOutOfBoundsException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'IndexOutOfBoundsException', 43);
function java_lang_ArrayIndexOutOfBoundsException_ArrayIndexOutOfBoundsException__V(){
  java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(206, 43, $intern_3, java_lang_ArrayIndexOutOfBoundsException_ArrayIndexOutOfBoundsException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ArrayIndexOutOfBoundsException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'ArrayIndexOutOfBoundsException', 206);
function java_lang_ArrayStoreException_ArrayStoreException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(52, 10, $intern_3, java_lang_ArrayStoreException_ArrayStoreException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ArrayStoreException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'ArrayStoreException', 52);
function java_lang_Boolean_$clinit__V(){
  java_lang_Boolean_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_lang_Boolean_FALSE = new java_lang_Boolean_Boolean__ZV(false);
  java_lang_Boolean_TRUE = new java_lang_Boolean_Boolean__ZV(true);
}

function java_lang_Boolean_$compareTo__Ljava_lang_Boolean_2Ljava_lang_Boolean_2I(this$static, b){
  return java_lang_Boolean_compare__ZZI(this$static.java_lang_Boolean_value, b.java_lang_Boolean_value);
}

function java_lang_Boolean_Boolean__ZV(value_0){
  this.java_lang_Boolean_value = value_0;
}

function java_lang_Boolean_compare__ZZI(x_0, y_0){
  return x_0 == y_0?0:x_0?1:-1;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(40, 1, {3:1, 40:1, 7:1}, java_lang_Boolean_Boolean__ZV);
_.compareTo__Ljava_lang_Object_2I = function java_lang_Boolean_compareTo__Ljava_lang_Object_2I(b){
  return java_lang_Boolean_$compareTo__Ljava_lang_Boolean_2Ljava_lang_Boolean_2I(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(b, 40));
}
;
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Boolean_equals__Ljava_lang_Object_2Z(o){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 40) && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 40).java_lang_Boolean_value == this.java_lang_Boolean_value;
}
;
_.hashCode__I$ = function java_lang_Boolean_hashCode__I(){
  return this.java_lang_Boolean_value?1231:1237;
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Boolean_toString__Ljava_lang_String_2(){
  return '' + this.java_lang_Boolean_value;
}
;
_.java_lang_Boolean_value = false;
var java_lang_Boolean_FALSE, java_lang_Boolean_TRUE;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Boolean_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Boolean', 40);
function java_lang_Character_digit__CII(c){
  if (c >= 48 && c < 58) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function java_lang_ClassCastException_ClassCastException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(39, 10, $intern_3, java_lang_ClassCastException_ClassCastException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ClassCastException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'ClassCastException', 39);
function java_lang_Number__1_1parseAndValidateInt__Ljava_lang_String_2IIII(s){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V('null');
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (s.charCodeAt(0) == 45 || s.charCodeAt(0) == 43)?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (java_lang_Character_digit__CII(s.charCodeAt(i)) == -1) {
      throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_70 + s + '"');
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < -2147483648;
  if (isNaN(toReturn)) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_70 + s + '"');
  }
   else if (isTooLow || toReturn > 2147483647) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_70 + s + '"');
  }
  return toReturn;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(76, 1, {3:1, 76:1});
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Number_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Number', 76);
function java_lang_IllegalArgumentException_IllegalArgumentException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(35, 10, $intern_3, java_lang_IllegalArgumentException_IllegalArgumentException__V, java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IllegalArgumentException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'IllegalArgumentException', 35);
function java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V(s){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, s);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(48, 10, $intern_3, java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IllegalStateException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'IllegalStateException', 48);
function java_lang_Integer_$compareTo__Ljava_lang_Integer_2Ljava_lang_Integer_2I(this$static, b){
  return java_lang_Integer_compare__III(this$static.java_lang_Integer_value, b.java_lang_Integer_value);
}

function java_lang_Integer_Integer__IV(value_0){
  this.java_lang_Integer_value = value_0;
}

function java_lang_Integer_compare__III(x_0, y_0){
  return x_0 < y_0?-1:x_0 > y_0?1:0;
}

function java_lang_Integer_numberOfLeadingZeros__II(i){
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function java_lang_Integer_numberOfTrailingZeros__II(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function java_lang_Integer_valueOf__ILjava_lang_Integer_2(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = (java_lang_Integer$BoxedValues_$clinit__V() , java_lang_Integer$BoxedValues_boxedValues)[rebase];
    !result && (result = java_lang_Integer$BoxedValues_boxedValues[rebase] = new java_lang_Integer_Integer__IV(i));
    return result;
  }
  return new java_lang_Integer_Integer__IV(i);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(31, 76, {3:1, 7:1, 31:1, 76:1}, java_lang_Integer_Integer__IV);
_.compareTo__Ljava_lang_Object_2I = function java_lang_Integer_compareTo__Ljava_lang_Object_2I(b){
  return java_lang_Integer_$compareTo__Ljava_lang_Integer_2Ljava_lang_Integer_2I(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(b, 31));
}
;
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Integer_equals__Ljava_lang_Object_2Z(o){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 31) && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 31).java_lang_Integer_value == this.java_lang_Integer_value;
}
;
_.hashCode__I$ = function java_lang_Integer_hashCode__I(){
  return this.java_lang_Integer_value;
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Integer_toString__Ljava_lang_String_2(){
  return '' + this.java_lang_Integer_value;
}
;
_.java_lang_Integer_value = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Integer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Integer', 31);
function java_lang_Integer$BoxedValues_$clinit__V(){
  java_lang_Integer$BoxedValues_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_lang_Integer$BoxedValues_boxedValues = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Integer_12_1classLit, $intern_6, 31, 256, 0, 1);
}

var java_lang_Integer$BoxedValues_boxedValues;
function java_lang_Long_compare__JJI(x_0, y_0){
  var com_google_gwt_lang_LongLib_gt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z_signa_0, com_google_gwt_lang_LongLib_gt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z_signb_0;
  return com_google_gwt_lang_LongLib_lt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(x_0, y_0)?-1:(com_google_gwt_lang_LongLib_gt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z_signa_0 = x_0.h >> 19 , com_google_gwt_lang_LongLib_gt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z_signb_0 = y_0.h >> 19 , com_google_gwt_lang_LongLib_gt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z_signa_0 == 0?com_google_gwt_lang_LongLib_gt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z_signb_0 != 0 || x_0.h > y_0.h || x_0.h == y_0.h && x_0.m > y_0.m || x_0.h == y_0.h && x_0.m == y_0.m && x_0.l > y_0.l:!(com_google_gwt_lang_LongLib_gt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z_signb_0 == 0 || x_0.h < y_0.h || x_0.h == y_0.h && x_0.m < y_0.m || x_0.h == y_0.h && x_0.m == y_0.m && x_0.l <= y_0.l))?1:0;
}

function java_lang_NullPointerException_NullPointerException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(34, 10, $intern_3, java_lang_NullPointerException_NullPointerException__V, java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1NullPointerException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'NullPointerException', 34);
function java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V(message){
  java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(58, 35, $intern_3, java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1NumberFormatException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'NumberFormatException', 58);
function java_lang_String_$charAt__Ljava_lang_String_2IC(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static, other){
  return this$static === other;
}

function java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z(this$static, other){
  if (other == null) {
    return false;
  }
  if (this$static == other) {
    return true;
  }
  return this$static.length == other.length && this$static.toLowerCase() == other.toLowerCase();
}

function java_lang_String_$indexOf__Ljava_lang_String_2Ljava_lang_String_2I(this$static, str){
  return this$static.indexOf(str);
}

function java_lang_String_$substring__Ljava_lang_String_2IILjava_lang_String_2(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  return this$static.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, '');
}

function java_lang_String__1_1substr__Ljava_lang_String_2IILjava_lang_String_2(str, beginIndex, len){
  return str.substr(beginIndex, len);
}

function java_lang_String__1_1valueOf___3CIILjava_lang_String_2(x_0, start_0, end){
  var s = '';
  for (var batchStart = start_0; batchStart < end;) {
    var batchEnd = Math.min(batchStart + 10000, end);
    s += String.fromCharCode.apply(null, x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

function java_lang_String_compareTo__Ljava_lang_String_2Ljava_lang_String_2I(thisStr, otherStr){
  if (thisStr == otherStr) {
    return 0;
  }
  return thisStr < otherStr?-1:1;
}

function java_lang_String_compareTo_1Ljava_1lang_1Object_1_1I_1_1devirtual$__Ljava_lang_Comparable_2Ljava_lang_Object_2I(this$static, other){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(this$static)?java_lang_String_compareTo__Ljava_lang_String_2Ljava_lang_String_2I(this$static, com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(other)):this$static.compareTo__Ljava_lang_Object_2I(other);
}

function java_lang_String_fromCodePoint__ILjava_lang_String_2(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_32) {
    hiSurrogate = 55296 + (codePoint - $intern_32 >> 10 & 1023) & $intern_5;
    loSurrogate = 56320 + (codePoint - $intern_32 & 1023) & $intern_5;
    return java_lang_String_valueOf__CLjava_lang_String_2(hiSurrogate) + java_lang_String_valueOf__CLjava_lang_String_2(loSurrogate);
  }
   else {
    return String.fromCharCode(codePoint & $intern_5);
  }
}

function java_lang_String_valueOf__CLjava_lang_String_2(x_0){
  return String.fromCharCode(x_0);
}

function java_lang_String_valueOf___3CLjava_lang_String_2(x_0){
  return java_lang_String__1_1valueOf___3CIILjava_lang_String_2(x_0, 0, x_0.length);
}

var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'String', 2);
function java_lang_String$HashCache_$clinit__V(){
  java_lang_String$HashCache_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_lang_String$HashCache_back = {};
  java_lang_String$HashCache_front = {};
}

function java_lang_String$HashCache_compute__Ljava_lang_String_2I(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = ~~hashCode;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + java_lang_String_$charAt__Ljava_lang_String_2IC(str, i++);
  }
  hashCode = ~~hashCode;
  return hashCode;
}

function java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(str){
  java_lang_String$HashCache_$clinit__V();
  var key = ':' + str;
  var result = java_lang_String$HashCache_front[key];
  if (result != null) {
    return result;
  }
  result = java_lang_String$HashCache_back[key];
  result == null && (result = java_lang_String$HashCache_compute__Ljava_lang_String_2I(str));
  java_lang_String$HashCache_increment__V();
  return java_lang_String$HashCache_front[key] = result;
}

function java_lang_String$HashCache_increment__V(){
  if (java_lang_String$HashCache_count == 256) {
    java_lang_String$HashCache_back = java_lang_String$HashCache_front;
    java_lang_String$HashCache_front = {};
    java_lang_String$HashCache_count = 0;
  }
  ++java_lang_String$HashCache_count;
}

var java_lang_String$HashCache_back, java_lang_String$HashCache_count = 0, java_lang_String$HashCache_front;
function java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(this$static, x_0){
  this$static.java_lang_AbstractStringBuilder_string += x_0;
  return this$static;
}

function java_lang_StringBuilder_StringBuilder__V(){
  java_lang_AbstractStringBuilder_AbstractStringBuilder__Ljava_lang_String_2V.call(this, '');
}

function java_lang_StringBuilder_StringBuilder__IV(){
  java_lang_AbstractStringBuilder_AbstractStringBuilder__Ljava_lang_String_2V.call(this, '');
}

function java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V(s){
  java_lang_AbstractStringBuilder_AbstractStringBuilder__Ljava_lang_String_2V.call(this, s);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(28, 62, {250:1}, java_lang_StringBuilder_StringBuilder__V, java_lang_StringBuilder_StringBuilder__IV, java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1StringBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'StringBuilder', 28);
function java_lang_System_identityHashCode__Ljava_lang_Object_2I(o){
  return o == null?0:com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(o)?java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(o):com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(o);
}

function java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(65, 10, $intern_3, java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1UnsupportedOperationException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'UnsupportedOperationException', 65);
function java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_lang_Object_2ZZ(this$static, o){
  var e, iter;
  for (iter = this$static.iterator__Ljava_util_Iterator_2(); iter.hasNext__Z();) {
    e = iter.next__Ljava_lang_Object_2();
    if (com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(o) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(e) || o != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(o, e)) {
      return true;
    }
  }
  return false;
}

function java_util_AbstractCollection_$containsAll__Ljava_util_AbstractCollection_2Ljava_util_Collection_2Z(this$static, c){
  var e, e$iterator;
  com_google_gwt_core_shared_impl_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(c);
  for (e$iterator = c.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    if (!this$static.contains__Ljava_lang_Object_2Z(e)) {
      return false;
    }
  }
  return true;
}

function java_util_AbstractCollection_$toString__Ljava_util_AbstractCollection_2Ljava_lang_String_2(this$static){
  var comma, e, e$iterator, sb;
  sb = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V('[');
  comma = false;
  for (e$iterator = this$static.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    comma?(sb.java_lang_AbstractStringBuilder_string += ', ' , sb):(comma = true);
    sb.java_lang_AbstractStringBuilder_string += e === this$static?'(this Collection)':'' + e;
  }
  sb.java_lang_AbstractStringBuilder_string += ']';
  return sb.java_lang_AbstractStringBuilder_string;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(230, 1, {11:1});
_.add__Ljava_lang_Object_2Z = function java_util_AbstractCollection_add__Ljava_lang_Object_2Z(o){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Add not supported on this collection');
}
;
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractCollection_contains__Ljava_lang_Object_2Z(o){
  return java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_lang_Object_2ZZ(this, o);
}
;
_.toString__Ljava_lang_String_2$ = function java_util_AbstractCollection_toString__Ljava_lang_String_2(){
  return java_util_AbstractCollection_$toString__Ljava_util_AbstractCollection_2Ljava_lang_String_2(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractCollection_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractCollection', 230);
function java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey__Ljava_lang_Object_2();
  value_0 = entry.getValue__Ljava_lang_Object_2();
  ourValue = this$static.get__Ljava_lang_Object_2Ljava_lang_Object_2(key);
  if (!(com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value_0) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(ourValue) || value_0 != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey__Ljava_lang_Object_2Z(key)) {
    return false;
  }
  return true;
}

function java_util_AbstractMap_$implFindEntry__Ljava_util_AbstractMap_2Ljava_lang_Object_2ZLjava_util_Map$Entry_2(this$static, key){
  var entry, iter, k;
  for (iter = this$static.entrySet__Ljava_util_Set_2().iterator__Ljava_util_Iterator_2(); iter.hasNext__Z();) {
    entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(iter.next__Ljava_lang_Object_2(), 8);
    k = entry.getKey__Ljava_lang_Object_2();
    if (com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(key) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(k) || key != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(key, k)) {
      return entry;
    }
  }
  return null;
}

function java_util_AbstractMap_$toString__Ljava_util_AbstractMap_2Ljava_lang_Object_2Ljava_lang_String_2(this$static, o){
  return o === this$static?'(this Map)':'' + o;
}

function java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(entry){
  return !entry?null:entry.getValue__Ljava_lang_Object_2();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(229, 1, {23:1});
_.package_private$java_util_AbstractMap$containsEntry__Ljava_util_Map$Entry_2Z = function java_util_AbstractMap_containsEntry__Ljava_util_Map$Entry_2Z(entry){
  return java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this, entry);
}
;
_.containsKey__Ljava_lang_Object_2Z = function java_util_AbstractMap_containsKey__Ljava_lang_Object_2Z(key){
  return !!java_util_AbstractMap_$implFindEntry__Ljava_util_AbstractMap_2Ljava_lang_Object_2ZLjava_util_Map$Entry_2(this, key);
}
;
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractMap_equals__Ljava_lang_Object_2Z(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(obj, 23)) {
    return false;
  }
  otherMap = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(obj, 23);
  if (this.size__I() != otherMap.size__I()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet__Ljava_util_Set_2().iterator__Ljava_util_Iterator_2(); entry$iterator.hasNext__Z();) {
    entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(entry$iterator.next__Ljava_lang_Object_2(), 8);
    if (!this.package_private$java_util_AbstractMap$containsEntry__Ljava_util_Map$Entry_2Z(entry)) {
      return false;
    }
  }
  return true;
}
;
_.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractMap_get__Ljava_lang_Object_2Ljava_lang_Object_2(key){
  return java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_AbstractMap_$implFindEntry__Ljava_util_AbstractMap_2Ljava_lang_Object_2ZLjava_util_Map$Entry_2(this, key));
}
;
_.hashCode__I$ = function java_util_AbstractMap_hashCode__I(){
  return java_util_Collections_hashCode__Ljava_lang_Iterable_2I(this.entrySet__Ljava_util_Set_2());
}
;
_.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractMap_put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Put not supported on this map');
}
;
_.size__I = function java_util_AbstractMap_size__I(){
  return this.entrySet__Ljava_util_Set_2().size__I();
}
;
_.toString__Ljava_lang_String_2$ = function java_util_AbstractMap_toString__Ljava_lang_String_2(){
  var comma, entry, entry$iterator, sb;
  sb = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V('{');
  comma = false;
  for (entry$iterator = this.entrySet__Ljava_util_Set_2().iterator__Ljava_util_Iterator_2(); entry$iterator.hasNext__Z();) {
    entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(entry$iterator.next__Ljava_lang_Object_2(), 8);
    comma?(sb.java_lang_AbstractStringBuilder_string += ', ' , sb):(comma = true);
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, java_util_AbstractMap_$toString__Ljava_util_AbstractMap_2Ljava_lang_Object_2Ljava_lang_String_2(this, entry.getKey__Ljava_lang_Object_2()));
    sb.java_lang_AbstractStringBuilder_string += '=';
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, java_util_AbstractMap_$toString__Ljava_util_AbstractMap_2Ljava_lang_Object_2Ljava_lang_String_2(this, entry.getValue__Ljava_lang_Object_2()));
  }
  sb.java_lang_AbstractStringBuilder_string += '}';
  return sb.java_lang_AbstractStringBuilder_string;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractMap', 229);
function java_util_AbstractHashMap_$elementAdded__Ljava_util_AbstractHashMap_2V(this$static){
  ++this$static.java_util_AbstractHashMap_size;
  java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static);
}

function java_util_AbstractHashMap_$elementRemoved__Ljava_util_AbstractHashMap_2V(this$static){
  --this$static.java_util_AbstractHashMap_size;
  java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static);
}

function java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  return key == null?java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, null)):this$static.java_util_AbstractHashMap_stringMap.get__Ljava_lang_String_2Ljava_lang_Object_2(key);
}

function java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this$static, key){
  return key == null?!!java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, null):!(this$static.java_util_AbstractHashMap_stringMap.get__Ljava_lang_String_2Ljava_lang_Object_2(key) === undefined);
}

function java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(this$static){
  java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_$clinit__V();
  this$static.java_util_AbstractHashMap_hashCodeMap = java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_delegate.createJsHashCodeMap__Ljava_util_InternalJsHashCodeMap_2();
  this$static.java_util_AbstractHashMap_hashCodeMap.java_util_InternalJsHashCodeMap_host = this$static;
  this$static.java_util_AbstractHashMap_stringMap = java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_delegate.createJsStringMap__Ljava_util_InternalJsStringMap_2();
  this$static.java_util_AbstractHashMap_stringMap.java_util_InternalJsStringMap_host = this$static;
  this$static.java_util_AbstractHashMap_size = 0;
  java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static);
}

function java_util_AbstractHashMap_AbstractHashMap__V(){
  java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(78, 229, {23:1});
_.clear__V = function java_util_AbstractHashMap_clear__V(){
  java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(this);
}
;
_.containsKey__Ljava_lang_Object_2Z = function java_util_AbstractHashMap_containsKey__Ljava_lang_Object_2Z(key){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this, key):!!java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this.java_util_AbstractHashMap_hashCodeMap, key);
}
;
_.entrySet__Ljava_util_Set_2 = function java_util_AbstractHashMap_entrySet__Ljava_util_Set_2(){
  return new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this);
}
;
_.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractHashMap_get__Ljava_lang_Object_2Ljava_lang_Object_2(key){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this, key):java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this.java_util_AbstractHashMap_hashCodeMap, key));
}
;
_.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractHashMap_put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(key)?key == null?java_util_InternalJsHashCodeMap_$put__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_AbstractHashMap_hashCodeMap, null, value_0):this.java_util_AbstractHashMap_stringMap.put__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0):java_util_InternalJsHashCodeMap_$put__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_AbstractHashMap_hashCodeMap, key, value_0);
}
;
_.remove__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractHashMap_remove__Ljava_lang_Object_2Ljava_lang_Object_2(key){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(key)?key == null?java_util_InternalJsHashCodeMap_$remove__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_AbstractHashMap_hashCodeMap, null):this.java_util_AbstractHashMap_stringMap.remove__Ljava_lang_String_2Ljava_lang_Object_2(key):java_util_InternalJsHashCodeMap_$remove__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_AbstractHashMap_hashCodeMap, key);
}
;
_.size__I = function java_util_AbstractHashMap_size__I(){
  return this.java_util_AbstractHashMap_size;
}
;
_.java_util_AbstractHashMap_size = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractHashMap', 78);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(231, 230, $intern_72);
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractSet_equals__Ljava_lang_Object_2Z(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 24)) {
    return false;
  }
  other = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 24);
  if (other.size__I() != this.size__I()) {
    return false;
  }
  return java_util_AbstractCollection_$containsAll__Ljava_util_AbstractCollection_2Ljava_util_Collection_2Z(this, other);
}
;
_.hashCode__I$ = function java_util_AbstractSet_hashCode__I(){
  return java_util_Collections_hashCode__Ljava_lang_Iterable_2I(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractSet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractSet', 231);
function java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this$static, o){
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 8)) {
    return java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this$static.java_util_AbstractHashMap$EntrySet_this$01, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 8));
  }
  return false;
}

function java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this$0){
  this.java_util_AbstractHashMap$EntrySet_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(79, 231, $intern_72, java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V);
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractHashMap$EntrySet_contains__Ljava_lang_Object_2Z(o){
  return java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this, o);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractHashMap$EntrySet_iterator__Ljava_util_Iterator_2(){
  return new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V(this.java_util_AbstractHashMap$EntrySet_this$01);
}
;
_.size__I = function java_util_AbstractHashMap$EntrySet_size__I(){
  return this.java_util_AbstractHashMap$EntrySet_this$01.size__I();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$EntrySet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractHashMap/EntrySet', 79);
function java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this$static){
  if (this$static.java_util_AbstractHashMap$EntrySetIterator_current.hasNext__Z()) {
    return true;
  }
  if (this$static.java_util_AbstractHashMap$EntrySetIterator_current != this$static.java_util_AbstractHashMap$EntrySetIterator_stringMapEntries) {
    return false;
  }
  this$static.java_util_AbstractHashMap$EntrySetIterator_current = this$static.java_util_AbstractHashMap$EntrySetIterator_this$01.java_util_AbstractHashMap_hashCodeMap.entries__Ljava_util_Iterator_2();
  return this$static.java_util_AbstractHashMap$EntrySetIterator_current.hasNext__Z();
}

function java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V(this$0){
  this.java_util_AbstractHashMap$EntrySetIterator_this$01 = this$0;
  this.java_util_AbstractHashMap$EntrySetIterator_stringMapEntries = this.java_util_AbstractHashMap$EntrySetIterator_this$01.java_util_AbstractHashMap_stringMap.entries__Ljava_util_Iterator_2();
  this.java_util_AbstractHashMap$EntrySetIterator_current = this.java_util_AbstractHashMap$EntrySetIterator_stringMapEntries;
  java_util_ConcurrentModificationDetector_setModCount__Ljava_lang_Object_2IV(this, this$0._gwt_modCount);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(80, 1, {}, java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V);
_.hasNext__Z = function java_util_AbstractHashMap$EntrySetIterator_hasNext__Z(){
  return java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this);
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractHashMap$EntrySetIterator_next__Ljava_lang_Object_2(){
  return java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(this.java_util_AbstractHashMap$EntrySetIterator_this$01, this) , com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this)) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this.java_util_AbstractHashMap$EntrySetIterator_current.next__Ljava_lang_Object_2(), 8);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$EntrySetIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractHashMap/EntrySetIterator', 80);
function java_util_AbstractList_$indexOf__Ljava_util_AbstractList_2Ljava_lang_Object_2I(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.java_util_Arrays$ArrayList_array.length; i < n; ++i) {
    if (java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(toFind, (com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(i, this$static.java_util_Arrays$ArrayList_array.length) , this$static.java_util_Arrays$ArrayList_array[i]))) {
      return i;
    }
  }
  return -1;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(234, 230, $intern_73);
_.add__ILjava_lang_Object_2V = function java_util_AbstractList_add__ILjava_lang_Object_2V(index_0, element){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Add not supported on this list');
}
;
_.add__Ljava_lang_Object_2Z = function java_util_AbstractList_add__Ljava_lang_Object_2Z(obj){
  this.add__ILjava_lang_Object_2V(this.size__I(), obj);
  return true;
}
;
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractList_equals__Ljava_lang_Object_2Z(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 18)) {
    return false;
  }
  other = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 18);
  if (this.size__I() != other.size__I()) {
    return false;
  }
  iterOther = other.iterator__Ljava_util_Iterator_2();
  for (elem$iterator = this.iterator__Ljava_util_Iterator_2(); elem$iterator.hasNext__Z();) {
    elem = elem$iterator.next__Ljava_lang_Object_2();
    elemOther = iterOther.next__Ljava_lang_Object_2();
    if (!(com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(elem) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(elemOther) || elem != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode__I$ = function java_util_AbstractList_hashCode__I(){
  return java_util_Collections_hashCode__Ljava_util_List_2I(this);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractList_iterator__Ljava_util_Iterator_2(){
  return new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this);
}
;
_.listIterator__Ljava_util_ListIterator_2 = function java_util_AbstractList_listIterator__Ljava_util_ListIterator_2(){
  return this.listIterator__ILjava_util_ListIterator_2(0);
}
;
_.listIterator__ILjava_util_ListIterator_2 = function java_util_AbstractList_listIterator__ILjava_util_ListIterator_2(from){
  return new java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this, from);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractList', 234);
function java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$0){
  this.java_util_AbstractList$IteratorImpl_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(46, 1, {}, java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V);
_.hasNext__Z = function java_util_AbstractList$IteratorImpl_hasNext__Z(){
  return this.java_util_AbstractList$IteratorImpl_i < this.java_util_AbstractList$IteratorImpl_this$01.size__I();
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractList$IteratorImpl_next__Ljava_lang_Object_2(){
  return com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(this.java_util_AbstractList$IteratorImpl_i < this.java_util_AbstractList$IteratorImpl_this$01.size__I()) , this.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(this.java_util_AbstractList$IteratorImpl_i++);
}
;
_.java_util_AbstractList$IteratorImpl_i = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList$IteratorImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractList/IteratorImpl', 46);
function java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this$0, start_0){
  this.java_util_AbstractList$ListIteratorImpl_this$01 = this$0;
  java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V.call(this, this$0);
  com_google_gwt_core_shared_impl_InternalPreconditions_checkPositionIndex__IIV(start_0, this$0.size__I());
  this.java_util_AbstractList$IteratorImpl_i = start_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(89, 46, {}, java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV);
_.hasPrevious__Z = function java_util_AbstractList$ListIteratorImpl_hasPrevious__Z(){
  return this.java_util_AbstractList$IteratorImpl_i > 0;
}
;
_.previous__Ljava_lang_Object_2 = function java_util_AbstractList$ListIteratorImpl_previous__Ljava_lang_Object_2(){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(this.java_util_AbstractList$IteratorImpl_i > 0);
  return this.java_util_AbstractList$ListIteratorImpl_this$01.get__ILjava_lang_Object_2(--this.java_util_AbstractList$IteratorImpl_i);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList$ListIteratorImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractList/ListIteratorImpl', 89);
function java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2(this$static){
  var outerIter;
  outerIter = this$static.java_util_AbstractMap$1_this$01.entrySet__Ljava_util_Set_2().iterator__Ljava_util_Iterator_2();
  return new java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V(outerIter);
}

function java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(this$0){
  this.java_util_AbstractMap$1_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(81, 231, $intern_72, java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V);
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractMap$1_contains__Ljava_lang_Object_2Z(key){
  return this.java_util_AbstractMap$1_this$01.containsKey__Ljava_lang_Object_2Z(key);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractMap$1_iterator__Ljava_util_Iterator_2(){
  return java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2(this);
}
;
_.size__I = function java_util_AbstractMap$1_size__I(){
  return this.java_util_AbstractMap$1_this$01.size__I();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractMap/1', 81);
function java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V(val$outerIter){
  this.java_util_AbstractMap$1$1_val$outerIter2 = val$outerIter;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(106, 1, {}, java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V);
_.hasNext__Z = function java_util_AbstractMap$1$1_hasNext__Z(){
  return this.java_util_AbstractMap$1$1_val$outerIter2.hasNext__Z();
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractMap$1$1_next__Ljava_lang_Object_2(){
  var entry;
  entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this.java_util_AbstractMap$1$1_val$outerIter2.next__Ljava_lang_Object_2(), 8);
  return entry.getKey__Ljava_lang_Object_2();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$1$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractMap/1/1', 106);
function java_util_AbstractMap$AbstractEntry_$setValue__Ljava_util_AbstractMap$AbstractEntry_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, value_0){
  var oldValue;
  oldValue = this$static.java_util_AbstractMap$AbstractEntry_value;
  this$static.java_util_AbstractMap$AbstractEntry_value = value_0;
  return oldValue;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(44, 1, {44:1, 8:1});
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractMap$AbstractEntry_equals__Ljava_lang_Object_2Z(other){
  var entry;
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 8)) {
    return false;
  }
  entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 8);
  return java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$AbstractEntry_key, entry.getKey__Ljava_lang_Object_2()) && java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$AbstractEntry_value, entry.getValue__Ljava_lang_Object_2());
}
;
_.getKey__Ljava_lang_Object_2 = function java_util_AbstractMap$AbstractEntry_getKey__Ljava_lang_Object_2(){
  return this.java_util_AbstractMap$AbstractEntry_key;
}
;
_.getValue__Ljava_lang_Object_2 = function java_util_AbstractMap$AbstractEntry_getValue__Ljava_lang_Object_2(){
  return this.java_util_AbstractMap$AbstractEntry_value;
}
;
_.hashCode__I$ = function java_util_AbstractMap$AbstractEntry_hashCode__I(){
  return java_util_Objects_hashCode__Ljava_lang_Object_2I(this.java_util_AbstractMap$AbstractEntry_key) ^ java_util_Objects_hashCode__Ljava_lang_Object_2I(this.java_util_AbstractMap$AbstractEntry_value);
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractMap$AbstractEntry_setValue__Ljava_lang_Object_2Ljava_lang_Object_2(value_0){
  return java_util_AbstractMap$AbstractEntry_$setValue__Ljava_util_AbstractMap$AbstractEntry_2Ljava_lang_Object_2Ljava_lang_Object_2(this, value_0);
}
;
_.toString__Ljava_lang_String_2$ = function java_util_AbstractMap$AbstractEntry_toString__Ljava_lang_String_2(){
  return this.java_util_AbstractMap$AbstractEntry_key + '=' + this.java_util_AbstractMap$AbstractEntry_value;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$AbstractEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractMap/AbstractEntry', 44);
function java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V(key, value_0){
  this.java_util_AbstractMap$AbstractEntry_key = key;
  this.java_util_AbstractMap$AbstractEntry_value = value_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(41, 44, {44:1, 41:1, 8:1}, java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$SimpleEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractMap/SimpleEntry', 41);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(235, 1, {8:1});
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractMapEntry_equals__Ljava_lang_Object_2Z(other){
  var entry;
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 8)) {
    return false;
  }
  entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 8);
  return java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.getKey__Ljava_lang_Object_2(), entry.getKey__Ljava_lang_Object_2()) && java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.getValue__Ljava_lang_Object_2(), entry.getValue__Ljava_lang_Object_2());
}
;
_.hashCode__I$ = function java_util_AbstractMapEntry_hashCode__I(){
  return java_util_Objects_hashCode__Ljava_lang_Object_2I(this.getKey__Ljava_lang_Object_2()) ^ java_util_Objects_hashCode__Ljava_lang_Object_2I(this.getValue__Ljava_lang_Object_2());
}
;
_.toString__Ljava_lang_String_2$ = function java_util_AbstractMapEntry_toString__Ljava_lang_String_2(){
  return this.getKey__Ljava_lang_Object_2() + '=' + this.getValue__Ljava_lang_Object_2();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMapEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractMapEntry', 235);
function java_util_AbstractNavigableMap_$containsEntry__Ljava_util_AbstractNavigableMap_2Ljava_util_Map$Entry_2Z(this$static, entry){
  var key, lookupEntry;
  key = entry.getKey__Ljava_lang_Object_2();
  lookupEntry = java_util_TreeMap_$getEntry__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static, key);
  return !!lookupEntry && java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(lookupEntry.java_util_AbstractMap$AbstractEntry_value, entry.getValue__Ljava_lang_Object_2());
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(245, 229, {23:1});
_.package_private$java_util_AbstractMap$containsEntry__Ljava_util_Map$Entry_2Z = function java_util_AbstractNavigableMap_containsEntry__Ljava_util_Map$Entry_2Z(entry){
  return java_util_AbstractNavigableMap_$containsEntry__Ljava_util_AbstractNavigableMap_2Ljava_util_Map$Entry_2Z(this, entry);
}
;
_.containsKey__Ljava_lang_Object_2Z = function java_util_AbstractNavigableMap_containsKey__Ljava_lang_Object_2Z(k){
  return !!java_util_TreeMap_$getEntry__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this, k);
}
;
_.entrySet__Ljava_util_Set_2 = function java_util_AbstractNavigableMap_entrySet__Ljava_util_Set_2(){
  return new java_util_AbstractNavigableMap$EntrySet_AbstractNavigableMap$EntrySet__Ljava_util_AbstractNavigableMap_2V(this);
}
;
_.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractNavigableMap_get__Ljava_lang_Object_2Ljava_lang_Object_2(k){
  return java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_TreeMap_$getEntry__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this, k));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractNavigableMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractNavigableMap', 245);
function java_util_AbstractNavigableMap$EntrySet_AbstractNavigableMap$EntrySet__Ljava_util_AbstractNavigableMap_2V(this$0){
  this.java_util_AbstractNavigableMap$EntrySet_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(99, 231, $intern_72, java_util_AbstractNavigableMap$EntrySet_AbstractNavigableMap$EntrySet__Ljava_util_AbstractNavigableMap_2V);
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractNavigableMap$EntrySet_contains__Ljava_lang_Object_2Z(o){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 8) && java_util_AbstractNavigableMap_$containsEntry__Ljava_util_AbstractNavigableMap_2Ljava_util_Map$Entry_2Z(this.java_util_AbstractNavigableMap$EntrySet_this$01, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 8));
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractNavigableMap$EntrySet_iterator__Ljava_util_Iterator_2(){
  return new java_util_TreeMap$EntryIterator_TreeMap$EntryIterator__Ljava_util_TreeMap_2V(this.java_util_AbstractNavigableMap$EntrySet_this$01);
}
;
_.size__I = function java_util_AbstractNavigableMap$EntrySet_size__I(){
  return this.java_util_AbstractNavigableMap$EntrySet_this$01.java_util_TreeMap_size;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractNavigableMap$EntrySet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractNavigableMap/EntrySet', 99);
function java_util_AbstractNavigableMap$NavigableKeySet_$iterator__Ljava_util_AbstractNavigableMap$NavigableKeySet_2Ljava_util_Iterator_2(this$static){
  var entryIterator;
  entryIterator = new java_util_TreeMap$EntryIterator_TreeMap$EntryIterator__Ljava_util_TreeMap_2V((new java_util_TreeMap$EntrySet_TreeMap$EntrySet__Ljava_util_TreeMap_2V(this$static.java_util_AbstractNavigableMap$NavigableKeySet_map)).java_util_AbstractNavigableMap$EntrySet_this$01);
  return new java_util_AbstractNavigableMap$NavigableKeySet$1_AbstractNavigableMap$NavigableKeySet$1__Ljava_util_AbstractNavigableMap$NavigableKeySet_2V(entryIterator);
}

function java_util_AbstractNavigableMap$NavigableKeySet_AbstractNavigableMap$NavigableKeySet__Ljava_util_NavigableMap_2V(map_0){
  this.java_util_AbstractNavigableMap$NavigableKeySet_map = map_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(197, 231, $intern_72, java_util_AbstractNavigableMap$NavigableKeySet_AbstractNavigableMap$NavigableKeySet__Ljava_util_NavigableMap_2V);
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractNavigableMap$NavigableKeySet_contains__Ljava_lang_Object_2Z(o){
  return !!java_util_TreeMap_$getEntry__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this.java_util_AbstractNavigableMap$NavigableKeySet_map, o);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractNavigableMap$NavigableKeySet_iterator__Ljava_util_Iterator_2(){
  return java_util_AbstractNavigableMap$NavigableKeySet_$iterator__Ljava_util_AbstractNavigableMap$NavigableKeySet_2Ljava_util_Iterator_2(this);
}
;
_.size__I = function java_util_AbstractNavigableMap$NavigableKeySet_size__I(){
  return this.java_util_AbstractNavigableMap$NavigableKeySet_map.java_util_TreeMap_size;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractNavigableMap$NavigableKeySet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractNavigableMap/NavigableKeySet', 197);
function java_util_AbstractNavigableMap$NavigableKeySet$1_AbstractNavigableMap$NavigableKeySet$1__Ljava_util_AbstractNavigableMap$NavigableKeySet_2V(val$entryIterator){
  this.java_util_AbstractNavigableMap$NavigableKeySet$1_val$entryIterator2 = val$entryIterator;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(198, 1, {}, java_util_AbstractNavigableMap$NavigableKeySet$1_AbstractNavigableMap$NavigableKeySet$1__Ljava_util_AbstractNavigableMap$NavigableKeySet_2V);
_.hasNext__Z = function java_util_AbstractNavigableMap$NavigableKeySet$1_hasNext__Z(){
  return this.java_util_AbstractNavigableMap$NavigableKeySet$1_val$entryIterator2.java_util_TreeMap$EntryIterator_iter.hasNext__Z();
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractNavigableMap$NavigableKeySet$1_next__Ljava_lang_Object_2(){
  var entry;
  entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this.java_util_AbstractNavigableMap$NavigableKeySet$1_val$entryIterator2.java_util_TreeMap$EntryIterator_iter.next__Ljava_lang_Object_2(), 8);
  return entry.getKey__Ljava_lang_Object_2();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractNavigableMap$NavigableKeySet$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractNavigableMap/NavigableKeySet/1', 198);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(244, 234, $intern_73);
_.add__ILjava_lang_Object_2V = function java_util_AbstractSequentialList_add__ILjava_lang_Object_2V(index_0, element){
  var iter;
  iter = java_util_LinkedList_$listIterator__Ljava_util_LinkedList_2ILjava_util_ListIterator_2(this, index_0);
  java_util_LinkedList_$addNode__Ljava_util_LinkedList_2Ljava_lang_Object_2Ljava_util_LinkedList$Node_2Ljava_util_LinkedList$Node_2V(iter.java_util_LinkedList$ListIteratorImpl_this$01, element, iter.java_util_LinkedList$ListIteratorImpl_currentNode.java_util_LinkedList$Node_prev, iter.java_util_LinkedList$ListIteratorImpl_currentNode);
  ++iter.java_util_LinkedList$ListIteratorImpl_currentIndex;
  iter.java_util_LinkedList$ListIteratorImpl_lastNode = null;
}
;
_.get__ILjava_lang_Object_2 = function java_util_AbstractSequentialList_get__ILjava_lang_Object_2(index_0){
  var iter;
  iter = java_util_LinkedList_$listIterator__Ljava_util_LinkedList_2ILjava_util_ListIterator_2(this, index_0);
  try {
    return com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(iter.java_util_LinkedList$ListIteratorImpl_currentNode != iter.java_util_LinkedList$ListIteratorImpl_this$01.java_util_LinkedList_tail) , iter.java_util_LinkedList$ListIteratorImpl_lastNode = iter.java_util_LinkedList$ListIteratorImpl_currentNode , iter.java_util_LinkedList$ListIteratorImpl_currentNode = iter.java_util_LinkedList$ListIteratorImpl_currentNode.java_util_LinkedList$Node_next , ++iter.java_util_LinkedList$ListIteratorImpl_currentIndex , iter.java_util_LinkedList$ListIteratorImpl_lastNode.java_util_LinkedList$Node_value;
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 36)) {
      throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V("Can't get element " + index_0);
    }
     else 
      throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractSequentialList_iterator__Ljava_util_Iterator_2(){
  return java_util_LinkedList_$listIterator__Ljava_util_LinkedList_2ILjava_util_ListIterator_2(this, 0);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractSequentialList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'AbstractSequentialList', 244);
function java_util_ArrayList_$add__Ljava_util_ArrayList_2ILjava_lang_Object_2V(this$static, index_0, o){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkPositionIndex__IIV(index_0, this$static.java_util_ArrayList_array.length);
  java_util_ArrayList_splice___3Ljava_lang_Object_2IILjava_lang_Object_2V(this$static.java_util_ArrayList_array, index_0, 0, o);
}

function java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static, o){
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_ArrayList_array, this$static.java_util_ArrayList_array.length, o);
  return true;
}

function java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static, index_0){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(index_0, this$static.java_util_ArrayList_array.length);
  return this$static.java_util_ArrayList_array[index_0];
}

function java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this$static, o, index_0){
  for (; index_0 < this$static.java_util_ArrayList_array.length; ++index_0) {
    if (java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(o, this$static.java_util_ArrayList_array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function java_util_ArrayList_$set__Ljava_util_ArrayList_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static, index_0, o){
  var previous;
  previous = (com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(index_0, this$static.java_util_ArrayList_array.length) , this$static.java_util_ArrayList_array[index_0]);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_ArrayList_array, index_0, o);
  return previous;
}

function java_util_ArrayList_ArrayList__V(){
  this.java_util_ArrayList_array = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, $intern_6, 1, 0, 3, 1);
}

function java_util_ArrayList_splice___3Ljava_lang_Object_2IILjava_lang_Object_2V(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(22, 234, $intern_74, java_util_ArrayList_ArrayList__V);
_.add__ILjava_lang_Object_2V = function java_util_ArrayList_add__ILjava_lang_Object_2V(index_0, o){
  java_util_ArrayList_$add__Ljava_util_ArrayList_2ILjava_lang_Object_2V(this, index_0, o);
}
;
_.add__Ljava_lang_Object_2Z = function java_util_ArrayList_add__Ljava_lang_Object_2Z(o){
  return java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this, o);
}
;
_.contains__Ljava_lang_Object_2Z = function java_util_ArrayList_contains__Ljava_lang_Object_2Z(o){
  return java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this, o, 0) != -1;
}
;
_.get__ILjava_lang_Object_2 = function java_util_ArrayList_get__ILjava_lang_Object_2(index_0){
  return java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this, index_0);
}
;
_.size__I = function java_util_ArrayList_size__I(){
  return this.java_util_ArrayList_array.length;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ArrayList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'ArrayList', 22);
function java_util_Arrays$ArrayList_Arrays$ArrayList___3Ljava_lang_Object_2V(array){
  this.java_util_Arrays$ArrayList_array = array;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(160, 234, $intern_74, java_util_Arrays$ArrayList_Arrays$ArrayList___3Ljava_lang_Object_2V);
_.contains__Ljava_lang_Object_2Z = function java_util_Arrays$ArrayList_contains__Ljava_lang_Object_2Z(o){
  return java_util_AbstractList_$indexOf__Ljava_util_AbstractList_2Ljava_lang_Object_2I(this, o) != -1;
}
;
_.get__ILjava_lang_Object_2 = function java_util_Arrays$ArrayList_get__ILjava_lang_Object_2(index_0){
  return com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(index_0, this.java_util_Arrays$ArrayList_array.length) , this.java_util_Arrays$ArrayList_array[index_0];
}
;
_.size__I = function java_util_Arrays$ArrayList_size__I(){
  return this.java_util_Arrays$ArrayList_array.length;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Arrays$ArrayList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'Arrays/ArrayList', 160);
function java_util_Collections_$clinit__V(){
  java_util_Collections_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_util_Collections_EMPTY_1LIST = new java_util_Collections$EmptyList_Collections$EmptyList__V;
  java_util_Collections_EMPTY_1SET = new java_util_Collections$EmptySet_Collections$EmptySet__V;
}

function java_util_Collections_hashCode__Ljava_lang_Iterable_2I(collection){
  java_util_Collections_$clinit__V();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    hashCode = hashCode + (e != null?java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function java_util_Collections_hashCode__Ljava_util_List_2I(list){
  java_util_Collections_$clinit__V();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    hashCode = 31 * hashCode + (e != null?java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

var java_util_Collections_EMPTY_1LIST, java_util_Collections_EMPTY_1SET;
function java_util_Collections$EmptyList_Collections$EmptyList__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(125, 234, $intern_74, java_util_Collections$EmptyList_Collections$EmptyList__V);
_.contains__Ljava_lang_Object_2Z = function java_util_Collections$EmptyList_contains__Ljava_lang_Object_2Z(object){
  return false;
}
;
_.get__ILjava_lang_Object_2 = function java_util_Collections$EmptyList_get__ILjava_lang_Object_2(location_0){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(location_0, 0);
  return null;
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_Collections$EmptyList_iterator__Ljava_util_Iterator_2(){
  return java_util_Collections_$clinit__V() , java_util_Collections$EmptyListIterator_$clinit__V() , java_util_Collections$EmptyListIterator_INSTANCE;
}
;
_.listIterator__Ljava_util_ListIterator_2 = function java_util_Collections$EmptyList_listIterator__Ljava_util_ListIterator_2(){
  return java_util_Collections_$clinit__V() , java_util_Collections$EmptyListIterator_$clinit__V() , java_util_Collections$EmptyListIterator_INSTANCE;
}
;
_.size__I = function java_util_Collections$EmptyList_size__I(){
  return 0;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$EmptyList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'Collections/EmptyList', 125);
function java_util_Collections$EmptyListIterator_$clinit__V(){
  java_util_Collections$EmptyListIterator_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_util_Collections$EmptyListIterator_INSTANCE = new java_util_Collections$EmptyListIterator_Collections$EmptyListIterator__V;
}

function java_util_Collections$EmptyListIterator_Collections$EmptyListIterator__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(126, 1, {}, java_util_Collections$EmptyListIterator_Collections$EmptyListIterator__V);
_.hasNext__Z = function java_util_Collections$EmptyListIterator_hasNext__Z(){
  return false;
}
;
_.hasPrevious__Z = function java_util_Collections$EmptyListIterator_hasPrevious__Z(){
  return false;
}
;
_.next__Ljava_lang_Object_2 = function java_util_Collections$EmptyListIterator_next__Ljava_lang_Object_2(){
  throw new java_util_NoSuchElementException_NoSuchElementException__V;
}
;
_.previous__Ljava_lang_Object_2 = function java_util_Collections$EmptyListIterator_previous__Ljava_lang_Object_2(){
  throw new java_util_NoSuchElementException_NoSuchElementException__V;
}
;
var java_util_Collections$EmptyListIterator_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$EmptyListIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'Collections/EmptyListIterator', 126);
function java_util_Collections$EmptySet_Collections$EmptySet__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(127, 231, $intern_75, java_util_Collections$EmptySet_Collections$EmptySet__V);
_.contains__Ljava_lang_Object_2Z = function java_util_Collections$EmptySet_contains__Ljava_lang_Object_2Z(object){
  return false;
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_Collections$EmptySet_iterator__Ljava_util_Iterator_2(){
  return java_util_Collections_$clinit__V() , java_util_Collections$EmptyListIterator_$clinit__V() , java_util_Collections$EmptyListIterator_INSTANCE;
}
;
_.size__I = function java_util_Collections$EmptySet_size__I(){
  return 0;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$EmptySet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'Collections/EmptySet', 127);
function java_util_Collections$SingletonList_Collections$SingletonList__Ljava_lang_Object_2V(element){
  this.java_util_Collections$SingletonList_element = element;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(128, 234, $intern_74, java_util_Collections$SingletonList_Collections$SingletonList__Ljava_lang_Object_2V);
_.contains__Ljava_lang_Object_2Z = function java_util_Collections$SingletonList_contains__Ljava_lang_Object_2Z(item_0){
  return java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_util_Collections$SingletonList_element, item_0);
}
;
_.get__ILjava_lang_Object_2 = function java_util_Collections$SingletonList_get__ILjava_lang_Object_2(index_0){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(index_0, 1);
  return this.java_util_Collections$SingletonList_element;
}
;
_.size__I = function java_util_Collections$SingletonList_size__I(){
  return 1;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$SingletonList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'Collections/SingletonList', 128);
function java_util_Comparators_$clinit__V(){
  java_util_Comparators_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_util_Comparators_NATURAL = new java_util_Comparators$1_Comparators$1__V;
}

var java_util_Comparators_NATURAL;
function java_util_Comparators$1_$compare__Ljava_util_Comparators$1_2Ljava_lang_Object_2Ljava_lang_Object_2I(o1, o2){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(o1);
  com_google_gwt_core_shared_impl_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(o2);
  return java_lang_String_compareTo_1Ljava_1lang_1Object_1_1I_1_1devirtual$__Ljava_lang_Comparable_2Ljava_lang_Object_2I(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o1, 7), o2);
}

function java_util_Comparators$1_Comparators$1__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(204, 1, {215:1}, java_util_Comparators$1_Comparators$1__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Comparators$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'Comparators/1', 204);
function java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(host, iterator){
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new java_util_ConcurrentModificationException_ConcurrentModificationException__V;
  }
}

function java_util_ConcurrentModificationDetector_recordLastKnownStructure__Ljava_lang_Object_2Ljava_util_Iterator_2V(host, iterator){
  java_util_ConcurrentModificationDetector_setModCount__Ljava_lang_Object_2IV(iterator, host._gwt_modCount);
}

function java_util_ConcurrentModificationDetector_setModCount__Ljava_lang_Object_2IV(o, modCount){
  o._gwt_modCount = modCount;
}

function java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(map_0){
  var modCount;
  modCount = map_0._gwt_modCount | 0;
  java_util_ConcurrentModificationDetector_setModCount__Ljava_lang_Object_2IV(map_0, modCount + 1);
}

function java_util_ConcurrentModificationException_ConcurrentModificationException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(159, 10, $intern_3, java_util_ConcurrentModificationException_ConcurrentModificationException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ConcurrentModificationException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'ConcurrentModificationException', 159);
function java_util_Date_$compareTo__Ljava_util_Date_2Ljava_util_Date_2I(this$static, other){
  return java_lang_Long_compare__JJI(com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2(this$static.java_util_Date_jsdate.getTime()), com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2(other.java_util_Date_jsdate.getTime()));
}

function java_util_Date_Date__V(){
  this.java_util_Date_jsdate = new Date;
}

function java_util_Date_Date__JV(date){
  this.java_util_Date_jsdate = com_google_gwt_core_client_JsDate_create__DLcom_google_gwt_core_client_JsDate_2(com_google_gwt_lang_LongLib_toDouble__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D(date));
}

function java_util_Date_padTwo__ILjava_lang_String_2(number){
  return number < 10?'0' + number:'' + number;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(32, 1, {3:1, 7:1, 32:1}, java_util_Date_Date__V, java_util_Date_Date__JV);
_.compareTo__Ljava_lang_Object_2I = function java_util_Date_compareTo__Ljava_lang_Object_2I(other){
  return java_util_Date_$compareTo__Ljava_util_Date_2Ljava_util_Date_2I(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 32));
}
;
_.equals__Ljava_lang_Object_2Z$ = function java_util_Date_equals__Ljava_lang_Object_2Z(obj){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(obj, 32) && com_google_gwt_lang_LongLib_eq__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2(this.java_util_Date_jsdate.getTime()), com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(obj, 32).java_util_Date_jsdate.getTime()));
}
;
_.hashCode__I$ = function java_util_Date_hashCode__I(){
  var time;
  time = com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2(this.java_util_Date_jsdate.getTime());
  return com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(com_google_gwt_lang_LongLib_xor__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(time, com_google_gwt_lang_LongLib_shru__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(time, 32)));
}
;
_.toString__Ljava_lang_String_2$ = function java_util_Date_toString__Ljava_lang_String_2(){
  var hourOffset, minuteOffset, offset;
  offset = -this.java_util_Date_jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + ~~(offset / 60);
  minuteOffset = (offset < 0?-offset:offset) % 60 < 10?'0' + (offset < 0?-offset:offset) % 60:'' + (offset < 0?-offset:offset) % 60;
  return (java_util_Date$StringData_$clinit__V() , java_util_Date$StringData_DAYS)[this.java_util_Date_jsdate.getDay()] + ' ' + java_util_Date$StringData_MONTHS[this.java_util_Date_jsdate.getMonth()] + ' ' + java_util_Date_padTwo__ILjava_lang_String_2(this.java_util_Date_jsdate.getDate()) + ' ' + java_util_Date_padTwo__ILjava_lang_String_2(this.java_util_Date_jsdate.getHours()) + ':' + java_util_Date_padTwo__ILjava_lang_String_2(this.java_util_Date_jsdate.getMinutes()) + ':' + java_util_Date_padTwo__ILjava_lang_String_2(this.java_util_Date_jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this.java_util_Date_jsdate.getFullYear();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Date_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'Date', 32);
function java_util_Date$StringData_$clinit__V(){
  java_util_Date$StringData_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_util_Date$StringData_DAYS = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_6, 2, 4, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  java_util_Date$StringData_MONTHS = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_6, 2, 4, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var java_util_Date$StringData_DAYS, java_util_Date$StringData_MONTHS;
function java_util_HashMap_HashMap__V(){
  java_util_AbstractHashMap_AbstractHashMap__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(21, 78, $intern_76, java_util_HashMap_HashMap__V);
_.package_private$java_util_AbstractHashMap$equals__Ljava_lang_Object_2Ljava_lang_Object_2Z = function java_util_HashMap_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(value1, value2){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value1) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value2) || value1 != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(value1, value2);
}
;
_.package_private$java_util_AbstractHashMap$getHashCode__Ljava_lang_Object_2I = function java_util_HashMap_getHashCode__Ljava_lang_Object_2I(key){
  var hashCode;
  hashCode = java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(key);
  return ~~hashCode;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1HashMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'HashMap', 21);
function java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static, o){
  var old;
  old = this$static.java_util_HashSet_map.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(o, this$static);
  return old == null;
}

function java_util_HashSet_$contains__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static, o){
  return this$static.java_util_HashSet_map.containsKey__Ljava_lang_Object_2Z(o);
}

function java_util_HashSet_$remove__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static, o){
  return this$static.java_util_HashSet_map.remove__Ljava_lang_Object_2Ljava_lang_Object_2(o) != null;
}

function java_util_HashSet_HashSet__V(){
  this.java_util_HashSet_map = new java_util_HashMap_HashMap__V;
}

function java_util_HashSet_HashSet__Ljava_util_HashMap_2V(map_0){
  this.java_util_HashSet_map = map_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(47, 231, $intern_75, java_util_HashSet_HashSet__V);
_.add__Ljava_lang_Object_2Z = function java_util_HashSet_add__Ljava_lang_Object_2Z(o){
  return java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this, o);
}
;
_.contains__Ljava_lang_Object_2Z = function java_util_HashSet_contains__Ljava_lang_Object_2Z(o){
  return java_util_HashSet_$contains__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this, o);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_HashSet_iterator__Ljava_util_Iterator_2(){
  return java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2(new java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(this.java_util_HashSet_map));
}
;
_.size__I = function java_util_HashSet_size__I(){
  return this.java_util_HashSet_map.size__I();
}
;
_.toString__Ljava_lang_String_2$ = function java_util_HashSet_toString__Ljava_lang_String_2(){
  return java_util_AbstractCollection_$toString__Ljava_util_AbstractCollection_2Ljava_lang_String_2(new java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(this.java_util_HashSet_map));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1HashSet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'HashSet', 47);
function java_util_IdentityHashMap_IdentityHashMap__V(){
  java_util_AbstractHashMap_AbstractHashMap__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(205, 78, $intern_76, java_util_IdentityHashMap_IdentityHashMap__V);
_.equals__Ljava_lang_Object_2Z$ = function java_util_IdentityHashMap_equals__Ljava_lang_Object_2Z(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if (obj === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(obj, 23)) {
    return false;
  }
  otherMap = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(obj, 23);
  if (this.java_util_AbstractHashMap_size != otherMap.size__I()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet__Ljava_util_Set_2().iterator__Ljava_util_Iterator_2(); entry$iterator.hasNext__Z();) {
    entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(entry$iterator.next__Ljava_lang_Object_2(), 8);
    otherKey = entry.getKey__Ljava_lang_Object_2();
    otherValue = entry.getValue__Ljava_lang_Object_2();
    if (!(com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(otherKey)?java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this, otherKey):!!java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this.java_util_AbstractHashMap_hashCodeMap, otherKey))) {
      return false;
    }
    if (com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(otherValue) !== com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(otherKey)?java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this, otherKey):java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this.java_util_AbstractHashMap_hashCodeMap, otherKey)))) {
      return false;
    }
  }
  return true;
}
;
_.package_private$java_util_AbstractHashMap$equals__Ljava_lang_Object_2Ljava_lang_Object_2Z = function java_util_IdentityHashMap_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(value1, value2){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value1) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value2);
}
;
_.package_private$java_util_AbstractHashMap$getHashCode__Ljava_lang_Object_2I = function java_util_IdentityHashMap_getHashCode__Ljava_lang_Object_2I(key){
  return com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(key);
}
;
_.hashCode__I$ = function java_util_IdentityHashMap_hashCode__I(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this)).java_util_AbstractHashMap$EntrySet_this$01); java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(entry$iterator);) {
    entry = (java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(entry$iterator.java_util_AbstractHashMap$EntrySetIterator_this$01, entry$iterator) , com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(entry$iterator)) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(entry$iterator.java_util_AbstractHashMap$EntrySetIterator_current.next__Ljava_lang_Object_2(), 8));
    hashCode += java_lang_System_identityHashCode__Ljava_lang_Object_2I(entry.getKey__Ljava_lang_Object_2());
    hashCode += java_lang_System_identityHashCode__Ljava_lang_Object_2I(entry.getValue__Ljava_lang_Object_2());
  }
  return hashCode;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1IdentityHashMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'IdentityHashMap', 205);
function java_util_InternalJsHashCodeMap_$ensureChain__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static, hashCode){
  var map_0 = this$static.java_util_InternalJsHashCodeMap_backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}

function java_util_InternalJsHashCodeMap_$getChain__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static, hashCode){
  return this$static.java_util_InternalJsHashCodeMap_backingMap[hashCode];
}

function java_util_InternalJsHashCodeMap_$getChainOrEmpty__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static, hashCode){
  return this$static.java_util_InternalJsHashCodeMap_backingMap[hashCode] || [];
}

function java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static, key){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = java_util_InternalJsHashCodeMap_$getChainOrEmpty__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static, key == null?'0':'' + this$static.java_util_InternalJsHashCodeMap_host.package_private$java_util_AbstractHashMap$getHashCode__Ljava_lang_Object_2I(key)) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if (this$static.java_util_InternalJsHashCodeMap_host.package_private$java_util_AbstractHashMap$equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entry.getKey__Ljava_lang_Object_2())) {
      return entry;
    }
  }
  return null;
}

function java_util_InternalJsHashCodeMap_$keys__Ljava_util_InternalJsHashCodeMap_2_3Ljava_lang_String_2(this$static){
  return Object.getOwnPropertyNames(this$static.java_util_InternalJsHashCodeMap_backingMap);
}

function java_util_InternalJsHashCodeMap_$put__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  var chain, entry, entry$index, entry$max;
  chain = java_util_InternalJsHashCodeMap_$ensureChain__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static, key == null?'0':'' + this$static.java_util_InternalJsHashCodeMap_host.package_private$java_util_AbstractHashMap$getHashCode__Ljava_lang_Object_2I(key));
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if (this$static.java_util_InternalJsHashCodeMap_host.package_private$java_util_AbstractHashMap$equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entry.getKey__Ljava_lang_Object_2())) {
      return entry.setValue__Ljava_lang_Object_2Ljava_lang_Object_2(value_0);
    }
  }
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(chain, chain.length, new java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V(key, value_0));
  java_util_AbstractHashMap_$elementAdded__Ljava_util_AbstractHashMap_2V(this$static.java_util_InternalJsHashCodeMap_host);
  return null;
}

function java_util_InternalJsHashCodeMap_$remove__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  var chain, entry, hashCode, i;
  hashCode = key == null?'0':'' + this$static.java_util_InternalJsHashCodeMap_host.package_private$java_util_AbstractHashMap$getHashCode__Ljava_lang_Object_2I(key);
  chain = java_util_InternalJsHashCodeMap_$getChainOrEmpty__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static, hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if (this$static.java_util_InternalJsHashCodeMap_host.package_private$java_util_AbstractHashMap$equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entry.getKey__Ljava_lang_Object_2())) {
      chain.length == 1?(delete this$static.java_util_InternalJsHashCodeMap_backingMap[hashCode] , undefined):(chain.splice(i, 1) , undefined);
      java_util_AbstractHashMap_$elementRemoved__Ljava_util_AbstractHashMap_2V(this$static.java_util_InternalJsHashCodeMap_host);
      return entry.getValue__Ljava_lang_Object_2();
    }
  }
  return null;
}

function java_util_InternalJsHashCodeMap_InternalJsHashCodeMap__V(){
  this.java_util_InternalJsHashCodeMap_backingMap = this.package_private$java_util_InternalJsHashCodeMap$createMap__Lcom_google_gwt_core_client_JavaScriptObject_2();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(91, 1, {}, java_util_InternalJsHashCodeMap_InternalJsHashCodeMap__V);
_.package_private$java_util_InternalJsHashCodeMap$createMap__Lcom_google_gwt_core_client_JavaScriptObject_2 = function java_util_InternalJsHashCodeMap_createMap__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return Object.create(null);
}
;
_.entries__Ljava_util_Iterator_2 = function java_util_InternalJsHashCodeMap_entries__Ljava_util_Iterator_2(){
  return new java_util_InternalJsHashCodeMap$1_InternalJsHashCodeMap$1__Ljava_util_InternalJsHashCodeMap_2V(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsHashCodeMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'InternalJsHashCodeMap', 91);
function java_util_InternalJsHashCodeMap$1_$hasNext__Ljava_util_InternalJsHashCodeMap$1_2Z(this$static){
  if (this$static.java_util_InternalJsHashCodeMap$1_itemIndex < this$static.java_util_InternalJsHashCodeMap$1_chain.length) {
    return true;
  }
  if (this$static.java_util_InternalJsHashCodeMap$1_chainIndex < this$static.java_util_InternalJsHashCodeMap$1_keys.length - 1) {
    this$static.java_util_InternalJsHashCodeMap$1_chain = java_util_InternalJsHashCodeMap_$getChain__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static.java_util_InternalJsHashCodeMap$1_this$01, this$static.java_util_InternalJsHashCodeMap$1_keys[++this$static.java_util_InternalJsHashCodeMap$1_chainIndex]);
    this$static.java_util_InternalJsHashCodeMap$1_itemIndex = 0;
    return true;
  }
  return false;
}

function java_util_InternalJsHashCodeMap$1_InternalJsHashCodeMap$1__Ljava_util_InternalJsHashCodeMap_2V(this$0){
  this.java_util_InternalJsHashCodeMap$1_this$01 = this$0;
  this.java_util_InternalJsHashCodeMap$1_keys = java_util_InternalJsHashCodeMap_$keys__Ljava_util_InternalJsHashCodeMap_2_3Ljava_lang_String_2(this.java_util_InternalJsHashCodeMap$1_this$01);
  this.java_util_InternalJsHashCodeMap$1_chain = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Map$Entry_12_1classLit, $intern_6, 8, 0, 0, 1);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(139, 1, {}, java_util_InternalJsHashCodeMap$1_InternalJsHashCodeMap$1__Ljava_util_InternalJsHashCodeMap_2V);
_.hasNext__Z = function java_util_InternalJsHashCodeMap$1_hasNext__Z(){
  return java_util_InternalJsHashCodeMap$1_$hasNext__Ljava_util_InternalJsHashCodeMap$1_2Z(this);
}
;
_.next__Ljava_lang_Object_2 = function java_util_InternalJsHashCodeMap$1_next__Ljava_lang_Object_2(){
  return com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(java_util_InternalJsHashCodeMap$1_$hasNext__Ljava_util_InternalJsHashCodeMap$1_2Z(this)) , this.java_util_InternalJsHashCodeMap$1_lastEntry = this.java_util_InternalJsHashCodeMap$1_chain[this.java_util_InternalJsHashCodeMap$1_itemIndex++] , this.java_util_InternalJsHashCodeMap$1_lastEntry;
}
;
_.java_util_InternalJsHashCodeMap$1_chainIndex = -1;
_.java_util_InternalJsHashCodeMap$1_itemIndex = 0;
_.java_util_InternalJsHashCodeMap$1_lastEntry = null;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsHashCodeMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'InternalJsHashCodeMap/1', 139);
function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy__V(){
  java_util_InternalJsHashCodeMap_InternalJsHashCodeMap__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(137, 91, {}, java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy__V);
_.package_private$java_util_InternalJsHashCodeMap$createMap__Lcom_google_gwt_core_client_JavaScriptObject_2 = function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_createMap__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return {};
}
;
_.entries__Ljava_util_Iterator_2 = function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_entries__Ljava_util_Iterator_2(){
  var list = this.private$java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$newEntryList__Ljava_util_ArrayList_2();
  var map_0 = this.java_util_InternalJsHashCodeMap_backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        list.add__Ljava_lang_Object_2Z(array[i]);
      }
    }
  }
  return list.iterator__Ljava_util_Iterator_2();
}
;
_.private$java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$newEntryList__Ljava_util_ArrayList_2 = function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_newEntryList__Ljava_util_ArrayList_2(){
  return new java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 137);
function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2V(){
  java_util_ArrayList_ArrayList__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(138, 22, $intern_74, java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 138);
function java_util_InternalJsMapFactory_InternalJsMapFactory__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(134, 1, {}, java_util_InternalJsMapFactory_InternalJsMapFactory__V);
_.createJsHashCodeMap__Ljava_util_InternalJsHashCodeMap_2 = function java_util_InternalJsMapFactory_createJsHashCodeMap__Ljava_util_InternalJsHashCodeMap_2(){
  return new java_util_InternalJsHashCodeMap_InternalJsHashCodeMap__V;
}
;
_.createJsStringMap__Ljava_util_InternalJsStringMap_2 = function java_util_InternalJsMapFactory_createJsStringMap__Ljava_util_InternalJsStringMap_2(){
  return new java_util_InternalJsStringMap_InternalJsStringMap__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsMapFactory_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'InternalJsMapFactory', 134);
function java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_$clinit__V(){
  java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_delegate = java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_createFactory__Ljava_util_InternalJsMapFactory_2();
}

function java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_canHandleProto__Z(){
  var protoField = $intern_77;
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  return true;
}

function java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_createFactory__Ljava_util_InternalJsMapFactory_2(){
  var java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_needsKeysWorkaround__Z_map_0;
  if (Object.create && Object.getOwnPropertyNames && java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_canHandleProto__Z()) {
    return (java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_needsKeysWorkaround__Z_map_0 = Object.create(null) , java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_needsKeysWorkaround__Z_map_0[$intern_77] = 42 , Object.getOwnPropertyNames(java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_needsKeysWorkaround__Z_map_0).length == 0)?new java_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_InternalJsMapFactory$KeysWorkaroundJsMapFactory__V:new java_util_InternalJsMapFactory_InternalJsMapFactory__V;
  }
  return new java_util_InternalJsMapFactory$LegacyInternalJsMapFactory_InternalJsMapFactory$LegacyInternalJsMapFactory__V;
}

var java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_delegate;
function java_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_InternalJsMapFactory$KeysWorkaroundJsMapFactory__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(136, 134, {}, java_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_InternalJsMapFactory$KeysWorkaroundJsMapFactory__V);
_.createJsStringMap__Ljava_util_InternalJsStringMap_2 = function java_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_createJsStringMap__Ljava_util_InternalJsStringMap_2(){
  return new java_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsMapFactory$KeysWorkaroundJsMapFactory_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 136);
function java_util_InternalJsMapFactory$LegacyInternalJsMapFactory_InternalJsMapFactory$LegacyInternalJsMapFactory__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(135, 134, {}, java_util_InternalJsMapFactory$LegacyInternalJsMapFactory_InternalJsMapFactory$LegacyInternalJsMapFactory__V);
_.createJsHashCodeMap__Ljava_util_InternalJsHashCodeMap_2 = function java_util_InternalJsMapFactory$LegacyInternalJsMapFactory_createJsHashCodeMap__Ljava_util_InternalJsHashCodeMap_2(){
  return new java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy__V;
}
;
_.createJsStringMap__Ljava_util_InternalJsStringMap_2 = function java_util_InternalJsMapFactory$LegacyInternalJsMapFactory_createJsStringMap__Ljava_util_InternalJsStringMap_2(){
  return new java_util_InternalJsStringMap$InternalJsStringMapLegacy_InternalJsStringMap$InternalJsStringMapLegacy__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsMapFactory$LegacyInternalJsMapFactory_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'InternalJsMapFactory/LegacyInternalJsMapFactory', 135);
function java_util_InternalJsStringMap_$keys__Ljava_util_InternalJsStringMap_2_3Ljava_lang_String_2(this$static){
  return Object.getOwnPropertyNames(this$static.java_util_InternalJsStringMap_backingMap);
}

function java_util_InternalJsStringMap_$put__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.java_util_InternalJsStringMap_backingMap[key];
  oldValue === undefined && java_util_AbstractHashMap_$elementAdded__Ljava_util_AbstractHashMap_2V(this$static.java_util_InternalJsStringMap_host);
  java_util_InternalJsStringMap_$set__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(this$static, key, value_0 === undefined?null:value_0);
  return oldValue;
}

function java_util_InternalJsStringMap_$remove__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  var value_0;
  value_0 = this$static.java_util_InternalJsStringMap_backingMap[key];
  if (!(value_0 === undefined)) {
    delete this$static.java_util_InternalJsStringMap_backingMap[key];
    java_util_AbstractHashMap_$elementRemoved__Ljava_util_AbstractHashMap_2V(this$static.java_util_InternalJsStringMap_host);
  }
  return value_0;
}

function java_util_InternalJsStringMap_$set__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(this$static, key, value_0){
  this$static.java_util_InternalJsStringMap_backingMap[key] = value_0;
}

function java_util_InternalJsStringMap_InternalJsStringMap__V(){
  this.java_util_InternalJsStringMap_backingMap = this.package_private$java_util_InternalJsStringMap$createMap__Lcom_google_gwt_core_client_JavaScriptObject_2();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(66, 1, {}, java_util_InternalJsStringMap_InternalJsStringMap__V);
_.package_private$java_util_InternalJsStringMap$createMap__Lcom_google_gwt_core_client_JavaScriptObject_2 = function java_util_InternalJsStringMap_createMap__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return Object.create(null);
}
;
_.entries__Ljava_util_Iterator_2 = function java_util_InternalJsStringMap_entries__Ljava_util_Iterator_2(){
  var keys_0;
  keys_0 = this.keys___3Ljava_lang_String_2();
  return new java_util_InternalJsStringMap$1_InternalJsStringMap$1__Ljava_util_InternalJsStringMap_2V(this, keys_0);
}
;
_.get__Ljava_lang_String_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap_get__Ljava_lang_String_2Ljava_lang_Object_2(key){
  return this.java_util_InternalJsStringMap_backingMap[key];
}
;
_.keys___3Ljava_lang_String_2 = function java_util_InternalJsStringMap_keys___3Ljava_lang_String_2(){
  return java_util_InternalJsStringMap_$keys__Ljava_util_InternalJsStringMap_2_3Ljava_lang_String_2(this);
}
;
_.newMapEntry__Ljava_lang_String_2Ljava_util_Map$Entry_2 = function java_util_InternalJsStringMap_newMapEntry__Ljava_lang_String_2Ljava_util_Map$Entry_2(key){
  return new java_util_InternalJsStringMap$2_InternalJsStringMap$2__Ljava_util_InternalJsStringMap_2V(this, key);
}
;
_.put__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap_put__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0){
  return java_util_InternalJsStringMap_$put__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this, key, value_0);
}
;
_.remove__Ljava_lang_String_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap_remove__Ljava_lang_String_2Ljava_lang_Object_2(key){
  return java_util_InternalJsStringMap_$remove__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this, key);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'InternalJsStringMap', 66);
function java_util_InternalJsStringMap$1_InternalJsStringMap$1__Ljava_util_InternalJsStringMap_2V(this$0, val$keys){
  this.java_util_InternalJsStringMap$1_this$01 = this$0;
  this.java_util_InternalJsStringMap$1_val$keys2 = val$keys;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(132, 1, {}, java_util_InternalJsStringMap$1_InternalJsStringMap$1__Ljava_util_InternalJsStringMap_2V);
_.hasNext__Z = function java_util_InternalJsStringMap$1_hasNext__Z(){
  return this.java_util_InternalJsStringMap$1_i < this.java_util_InternalJsStringMap$1_val$keys2.length;
}
;
_.next__Ljava_lang_Object_2 = function java_util_InternalJsStringMap$1_next__Ljava_lang_Object_2(){
  return com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(this.java_util_InternalJsStringMap$1_i < this.java_util_InternalJsStringMap$1_val$keys2.length) , new java_util_InternalJsStringMap$2_InternalJsStringMap$2__Ljava_util_InternalJsStringMap_2V(this.java_util_InternalJsStringMap$1_this$01, this.java_util_InternalJsStringMap$1_val$keys2[this.java_util_InternalJsStringMap$1_i++]);
}
;
_.java_util_InternalJsStringMap$1_i = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'InternalJsStringMap/1', 132);
function java_util_InternalJsStringMap$2_InternalJsStringMap$2__Ljava_util_InternalJsStringMap_2V(this$0, val$key){
  this.java_util_InternalJsStringMap$2_this$01 = this$0;
  this.java_util_InternalJsStringMap$2_val$key2 = val$key;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(90, 235, {8:1}, java_util_InternalJsStringMap$2_InternalJsStringMap$2__Ljava_util_InternalJsStringMap_2V);
_.getKey__Ljava_lang_Object_2 = function java_util_InternalJsStringMap$2_getKey__Ljava_lang_Object_2(){
  return this.java_util_InternalJsStringMap$2_val$key2;
}
;
_.getValue__Ljava_lang_Object_2 = function java_util_InternalJsStringMap$2_getValue__Ljava_lang_Object_2(){
  return this.java_util_InternalJsStringMap$2_this$01.get__Ljava_lang_String_2Ljava_lang_Object_2(this.java_util_InternalJsStringMap$2_val$key2);
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap$2_setValue__Ljava_lang_Object_2Ljava_lang_Object_2(object){
  return this.java_util_InternalJsStringMap$2_this$01.put__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_InternalJsStringMap$2_val$key2, object);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'InternalJsStringMap/2', 90);
function java_util_InternalJsStringMap$InternalJsStringMapLegacy_InternalJsStringMap$InternalJsStringMapLegacy__V(){
  java_util_InternalJsStringMap_InternalJsStringMap__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(129, 66, {}, java_util_InternalJsStringMap$InternalJsStringMapLegacy_InternalJsStringMap$InternalJsStringMapLegacy__V);
_.package_private$java_util_InternalJsStringMap$createMap__Lcom_google_gwt_core_client_JavaScriptObject_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy_createMap__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return {};
}
;
_.entries__Ljava_util_Iterator_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy_entries__Ljava_util_Iterator_2(){
  var list = this.private$java_util_InternalJsStringMap$InternalJsStringMapLegacy$newEntryList__Ljava_util_ArrayList_2();
  for (var key in this.java_util_InternalJsStringMap_backingMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = this.newMapEntry__Ljava_lang_String_2Ljava_util_Map$Entry_2(key.substring(1));
      list.add__Ljava_lang_Object_2Z(entry);
    }
  }
  return list.iterator__Ljava_util_Iterator_2();
}
;
_.get__Ljava_lang_String_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy_get__Ljava_lang_String_2Ljava_lang_Object_2(key){
  return this.java_util_InternalJsStringMap_backingMap[':' + key];
}
;
_.private$java_util_InternalJsStringMap$InternalJsStringMapLegacy$newEntryList__Ljava_util_ArrayList_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy_newEntryList__Ljava_util_ArrayList_2(){
  return new java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_InternalJsStringMap$InternalJsStringMapLegacy$1__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2V;
}
;
_.put__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy_put__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0){
  return java_util_InternalJsStringMap_$put__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this, ':' + key, value_0);
}
;
_.remove__Ljava_lang_String_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy_remove__Ljava_lang_String_2Ljava_lang_Object_2(key){
  return java_util_InternalJsStringMap_$remove__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this, ':' + key);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap$InternalJsStringMapLegacy_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'InternalJsStringMap/InternalJsStringMapLegacy', 129);
function java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_InternalJsStringMap$InternalJsStringMapLegacy$1__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2V(){
  java_util_ArrayList_ArrayList__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(131, 22, $intern_74, java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_InternalJsStringMap$InternalJsStringMapLegacy$1__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap$InternalJsStringMapLegacy$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'InternalJsStringMap/InternalJsStringMapLegacy/1', 131);
function java_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround__V(){
  java_util_InternalJsStringMap_InternalJsStringMap__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(130, 66, {}, java_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround__V);
_.keys___3Ljava_lang_String_2 = function java_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_keys___3Ljava_lang_String_2(){
  var keys_0;
  keys_0 = java_util_InternalJsStringMap_$keys__Ljava_util_InternalJsStringMap_2_3Ljava_lang_String_2(this);
  !(this.java_util_InternalJsStringMap_backingMap[$intern_77] === undefined) && (keys_0[keys_0.length] = $intern_77);
  return keys_0;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 130);
function java_util_LinkedHashMap_$recordAccess__Ljava_util_LinkedHashMap_2Ljava_util_LinkedHashMap$ChainEntry_2V(this$static, entry){
  if (this$static.java_util_LinkedHashMap_accessOrder) {
    java_util_LinkedHashMap$ChainEntry_$remove__Ljava_util_LinkedHashMap$ChainEntry_2V(entry);
    java_util_LinkedHashMap$ChainEntry_$addToEnd__Ljava_util_LinkedHashMap$ChainEntry_2V(entry);
  }
}

function java_util_LinkedHashMap_$remove__Ljava_util_LinkedHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  var entry;
  entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.java_util_LinkedHashMap_map.remove__Ljava_lang_Object_2Ljava_lang_Object_2(key), 37);
  if (entry) {
    java_util_LinkedHashMap$ChainEntry_$remove__Ljava_util_LinkedHashMap$ChainEntry_2V(entry);
    return entry.java_util_AbstractMap$AbstractEntry_value;
  }
  return null;
}

function java_util_LinkedHashMap_LinkedHashMap__V(){
  java_util_HashMap_HashMap__V.call(this);
  this.java_util_LinkedHashMap_head = new java_util_LinkedHashMap$ChainEntry_LinkedHashMap$ChainEntry__Ljava_util_LinkedHashMap_2V(this);
  this.java_util_LinkedHashMap_map = new java_util_HashMap_HashMap__V;
  this.java_util_LinkedHashMap_head.java_util_LinkedHashMap$ChainEntry_prev = this.java_util_LinkedHashMap_head;
  this.java_util_LinkedHashMap_head.java_util_LinkedHashMap$ChainEntry_next = this.java_util_LinkedHashMap_head;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(201, 21, $intern_76, java_util_LinkedHashMap_LinkedHashMap__V);
_.clear__V = function java_util_LinkedHashMap_clear__V(){
  this.java_util_LinkedHashMap_map.clear__V();
  this.java_util_LinkedHashMap_head.java_util_LinkedHashMap$ChainEntry_prev = this.java_util_LinkedHashMap_head;
  this.java_util_LinkedHashMap_head.java_util_LinkedHashMap$ChainEntry_next = this.java_util_LinkedHashMap_head;
}
;
_.containsKey__Ljava_lang_Object_2Z = function java_util_LinkedHashMap_containsKey__Ljava_lang_Object_2Z(key){
  return this.java_util_LinkedHashMap_map.containsKey__Ljava_lang_Object_2Z(key);
}
;
_.entrySet__Ljava_util_Set_2 = function java_util_LinkedHashMap_entrySet__Ljava_util_Set_2(){
  return new java_util_LinkedHashMap$EntrySet_LinkedHashMap$EntrySet__Ljava_util_LinkedHashMap_2V(this);
}
;
_.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_LinkedHashMap_get__Ljava_lang_Object_2Ljava_lang_Object_2(key){
  var entry;
  entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this.java_util_LinkedHashMap_map.get__Ljava_lang_Object_2Ljava_lang_Object_2(key), 37);
  if (entry) {
    java_util_LinkedHashMap_$recordAccess__Ljava_util_LinkedHashMap_2Ljava_util_LinkedHashMap$ChainEntry_2V(this, entry);
    return entry.java_util_AbstractMap$AbstractEntry_value;
  }
  return null;
}
;
_.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_LinkedHashMap_put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0){
  var newEntry, old, oldValue;
  old = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this.java_util_LinkedHashMap_map.get__Ljava_lang_Object_2Ljava_lang_Object_2(key), 37);
  if (!old) {
    newEntry = new java_util_LinkedHashMap$ChainEntry_LinkedHashMap$ChainEntry__Ljava_util_LinkedHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2V(this, key, value_0);
    this.java_util_LinkedHashMap_map.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(key, newEntry);
    java_util_LinkedHashMap$ChainEntry_$addToEnd__Ljava_util_LinkedHashMap$ChainEntry_2V(newEntry);
    return null;
  }
   else {
    oldValue = java_util_AbstractMap$AbstractEntry_$setValue__Ljava_util_AbstractMap$AbstractEntry_2Ljava_lang_Object_2Ljava_lang_Object_2(old, value_0);
    java_util_LinkedHashMap_$recordAccess__Ljava_util_LinkedHashMap_2Ljava_util_LinkedHashMap$ChainEntry_2V(this, old);
    return oldValue;
  }
}
;
_.remove__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_LinkedHashMap_remove__Ljava_lang_Object_2Ljava_lang_Object_2(key){
  return java_util_LinkedHashMap_$remove__Ljava_util_LinkedHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this, key);
}
;
_.size__I = function java_util_LinkedHashMap_size__I(){
  return this.java_util_LinkedHashMap_map.size__I();
}
;
_.java_util_LinkedHashMap_accessOrder = false;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1LinkedHashMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'LinkedHashMap', 201);
function java_util_LinkedHashMap$ChainEntry_$addToEnd__Ljava_util_LinkedHashMap$ChainEntry_2V(this$static){
  var tail;
  tail = this$static.java_util_LinkedHashMap$ChainEntry_this$01.java_util_LinkedHashMap_head.java_util_LinkedHashMap$ChainEntry_prev;
  this$static.java_util_LinkedHashMap$ChainEntry_prev = tail;
  this$static.java_util_LinkedHashMap$ChainEntry_next = this$static.java_util_LinkedHashMap$ChainEntry_this$01.java_util_LinkedHashMap_head;
  tail.java_util_LinkedHashMap$ChainEntry_next = this$static.java_util_LinkedHashMap$ChainEntry_this$01.java_util_LinkedHashMap_head.java_util_LinkedHashMap$ChainEntry_prev = this$static;
}

function java_util_LinkedHashMap$ChainEntry_$remove__Ljava_util_LinkedHashMap$ChainEntry_2V(this$static){
  this$static.java_util_LinkedHashMap$ChainEntry_next.java_util_LinkedHashMap$ChainEntry_prev = this$static.java_util_LinkedHashMap$ChainEntry_prev;
  this$static.java_util_LinkedHashMap$ChainEntry_prev.java_util_LinkedHashMap$ChainEntry_next = this$static.java_util_LinkedHashMap$ChainEntry_next;
  this$static.java_util_LinkedHashMap$ChainEntry_next = this$static.java_util_LinkedHashMap$ChainEntry_prev = null;
}

function java_util_LinkedHashMap$ChainEntry_LinkedHashMap$ChainEntry__Ljava_util_LinkedHashMap_2V(this$0){
  java_util_LinkedHashMap$ChainEntry_LinkedHashMap$ChainEntry__Ljava_util_LinkedHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2V.call(this, this$0, null, null);
}

function java_util_LinkedHashMap$ChainEntry_LinkedHashMap$ChainEntry__Ljava_util_LinkedHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$0, key, value_0){
  this.java_util_LinkedHashMap$ChainEntry_this$01 = this$0;
  java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V.call(this, key, value_0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(37, 41, {44:1, 41:1, 37:1, 8:1}, java_util_LinkedHashMap$ChainEntry_LinkedHashMap$ChainEntry__Ljava_util_LinkedHashMap_2V, java_util_LinkedHashMap$ChainEntry_LinkedHashMap$ChainEntry__Ljava_util_LinkedHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1LinkedHashMap$ChainEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'LinkedHashMap/ChainEntry', 37);
function java_util_LinkedHashMap$EntrySet_$contains__Ljava_util_LinkedHashMap$EntrySet_2Ljava_lang_Object_2Z(this$static, o){
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 8)) {
    return java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this$static.java_util_LinkedHashMap$EntrySet_this$01, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 8));
  }
  return false;
}

function java_util_LinkedHashMap$EntrySet_LinkedHashMap$EntrySet__Ljava_util_LinkedHashMap_2V(this$0){
  this.java_util_LinkedHashMap$EntrySet_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(202, 231, $intern_72, java_util_LinkedHashMap$EntrySet_LinkedHashMap$EntrySet__Ljava_util_LinkedHashMap_2V);
_.contains__Ljava_lang_Object_2Z = function java_util_LinkedHashMap$EntrySet_contains__Ljava_lang_Object_2Z(o){
  return java_util_LinkedHashMap$EntrySet_$contains__Ljava_util_LinkedHashMap$EntrySet_2Ljava_lang_Object_2Z(this, o);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_LinkedHashMap$EntrySet_iterator__Ljava_util_Iterator_2(){
  return new java_util_LinkedHashMap$EntrySet$EntryIterator_LinkedHashMap$EntrySet$EntryIterator__Ljava_util_LinkedHashMap$EntrySet_2V(this);
}
;
_.size__I = function java_util_LinkedHashMap$EntrySet_size__I(){
  return this.java_util_LinkedHashMap$EntrySet_this$01.java_util_LinkedHashMap_map.size__I();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1LinkedHashMap$EntrySet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'LinkedHashMap/EntrySet', 202);
function java_util_LinkedHashMap$EntrySet$EntryIterator_LinkedHashMap$EntrySet$EntryIterator__Ljava_util_LinkedHashMap$EntrySet_2V(this$1){
  this.java_util_LinkedHashMap$EntrySet$EntryIterator_this$11 = this$1;
  this.java_util_LinkedHashMap$EntrySet$EntryIterator_next = this$1.java_util_LinkedHashMap$EntrySet_this$01.java_util_LinkedHashMap_head.java_util_LinkedHashMap$ChainEntry_next;
  java_util_ConcurrentModificationDetector_recordLastKnownStructure__Ljava_lang_Object_2Ljava_util_Iterator_2V(this$1.java_util_LinkedHashMap$EntrySet_this$01.java_util_LinkedHashMap_map, this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(203, 1, {}, java_util_LinkedHashMap$EntrySet$EntryIterator_LinkedHashMap$EntrySet$EntryIterator__Ljava_util_LinkedHashMap$EntrySet_2V);
_.hasNext__Z = function java_util_LinkedHashMap$EntrySet$EntryIterator_hasNext__Z(){
  return this.java_util_LinkedHashMap$EntrySet$EntryIterator_next != this.java_util_LinkedHashMap$EntrySet$EntryIterator_this$11.java_util_LinkedHashMap$EntrySet_this$01.java_util_LinkedHashMap_head;
}
;
_.next__Ljava_lang_Object_2 = function java_util_LinkedHashMap$EntrySet$EntryIterator_next__Ljava_lang_Object_2(){
  return java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(this.java_util_LinkedHashMap$EntrySet$EntryIterator_this$11.java_util_LinkedHashMap$EntrySet_this$01.java_util_LinkedHashMap_map, this) , com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(this.java_util_LinkedHashMap$EntrySet$EntryIterator_next != this.java_util_LinkedHashMap$EntrySet$EntryIterator_this$11.java_util_LinkedHashMap$EntrySet_this$01.java_util_LinkedHashMap_head) , this.java_util_LinkedHashMap$EntrySet$EntryIterator_last = this.java_util_LinkedHashMap$EntrySet$EntryIterator_next , this.java_util_LinkedHashMap$EntrySet$EntryIterator_next = this.java_util_LinkedHashMap$EntrySet$EntryIterator_next.java_util_LinkedHashMap$ChainEntry_next , this.java_util_LinkedHashMap$EntrySet$EntryIterator_last;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1LinkedHashMap$EntrySet$EntryIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'LinkedHashMap/EntrySet/EntryIterator', 203);
function java_util_LinkedHashSet_LinkedHashSet__V(){
  java_util_HashSet_HashSet__Ljava_util_HashMap_2V.call(this, new java_util_LinkedHashMap_LinkedHashMap__V);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(168, 47, $intern_75, java_util_LinkedHashSet_LinkedHashSet__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1LinkedHashSet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'LinkedHashSet', 168);
function java_util_LinkedList_$addNode__Ljava_util_LinkedList_2Ljava_lang_Object_2Ljava_util_LinkedList$Node_2Ljava_util_LinkedList$Node_2V(this$static, o, prev, next){
  var node;
  node = new java_util_LinkedList$Node_LinkedList$Node__V;
  node.java_util_LinkedList$Node_value = o;
  node.java_util_LinkedList$Node_prev = prev;
  node.java_util_LinkedList$Node_next = next;
  next.java_util_LinkedList$Node_prev = prev.java_util_LinkedList$Node_next = node;
  ++this$static.java_util_LinkedList_size;
}

function java_util_LinkedList_$listIterator__Ljava_util_LinkedList_2ILjava_util_ListIterator_2(this$static, index_0){
  var i, node;
  com_google_gwt_core_shared_impl_InternalPreconditions_checkPositionIndex__IIV(index_0, this$static.java_util_LinkedList_size);
  if (index_0 >= this$static.java_util_LinkedList_size >> 1) {
    node = this$static.java_util_LinkedList_tail;
    for (i = this$static.java_util_LinkedList_size; i > index_0; --i) {
      node = node.java_util_LinkedList$Node_prev;
    }
  }
   else {
    node = this$static.java_util_LinkedList_header.java_util_LinkedList$Node_next;
    for (i = 0; i < index_0; ++i) {
      node = node.java_util_LinkedList$Node_next;
    }
  }
  return new java_util_LinkedList$ListIteratorImpl_LinkedList$ListIteratorImpl__Ljava_util_LinkedList_2ILjava_util_LinkedList$Node_2V(this$static, index_0, node);
}

function java_util_LinkedList_LinkedList__V(){
  this.java_util_LinkedList_header = new java_util_LinkedList$Node_LinkedList$Node__V;
  this.java_util_LinkedList_tail = new java_util_LinkedList$Node_LinkedList$Node__V;
  this.java_util_LinkedList_header.java_util_LinkedList$Node_next = this.java_util_LinkedList_tail;
  this.java_util_LinkedList_tail.java_util_LinkedList$Node_prev = this.java_util_LinkedList_header;
  this.java_util_LinkedList_header.java_util_LinkedList$Node_prev = this.java_util_LinkedList_tail.java_util_LinkedList$Node_next = null;
  this.java_util_LinkedList_size = 0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(169, 244, $intern_74, java_util_LinkedList_LinkedList__V);
_.add__Ljava_lang_Object_2Z = function java_util_LinkedList_add__Ljava_lang_Object_2Z(o){
  java_util_LinkedList_$addNode__Ljava_util_LinkedList_2Ljava_lang_Object_2Ljava_util_LinkedList$Node_2Ljava_util_LinkedList$Node_2V(this, o, this.java_util_LinkedList_tail.java_util_LinkedList$Node_prev, this.java_util_LinkedList_tail);
  return true;
}
;
_.listIterator__ILjava_util_ListIterator_2 = function java_util_LinkedList_listIterator__ILjava_util_ListIterator_2(index_0){
  return java_util_LinkedList_$listIterator__Ljava_util_LinkedList_2ILjava_util_ListIterator_2(this, index_0);
}
;
_.size__I = function java_util_LinkedList_size__I(){
  return this.java_util_LinkedList_size;
}
;
_.java_util_LinkedList_size = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1LinkedList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'LinkedList', 169);
function java_util_LinkedList$ListIteratorImpl_LinkedList$ListIteratorImpl__Ljava_util_LinkedList_2ILjava_util_LinkedList$Node_2V(this$0, index_0, startNode){
  this.java_util_LinkedList$ListIteratorImpl_this$01 = this$0;
  this.java_util_LinkedList$ListIteratorImpl_currentNode = startNode;
  this.java_util_LinkedList$ListIteratorImpl_currentIndex = index_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(192, 1, {}, java_util_LinkedList$ListIteratorImpl_LinkedList$ListIteratorImpl__Ljava_util_LinkedList_2ILjava_util_LinkedList$Node_2V);
_.hasNext__Z = function java_util_LinkedList$ListIteratorImpl_hasNext__Z(){
  return this.java_util_LinkedList$ListIteratorImpl_currentNode != this.java_util_LinkedList$ListIteratorImpl_this$01.java_util_LinkedList_tail;
}
;
_.hasPrevious__Z = function java_util_LinkedList$ListIteratorImpl_hasPrevious__Z(){
  return this.java_util_LinkedList$ListIteratorImpl_currentNode.java_util_LinkedList$Node_prev != this.java_util_LinkedList$ListIteratorImpl_this$01.java_util_LinkedList_header;
}
;
_.next__Ljava_lang_Object_2 = function java_util_LinkedList$ListIteratorImpl_next__Ljava_lang_Object_2(){
  return com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(this.java_util_LinkedList$ListIteratorImpl_currentNode != this.java_util_LinkedList$ListIteratorImpl_this$01.java_util_LinkedList_tail) , this.java_util_LinkedList$ListIteratorImpl_lastNode = this.java_util_LinkedList$ListIteratorImpl_currentNode , this.java_util_LinkedList$ListIteratorImpl_currentNode = this.java_util_LinkedList$ListIteratorImpl_currentNode.java_util_LinkedList$Node_next , ++this.java_util_LinkedList$ListIteratorImpl_currentIndex , this.java_util_LinkedList$ListIteratorImpl_lastNode.java_util_LinkedList$Node_value;
}
;
_.previous__Ljava_lang_Object_2 = function java_util_LinkedList$ListIteratorImpl_previous__Ljava_lang_Object_2(){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(this.java_util_LinkedList$ListIteratorImpl_currentNode.java_util_LinkedList$Node_prev != this.java_util_LinkedList$ListIteratorImpl_this$01.java_util_LinkedList_header);
  this.java_util_LinkedList$ListIteratorImpl_lastNode = this.java_util_LinkedList$ListIteratorImpl_currentNode = this.java_util_LinkedList$ListIteratorImpl_currentNode.java_util_LinkedList$Node_prev;
  --this.java_util_LinkedList$ListIteratorImpl_currentIndex;
  return this.java_util_LinkedList$ListIteratorImpl_lastNode.java_util_LinkedList$Node_value;
}
;
_.java_util_LinkedList$ListIteratorImpl_currentIndex = 0;
_.java_util_LinkedList$ListIteratorImpl_lastNode = null;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1LinkedList$ListIteratorImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'LinkedList/ListIteratorImpl', 192);
function java_util_LinkedList$Node_LinkedList$Node__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(71, 1, {}, java_util_LinkedList$Node_LinkedList$Node__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1LinkedList$Node_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'LinkedList/Node', 71);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Map$Entry_12_1classLit = java_lang_Class_createForInterface__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_71, 'Map/Entry');
function java_util_NoSuchElementException_NoSuchElementException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(36, 10, {3:1, 5:1, 36:1}, java_util_NoSuchElementException_NoSuchElementException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1NoSuchElementException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'NoSuchElementException', 36);
function java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(a, b){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(a) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(b) || a != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(a, b);
}

function java_util_Objects_hashCode__Ljava_lang_Object_2I(o){
  return o != null?java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(o):0;
}

function java_util_Vector_Vector__V(){
  this.java_util_Vector_arrayList = new java_util_ArrayList_ArrayList__V;
}

function java_util_Vector_checkArrayElementIndex__IIV(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new java_lang_ArrayIndexOutOfBoundsException_ArrayIndexOutOfBoundsException__V;
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(94, 234, $intern_74, java_util_Vector_Vector__V);
_.add__ILjava_lang_Object_2V = function java_util_Vector_add__ILjava_lang_Object_2V(index_0, o){
  java_util_Vector_checkArrayElementIndex__IIV(index_0, this.java_util_Vector_arrayList.java_util_ArrayList_array.length + 1);
  java_util_ArrayList_$add__Ljava_util_ArrayList_2ILjava_lang_Object_2V(this.java_util_Vector_arrayList, index_0, o);
}
;
_.add__Ljava_lang_Object_2Z = function java_util_Vector_add__Ljava_lang_Object_2Z(o){
  return java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this.java_util_Vector_arrayList, o);
}
;
_.contains__Ljava_lang_Object_2Z = function java_util_Vector_contains__Ljava_lang_Object_2Z(elem){
  return java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this.java_util_Vector_arrayList, elem, 0) != -1;
}
;
_.get__ILjava_lang_Object_2 = function java_util_Vector_get__ILjava_lang_Object_2(index_0){
  java_util_Vector_checkArrayElementIndex__IIV(index_0, this.java_util_Vector_arrayList.java_util_ArrayList_array.length);
  return java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this.java_util_Vector_arrayList, index_0);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_Vector_iterator__Ljava_util_Iterator_2(){
  return new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this.java_util_Vector_arrayList);
}
;
_.size__I = function java_util_Vector_size__I(){
  return this.java_util_Vector_arrayList.java_util_ArrayList_array.length;
}
;
_.toString__Ljava_lang_String_2$ = function java_util_Vector_toString__Ljava_lang_String_2(){
  return java_util_AbstractCollection_$toString__Ljava_util_AbstractCollection_2Ljava_lang_String_2(this.java_util_Vector_arrayList);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Vector_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'Vector', 94);
function java_util_Stack_Stack__V(){
  java_util_Vector_Vector__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(170, 94, $intern_74, java_util_Stack_Stack__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Stack_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'Stack', 170);
function java_util_TreeMap_$getEntry__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static, key){
  var c, childNum, tree;
  tree = this$static.java_util_TreeMap_root;
  while (tree) {
    c = java_util_Comparators$1_$compare__Ljava_util_Comparators$1_2Ljava_lang_Object_2Ljava_lang_Object_2I(key, tree.java_util_AbstractMap$AbstractEntry_key);
    if (c == 0) {
      return tree;
    }
    childNum = c < 0?0:1;
    tree = tree.java_util_TreeMap$Node_child[childNum];
  }
  return null;
}

function java_util_TreeMap_$inOrderAdd__Ljava_util_TreeMap_2Ljava_util_List_2Ljava_util_TreeMap$SubMapType_2Ljava_util_TreeMap$Node_2Ljava_lang_Object_2ZLjava_lang_Object_2ZV(this$static, list, type_0, current, fromKey, fromInclusive, toKey, toInclusive){
  var leftNode, rightNode;
  if (!current) {
    return;
  }
  leftNode = current.java_util_TreeMap$Node_child[0];
  !!leftNode && java_util_TreeMap_$inOrderAdd__Ljava_util_TreeMap_2Ljava_util_List_2Ljava_util_TreeMap$SubMapType_2Ljava_util_TreeMap$Node_2Ljava_lang_Object_2ZLjava_lang_Object_2ZV(this$static, list, type_0, leftNode, fromKey, fromInclusive, toKey, toInclusive);
  java_util_TreeMap_$inRange__Ljava_util_TreeMap_2Ljava_util_TreeMap$SubMapType_2Ljava_lang_Object_2Ljava_lang_Object_2ZLjava_lang_Object_2ZZ(type_0, current.java_util_AbstractMap$AbstractEntry_key, fromKey, fromInclusive, toKey, toInclusive) && list.add__Ljava_lang_Object_2Z(current);
  rightNode = current.java_util_TreeMap$Node_child[1];
  !!rightNode && java_util_TreeMap_$inOrderAdd__Ljava_util_TreeMap_2Ljava_util_List_2Ljava_util_TreeMap$SubMapType_2Ljava_util_TreeMap$Node_2Ljava_lang_Object_2ZLjava_lang_Object_2ZV(this$static, list, type_0, rightNode, fromKey, fromInclusive, toKey, toInclusive);
}

function java_util_TreeMap_$inRange__Ljava_util_TreeMap_2Ljava_util_TreeMap$SubMapType_2Ljava_lang_Object_2Ljava_lang_Object_2ZLjava_lang_Object_2ZZ(type_0, key, fromKey, fromInclusive, toKey, toInclusive){
  var java_util_TreeMap_$smaller__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_lang_Object_2ZZ_compare_0, java_util_TreeMap_$larger__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_lang_Object_2ZZ_compare_0;
  if (type_0.fromKeyValid__Z() && (java_util_TreeMap_$smaller__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_lang_Object_2ZZ_compare_0 = java_util_Comparators$1_$compare__Ljava_util_Comparators$1_2Ljava_lang_Object_2Ljava_lang_Object_2I(key, fromKey) , java_util_TreeMap_$smaller__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_lang_Object_2ZZ_compare_0 < 0 || !fromInclusive && java_util_TreeMap_$smaller__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_lang_Object_2ZZ_compare_0 == 0)) {
    return false;
  }
  if (type_0.toKeyValid__Z() && (java_util_TreeMap_$larger__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_lang_Object_2ZZ_compare_0 = java_util_Comparators$1_$compare__Ljava_util_Comparators$1_2Ljava_lang_Object_2Ljava_lang_Object_2I(key, toKey) , java_util_TreeMap_$larger__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_lang_Object_2ZZ_compare_0 > 0 || !toInclusive && java_util_TreeMap_$larger__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_lang_Object_2ZZ_compare_0 == 0)) {
    return false;
  }
  return true;
}

function java_util_TreeMap_$insert__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2Ljava_util_TreeMap$Node_2Ljava_util_TreeMap$State_2Ljava_util_TreeMap$Node_2(this$static, tree, newNode, state){
  var c, childNum, java_util_TreeMap_$rotateDouble__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2ILjava_util_TreeMap$Node_2_otherChildDir_0;
  if (!tree) {
    return newNode;
  }
   else {
    c = java_util_Comparators$1_$compare__Ljava_util_Comparators$1_2Ljava_lang_Object_2Ljava_lang_Object_2I(newNode.java_util_AbstractMap$AbstractEntry_key, tree.java_util_AbstractMap$AbstractEntry_key);
    if (c == 0) {
      state.java_util_TreeMap$State_value = java_util_AbstractMap$AbstractEntry_$setValue__Ljava_util_AbstractMap$AbstractEntry_2Ljava_lang_Object_2Ljava_lang_Object_2(tree, newNode.java_util_AbstractMap$AbstractEntry_value);
      state.java_util_TreeMap$State_found = true;
      return tree;
    }
    childNum = c < 0?0:1;
    tree.java_util_TreeMap$Node_child[childNum] = java_util_TreeMap_$insert__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2Ljava_util_TreeMap$Node_2Ljava_util_TreeMap$State_2Ljava_util_TreeMap$Node_2(this$static, tree.java_util_TreeMap$Node_child[childNum], newNode, state);
    if (java_util_TreeMap_$isRed__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2Z(tree.java_util_TreeMap$Node_child[childNum])) {
      if (java_util_TreeMap_$isRed__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2Z(tree.java_util_TreeMap$Node_child[1 - childNum])) {
        tree.java_util_TreeMap$Node_isRed = true;
        tree.java_util_TreeMap$Node_child[0].java_util_TreeMap$Node_isRed = false;
        tree.java_util_TreeMap$Node_child[1].java_util_TreeMap$Node_isRed = false;
      }
       else {
        java_util_TreeMap_$isRed__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2Z(tree.java_util_TreeMap$Node_child[childNum].java_util_TreeMap$Node_child[childNum])?(tree = java_util_TreeMap_$rotateSingle__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2ILjava_util_TreeMap$Node_2(tree, 1 - childNum)):java_util_TreeMap_$isRed__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2Z(tree.java_util_TreeMap$Node_child[childNum].java_util_TreeMap$Node_child[1 - childNum]) && (tree = (java_util_TreeMap_$rotateDouble__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2ILjava_util_TreeMap$Node_2_otherChildDir_0 = 1 - (1 - childNum) , tree.java_util_TreeMap$Node_child[java_util_TreeMap_$rotateDouble__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2ILjava_util_TreeMap$Node_2_otherChildDir_0] = java_util_TreeMap_$rotateSingle__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2ILjava_util_TreeMap$Node_2(tree.java_util_TreeMap$Node_child[java_util_TreeMap_$rotateDouble__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2ILjava_util_TreeMap$Node_2_otherChildDir_0], java_util_TreeMap_$rotateDouble__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2ILjava_util_TreeMap$Node_2_otherChildDir_0) , java_util_TreeMap_$rotateSingle__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2ILjava_util_TreeMap$Node_2(tree, 1 - childNum)));
      }
    }
  }
  return tree;
}

function java_util_TreeMap_$isRed__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2Z(node){
  return !!node && node.java_util_TreeMap$Node_isRed;
}

function java_util_TreeMap_$put__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  var node, state;
  node = new java_util_TreeMap$Node_TreeMap$Node__Ljava_lang_Object_2Ljava_lang_Object_2V(key, value_0);
  state = new java_util_TreeMap$State_TreeMap$State__V;
  this$static.java_util_TreeMap_root = java_util_TreeMap_$insert__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2Ljava_util_TreeMap$Node_2Ljava_util_TreeMap$State_2Ljava_util_TreeMap$Node_2(this$static, this$static.java_util_TreeMap_root, node, state);
  state.java_util_TreeMap$State_found || ++this$static.java_util_TreeMap_size;
  this$static.java_util_TreeMap_root.java_util_TreeMap$Node_isRed = false;
  return state.java_util_TreeMap$State_value;
}

function java_util_TreeMap_$rotateSingle__Ljava_util_TreeMap_2Ljava_util_TreeMap$Node_2ILjava_util_TreeMap$Node_2(tree, rotateDirection){
  var otherChildDir, save;
  otherChildDir = 1 - rotateDirection;
  save = tree.java_util_TreeMap$Node_child[otherChildDir];
  tree.java_util_TreeMap$Node_child[otherChildDir] = save.java_util_TreeMap$Node_child[rotateDirection];
  save.java_util_TreeMap$Node_child[rotateDirection] = tree;
  tree.java_util_TreeMap$Node_isRed = true;
  save.java_util_TreeMap$Node_isRed = false;
  return save;
}

function java_util_TreeMap_TreeMap__Ljava_util_Comparator_2V(c){
  this.java_util_TreeMap_root = null;
  !c && (java_util_Comparators_$clinit__V() , java_util_Comparators_$clinit__V() , java_util_Comparators_NATURAL);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(95, 245, $intern_76, java_util_TreeMap_TreeMap__Ljava_util_Comparator_2V);
_.entrySet__Ljava_util_Set_2 = function java_util_TreeMap_entrySet__Ljava_util_Set_2(){
  return new java_util_TreeMap$EntrySet_TreeMap$EntrySet__Ljava_util_TreeMap_2V(this);
}
;
_.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_TreeMap_put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0){
  return java_util_TreeMap_$put__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this, key, value_0);
}
;
_.size__I = function java_util_TreeMap_size__I(){
  return this.java_util_TreeMap_size;
}
;
_.java_util_TreeMap_size = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1TreeMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'TreeMap', 95);
function java_util_TreeMap$EntryIterator_TreeMap$EntryIterator__Ljava_util_TreeMap_2V(this$0){
  java_util_TreeMap$EntryIterator_TreeMap$EntryIterator__Ljava_util_TreeMap_2Ljava_util_TreeMap$SubMapType_2Ljava_lang_Object_2ZLjava_lang_Object_2ZV.call(this, this$0, (java_util_TreeMap$SubMapType_$clinit__V() , java_util_TreeMap$SubMapType_All));
}

function java_util_TreeMap$EntryIterator_TreeMap$EntryIterator__Ljava_util_TreeMap_2Ljava_util_TreeMap$SubMapType_2Ljava_lang_Object_2ZLjava_lang_Object_2ZV(this$0, type_0){
  var list;
  list = new java_util_ArrayList_ArrayList__V;
  java_util_TreeMap_$inOrderAdd__Ljava_util_TreeMap_2Ljava_util_List_2Ljava_util_TreeMap$SubMapType_2Ljava_util_TreeMap$Node_2Ljava_lang_Object_2ZLjava_lang_Object_2ZV(this$0, list, type_0, this$0.java_util_TreeMap_root, null, false, null, false);
  this.java_util_TreeMap$EntryIterator_iter = new java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(list, 0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(72, 1, {}, java_util_TreeMap$EntryIterator_TreeMap$EntryIterator__Ljava_util_TreeMap_2V);
_.hasNext__Z = function java_util_TreeMap$EntryIterator_hasNext__Z(){
  return this.java_util_TreeMap$EntryIterator_iter.hasNext__Z();
}
;
_.next__Ljava_lang_Object_2 = function java_util_TreeMap$EntryIterator_next__Ljava_lang_Object_2(){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this.java_util_TreeMap$EntryIterator_iter.next__Ljava_lang_Object_2(), 8);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1TreeMap$EntryIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'TreeMap/EntryIterator', 72);
function java_util_TreeMap$EntrySet_TreeMap$EntrySet__Ljava_util_TreeMap_2V(this$0){
  java_util_AbstractNavigableMap$EntrySet_AbstractNavigableMap$EntrySet__Ljava_util_AbstractNavigableMap_2V.call(this, this$0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(100, 99, $intern_72, java_util_TreeMap$EntrySet_TreeMap$EntrySet__Ljava_util_TreeMap_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1TreeMap$EntrySet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'TreeMap/EntrySet', 100);
function java_util_TreeMap$Node_TreeMap$Node__Ljava_lang_Object_2Ljava_lang_Object_2V(key, value_0){
  java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V.call(this, key, value_0);
  this.java_util_TreeMap$Node_child = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1TreeMap$Node_12_1classLit, $intern_6, 60, 2, 0, 1);
  this.java_util_TreeMap$Node_isRed = true;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(60, 41, {44:1, 41:1, 8:1, 60:1}, java_util_TreeMap$Node_TreeMap$Node__Ljava_lang_Object_2Ljava_lang_Object_2V);
_.java_util_TreeMap$Node_isRed = false;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1TreeMap$Node_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'TreeMap/Node', 60);
function java_util_TreeMap$State_TreeMap$State__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(193, 1, {}, java_util_TreeMap$State_TreeMap$State__V);
_.toString__Ljava_lang_String_2$ = function java_util_TreeMap$State_toString__Ljava_lang_String_2(){
  return 'State: mv=' + this.java_util_TreeMap$State_matchValue + ' value=' + this.java_util_TreeMap$State_value + ' done=' + this.java_util_TreeMap$State_done + ' found=' + this.java_util_TreeMap$State_found;
}
;
_.java_util_TreeMap$State_done = false;
_.java_util_TreeMap$State_found = false;
_.java_util_TreeMap$State_matchValue = false;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1TreeMap$State_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'TreeMap/State', 193);
function java_util_TreeMap$SubMapType_$clinit__V(){
  java_util_TreeMap$SubMapType_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_util_TreeMap$SubMapType_All = new java_util_TreeMap$SubMapType_TreeMap$SubMapType__Ljava_lang_String_2IV('All', 0);
  java_util_TreeMap$SubMapType_Head = new java_util_TreeMap$SubMapType$1_TreeMap$SubMapType$1__Ljava_lang_String_2IV;
  java_util_TreeMap$SubMapType_Range = new java_util_TreeMap$SubMapType$2_TreeMap$SubMapType$2__Ljava_lang_String_2IV;
  java_util_TreeMap$SubMapType_Tail = new java_util_TreeMap$SubMapType$3_TreeMap$SubMapType$3__Ljava_lang_String_2IV;
}

function java_util_TreeMap$SubMapType_TreeMap$SubMapType__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function java_util_TreeMap$SubMapType_values___3Ljava_util_TreeMap$SubMapType_2(){
  java_util_TreeMap$SubMapType_$clinit__V();
  return com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1TreeMap$SubMapType_12_1classLit, 1), $intern_6, 30, 0, [java_util_TreeMap$SubMapType_All, java_util_TreeMap$SubMapType_Head, java_util_TreeMap$SubMapType_Range, java_util_TreeMap$SubMapType_Tail]);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(30, 6, $intern_78, java_util_TreeMap$SubMapType_TreeMap$SubMapType__Ljava_lang_String_2IV);
_.fromKeyValid__Z = function java_util_TreeMap$SubMapType_fromKeyValid__Z(){
  return false;
}
;
_.toKeyValid__Z = function java_util_TreeMap$SubMapType_toKeyValid__Z(){
  return false;
}
;
var java_util_TreeMap$SubMapType_All, java_util_TreeMap$SubMapType_Head, java_util_TreeMap$SubMapType_Range, java_util_TreeMap$SubMapType_Tail;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1TreeMap$SubMapType_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_71, 'TreeMap/SubMapType', 30, java_util_TreeMap$SubMapType_values___3Ljava_util_TreeMap$SubMapType_2);
function java_util_TreeMap$SubMapType$1_TreeMap$SubMapType$1__Ljava_lang_String_2IV(){
  java_util_TreeMap$SubMapType_TreeMap$SubMapType__Ljava_lang_String_2IV.call(this, 'Head', 1);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(194, 30, $intern_78, java_util_TreeMap$SubMapType$1_TreeMap$SubMapType$1__Ljava_lang_String_2IV);
_.toKeyValid__Z = function java_util_TreeMap$SubMapType$1_toKeyValid__Z(){
  return true;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1TreeMap$SubMapType$1_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_71, 'TreeMap/SubMapType/1', 194, null);
function java_util_TreeMap$SubMapType$2_TreeMap$SubMapType$2__Ljava_lang_String_2IV(){
  java_util_TreeMap$SubMapType_TreeMap$SubMapType__Ljava_lang_String_2IV.call(this, 'Range', 2);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(195, 30, $intern_78, java_util_TreeMap$SubMapType$2_TreeMap$SubMapType$2__Ljava_lang_String_2IV);
_.fromKeyValid__Z = function java_util_TreeMap$SubMapType$2_fromKeyValid__Z(){
  return true;
}
;
_.toKeyValid__Z = function java_util_TreeMap$SubMapType$2_toKeyValid__Z(){
  return true;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1TreeMap$SubMapType$2_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_71, 'TreeMap/SubMapType/2', 195, null);
function java_util_TreeMap$SubMapType$3_TreeMap$SubMapType$3__Ljava_lang_String_2IV(){
  java_util_TreeMap$SubMapType_TreeMap$SubMapType__Ljava_lang_String_2IV.call(this, 'Tail', 3);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(196, 30, $intern_78, java_util_TreeMap$SubMapType$3_TreeMap$SubMapType$3__Ljava_lang_String_2IV);
_.fromKeyValid__Z = function java_util_TreeMap$SubMapType$3_fromKeyValid__Z(){
  return true;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1TreeMap$SubMapType$3_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_71, 'TreeMap/SubMapType/3', 196, null);
function java_util_TreeSet_TreeSet__Ljava_util_Comparator_2V(c){
  this.java_util_TreeSet_map = new java_util_TreeMap_TreeMap__Ljava_util_Comparator_2V(c);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(171, 231, $intern_75, java_util_TreeSet_TreeSet__Ljava_util_Comparator_2V);
_.add__Ljava_lang_Object_2Z = function java_util_TreeSet_add__Ljava_lang_Object_2Z(o){
  return java_util_TreeMap_$put__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_TreeSet_map, o, (java_lang_Boolean_$clinit__V() , java_lang_Boolean_FALSE)) == null;
}
;
_.contains__Ljava_lang_Object_2Z = function java_util_TreeSet_contains__Ljava_lang_Object_2Z(o){
  return !!java_util_TreeMap_$getEntry__Ljava_util_TreeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this.java_util_TreeSet_map, o);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_TreeSet_iterator__Ljava_util_Iterator_2(){
  return java_util_AbstractNavigableMap$NavigableKeySet_$iterator__Ljava_util_AbstractNavigableMap$NavigableKeySet_2Ljava_util_Iterator_2(new java_util_AbstractNavigableMap$NavigableKeySet_AbstractNavigableMap$NavigableKeySet__Ljava_util_NavigableMap_2V(this.java_util_TreeSet_map));
}
;
_.size__I = function java_util_TreeSet_size__I(){
  return this.java_util_TreeSet_map.java_util_TreeMap_size;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1TreeSet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_71, 'TreeSet', 171);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1CollapsedPropertyHolder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_79, 'CollapsedPropertyHolder', 218), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1JavaClassHierarchySetupUtil_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_79, 'JavaClassHierarchySetupUtil', 220), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1LongLibBase$LongEmul_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_79, 'LongLibBase/LongEmul', null), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1ModuleUtils_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_79, 'ModuleUtils', 223), com_google_gwt_lang_ClassLiteralHolder_C_1classLit = java_lang_Class_createForPrimitive__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2('char', 'C'), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Map$Entry_12_1classLit = java_lang_Class_createForInterface__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_71, 'Map/Entry'), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1rpc_1XsrfToken_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_36, 'XsrfToken', null);
var $entry = com_google_gwt_lang_ModuleUtils_registerEntry__Lcom_google_gwt_core_client_JavaScriptObject_2();
var gwtOnLoad = gwtOnLoad = com_google_gwt_lang_ModuleUtils_gwtOnLoad__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V;
com_google_gwt_lang_ModuleUtils_addInitFunctions__V(com_google_gwt_lang_edu_100046pdx_100046cs410J_100046whitlock_100046AppointmentBookGwt_1_1EntryMethodHolder_init__V);
com_google_gwt_lang_ModuleUtils_setGwtProperty__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V('permProps', [[['locale', 'default'], ['user.agent', 'ie9']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=apptbook-0.js

