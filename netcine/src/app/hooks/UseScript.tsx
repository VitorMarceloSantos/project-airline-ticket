import { useEffect } from 'react';

// const useScript = (url: string) => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = url;
//     script.async = true;

//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     }
//   }, [url]);
// };

const useScript = () => {
	useEffect(() => {
		const script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'script.js';
		script.async = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, []);
};

export default useScript;
