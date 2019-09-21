document.write("<iframe id='mainDisplay' src='#' style='width:90%; height:50%'></iframe><P><textarea id='certInput' style='width:800px; height:100px;' placeholder='-----BEGIN CERTIFICATE-----'></textarea></P><H3><a href='javascript:void(0)' id='cert'>Get Certspotter Entry</a>　<a href='javascript:void(0)' id='clearDisplay'>Clear Display</a></H3><H3><input id='domain' placeholder='www.example.com' /> <a id='certs' href='javascript:void(0)'>certs</a></H3>");
function buildDisplayTable(responseData){
			var i, obj;
			obj = document.createElement('table');
			obj.style.width = '80%';
			obj.style.height = '85%';
			obj.style.display = 'block';
			obj.style.position = 'absolute';
			obj.style.top = 0;
			obj.style.bottom = 0;
			obj.style.left = 0;
			obj.style.right = 0;
			obj.style.margin = 'auto';
			obj.style.background = 'rgba(255,255,255,0.9)';
			obj.style.overflowY = 'scroll';
			obj.border = 1;
			obj.id = 'resultTable';
			document.body.appendChild(obj);
			obj = document.createElement('div');
			obj.align = 'right';
			obj.innerHTML = 'close';
			obj.onclick = function(){
				document.body.removeChild(document.getElementById('resultTable'));
			};
			document.getElementById('resultTable').appendChild(obj);
			obj = document.createElement('tbody');
			obj.id = 'resultTbody';
			document.getElementById('resultTable').appendChild(obj);
			if(!responseData.length){responseData=[responseData];};
			for(i=0;i<responseData.length;i++){
				obj = document.createElement('tr');
				obj.id = 'resultTableTr'+i;
				document.getElementById('resultTbody').appendChild(obj);
				obj = document.createElement('td');
				obj.innerHTML = i;
				obj.onclick = function(){
					var obj, trcc = this.parentNode.getElementsByTagName('td');
					var basedata = JSON.parse(trcc[trcc.length-1].title);
					obj = document.createElement('div');
					obj.style.padding = '5px';
					obj.style.width = '80%';
					obj.style.height = '85%';
					obj.style.position = 'absolute';
					obj.style.top = 0;
					obj.style.bottom = 0;
					obj.style.left = 0;
					obj.style.right = 0;
					obj.style.margin = 'auto';
					obj.style.background = 'rgba(255,255,255,0.9)';
					obj.style.border = 'double 5px black';
					obj.style.fontSize = '16pt';
					obj.style.fontWeight = 'bold';
					obj.style.overflowY = 'scroll';
					obj.id = 'certDetail';
					obj.innerHTML = '<div align=right>閉じる</div><a href=https://censys.io/certificates/'+
								basedata.sha256+
								'>censys</a><pre>'+
								trcc[trcc.length-1].title.replace(/\x2C/g,'\x2C\n')+
								'</pre>';
					obj.onclick = function(){document.body.removeChild(document.getElementById('certDetail'));};
					document.body.appendChild(obj);
				};
				document.getElementById('resultTableTr'+i).appendChild(obj);
				obj = document.createElement('td');
				obj.innerHTML = responseData[i].type;
				document.getElementById('resultTableTr'+i).appendChild(obj);
				obj = document.createElement('td');
				obj.innerHTML = ( new Date(responseData[i].not_before) ).toLocaleDateString();
				obj.title = ( new Date(responseData[i].not_before) ).toLocaleString();
				document.getElementById('resultTableTr'+i).appendChild(obj);
				obj = document.createElement('td');
				obj.innerHTML = ( new Date(responseData[i].not_after) ).toLocaleDateString();
				obj.title = ( new Date(responseData[i].not_after) ).toLocaleString();
				document.getElementById('resultTableTr'+i).appendChild(obj);
				obj = document.createElement('td');
				obj.innerHTML = 'dns_names:'+responseData[i].dns_names.length;
				obj.title = responseData[i].dns_names.toString();
				obj.onclick = function(){
					alert(this.title+
						'\nNot Before:'+this.parentNode.getElementsByTagName('td')[2].title+
						'\nNot After:'+this.parentNode.getElementsByTagName('td')[3].title);
				};
				document.getElementById('resultTableTr'+i).appendChild(obj);
				obj = document.createElement('td');
				obj.innerHTML = responseData[i].issuer;
				document.getElementById('resultTableTr'+i).appendChild(obj);
				obj = document.createElement('td');
				obj.innerHTML = 'logs:'+responseData[i].logs.length;
				obj.title = JSON.stringify(responseData[i].logs);
				obj.onclick = function(){
					var j, a, b, basedata = JSON.parse(this.title);
					b = '';
					for(j=0;j<basedata.length;j++){
						a = j+'.'+(new Date(basedata[j].timestamp)).toLocaleString()+' '+basedata[j].id+'\n'+basedata[j].id+'\n';
						a = a.replace('pLkJkLQYWBSHuxOizGdwCjw1mAT5G9+443fNDsgN3BA=','Google Pilot');
						a = a.replace('7ku9t3XOYLrhQmkfq+GeZqMPfl+wctiDAMR7iXqo/cs=','Google Rocketeer');
						a = a.replace('u9nfvB+KcbWTlCOXqpJ7RzhXlQqrUugakJZkNo4e0YU=','Google Skydiver');
						a = a.replace('KTxRllTIOWW6qlD8WAfUt2+/WHopctykwwz05UVH9Hg=','Google Icarus');
						a = a.replace('pFASaQVaFVReYhGrN7wQP2KuVXakXksXFEU+GyIQaiU=','Google Argon 2018');
						a = a.replace('Y/Lbzeg7zCzPC3KEJ1drM6SNYXePvXWmOLHHaFRL2I0=','Google Argon 2019');
						a = a.replace('sh4FzIuizYogTodm+Su5iiUgZ2va+nDnsklTLe+LkF4=','Google Argon 2020');
						a = a.replace('9lyUL9F3MCIUVBgIMJRWjuNNExkzv98MLyALzE7xZOM=','Google Argon 2021');
						a = a.replace('KXm+8J45OSHwVnOfY6V35b5XfZxgCvj5TV0mXCVdx4Q=','Google Argon 2022');
						a = a.replace('6D7Q2j71BjUy51covIlryQPTy9ERa+zraeF3fW0GvW4=','Google Argon 2023');/* src : inclusion request */
						a = a.replace('sQzVWabWeEaBH335pRUyc5rEjXA76gMj2l04dVvArU4=','Google Xenon 2018');
						a = a.replace('CEEUmABxUywWGQRgvPxH/cJlOvopLHKzf/hjrinMyfA=','Google Xenon 2019');
						a = a.replace('B7dcG+V9aP/xsMYdIxXHuuZXfFeUt2ruvGE6GmnTohw=','Google Xenon 2020');
						a = a.replace('fT7y+I//iFVoJMLAyp5SiXkrxQ54CX8uapdomX4i8Nc=','Google Xenon 2021');
						a = a.replace('RqVV63X6kSAwtaKJafTzfREsQXS+/Um4havy/HD+bUc=','Google Xenon 2022');
						a = a.replace('rfe++nz/EMiLnT2cHj4YarRnKV3PsQwkyoWGNOvcgoo=','Google Xenon 2023');/* src : inclusion request */
						a = a.replace('dH7agzGtMxCRIZzOJU9CcMK//V5CIAjGNzV55hB7zFY=','Cloudflare Nimbus 2019');
						a = a.replace('Xqdz+d9WwOe1Nkh90EngMnqRmgyEoRIShBh1loFxRVg=','Cloudflare Nimbus 2020');
						a = a.replace('RJRlLrDuzq/EQAfYqP4owNrmgr7YyzG1P9MzlrW2gag=','Cloudflare Nimbus 2021');
						a = a.replace('QcjKsd8iRkoQxqE6CUKHXk4xixsD6+tLx2jwkGKWBvY=','Cloudflare Nimbus 2022');
						a = a.replace('ejKMVNi3LbYg6jjgUh7phBZwMhOFTTvSK8E6V6NS61I=','Cloudflare Nimbus 2023');
						a = a.replace('VhQGmi/XwuzT9eG9RLI+x0Z2ubyZEVzA75SYVdaJ0N0=','DigiCert Log Server');
						a = a.replace('h3W/51l8+IxDmV+9827/Vo1HVjb/SrVgwbTq/16ggw8=','DigiCert Log Server 2');
						a = a.replace('4mlLribo6UAJ6IYbtjuD1D7n/nSI+6SPKJMBnd3x2/4=','DigiCert Yeti 2019');
						a = a.replace('8JWkWfIA0YJAEC0vk4iOrUv+HUfjmeHQNKawqKqOsnM=','DigiCert Yeti 2020');
						a = a.replace('XNxDkv7mq0VEsV6a1FbmEDf71fpH3KFzlLJe5vbHDso=','DigiCert Yeti 2021');
						a = a.replace('IkVFB1lVJFaWP6Ev8fdthuAjJmOtwEt/XcaDXG7iDwI=','DigiCert Yeti 2022');
						a = a.replace('Nc8ZG7+xbFe/D61MbULLu7YnICZR6j/hKu+oA8M71kw=','DigiCert Yeti 2023');
						a = a.replace('/kRhCLHQGreKYsz+q2qysrq/86va2ApNizDfLQAIgww=','DigiCert Nessie 2019');
						a = a.replace('xlKg7EjOs/yrFwmSxDqHQTMJ6ABlomJSQBujNioXxWU=','DigiCert Nessie 2020');
						a = a.replace('7sCV7o1yZA+S48O5G8cSo2lqCXtLahoUOOZHssvtxfk=','DigiCert Nessie 2021');
						a = a.replace('UaOw9f0BeZxWbbg3eI8MpHrMGyfL956IQpoN/tSLBeU=','DigiCert Nessie 2022');
						a = a.replace('s3N3B+GEUPhjhtYFqdwRCUp5LbFnDAuH3PADDnk2pZo=','DigiCert Nessie 2023');
						a = a.replace('ZZszUPQ7EsxepatOx2XT/ebIgkN3d3jnIAP56yuMMSk=','Let\'s Encrypt Oak 2019');
						a = a.replace('5xLysDd+GmL7jskMYYTx6ns3y1YdESZb8+DzS/JBVG4=','Let\'s Encrypt Oak 2020');
						a = a.replace('lCC8Ho7VjWyIcx+CiyIsDdHaTV5sT5Q9YdtOL1hNosI=','Let\'s Encrypt Oak 2021');
						a = a.replace('36Veq2iCTx9sre64X04+WurNohKkal6OOxLAIERcKnM=','Let\'s Encrypt Oak 2022');/* src : inclusion request */
						a = a.replace('VYHUwhaQNgFK6gubVzxT8MDkOHhwJQgXL6OqHQcT0ww=','Sectigo Sabre');
						a = a.replace('b1N2rDHwMRnYmQCkURX/dxUcEdkCwQApBo2yCJo32RM=','Sectigo Mammoth');
						a = a.replace('HQJLjrFJizRN/YfqPvwJlvdQbyNdHUlwYaR3PEOcJfs=','Google Daedalus');
						a = a.replace('qJnYeAySkKr0YvMYgMz71SRR6XDQ+/WR73Ww2ZtkVoE=','Google Submariner');
						/* Frozen, Readonly or Retired Logs */
						a = a.replace('aPaY+B9kgr46jO65KB1M/HFRXWeT1ETRCmesu09P+8Q=','Google Aviator');
						a = a.replace('rDua7X+pZ0dXFZ5tfVdWcvnZgQCUHpve/+yhMTt1eC0=','Venafi');
						a = a.replace('AwGd8/2FppqOvR+sxtqbpz5Gl3T+d/V5/FoIuDKMHWs=','Venafi Gen2');
						a = a.replace('3esdK3oNT6Ygi4GtgWhwfi6OnQHVXIiNPRHEzbbsvsw=','Symantec');
						a = a.replace('vHjh38X2PGhGSTNNoQ+hXwl5aSAJwIG08/aRfz7ZuKU=','Symantec Vega');
						a = a.replace('FZcEiNe5l6Bb61JRKt7o0ui0oxZSZBIan6v71fha2T8=','Symantec Sirius');
						a = a.replace('+tTJfMSe4vishcXqXOoJ0CINu/TknGtQZi/4aPhrjCg=','Google Argon 2017');
						a = a.replace('23Sv7ssp7LH+yj5xbSzluaq7NveEcYPHXZ1PN7Yfv2Q=','Cloudflare Nimbus 2018');
						a = a.replace('wRZK4Kdy0tQ5LcgKwQdw1PDEm96ZGkhAwfoHUWT2M2A=','DigiCert Yeti 2018');
						a = a.replace('b/FBtWR+QiL37wUs7658If1gjifSr1pun0uKN9ZjPuU=','DigiCert Nessie 2018');
						b += a;
					};
					alert(b);
				};
				document.getElementById('resultTableTr'+i).appendChild(obj);
				obj = document.createElement('td');
				obj.innerHTML = 'SHA256';
				obj.title = responseData[i].sha256;
				obj.onclick = function(){prompt(this.title,this.title);};
				document.getElementById('resultTableTr'+i).appendChild(obj);
				obj = document.createElement('td');
				obj.innerHTML = 'JSON';
				obj.title = JSON.stringify(responseData[i]);
				document.getElementById('resultTableTr'+i).appendChild(obj);
			};
};
/* Reference of following function bin2hex(buffer) is http://code.i-harness.com/ja/docs/dom/subtlecrypto/digest */
function bin2hex(buffer) {
  var hexCodes = [];
  var view = new DataView(buffer);
  for (var i = 0; i < view.byteLength; i += 4) {
    /* Using getUint32 reduces the number of iterations needed (we process 4 bytes each time) */
    var value = view.getUint32(i)
    /* toString(16) will give the hex representation of the number without padding */
    var stringValue = value.toString(16)
    /* We use concatenation and slice for padding */
    var padding = '00000000'
    var paddedValue = (padding + stringValue).slice(-padding.length)
    hexCodes.push(paddedValue);
  };

  /* Join all the hex strings into one */
  return hexCodes.join("");
};
/* Reference of following function _base64ToArrayBuffer(base64) is unknown. */
/* If you use this for public use, please replace this function. */
function _base64ToArrayBuffer(base64) {
    var binary_string =  window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array( len );
    for (var i = 0; i < len; i++)        {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
};
document.getElementById('cert').onclick=function(){
	var pem = document.getElementById('certInput').value;
	pem = pem.replace('-----BEGIN CERTIFICATE-----\n','');
	pem = pem.replace('\n-----END CERTIFICATE-----','');
	var der = _base64ToArrayBuffer(pem);
	var hashhex = crypto.subtle.digest("SHA-256", der).then(function (hash) {return bin2hex(hash);}).then(function (hash) {
		var responseData, xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://certspotter.com/api/v0/certs/'+hash);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4) {
				document.getElementById('mainDisplay').contentDocument.write('<H2>https://certspotter.com/api/v0/certs/'+hash+'<pre>' + xhr.responseText + '</pre>');
				responseData = JSON.parse(xhr.responseText);
				buildDisplayTable(responseData);
			};
		};
		xhr.send(null);
	});
};
document.getElementById('certs').onclick=function(){
	var responseData, xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://certspotter.com/api/v0/certs?domain='+encodeURIComponent(document.getElementById('domain').value)+'&duplicate=true');
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			document.getElementById('mainDisplay').contentDocument.write('<H2>https://certspotter.com/api/v0/certs?domain='+encodeURIComponent(document.getElementById('domain').value)+'<pre>' + xhr.responseText + '</pre>');
			responseData = JSON.parse(xhr.responseText);
			buildDisplayTable(responseData);
		};
	};
	xhr.send(null);
};
document.getElementById('clearDisplay').onclick=function(){document.getElementById('mainDisplay').contentDocument.body.innerHTML='';};
/* End of program */
