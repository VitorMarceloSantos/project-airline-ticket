'user client';
import { ProgressBarProvider } from '../context';

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return <ProgressBarProvider>{children}</ProgressBarProvider>;
};
