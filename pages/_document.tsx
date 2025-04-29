import { theme } from '@/shared/theme';
import {
  documentGetInitialProps,
  DocumentHeadTags,
  type DocumentHeadTagsProps,
} from '@mui/material-nextjs/v13-pagesRouter';
import {
  Html,
  Head,
  Main,
  NextScript,
  type DocumentContext,
  type DocumentProps,
} from 'next/document';

const Document = (props: DocumentProps & DocumentHeadTagsProps) => {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

Document.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};

export default Document;
