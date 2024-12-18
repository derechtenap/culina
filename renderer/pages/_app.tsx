import type { AppProps } from "next/app";
import {
  createTheme,
  type MantineColorsTuple,
  MantineProvider,
} from "@mantine/core";
import { appWithTranslation } from "next-i18next";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

// All packages except `@mantine/hooks` require styles imports!
import "@mantine/core/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/charts/styles.css";

// Put overrides with custom stylesheets here
import "../styles/globals.css";
import "../styles/scrollbar.css";

/*
 * Custom color palette based on the "Algal Fuel" color (#20bf6b)
 * The palette was generated using the Mantine color generator tool
 *
 * @see https://flatuicolors.com/palette/de
 * @see https://mantine.dev/colors-generator/?color=20bf6b
 */
const culinaGreen: MantineColorsTuple = [
  "#e6fef2",
  "#d4f9e5",
  "#aaf1cb",
  "#7ce9af",
  "#57e297",
  "#3fdd88",
  "#30dc80",
  "#21c26d",
  "#12ad5f",
  "#00964f",
];

const theme = createTheme({
  primaryColor: "culinaGreen",
  colors: {
    culinaGreen,
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      <Notifications position="top-right" limit={5} />
      <ModalsProvider>
        <Component {...pageProps} />
      </ModalsProvider>
    </MantineProvider>
  );
};

export default appWithTranslation(App);
