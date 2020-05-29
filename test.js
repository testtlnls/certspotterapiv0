document.write("<iframe id='mainDisplay' src='#' style='width:90%; height:50%'></iframe><P><textarea id='certInput' style='width:800px; height:100px;' placeholder='-----BEGIN CERTIFICATE-----'></textarea></P><H3><a href='javascript:void(0)' id='cert'>Get Certspotter Entry</a>　<a href='javascript:void(0)' id='clearDisplay'>Clear Display</a></H3><H3><input id='domain' placeholder='www.example.com' /> <a id='certs' href='javascript:void(0)'>certs</a></H3>");
window.logArray = [
						['pLkJkLQYWBSHuxOizGdwCjw1mAT5G9+443fNDsgN3BA=','Google Pilot'],
						['7ku9t3XOYLrhQmkfq+GeZqMPfl+wctiDAMR7iXqo/cs=','Google Rocketeer'],
						['u9nfvB+KcbWTlCOXqpJ7RzhXlQqrUugakJZkNo4e0YU=','Google Skydiver'],
						['KTxRllTIOWW6qlD8WAfUt2+/WHopctykwwz05UVH9Hg=','Google Icarus'],
						['pFASaQVaFVReYhGrN7wQP2KuVXakXksXFEU+GyIQaiU=','Google Argon 2018'],
						['Y/Lbzeg7zCzPC3KEJ1drM6SNYXePvXWmOLHHaFRL2I0=','Google Argon 2019'],
						['sh4FzIuizYogTodm+Su5iiUgZ2va+nDnsklTLe+LkF4=','Google Argon 2020'],
						['9lyUL9F3MCIUVBgIMJRWjuNNExkzv98MLyALzE7xZOM=','Google Argon 2021'],
						['KXm+8J45OSHwVnOfY6V35b5XfZxgCvj5TV0mXCVdx4Q=','Google Argon 2022'],
						['6D7Q2j71BjUy51covIlryQPTy9ERa+zraeF3fW0GvW4=','Google Argon 2023'],
						['sQzVWabWeEaBH335pRUyc5rEjXA76gMj2l04dVvArU4=','Google Xenon 2018'],
						['CEEUmABxUywWGQRgvPxH/cJlOvopLHKzf/hjrinMyfA=','Google Xenon 2019'],
						['B7dcG+V9aP/xsMYdIxXHuuZXfFeUt2ruvGE6GmnTohw=','Google Xenon 2020'],
						['fT7y+I//iFVoJMLAyp5SiXkrxQ54CX8uapdomX4i8Nc=','Google Xenon 2021'],
						['RqVV63X6kSAwtaKJafTzfREsQXS+/Um4havy/HD+bUc=','Google Xenon 2022'],
						['rfe++nz/EMiLnT2cHj4YarRnKV3PsQwkyoWGNOvcgoo=','Google Xenon 2023'],
						['Xqdz+d9WwOe1Nkh90EngMnqRmgyEoRIShBh1loFxRVg=','Cloudflare Nimbus 2020'],
						['RJRlLrDuzq/EQAfYqP4owNrmgr7YyzG1P9MzlrW2gag=','Cloudflare Nimbus 2021'],
						['QcjKsd8iRkoQxqE6CUKHXk4xixsD6+tLx2jwkGKWBvY=','Cloudflare Nimbus 2022'],
						['ejKMVNi3LbYg6jjgUh7phBZwMhOFTTvSK8E6V6NS61I=','Cloudflare Nimbus 2023'],
						['VhQGmi/XwuzT9eG9RLI+x0Z2ubyZEVzA75SYVdaJ0N0=','DigiCert Log Server'],
						['h3W/51l8+IxDmV+9827/Vo1HVjb/SrVgwbTq/16ggw8=','DigiCert Log Server 2'],
						['8JWkWfIA0YJAEC0vk4iOrUv+HUfjmeHQNKawqKqOsnM=','DigiCert Yeti 2020'],
						['XNxDkv7mq0VEsV6a1FbmEDf71fpH3KFzlLJe5vbHDso=','DigiCert Yeti 2021'],
						['IkVFB1lVJFaWP6Ev8fdthuAjJmOtwEt/XcaDXG7iDwI=','DigiCert Yeti 2022'],
						['Nc8ZG7+xbFe/D61MbULLu7YnICZR6j/hKu+oA8M71kw=','DigiCert Yeti 2023'],
						['xlKg7EjOs/yrFwmSxDqHQTMJ6ABlomJSQBujNioXxWU=','DigiCert Nessie 2020'],
						['7sCV7o1yZA+S48O5G8cSo2lqCXtLahoUOOZHssvtxfk=','DigiCert Nessie 2021'],
						['UaOw9f0BeZxWbbg3eI8MpHrMGyfL956IQpoN/tSLBeU=','DigiCert Nessie 2022'],
						['s3N3B+GEUPhjhtYFqdwRCUp5LbFnDAuH3PADDnk2pZo=','DigiCert Nessie 2023'],
						['5xLysDd+GmL7jskMYYTx6ns3y1YdESZb8+DzS/JBVG4=','Let\'s Encrypt Oak 2020'],
						['lCC8Ho7VjWyIcx+CiyIsDdHaTV5sT5Q9YdtOL1hNosI=','Let\'s Encrypt Oak 2021'],
						['36Veq2iCTx9sre64X04+WurNohKkal6OOxLAIERcKnM=','Let\'s Encrypt Oak 2022'],
						['tz77JN+cTbp18jnFulj0bF38Qs96nzXEnh0JgSXttJk=','Let\'s Encrypt Oak 2023'],
						['xc/lS2FRtJsULtJjvecykzY3mXmVUK5ENc0aaZfJw8M=','Qihoo 360 v1 2020'],
						['SBRYfPKLCP5oP9K82UWZTC63TIroyH/OQpt80x1RvcQ=','Qihoo 360 v1 2021'],
						['SRG41hTP09mfFtN2VF7huMz8UR9QnwgLoKCH2R367qk=','Qihoo 360 v1 2022'],
						['tnQLEgAuAz/Q5+lB9Lo+4b/BSbUktM9ijVPv6h9AOo0=','Qihoo 360 v1 2023'],
						['pZWUO1NwvukG4AUNH7W7xqQOZfJlroUsdjY/rbIzNu0=','TrustAsia 2020'],
						['Z422Wz50Q7bzo3DV4TqxtDvgoNNR98p0IlDHxvpRqIo=','TrustAsia 2021'],
						['w2X5s2VPMoPHnamOk9dBj1ure+MlLJjh0vBLuetCfSM=','TrustAsia 2022'],
						['6H6nZgvCbPYALvVyXT/g4zG5OTu5L79Y6zuQSdr1Q1o=','TrustAsia 2023'],
						['VYHUwhaQNgFK6gubVzxT8MDkOHhwJQgXL6OqHQcT0ww=','Sectigo Sabre'],
						['b1N2rDHwMRnYmQCkURX/dxUcEdkCwQApBo2yCJo32RM=','Sectigo Mammoth'],
						['HQJLjrFJizRN/YfqPvwJlvdQbyNdHUlwYaR3PEOcJfs=','Google Daedalus'],
						['qJnYeAySkKr0YvMYgMz71SRR6XDQ+/WR73Ww2ZtkVoE=','Google Submariner'],
						/* Frozen, Readonly or Retired Logs */
						['aPaY+B9kgr46jO65KB1M/HFRXWeT1ETRCmesu09P+8Q=','Google Aviator'],
						['rDua7X+pZ0dXFZ5tfVdWcvnZgQCUHpve/+yhMTt1eC0=','Venafi'],
						['AwGd8/2FppqOvR+sxtqbpz5Gl3T+d/V5/FoIuDKMHWs=','Venafi Gen2'],
						['3esdK3oNT6Ygi4GtgWhwfi6OnQHVXIiNPRHEzbbsvsw=','Symantec'],
						['vHjh38X2PGhGSTNNoQ+hXwl5aSAJwIG08/aRfz7ZuKU=','Symantec Vega'],
						['FZcEiNe5l6Bb61JRKt7o0ui0oxZSZBIan6v71fha2T8=','Symantec Sirius'],
						['+tTJfMSe4vishcXqXOoJ0CINu/TknGtQZi/4aPhrjCg=','Google Argon 2017'],
						['23Sv7ssp7LH+yj5xbSzluaq7NveEcYPHXZ1PN7Yfv2Q=','Cloudflare Nimbus 2018'],
						['dH7agzGtMxCRIZzOJU9CcMK//V5CIAjGNzV55hB7zFY=','Cloudflare Nimbus 2019'],
						['wRZK4Kdy0tQ5LcgKwQdw1PDEm96ZGkhAwfoHUWT2M2A=','DigiCert Yeti 2018'],
						['4mlLribo6UAJ6IYbtjuD1D7n/nSI+6SPKJMBnd3x2/4=','DigiCert Yeti 2019'],
						['b/FBtWR+QiL37wUs7658If1gjifSr1pun0uKN9ZjPuU=','DigiCert Nessie 2018'],
						['/kRhCLHQGreKYsz+q2qysrq/86va2ApNizDfLQAIgww=','DigiCert Nessie 2019'],
						['ZZszUPQ7EsxepatOx2XT/ebIgkN3d3jnIAP56yuMMSk=','Let\'s Encrypt Oak 2019'],
						['R0RHfHXeQm1cRO/UqSyWd1l/ZXqP4MrbxtYW7aSXxCU=','Qihoo 360 2020'],
						['xtftntuOdPCnG01KmEvL66u9KMwf12Mp6IcmzUwlRmM=','Qihoo 360 2021'],
						['ZjywnB/Nm6pidjzLU07sgFgSKAUHrGmkX804z0zHTPE=','Qihoo 360 2022'],
						['4mR/bto0BQPGTU4QqGloH96cWizzsy1fIAuWNgWQiCM=','Qihoo 360 2023']
];
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
					obj.innerHTML = '<div align=right>閉じる</div><a href=https://crt.sh/?q='+
								basedata.sha256+
								'>crt.sh</a> <a href=https://censys.io/certificates/'+
								basedata.sha256+
								'>censys</a> <a href=https://transparencyreport.google.com/https/certificates/'+
								encodeURIComponent(
									btoa(
										Array.from(
											basedata.sha256.replace(/(.{2})/g,'$1 ').slice(0,-1).split(' '),
											x => String.fromCharCode(parseInt(x,16))
										).join('')
									)
								)+'>Google</a><pre>'+
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
						for(var k=0;k<window.logArray.length;k++){
							a = a.replace(window.logArray[k][0],window.logArray[k][1]);
						};
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
function bin2hex(buffer) {
	return Array.from(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
};
function _base64ToArrayBuffer(base64) {
	return Uint8Array.from(window.atob(base64).split(''), x => x.charCodeAt(0)).buffer;
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
