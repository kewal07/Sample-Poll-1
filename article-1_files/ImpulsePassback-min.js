var adSpaceId;var _adstractID;var WixHi;var XchangeAd;var closeBtnSz=25;var BackfilEmbed=false;var SmaatoEmbed=false;var AdstractEmbed=false;var webBackfillEmbed=false;var AdstractEmbed=false;var _deviceWidth=Math.max(document.documentElement.clientWidth,window.innerWidth||0);var BackfillFired=false;var AppNexusEmbed=false;var advertID="ImpulseBackfill";function initPassback(a,i){if(_deviceWidth<768){embedAppNexus(a,"300x50")}else{embedAppNexus(a,i)}}function embedAdstract(a){if(a&&a=="india"){_adstractID=getPubId("adstractIndia");adstractUrl="http://cdnads.tictacti.com/tictacti/scripts/direct/direct.html?a=73855873&size=300x50&ci=1&serverdomain=adk2ads.tictacti.com&context="+_adstractID}else{_adstractID=getPubId("adstract");adstractUrl="http://cdnads.tictacti.com/tictacti/scripts/direct/direct.html?a=70750900&size=300x50&ci=1&serverdomain=adk2ads.tictacti.com&context="+_adstractID}if(_adstractID=="none"){console.log("pubid not found for _ads");return}var i=document.createElement("iframe");i.scrolling="no";i.frameBorder="0";i.marginWidth="0";i.marginHeight="0";i.width="300";i.height="50";i.src=adstractUrl;AdContainer().appendChild(i);BackfilEmbed=true;AdstractEmbed=true;XAdArrival=setInterval(StyleAd,200)}function embedAppNexus(a,i){var o=getPubId("appNexus",i);var t=i.split("x")[0];var e=i.split("x")[1];var n=document.createElement("iframe");n.scrolling="no";n.frameBorder="0";n.marginWidth="0";n.marginHeight="0";n.width=t;n.height=e;n.setAttribute("style","width:"+t+"px;height:"+e+"px");n.src="http://ib.adnxs.com/tt?id="+o;AdContainer().appendChild(n);BackfilEmbed=true;AppNexusEmbed=true;advertID="AppNexusBackfill";XAdArrival=setInterval(StyleAd,200)}function embedSmaato(a){var i=getPubId("smaato");if(i=="none"){console.log("pubid not found for smats");return}var o=document.createElement("div");o.id="smt-"+i;o.style.padding="0px";AdContainer().appendChild(o);smaatoScript=document.createElement("script");smaatoScript.type="text/javascript";smaatoScript.src="http://soma-assets.smaato.net/js/smaatoAdTag.js";AdContainer().appendChild(smaatoScript);function t(a){if(a=="SUCCESS"){console.log("callBack is being called with status : "+a);advertID="SmaatoBackfill";setImpulseWH("320x50");addCloseBtn(WixHi,closeBtnSz);addVibeTracker(advertID)}else if(a=="ERROR"){console.log("callBack is being called with status : "+a)}}setTimeout(function(){SomaJS.loadAd({adDivId:"smt-"+i,publisherId:1100019681,adSpaceId:i,dimension:"xxlarge"},t)},2e3);BackfilEmbed=true;SmaatoEmbed=true}function StyleAd(){if(AdContainer().getElementsByTagName("iframe")[0].width!=undefined){clearInterval(XAdArrival);var a=AdContainer().getElementsByTagName("iframe")[0];WixHi=a.width+"x"+a.height;setImpulseWH(WixHi);addCloseBtn(WixHi,closeBtnSz);addVibeTracker(advertID)}else{}}function CustomSetInterval(a,i,o){var t=0;var e=window.setInterval(function(){a();if(++t===o){window.clearInterval(e)}},i)}function addVibeTracker(a){_trackImg=document.createElement("img");_trackImg.src="http://vibe.forkcdn.com/backfilltrack?campaignName="+a+"&statId="+ipuRespJson.k+"&cab="+(new Date).getTime();_trackImg.height=1;_trackImg.width=1;_trackImg.style.display="none";AdContainer().appendChild(_trackImg)}function getPubId(a,i){currentPub=location.hostname;if(a=="appNexus"){pubId=appNexusPubs[i][currentPub];if(pubId==undefined){return"none"}return pubId}if(a=="smaato"){pubId=smaatoIds[currentPub];if(pubId==undefined){return"none"}return pubId}if(a=="adstract"){pubId=adstractIds[currentPub];if(pubId==undefined){return"none"}return pubId}if(a=="adstractIndia"){pubId=adstractIndia[currentPub];if(pubId==undefined){return"none"}return pubId}}var appNexusPubs={"300x50":{"m.prothom-alo.com":"7648710","m.aajtak.in":"7518445","www.bollywoodshaadis.com":"7648711","abpnews.abplive.in":"7648674","blogtobollywood.com":"7648628","www.crictracker.com":"7648633","www.financialexpress.com":"7648514","tech.firstpost.com":"7648673","www.galatta.com":"7648675","indianexpress.com":"7202487","m.indiatoday.in":"7648638","www.newsroompost.com":"7648676","www.santabanta.com":"7648637","www.udayavani.com":"7648536","hindi.webdunia.com":"7648525","m.wonderwoman.in":"7648672","www.glamsham.com":"7648741","moviegalleri.net":"7645974"},"320x50":{"m.prothom-alo.com":"","m.aajtak.in":"7647917","www.bollywoodshaadis.com":"7647920","abpnews.abplive.in":"8802578","www.abplive.in":"8802417","blogtobollywood.com":"7648074","www.crictracker.com":"","www.financialexpress.com":"7647792","tech.firstpost.com":"","www.galatta.com":"7648108","indianexpress.com":"","m.indiatoday.in":"8802422","www.newsroompost.com":"","www.santabanta.com":"7648085","www.udayavani.com":"","hindi.webdunia.com":"8802670","m.wonderwoman.in":"8802433","www.glamsham.com":"7648115","m.businesstoday.in":"8802461","www.cosmopolitan.in":"8802473","www.loksatta.com":"8802504"},"550x120":{"www.prothom-alo.com":"7518602","aajtak.intoday.in":"7518523","www.bollywoodshaadis.com":"7518619","abpnews.abplive.in":"7584972","blogtobollywood.com":"7585591","www.crictracker.com":"7487038","www.financialexpress.com":"7586971","tech.firstpost.com":"7587741","www.galatta.com":"7589061","indianexpress.com":"7590090","indiatoday.intoday.in":"7605440","www.newsroompost.com":"7607037","www.santabanta.com":"7607198","www.udayavani.com":"7607214","hindi.webdunia.com":"7607219","wonderwoman.intoday.in":"7607106"},"728x90":{"www.prothom-alo.com":"7518600","aajtak.intoday.in":"7488944","www.bollywoodshaadis.com":"7518615","abpnews.abplive.in":"7584721","blogtobollywood.com":"7585521","www.crictracker.com":"7586129","www.financialexpress.com":"7294658","tech.firstpost.com":"7514913","www.galatta.com":"7588929","indianexpress.com":"7589924","indiatoday.intoday.in":"7605271","www.newsroompost.com":"7607023","www.santabanta.com":"7607193","www.udayavani.com":"7607213","hindi.webdunia.com":"7607218","wonderwoman.intoday.in":"7607098","www.bhaskar.com":"8423955","www.divyabhaskar.co.in":"8424129","hindi.webdunia.com":"8424217","tamil.webdunia.com":"8424149","telugu.webdunia.com":"8424159","marathi.webdunia.com":"8424228","gujarai.webdunia.com":"8424308","wonderwoman.intoday.in":"","www.tellychakkar.com":"8424560","www.sportskeeda.com":"8424659","www.jansatta.com":"8424712","www.dinamani.com":"8424786","www.newindianexpress.com":"8424812","www.kannadaprabha.com":"8424881","www.fakingnews.firstpost.com":"8424980","www.amarujala.com":"8425235","grabhouse.com":"8425338","www.motorbeam.com":"8425494","www.filmymonkey.com":"8439732","www.cinemaexpress.com":"8453230","www.pinkvilla.com":"8522452"},"700x120":{"www.prothom-alo.com":"7518610","aajtak.intoday.in":"7518549","www.bollywoodshaadis.com":"7518620","abpnews.abplive.in":"7585043","blogtobollywood.com":"7585670","www.crictracker.com":"7586452","www.financialexpress.com":"7586876","tech.firstpost.com":"7588043","www.galatta.com":"7589015","indianexpress.com":"7589978","indiatoday.intoday.in":"7605603","www.newsroompost.com":"7607043","www.santabanta.com":"7607200","www.udayavani.com":"7607216","hindi.webdunia.com":"7607220","wonderwoman.intoday.in":"7607141"},"900x120":{"www.prothom-alo.com":"7518609","aajtak.intoday.in":"7518551","www.bollywoodshaadis.com":"7518624","abpnews.abplive.in":"7585096","blogtobollywood.com":"7585745","www.crictracker.com":"7586559","www.financialexpress.com":"7274979","tech.firstpost.com":"7587980","www.galatta.com":"7588978","indianexpress.com":"7590029","indiatoday.intoday.in":"7606989","www.newsroompost.com":"7607064","www.santabanta.com":"7607203","www.udayavani.com":"7607217","hindi.webdunia.com":"7607221","wonderwoman.intoday.in":"7607163"}};var smaatoIds={"m.indiatoday.in":130099504,"m.aajtak.in":130099505,"m.businesstoday.in":130099606,"m.wonderwoman.in":130099615,"indianexpress.in":130140564,"www.loksatta.com":130099635,"abpnews.abplive.in":130099638,"www.abplive.in":130108059,"www.financialexpress.com":130099632,"www.glamsham.com":130140571,"www.bollywoodshaadis.com":130140574};var adstractIds={"m.indiatoday.in":"c70750914","m.aajtak.in":"c71246600","m.wonderwoman.in":"c71246601","indianexpress.in":"c70750912","abpnews.abplive.in":"c71246603","www.abplive.in":"c71246603","www.webdunia.com":"c71519071","blogtobollywood.com":"c71246604","www.glamsham.com":"c70751823","moviegalleri.net":"c70903504","www.newsroompost.com":"c71519076","www.sify.com":"c70903503","www.cosmopolitan.in":"c71246602","www.crictracker.com":"c70903501","www.financialexpress.com":"c70750913","m.firstpost.com":"c70903502","www.udayavani.com":"c71519070"};var adstractIndia={"m.indiatoday.in":"c73855906","m.aajtak.in":"c73855905","m.wonderwoman.in":"c73855904","indianexpress.in":"c73855908","abpnews.abplive.in":"c73855902","www.abplive.in":"c73855902","www.webdunia.com":"c73855893","blogtobollywood.com":"c73855901","www.glamsham.com":"c73855898","moviegalleri.net":"c73855897","www.newsroompost.com":"c73855896","www.sify.com":"c73855895","www.cosmopolitan.in":"c73855903","www.crictracker.com":"c73855900","www.financialexpress.com":"c73855907","m.firstpost.com":"c73855899","www.udayavani.com":"c73855894"};var webPubs={"indianexpress.com":"301/a1065301","abpnews.abplive.in":"312/a1065312","www.abplive.in":"312/a1065312","www.newsroompost.com":"313/a1065313","aajtak.intoday.in":"314/a1065314","www.businesstoday.in":"340/a1065340","indiatoday.intoday.in":"341/a1065341"};