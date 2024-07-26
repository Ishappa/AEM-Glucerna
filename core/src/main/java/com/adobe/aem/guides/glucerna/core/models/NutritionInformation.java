package com.adobe.aem.guides.glucerna.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import java.util.List;

@Model(adaptables = Resource.class,defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class NutritionInformation {
    private @ValueMapValue String nutritionInformationTitle;
    private @ValueMapValue String servingSizeInfm;
    private @ValueMapValue String tableTitle;
    private @ValueMapValue String tableValueTitle;
    private @ChildResource List<NutritionInformationChild> fieldNutrition;

    private @ValueMapValue String vitaminsAndMineralsTitle;
    private @ValueMapValue String vitaminsTitle;
    private @ValueMapValue String mineralTitle;
    private @ChildResource List<NutritionInformationChild> fieldVitamin;
    private @ChildResource List<NutritionInformationChild> fieldMineral;

    public String getNutritionInformationTitle() {
        return nutritionInformationTitle;
    }

    public String getServingSizeInfm() {
        return servingSizeInfm;
    }

    public String getTableTitle() {
        return tableTitle;
    }

    public String getTableValueTitle() {
        return tableValueTitle;
    }

    public String getVitaminsAndMineralsTitle() {
        return vitaminsAndMineralsTitle;
    }

    public String getVitaminsTitle() {
        return vitaminsTitle;
    }

    public String getMineralTitle() {
        return mineralTitle;
    }

    public List<NutritionInformationChild> getFieldNutrition() {
        return fieldNutrition;
    }

    public List<NutritionInformationChild> getFieldVitamin() {
        return fieldVitamin;
    }

    public List<NutritionInformationChild> getFieldMineral() {
        return fieldMineral;
    }
}
