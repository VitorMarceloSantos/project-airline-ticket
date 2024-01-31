// import Script from 'next/script';
// import { CreateNewPlayerType } from '../types/components/CardTypes';
// import { useEffect, useState } from 'react';

// export const CreateNewPlayerVideo = ({ values }: CreateNewPlayerType) => {
// 	const [stopPlayer, setStopPlayer] = useState<boolean>(false);
// 	const { index, urlMovie, cardSelected } = values;

// 	const executeScript = (index: number) => {
// 		return `
// 		var tag${index} = document.createElement('script');

//       tag${index}.src = "https://www.youtube.com/iframe_api";
//       var firstScriptTag${index} = document.getElementsByTagName('script')[${index}];
//       firstScriptTag${index}.parentNode.insertBefore(tag${index}, firstScriptTag${index});
// 		var playerScript${index};
//     function onYouTubeIframeAPIReady() {

//       playerScript${index} = new YT.Player('player-${index}', {
//         events: {
//           'onReady': onPlayerReady,
//           'onStateChange': onPlayerStateChange
//         }
//       });
//     }

//     document.getElementById('start-player-${index}-button')?.addEventListener('click', () => {
//       console.log('Entrou no script')
//       playerScript${index}.stopVideo();
//     })

//     function onPlayerReady(event) {}

//     var done = false;
//     function onPlayerStateChange(event) {
//       if (event.data == YT.PlayerState.PLAYING && !done) {
//         done = true;
//       }
//     }

// 		function stopVideo() {
//       playerScript${index}.stopVideo();
//     }
//     `;
// 	};

// 	useEffect(() => {
// 		// console.log(stop);
// 	}, [cardSelected]);

// 	return (
// 		<>
// 			<iframe id={`player-${index}`} src={urlMovie} allow='autoplay; encrypted-media'></iframe>
// 			<button
// 				className='
// 							carousel-card-back-body-buttons-btn
// 							carousel-card-back-body-buttons-btn-color
// 							carousel-card-video-position-button'
// 				id={`start-player-${index}-button`}
// 			>
// 				stop
// 			</button>
// 			<Script id={`script-${index}`}>{executeScript(index)}</Script>
// 		</>
// 	);
// };
