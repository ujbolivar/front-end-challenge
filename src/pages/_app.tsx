import '$/styles/fonts.css';
import { Layout } from '$/containers/Layouts';
import client from '$/graphql/lib/ApolloClient';
import GlobalStyle from '$/styles/global';
import theme from '$/styles/themes';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}
