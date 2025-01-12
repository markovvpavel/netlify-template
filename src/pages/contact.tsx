import { Page } from "@/components/Page/Page";
import { Section } from "@/components/Section";
import { useTranslation } from "@/hooks/useTranslation";
import { NextSeo } from "next-seo";

export default function IndexPage() {
  const { t } = useTranslation("components", "pages");

  return (
    <Page>
      <NextSeo title={`${t("contact")} | Netlify Template`} />
      <Section seq={1} imageSeq={7} />
      <Section seq={2} imageSeq={8} />
      <Section seq={3} imageSeq={9} />
    </Page>
  );
}
