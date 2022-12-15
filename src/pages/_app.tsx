import '$/styles/fonts.css';
import { Layout } from '$/containers/Layouts';
import AppProvider from '$/context/AppProvider';
import client from '$/lib/ApolloClient';
import GlobalStyle from '$/styles/global';
import theme from '$/styles/themes';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </AppProvider>
    </ApolloProvider>
  );
}
