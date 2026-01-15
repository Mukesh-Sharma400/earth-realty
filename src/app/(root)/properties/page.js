"use client";

import { PageHeader } from "@/app/components/PageHeader";
import BaseLayout from "../../components/BaseLayout";

export default function Properties() {
  const pageHeader = {
    heading: "Properties",
    description:
      "Dive into the realm of excellence with our tailored services, meticulously crafted for every space and vision. Discover the unparalleled quality of our offerings.",
  };
  return (
    <BaseLayout>
      <PageHeader pageHeader={pageHeader} />
    </BaseLayout>
  );
}
