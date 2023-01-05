import { QueryClient, QueryClientProvider } from "react-query";

import "react-loading-skeleton/dist/skeleton.css";
import "tailwindcss/tailwind.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
