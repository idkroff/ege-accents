"use strict";(self.webpackChunkege_accents_app=self.webpackChunkege_accents_app||[]).push([[546],{7741:function(t,e,n){var r=n(184);e.Z=function(t){return(0,r.jsx)("div",{style:Object.assign({padding:"3px 10px 6px 10px",backgroundColor:"var(--secondary-color)",color:"var(--font-color)",cursor:"pointer",borderRadius:"var(--border-radius-default)",fontWeight:500,fontSize:20},t.style),onClick:t.onClick,children:"\u041e\u0442\u043c\u0435\u043d\u0430"})}},8813:function(t,e,n){var r=n(184);e.Z=function(t){return(0,r.jsx)("div",{style:Object.assign({padding:"3px 10px 6px 10px",backgroundColor:"var(--green-color)",cursor:"pointer",borderRadius:"var(--border-radius-default)",fontWeight:500,fontSize:20,color:"#fff"},t.style),onClick:t.onClick,children:"\u0414\u0430"})}},8723:function(t,e,n){var r=n(6871),o=n(7394),s=n(184);e.Z=function(){var t=(0,r.s0)();return(0,s.jsxs)("div",{onClick:function(){return t(-1)},style:{position:"absolute",top:15,left:15,padding:"6px 10px",backgroundColor:"var(--secondary-color)",transition:"background-color 0.2s ease",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:28},children:[(0,s.jsx)(o.Z,{fontSize:"inherit"}),(0,s.jsx)("div",{className:"desktopOnly",style:{paddingLeft:6,paddingRight:4,fontSize:20,marginTop:-3},children:(0,s.jsx)("span",{style:{fontWeight:500},children:"\u041d\u0430\u0437\u0430\u0434"})})]})}},6521:function(t,e,n){n.d(e,{Z:function(){return m}});var r=n(4942);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var i=n(885),a=n(3366);var c=n(3504),l=n(6871),d=n(390),u=n(2791),h=n(8192),p=n(184),f=["replace","state","target","to","children","style","className"],m=u.forwardRef((function(t,e){var n=t.replace,r=t.state,o=t.target,m=t.to,v=t.children,j=t.style,x=t.className,g=function(t,e){if(null==t)return{};var n,r,o=(0,a.Z)(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(t,f),y=u.useTransition(),C=(0,i.Z)(y,2)[1],k=(0,l.TH)(),S=(0,c.gs)(m,{replace:n,state:r,target:o}),w=(0,l.WU)(m),b=(0,u.useContext)(h.O);return(0,p.jsx)(c.rU,s(s({onClick:function(t){t.preventDefault(),(0,d.Ep)(k)!==(0,d.Ep)(w)&&b.showLoader(),C((function(){return S(t)}))},ref:e,to:m,replace:n,state:r,target:o},g),{},{className:x||"",style:j,children:v}))}))},3546:function(t,e,n){n.r(e),n.d(e,{default:function(){return S}});var r=n(885),o=n(5671),s=n(3144),i=n(9340),a=n(2882),c=n(2791),l={Container:"Stats_Container__TkVNF",Main:"Stats_Main__Zg04Y",Header:"Stats_Header__PMMW1",ClearStatsIcon:"Stats_ClearStatsIcon__U7mb7",HistoryLink:"Stats_HistoryLink__CoWzI",StatsDataContainer:"Stats_StatsDataContainer__QlG5t",CommonMisstakesContainer:"Stats_CommonMisstakesContainer__iVZSb",CommonMisstakesLayout:"Stats_CommonMisstakesLayout__OQxh6",CommonWrongWordContainer:"Stats_CommonWrongWordContainer__fiOj7"},d=n(8723),u=n(6521),h=n(7247),p=n(8192),f=n(3708),m=n(8813),v=n(7741),j=n(693),x=n(184),g=function(t){(0,i.Z)(n,t);var e=(0,a.Z)(n);function n(){var t;return(0,o.Z)(this,n),(t=e.call(this)).storage=new j.Z,t.state={computedStats:t.getComputedStats()},t}return(0,s.Z)(n,[{key:"componentDidMount",value:function(){this.context.hideLoader()}},{key:"getComputedStats",value:function(){var t,e,n,o=this.storage.getStats(),s={};if(null!==o&&void 0!==o&&o.wordCount&&(null!==o&&void 0!==o&&null!==(t=o.wordCount)&&void 0!==t&&t.correct||null!==o&&void 0!==o&&null!==(e=o.wordCount)&&void 0!==e&&e.wrong)&&(s.correctPercent=Math.round(o.wordCount.correct/(o.wordCount.correct+o.wordCount.wrong)*100)),null!==o&&void 0!==o&&null!==(n=o.misstakes)&&void 0!==n&&n.length){var i={},a={};o.misstakes.forEach((function(t){i.hasOwnProperty(t.wordType)||(i[t.wordType]=0),i[t.wordType]++,a.hasOwnProperty(t.word)||(a[t.word]=0),a[t.word]++})),(i=Object.entries(i)).sort((function(t,e){return e[1]-t[1]})),(a=Object.entries(a)).sort((function(t,e){return e[1]-t[1]})),s.commonMisstakes={words:a.slice(0,5).map((function(t){var e=(0,r.Z)(t,2);return{word:e[0],count:e[1]}})),wordType:{type:i[0][0],count:i[0][1]}}}return null!==o&&void 0!==o&&o.solutionTime&&(o.solutionTime.sort((function(t,e){return t-e})),s.solutionTimeAvg=+((o.solutionTime[Math.floor(o.solutionTime.length/2)]+o.solutionTime[Math.ceil(o.solutionTime.length/2)])/2).toFixed(2)),s}},{key:"requireClearStatsConfirm",value:function(){var t=this;f.Z.show({html:(0,x.jsxs)("div",{children:[(0,x.jsx)("h2",{children:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0432\u0441\u044e \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443?"}),(0,x.jsx)("span",{children:"\u042d\u0442\u043e \u043d\u0435 \u043e\u0447\u0438\u0441\u0442\u0438\u0442 \u0438\u0441\u0442\u043e\u0440\u0438\u044e \u043e\u0442\u0432\u0435\u0442\u043e\u0432"}),(0,x.jsxs)("div",{style:{marginTop:20,display:"flex",gap:20},children:[(0,x.jsx)(m.Z,{style:{flex:"1 1 0",backgroundColor:"var(--red-color)"},onClick:function(){return t.clearStats()}}),(0,x.jsx)(v.Z,{style:{flex:"1 1 0"},onClick:f.Z.close})]})]})})}},{key:"clearStats",value:function(){var t=this;this.setState({computedStats:{}},(function(){t.storage.setZeroStats(),f.Z.close()}))}},{key:"render",value:function(){var t,e,n,r=this;return(0,x.jsxs)("div",{className:l.Container,children:[(0,x.jsx)(d.Z,{}),(0,x.jsx)("div",{className:l.Main,children:(0,x.jsxs)("div",{className:l.StatsContainer,children:[(0,x.jsxs)("div",{className:l.Header,children:[(0,x.jsx)("span",{children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"}),(0,x.jsx)("div",{className:"".concat(l.ClearStatsIcon," themeBackground"),onClick:function(){return r.requireClearStatsConfirm()},children:(0,x.jsx)(h.Z,{fontSize:"inherit"})})]}),(0,x.jsx)("h2",{children:"\u041a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u0439"}),null!==(t=this.state.computedStats)&&void 0!==t&&t.correctPercent?(0,x.jsxs)("div",{children:["\u0418\u0437 \u0432\u0441\u0435\u0445 \u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0445 \u0432\u0430\u043c\u0438 \u0437\u0430\u0434\u0430\u043d\u0438\u0439, \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0440\u0435\u0448\u0435\u043d\u044b - ",(0,x.jsxs)(y,{children:[this.state.computedStats.correctPercent,"%"]})]}):(0,x.jsx)(C,{}),(0,x.jsx)("h2",{children:"\u0421\u0430\u043c\u044b\u0435 \u0447\u0430\u0441\u0442\u044b\u0435 \u043e\u0448\u0438\u0431\u043a\u0438"}),null!==(e=this.state.computedStats)&&void 0!==e&&e.commonMisstakes?(0,x.jsxs)("div",{className:l.CommonMisstakesContainer,children:[(0,x.jsx)("div",{children:"\u0427\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043e \u0432\u044b \u043e\u0448\u0438\u0431\u0430\u0435\u0442\u0435\u0441\u044c \u0432 \u044d\u0442\u0438\u0445 \u0441\u043b\u043e\u0432\u0430\u0445"}),(0,x.jsx)("div",{className:l.CommonMisstakesLayout,children:this.state.computedStats.commonMisstakes.words.map((function(t,e){return(0,x.jsx)(k,{wordData:t},e)}))}),(0,x.jsxs)("div",{children:["\u0411\u043e\u043b\u044c\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u043e\u0448\u0438\u0431\u043e\u043a \u0432 \u0441\u043b\u043e\u0432\u0430\u0445 \u0441 \u0447\u0430\u0441\u0442\u044c\u044e \u0440\u0435\u0447\u0438 ",(0,x.jsx)(y,{children:this.state.computedStats.commonMisstakes.wordType.type})," - ",this.state.computedStats.commonMisstakes.wordType.count]})]}):(0,x.jsx)(C,{}),(0,x.jsx)("h2",{children:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u044f"}),null!==(n=this.state.computedStats)&&void 0!==n&&n.solutionTimeAvg?(0,x.jsxs)("div",{children:["\u0412 \u0441\u0440\u0435\u0434\u043d\u0435\u043c \u0432\u044b \u0441\u0442\u0430\u0432\u0438\u0442\u0435 \u0443\u0434\u0430\u0440\u0435\u043d\u0438\u0435 \u0432 1 \u0441\u043b\u043e\u0432\u0435 \u0437\u0430 ",(0,x.jsx)(y,{children:this.state.computedStats.solutionTimeAvg})," \u0441\u0435\u043a\u0443\u043d\u0434"]}):(0,x.jsx)(C,{}),(0,x.jsx)("h2",{children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043e\u0442\u0432\u0435\u0442\u043e\u0432"}),(0,x.jsx)(u.Z,{to:"/stats/history",children:(0,x.jsx)("div",{className:"".concat(l.HistoryLink," themeBackground"),children:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c"})})]})})]})}}]),n}(c.Component);function y(t){return(0,x.jsx)("code",{className:"".concat(l.StatsDataContainer," themeBackground"),children:t.children})}function C(){return(0,x.jsx)("div",{children:"\u0423 \u043d\u0430\u0441 \u043f\u043e\u043a\u0430 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438, \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u044c \u044d\u0442\u0443 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443"})}function k(t){return(0,x.jsx)("div",{className:"".concat(l.CommonWrongWordContainer," themeBackground"),title:"\u041e\u0448\u0438\u0431\u043e\u043a: ".concat(t.wordData.count),children:t.wordData.word})}g.contextType=p.O;var S=g},7394:function(t,e,n){var r=n(4836);e.Z=void 0;var o=r(n(5649)),s=n(184),i=(0,o.default)((0,s.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");e.Z=i},7247:function(t,e,n){var r=n(4836);e.Z=void 0;var o=r(n(5649)),s=n(184),i=(0,o.default)((0,s.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=i}}]);
//# sourceMappingURL=546.1d5d049c.chunk.js.map