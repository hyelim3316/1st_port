(this.webpackJsonp=this.webpackJsonp||[]).push([[3],{24:function(e,t,i){(function(e,t){(function(){var i,n,s,r,o,l,a,u,p=[].slice,d={}.hasOwnProperty;a=function(){},n=function(){function e(){}return e.prototype.addEventListener=e.prototype.on,e.prototype.on=function(e,t){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t),this},e.prototype.emit=function(){var e,t,i,n,s;if(i=arguments[0],e=2<=arguments.length?p.call(arguments,1):[],this._callbacks=this._callbacks||{},t=this._callbacks[i])for(n=0,s=t.length;n<s;n++)t[n].apply(this,e);return this},e.prototype.removeListener=e.prototype.off,e.prototype.removeAllListeners=e.prototype.off,e.prototype.removeEventListener=e.prototype.off,e.prototype.off=function(e,t){var i,n,s,r;if(!this._callbacks||0===arguments.length)return this._callbacks={},this;if(!(i=this._callbacks[e]))return this;if(1===arguments.length)return delete this._callbacks[e],this;for(n=s=0,r=i.length;s<r;n=++s)if(i[n]===t){i.splice(n,1);break}return this},e}(),(i=function(e){var t,i;function s(e,i){var n,r,o;if(this.element=e,this.version=s.version,this.defaultOptions.previewTemplate=this.defaultOptions.previewTemplate.replace(/\n*/g,""),this.clickableElements=[],this.listeners=[],this.files=[],"string"==typeof this.element&&(this.element=document.querySelector(this.element)),!this.element||null==this.element.nodeType)throw new Error("Invalid dropzone element.");if(this.element.dropzone)throw new Error("Dropzone already attached.");if(s.instances.push(this),this.element.dropzone=this,n=null!=(o=s.optionsForElement(this.element))?o:{},this.options=t({},this.defaultOptions,n,null!=i?i:{}),this.options.forceFallback||!s.isBrowserSupported())return this.options.fallback.call(this);if(null==this.options.url&&(this.options.url=this.element.getAttribute("action")),!this.options.url)throw new Error("No URL provided.");if(this.options.acceptedFiles&&this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");this.options.acceptedMimeTypes&&(this.options.acceptedFiles=this.options.acceptedMimeTypes,delete this.options.acceptedMimeTypes),this.options.method=this.options.method.toUpperCase(),(r=this.getExistingFallback())&&r.parentNode&&r.parentNode.removeChild(r),!1!==this.options.previewsContainer&&(this.options.previewsContainer?this.previewsContainer=s.getElement(this.options.previewsContainer,"previewsContainer"):this.previewsContainer=this.element),this.options.clickable&&(!0===this.options.clickable?this.clickableElements=[this.element]:this.clickableElements=s.getElements(this.options.clickable,"clickable")),this.init()}return function(e,t){for(var i in t)d.call(t,i)&&(e[i]=t[i]);function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype}(s,n),s.prototype.Emitter=n,s.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","addedfiles","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],s.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,parallelUploads:2,uploadMultiple:!1,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,filesizeBase:1e3,maxFiles:null,params:{},clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,hiddenInputContainer:"body",capture:null,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",accept:function(e,t){return t()},init:function(){return a},forceFallback:!1,fallback:function(){var e,t,i,n,r,o;for(this.element.className=this.element.className+" dz-browser-not-supported",n=0,r=(o=this.element.getElementsByTagName("div")).length;n<r;n++)e=o[n],/(^| )dz-message($| )/.test(e.className)&&(t=e,e.className="dz-message");return t||(t=s.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(t)),(i=t.getElementsByTagName("span")[0])&&(null!=i.textContent?i.textContent=this.options.dictFallbackMessage:null!=i.innerText&&(i.innerText=this.options.dictFallbackMessage)),this.element.appendChild(this.getFallbackForm())},resize:function(e){var t,i,n;return t={srcX:0,srcY:0,srcWidth:e.width,srcHeight:e.height},i=e.width/e.height,t.optWidth=this.options.thumbnailWidth,t.optHeight=this.options.thumbnailHeight,null==t.optWidth&&null==t.optHeight?(t.optWidth=t.srcWidth,t.optHeight=t.srcHeight):null==t.optWidth?t.optWidth=i*t.optHeight:null==t.optHeight&&(t.optHeight=1/i*t.optWidth),n=t.optWidth/t.optHeight,e.height<t.optHeight||e.width<t.optWidth?(t.trgHeight=t.srcHeight,t.trgWidth=t.srcWidth):i>n?(t.srcHeight=e.height,t.srcWidth=t.srcHeight*n):(t.srcWidth=e.width,t.srcHeight=t.srcWidth/n),t.srcX=(e.width-t.srcWidth)/2,t.srcY=(e.height-t.srcHeight)/2,t},drop:function(e){return this.element.classList.remove("dz-drag-hover")},dragstart:a,dragend:function(e){return this.element.classList.remove("dz-drag-hover")},dragenter:function(e){return this.element.classList.add("dz-drag-hover")},dragover:function(e){return this.element.classList.add("dz-drag-hover")},dragleave:function(e){return this.element.classList.remove("dz-drag-hover")},paste:a,reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(e){var t,i,n,r,o,l,a,u,p,d,c,h,m;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){for(e.previewElement=s.createElement(this.options.previewTemplate.trim()),e.previewTemplate=e.previewElement,this.previewsContainer.appendChild(e.previewElement),n=0,l=(p=e.previewElement.querySelectorAll("[data-dz-name]")).length;n<l;n++)p[n].textContent=e.name;for(r=0,a=(d=e.previewElement.querySelectorAll("[data-dz-size]")).length;r<a;r++)d[r].innerHTML=this.filesize(e.size);for(this.options.addRemoveLinks&&(e._removeLink=s.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),e.previewElement.appendChild(e._removeLink)),m=this,t=function(t){return t.preventDefault(),t.stopPropagation(),e.status===s.UPLOADING?s.confirm(m.options.dictCancelUploadConfirmation,function(){return m.removeFile(e)}):m.options.dictRemoveFileConfirmation?s.confirm(m.options.dictRemoveFileConfirmation,function(){return m.removeFile(e)}):m.removeFile(e)},h=[],o=0,u=(c=e.previewElement.querySelectorAll("[data-dz-remove]")).length;o<u;o++)i=c[o],h.push(i.addEventListener("click",t));return h}},removedfile:function(e){var t;return e.previewElement&&null!=(t=e.previewElement)&&t.parentNode.removeChild(e.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(e,t){var i,n,s,r;if(e.previewElement){for(e.previewElement.classList.remove("dz-file-preview"),n=0,s=(r=e.previewElement.querySelectorAll("[data-dz-thumbnail]")).length;n<s;n++)(i=r[n]).alt=e.name,i.src=t;return setTimeout(function(){return e.previewElement.classList.add("dz-image-preview")},1)}},error:function(e,t){var i,n,s,r,o;if(e.previewElement){for(e.previewElement.classList.add("dz-error"),"String"!=typeof t&&t.error&&(t=t.error),o=[],n=0,s=(r=e.previewElement.querySelectorAll("[data-dz-errormessage]")).length;n<s;n++)i=r[n],o.push(i.textContent=t);return o}},errormultiple:a,processing:function(e){if(e.previewElement&&(e.previewElement.classList.add("dz-processing"),e._removeLink))return e._removeLink.textContent=this.options.dictCancelUpload},processingmultiple:a,uploadprogress:function(e,t,i){var n,s,r,o,l;if(e.previewElement){for(l=[],s=0,r=(o=e.previewElement.querySelectorAll("[data-dz-uploadprogress]")).length;s<r;s++)"PROGRESS"===(n=o[s]).nodeName?l.push(n.value=t):l.push(n.style.width=t+"%");return l}},totaluploadprogress:a,sending:a,sendingmultiple:a,success:function(e){if(e.previewElement)return e.previewElement.classList.add("dz-success")},successmultiple:a,canceled:function(e){return this.emit("error",e,"Upload canceled.")},canceledmultiple:a,complete:function(e){if(e._removeLink&&(e._removeLink.textContent=this.options.dictRemoveFile),e.previewElement)return e.previewElement.classList.add("dz-complete")},completemultiple:a,maxfilesexceeded:a,maxfilesreached:a,queuecomplete:a,addedfiles:a,previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>'},t=function(){var e,t,i,n,s,r,o;for(n=arguments[0],r=0,o=(i=2<=arguments.length?p.call(arguments,1):[]).length;r<o;r++)for(e in t=i[r])s=t[e],n[e]=s;return n},s.prototype.getAcceptedFiles=function(){var e,t,i,n,s;for(s=[],t=0,i=(n=this.files).length;t<i;t++)(e=n[t]).accepted&&s.push(e);return s},s.prototype.getRejectedFiles=function(){var e,t,i,n,s;for(s=[],t=0,i=(n=this.files).length;t<i;t++)(e=n[t]).accepted||s.push(e);return s},s.prototype.getFilesWithStatus=function(e){var t,i,n,s,r;for(r=[],i=0,n=(s=this.files).length;i<n;i++)(t=s[i]).status===e&&r.push(t);return r},s.prototype.getQueuedFiles=function(){return this.getFilesWithStatus(s.QUEUED)},s.prototype.getUploadingFiles=function(){return this.getFilesWithStatus(s.UPLOADING)},s.prototype.getAddedFiles=function(){return this.getFilesWithStatus(s.ADDED)},s.prototype.getActiveFiles=function(){var e,t,i,n,r;for(r=[],t=0,i=(n=this.files).length;t<i;t++)(e=n[t]).status!==s.UPLOADING&&e.status!==s.QUEUED||r.push(e);return r},s.prototype.init=function(){var e,t,i,n,r,o,l,a;for("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(s.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length&&(a=this,(i=function(){return a.hiddenFileInput&&a.hiddenFileInput.parentNode.removeChild(a.hiddenFileInput),a.hiddenFileInput=document.createElement("input"),a.hiddenFileInput.setAttribute("type","file"),(null==a.options.maxFiles||a.options.maxFiles>1)&&a.hiddenFileInput.setAttribute("multiple","multiple"),a.hiddenFileInput.className="dz-hidden-input",null!=a.options.acceptedFiles&&a.hiddenFileInput.setAttribute("accept",a.options.acceptedFiles),null!=a.options.capture&&a.hiddenFileInput.setAttribute("capture",a.options.capture),a.hiddenFileInput.style.visibility="hidden",a.hiddenFileInput.style.position="absolute",a.hiddenFileInput.style.top="0",a.hiddenFileInput.style.left="0",a.hiddenFileInput.style.height="0",a.hiddenFileInput.style.width="0",document.querySelector(a.options.hiddenInputContainer).appendChild(a.hiddenFileInput),a.hiddenFileInput.addEventListener("change",function(){var e,t,n,s;if((t=a.hiddenFileInput.files).length)for(n=0,s=t.length;n<s;n++)e=t[n],a.addFile(e);return a.emit("addedfiles",t),i()})})()),this.URL=null!=(o=window.URL)?o:window.webkitURL,n=0,r=(l=this.events).length;n<r;n++)e=l[n],this.on(e,this.options[e]);return this.on("uploadprogress",function(e){return function(){return e.updateTotalUploadProgress()}}(this)),this.on("removedfile",function(e){return function(){return e.updateTotalUploadProgress()}}(this)),this.on("canceled",function(e){return function(t){return e.emit("complete",t)}}(this)),this.on("complete",function(e){return function(t){if(0===e.getAddedFiles().length&&0===e.getUploadingFiles().length&&0===e.getQueuedFiles().length)return setTimeout(function(){return e.emit("queuecomplete")},0)}}(this)),t=function(e){return e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1},this.listeners=[{element:this.element,events:{dragstart:function(e){return function(t){return e.emit("dragstart",t)}}(this),dragenter:function(e){return function(i){return t(i),e.emit("dragenter",i)}}(this),dragover:function(e){return function(i){var n;try{n=i.dataTransfer.effectAllowed}catch(e){}return i.dataTransfer.dropEffect="move"===n||"linkMove"===n?"move":"copy",t(i),e.emit("dragover",i)}}(this),dragleave:function(e){return function(t){return e.emit("dragleave",t)}}(this),drop:function(e){return function(i){return t(i),e.drop(i)}}(this),dragend:function(e){return function(t){return e.emit("dragend",t)}}(this)}}],this.clickableElements.forEach(function(e){return function(t){return e.listeners.push({element:t,events:{click:function(i){return(t!==e.element||i.target===e.element||s.elementInside(i.target,e.element.querySelector(".dz-message")))&&e.hiddenFileInput.click(),!0}}})}}(this)),this.enable(),this.options.init.call(this)},s.prototype.destroy=function(){var e;return this.disable(),this.removeAllFiles(!0),(null!=(e=this.hiddenFileInput)?e.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,s.instances.splice(s.instances.indexOf(this),1)},s.prototype.updateTotalUploadProgress=function(){var e,t,i,n,s,r,o;if(i=0,t=0,this.getActiveFiles().length){for(s=0,r=(o=this.getActiveFiles()).length;s<r;s++)i+=(e=o[s]).upload.bytesSent,t+=e.upload.total;n=100*i/t}else n=100;return this.emit("totaluploadprogress",n,t,i)},s.prototype._getParamName=function(e){return"function"==typeof this.options.paramName?this.options.paramName(e):this.options.paramName+(this.options.uploadMultiple?"["+e+"]":"")},s.prototype.getFallbackForm=function(){var e,t,i,n;return(e=this.getExistingFallback())?e:(i='<div class="dz-fallback">',this.options.dictFallbackText&&(i+="<p>"+this.options.dictFallbackText+"</p>"),i+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>',t=s.createElement(i),"FORM"!==this.element.tagName?(n=s.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>')).appendChild(t):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=n?n:t)},s.prototype.getExistingFallback=function(){var e,t,i,n,s,r;for(t=function(e){var t,i,n;for(i=0,n=e.length;i<n;i++)if(t=e[i],/(^| )fallback($| )/.test(t.className))return t},n=0,s=(r=["div","form"]).length;n<s;n++)if(i=r[n],e=t(this.element.getElementsByTagName(i)))return e},s.prototype.setupEventListeners=function(){var e,t,i,n,s,r,o;for(o=[],n=0,s=(r=this.listeners).length;n<s;n++)e=r[n],o.push(function(){var n,s;for(t in s=[],n=e.events)i=n[t],s.push(e.element.addEventListener(t,i,!1));return s}());return o},s.prototype.removeEventListeners=function(){var e,t,i,n,s,r,o;for(o=[],n=0,s=(r=this.listeners).length;n<s;n++)e=r[n],o.push(function(){var n,s;for(t in s=[],n=e.events)i=n[t],s.push(e.element.removeEventListener(t,i,!1));return s}());return o},s.prototype.disable=function(){var e,t,i,n,s;for(this.clickableElements.forEach(function(e){return e.classList.remove("dz-clickable")}),this.removeEventListeners(),s=[],t=0,i=(n=this.files).length;t<i;t++)e=n[t],s.push(this.cancelUpload(e));return s},s.prototype.enable=function(){return this.clickableElements.forEach(function(e){return e.classList.add("dz-clickable")}),this.setupEventListeners()},s.prototype.filesize=function(e){var t,i,n,s,r,o,l;if(i=0,n="b",e>0){for(t=o=0,l=(r=["TB","GB","MB","KB","b"]).length;o<l;t=++o)if(s=r[t],e>=Math.pow(this.options.filesizeBase,4-t)/10){i=e/Math.pow(this.options.filesizeBase,4-t),n=s;break}i=Math.round(10*i)/10}return"<strong>"+i+"</strong> "+n},s.prototype._updateMaxFilesReachedClass=function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")},s.prototype.drop=function(e){var t,i;e.dataTransfer&&(this.emit("drop",e),t=e.dataTransfer.files,this.emit("addedfiles",t),t.length&&((i=e.dataTransfer.items)&&i.length&&null!=i[0].webkitGetAsEntry?this._addFilesFromItems(i):this.handleFiles(t)))},s.prototype.paste=function(e){var t,i;if(null!=(null!=e&&null!=(i=e.clipboardData)?i.items:void 0))return this.emit("paste",e),(t=e.clipboardData.items).length?this._addFilesFromItems(t):void 0},s.prototype.handleFiles=function(e){var t,i,n,s;for(s=[],i=0,n=e.length;i<n;i++)t=e[i],s.push(this.addFile(t));return s},s.prototype._addFilesFromItems=function(e){var t,i,n,s,r;for(r=[],n=0,s=e.length;n<s;n++)null!=(i=e[n]).webkitGetAsEntry&&(t=i.webkitGetAsEntry())?t.isFile?r.push(this.addFile(i.getAsFile())):t.isDirectory?r.push(this._addFilesFromDirectory(t,t.name)):r.push(void 0):null!=i.getAsFile&&(null==i.kind||"file"===i.kind)?r.push(this.addFile(i.getAsFile())):r.push(void 0);return r},s.prototype._addFilesFromDirectory=function(e,t){var i,n,s;return i=e.createReader(),s=this,n=function(e){var i,n,r;for(n=0,r=e.length;n<r;n++)(i=e[n]).isFile?i.file(function(e){if(!s.options.ignoreHiddenFiles||"."!==e.name.substring(0,1))return e.fullPath=t+"/"+e.name,s.addFile(e)}):i.isDirectory&&s._addFilesFromDirectory(i,t+"/"+i.name)},i.readEntries(n,function(e){return"undefined"!=typeof console&&null!==console&&"function"==typeof console.log?console.log(e):void 0})},s.prototype.accept=function(e,t){return e.size>1024*this.options.maxFilesize*1024?t(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):s.isValidFile(e,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,t):t(this.options.dictInvalidFileType)},s.prototype.addFile=function(e){return e.upload={progress:0,total:e.size,bytesSent:0},this.files.push(e),e.status=s.ADDED,this.emit("addedfile",e),this._enqueueThumbnail(e),this.accept(e,(t=this,function(i){return i?(e.accepted=!1,t._errorProcessing([e],i)):(e.accepted=!0,t.options.autoQueue&&t.enqueueFile(e)),t._updateMaxFilesReachedClass()}));var t},s.prototype.enqueueFiles=function(e){var t,i,n;for(i=0,n=e.length;i<n;i++)t=e[i],this.enqueueFile(t);return null},s.prototype.enqueueFile=function(e){if(e.status!==s.ADDED||!0!==e.accepted)throw new Error("This file can't be queued because it has already been processed or was rejected.");if(e.status=s.QUEUED,this.options.autoProcessQueue)return setTimeout((t=this,function(){return t.processQueue()}),0);var t},s.prototype._thumbnailQueue=[],s.prototype._processingThumbnail=!1,s.prototype._enqueueThumbnail=function(e){if(this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1024*this.options.maxThumbnailFilesize*1024)return this._thumbnailQueue.push(e),setTimeout((t=this,function(){return t._processThumbnailQueue()}),0);var t},s.prototype._processThumbnailQueue=function(){var e;if(!this._processingThumbnail&&0!==this._thumbnailQueue.length)return this._processingThumbnail=!0,this.createThumbnail(this._thumbnailQueue.shift(),(e=this,function(){return e._processingThumbnail=!1,e._processThumbnailQueue()}))},s.prototype.removeFile=function(e){if(e.status===s.UPLOADING&&this.cancelUpload(e),this.files=u(this.files,e),this.emit("removedfile",e),0===this.files.length)return this.emit("reset")},s.prototype.removeAllFiles=function(e){var t,i,n,r;for(null==e&&(e=!1),i=0,n=(r=this.files.slice()).length;i<n;i++)((t=r[i]).status!==s.UPLOADING||e)&&this.removeFile(t);return null},s.prototype.createThumbnail=function(e,t){var i,n;return(i=new FileReader).onload=(n=this,function(){return"image/svg+xml"===e.type?(n.emit("thumbnail",e,i.result),void(null!=t&&t())):n.createThumbnailFromUrl(e,i.result,t)}),i.readAsDataURL(e)},s.prototype.createThumbnailFromUrl=function(e,t,i,n){var s,r;return s=document.createElement("img"),n&&(s.crossOrigin=n),s.onload=(r=this,function(){var t,n,o,a,u,p,d,c;if(e.width=s.width,e.height=s.height,null==(o=r.options.resize.call(r,e)).trgWidth&&(o.trgWidth=o.optWidth),null==o.trgHeight&&(o.trgHeight=o.optHeight),n=(t=document.createElement("canvas")).getContext("2d"),t.width=o.trgWidth,t.height=o.trgHeight,l(n,s,null!=(u=o.srcX)?u:0,null!=(p=o.srcY)?p:0,o.srcWidth,o.srcHeight,null!=(d=o.trgX)?d:0,null!=(c=o.trgY)?c:0,o.trgWidth,o.trgHeight),a=t.toDataURL("image/png"),r.emit("thumbnail",e,a),null!=i)return i()}),null!=i&&(s.onerror=i),s.src=t},s.prototype.processQueue=function(){var e,t,i,n;if(t=this.options.parallelUploads,e=i=this.getUploadingFiles().length,!(i>=t)&&(n=this.getQueuedFiles()).length>0){if(this.options.uploadMultiple)return this.processFiles(n.slice(0,t-i));for(;e<t;){if(!n.length)return;this.processFile(n.shift()),e++}}},s.prototype.processFile=function(e){return this.processFiles([e])},s.prototype.processFiles=function(e){var t,i,n;for(i=0,n=e.length;i<n;i++)(t=e[i]).processing=!0,t.status=s.UPLOADING,this.emit("processing",t);return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)},s.prototype._getFilesWithXhr=function(e){var t;return function(){var i,n,s,r;for(r=[],i=0,n=(s=this.files).length;i<n;i++)(t=s[i]).xhr===e&&r.push(t);return r}.call(this)},s.prototype.cancelUpload=function(e){var t,i,n,r,o,l,a;if(e.status===s.UPLOADING){for(n=0,o=(i=this._getFilesWithXhr(e.xhr)).length;n<o;n++)(t=i[n]).status=s.CANCELED;for(e.xhr.abort(),r=0,l=i.length;r<l;r++)t=i[r],this.emit("canceled",t);this.options.uploadMultiple&&this.emit("canceledmultiple",i)}else(a=e.status)!==s.ADDED&&a!==s.QUEUED||(e.status=s.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]));if(this.options.autoProcessQueue)return this.processQueue()},i=function(){var e,t;return t=arguments[0],e=2<=arguments.length?p.call(arguments,1):[],"function"==typeof t?t.apply(this,e):t},s.prototype.uploadFile=function(e){return this.uploadFiles([e])},s.prototype.uploadFiles=function(e){var n,r,o,l,a,u,p,d,c,h,m,f,g,v,y,F,w,E,b,C,k,z,L,x,A,T,D,S,_,M,I,N,U,R;for(E=new XMLHttpRequest,b=0,L=e.length;b<L;b++)(n=e[b]).xhr=E;for(l in f=i(this.options.method,e),F=i(this.options.url,e),E.open(f,F,!0),E.withCredentials=!!this.options.withCredentials,v=null,R=this,o=function(){var t,i,s;for(s=[],t=0,i=e.length;t<i;t++)n=e[t],s.push(R._errorProcessing(e,v||R.options.dictResponseError.replace("{{statusCode}}",E.status),E));return s},y=function(t){return function(i){var s,r,o,l,a,u,p,d,c;if(null!=i)for(r=100*i.loaded/i.total,o=0,u=e.length;o<u;o++)(n=e[o]).upload={progress:r,total:i.total,bytesSent:i.loaded};else{for(s=!0,r=100,l=0,p=e.length;l<p;l++)100===(n=e[l]).upload.progress&&n.upload.bytesSent===n.upload.total||(s=!1),n.upload.progress=r,n.upload.bytesSent=n.upload.total;if(s)return}for(c=[],a=0,d=e.length;a<d;a++)n=e[a],c.push(t.emit("uploadprogress",n,r,n.upload.bytesSent));return c}}(this),E.onload=function(t){return function(i){var n;if(e[0].status!==s.CANCELED&&4===E.readyState){if(v=E.responseText,E.getResponseHeader("content-type")&&~E.getResponseHeader("content-type").indexOf("application/json"))try{v=JSON.parse(v)}catch(e){i=e,v="Invalid JSON response from server."}return y(),200<=(n=E.status)&&n<300?t._finished(e,v,i):o()}}}(this),E.onerror=function(){if(e[0].status!==s.CANCELED)return o()},(null!=(S=E.upload)?S:E).onprogress=y,u={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"},this.options.headers&&t(u,this.options.headers),u)(a=u[l])&&E.setRequestHeader(l,a);if(r=new FormData,this.options.params)for(m in _=this.options.params)w=_[m],r.append(m,w);for(C=0,x=e.length;C<x;C++)n=e[C],this.emit("sending",n,E,r);if(this.options.uploadMultiple&&this.emit("sendingmultiple",e,E,r),"FORM"===this.element.tagName)for(k=0,A=(M=this.element.querySelectorAll("input, textarea, select, button")).length;k<A;k++)if(c=(d=M[k]).getAttribute("name"),h=d.getAttribute("type"),"SELECT"===d.tagName&&d.hasAttribute("multiple"))for(z=0,T=(I=d.options).length;z<T;z++)(g=I[z]).selected&&r.append(c,g.value);else(!h||"checkbox"!==(N=h.toLowerCase())&&"radio"!==N||d.checked)&&r.append(c,d.value);for(p=D=0,U=e.length-1;0<=U?D<=U:D>=U;p=0<=U?++D:--D)r.append(this._getParamName(p),e[p],e[p].name);return this.submitRequest(E,r,e)},s.prototype.submitRequest=function(e,t,i){return e.send(t)},s.prototype._finished=function(e,t,i){var n,r,o;for(r=0,o=e.length;r<o;r++)(n=e[r]).status=s.SUCCESS,this.emit("success",n,t,i),this.emit("complete",n);if(this.options.uploadMultiple&&(this.emit("successmultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()},s.prototype._errorProcessing=function(e,t,i){var n,r,o;for(r=0,o=e.length;r<o;r++)(n=e[r]).status=s.ERROR,this.emit("error",n,t,i),this.emit("complete",n);if(this.options.uploadMultiple&&(this.emit("errormultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()},s}()).version="4.2.0",i.options={},i.optionsForElement=function(e){return e.getAttribute("id")?i.options[s(e.getAttribute("id"))]:void 0},i.instances=[],i.forElement=function(e){if("string"==typeof e&&(e=document.querySelector(e)),null==(null!=e?e.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return e.dropzone},i.autoDiscover=!0,i.discover=function(){var e,t,n,s,r,o;for(document.querySelectorAll?n=document.querySelectorAll(".dropzone"):(n=[],(e=function(e){var t,i,s,r;for(r=[],i=0,s=e.length;i<s;i++)t=e[i],/(^| )dropzone($| )/.test(t.className)?r.push(n.push(t)):r.push(void 0);return r})(document.getElementsByTagName("div")),e(document.getElementsByTagName("form"))),o=[],s=0,r=n.length;s<r;s++)t=n[s],!1!==i.optionsForElement(t)?o.push(new i(t)):o.push(void 0);return o},i.blacklistedBrowsers=[/opera.*Macintosh.*version\/12/i],i.isBrowserSupported=function(){var e,t,n,s;if(e=!0,window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(t=0,n=(s=i.blacklistedBrowsers).length;t<n;t++)s[t].test(navigator.userAgent)&&(e=!1);else e=!1;else e=!1;return e},u=function(e,t){var i,n,s,r;for(r=[],n=0,s=e.length;n<s;n++)(i=e[n])!==t&&r.push(i);return r},s=function(e){return e.replace(/[\-_](\w)/g,function(e){return e.charAt(1).toUpperCase()})},i.createElement=function(e){var t;return(t=document.createElement("div")).innerHTML=e,t.childNodes[0]},i.elementInside=function(e,t){if(e===t)return!0;for(;e=e.parentNode;)if(e===t)return!0;return!1},i.getElement=function(e,t){var i;if("string"==typeof e?i=document.querySelector(e):null!=e.nodeType&&(i=e),null==i)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector or a plain HTML element.");return i},i.getElements=function(e,t){var i,n,s,r,o,l,a;if(e instanceof Array){n=[];try{for(s=0,o=e.length;s<o;s++)i=e[s],n.push(this.getElement(i,t))}catch(e){e,n=null}}else if("string"==typeof e)for(n=[],r=0,l=(a=document.querySelectorAll(e)).length;r<l;r++)i=a[r],n.push(i);else null!=e.nodeType&&(n=[e]);if(null==n||!n.length)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return n},i.confirm=function(e,t,i){return window.confirm(e)?t():null!=i?i():void 0},i.isValidFile=function(e,t){var i,n,s,r,o;if(!t)return!0;for(t=t.split(","),i=(n=e.type).replace(/\/.*$/,""),r=0,o=t.length;r<o;r++)if("."===(s=(s=t[r]).trim()).charAt(0)){if(-1!==e.name.toLowerCase().indexOf(s.toLowerCase(),e.name.length-s.length))return!0}else if(/\/\*$/.test(s)){if(i===s.replace(/\/.*$/,""))return!0}else if(n===s)return!0;return!1},void 0!==e&&null!==e&&(e.fn.dropzone=function(e){return this.each(function(){return new i(this,e)})}),void 0!==t&&null!==t?t.exports=i:window.Dropzone=i,i.ADDED="added",i.QUEUED="queued",i.ACCEPTED=i.QUEUED,i.UPLOADING="uploading",i.PROCESSING=i.UPLOADING,i.CANCELED="canceled",i.ERROR="error",i.SUCCESS="success",o=function(e){var t,i,n,s,r,o,l,a;for(e.naturalWidth,r=e.naturalHeight,(t=document.createElement("canvas")).width=1,t.height=r,(i=t.getContext("2d")).drawImage(e,0,0),n=i.getImageData(0,0,1,r).data,a=0,s=r,o=r;o>a;)0===n[4*(o-1)+3]?s=o:a=o,o=s+a>>1;return 0===(l=o/r)?1:l},l=function(e,t,i,n,s,r,l,a,u,p){var d;return d=o(t),e.drawImage(t,i,n,s,r,l,a,u,p/d)},r=function(e,t){var i,n,s,r,o,l,a,u,p;if(s=!1,p=!0,n=e.document,u=n.documentElement,i=n.addEventListener?"addEventListener":"attachEvent",a=n.addEventListener?"removeEventListener":"detachEvent",l=n.addEventListener?"":"on",r=function(i){if("readystatechange"!==i.type||"complete"===n.readyState)return("load"===i.type?e:n)[a](l+i.type,r,!1),!s&&(s=!0)?t.call(e,i.type||i):void 0},o=function(){try{u.doScroll("left")}catch(e){return e,void setTimeout(o,50)}return r("poll")},"complete"!==n.readyState){if(n.createEventObject&&u.doScroll){try{p=!e.frameElement}catch(e){}p&&o()}return n[i](l+"DOMContentLoaded",r,!1),n[i](l+"readystatechange",r,!1),e[i](l+"load",r,!1)}},i._autoDiscoverFunction=function(){if(i.autoDiscover)return i.discover()},r(window,i._autoDiscoverFunction)}).call(this)}).call(this,i(0),i(530)(e))}}]);
//# sourceMappingURL=commons~pages.groups.milestones.edit~pages.groups.milestones.new~pages.projects.blame.show~pages.pro~e382f304.986725f7.chunk.js.map