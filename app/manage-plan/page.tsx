
import SchematicComponent from "@/components/schematic/SchematicComponent";


async function ManagePlan() {
  return (
    <div className="container xl:max-w-5xl mx-auto p-4 md:p-0">
      <h1 className="text-2xl font-bold mb-4 my-8">Manage Plan</h1>
      <p className="text-gray-600 mb-8">
        This is the page where you can manage your plan. You can upgrade, downgrade, or cancel your plan.
      </p>
      <SchematicComponent
        componentId={process.env.NEXT_PUBLIC_SCHEMATIC_CUSTOMER_PORTAL_COMPONENT_ID}
      />
    </div>
  )
}

export default ManagePlan
