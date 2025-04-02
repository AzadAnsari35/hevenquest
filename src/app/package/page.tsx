import Breadcrumb from "@/components/Breadcrumb";
import MembershipComparison from "@/components/MembershipComparison";
import Packages from "@/components/Packages";

export default function Home() {
  return (
    <div>
      <Breadcrumb
        title="Package Details"
        path="packages"
        backgroundImage="/img/bg/package.jpg"
      />
      <Packages />
      <MembershipComparison />
    </div>
  );
}
