export const functionTest = () => {
	window.addEventListener('resize', () => console.log(window.innerWidth));
};

// useEffect(() => {
// 	functionTest();
// 	// return () => window.removeEventListener('resize', updateSize);
// }, []);
