import { Page } from "@/components/Page/Page";
import { Section } from "@/components/Section";
import { useTranslation } from "@/hooks/useTranslation";
import { NextSeo } from "next-seo";

export default function IndexPage() {
  const { t } = useTranslation("components", "pages");

  return (
    <Page>
      <NextSeo title={`${t("home")} | Netlify Template`} />
      <Section seq={1} imageSeq={1} />
      <Section seq={2} imageSeq={2} />
      <Section seq={3} imageSeq={3} />
    </Page>
  );
}
