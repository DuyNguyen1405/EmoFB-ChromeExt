function addBlock(){existsBlock=!0;var e=document.createElement("div");e.id="extEMOJIBLOCK",e.innerHTML='<div class="extTABSWRAP"><div class="extEMOJITABS"><p class="extEmoji select" style="background-image:url('+chrome.extension.getURL("icons/smile_icon.png")+');" title="Emoji"></p></div><div class="extTABS_TO_LEFT" style="background-image:url('+chrome.extension.getURL("icons/pointer-left.png")+');"></div><div class="extTABS_TO_RIGHT extNOW" style="background-image:url('+chrome.extension.getURL("icons/pointer-right.png")+');"></div></div><div class="extEMOJICONTENT extEMOJI_TAB select"><label id="extEMOJISearchWrap" onclick="this.children[0].focus()"><input type="text" id="extEMOJISearch" placeholder="Search Emoji >"><p id="extEMOJISearchDelete"></p></label></div>'+(paid?"":''),document.body.appendChild(e),e=document.getElementById("extEMOJIBLOCK"),paid||e.classList.add("extADDPADDINGBottom");var t=e.children[1].innerHTML,n=0;for(var a in emojis){t+='<div class="extEMOJIWRAP" style="background-image: url('+chrome.extension.getURL("categories/f"+n+".png")+')"><div class="extTITLE">'+a+"</div>";var r=0;for(var o in emojis[a])t+='<div style="background-position: '+(20*-parseInt(r++)+2)+'px 2px;" class="extEMOJI" title="'+emojis[a][o].title+'" data-text="'+o+'"></div>';t+="</div>",n++}e.children[1].innerHTML=t,t=e.innerHTML;for(var i=e.getElementsByClassName("extEMOJITABS")[0],s=i.innerHTML,l=0;l<categoriesOrder.length;l++){var d=-1!=animated.indexOf(categoriesOrder[l])?", url('"+chrome.extension.getURL("icons/animated.png")+"')":"";s+='<p class="extSMILEYSCATEGORYICON stickers" style="background-image:url(\''+chrome.extension.getURL("icons/categories/a"+categoriesOrder[l]+".png")+"')"+d+';"></p>',t+='<div class="extSTICKERSCONTENT extEMOJI_TAB extTAB_UNLOADED"></div>'}return e.innerHTML=t,i=e.getElementsByClassName("extEMOJITABS")[0],i.innerHTML=s,t="",s="",i.style.width=50*i.children.length+"px",e.getElementsByClassName("extTABS_TO_LEFT")[0].onclick=function(){var t=i.offsetLeft+125;t>=0&&(t=0,e.getElementsByClassName("extTABS_TO_LEFT")[0].classList.remove("extNOW")),i.style.left=t+"px",e.getElementsByClassName("extTABS_TO_RIGHT")[0].classList.add("extNOW")},e.getElementsByClassName("extTABS_TO_RIGHT")[0].onclick=function(){var t=i.offsetLeft-125;t<=e.offsetWidth-i.offsetWidth&&(t=e.offsetWidth-i.offsetWidth,e.getElementsByClassName("extTABS_TO_RIGHT")[0].classList.remove("extNOW")),i.style.left=t+"px",e.getElementsByClassName("extTABS_TO_LEFT")[0].classList.add("extNOW")},document.getElementById("extEMOJISearch").oninput=function(){var t=e.getElementsByClassName("extEMOJI_TAB")[0].getElementsByClassName("extEMOJIWRAP");if(this.value.length>0){var n=this.value.replace(/[^a-zA-Z0-9 ]/gi,"").split(/\s/gi).clean(""),a=new RegExp(n.map(function(e){return e?"\\b"+e:""}).join("|"),"gi"),r=0;for(var o in emojis){var i=0,s=0;for(var l in emojis[o]){a.lastIndex=0;var d=a.test(emojis[o][l].tags);t[r].children[i+1].style.display=d?"inline-block":"none",s+=+!d,i++}t[r].style.display=s!=i?"block":"none",r++}document.getElementById("extEMOJISearchDelete").style.display="block"}else{r=0;for(var o in emojis){i=0;for(var l in emojis[o])t[r].children[i+1].style.display="inline-block",i++;t[r].style.display="block",r++}document.getElementById("extEMOJISearchDelete").style.display="none"}},document.getElementById("extEMOJISearchDelete").onclick=function(){var e=document.getElementById("extEMOJISearch");e.value="",e.focus(),e.oninput()},e.addEventListener("click",function(t){if(t.target.target||t.target.parentNode.target)return!0;if(t.stopPropagation(),t.preventDefault(),this.style.visibility="visible",document.body.style.overflow="hidden","extEMOJITABS"==t.target.parentNode.className){if(/select/.test(t.target.className))return!1;t.target.parentNode.getElementsByClassName("select")[0].classList.remove("select"),t.target.classList.add("select");for(var n=e.getElementsByClassName("extEMOJI_TAB"),a=Array.prototype.indexOf.call(t.target.parentNode.children,t.target),r=0;r<n.length;r++)/animate/.test(n[r].className)&&n[r].classList.remove("animate"),/select/.test(n[r].className)&&(n[r].classList.remove("select"),n[r].classList.add("animate")),r!=a&&(n[r].style.left=(a>r?"-":"")+"100%");if(/extTAB_UNLOADED/.test(n[a].className)){for(var o=!1,i="",s=+categoriesOrder[a-1],l=-1!=animated.indexOf(s)?"gif":"png",d=0;d<+stickers[s];d++)1000!=d||paid||(o=!0),i+="<div style=\"background-image: url('"+chrome.extension.getURL("stickers/small/f"+s+"/f"+s+"s"+d+"."+l)+'\');" data-src="f'+s+"/f"+s+"s"+d+"."+l+'" class="extSTICKER">'+(o?"<p></p>":"")+"</div>\n";n[a].innerHTML=i,n[a].classList.remove("extTAB_UNLOADED")}return n[a].classList.add("select"),n[a].classList.add("animate"),n[a].style.left="0",!1}var c=document.getElementsByClassName("extSMILE_ICON")[+this.getAttribute("data-smile-button")||0];if("extSTICKER"==t.target.className)return latestCategoryUsed=+t.target.getAttribute("data-src").match(/f(\d+)/i)[1],!(!paid&&+t.target.getAttribute("data-src").match(/s(\d+)/i)[1]>1000)&&((currentTextarea=document.getElementsByClassName("extSMILE_ICON")[+this.getAttribute("data-smile-button")||0].parentNode.parentNode.getElementsByTagName("textarea")[0])||(currentTextarea=document.getElementsByClassName("extSMILE_ICON")[+this.getAttribute("data-smile-button")||0].parentNode.parentNode.querySelector("[contenteditable]")),chrome.runtime.sendMessage({sendSticker:!0,stickerURL:t.target.getAttribute("data-src")}),document.getElementById("extEMOJIBLOCK").style.visibility="hidden",document.body.style.overflow="",!1);if("extSTICKER"==t.target.parentNode.className)return chrome.runtime.sendMessage({openAuthPage:2}),!1;if("extEMOJI"==t.target.className){if(c.parentNode.parentNode.querySelector("[contenteditable]")){var u=document.createEvent("TextEvent");u.initTextEvent("textInput",!0,!0,null," "+t.target.getAttribute("data-text")+" ",9,"en-US"),(c.parentNode.parentNode.querySelector("[contenteditable]")||c.parentNode.parentNode.getElementsByTagName("textarea")[0]).dispatchEvent(u),setTimeout(function(){var e=c.parentNode.parentNode.getElementsByClassName("UFIAddCommentInput")[0]||c.parentNode.parentNode.querySelector("[contenteditable]");e&&(placeCaretAtEnd(e),e.setAttribute("data-skip","true"),e.focus(),e.click())},50)}else(currentTextarea=c.parentNode.parentNode.getElementsByTagName("textarea")[0]).setAttribute("data-skip","true"),currentTextarea.click(),currentTextarea.focus(),currentTextarea.insertAtCaret(" "+t.target.getAttribute("data-text")+" "),currentTextarea.dispatchEvent(new Event("keyup")),currentTextarea.setAttribute("data-skip","true"),currentTextarea.click(),currentTextarea.focus();return!1}return!0},!1),!0}function checkAreas(){if(document.getElementsByClassName("uiTextareaAutogrow").length>0)for(var e=document.getElementsByClassName("uiTextareaAutogrow"),t=0;t<e.length;t++)e[t].parentNode.getElementsByClassName("extSMILE_ICON").length<1&&appendButton(e[t]);if(document.getElementsByClassName("UFIAddCommentInput").length>0)for(var e=document.getElementsByClassName("UFIAddCommentInput"),t=0;t<e.length;t++)e[t].getAttribute("data-emoji")||(e[t].setAttribute("data-emoji","true"),window.location.href='javascript: var cur_text = document.getElementsByClassName("UFIAddCommentInput")['+t+']; cur_text.setAttribute("data-skip", "true"); cur_text.setAttribute("onkeydown", "if (document.readyState != \'complete\') { event.preventDefault(); return false; }"); cur_text.dispatchEvent(new MouseEvent("click")); cur_text.blur();',document.body.setAttribute("data-skip","true"),document.body.click(),document.body.focus(),document.body.blur(),appendButton(e[t]));if(document.querySelectorAll("[contenteditable][spellcheck=true]").length>0)for(var e=document.querySelectorAll("[contenteditable][spellcheck=true]"),t=0;t<e.length;t++)if(!e[t].getAttribute("data-emoji")){if(e[t].parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("extSMILE_ICON")[0])continue;e[t].setAttribute("data-emoji","true"),document.body.setAttribute("data-skip","true"),document.body.click(),document.body.focus(),document.body.blur(),appendButton(e[t])}}function appendAnimatedSmiley(e){var t=document.createElement("script");t.innerHTML=(appendAnimatedScript.toString()+" appendAnimatedScript();").replace(/nearestID/g,nearestID).replace(/superStickerName/g,e).replace("function","function appendAnimatedScript"),document.body.appendChild(t)}function appendButton(e){function t(e){if(28*(this.children.length+ +!!e)>(this.offsetWidth||260))for(var t=document.querySelectorAll(".fbNub.opened"),n=0;n<t.length;n++)if(t[n].contains(this)){t[n].classList.add("extExpanded"),t[n].style.minWidth=t[n].offsetWidth+"px";break}}var n="string"==typeof e?document.getElementById(e)||document.getElementsByClassName(e)[0]||document.getElementsByName(e)[0]:e,a=document.createElement("div");if(!n||n.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("extSMILE_ICON").length>0)return!1;a.className="extSMILE_ICON";var r=document.getElementById("feedx_sprouts_container");if(!findIfContainer(r,n)||!r.getElementsByClassName("extSMILE_ICON")[0]){a.style.left=n.offsetLeft+n.offsetWidth-20+"px",a.style.top=n.offsetTop+"px",n.dispatchEvent(new KeyboardEvent("keydown")),a.style.backgroundImage="url("+chrome.extension.getURL("icons/smile_icon.png")+")";var o;if(/UFIAddCommentInput/.test(n.className)){document.querySelectorAll("[data-extedit]");a.setAttribute("data-extedit",Array.prototype.indexOf.call(document.getElementsByClassName("UFIAddCommentInput"),n)),a.style.position="static";var i=n.parentNode.parentNode.parentNode.querySelector("[data-hover]");i?(a.style.margin=parseInt(((i.offsetHeight||32)-16)/2)+"px 2px",o=i.parentNode):(a.style.margin="8px 2px",o=n.parentNode.parentNode.children[n.parentNode.parentNode.children.length-1])}else if(findIfContainer(document.querySelectorAll(".fbNubFlyoutFooter"),n)){a.setAttribute("data-chat","true");for(var s=document.querySelectorAll(".fbNubFlyoutFooter"),l=0,d=0;d<s.length;d++)s[d].contains(n)&&(l=d);o=s[l].querySelector("a[title*='Like'] > *, [role='button'] > svg").parentNode.parentNode.parentNode,t.apply(o,[!0]);var c=Array.prototype.indexOf.call(document.getElementsByClassName(o.className),o),u=document.createElement("script");u.innerHTML="(function() { var elem = document.body.getElementsByClassName('"+o.className+"')["+c+"]; console.log('Rewriting element:', elem); elem.appendChild = function() { HTMLElement.prototype.appendChild.apply(this, arguments); this.dispatchEvent(new CustomEvent('updatecontent')); }; })()",document.body.appendChild(u),setTimeout(function(){document.body.removeChild(u)},100),o.addEventListener("updatecontent",function(){t.apply(this,arguments)}),a.style.left="",a.style.top="",a.style.float="right",a.style.marginRight="4px"}else n.parentNode.parentNode.getElementsByClassName("emoteTogglerImg").length>0&&(o=n.parentNode.parentNode.getElementsByClassName("emoteTogglerImg")[0].parentNode.parentNode.parentNode,a.classList.add("near_the_default_smiles"));n.getAttribute("contenteditable")?findIfContainer(document.getElementById("timeline_composer_container"),n)?(a.style.right="32px",a.style.left="",a.style.top="-21px",o=n.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode):findIfContainer(document.getElementById("feedx_sprouts_container"),n)?(a.style.right="32px",a.style.left="",a.style.top="-25px",o=n.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode):findIfContainer(document.querySelector("[id^='PageComposerPagelet']"),n)?(a.style.right="32px",a.style.left="",a.style.top="13px",o=n.parentNode.parentNode.parentNode.parentNode.parentNode):/\.com\/messages\//.test(window.location.href)?(a.style.left="",a.style.right="9px",a.style.top="",a.style.bottom="6px",n.style.paddingRight="28px",a.setAttribute("data-messages","true")):findIfContainer(document.querySelector("#mainContainer [role='dialog']"),n)&&(a.style.right="18px",a.style.left="",a.style.top="-10px",findIfContainer(document.querySelector("#feedx_sprouts_container"),n)&&(a.style.right="32px",a.style.top="9px",o=n.parentNode.parentNode.parentNode.parentNode)):findIfContainer(document.getElementById("feedx_container"),n)&&(a.style.display="none"),(o=o||n.parentNode).appendChild(a),a.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),existsBlock||addBlock();var t=document.getElementById("extEMOJIBLOCK"),n=this.parentNode.parentNode.querySelector("[contenteditable], .uiTextareaAutogrow, textarea");if(n)n.setAttribute("data-skip","true"),n.click(),n.focus(),setTimeout(function(){placeCaretAtEnd(n)},20);else{var a=this.parentNode.parentNode.querySelector(".UFIAddCommentInput");a&&a.click()}if("visible"==t.style.visibility)return t.style.visibility="hidden",t.classList.remove("withoutStickers"),document.body.style.overflow="",!1;t.classList.add("shadow"),t=document.getElementById("extEMOJIBLOCK");var r=this.parentNode.children[0];if("TEXTAREA"==r.tagName&&(r.click(),r.focus()),this.getAttribute("data-extedit")){var o=this.parentNode.parentNode.getElementsByClassName("UFIAddCommentInput")[0];placeCaretAtEnd(o),nearestIDElement=o,nearestID="All('.UFIAddCommentInput')["+Array.prototype.indexOf.call(document.getElementsByClassName("UFIAddCommentInput"),o)+"]"}else{var i=this;if(/mentionsTextarea/.test((this.parentNode.getElementsByTagName("textarea")[0]||{}).className))for(;"FORM"!=i.tagName;)i=i.parentNode;else for(;!i.id&&"BODY"!=i.tagName&&!i.attributes.getNamedItem("contenteditable");)i=i.parentNode;nearestIDElement=i,nearestID=i.id?'("#'+i.id+'")':'All(".'+i.className+'")'}var s=this.getBoundingClientRect();if(t.style.display="block",t.style.left=s.left+20+"px",t.style.top=s.top+"px",parseInt(t.style.top)+t.offsetHeight>window.innerHeight&&(t.style.top=window.innerHeight-t.offsetHeight-36+"px"),parseInt(t.style.left)+t.offsetWidth>window.innerWidth&&(t.style.left=s.left-t.offsetWidth+"px",this.getAttribute("data-chat"))){var l=this.parentNode.getBoundingClientRect();t.style.left=l.left-(t.offsetWidth-l.width)/2+"px",t.style.top=l.top-t.offsetHeight-30+"px"}return"visible"!=t.style.visibility&&(t.style.visibility="visible",document.body.style.overflow="hidden"),t.setAttribute("data-smile-button",Array.prototype.indexOf.call(document.getElementsByClassName("extSMILE_ICON"),this)),!1},!1)}}function str2ab(e){for(var t=new ArrayBuffer(2*e.length),n=new Uint8Array(t),a=0,r=e.length;a<r;a++)n[a]=e.charCodeAt(a);return t}function findIfContainer(e,t){if(e&&"length"in e){for(var n=0;n<e.length;n++)if(e[n].contains(t))return!0;return!1}return!!e&&e.contains(t)}function placeCaretAtEnd(e){if(e.focus(),void 0!==window.getSelection&&void 0!==document.createRange){var t=document.createRange();t.selectNodeContents(e),t.collapse(!1);var n=window.getSelection();n.removeAllRanges(),n.addRange(t)}else if(void 0!==document.body.createTextRange){var a=document.body.createTextRange();a.moveToElementText(e),a.collapse(!1),a.select()}}var exists=!1,emojis={},stickers=[],categoriesOrder=[],animated=[],nearestID="",nearestIDElement=null,currentTextarea=null,existsBlock=!1,paid=!1,latestCategoryUsed=0;chrome.runtime.sendMessage({getList:!0},function(e){emojis=e.emojis,paid=e.paid,stickers=e.stickers,categoriesOrder=e.categoriesOrder,animated=e.animated,checkAreas(),setInterval(checkAreas,500)}),chrome.extension.onMessage.addListener(function(e,t,n){if(e.sticker){var a=document.createElement("script");a.innerHTML=(appendScript.toString()+" appendScript();").replace("superBlobReplace",'"'+btoa(e.blob)+'"').replace(/nearestID/g,nearestID).replace(/superFormatReplace/g,-1!=animated.indexOf(latestCategoryUsed)?"gif":"png").replace("function","function appendScript"),document.body.appendChild(a)}});var appendAnimatedScript=function(){document.dispatchEvent(new MouseEvent("dragstart"));var e=document.querySelectornearestID,t=new CustomEvent("drop",{target:e,srcElement:e,toElement:e,fromElement:e}),n="superStickerName";t.view=window,t.dataTransfer={files:{length:0},items:{0:{kind:"string",type:"text/plain",getAsString:function(e){e(n)}},1:{kind:"string",type:"text/uri-list",getAsString:function(e){e(n)}}},getData:function(){return n},types:["text/plain","text/uri-list"],dropEffect:"none",effectAllowed:"copyMove"},document.body.dispatchEvent(t),e.dispatchEvent(t)};appendScript=function(){function str2ab(e){for(var t=new ArrayBuffer(2*e.length),n=new Uint8Array(t),a=0,r=e.length;a<r;a++)n[a]=e.charCodeAt(a);return t}function findIfContainer(e,t){if(e&&"length"in e){for(var n=0;n<e.length;n++)if(e[n].contains(t))return!0;return!1}return!!e&&e.contains(t)}var format="superFormatReplace",superBlob=new File([new Uint8Array(str2ab(atob(superBlobReplace))).buffer],"sticker."+format,{type:"image/"+format,lastModified:+new Date});superBlob.name="sticker."+format,superBlob.type="image/"+format,superBlob.lastModified=+new Date,superBlob.lastModifiedDate=new Date;var createObject=function(e){function t(){}return t.prototype=e,new t},extTarget=document.querySelectornearestID,laterCheck=extTarget.parentNode.parentNode,foundLoadingInChat=!1,inputs=("FORM"===extTarget.tagName?extTarget:extTarget.parentNode.parentNode).querySelectorAll("input[type=file]");if(inputs.length>0){document.body.style["pointer-events"]="none",inputs[0].parentNode.parentNode.click(),inputs=extTarget.parentNode.parentNode.querySelectorAll("input[type=file]");var input=inputs[inputs.length-1];input.dispatchEvent(new MouseEvent("mouseover")),input.dispatchEvent(new MouseEvent("mousemove")),input.dispatchEvent(new MouseEvent("mousedown")),input.dispatchEvent(new MouseEvent("mouseup")),input.focus(),input.click(),input.dispatchEvent(new MouseEvent("mouseout")),setTimeout(function(){input.__defineGetter__("value",function(){return"C:\\fakepath\\sticker."+format}),input.__defineSetter__("value",function(){}),input.__defineGetter__("files",function(){var ar=createObject(FileList.prototype);return ar[0]=superBlob,ar.forEach=function(e){e(this[0],0,1)},ar.__defineGetter__("length",function(){return 1}),ar[Symbol.iterator]=eval("[][0] = function* () { yield* [this[0]]; }"),ar.item=function(){return superBlob},ar}),input.dispatchEvent(new Event("change",{target:input,bubbles:!0})),input.blur(),setTimeout(function(){delete input.files,delete input.value,input.value="",document.body.style["pointer-events"]="";for(var e=document.querySelectorAll(".fbNub.opened"),t=0;t<e.length;t++)if(e[t].contains(extTarget)){var n=e[t].querySelector('[role="progressbar"]:not(.hidden_elem)');n&&n.offsetWidth>0&&(foundLoadingInChat=!0);break}},300)},500)}setTimeout(function(){var e=laterCheck.querySelector("[title^='Remove'], [aria-label^='Remove']");if(!(e&&(findIfContainer(laterCheck.querySelectorAll('[role="button"]'),e)||e.offsetWidth>0)||foundLoadingInChat||laterCheck&&laterCheck.parentNode.querySelector(".UFICommentPhotoAttachedPreview"))){var t=extTarget.querySelector("[contenteditable], textarea");t&&(t.click(),t.focus()),document.dispatchEvent(new MouseEvent("dragenter")),document.dispatchEvent(new MouseEvent("dragstart"));var n=new CustomEvent("drop",{target:extTarget,srcElement:extTarget,toElement:extTarget,fromElement:extTarget});n.view=window,n.dropEffect="none",n.effectAllowed="all",n.dataTransfer={files:{0:superBlob,length:1,item:function(){return this[0]}},items:[{getAsFile:function(e){return e(superBlob)},kind:"file",type:"image/"+format}],getData:function(){return""},types:["Files"]},window.lastCes=n,document.body.dispatchEvent(n),extTarget.dispatchEvent(n),document.dispatchEvent(new MouseEvent("dragend"))}},1e3),(extTarget.getElementsByTagName("textarea")[0]||extTarget).focus(),setTimeout(function(){if(/updatestatus/.test(extTarget.getAttribute("action")))var e=setInterval(function(){var t=extTarget.parentNode.querySelectorAll(".fbVaultSelectableGridTextItem button[title='Remove']")[0];/fbVaultSelectableGridTextItem/.test(extTarget.parentNode.querySelector(".fbScrollableAreaContent").children[1].className)||(t.click(),t.parentNode.style.display="none",clearInterval(e))},500);(em=document.querySelector(".uiButtonConfirm > input"))&&em.click();var t=new CustomEvent("keydown");t.which=1000,t.keyCode=1000,t.view=window,(extTarget.getElementsByTagName("textarea")[0]||extTarget.querySelector("[contenteditable]")).dispatchEvent(t)},600),!extTarget.getAttribute("data-tried")&&/comment|reply/.test(extTarget.parentNode.querySelector("[contenteditable]").getAttribute("data-testid"))&&(extTarget.setAttribute("data-tried","true"),setTimeout(function(){if(extTarget.parentNode.parentNode.parentNode.querySelector("[title^='Remove'], [aria-label^='Remove'], [style*='%']"))return!1;window.location.href="javascript: appendScript();"},1200))},document.body.addEventListener("click",function(e){return e.target.target||e.target.parentNode.target?(e.stopPropagation(),!0):!!(!document.getElementById("extEMOJIBLOCK")||document.getElementById("extEMOJIBLOCK").contains(e.target)||"visible"!=document.getElementById("extEMOJIBLOCK").style.visibility||document.activeElement&&document.activeElement.getAttribute("data-emoji"))||("true"===e.target.getAttribute("data-skip")?(e.target.removeAttribute("data-skip"),!0):e.target.className&&/ext\S+/.test(e.target.className)&&"extSMILE_ICON"!=e.target.className?void 0:(document.getElementById("extEMOJIBLOCK").style.visibility="hidden",document.body.style.overflow="",e.preventDefault(),e.stopPropagation(),!1))});var interval=setInterval(function(){return document.getElementsByClassName("opened").length<1?(exists=!1,!1):!(exists||!document.getElementsByClassName("_552m")[0]||document.getElementsByClassName("_552m")[0].parentNode.getElementsByClassName("extSMILE_ICON")[0])&&(exists=!0,void appendButton("_552m"))},1e3);HTMLTextAreaElement.prototype.insertAtCaret=function(e){if(e=e||"",document.selection)this.focus(),document.selection.createRange().text=e;else if(this.selectionStart||0===this.selectionStart){var t=this.selectionStart,n=this.selectionEnd;this.value=this.value.substring(0,t)+e+this.value.substring(n,this.value.length),this.selectionStart=t+e.length,this.selectionEnd=t+e.length}else this.value+=e},Array.prototype.clean=function(e){for(var t=0;t<this.length;t++)this[t]==e&&(this.splice(t,1),t--);return this};