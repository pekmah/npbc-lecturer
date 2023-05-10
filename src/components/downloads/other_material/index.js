import React from "react";
import OtherMaterialItem from "@/components/downloads/other_material/OtherMaterialItem";
import NotFound from "@/components/downloads/other_material/NotFound";

function OtherMaterial(props) {
  return (
    <div className={"py-10 px-5 md:px-0"}>
      <h5 className={"text-xl md:text-3xl font-medium mb-5 text-c-blue"}>
        Other Material
      </h5>

      <div className={"flex flex-col md:flex-row md:flex-wrap gap-8"}>
        {/*    Other Material Item  */}
        <OtherMaterialItem title={"Students' Manual/Handbook"} />
        <OtherMaterialItem title={"School Brochure"} />
        <OtherMaterialItem title={"Academic Calendar"} />
        <OtherMaterialItem title={"Graduation List"} />
        <OtherMaterialItem title={"School Magazine"} />
        <NotFound />
      </div>
    </div>
  );
}

export default OtherMaterial;
