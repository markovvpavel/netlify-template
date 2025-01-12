import { Page } from "@/components/Page/Page";
import { Section } from "@/components/Section";
import { useTranslation } from "@/hooks/useTranslation";
import { NextSeo } from "next-seo";

export default function IndexPage() {
  const { t } = useTranslation("components", "pages");

  return (
    <Page>
      <NextSeo title={`${t("about")} | Netlify Template`} />
      <Section seq={1} imageSeq={4} />
      <Section seq={2} imageSeq={5} />
      <Section seq={3} imageSeq={6} />
    </Page>
  );
}
