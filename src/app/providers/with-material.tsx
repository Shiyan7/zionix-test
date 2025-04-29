import { theme } from '@/shared/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';
import type { AppProps, AppType } from 'next/app';

export const withMaterial = (Component: AppType) => (props: AppProps) => {
  return (
    <AppCacheProvider {...props}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    </AppCacheProvider>
  );
};
