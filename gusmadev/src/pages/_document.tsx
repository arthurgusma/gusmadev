import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='icon' type='/public/image/jpg' href='images/icon.jpg' />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,400&display=swap'
            rel='stylesheet'
          />
          <link rel='shortcut icon' href='/icon.jpg' type='image/jpg' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
