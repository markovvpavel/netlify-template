import "../styles/globals.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import { Layout } from "@/components/Layout/Layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
