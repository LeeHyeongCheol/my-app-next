import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocumnet extends Document {

    render() {
        return (
            <Html lang='jp'>
              <Head />
              <body>          
                <Main />        
                <NextScript />              
              </body>                 
            </Html>
          );
    }
}

export default MyDocumnet;