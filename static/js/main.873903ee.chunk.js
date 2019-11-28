(this["webpackJsonpsort-visualizer"]=this["webpackJsonpsort-visualizer"]||[]).push([[0],[,,,,,,,,,function(t,e,a){t.exports=a(17)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(8),i=a.n(r),s=(a(14),a(2)),u=a(3),l=a(5),c=a(4),h=a(6),g=(a(15),a(1)),m=(a(16),function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).state={array:[],width:window.innerWidth,height:.7*window.innerHeight,heightMultiplier:4,arrayHeights:[],startedSort:!1,isSorted:!1,TIME:500},a}return Object(h.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.setArray(),this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions.bind(this))}},{key:"componentDidUpdate",value:function(t,e){var a=document.getElementsByClassName("nav-btn");e.array!==this.state.array&&this.setState({arrayHeights:this.setHeights()}),this.state.startedSort&&Object(g.a)(a).forEach((function(t){t.disabled=!0})),this.state.isSorted&&(Object(g.a)(a).forEach((function(t){t.disabled=!1})),this.setState({startedSort:!1,isSorted:!1}),this.setArray())}},{key:"updateDimensions",value:function(){this.updateBrowserWidth(),this.updateBrowserHeight()}},{key:"updateBrowserWidth",value:function(){Math.abs(this.state.width-window.innerWidth)>12&&(this.setState({width:window.innerWidth}),this.setArray())}},{key:"updateBrowserHeight",value:function(){this.state.height!==.7*window.innerHeight&&this.setState({height:.7*window.innerHeight,arrayHeights:this.setHeights()})}},{key:"getArraySize",value:function(){var t=this.state.width,e=Math.floor((t-100)/12);return e<80?e:80}},{key:"setHeightMultiplier",value:function(){var t=document.getElementsByClassName("array-container")[0].clientHeight;this.setState({heightMultiplier:Math.round((t-10)/108)})}},{key:"setArray",value:function(){for(var t=[],e=0;e<this.getArraySize();e++)t.push(this.getRandomInt(1,100));this.setState({array:t})}},{key:"setHeights",value:function(){for(var t=this.state.height,e=this.state.array,a=Math.max.apply(Math,Object(g.a)(e)),n=[],o=0;o<e.length;o++)n.push(Math.floor(e[o]*((t-10)/a)));return n}},{key:"sortCompleteAnimation",value:function(t){var e=this,a=document.getElementsByClassName("array-elem"),n=this.getArraySize(),o=this.state.TIME;setTimeout((function(){for(var t=function(t){setTimeout((function(){a[t].style.backgroundColor="green"}),30*t)},e=0;e<n;e++)t(e)}),(t+1)*o),setTimeout((function(){Object(g.a)(a).forEach((function(t){setTimeout((function(){t.style.backgroundColor="lightblue"}),350),setTimeout((function(){t.style.backgroundColor="green"}),700),setTimeout((function(){t.style.backgroundColor="lightblue"}),1e3)}))}),t*o+30*n+200),setTimeout((function(){e.setState({isSorted:!0})}),t*o+30*n+1200+500)}},{key:"swap",value:function(t,e,a){var n=t[e];t[e]=t[a],t[a]=n}},{key:"bubbleSort",value:function(){var t=this;this.setState({startedSort:!0});for(var e=this.state.array,a=document.getElementsByClassName("array-elem"),n=this.state.TIME,o=this.state.arrayHeights,r=function(r){setTimeout((function(){for(var i=function(i){setTimeout((function(){a[i+1].style.backgroundColor="blue",a[i].style.backgroundColor="red",setTimeout((function(){e[i]>e[i+1]?(t.swap(e,i,i+1),t.swap(o,i,i+1),a[i].style.height="".concat(o[i],"px"),a[i+1].style.height="".concat([o[i+1]],"px"),a[i+1].style.backgroundColor="lightblue",a[i].style.backgroundColor="lightblue"):(a[i+1].style.backgroundColor="lightblue",a[i].style.backgroundColor="lightblue")}),n/(e.length-r-1))}),i*n/(e.length-r-1))},s=0;s<e.length-r-1;s++)i(s)}),r*n)},i=0;i<e.length;i++)r(i);this.sortCompleteAnimation(e.length)}},{key:"selectionSort",value:function(){var t=this;this.setState({startedSort:!0});for(var e=this.state.array,a=document.getElementsByClassName("array-elem"),n=this.state.TIME,o=this.state.arrayHeights,r=function(r){setTimeout((function(){for(var i=r,s=function(t,o){setTimeout((function(){a[t].style.backgroundColor="red",a[i].style.backgroundColor="blue",setTimeout((function(){e[t]<e[i]?(a[i].style.backgroundColor="lightblue",i=t):a[t].style.backgroundColor="lightblue"}),n/(2*(e.length-r-1)))}),o*n/(e.length-r-1))},u=r+1,l=0;u<e.length;u++,l++)s(u,l);setTimeout((function(){t.swap(e,r,i),t.swap(o,r,i),a[r].style.height="".concat(o[r],"px"),a[i].style.height="".concat(o[i],"px"),a[i].style.backgroundColor="lightblue"}),n)}),r*n)},i=0;i<e.length-1;i++)r(i);this.sortCompleteAnimation(e.length)}},{key:"insertionSort",value:function(){var t=this;this.setState({startedSort:!0});for(var e=this.state.array,a=document.getElementsByClassName("array-elem"),n=this.state.TIME,o=this.state.arrayHeights,r=function(r){setTimeout((function(){var i=r,s=t.insertionSortHelper(e.slice(0,r+1),i);if(s!==i){e.splice(s,0,e[i]),o.splice(s,0,o[i]),e.splice(i+1,1),o.splice(i+1,1);for(var u=function(t,e){setTimeout((function(){a[t-1].style.backgroundColor="red",a[t].style.backgroundColor="blue",a[i].style.backgroundColor="green",setTimeout((function(){a[t].style.height="".concat(o[t],"px"),a[t-1].style.height="".concat(o[s],"px")}),n/(2*(i-s))),setTimeout((function(){a[t].style.backgroundColor="lightblue",t===s+1&&(a[s].style.backgroundColor="lightblue")}),n/(i-s)),setTimeout((function(){a[i].style.backgroundColor="lightblue"}),n)}),e*(n/(i-s)))},l=i,c=0;l>s;l--,c++)u(l,c)}else a[r].style.backgroundColor="green",setTimeout((function(){a[r].style.backgroundColor="lightblue"}),150),setTimeout((function(){a[r].style.backgroundColor="green"}),300),setTimeout((function(){a[r].style.backgroundColor="lightblue"}),450)}),r*n)},i=0;i<e.length;i++)r(i);this.sortCompleteAnimation(e.length)}},{key:"insertionSortHelper",value:function(t,e){for(var a=e;e>0&&t[a]<t[e-1];)e--;return e}},{key:"quickSort",value:function(){this.setState({startedSort:!0});var t=Object(g.a)(this.state.array),e=t.length-1,a={pos:[],pivot:[],counter:[0]};this.quickSortRecursive(t,0,e,a),this.animateQSort(a)}},{key:"quickSortRecursive",value:function(t,e,a,n){if(!(e>=a)){var o=this.partition(t,e,a,n);this.quickSortRecursive(t,e,o-1,n),this.quickSortRecursive(t,o+1,a,n)}}},{key:"partition",value:function(t,e,a,n){for(var o=t[a],r=e,i=e;i<a;i++)t[i]<o&&(n.pos.push([i,r]),this.swap(t,i,r),r++);return n.pos.push([r,a]),n.pivot.push([r,a]),n.counter.push(n.pos.length),this.swap(t,r,a),r}},{key:"animateQSort",value:function(t){for(var e=this,a=document.getElementsByClassName("array-elem"),n=this.state.array,o=this.state.TIME,r=this.state.arrayHeights,i=function(i){setTimeout((function(){for(var s=function(s,u){setTimeout((function(){var u=t.pos[s][0],l=t.pos[s][1],c=t.pivot[i][1];a[u].style.backgroundColor="red",a[l].style.backgroundColor="blue",a[c].style.backgroundColor="green",e.swap(n,u,l),e.swap(r,u,l),setTimeout((function(){a[u].style.height="".concat(r[u],"px"),a[l].style.height="".concat(r[l],"px")}),o/(2*(t.counter[i+1]-t.counter[i]))),setTimeout((function(){a[u].style.backgroundColor="lightblue",a[l].style.backgroundColor="lightblue"}),o/(t.counter[i+1]-t.counter[i]))}),u*o/(t.counter[i+1]-t.counter[i]))},u=t.counter[i],l=0;u<t.counter[i+1];u++,l++)s(u,l)}),i*o)},s=0;s<t.counter.length-1;s++)i(s);this.sortCompleteAnimation(t.counter.length-1)}},{key:"mergeSort",value:function(){this.setState({startedSort:!0});var t=Object(g.a)(this.state.array),e=t.length-1,a={startPos:[],values:[],endPos:[],midPos:[],heightIdx:[]};this.mergeSortRecursive(t,0,e,a),this.animateMSort(a)}},{key:"mergeSortRecursive",value:function(t,e,a,n){if(!(e>=a)){var o=Math.floor((e+a)/2);this.mergeSortRecursive(t,e,o,n),this.mergeSortRecursive(t,o+1,a,n),this.merge(t,e,o,a,n)}}},{key:"merge",value:function(t,e,a,n,o){for(var r=e,i=a+1,s=[],u=0,l=e;l<=n;l++)r>a?(s[u]=t[i],u++,i++):i>n?(s[u]=t[r],u++,r++):t[r]<t[i]?(s[u]=t[r],u++,r++):(s[u]=t[i],u++,i++);o.startPos.push(e),o.values.push(s),o.midPos.push(a),o.endPos.push(n);for(var c=0;c<u;c++)t[e]=s[c],e++}},{key:"animateMSort",value:function(t){for(var e=this.state.array,a=document.getElementsByClassName("array-elem"),n=this.state.TIME,o=(this.state.arrayHeights,function(o){setTimeout((function(){for(var r=t.startPos[o],i=t.values[o].length,s=function(s,u){setTimeout((function(){var l=t.midPos[o],c=t.endPos[o];a[r].style.backgroundColor="red",a[l].style.backgroundColor="green",a[c].style.backgroundColor="blue",setTimeout((function(){e[s]=t.values[o][u],a[s].style.height="".concat(4*e[s],"px")}),u*(n/(2*i))),setTimeout((function(){a[r].style.backgroundColor="lightblue",a[l].style.backgroundColor="lightblue",a[c].style.backgroundColor="lightblue"}),n)}),u*(n/i))},u=r,l=0;u<r+i;u++,l++)s(u,l)}),o*(n+5))}),r=0;r<t.startPos.length;r++)o(r);this.sortCompleteAnimation(t.startPos.length-1)}},{key:"beadSort",value:function(){var t=this.state.array,e=[];this.setState({startedSort:!0});for(var a=this.numberToBead(t),n=0;n<a.length;n++){for(var o=0,r=0;r<a.length;r++)!1===a[n][r]&&(a[n][r]=!0,o++);for(var i=0;i<o;i++)a[n][i]=!1;e.push(this.beadToNumber(a))}this.animateBeadSort(e)}},{key:"animateBeadSort",value:function(t){for(var e=document.getElementsByClassName("array-elem"),a=(this.state.array,t.length),n=t[0].length,o=this.state.heightMultiplier,r=this.state.TIME,i=(this.state.arrayHeights,function(a){setTimeout((function(){for(var i=function(i){setTimeout((function(){e[i].style.height="".concat(t[a][i]*o,"px")}),i*r*3/(10*n))},s=0;s<n;s++)i(s)}),a*r*3/10)}),s=0;s<a;s++)i(s);this.sortCompleteAnimation(3*a/10)}},{key:"numberToBead",value:function(t){for(var e=Math.max.apply(Math,Object(g.a)(t)),a=[],n=[],o=0;o<t.length;o++){var r=new Array(e);r.fill(!0,0,t[o]),r.fill(!1,t[o],e),a.push(r)}for(var i=0;i<e;i++){for(var s=[],u=0;u<a.length;u++)s.push(a[u][i]);n.push(s)}return n}},{key:"beadToNumber",value:function(t){for(var e=t[0].length,a=[],n=0;n<e;n++){for(var o=0,r=0;r<t.length;r++)!0===t[r][n]&&o++;a.push(o)}return a}},{key:"heapSort",value:function(){this.setState({startedSort:!0});for(var t=Object(g.a)(this.state.array),e=t.length,a=[],n=Math.floor(e/2)-1;n>=0;n--)this.heapify(t,e,n,a);for(var o=e-1;o>=0;o--)this.swap(t,o,0),a.push([o,0]),this.heapify(t,o,0,a);this.animateHeapSort(a)}},{key:"heapify",value:function(t,e,a,n){var o=a,r=2*a+1,i=2*a+2;r<e&&t[r]>t[o]&&(o=r),i<e&&t[i]>t[o]&&(o=i),o!==a&&(this.swap(t,a,o),n.push([a,o]),this.heapify(t,e,o,n))}},{key:"animateHeapSort",value:function(t){for(var e=this,a=this.state.array,n=document.getElementsByClassName("array-elem"),o=this.state.TIME,r=this.state.heightMultiplier,i=function(i){setTimeout((function(){var s=t[i][0],u=t[i][1];n[s].style.backgroundColor="red",n[u].style.backgroundColor="blue",setTimeout((function(){e.swap(a,s,u),n[s].style.height="".concat(r*a[s],"px"),n[u].style.height="".concat(r*a[u],"px")}),o/20),setTimeout((function(){n[s].style.backgroundColor="lightblue",n[u].style.backgroundColor="lightblue"}),o/10-10)}),i*o/10)},s=0;s<t.length;s++)i(s);this.sortCompleteAnimation(t.length/10)}},{key:"radixSort",value:function(){for(var t=Object(g.a)(this.state.array),e=Math.max.apply(Math,Object(g.a)(t)),a=1,n=[],o=function(){var o,r,i=Object(g.a)(Array(10)).map((function(){return[]}));t.forEach((function(t){i[Math.floor(t/a)%10].push(t)})),n.push((o=[]).concat.apply(o,Object(g.a)(i))),t=(r=[]).concat.apply(r,Object(g.a)(i)),e/=10,a*=10};Math.trunc(e)>0;)o();this.animateRadixSort(n)}},{key:"animateRadixSort",value:function(t){for(var e=document.getElementsByClassName("array-elem"),a=this.state.heightMultiplier,n=this.state.TIME,o=this.state.array,r=Math.max.apply(Math,Object(g.a)(o)),i=Math.ceil(Math.log10(r+1)),s=function(r){setTimeout((function(){for(var i=function(i){setTimeout((function(){o[i]=t[r][i],e[i].style.height="".concat(o[i]*a,"px")}),i*(14*n/o.length))},s=0;s<o.length;s++)i(s)}),r*n*14)},u=0;u<i;u++)s(u);this.sortCompleteAnimation(14*i)}},{key:"render",value:function(){var t=this,e=this.state.arrayHeights;return console.log(e),o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{className:"navbar"},o.a.createElement("button",{className:"nav-btn",id:"gen-new-arr",onClick:function(){t.setArray()}},"Generate New Array"),o.a.createElement("button",{className:"nav-btn",id:"bubble-sort",onClick:function(){t.bubbleSort()}},"Bubble Sort"),o.a.createElement("button",{className:"nav-btn",id:"selection-sort",onClick:function(){t.selectionSort()}},"Selection Sort"),o.a.createElement("button",{className:"nav-btn",id:"insertion-sort",onClick:function(){t.insertionSort()}},"Insertion Sort"),o.a.createElement("button",{className:"nav-btn",id:"quick-sort",onClick:function(){t.quickSort()}},"Quick Sort"),o.a.createElement("button",{className:"nav-btn",id:"merge-sort",onClick:function(){t.mergeSort()}},"Merge Sort"),o.a.createElement("button",{className:"nav-btn",id:"bead-sort",onClick:function(){t.beadSort()}},"Bead Sort"),o.a.createElement("button",{className:"nav-btn",id:"heap-sort",onClick:function(){t.heapSort()}},"Heap Sort"),o.a.createElement("button",{className:"nav-btn",id:"radix-sort",onClick:function(){t.radixSort()}},"Radix Sort"),o.a.createElement("button",{className:"nav-btn",id:"test-algs",onClick:function(){t.testAlgorithms()}},"Test!")),o.a.createElement("div",{className:"array-container"},o.a.createElement("div",{className:"array-bars"},e.map((function(t,e){return o.a.createElement("div",{className:"array-elem",key:e,style:{height:"".concat(t,"px")}})})))))}},{key:"getRandomInt",value:function(t,e){return Math.floor(Math.random()*(e-t+1))+t}},{key:"testAlgorithms",value:function(){for(var t=0;t<100;t++){for(var e=[],a=0;a<this.getRandomInt(1,100);a++)e.push(this.getRandomInt(0,1e3));var n=e.slice().sort((function(t,e){return t-e})),o=this.radixSort(e);console.log(this.arraysAreEqual(n,o))}}},{key:"arraysAreEqual",value:function(t,e){if(t.length!==e.length)return!1;for(var a=0;a<t.length;a++)if(t[a]!==e[a])return console.log(t[a],e[a]),!1;return!0}}]),e}(o.a.Component)),f=function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"App"},o.a.createElement(m,null)))}}]),e}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.873903ee.chunk.js.map