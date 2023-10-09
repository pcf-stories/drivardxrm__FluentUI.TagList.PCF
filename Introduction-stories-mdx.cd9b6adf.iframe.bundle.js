/*! For license information please see Introduction-stories-mdx.cd9b6adf.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkpcf_project=self.webpackChunkpcf_project||[]).push([[984],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/Introduction.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>Introduction_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=(__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"));__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p,__webpack_require__.p;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2",img:"img",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Introduction"}),"\n",(0,jsx_runtime.jsx)("style",{children:"\n    .subheading {\n      --mediumdark: '#999999';\n      font-weight: 900;\n      font-size: 13px;\n      color: #999;\n      letter-spacing: 6px;\n      line-height: 24px;\n      text-transform: uppercase;\n      margin-bottom: 12px;\n      margin-top: 40px;\n    }\n\n    .link-list {\n      display: grid;\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr 1fr;\n      row-gap: 10px;\n    }\n\n    @media (min-width: 620px) {\n      .link-list {\n        row-gap: 20px;\n        column-gap: 20px;\n        grid-template-columns: 1fr 1fr;\n      }\n    }\n\n    @media all and (-ms-high-contrast:none) {\n    .link-list {\n        display: -ms-grid;\n        -ms-grid-columns: 1fr 1fr;\n        -ms-grid-rows: 1fr 1fr;\n      }\n    }\n\n    .link-item {\n      display: block;\n      padding: 20px 30px 20px 15px;\n      border: 1px solid #00000010;\n      border-radius: 5px;\n      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n      color: #333333;\n      display: flex;\n      align-items: flex-start;\n    }\n\n    .link-item:hover {\n      border-color: #1EA7FD50;\n      transform: translate3d(0, -3px, 0);\n      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n    }\n\n    .link-item:active {\n      border-color: #1EA7FD;\n      transform: translate3d(0, 0, 0);\n    }\n\n    .link-item strong {\n      font-weight: 700;\n      display: block;\n      margin-bottom: 2px;\n    }\n\n    .link-item img {\n      height: 40px;\n      width: 40px;\n      margin-right: 15px;\n      flex: none;\n    }\n\n    .link-item span {\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .tip {\n      display: inline-block;\n      border-radius: 1em;\n      font-size: 11px;\n      line-height: 12px;\n      font-weight: 700;\n      background: #E7FDD8;\n      color: #66BF3C;\n      padding: 4px 12px;\n      margin-right: 10px;\n      vertical-align: top;\n    }\n\n    .tip-wrapper {\n      font-size: 13px;\n      line-height: 20px;\n      margin-top: 40px;\n      margin-bottom: 40px;\n    }\n\n    .tip-wrapper code {\n      font-size: 12px;\n      display: inline-block;\n    }\n  "}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"fluentui-taglist-pcf-storybook",children:"FluentUI TagList PCF Storybook"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)("img",{src:"https://raw.githubusercontent.com/drivardxrm/IconOptionSet.PCF/master/iconoptionset.gif"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"FluentUI TagList PCF"})," Control that turns a dataset into a Tag list (FluentUI Badges)."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"download",children:"Download"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.img,{src:"https://img.shields.io/github/v/release/drivardxrm/FluentUI.TagList.PCF",alt:"GitHub release (latest by date)"}),"\r\n📦",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/drivardxrm/FluentUI.TagList.PCF/releases/latest",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://github.com/drivardxrm/FluentUI.TagList.PCF/releases/latest"})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"parameters",children:"Parameters"}),"\n",(0,jsx_runtime.jsxs)(_components.table,{children:[(0,jsx_runtime.jsx)(_components.thead,{children:(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.th,{children:"Parameter"}),(0,jsx_runtime.jsx)(_components.th,{children:"Description"}),(0,jsx_runtime.jsx)(_components.th,{children:"Default"})]})}),(0,jsx_runtime.jsxs)(_components.tbody,{children:[(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:"Tags Dataset"}),(0,jsx_runtime.jsx)(_components.td,{children:"Dataset to Expose"}),(0,jsx_runtime.jsx)(_components.td,{})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:"-> Tag Label"}),(0,jsx_runtime.jsx)(_components.td,{children:"Text of the tag (Dataset Bound Column)"}),(0,jsx_runtime.jsx)(_components.td,{})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:"Show Record Image"}),(0,jsx_runtime.jsx)(_components.td,{children:"Show the record image beside the text."}),(0,jsx_runtime.jsx)(_components.td,{children:"false"})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:"Open Record OnClick"}),(0,jsx_runtime.jsx)(_components.td,{children:"Open Record OnClick"}),(0,jsx_runtime.jsx)(_components.td,{children:"false"})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:"Appearance"}),(0,jsx_runtime.jsx)(_components.td,{children:"Appearance of the Badge."}),(0,jsx_runtime.jsx)(_components.td,{children:"filled"})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:"Size"}),(0,jsx_runtime.jsx)(_components.td,{children:"Size of the Badge."}),(0,jsx_runtime.jsx)(_components.td,{children:"Medium"})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:"Shape"}),(0,jsx_runtime.jsx)(_components.td,{children:"Shape of the Badge."}),(0,jsx_runtime.jsx)(_components.td,{children:"Rounded"})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:"ImageShape"}),(0,jsx_runtime.jsx)(_components.td,{children:"Shape of the Image if showRecordImage is set to true."}),(0,jsx_runtime.jsx)(_components.td,{children:"Rounded"})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:"Color"}),(0,jsx_runtime.jsx)(_components.td,{children:"Color of the Badge."}),(0,jsx_runtime.jsx)(_components.td,{children:"Brand"})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:"Theme"}),(0,jsx_runtime.jsx)(_components.td,{children:"Theme"}),(0,jsx_runtime.jsx)(_components.td,{children:"Web Light"})]})]})]}),"\n",(0,jsx_runtime.jsx)("div",{className:"tip-wrapper",children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("span",{className:"tip",children:"Tip"}),"Browse example stories now by navigating to them in the sidebar.\r\nView their code in the ",(0,jsx_runtime.jsx)("code",{children:"stories"})," directory to learn how they work."]})}),"\n",(0,jsx_runtime.jsx)("div",{className:"tip-wrapper",children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("span",{className:"tip",children:"Acknowlegment"})," Stories implemented with the help of the ",(0,jsx_runtime.jsx)("code",{children:"ComponentFramework Mock"})," library by ",(0,jsx_runtime.jsx)("a",{href:"https://shko.online/",target:"_blank",children:"Shko Online"})]})}),"\n",(0,jsx_runtime.jsx)("div",{className:"subheading",children:"Links"}),"\n",(0,jsx_runtime.jsxs)("div",{className:"link-list",children:[(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://github.com/drivardxrm/FluentUI.TagList.PCF",target:"_blank",children:[(0,jsx_runtime.jsx)(_components.p,{children:"Github"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"GitHub Repo"}),"\r\nFluentUI.TagList.PCF"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://pcf.gallery/optionset-icons/",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:"https://pcf.gallery/assets/images/logo.png",alt:"PCF Gallery"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"PCF Gallery"}),"\r\nIconOptionSet PCF"]})})]}),(0,jsx_runtime.jsxs)("a",{className:"link-item",href:"https://github.com/Shko-Online/ComponentFramework-Mock",target:"_blank",children:[(0,jsx_runtime.jsx)("img",{src:"https://avatars.githubusercontent.com/u/103819795?s=200&v=4",alt:"Shko Online"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)("strong",{children:"Shko Online"}),"\r\nComponentFramework Mock"]})})]})]})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Introduction",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const Introduction_stories=componentMeta},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);