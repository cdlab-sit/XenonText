/* eslint-disable */
ace.define(
  'ace/theme/xenon',
  ['require', 'exports', 'module', 'ace/lib/dom'],
  function (require, exports, module) {
    exports.isDark = true;
    exports.cssClass = 'ace-xenon';
    exports.cssText =
      ' \
    .ace-xenon .ace_cursor{\
        position: relative !important;\
        right: 2px;\
    }\
    .ace-xenon .ace_text-layer{\
        margin-left: 2px !important\
    }\
    .ace-xenon .ace_scroller{\
        left: 40px !important;\
    }\
    .ace-xenon .ace_gutter-layer{\
        width: 40px !important;\
    }\
    .ace-xenon .ace_gutter-cell{\
        padding-left: initial;\
        padding-right: 4px !important;\
        box-sizing: border-box;\
    }\
    .ace-xenon .ace_gutter {\
        color:  #718096;\
        width: 40px !important;\
    }\
    .ace-xenon .ace_print-margin {\
        width: 1px;\
        background: #555651\
    }\
    .ace-xenon {\
        color: #F8F8F2\
    }\
    .ace-xenon .ace_cursor {\
        color: #FFFFFF\
    }\
    .ace-xenon .ace_marker-layer .ace_selection {\
        background: rgba(74, 85, 104, 0.8)\
    }\
    .ace-xenon.ace_multiselect .ace_selection.ace_start {\
        box-shadow: 0 0 3px 0px #272822;\
    }\
    .ace-xenon .ace_marker-layer .ace_step {\
        background: rgb(102, 82, 0)\
    }\
    .ace-xenon .ace_marker-layer .ace_bracket {\
        margin: -1px 0 0 -1px;\
        border: 1px solid #49483E\
    }\
    .ace-xenon .ace_marker-layer .ace_active-line {\
        background: #202020\
    }\
    .ace-xenon .ace_gutter-active-line {\
        background-color: rgba(74, 85, 104, 0.8);\
    }\
    .ace-xenon .ace_marker-layer .ace_selected-word {\
        border: 1px solid #49483E\
    }\
    .ace-xenon .ace_invisible {\
        color: #52524d\
    }\
    .ace-xenon .ace_entity.ace_name.ace_tag,\
    .ace-xenon .ace_keyword,\
    .ace-xenon .ace_meta.ace_tag,\
    .ace-xenon .ace_storage {\
        color: #F92672\
    }\
    .ace-xenon .ace_punctuation,\
    .ace-xenon .ace_punctuation.ace_tag {\
        color: #fff\
    }\
    .ace-xenon .ace_constant.ace_character,\
    .ace-xenon .ace_constant.ace_language,\
    .ace-xenon .ace_constant.ace_numeric,\
    .ace-xenon .ace_constant.ace_other {\
        color: #AE81FF\
    }\
    .ace-xenon .ace_invalid {\
        color: #F8F8F0;\
        background-color: #F92672\
    }\
    .ace-xenon .ace_invalid.ace_deprecated {\
        color: #F8F8F0;\
        background-color: #AE81FF\
    }\
    .ace-xenon .ace_support.ace_constant,\
    .ace-xenon .ace_support.ace_function {\
        color: #66D9EF\
    }\
    .ace-xenon .ace_fold {\
        background-color: #A6E22E;\
        border-color: #F8F8F2\
    }\
    .ace-xenon .ace_storage.ace_type,\
    .ace-xenon .ace_support.ace_class,\
    .ace-xenon .ace_support.ace_type {\
        font-style: italic;\
        color: #66D9EF\
    }\
    .ace-xenon .ace_entity.ace_name.ace_function,\
    .ace-xenon .ace_entity.ace_other,\
    .ace-xenon .ace_entity.ace_other.ace_attribute-name,\
    .ace-xenon .ace_variable {\
        color: #A6E22E\
    }\
    .ace-xenon .ace_variable.ace_parameter {\
        font-style: italic;\
        color: #FD971F\
    }\
    .ace-xenon .ace_string {\
        color: #E6DB74\
    }\
    .ace-xenon .ace_comment {\
        color: #75715E\
    }\
    .ace-xenon .ace_indent-guide {\
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\
    }';
  },
);

/* eslint-enable */
