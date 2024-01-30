// import { useEffect } from 'react';
// import useScript from '../hooks/UseScript';

// // var scriptUrl = 'https://www.youtube.com/s/player/cb886c6c/www-widgetapi.vflset/www-widgetapi.js';
// // try {
// // 	var ttPolicy = window.trustedTypes.createPolicy('youtube-widget-api', {
// // 		createScriptURL: function (x) {
// // 			return x;
// // 		},
// // 	});
// // 	scriptUrl = ttPolicy.createScriptURL(scriptUrl);
// // } catch (e) {}
// // var YT: {loading: number, loaded: number, ready: any} = {loaded: 0, loading: 0};
// // if (!window['YT']) YT = { loading: 0, loaded: 0 };
// // var YTConfig;
// // if (!window['YTConfig']) YTConfig = { host: 'https://www.youtube.com' };
// // if (!YT?.loading) {
// // 	YT.loading = 1;
// // 	(function () {
// // 		var l = [];
// // 		YT.ready = function (f) {
// // 			if (YT.loaded) f();
// // 			else l.push(f);
// // 		};
// // 		window.onYTReady = function () {
// // 			YT.loaded = 1;
// // 			var i = 0;
// // 			for (; i < l.length; i++)
// // 				try {
// // 					l[i]();
// // 				} catch (e) {}
// // 		};
// // 		YT.setConfig = function (c) {
// // 			var k;
// // 			for (k in c) if (c.hasOwnProperty(k)) YTConfig[k] = c[k];
// // 		};
// // 		var a = document.createElement('script');
// // 		a.type = 'text/javascript';
// // 		a.id = 'www-widgetapi-script';
// // 		a.src = scriptUrl;
// // 		a.async = true;
// // 		var c = document.currentScript;
// // 		if (c) {
// // 			var n = c.nonce || c.getAttribute('nonce');
// // 			if (n) a.setAttribute('nonce', n);
// // 		}
// // 		var b = document.getElementsByTagName('script')[0];
// // 		b.parentNode.insertBefore(a, b);
// // 	})();
// // }

// export const CreateNewPlayerVideo = () => {
// 	useScript('https://www.youtube.com/iframe_api');
// 	var player;

// 	function onPlayerReady(event) {
// 		document.getElementById('existing-iframe-example').style.borderColor = '#FF6D00';
// 	}
// 	function changeBorderColor(playerStatus) {
// 		var color;
// 		if (playerStatus == -1) {
// 			color = '#37474F'; // unstarted = gray
// 		} else if (playerStatus == 0) {
// 			color = '#FFFF00'; // ended = yellow
// 		} else if (playerStatus == 1) {
// 			color = '#33691E'; // playing = green
// 		} else if (playerStatus == 2) {
// 			color = '#DD2C00'; // paused = red
// 		} else if (playerStatus == 3) {
// 			color = '#AA00FF'; // buffering = purple
// 		} else if (playerStatus == 5) {
// 			color = '#FF6DOO'; // video cued = orange
// 		}
// 		if (color) {
// 			document.getElementById('existing-iframe-example').style.borderColor = color;
// 		}
// 	}
// 	function onPlayerStateChange(event) {
// 		changeBorderColor(event.data);
// 	}
// 	useEffect(() => {
// 		(function onYouTubeIframeAPIReady() {
// 			player = new YT.Player('existing-iframe-example', {
// 				events: {
// 					onReady: onPlayerReady,
// 					onStateChange: onPlayerStateChange,
// 				},
// 			});
// 		})();
// 	}, []);

// 	return (
// 		<>
// 			{/* <script src='https://www.youtube.com/iframe_api'></script> */}
// 			<div id='player-container'>
// 				<div id='player'></div>
// 			</div>
// 		</>
// 	);
// };
