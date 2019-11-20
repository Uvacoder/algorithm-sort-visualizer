(this["webpackJsonpsort-visualizer"]=this["webpackJsonpsort-visualizer"]||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n(17)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(8),i=n.n(a),s=(n(14),n(1)),l=n(2),u=n(4),c=n(3),g=n(5),h=(n(15),n(6)),m=(n(16),function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(u.a)(this,Object(c.a)(e).call(this,t))).state={array:[],startedSort:!1,isSorted:!1,TIME:500},n}return Object(g.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.setArray()}},{key:"componentDidUpdate",value:function(t,e){var n=document.getElementsByClassName("nav-btn");this.state.startedSort&&Object(h.a)(n).forEach((function(t){t.disabled=!0})),this.state.isSorted&&(Object(h.a)(n).forEach((function(t){t.disabled=!1})),this.setState({startedSort:!1,isSorted:!1}),this.resetArray())}},{key:"getArraySize",value:function(){return window.screen.width<400?50:75}},{key:"setArray",value:function(){for(var t=[],e=0;e<this.getArraySize();e++)t.push(this.getRandomInt(1,500));this.setState({array:t})}},{key:"resetArray",value:function(){for(var t=[],e=0;e<this.getArraySize();e++)t.push(this.getRandomInt(1,500));this.setState({array:t})}},{key:"bubbleSort",value:function(){var t=this,e=this.state.array,n=document.getElementsByClassName("array-elem");this.setState({startedBubbleSort:!0});for(var o=function(t){setTimeout((function(){0===t?setTimeout((function(){n[e.length-t-1].style.backgroundColor="green"}),400):n[e.length-t].style.backgroundColor="green";for(var o=function(o){setTimeout((function(){n[o+1].style.backgroundColor="red",n[o].style.backgroundColor="red",setTimeout((function(){if(e[o]>e[o+1]){var t=e[o],r=e[o],a=e[o+1];e[o]=e[o+1],e[o+1]=t,n[o].style.height="".concat(a,"px"),n[o+1].style.height="".concat(r,"px"),n[o+1].style.backgroundColor="green",n[o].style.backgroundColor="lightblue"}else n[o+1].style.backgroundColor="lightblue",n[o].style.backgroundColor="lightblue"}),4),t===e.length-2&&(setTimeout((function(){n[o+1].style.backgroundColor="green"}),400),setTimeout((function(){n[o].style.backgroundColor="green"}),800))}),4*o)},r=0;r<e.length-t-1;r++)o(r)}),400*t)},r=0;r<e.length-1;r++)o(r);setTimeout((function(){t.setState({sorted:!0})}),400*e.length+1750)}},{key:"selectionSort",value:function(){var t=this,e=this.state.array,n=document.getElementsByClassName("array-elem");this.setState({startedSelectionSort:!0});for(var o=function(t){var o=t;setTimeout((function(){for(var r=function(t){setTimeout((function(){n[t].style.backgroundColor="red",n[o].style.backgroundColor="blue",setTimeout((function(){e[t]<e[o]?(n[o].style.backgroundColor="lightblue",o=t):n[t].style.backgroundColor="lightblue"}),4)}),4*(t-1))},a=t+1;a<e.length;a++)r(a);setTimeout((function(){var r=e[t],a=e[o],i=e[t];e[t]=e[o],e[o]=r,n[t].style.height="".concat(a,"px"),n[o].style.height="".concat(i,"px"),n[t].style.backgroundColor="green",t!==o&&(n[o].style.backgroundColor="lightblue")}),400),t===e.length-2&&setTimeout((function(){n[t+1].style.backgroundColor="green"}),800)}),400*t)},r=0;r<e.length-1;r++)o(r);setTimeout((function(){t.setState({sorted:!0})}),400*e.length+1750)}},{key:"insertionSort",value:function(){var t=this;this.setState({startedSort:!0});for(var e=this.state.array,n=document.getElementsByClassName("array-elem"),o=this.state.TIME,r=function(r){setTimeout((function(){var a=r,i=t.insertionSortHelper(e.slice(0,r+1),a);if(i!==a){e.splice(i,0,e[a]),e.splice(a+1,1);for(var s=function(t,r){setTimeout((function(){n[t-1].style.backgroundColor="red",n[t].style.backgroundColor="blue",setTimeout((function(){n[t].style.height="".concat(e[t],"px"),n[t-1].style.height="".concat(e[i],"px")}),o/(2*(a-i))),setTimeout((function(){n[t].style.backgroundColor="lightblue",t===i+1&&(n[i].style.backgroundColor="lightblue")}),o/(a-i))}),r*(o/(a-i)))},l=a,u=0;l>i;l--,u++)s(l,u)}else n[r].style.backgroundColor="red",setTimeout((function(){n[r].style.backgroundColor="lightblue"}),150),setTimeout((function(){n[r].style.backgroundColor="red"}),300),setTimeout((function(){n[r].style.backgroundColor="lightblue"}),450)}),r*o)},a=0;a<e.length;a++)r(a);this.sortCompleteAnimation()}},{key:"sortCompleteAnimation",value:function(){var t=this,e=document.getElementsByClassName("array-elem"),n=this.getArraySize(),o=this.state.TIME;setTimeout((function(){for(var t=function(t,n){setTimeout((function(){e[t].style.backgroundColor="green"}),30*n)},o=n-1,r=0;o>=0;o--,r++)t(o,r)}),(n+1)*o),setTimeout((function(){Object(h.a)(e).forEach((function(t){setTimeout((function(){t.style.backgroundColor="lightblue"}),350),setTimeout((function(){t.style.backgroundColor="green"}),700),setTimeout((function(){t.style.backgroundColor="lightblue"}),1e3)}))}),n*(o+30)+200),setTimeout((function(){t.setState({isSorted:!0})}),n*(o+30)+1200+500)}},{key:"insertionSortHelper",value:function(t,e){for(var n=e;e>0&&t[n]<t[e-1];)e--;return e}},{key:"render",value:function(){var t=this,e=this.state.array;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("button",{className:"nav-btn",id:"gen-new-arr",onClick:function(){t.resetArray()}},"Generate New Array"),r.a.createElement("button",{className:"nav-btn",id:"bubble-sort",onClick:function(){t.bubbleSort()}},"Bubble Sort"),r.a.createElement("button",{className:"nav-btn",id:"selection-sort",onClick:function(){t.selectionSort()}},"Selection Sort"),r.a.createElement("button",{className:"nav-btn",id:"insertion-sort",onClick:function(){t.insertionSort()}},"Insertion Sort"),r.a.createElement("button",{className:"nav-btn",id:"test-algs",onClick:function(){t.testAlgorithms()}},"Test!")),r.a.createElement("div",{className:"array-container"},e.map((function(t,e){return r.a.createElement("div",{className:"array-elem",key:e,style:{height:"".concat(t,"px")}})}))))}},{key:"getRandomInt",value:function(t,e){return Math.floor(Math.random()*(e-t+1))+t}},{key:"testAlgorithms",value:function(){for(var t=0;t<100;t++){for(var e=[],n=0;n<this.getRandomInt(1,20);n++)e.push(this.getRandomInt(-1e3,1e3));var o=e.slice().sort((function(t,e){return t-e})),r=this.insertionSort(e);console.log(this.arraysAreEqual(o,r))}}},{key:"arraysAreEqual",value:function(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return console.log(t[n],e[n]),!1;return!0}}]),e}(r.a.Component)),f=function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(g.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement(m,null)))}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.ab9527ec.chunk.js.map