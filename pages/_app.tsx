import "../styles/globals.scss";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "react-tooltip/dist/react-tooltip.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../src/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
