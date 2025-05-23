import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
// import Image from 'next/image';

const logo = (
  <>
    <svg
      width="28"
      height="41"
      viewBox="0 0 74 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginRight: "15px" }}
    >
      <path
        d="M66.8651 76.3843C66.8651 79.5163 65.6982 82.2622 63.8248 84.3683C63.8027 84.3931 63.7873 84.4233 63.7805 84.4559V84.4559C63.7523 84.5906 63.8729 84.7091 64.0065 84.6762C69.4086 83.3451 73.7764 78.7307 73.7764 72.6711V41.2575C73.7764 31.9714 68.5896 23.3907 60.1698 18.7477L26.1725 0L19.4379 3.81057L53.2586 22.4608C61.6783 27.1039 66.8651 35.6846 66.8651 44.9707V76.3843Z"
        fill="url(#paint0_linear_29900_34200)"
      />
      <path
        d="M66.8651 76.3843C66.8651 79.5163 65.6982 82.2622 63.8248 84.3683C63.8027 84.3931 63.7873 84.4233 63.7805 84.4559V84.4559C63.7523 84.5906 63.8729 84.7091 64.0065 84.6762C69.4086 83.3451 73.7764 78.7307 73.7764 72.6711V41.2575C73.7764 31.9714 68.5896 23.3907 60.1698 18.7477L26.1725 0L19.4379 3.81057L53.2586 22.4608C61.6783 27.1039 66.8651 35.6846 66.8651 44.9707V76.3843Z"
        fill="url(#paint1_linear_29900_34200)"
      />
      <path
        d="M66.8651 76.3843C66.8651 79.5163 65.6982 82.2622 63.8248 84.3683C63.8027 84.3931 63.7873 84.4233 63.7805 84.4559V84.4559C63.7523 84.5906 63.8729 84.7091 64.0065 84.6762C69.4086 83.3451 73.7764 78.7307 73.7764 72.6711V41.2575C73.7764 31.9714 68.5896 23.3907 60.1698 18.7477L26.1725 0L19.4379 3.81057L53.2586 22.4608C61.6783 27.1039 66.8651 35.6846 66.8651 44.9707V76.3843Z"
        fill="url(#paint2_angular_29900_34200)"
        fill-opacity="0.2"
      />
      <path
        d="M66.8651 76.3843C66.8651 79.5163 65.6982 82.2622 63.8248 84.3683C63.8027 84.3931 63.7873 84.4233 63.7805 84.4559V84.4559C63.7523 84.5906 63.8729 84.7091 64.0065 84.6762C69.4086 83.3451 73.7764 78.7307 73.7764 72.6711V41.2575C73.7764 31.9714 68.5896 23.3907 60.1698 18.7477L26.1725 0L19.4379 3.81057L53.2586 22.4608C61.6783 27.1039 66.8651 35.6846 66.8651 44.9707V76.3843Z"
        fill="url(#paint3_angular_29900_34200)"
        fill-opacity="0.1"
      />
      <path
        d="M66.8651 76.3843C66.8651 79.5163 65.6982 82.2622 63.8248 84.3683C63.8027 84.3931 63.7873 84.4233 63.7805 84.4559V84.4559C63.7523 84.5906 63.8729 84.7091 64.0065 84.6762C69.4086 83.3451 73.7764 78.7307 73.7764 72.6711V41.2575C73.7764 31.9714 68.5896 23.3907 60.1698 18.7477L26.1725 0L19.4379 3.81057L53.2586 22.4608C61.6783 27.1039 66.8651 35.6846 66.8651 44.9707V76.3843Z"
        fill="url(#paint4_linear_29900_34200)"
        fill-opacity="0.2"
      />
      <path
        d="M57.3621 81.7477V50.3341C57.3621 41.0481 52.1753 32.4673 43.7556 27.8243L9.93494 9.17403L16.6696 5.36346L50.6668 24.1111C59.0866 28.7542 64.2734 37.3349 64.2734 46.621V78.0346C64.2734 84.0941 59.9056 88.7086 54.5035 90.0397C54.3699 90.0726 54.2493 89.954 54.2775 89.8194V89.8194C54.2844 89.7868 54.2997 89.7566 54.3218 89.7317C56.1953 87.6257 57.3621 84.8798 57.3621 81.7477Z"
        fill="url(#paint5_linear_29900_34200)"
      />
      <path
        d="M57.3621 81.7477V50.3341C57.3621 41.0481 52.1753 32.4673 43.7556 27.8243L9.93494 9.17403L16.6696 5.36346L50.6668 24.1111C59.0866 28.7542 64.2734 37.3349 64.2734 46.621V78.0346C64.2734 84.0941 59.9056 88.7086 54.5035 90.0397C54.3699 90.0726 54.2493 89.954 54.2775 89.8194V89.8194C54.2844 89.7868 54.2997 89.7566 54.3218 89.7317C56.1953 87.6257 57.3621 84.8798 57.3621 81.7477Z"
        fill="url(#paint6_linear_29900_34200)"
      />
      <path
        d="M57.3621 81.7477V50.3341C57.3621 41.0481 52.1753 32.4673 43.7556 27.8243L9.93494 9.17403L16.6696 5.36346L50.6668 24.1111C59.0866 28.7542 64.2734 37.3349 64.2734 46.621V78.0346C64.2734 84.0941 59.9056 88.7086 54.5035 90.0397C54.3699 90.0726 54.2493 89.954 54.2775 89.8194V89.8194C54.2844 89.7868 54.2997 89.7566 54.3218 89.7317C56.1953 87.6257 57.3621 84.8798 57.3621 81.7477Z"
        fill="url(#paint7_angular_29900_34200)"
        fill-opacity="0.2"
      />
      <path
        d="M57.3621 81.7477V50.3341C57.3621 41.0481 52.1753 32.4673 43.7556 27.8243L9.93494 9.17403L16.6696 5.36346L50.6668 24.1111C59.0866 28.7542 64.2734 37.3349 64.2734 46.621V78.0346C64.2734 84.0941 59.9056 88.7086 54.5035 90.0397C54.3699 90.0726 54.2493 89.954 54.2775 89.8194V89.8194C54.2844 89.7868 54.2997 89.7566 54.3218 89.7317C56.1953 87.6257 57.3621 84.8798 57.3621 81.7477Z"
        fill="url(#paint8_angular_29900_34200)"
        fill-opacity="0.1"
      />
      <path
        d="M57.3621 81.7477V50.3341C57.3621 41.0481 52.1753 32.4673 43.7556 27.8243L9.93494 9.17403L16.6696 5.36346L50.6668 24.1111C59.0866 28.7542 64.2734 37.3349 64.2734 46.621V78.0346C64.2734 84.0941 59.9056 88.7086 54.5035 90.0397C54.3699 90.0726 54.2493 89.954 54.2775 89.8194V89.8194C54.2844 89.7868 54.2997 89.7566 54.3218 89.7317C56.1953 87.6257 57.3621 84.8798 57.3621 81.7477Z"
        fill="url(#paint9_linear_29900_34200)"
        fill-opacity="0.2"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 14.7934L6.82236 10.9332L40.8196 29.6809C49.2394 34.3239 54.4262 42.9046 54.4262 52.1907V83.7592L54.4253 83.7587C54.3094 93.1964 43.5806 99.0615 34.9883 94.3233L4.17559 77.3318L0 75.0884V14.7934ZM47.5149 56.0019V74.2386L24.6214 61.614V28.3708L33.9084 33.4921C42.3282 38.1351 47.5149 46.7158 47.5149 56.0019ZM15.9823 23.6068L19.4379 25.5124V64.4706L19.8007 64.6651L47.5149 79.948V83.4761L16.0269 66.1121L15.9823 66.1373V23.6068ZM10.3669 20.5102V69.134L10.5293 69.2227L10.3669 69.3146L47.4725 89.7763C47.1623 91.4083 45.213 92.3393 43.6273 91.4649L6.91126 71.2179V18.6046L10.3669 20.5102Z"
        fill="url(#paint10_linear_29900_34200)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 14.7934L6.82236 10.9332L40.8196 29.6809C49.2394 34.3239 54.4262 42.9046 54.4262 52.1907V83.7592L54.4253 83.7587C54.3094 93.1964 43.5806 99.0615 34.9883 94.3233L4.17559 77.3318L0 75.0884V14.7934ZM47.5149 56.0019V74.2386L24.6214 61.614V28.3708L33.9084 33.4921C42.3282 38.1351 47.5149 46.7158 47.5149 56.0019ZM15.9823 23.6068L19.4379 25.5124V64.4706L19.8007 64.6651L47.5149 79.948V83.4761L16.0269 66.1121L15.9823 66.1373V23.6068ZM10.3669 20.5102V69.134L10.5293 69.2227L10.3669 69.3146L47.4725 89.7763C47.1623 91.4083 45.213 92.3393 43.6273 91.4649L6.91126 71.2179V18.6046L10.3669 20.5102Z"
        fill="url(#paint11_linear_29900_34200)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 14.7934L6.82236 10.9332L40.8196 29.6809C49.2394 34.3239 54.4262 42.9046 54.4262 52.1907V83.7592L54.4253 83.7587C54.3094 93.1964 43.5806 99.0615 34.9883 94.3233L4.17559 77.3318L0 75.0884V14.7934ZM47.5149 56.0019V74.2386L24.6214 61.614V28.3708L33.9084 33.4921C42.3282 38.1351 47.5149 46.7158 47.5149 56.0019ZM15.9823 23.6068L19.4379 25.5124V64.4706L19.8007 64.6651L47.5149 79.948V83.4761L16.0269 66.1121L15.9823 66.1373V23.6068ZM10.3669 20.5102V69.134L10.5293 69.2227L10.3669 69.3146L47.4725 89.7763C47.1623 91.4083 45.213 92.3393 43.6273 91.4649L6.91126 71.2179V18.6046L10.3669 20.5102Z"
        fill="url(#paint12_angular_29900_34200)"
        fill-opacity="0.2"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 14.7934L6.82236 10.9332L40.8196 29.6809C49.2394 34.3239 54.4262 42.9046 54.4262 52.1907V83.7592L54.4253 83.7587C54.3094 93.1964 43.5806 99.0615 34.9883 94.3233L4.17559 77.3318L0 75.0884V14.7934ZM47.5149 56.0019V74.2386L24.6214 61.614V28.3708L33.9084 33.4921C42.3282 38.1351 47.5149 46.7158 47.5149 56.0019ZM15.9823 23.6068L19.4379 25.5124V64.4706L19.8007 64.6651L47.5149 79.948V83.4761L16.0269 66.1121L15.9823 66.1373V23.6068ZM10.3669 20.5102V69.134L10.5293 69.2227L10.3669 69.3146L47.4725 89.7763C47.1623 91.4083 45.213 92.3393 43.6273 91.4649L6.91126 71.2179V18.6046L10.3669 20.5102Z"
        fill="url(#paint13_angular_29900_34200)"
        fill-opacity="0.1"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 14.7934L6.82236 10.9332L40.8196 29.6809C49.2394 34.3239 54.4262 42.9046 54.4262 52.1907V83.7592L54.4253 83.7587C54.3094 93.1964 43.5806 99.0615 34.9883 94.3233L4.17559 77.3318L0 75.0884V14.7934ZM47.5149 56.0019V74.2386L24.6214 61.614V28.3708L33.9084 33.4921C42.3282 38.1351 47.5149 46.7158 47.5149 56.0019ZM15.9823 23.6068L19.4379 25.5124V64.4706L19.8007 64.6651L47.5149 79.948V83.4761L16.0269 66.1121L15.9823 66.1373V23.6068ZM10.3669 20.5102V69.134L10.5293 69.2227L10.3669 69.3146L47.4725 89.7763C47.1623 91.4083 45.213 92.3393 43.6273 91.4649L6.91126 71.2179V18.6046L10.3669 20.5102Z"
        fill="url(#paint14_linear_29900_34200)"
        fill-opacity="0.2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_29900_34200"
          x1="-1.22847"
          y1="48"
          x2="72.9534"
          y2="41.3683"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF3873" />
          <stop offset="0.473958" stop-color="#711EFF" />
          <stop offset="1" stop-color="#3FE5FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_29900_34200"
          x1="4.57263"
          y1="4.41813"
          x2="56.3635"
          y2="48.4163"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F6F063" />
          <stop offset="1" stop-color="#E07774" stop-opacity="0" />
        </linearGradient>
        <radialGradient
          id="paint2_angular_29900_34200"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1.94507 33.7465) rotate(65.584) scale(21.5051 18.4545)"
        >
          <stop offset="0.925861" stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint3_angular_29900_34200"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12.6601 24.8437) rotate(59.0024) scale(13.6496 18.6422)"
        >
          <stop offset="0.0864251" stop-color="white" />
          <stop offset="0.94115" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <linearGradient
          id="paint4_linear_29900_34200"
          x1="8.44572"
          y1="26.6642"
          x2="46.8815"
          y2="40.2331"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_29900_34200"
          x1="-1.22847"
          y1="48"
          x2="72.9534"
          y2="41.3683"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF3873" />
          <stop offset="0.473958" stop-color="#711EFF" />
          <stop offset="1" stop-color="#3FE5FF" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_29900_34200"
          x1="4.57263"
          y1="4.41813"
          x2="56.3635"
          y2="48.4163"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F6F063" />
          <stop offset="1" stop-color="#E07774" stop-opacity="0" />
        </linearGradient>
        <radialGradient
          id="paint7_angular_29900_34200"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1.94507 33.7465) rotate(65.584) scale(21.5051 18.4545)"
        >
          <stop offset="0.925861" stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint8_angular_29900_34200"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12.6601 24.8437) rotate(59.0024) scale(13.6496 18.6422)"
        >
          <stop offset="0.0864251" stop-color="white" />
          <stop offset="0.94115" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <linearGradient
          id="paint9_linear_29900_34200"
          x1="8.44572"
          y1="26.6642"
          x2="46.8815"
          y2="40.2331"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_29900_34200"
          x1="-1.22847"
          y1="48"
          x2="72.9534"
          y2="41.3683"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF3873" />
          <stop offset="0.473958" stop-color="#711EFF" />
          <stop offset="1" stop-color="#3FE5FF" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_29900_34200"
          x1="4.57263"
          y1="4.41813"
          x2="56.3635"
          y2="48.4163"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F6F063" />
          <stop offset="1" stop-color="#E07774" stop-opacity="0" />
        </linearGradient>
        <radialGradient
          id="paint12_angular_29900_34200"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1.94507 33.7465) rotate(65.584) scale(21.5051 18.4545)"
        >
          <stop offset="0.925861" stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint13_angular_29900_34200"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12.6601 24.8437) rotate(59.0024) scale(13.6496 18.6422)"
        >
          <stop offset="0.0864251" stop-color="white" />
          <stop offset="0.94115" stop-color="white" stop-opacity="0" />
        </radialGradient>
        <linearGradient
          id="paint14_linear_29900_34200"
          x1="8.44572"
          y1="26.6642"
          x2="46.8815"
          y2="40.2331"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>

    <strong>Drift Protocol v2</strong>
  </>
);

const config: DocsThemeConfig = {
  primaryHue: 298,
  primarySaturation: 100,
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  project: {
    link: "https://github.com/drift-labs",
  },
  docsRepositoryBase:
    "https://github.com/drift-labs/drift-protocol-v2-docs/tree/master",
  chat: {
    link: "https://discord.com/invite/95kByNnDy5",
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath != "/") {
      return {
        titleTemplate: "%s – Drift Protocol ",
      };
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig();
    const socialCard = "public/assets/drift-v2.png";

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Drift brings on-chain, cross-margined perpetual futures to Solana. Making futures DEXs the best way to trade."
        />
        <meta
          name="og:description"
          content="Drift brings on-chain, cross-margined perpetual futures to Solana. Making futures DEXs the best way to trade."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="drift.trade" />
        <meta name="twitter:url" content="https://www.drift.trade/" />
        <meta
          name="og:title"
          content={title ? title + " – Drift Protocol" : "Drift Protocol"}
        />
        <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/assets/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/assets/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/assets/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    );
  },
  footer: {
    text: (
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="Drift Protocol Landing Page"
          href="https://www.drift.trade/"
        >
          <p>© {new Date().getFullYear()} Drift Protocol</p>
        </a>
      </div>
    ),
  },
};

export default config;
