import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

export const GlobalFooter = () => {
	return (
		<section className='footer-container'>
			<section className='footer-container-links'>
				<Link
					href='https://wa.me/5534999791668?text=Bom%20dia,%20tudo%20bem?%20Em%20breve%20vamos%20atende-lo.'
					target='_blank'
				>
					<WhatsAppIcon className='footer-container-links-icon' />
				</Link>
				<Link href='https://www.linkedin.com/in/vitor-marcelo-santos/' target='_blank'>
					<LinkedInIcon className='footer-container-links-icon' />
				</Link>
			</section>
			<small className='footer-container-developer'>
				FERREIRA E DE SOUZA TECNOLOGIA LTDA&copy;2024 - Todos os direitos reservados.
			</small>
		</section>
	);
};
